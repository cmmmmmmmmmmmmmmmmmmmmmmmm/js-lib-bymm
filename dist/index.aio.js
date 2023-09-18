(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.clone = {})));
}(this, (function (exports) { 'use strict';

    const add = (a, b) => {
        return a + b
    };

    const clone = () => {
        let result = add('1', '2');
        console.log(Array.from(result));
    };

    exports.clone = clone;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
