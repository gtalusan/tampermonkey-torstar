// ==UserScript==
// @name         The Toronto Star Meter Wall Remover
// @supportURL   http://github.com/gtalusan/tampermonkey-torstar
// @namespace    http://github.com/gtalusan/
// @version      0.4
// @description  remove the meter div
// @author       You
// @match        https://www.thestar.com
// @match        https://www.thestar.com/*/*.html*
// @grant        none
// @run-at       document-idle
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(function() {
        var meter = document.getElementsByClassName('articleMeterWall')[0];
        if (!meter) {
           console.log("no meter wall");
           return;
        }
        var meterParent = meter.parentNode; /* get the empty div */
        var meterGrandparent = meterParent.parentNode;
        meterGrandparent.removeChild(meterParent);
    }, 1000);
    setTimeout(function() {
        $('p').filter(function() {
            return $(this).css('display') == 'none' && !$(this).hasClass('print-header') && !$(this).hasClass('print-footer');
        }).css('display', 'block');
    }, 1000);
    setTimeout(function() {
        var banner = document.getElementsByClassName('meter-banner')[0];
        if (!banner) {
            console.log("no banner");
            return;
        }
        var bannerParent = banner.parentNode;
        bannerParent.removeChild(banner);
    }, 1000);
})();
