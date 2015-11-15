'use strict';

var assert = require('chai').assert;

var test = function (subject) {
    console.log('subject:', subject);
    return it('implements the preparer interface', function () {
        assert.isFunction(subject.prepare_trip);
    });
};

module.exports = test;
