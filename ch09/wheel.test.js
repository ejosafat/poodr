describe('Wheel', function () {
    'use strict';

    var Wheel = require('./sources/wheel');
    var assert = require('chai').assert;

    var wheel;

    beforeEach(function () {
        wheel = new Wheel(26, 1.5);
    });

    it('implements the diameterizable interface', function () {
        assert.isDefined(wheel.diameter);
    });

    it('calculates diameter', function () {
        assert.closeTo(29, wheel.diameter, 0.01);
    });
});
