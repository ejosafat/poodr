describe('Gear', function () {
    'use strict';

    var Gear = require('./sources/gear');
    var Wheel = require('./sources/wheel');
    var assert = require('chai').assert;

    it('calculates gear inches', function () {
        var gear = new Gear({
            chainring: 52,
            cog: 11,
            wheel: new Wheel(26, 1.5)
        });

        assert.closeTo(137.1, gear.gearInches, 0.01);
    });
});
