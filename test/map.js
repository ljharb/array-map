var map = require('../');
var test = require('tape');

test('numbers -> letters', function (t) {
    t.plan(2);
    var a = map([97,98,99], function (c) {
        return String.fromCharCode(c);
    });
    t.equal(a.join(''), 'abc');
    
    var b = map(cripple([97,98,99]), function (c) {
        return String.fromCharCode(c);
    });
    t.equal(b.join(''), 'abc');
});

function cripple (xs) {
    xs.map = undefined;
    return xs;
}
