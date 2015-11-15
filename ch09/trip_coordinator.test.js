'use strict';

var TripCoordinator = require('./sources/trip_coordinator.js');
var preparerInterfaceTest = require('./test_includes/preparer.test.js');

describe('TripCoordinator', function () {
    preparerInterfaceTest(new TripCoordinator());

    // Specific tests
    // ...
});
