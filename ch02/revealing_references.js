'use strict';

function RevealingReferences (data) {
    this.wheels = wheelify(data);
}

RevealingReferences.prototype = {
    constructor: RevealingReferences,

    get wheels () {
        return this._wheels;
    },

    set wheels (value) {
        this._wheels = value;
    },

    get diameters () {
        // 0 is rim, 1 is tire
        return this.wheels.map(function (wheel) {
            return wheel.rim + (wheel.tire * 2);
        });
    }
};

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
    }
};

function wheelify (data) {
    return data.map(function (cell) {
        return new Wheel(cell[0], cell[1]);
    });
}

// rim and tire sizes (now in millimeters!) in a 2d array
var data = [[622, 20], [622, 23], [559, 30], [559, 40]];
var thing = new RevealingReferences(data);
console.log(thing.diameters);
