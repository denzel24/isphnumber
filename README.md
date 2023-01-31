# isphnumber
Returns true if the given value is a Philippine mobile number format

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save isphnumber
```
## Usage

Works with strings or numbers.

```js
const isphnum = require('isphnumber');

console.log(isphnum(639123456789)); //=> true
console.log(isphnum('639123456789')); //=> true
console.log(isphnum('09123456789')); //=> true
console.log(isphnum('+639123456789')); //=> true

console.log(isphnum('+63 912 345 678913')); //=> false
console.log(isphnum('63 912 345 678932')); //=> false
```
