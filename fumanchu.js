/**
 * Created by Jason Smith on 11/10/14.
 */

var FuManchu = (function(document){
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
                throw new Error('Tag name is not a string.')
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

    return {
        docify: docify
    };

})(document);

/**
 * Convert the array, in "FuManchu" form, to HTML DOM.
 * @returns {HTMLBaseElement} The element, whatever it happens to be.
 */
Array.prototype.toHtml = function() {
    "use strict";
    return FuManchu.docify(this);
};
