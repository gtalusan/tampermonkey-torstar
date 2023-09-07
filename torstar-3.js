// ==UserScript==
// @name         The Toronto Star Subscriber Wall Remover
// @supportURL   http://github.com/gtalusan/tampermonkey-torstar
// @namespace    http://github.com/gtalusan/
// @version      0.7
// @description  remove the meter div and re-block/unhide subscriber-only elements
// @author       You
// @match        https://www.thestar.com
// @match        https://www.thestar.com/*/*.html*
// @grant        none
// @run-at       document-idle
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

$(".ReactModalPortal").remove();
setTimeout(function() {
    $(".subscriber-only").each(function() {
        $(this).removeAttr("hidden");
        $(this).css("display", "block");
    });
    $(".subscriber-offers").each(function() {
        $(this).remove();
    });
    $(".subscriber-preview").each(function() {
        $(this).removeClass("last-preview");
    });
}, 1500);