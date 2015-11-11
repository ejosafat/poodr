describe('Gear', function () {
    'use strict';

    var Gear = require('./sources/gear');
    var assert = require('chai').assert;

    it('calculates gear inches', function () {
        var gear = new Gear({
            chainring: 52,
            cog: 11,
            rim: 26,
            tire: 1.5
        });

        assert.closeTo(137.1, gear.gearInches, 0.01);
    });
});
