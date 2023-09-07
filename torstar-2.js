// ==UserScript==
// @name         The Toronto Star Meter API Blocker
// @supportURL   http://github.com/gtalusan/tampermonkey-torstar
// @namespace    http://github.com/gtalusan/tampermonkey-torstar
// @version      0.2
// @description  api blocker
// @author       You
// @match        https://www.thestar.com
// @match        https://www.thestar.com/*/*.html*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function(fetch) {
    window.fetch = function(url, data) {
        if (url.includes("ownlocal") || url.includes("user")) {
            console.log("bye bye " + url);
            return new Promise();
        }
        return fetch(url, data);
    }
})(window.fetch);

(function(open) {
    XMLHttpRequest.prototype.open = function(method, url, async, user, pass) {
        if (url.includes("ownlocal") || url.includes("api.thestar.com") || url.includes("user")) {
            console.log("bye bye " + url);
            return;
        }
        open.call(this, method, url, async, user, pass);
    };
})(XMLHttpRequest.prototype.open);
