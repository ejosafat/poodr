'use strict';

function Part (args) {
    this._name = args.name;
    this._description = args.description;
    this._needsSpare = (args.needsSpare !== void 0 ) ? args.needsSpare : true;
}

Part.prototype = {
    constructor: Part,
    get name () {
        return this._name;
    },

    get description () {
        return this._description;
    },

    get needsSpare () {
        return this._needsSpare;
    }
}

module.exports = Part;
