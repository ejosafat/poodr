'use strict';

var Wheel = require('./wheel');

function Gear (args) {
    this.chainring = args.chainring;
    this.cog = args.cog;
    this.rim = args.rim;
    this.tire = args.tire;
}

Gear.prototype = {
    constructor: Gear,
    get chainring () {
        return this._chainring;
    },

    set chainring (value) {
        this._chainring = value;
    },

    get cog () {
        return this._cog;
    },

    set cog (value) {
        this._cog = value;
    },

    get rim () {
        return this._rim;
    },

    set rim (value) {
        this._rim = value;
    },

    get tire () {
        return this._tire;
    },

    set tire (value) {
        this._tire = value;
    },

    get ratio () {
        return this.chainring / this.cog;
    },

    get gearInches () {
        return this.ratio * (new Wheel(this.rim, this.tire)).diameter;
    }
}

module.exports = Gear;
