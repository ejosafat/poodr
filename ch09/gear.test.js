describe('Gear', function () {
    'use strict';

    var Gear = require('./sources/gear');
    var assert = require('chai').assert;
    var diameterizable = {
        diameter: 10
    };

    it('calculates gear inches', function () {
        var gear = new Gear({
            chainring: 52,
            cog: 11,
            wheel: diameterizable
        });

        assert.closeTo(47.27, gear.gearInches, 0.01);
    });
});
