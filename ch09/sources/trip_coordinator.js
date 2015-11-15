'use strict'

function TripCoordinator () {
}

TripCoordinator.prototype = {
    constructor: TripCoordinator,

    prepare_trip: function (trip) {
        this.buyFood(trip.customers);
    },

    buyFood: function (customers) {}
}

module.exports = TripCoordinator;
