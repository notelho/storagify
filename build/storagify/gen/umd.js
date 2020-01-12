
(function (global, factory) {

    if (typeof exports === 'object' && typeof module !== 'undefined') {
        factory(exports)
    } else if (typeof define === 'function' && define.amd) {
        define('storagify', ['exports'], factory)
    } else {
        (factory((global.storagify = {})));
    }

}(this, (function (exports) {
    'use strict';

    // <!-- -->

    exports.init = storagify.init;

    Object.defineProperty(exports, '__esModule', { value: true });

})));