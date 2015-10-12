'use strict';

function Parts (args) {
    args = args || {};
    this._chain = args.chain || this.defaultChain;
    this._tireSize = args.tireSize || this.defaultTireSize;
    this.postInitialize(args);
}

Parts.prototype = {
    constructor: Parts,
    get chain () {
        return this._chain;
    },

    get tireSize () {
        return this._tireSize;
    },

    get defaultChain () {
        return '10-speed';
    },

    get defaultTireSize () {
        throw 'defaultTireSize should be implemented';
    },

    spares: function () {
        return this._merge({
            tireSize: this.tireSize,
            chain: this.chain
        }, this.localSpares());
    },

    postInitialize: function (args) {
        return null;
    },

    localSpares: function () {
        return {};
    },

    _merge: function (dest, src) {
        Object.keys(src).forEach(function (key) {
            dest[key] = src[key];
        });
        return dest;
    }
}

module.exports = Parts;
