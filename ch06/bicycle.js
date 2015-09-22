'use strict';

function Bicycle (args) {
    args = args || {};
    this._size = args.size;
    this._chain = args.chain || this.defaultChain;
    this._tireSize = args.tireSize || this.defaultTireSize;
}

Bicycle.prototype = {
    constructor: Bicycle,

    get size () {
        return this._size;
    },

    get chain () {
        return this._chain;
    },

    get tireSize () {
        return this._tireSize;
    },

    get defaultChain () {
        return '10-speed';
    },

    get defaultTireSize () {
        throw 'defaultTireSize should be implemented';
    },

    spares: function () {
        return {
            tireSize: this.tireSize,
            chain: this.chain
        };
    }
}

function RoadBike (args) {
    this._tapeColor = args.tapeColor;
    Bicycle.call(this, args);
}

RoadBike.prototype = Object.create(Bicycle.prototype);
RoadBike.prototype.constructor = RoadBike;

Object.defineProperty(RoadBike.prototype, 'tapeColor', {
    get: function () {
        return this._tapeColor;
    }
});

Object.defineProperty(RoadBike.prototype, 'defaultTireSize', {
    get: function () {
        return '23';
    }
});

RoadBike.prototype.spares = function () {
    var parts = Bicycle.prototype.spares.call(this) || {};
    parts.tapeColor = this.tapeColor;
    return parts;
};

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

Object.defineProperty(MountainBike.prototype, 'defaultTireSize', {
    get: function () {
        return '2.1';
    }
});

MountainBike.prototype.spares = function () {
    var parts = Bicycle.prototype.spares.call(this) || {};
    console.log('mountain parts: ', parts);
    parts.rearShock = this.rearShock;
    parts.frontShock = this.frontShock;
    return parts;
};

var roadBike = new RoadBike({
        size: 'M',
        tapeColor: 'red'
});
console.log(roadBike.spares());

var mountainBike = new MountainBike({
        size: 'S',
        frontShock: 'Manitou',
        rearShock: 'Fox'
});
console.log(mountainBike.spares());
