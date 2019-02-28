uuid-64
=====
> Codec between uuid and d64

## Install
```
$ npm install uuid-d64
```

## Usage
```javascript
const { encode, decode } = require('uuid-d64');

const id = uuid();
const encoded = encode(id);
const decoded = decode(encoded);

console.log(id);
console.log(encoded);
console.log(decoded);
```

## API

### encode(str)
Encodes uuid to d64

### decode(str)
Decodes d64 to uuid

#### str
Type: `String`

## Benchmark
```
$ node bench.js
check x 240,661 ops/sec ±0.84% (89 runs sampled)
uuid-d64 x 724,673 ops/sec ±0.78% (94 runs sampled)
uuid-base64 x 419,574 ops/sec ±0.83% (92 runs sampled)
Fastest encoder is uuid-d64
check x 335,976 ops/sec ±45.06% (86 runs sampled)
uuid-d64 x 1,400,018 ops/sec ±1.56% (89 runs sampled)
uuid-base64 x 1,330,022 ops/sec ±2.11% (85 runs sampled)
Fastest decoder is uuid-d64
```

## License
Source files are distributed under the Apache Version 2.0 license found in the LICENSE file.
