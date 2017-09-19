// ==UserScript==
// @name         KissCartoon Anti-Adblock Killer
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  This is a workaround for defeating the anti-adblock message posted on KissCartoon's service.
// @author       Rumudiez
// @match        http://*/*
// @grant        none
// @include      http://kisscartoon.*/*
// @include      https://kisscartoon.*/*
// @grant        unsafeWindow
// ==/UserScript==

(function() {
    'use strict';

    window.check_adblock = null;
    if (typeof request_link === 'function') {
        request_link();
    }
})();
