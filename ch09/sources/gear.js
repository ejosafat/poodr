'use strict';

function Gear (args) {
    this.chainring = args.chainring;
    this.cog = args.cog;
    this.wheel = args.wheel;
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

    get wheel () {
        return this._wheel;
    },

    set wheel (value) {
        this._wheel = value;
    },

    get ratio () {
        return this.chainring / this.cog;
    },

    get gearInches () {
        return this.ratio * this.wheel.diameter;
    }
}

module.exports = Gear;
