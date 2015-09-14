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

    prepare: function (mechanic) {
        mechanic.prepareBicycles(this.bicycles);
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
