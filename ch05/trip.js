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
            switch (preparer.prototype.constructor) {
                case Mechanic:
                    preparer.prepareBicycles(this.bicycles);
                    break;
                case TripCoordinator:
                    preparer.buyFood(this.customers);
                    break;
                case Driver:
                    preparer.gasUp(this.vehicle);
                    preparer.fillWaterTank(this.vehicle);
                    break;
            }
        });
    }

    // ...
};

function Mechanic () {
}

Mechanic.prototype = {
    constructor: Mechanic,

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

    buyFood: function (customers) {
        //...
    }
}

function Driver () {
}

Driver.prototype = {
    constructor: Driver,

    gasUp: function (vehicle) {
        //..
    },

    fillWaterTank: function (vehicle) {
        //..
    }
}
