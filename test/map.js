var map = require('../');
var test = require('tape');

test('numbers -> letters', function (t) {
    t.plan(1);
    var letters = map([97,98,99], function (c) {
        return String.fromCharCode(c);
    });
    t.equal(letters.join(''), 'abc');
});
