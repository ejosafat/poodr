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
    }
}

console.log((new Gear(52, 11)).ratio);
console.log((new Gear(30, 27)).ratio);
