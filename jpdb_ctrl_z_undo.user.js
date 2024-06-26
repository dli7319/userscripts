// ==UserScript==
// @name         JPDB review: Ctrl+z to undo.
// @namespace    https://github.com/dli7319/userscripts
// @version      2024-03-31
// @description  Ctrl+z to undo.
// @author       You
// @match        https://jpdb.io/review
// @icon         https://www.google.com/s2/favicons?sz=64&domain=jpdb.io
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener("keydown", (event) => {
        if (event.key == 'z' && (event.ctrlKey || event.metaKey)) {
            history.back();
        }
    });
})();
