'use strict';

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

module.exports = Wheel;
