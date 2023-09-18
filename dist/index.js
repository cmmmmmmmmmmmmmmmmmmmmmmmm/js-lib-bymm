/*!
* clone v1.0.0
* (c) 2023 undefined
* Released under the MIT License.
*/
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _Array$from = _interopDefault(require('@babel/runtime-corejs2/core-js/array/from'));

var add = function add(a, b) {
  return a + b;
};

var clone = function clone() {
  var result = add('1', '2');
  console.log(_Array$from(result));
};

exports.clone = clone;
