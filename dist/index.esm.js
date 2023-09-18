/*!
* clone v1.0.0
* (c) 2023 undefined
* Released under the MIT License.
*/
import _Array$from from '@babel/runtime-corejs2/core-js/array/from';

var add = function add(a, b) {
  return a + b;
};

var clone = function clone() {
  var result = add('1', '2');
  console.log(_Array$from(result));
};

export { clone };
