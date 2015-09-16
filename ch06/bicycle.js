'use strict';

function Bicycle (args) {
    this._style = args.style;
    this._size = args.size;
    this._tapeColor = args.tapeColor;
    this._frontShock = args.frontShock;
    this._rearShock = args.rearShock;
}

Bicycle.prototype = {
    constructor: Bicycle,

    get size () {
        return this._size;
    },

    get tapeColor () {
        return this._tapeColor;
    },

    get style () {
        return this._style;
    },

    get frontShock () {
        return this._frontShock;
    },

    get rearShock () {
        return this._rearShock;
    },

    get spares () {
        if (this.style === 'road') {
            return {
                chain: '10-speed',
                tireSize: '23',
                tapeColor: this.tapeColor
            };
        } else {
            return {
                chain: '10-speed',
                tireSize: '2.1',
                rearShock: this.rearShock
            };
        }
    }

    //...
}

var bike = new Bicycle({
    style: 'mountain',
    size: 'S',
    frontShock: 'Manitou',
    rearShock: 'Fox'
});

console.log(bike.spares);
