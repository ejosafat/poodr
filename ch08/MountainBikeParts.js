'use strict';

var Parts = require('./Parts');
var extractFunctionBody = require('./extractFunctionBody');

var MountainBikeParts = new Function ("args", extractFunctionBody(Parts.toString()));
MountainBikeParts.prototype = Object.create(Parts.prototype);
MountainBikeParts.prototype.postInitialize = function (args) {
    this._frontShock = args.frontShock;
    this._rearShock = args.rearShock;
};

Object.defineProperty(MountainBikeParts.prototype, 'frontShock', {
    get: function () {
        return this._frontShock;
    }
});

Object.defineProperty(MountainBikeParts.prototype, 'rearShock', {
    get: function () {
        return this._rearShock;
    }
});

Object.defineProperty(MountainBikeParts.prototype, 'defaultTireSize', {
    get: function () {
        return '2.1';
    }
});

MountainBikeParts.prototype.localSpares = function () {
    return {
        rearShock:  this.rearShock,
        frontShock: this.frontShock
    };
};

module.exports = MountainBikeParts;
