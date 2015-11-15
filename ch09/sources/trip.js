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
};
