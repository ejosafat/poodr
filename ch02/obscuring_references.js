'use strict';

function ObscuringReferences (data) {
    this.data = data;
}

ObscuringReferences.prototype = {
    constructor: ObscuringReferences,
    get data () {
        return this._data;
    },

    set data (value) {
        this._data = value;
    },

    get diameters () {
        // 0 is rim, 1 is tire
        return this.data.map(function (cell) {
            return cell[0] + (cell[1] * 2);
        });
    }
};

// rim and tire sizes (now in millimeters!) in a 2d array
var data = [[622, 20], [622, 23], [559, 30], [559, 40]];
var thing = new ObscuringReferences(data);
console.log(thing.diameters);

