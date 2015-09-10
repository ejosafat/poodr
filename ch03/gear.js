'use strict';

function Gear (chainring, cog) {
    this.chainring = chainring;
    this.cog = cog;
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

    get ratio () {
        return this.chainring / this.cog;
    },

    gearInches: function (diameter) {
        return this.ratio * diameter;
    }
}

function Wheel (rim, tire, chainring, cog) {
    this.rim = rim;
    this.tire = tire;
    this.gear = new Gear(chainring, cog);
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

    get gear () {
        return this._gear;
    },

    set gear (value) {
        this._gear = value;
    },

    get diameter () {
        return this.rim + (this.tire * 2);
    },

    get gearInches () {
        return this.gear.gearInches(this.diameter);
    },

    get circumference () {
        return this.diameter * Math.PI;
    }
};

var wheel = new Wheel(26, 1.5, 52, 11);
console.log(wheel.gearInches);
