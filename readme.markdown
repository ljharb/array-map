# array-map

`[].map(f)` for older browsers

# example

``` js
var map = require('array-map');
var letters = map([97,98,99], function (c) {
    return String.fromCharCode(c);
});
console.log(letters.join(''));
```

output:

```
abc
```

# methods

``` js
var map = require('array-map')
```

## var ys = map(xs, f)

Create a new array `ys` by applying `f(xs[i], i, xs)` to each element in `xs` at
index `i`.

# install

With [npm](https://npmjs.org) do:

```
npm install array-map
```

# license

MIT
