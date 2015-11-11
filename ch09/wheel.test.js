describe('Wheel', function () {
    'use strict';

    var Wheel = require('./sources/wheel');
    var assert = require('chai').assert;

    it('calculates diameter', function () {
        var wheel = new Wheel(26, 1.5);

        assert.closeTo(29, wheel.diameter, 0.01);
    });
});
