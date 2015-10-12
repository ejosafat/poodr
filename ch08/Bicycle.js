'use strict';

function Bicycle (args) {
    args = args || {};
    this._size = args.size;
    this._parts = args.parts;
}

Bicycle.prototype = {
    constructor: Bicycle,

    get size () {
        return this._size;
    },

    get parts () {
        return this._parts;
    },

    spares: function () {
        return this.parts.spares();
    }
}

module.exports = Bicycle;

