// ==UserScript==
// @name         JPDB review: Press enter to show answer.
// @namespace    https://github.com/dli7319/userscripts
// @version      2024-03-31
// @description  Press enter to show answer.
// @author       You
// @match        https://jpdb.io/review
// @icon         https://www.google.com/s2/favicons?sz=64&domain=jpdb.io
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function showAnswer() {
        const showAnswerButton = document.getElementById("show-answer");
        if (showAnswerButton) {
            showAnswerButton.click();
        }
    }

    document.addEventListener("keypress", (event) => {
        if (event.key === 'Enter') {
            showAnswer();
        }
    });
})();
