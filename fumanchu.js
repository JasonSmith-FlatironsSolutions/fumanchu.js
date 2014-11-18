/**
 * Client-side JavaScript templating that is light, fast, and all JavaScript.
 * @copyright Copyright (c) 2014 Jason Smith
 * @license MIT
 * @module fumanchu.js
 * @author Jason Smith
 */
(function(document){
    "use strict";

    /**
     * TODO: A proper write up.
     * @param {array<*>} struct Array representing HTML markup.
     * @returns {element} Document element generated from {@link struct}.
     */
    function docify(struct) {
        (function doChecks() {
            if (!Array.isArray(struct)) {
                throw new Error('Expected array.');
            }

            if (struct.length < 1) {
                throw new Error('Empty array. Expected tag name.');
            }

            if (Object.prototype.toString.call(struct[0]) !== '[object String]') {
                throw new Error('Tag name is not a string: ' + JSON.stringify(struct[0]));
            }
        })();

        var elt = document.createElement(struct[0]),
            start = 1;

        (function addAttributes() {
            if (struct.length >= 2 && Object.prototype.toString.call(struct[1]) === '[object Object]') {
                Object.keys(struct[1]).forEach(function (k) {
                    elt.setAttribute(k, struct[1][k]);
                });
                start++;
            }
        })();

        (function addElements() {
            for (var i = start; i < struct.length; i++) {
                if (Array.isArray(struct[i])) {
                    elt.appendChild(docify(struct[i]));
                } else {
                    elt.appendChild(document.createTextNode(struct[i].toString()));
                }
            }
        })();

        return elt;
    }

    if(document && !Array.prototype.toHtml) {
        Object.defineProperty(
            Array.prototype,
            'toHtml',
            {
                enumerable: false,
                configurable: true,
                writable: true,
                value: function toHtml() {
                    return docify(this);
                }
            });
    }
})(document);


