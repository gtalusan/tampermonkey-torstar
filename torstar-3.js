// ==UserScript==
// @name         The Toronto Star Subscriber Wall Remover
// @supportURL   http://github.com/gtalusan/tampermonkey-torstar
// @namespace    http://github.com/gtalusan/
// @version      0.9
// @description  remove the meter div and re-block/unhide subscriber-only elements
// @author       You
// @match        https://www.thestar.com
// @match        https://www.thestar.com/*/*.html*
// @grant        none
// @run-at       document-idle
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

$(".ReactModalPortal").remove();
setInterval(function() {
    $(".subscriber-only").each(function() {
        $(this).removeAttr("hidden");
        $(this).css("display", "block");
        $(this).removeClass("subscriber-only");
    });
    $(".subscriber-offers").each(function() {
        $(this).remove();
    });
    $(".subscriber-preview").each(function() {
        $(this).removeClass("last-preview");
    });
    $(".access-offers-modal").each(function() {
        $(this).remove();
    });
    $(".tsArticle").each(function() {
        $(this).removeAttr("hidden");
    });
    $(".modal").each(function() {
        $(this).remove();
    });
    $(".modal-backdrop").each(function() {
        $(this).remove();
    });
    $("html,body").css("overflow","auto").removeClass("modal-open");
}, 1500);
