'use strict';

function Gear (args) {
    this.chainring = args.chainring;
    this.cog = args.cog;
    this.wheel = args.wheel;
    this.observer = args.observer;
}

Gear.prototype = {
    constructor: Gear,

    setCog: function (newCog) {
        this.cog = newCog;
        this.changed();
    },

    setChainring: function (newChainring) {
        this.chainring = newChainring;
        this.changed();
    },

    changed: function () {
        this.observer.changed(this.chainring, this.cog);
    },

    get observer () {
        return this._observer;
    },

    set observer (value) {
        this._observer = value;
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
        this._wheel = value;
    },

    get observer () {
        return this._observer;
    },

    set observer (value) {
        this._observer = value;
    },

    get ratio () {
        return this.chainring / this.cog;
    },

    get gearInches () {
        return this.ratio * this.wheel.diameter;
    }
}

module.exports = Gear;
