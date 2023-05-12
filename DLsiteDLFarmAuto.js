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
    let url = "/home/event/dlfarm/ajax"
    let data = { act: "show" }
    //let data = { act: "draw" }
    $.getJSON(url, data).then(
        function (json) {
            console.log(json)
            if (json.class[1] == "logged_in") {
                data = { act: "draw" }
                $.getJSON(url, data).then(
                    function (result) {
                        console.log(result)
                    }
                )
            }
        }
    )
})();

/*
{ act: "show" }
{
    "class": [
        "spring_01",
        "logout"
    ]
}
{
    "class": [
        "spring_01",
        "logged_in"
    ]
}
{
    "class": [
        "spring_01",
        "end",
        "type_02"
    ]
}

{ act: "draw" }
{
    "class": [
        "type_02"
    ],
    "name": "タンポポ"
}
{
    "class": [
        "error"
    ]
}
*/
