'use strict';

var Parts = require('./Parts');

var partsFactory = {
    build: function (config, PartsClass) {
        PartsClass = PartsClass || Parts;

        return new PartsClass(config.map(createPart));
    }
};

function createPart (partConfig) {
    return {
        name: partConfig[0],
        description: partConfig[1],
        needsSpare: partConfig[2] === void 0 ? true : partConfig[2]
    }
}

module.exports = partsFactory;
