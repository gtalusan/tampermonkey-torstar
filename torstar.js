// ==UserScript==
// @name         The Toronto Star Meter Wall Remover
// @supportURL   http://github.com/gtalusan/tampermonkey-torstar
// @namespace    http://github.com/gtalusan/
// @version      0.2
// @description  remove the meter div
// @author       You
// @match        https://www.thestar.com
// @match        https://www.thestar.com/*/*.html*
// @grant        none
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
        var banner = document.getElementsByClassName('meter-banner')[0];
        if (!banner) {
            console.log("no banner");
            return;
        }
        var bannerParent = banner.parentNode;
        bannerParent.removeChild(banner);
    }, 1000);
})();
