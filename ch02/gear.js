'use strict';

function Gear (chainring, cog, rim, tire) {
    this.chainring = chainring;
    this.cog = cog;
    this.rim = rim;
    this.tire = tire;
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
        return this.ratio * this.diameter;
    },

    get diameter () {
        return this.rim + (this.tire * 2);
    }
}

console.log((new Gear(52, 11, 26, 1.5)).gearInches);
console.log((new Gear(52, 11, 24, 1.25)).gearInches);

// We can have instances initialised in other parts of the app using just 2 arguments as it used to be
// and then try to use in the new area
console.log((new Gear(52, 11)).gearInches); // NaN
