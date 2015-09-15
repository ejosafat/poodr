'use strict';

function Trip () {
}

Trip.prototype = {
    constructor: Trip,

    get bicycles () {
        return this._bicycles;
    },

    get customers () {
        return this._customers;
    }

    get vehicle () {
        return this._vehicle;
    }

    prepare: function (preparers) {
        preparers.forEach(function (preparer) {
            preparer.prepare_trip(this);
        }.bind(this));
    }

    // ...
};

function Mechanic () {
}

Mechanic.prototype = {
    constructor: Mechanic,

    prepare_trip: function (trip) {
        trip.bicycles.forEach(this.prepareBicycles.bind(this));
    },

    prepareBicycles: function (bicycles) {
        bicycles.forEach(this.prepareBicycle.bind(this));
    },

    prepareBicycle: function (bicycle) {
        // ...
    }
}

function TripCoordinator () {
}

TripCoordinator.prototype = {
    constructor: TripCoordinator,

    prepare_trip: function (trip) {
        this.buyFood(trip.customers);
    },

    buyFood: function (customers) {
        //...
    }
}

function Driver () {
}

Driver.prototype = {
    constructor: Driver,

    prepare_trip: function (trip) {
        var vehicle = trip.vehicle;
        this.gasUp(vehicle);
        this.fillWaterTank(vehicle);
    },

    gasUp: function (vehicle) {
        //..
    },

    fillWaterTank: function (vehicle) {
        //..
    }
}
