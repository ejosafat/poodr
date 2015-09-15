'use strict';

function Bicycle (args) {
    this._size = args.size;
    this._tapeColor = args.tapeColor;
}

Bicycle.prototype = {
    constructor: Bicycle,

    get size () {
        return this._size;
    },

    get tapeColor () {
        return this._tapeColor;
    },

    get spares () {
        return {
            chain: '10-speed',
            tireSize: '23',
            tapeColor: this.tapeColor
        };
    }

    //...
}

var bike = new Bicycle({
    size: 'M',
    tapeColor: 'red'
});

console.log(bike.size);
console.log(bike.spares);
