'use strict';

var Driver = require('./sources/driver.js');
var preparerInterfaceTest = require('./test_includes/preparer.test.js');

describe('Driver', function () {
    preparerInterfaceTest(new Driver());

    // Specific tests
    // ...
});
