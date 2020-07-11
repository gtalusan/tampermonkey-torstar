// ==UserScript==
// @name         The Toronto Star Subscriber Wall Remover
// @supportURL   http://github.com/gtalusan/tampermonkey-torstar
// @namespace    http://github.com/gtalusan/
// @version      0.6
// @description  remove the meter div
// @author       You
// @match        https://www.thestar.com
// @match        https://www.thestar.com/*/*.html*
// @grant        none
// @run-at       document-idle
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

$(".ReactModalPortal").remove();
