'use strict';

function Bicycle (args) {
    args = args || {};
    this._size = args.size;
    this._chain = args.chain || this.defaultChain;
    this._tireSize = args.tireSize || this.defaultTireSize;
    this.postInitialize(args);
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
        return this._merge({
            tireSize: this.tireSize,
            chain: this.chain
        }, this.localSpares());
    },

    postInitialize: function (args) {
        return null;
    },

    localSpares: function () {
        return {};
    },

    _merge: function (dest, src) {
        Object.keys(src).forEach(function (key) {
            dest[key] = src[key];
        });
        return dest;
    }
}

// This is the only way of creating a RoadBike 'child' that uses Bicycle code as a constructor
// without calling it explicitly from a RoadBike function with call or apply.
var RoadBike = new Function ("args", extractFunctionBody(Bicycle.toString()));
RoadBike.prototype = Object.create(Bicycle.prototype);
RoadBike.prototype.postInitialize = function (args) {
    this._tapeColor = args.tapeColor;
};

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

RoadBike.prototype.localSpares = function () {
    return {
        tapeColor: this.tapeColor
    };
};

// This is the only way of creating a MountainBike 'child' that uses Bicycle code as a constructor
// without calling it explicitly from a RoadBike function with call or apply.
var MountainBike = new Function ("args", extractFunctionBody(Bicycle.toString()));
MountainBike.prototype = Object.create(Bicycle.prototype);
MountainBike.prototype.postInitialize = function (args) {
    this._frontShock = args.frontShock;
    this._rearShock = args.rearShock;
};

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

MountainBike.prototype.localSpares = function () {
    return {
        rearShock:  this.rearShock,
        frontShock: this.frontShock
    };
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

function extractFunctionBody (funStr) {
    var source = funStr.split('\n');
    source.shift();
    source.pop();
    return source.join('\n');
}
