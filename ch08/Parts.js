'use strict';

function Parts (parts) {
    this._parts = parts;
}

Parts.prototype = {
    constructor: Parts,
    get parts () {
        return this._parts;
    },

    spares: function () {
        return this.parts.filter(function (part) {
            return part.needsSpare;
        });
    }
}

module.exports = Parts;
