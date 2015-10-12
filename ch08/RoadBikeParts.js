'use strict';

var Parts = require('./Parts.js');
var extractFunctionBody = require('./extractFunctionBody');

var RoadBikeParts = new Function ("args", extractFunctionBody(Parts.toString()));
RoadBikeParts.prototype = Object.create(Parts.prototype);
RoadBikeParts.prototype.postInitialize = function (args) {
    this._tapeColor = args.tapeColor;
};

Object.defineProperty(RoadBikeParts.prototype, 'tapeColor', {
    get: function () {
        return this._tapeColor;
    }
});

Object.defineProperty(RoadBikeParts.prototype, 'defaultTireSize', {
    get: function () {
        return '23';
    }
});

RoadBikeParts.prototype.localSpares = function () {
    return {
        tapeColor: this.tapeColor
    };
};

module.exports = RoadBikeParts;
