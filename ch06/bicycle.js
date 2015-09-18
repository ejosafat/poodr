'use strict';

function Bicycle (args) {
}

Bicycle.prototype = {
    constructor: Bicycle,
}

function RoadBike (args) {
    this._size = args.size;
    this._tapeColor = args.tapeColor;
}

RoadBike.prototype = Object.create(Bicycle.prototype);
RoadBike.prototype.constructor = RoadBike;

Object.defineProperty(RoadBike.prototype, 'size', {
    get: function () {
        return this._size;
    }
});

Object.defineProperty(RoadBike.prototype, 'tapeColor', {
    get: function () {
        return this._tapeColor;
    }
});

Object.defineProperty(RoadBike.prototype, 'spares', {
    get: function () {
        return {
            chain: '10-speed',
            tireSize: '23',
            tapeColor: this.tapeColor
        };
    }
});

function MountainBike (args) {
    this._frontShock = args.frontShock;
    this._rearShock = args.rearShock;
    Bicycle.call(this, args);
}

MountainBike.prototype = Object.create(Bicycle.prototype);
MountainBike.prototype.constructor = MountainBike;

Object.defineProperty(MountainBike.prototype, 'frontShock', {
    get: function () {
        return this._frontShock;
    }
});

Object.defineProperty(MountainBike.prototype, 'rearShock', {
    get: function () {
        return this._rearShock;
    }
});

Object.defineProperty(MountainBike.prototype, 'spares', {
    get: function () {
        var parts = Bicycle.prototype.spares || {};
        parts.rearShock = this.rearShock;
        parts.frontShock = this.frontShock;
        return parts;
    }
});

var roadBike = new RoadBike({
    size: 'M',
    tapeColor: 'red'
});
console.log(roadBike.size);

var mountainBike = new MountainBike({
    size: 'S',
    frontShock: 'Manitou',
    rearShock: 'Fox'
});
console.log(mountainBike.size);
