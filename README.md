## Installation

```
npm install vine-tools
```

## Getting Started

```js
import vineTools from 'vine-tools';

const vineTools = require('vine-tools');
```

## addCommas

```js
const result = vineTools.addCommas(number)

number ==> result
100001 ==> 100,001
200001.23 ==> 200,001.23

```

## decimalToPercentage

```js
const result = vineTools.decimalToPercentage(number)

number ==> result
0.89 ==> 89.00
0.23123 ==> 23.12

```


## random

```js
const result = vineTools.random()

result: [0, 100) random
const result = vineTools.random(10)

result: [0, 10) random
```


## License

[MIT](https://github.com/VineWeb/vine-tools).
