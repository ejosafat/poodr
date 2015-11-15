'use strict';

var Mechanic = require('./sources/mechanic.js');
var preparerInterfaceTest = require('./test_includes/preparer.test.js');

describe('Mechanic', function () {
    preparerInterfaceTest(new Mechanic());

    // Specific tests
    // ...
});
