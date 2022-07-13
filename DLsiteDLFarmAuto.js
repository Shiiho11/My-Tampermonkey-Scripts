// ==UserScript==
// @name         DLsite DL Farm Auto
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  DLsite DL Farm Auto
// @author       Shiiho
// @match        https://www.dlsite.com/*
// @icon         https://www.dlsite.com/images/web/common/favicon.ico
// @grant        none
// ==/UserScript==

(function () {
    let url = "/home/event/dlfarm/ajax";
    let data = { act: "draw" };
    let result = jQuery.getJSON(url, data);
    console.log(result);
})();
