// ==UserScript==
// @name         The Toronto Star Paywall Remover
// @supportURL   http://github.com/gtalusan/tampermonkey-torstar
// @namespace    http://github.com/gtalusan/tampermonkey-torstar
// @version      1.0
// @description  unhide subscriber-only content and remove paywall offers
// @author       You
// @match        https://www.thestar.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // modal content that marks a paywall prompt (sign-in dialogs are spared)
    const PAYWALL_TEXT = /subscri|offer|trial|unlimited|paywall|meter/i;

    function sweep() {
        // premium paragraphs are served to everyone but hidden from anonymous
        // readers with an inline display:none; unhide and drop the class so
        // the site's own CSS/JS can't re-hide them
        document.querySelectorAll('.subscriber-only').forEach(function(el) {
            el.style.display = 'block';
            el.removeAttribute('hidden');
            el.classList.remove('subscriber-only');
        });

        // remove the fade marker the site puts on the last preview paragraph
        document.querySelectorAll('.subscriber-preview').forEach(function(el) {
            el.classList.remove('last-preview');
        });

        // remove offer blocks and prompt anchors
        document.querySelectorAll('.subscriber-offers, .access-offers-modal, .access-offers-in-page, .subscriber').forEach(function(el) {
            el.remove();
        });

        // remove paywall modals, leave sign-in dialogs alone
        document.querySelectorAll('.modal').forEach(function(el) {
            if (PAYWALL_TEXT.test(el.textContent.slice(0, 500))) {
                el.remove();
            }
        });
        // and any backdrop left orphaned once no modal remains
        if (!document.querySelector('.modal')) {
            document.querySelectorAll('.modal-backdrop').forEach(function(el) {
                el.remove();
            });
        }

        // release any scroll lock
        [document.documentElement, document.body].forEach(function(el) {
            if (!el) { return; }
            if (el.style.overflow === 'hidden') { el.style.overflow = ''; }
            el.classList.remove('modal-open');
        });
    }

    // debounce so bursts of DOM changes collapse into one sweep
    let scheduled = false;
    function scheduleSweep() {
        if (scheduled) { return; }
        scheduled = true;
        setTimeout(function() {
            scheduled = false;
            sweep();
        }, 200);
    }

    function start() {
        sweep();
        // the site re-applies hiding when its access scripts finish loading,
        // so watch for class/style/hidden changes and new nodes
        new MutationObserver(function(mutations) {
            for (const mutation of mutations) {
                if (mutation.type === 'attributes') {
                    scheduleSweep();
                    return;
                }
                for (const node of mutation.addedNodes) {
                    if (node.nodeType === 1) {
                        scheduleSweep();
                        return;
                    }
                }
            }
        }).observe(document.documentElement, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['class', 'style', 'hidden']
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start, { once: true });
    } else {
        start();
    }
})();
