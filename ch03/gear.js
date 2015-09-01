'use strict';

function Gear (chainring, cog, rim, tire) {
    this.chainring = chainring;
    this.cog = cog;
    this.wheel = new Wheel(rim, tire);
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

function Wheel (rim, tire) {
    this.rim = rim;
    this.tire = tire;
}

Wheel.prototype = {
    constructor: Wheel,
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

    get diameter () {
        return this.rim + (this.tire * 2);
    },

    get circumference () {
        return this.diameter * Math.PI;
    }
};

console.log((new Gear(52, 11, 26, 1.5)).gearInches);
