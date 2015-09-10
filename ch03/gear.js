'use strict';

function Gear (args) {
    if (args === void 0) args = {};
    args = this._mergeDefaults(args, this.defaults);
    this.chainring = args.chainring;
    this.cog = args.cog;
    // Problem: when arguments are booleans
    // We'll never accept false as an argument in this case
    // this.something = args.something || true
    this.wheel = args.wheel;
}

Gear.prototype = {
    constructor: Gear,

    get defaults () {
        return {
            chainring: 40,
            cog: 18
        }
    },

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
        this._wheel = wheel;
    },

    get ratio () {
        return this.chainring / this.cog;
    },

    get gearInches () {
        return this.ratio * this.wheel.diameter;
    },

    _mergeDefaults: function (args, defaults) {
        Object.keys(defaults).forEach(function (key) {
            if (args[key] === void 0) {
                args[key] = defaults[key];
            }
        });
        return args;
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

var wheel = new Wheel(26, 1.5);
console.log(wheel.circumference);
console.log((new Gear({
    chainring: 52,
    cog: 11,
    wheel: wheel
})).gearInches);
console.log((new Gear({
    chainring: 52,
    cog: 11
})).ratio);
console.log((new Gear()).ratio);
