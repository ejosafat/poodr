describe('Gear', function () {
    'use strict';

    var Gear = require('./sources/gear');
    var assert = require('chai').assert;
    var sinon = require('sinon');
    var diameterizable = {
        diameter: 10
    };
    var observer = {
        changed: function () {}
    };
    var mockObserver;
    var gear;

    beforeEach(function () {
        mockObserver = sinon.mock(observer);
        gear = new Gear({
            chainring: 52,
            cog: 11,
            wheel: diameterizable,
            observer: observer
        });
    });

    afterEach(function () {
        mockObserver.restore();
    });

    it('calculates gear inches', function () {
        assert.closeTo(47.27, gear.gearInches, 0.01);
    });

    it('notifies observers when cogs change', function () {
        mockObserver.expects('changed').once().withArgs(52, 27);
        gear.setCog(27);
        mockObserver.verify();
    });

    it('notifies observers when chainrings change', function () {
        mockObserver.expects('changed').once().withArgs(42, 11);
        gear.setChainring(42);
        mockObserver.verify();
    });

});
