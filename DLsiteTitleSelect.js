// ==UserScript==
// @name         DLsite Title Select
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  DLsite Title Select
// @author       Shiiho
// @match        https://www.dlsite.com/*
// @icon         https://www.dlsite.com/images/web/common/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    let title = document.getElementById("work_name");
    if(title != null){
        title.style.userSelect = "text";
    }
})();
