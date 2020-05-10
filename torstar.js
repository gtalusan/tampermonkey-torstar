// ==UserScript==
// @name         The Toronto Star Meter Wall Remover
// @supportURL   http://github.com/gtalusan/tampermonkey-torstar
// @namespace    http://github.com/gtalusan/
// @version      0.6
// @description  remove the meter div
// @author       You
// @match        https://www.thestar.com
// @match        https://www.thestar.com/*/*.html*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

window.__PRELOADED_CONFIG_DATA__.meterCounterName = "";
window.__PRELOADED_CONFIG_DATA__.meterMppApiCall = "";
window.__PRELOADED_CONFIG_DATA__.overlay = {};
window.__PRELOADED_CONFIG_DATA__.overlayRenew = {};
window.__PRELOADED_CONFIG_DATA__.overlaySubscriber = {};
