'use strict';

function extractFunctionBody (funStr) {
    var source = funStr.split('\n');
    source.shift();
    source.pop();
    return source.join('\n');
}

module.exports = extractFunctionBody;
