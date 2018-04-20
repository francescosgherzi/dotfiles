require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var proxySettings = {
  'version': 37,
  'countries': {
    'at': {
      'premium_servers': [{ 'host': 'at1.lunrac.com', 'port': 443 }]
    },
    'au': {
      'premium_servers': [{ 'host': 'au3.lunrac.com', 'port': 443 }, { 'host': 'au4.lunrac.com', 'port': 443 }]
    },
    'be': {
      'premium_servers': [{ 'host': 'be1.lunrac.com', 'port': 443 }]
    },
    'bg': {
      'premium_servers': [{ 'host': 'bg1.lunrac.com', 'port': 443 }]
    },
    'ca': {
      'premium_servers': [{ 'host': 'ca1.lunrac.com', 'port': 443 }]
    },
    'ch': {
      'premium_servers': [{ 'host': 'ch1.lunrac.com', 'port': 443 }]
    },
    'de': {
      'premium_servers': [{ 'host': 'de1.lunrac.com', 'port': 443 }, { 'host': 'de2.lunrac.com', 'port': 443 }, { 'host': 'de3.lunrac.com', 'port': 443 }]
    },
    'dk': {
      'premium_servers': [{ 'host': 'dk1.lunrac.com', 'port': 443 }]
    },
    'es': {
      'premium_servers': [{ 'host': 'es1.lunrac.com', 'port': 443 }]
    },
    'fi': {
      'premium_servers': [{ 'host': 'fi1.lunrac.com', 'port': 443 }, { 'host': 'fi2.lunrac.com', 'port': 443 }]
    },
    'fr': {
      'premium_servers': [{ 'host': 'fr1.lunrac.com', 'port': 443 }]
    },
    'hk': {
      'premium_servers': [{ 'host': 'hk1.lunrac.com', 'port': 443 }]
    },
    'ie': {
      'premium_servers': [{ 'host': 'ie1.lunrac.com', 'port': 443 }]
    },
    'in': {
      'premium_servers': [{ 'host': 'in1.lunrac.com', 'port': 443 }, { 'host': 'in2.lunrac.com', 'port': 443 }]
    },
    'it': {
      'premium_servers': [{ 'host': 'it1.lunrac.com', 'port': 443 }, { 'host': 'it2.lunrac.com', 'port': 443 }]
    },
    'jp': {
      'premium_servers': [{ 'host': 'jp1.lunrac.com', 'port': 443 }, { 'host': 'jp2.lunrac.com', 'port': 443 }, { 'host': 'jp3.lunrac.com', 'port': 443 }, { 'host': 'jp4.lunrac.com', 'port': 443 }]
    },
    'lt': {
      'premium_servers': [{ 'host': 'lt1.lunrac.com', 'port': 443 }]
    },
    'lv': {
      'premium_servers': [{ 'host': 'lv1.lunrac.com', 'port': 443 }]
    },
    'nl': {
      'servers': [{ 'host': 'nl1.postls.com', 'port': 443 }, { 'host': 'nl2.postls.com', 'port': 443 }, { 'host': 'nl3.postls.com', 'port': 443 }, { 'host': 'nl4.postls.com', 'port': 443 }, { 'host': 'nl5.postls.com', 'port': 443 }, { 'host': 'nl6.postls.com', 'port': 443 }, { 'host': 'nl7.postls.com', 'port': 443 }, { 'host': 'nl8.postls.com', 'port': 443 }, { 'host': 'nl9.postls.com', 'port': 443 }, { 'host': 'nl10.postls.com', 'port': 443 }, { 'host': 'nl11.postls.com', 'port': 443 }, { 'host': 'nl12.postls.com', 'port': 443 }, { 'host': 'nl13.postls.com', 'port': 443 }, { 'host': 'nl14.postls.com', 'port': 443 }, { 'host': 'nl15.postls.com', 'port': 443 }, { 'host': 'nl16.postls.com', 'port': 443 }, { 'host': 'nl17.postls.com', 'port': 443 }, { 'host': 'nl18.postls.com', 'port': 443 }, { 'host': 'nl19.postls.com', 'port': 443 }, { 'host': 'nl20.postls.com', 'port': 443 }, { 'host': 'nl26.postls.com', 'port': 443 }, { 'host': 'nl27.postls.com', 'port': 443 }, { 'host': 'nl28.postls.com', 'port': 443 }, { 'host': 'nl29.postls.com', 'port': 443 }, { 'host': 'nl30.postls.com', 'port': 443 }, { 'host': 'nl31.postls.com', 'port': 443 }, { 'host': 'nl32.postls.com', 'port': 443 }, { 'host': 'nl33.postls.com', 'port': 443 }, { 'host': 'nl34.postls.com', 'port': 443 }, { 'host': 'nl35.postls.com', 'port': 443 }, { 'host': 'nl36.postls.com', 'port': 443 }, { 'host': 'nl37.postls.com', 'port': 443 }, { 'host': 'nl38.postls.com', 'port': 443 }],
      'premium_servers': [{ 'host': 'nl1.lunrac.com', 'port': 443 }, { 'host': 'nl2.lunrac.com', 'port': 443 }, { 'host': 'nl3.lunrac.com', 'port': 443 }, { 'host': 'nl4.lunrac.com', 'port': 443 }, { 'host': 'nl5.lunrac.com', 'port': 443 }, { 'host': 'nl6.lunrac.com', 'port': 443 }]
    },
    'no': {
      'premium_servers': [{ 'host': 'no1.lunrac.com', 'port': 443 }]
    },
    'ro': {
      'premium_servers': [{ 'host': 'ro1.lunrac.com', 'port': 443 }]
    },
    'ru': {
      'premium_servers': [{ 'host': 'ru9.lunrac.com', 'port': 443 }, { 'host': 'ru10.lunrac.com', 'port': 443 }, { 'host': 'ru11.lunrac.com', 'port': 443 }, { 'host': 'ru12.lunrac.com', 'port': 443 }, { 'host': 'ru13.lunrac.com', 'port': 443 }, { 'host': 'ru14.lunrac.com', 'port': 443 }]
    },
    'se': {
      'premium_servers': [{ 'host': 'se1.lunrac.com', 'port': 443 }]
    },
    'sg': {
      'servers': [{ 'host': 'sg1.postls.com', 'port': 443 }, { 'host': 'sg2.postls.com', 'port': 443 }, { 'host': 'sg3.postls.com', 'port': 443 }, { 'host': 'sg4.postls.com', 'port': 443 }, { 'host': 'sg5.postls.com', 'port': 443 }, { 'host': 'sg6.postls.com', 'port': 443 }, { 'host': 'sg7.postls.com', 'port': 443 }, { 'host': 'sg8.postls.com', 'port': 443 }, { 'host': 'sg9.postls.com', 'port': 443 }, { 'host': 'sg10.postls.com', 'port': 443 }, { 'host': 'sg11.postls.com', 'port': 443 }, { 'host': 'sg12.postls.com', 'port': 443 }, { 'host': 'sg13.postls.com', 'port': 443 }],
      'premium_servers': [{ 'host': 'sg2.lunrac.com', 'port': 443 }, { 'host': 'sg3.lunrac.com', 'port': 443 }]
    },
    'tr': {
      'premium_servers': [{ 'host': 'tr1.lunrac.com', 'port': 443 }]
    },
    'ua': {
      'premium_servers': [{ 'host': 'ua1.lunrac.com', 'port': 443 }]
    },
    'uk': {
      'servers': [{ 'host': 'uk1.postls.com', 'port': 443 }, { 'host': 'uk2.postls.com', 'port': 443 }, { 'host': 'uk4.postls.com', 'port': 443 }, { 'host': 'uk5.postls.com', 'port': 443 }, { 'host': 'uk6.postls.com', 'port': 443 }, { 'host': 'uk7.postls.com', 'port': 443 }, { 'host': 'uk8.postls.com', 'port': 443 }, { 'host': 'uk9.postls.com', 'port': 443 }, { 'host': 'uk10.postls.com', 'port': 443 }, { 'host': 'uk11.postls.com', 'port': 443 }, { 'host': 'uk12.postls.com', 'port': 443 }, { 'host': 'uk13.postls.com', 'port': 443 }, { 'host': 'uk14.postls.com', 'port': 443 }, { 'host': 'uk15.postls.com', 'port': 443 }, { 'host': 'uk16.postls.com', 'port': 443 }, { 'host': 'uk17.postls.com', 'port': 443 }, { 'host': 'uk18.postls.com', 'port': 443 }, { 'host': 'uk19.postls.com', 'port': 443 }, { 'host': 'uk20.postls.com', 'port': 443 }, { 'host': 'uk21.postls.com', 'port': 443 }],
      'premium_servers': [{ 'host': 'uk1.lunrac.com', 'port': 443 }, { 'host': 'uk2.lunrac.com', 'port': 443 }, { 'host': 'uk3.lunrac.com', 'port': 443 }, { 'host': 'uk5.lunrac.com', 'port': 443 }]
    },
    'us': {
      'servers': [{ 'host': 'us1.postls.com', 'port': 443 }, { 'host': 'us2.postls.com', 'port': 443 }, { 'host': 'us3.postls.com', 'port': 443 }, { 'host': 'us4.postls.com', 'port': 443 }, { 'host': 'us5.postls.com', 'port': 443 }, { 'host': 'us6.postls.com', 'port': 443 }, { 'host': 'us7.postls.com', 'port': 443 }, { 'host': 'us8.postls.com', 'port': 443 }, { 'host': 'us9.postls.com', 'port': 443 }, { 'host': 'us10.postls.com', 'port': 443 }, { 'host': 'us11.postls.com', 'port': 443 }, { 'host': 'us13.postls.com', 'port': 443 }, { 'host': 'us14.postls.com', 'port': 443 }, { 'host': 'us15.postls.com', 'port': 443 }, { 'host': 'us16.postls.com', 'port': 443 }, { 'host': 'us17.postls.com', 'port': 443 }, { 'host': 'us18.postls.com', 'port': 443 }, { 'host': 'us19.postls.com', 'port': 443 }, { 'host': 'us20.postls.com', 'port': 443 }, { 'host': 'us21.postls.com', 'port': 443 }, { 'host': 'us22.postls.com', 'port': 443 }, { 'host': 'us23.postls.com', 'port': 443 }, { 'host': 'us25.postls.com', 'port': 443 }, { 'host': 'us27.postls.com', 'port': 443 }, { 'host': 'us28.postls.com', 'port': 443 }, { 'host': 'us29.postls.com', 'port': 443 }, { 'host': 'us30.postls.com', 'port': 443 }, { 'host': 'us31.postls.com', 'port': 443 }],
      'premium_servers': [{ 'host': 'us3.lunrac.com', 'port': 443 }, { 'host': 'us4.lunrac.com', 'port': 443 }, { 'host': 'us5.lunrac.com', 'port': 443 }, { 'host': 'us6.lunrac.com', 'port': 443 }, { 'host': 'us8.lunrac.com', 'port': 443 }, { 'host': 'us9.lunrac.com', 'port': 443 }]
    },
    'usw': {
      'premium_servers': [{ 'host': 'usw11.lunrac.com', 'port': 443 }, { 'host': 'usw12.lunrac.com', 'port': 443 }, { 'host': 'usw13.lunrac.com', 'port': 443 }, { 'host': 'usw14.lunrac.com', 'port': 443 }, { 'host': 'usw15.lunrac.com', 'port': 443 }]
    },
    'za': {
      'premium_servers': [{ 'host': 'za1.lunrac.com', 'port': 443 }]
    }
  }
};

exports.default = proxySettings;

},{}],2:[function(require,module,exports){
var root = require('./_root');

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;

},{"./_root":9}],3:[function(require,module,exports){
var Symbol = require('./_Symbol'),
    getRawTag = require('./_getRawTag'),
    objectToString = require('./_objectToString');

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;

},{"./_Symbol":2,"./_getRawTag":6,"./_objectToString":7}],4:[function(require,module,exports){
(function (global){
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],5:[function(require,module,exports){
var overArg = require('./_overArg');

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;

},{"./_overArg":8}],6:[function(require,module,exports){
var Symbol = require('./_Symbol');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;

},{"./_Symbol":2}],7:[function(require,module,exports){
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

},{}],8:[function(require,module,exports){
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;

},{}],9:[function(require,module,exports){
var freeGlobal = require('./_freeGlobal');

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;

},{"./_freeGlobal":4}],10:[function(require,module,exports){
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;

},{}],11:[function(require,module,exports){
var baseGetTag = require('./_baseGetTag'),
    getPrototype = require('./_getPrototype'),
    isObjectLike = require('./isObjectLike');

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;

},{"./_baseGetTag":3,"./_getPrototype":5,"./isObjectLike":10}],12:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],13:[function(require,module,exports){
'use strict';

// Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())
var setTimeoutFunc = setTimeout;

function noop() {}

// Polyfill for Function.prototype.bind
function bind(fn, thisArg) {
  return function() {
    fn.apply(thisArg, arguments);
  };
}

function Promise(fn) {
  if (!(this instanceof Promise))
    throw new TypeError('Promises must be constructed via new');
  if (typeof fn !== 'function') throw new TypeError('not a function');
  this._state = 0;
  this._handled = false;
  this._value = undefined;
  this._deferreds = [];

  doResolve(fn, this);
}

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }
  if (self._state === 0) {
    self._deferreds.push(deferred);
    return;
  }
  self._handled = true;
  Promise._immediateFn(function() {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
      return;
    }
    var ret;
    try {
      ret = cb(self._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }
    resolve(deferred.promise, ret);
  });
}

function resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self)
      throw new TypeError('A promise cannot be resolved with itself.');
    if (
      newValue &&
      (typeof newValue === 'object' || typeof newValue === 'function')
    ) {
      var then = newValue.then;
      if (newValue instanceof Promise) {
        self._state = 3;
        self._value = newValue;
        finale(self);
        return;
      } else if (typeof then === 'function') {
        doResolve(bind(then, newValue), self);
        return;
      }
    }
    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch (e) {
    reject(self, e);
  }
}

function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  finale(self);
}

function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    Promise._immediateFn(function() {
      if (!self._handled) {
        Promise._unhandledRejectionFn(self._value);
      }
    });
  }

  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i]);
  }
  self._deferreds = null;
}

function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, self) {
  var done = false;
  try {
    fn(
      function(value) {
        if (done) return;
        done = true;
        resolve(self, value);
      },
      function(reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      }
    );
  } catch (ex) {
    if (done) return;
    done = true;
    reject(self, ex);
  }
}

Promise.prototype['catch'] = function(onRejected) {
  return this.then(null, onRejected);
};

Promise.prototype.then = function(onFulfilled, onRejected) {
  var prom = new this.constructor(noop);

  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

Promise.prototype['finally'] = function(callback) {
  var constructor = this.constructor;
  return this.then(
    function(value) {
      return constructor.resolve(callback()).then(function() {
        return value;
      });
    },
    function(reason) {
      return constructor.resolve(callback()).then(function() {
        return constructor.reject(reason);
      });
    }
  );
};

Promise.all = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!arr || typeof arr.length === 'undefined')
      throw new TypeError('Promise.all accepts an array');
    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      try {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
          var then = val.then;
          if (typeof then === 'function') {
            then.call(
              val,
              function(val) {
                res(i, val);
              },
              reject
            );
            return;
          }
        }
        args[i] = val;
        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.resolve = function(value) {
  if (value && typeof value === 'object' && value.constructor === Promise) {
    return value;
  }

  return new Promise(function(resolve) {
    resolve(value);
  });
};

Promise.reject = function(value) {
  return new Promise(function(resolve, reject) {
    reject(value);
  });
};

Promise.race = function(values) {
  return new Promise(function(resolve, reject) {
    for (var i = 0, len = values.length; i < len; i++) {
      values[i].then(resolve, reject);
    }
  });
};

// Use polyfill for setImmediate for performance gains
Promise._immediateFn =
  (typeof setImmediate === 'function' &&
    function(fn) {
      setImmediate(fn);
    }) ||
  function(fn) {
    setTimeoutFunc(fn, 0);
  };

Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
  }
};

module.exports = Promise;

},{}],14:[function(require,module,exports){
(function (global){
/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports &&
		!exports.nodeType && exports;
	var freeModule = typeof module == 'object' && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		typeof define == 'function' &&
		typeof define.amd == 'object' &&
		define.amd
	) {
		define('punycode', function() {
			return punycode;
		});
	} else if (freeExports && freeModule) {
		if (module.exports == freeExports) {
			// in Node.js, io.js, or RingoJS v0.8.0+
			freeModule.exports = punycode;
		} else {
			// in Narwhal or RingoJS v0.7.0-
			for (key in punycode) {
				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			}
		}
	} else {
		// in Rhino or a web browser
		root.punycode = punycode;
	}

}(this));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],15:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports['default'] = applyMiddleware;

var _compose = require('./compose');

var _compose2 = _interopRequireDefault(_compose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}
},{"./compose":18}],16:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports['default'] = bindActionCreators;
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}
},{}],17:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;
exports['default'] = combineReducers;

var _createStore = require('./createStore');

var _isPlainObject = require('lodash/isPlainObject');

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _warning = require('./utils/warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!(0, _isPlainObject2['default'])(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (process.env.NODE_ENV !== 'production') {
      if (typeof reducers[key] === 'undefined') {
        (0, _warning2['default'])('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (process.env.NODE_ENV !== 'production') {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (process.env.NODE_ENV !== 'production') {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        (0, _warning2['default'])(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}
}).call(this,require('_process'))
},{"./createStore":19,"./utils/warning":21,"_process":12,"lodash/isPlainObject":11}],18:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports["default"] = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}
},{}],19:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.ActionTypes = undefined;
exports['default'] = createStore;

var _isPlainObject = require('lodash/isPlainObject');

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _symbolObservable = require('symbol-observable');

var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = exports.ActionTypes = {
  INIT: '@@redux/INIT'

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */
};function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!(0, _isPlainObject2['default'])(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[_symbolObservable2['default']] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
}
},{"lodash/isPlainObject":11,"symbol-observable":22}],20:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;
exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

var _createStore = require('./createStore');

var _createStore2 = _interopRequireDefault(_createStore);

var _combineReducers = require('./combineReducers');

var _combineReducers2 = _interopRequireDefault(_combineReducers);

var _bindActionCreators = require('./bindActionCreators');

var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

var _applyMiddleware = require('./applyMiddleware');

var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

var _compose = require('./compose');

var _compose2 = _interopRequireDefault(_compose);

var _warning = require('./utils/warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  (0, _warning2['default'])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}

exports.createStore = _createStore2['default'];
exports.combineReducers = _combineReducers2['default'];
exports.bindActionCreators = _bindActionCreators2['default'];
exports.applyMiddleware = _applyMiddleware2['default'];
exports.compose = _compose2['default'];
}).call(this,require('_process'))
},{"./applyMiddleware":15,"./bindActionCreators":16,"./combineReducers":17,"./compose":18,"./createStore":19,"./utils/warning":21,"_process":12}],21:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports['default'] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}
},{}],22:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = require('./ponyfill.js');

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var root; /* global window */


if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (typeof module !== 'undefined') {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./ponyfill.js":23}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};
},{}],24:[function(require,module,exports){
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

require('polyfills/Array.from');

require('polyfills/Array.prototype.find');

require('polyfills/Array.prototype.findIndex');

require('polyfills/Array.prototype.includes');

require('polyfills/Object.assign');

require('polyfills/Promise');

require('polyfills/regeneratorRuntime');

require('polyfills/String.prototype.endsWith');

require('polyfills/String.prototype.includes');

require('polyfills/String.prototype.padEnd');

require('polyfills/String.prototype.padStart');

require('polyfills/String.prototype.startsWith');

require('polyfills/URL');

require('polyfills/fetch');

var _browser = require('core/browser');

var _browser2 = _interopRequireDefault(_browser);

var _account = require('core/account');

var _account2 = _interopRequireDefault(_account);

var _actions = require('core/actions');

var _actions2 = _interopRequireDefault(_actions);

var _ajaxes = require('core/ajaxes');

var _ajaxes2 = _interopRequireDefault(_ajaxes);

var _browsecLink = require('core/browsecLink');

var _browsecLink2 = _interopRequireDefault(_browsecLink);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _Counters = require('core/Counters');

var _Counters2 = _interopRequireDefault(_Counters);

var _createElement = require('tools/createElement');

var _createElement2 = _interopRequireDefault(_createElement);

var _domainZoneList = require('core/domainZoneList');

var _domainZoneList2 = _interopRequireDefault(_domainZoneList);

var _ga = require('core/ga');

var _ga2 = _interopRequireDefault(_ga);

var _internationalize = require('tools/internationalize');

var _internationalize2 = _interopRequireDefault(_internationalize);

var _log = require('core/log');

var _log2 = _interopRequireDefault(_log);

var _runtime = require('core/runtime.onInstalled');

var _runtime2 = _interopRequireDefault(_runtime);

var _runtime3 = require('core/runtime.onMessage');

var _runtime4 = _interopRequireDefault(_runtime3);

var _PolymerRedux = require('core/PolymerRedux');

var _PolymerRedux2 = _interopRequireDefault(_PolymerRedux);

var _promotions = require('core/promotions');

var _promotions2 = _interopRequireDefault(_promotions);

var _pac = require('core/pac');

var _pac2 = _interopRequireDefault(_pac);

var _punycode = require('punycode');

var _punycode2 = _interopRequireDefault(_punycode);

var _routes = require('core/routes');

var _routes2 = _interopRequireDefault(_routes);

var _showedOffers = require('core/showedOffers');

var _showedOffers2 = _interopRequireDefault(_showedOffers);

var _SmartSettingsObserver = require('core/SmartSettingsObserver');

var _SmartSettingsObserver2 = _interopRequireDefault(_SmartSettingsObserver);

var _Statistics = require('core/Statistics');

var _Statistics2 = _interopRequireDefault(_Statistics);

var _store = require('core/store');

var _store2 = _interopRequireDefault(_store);

var _storage = require('core/storage');

var _storage2 = _interopRequireDefault(_storage);

var _urlModifyParameters = require('tools/urlModifyParameters');

var _urlModifyParameters2 = _interopRequireDefault(_urlModifyParameters);

var _urlToDomain = require('tools/urlToDomain');

var _urlToDomain2 = _interopRequireDefault(_urlToDomain);

var _webRequest = require('core/webRequest');

var _webRequest2 = _interopRequireDefault(_webRequest);

var _weightedRandom = require('tools/weightedRandom');

var _weightedRandom2 = _interopRequireDefault(_weightedRandom);

var _windowErrorHandler = require('tools/windowErrorHandler');

var _windowErrorHandler2 = _interopRequireDefault(_windowErrorHandler);

require('core/browserIcon');

require('core/daysAfterInstall');

require('core/FirstPremiumBuy');

require('core/serverListUpdate');

require('core/urlListener');

require('notification/messageSystem');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } // Polyfills
// NOTE after Promise!

// Libraries


// Code parts
// eslint-disable-line


var _window = window,
    _ = _window._;


(0, _log2.default)('Background start');

/**
@param {object} account
@return {boolean} - true if account valid */
var validateAccount = function validateAccount(account) {
  if (account.guest === true) return true;

  var token = _.get(account, 'credentials.access_token');
  return Boolean(token && token.match(/^[a-zA-Z0-9]{20}$/));
};

// Global assigments (needed for access from other pages / content script)
Object.assign(window, {
  account: _account2.default,
  actions: _actions2.default,
  ajaxes: _ajaxes2.default,
  browsecLink: _browsecLink2.default,
  Browser: _browser2.default,
  config: _config2.default,
  Counters: _Counters2.default,
  domainZoneList: _domainZoneList2.default,
  ga: _ga2.default,
  log: _log2.default,
  PolymerRedux: _PolymerRedux2.default,
  promotions: _promotions2.default,
  proxy: _pac2.default,
  punycode: _punycode2.default,
  routes: _routes2.default,
  showedOffers: _showedOffers2.default,
  SmartSettingsObserver: _SmartSettingsObserver2.default,
  Statistics: _Statistics2.default,
  storage: _storage2.default,
  store: _store2.default,
  'tools': {
    createElement: _createElement2.default,
    internationalize: _internationalize2.default,
    urlModifyParameters: _urlModifyParameters2.default,
    urlToDomain: _urlToDomain2.default,
    weightedRandom: _weightedRandom2.default
  },
  windowErrorHandler: _windowErrorHandler2.default,
  _: _
});

if (_browser2.default.proxy) {
  // FF 55+. Chrome
  /*if( _.get( Browser.proxy, 'settings.onChange.addListener' ) ) { // Only for Chrome
    Browser.proxy.settings.onChange.addListener(
      //
      //@param {*} details
      details => {
        log( 'Proxy on change: ', details );
         store.ready.then( () => {
          proxy.getState().then( isConnected => {
            if( isConnected ) return;
            store.dispatch({
              'type': 'Proxy state update', 'data': { 'connected': false }
            });
          });
        });
      }
    );
  }*/

  _browser2.default.proxy.onProxyError.addListener(function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(details) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _store2.default.ready;

            case 2:

              (0, _log2.default)('onProxyError', details);
              _Counters2.default.increase('proxy errors');

              /*if( typeof browser !== 'undefined' ) return; // Only for Chrome ↓
              proxy.getState().then( isConnected => {
                if( !isConnected ) return;
                 let detailsJson = JSON.stringify( details );
                log.error( 'Proxy on error: ' + detailsJson );
                ga( 'extension', 'proxy_error', detailsJson );
              });*/

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
}

window.onerror = _windowErrorHandler2.default;

/** Initial load of account data (especially for FF proxy check)
@type {Promise} - with user data */
var userDataPromise = _store2.default.ready.then(function () {
  return Promise.all([_account2.default.load().catch(function () {
    return _store2.default.getState().user;
  }), // No broken chain
  _pac2.default.promise]);
}).then(function (_ref2) {
  var _ref3 = _slicedToArray(_ref2, 1),
      user = _ref3[0];

  return _pac2.default.setState().then(function () {
    return user;
  });
}); // Set initial proxy state


(0, _webRequest2.default)(userDataPromise); // NOTE very critical


userDataPromise.then(function () {
  /** We need this only after initial full authorization.
  Account change from premium to not premium triggers proxy update */
  _store2.default.compare(function (_ref4) {
    var user = _ref4.user;
    return user.premium;
  }, function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var premium = {};premium.old = args[0];
    premium.new = args[1];


    var action = !premium.old && premium.new ? 'From free to premium' : 'From premium to free';

    var name = 'Proxy: switching ' + action.toLowerCase() + ' servers';
    console.time(name);
    _pac2.default.setState().then(function () {
      console.timeEnd('account', 'changing servers succeeded');
    });
  });
});

(0, _runtime2.default)();

if (_browser2.default.runtime.onStartup) {
  _browser2.default.runtime.onStartup.addListener(function () {
    (0, _log2.default)('browser.runtime.onStartup');

    (0, _ga2.default)('extension', 'start', _browser2.default.runtime.getManifest().version);
  });
}

// browser.runtime.onMessage
// Change authentication data from site login
_store2.default.ready.then(function () {
  _runtime4.default.addListener({
    'type': 'auth',
    'callback': function callback(_ref5, sender) {
      var accountData = _ref5['account'];

      var urls = [sender.url, _config2.default.browsec.baseUrl].map(function (item) {
        return new URL(item).origin;
      });
      if (urls[0] !== urls[1]) {
        _log2.default.warn('Message from an untrusted sender: ' + sender);return;
      }

      if (!validateAccount(accountData)) {
        throw new Error('invalid credentials: ' + JSON.stringify(accountData));
      }

      _store2.default.dispatch({ 'type': 'User data change', 'data': accountData });
    }
  });

  /** Reload account */
  _runtime4.default.addListener({
    'type': 'reload',
    'callback': function callback(x, sender) {
      var urls = [sender.url, _config2.default.browsec.baseUrl].map(function (item) {
        return new URL(item).origin;
      });
      if (urls[0] !== urls[1]) {
        _log2.default.warn('Message from an untrusted sender: ' + sender);return;
      }

      _account2.default.reload();
    }
  });
});

},{"config":"config","core/Counters":26,"core/FirstPremiumBuy":28,"core/PolymerRedux":29,"core/SmartSettingsObserver":30,"core/Statistics":32,"core/account":34,"core/actions":35,"core/ajaxes":40,"core/browsecLink":44,"core/browser":118,"core/browserIcon":121,"core/daysAfterInstall":122,"core/domainZoneList":124,"core/ga":126,"core/log":129,"core/pac":136,"core/promotions":137,"core/routes":139,"core/runtime.onInstalled":140,"core/runtime.onMessage":141,"core/serverListUpdate":143,"core/showedOffers":144,"core/storage":145,"core/store":148,"core/urlListener":149,"core/webRequest":151,"notification/messageSystem":155,"polyfills/Array.from":157,"polyfills/Array.prototype.find":158,"polyfills/Array.prototype.findIndex":159,"polyfills/Array.prototype.includes":160,"polyfills/Object.assign":161,"polyfills/Promise":162,"polyfills/String.prototype.endsWith":164,"polyfills/String.prototype.includes":165,"polyfills/String.prototype.padEnd":166,"polyfills/String.prototype.padStart":167,"polyfills/String.prototype.startsWith":168,"polyfills/URL":169,"polyfills/fetch":170,"polyfills/regeneratorRuntime":171,"punycode":14,"tools/createElement":174,"tools/internationalize":179,"tools/urlModifyParameters":181,"tools/urlToDomain":182,"tools/weightedRandom":185,"tools/windowErrorHandler":186}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _storage = require('core/storage');

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  /** @type {(Object|undefined)} */
  var statisticsState = _storage2.default.getItem('statistics');

  if (!statisticsState) return {};

  /** @type {Object<integer>} */
  return {
    // Count of location country changes
    'country changes': statisticsState.countryChanges || 0,

    // Number of clicks on browser icon
    'icon clicks': statisticsState.iconClicks || 0,

    // Count of transitions to location page
    'popup: location page shows': statisticsState.locationPageShows || 0,

    // Global proxy ON click times
    'popup: proxy on': statisticsState.proxyOn || 0,

    // Count of successfully loaded proxied pages
    'proxied pages': statisticsState.proxiedPages || 0,

    // Count of onProxyError errors
    'proxy errors': statisticsState.proxyErrors || 0,

    // How much times user successfully logined
    'user login': statisticsState.userLoginCount || 0
  };
};

},{"core/storage":145}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _getDefaultState = require('./getDefaultState');

var _getDefaultState2 = _interopRequireDefault(_getDefaultState);

var _listeners = require('./listeners');

var _listeners2 = _interopRequireDefault(_listeners);

var _log = require('core/log');

var _log2 = _interopRequireDefault(_log);

var _storage = require('core/storage');

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _window = window,
    _ = _window._;

/** @class singleton */
/** System of counters saved globally in stirage for statistics */

var Counters = new function () {
  var _this = this;

  _storage2.default.ready.then(function () {
    /** Current state
    @type {Object} */
    _this.state = _storage2.default.getItem('counters') || (0, _getDefaultState2.default)();
  });

  /** @type {Array<Object>} - liteners */
  var listeners = [];

  /**
  @param {String} property
  @param {Function} listener */
  this.addListener = function (property, listener) {
    listeners.push({ listener: listener, property: property });
  };

  /**
  @param {(String|function)} params */
  this.removeListener = function (params) {
    // Remove by property
    if (typeof params === 'string') {
      _.remove(listeners, function (_ref) {
        var property = _ref.property;
        return property === params;
      });
      return;
    }

    // Remove by callback function
    _.remove(listeners, function (_ref2) {
      var listener = _ref2.listener;
      return listener === params;
    });
  };

  /** Get proeprty value
  @param {String} property
  @return {integer} property value in state */
  this.get = function (property) {
    return _this.state[property] || 0;
  };

  /** Increase some counter property
  @param {String} property
  @return {integer} - new value */
  this.increase = function (property) {
    if (!_this.state[property]) _this.state[property] = 0;

    _this.state[property]++;

    if (_config2.default.type === 'development') {
      (0, _log2.default)('Counters. Increase ' + property + '. New value: ', _this.state[property]);
    }
    _storage2.default.setItem('counters', _this.state);

    listeners.forEach(function (_ref3) {
      var listener = _ref3.listener,
          listenerProperty = _ref3['property'];

      if (listenerProperty !== property) return;

      listener(_this.state[property]);
    });

    return _this.state[property];
  };
}();

(0, _listeners2.default)(Counters);

exports.default = Counters;

},{"./getDefaultState":25,"./listeners":27,"config":"config","core/log":129,"core/storage":145}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _store = require('core/store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(Counters) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _store2.default.ready;

          case 2:

            // Save location country changes
            _store2.default.compare(function (_ref2) {
              var _ref2$pac = _ref2['pac'],
                  mode = _ref2$pac.mode,
                  country = _ref2$pac.country;
              return { 'enabled': mode === 'proxy', country: country };
            }, function (_ref3, _ref4) {
              var enabled = _ref3.enabled,
                  newCountry = _ref3['country'];
              var oldCountry = _ref4['country'];

              if (!enabled) return; // Proxy OFF
              if (newCountry === oldCountry) return; // Same country

              Counters.increase('country changes');
            });

            // Count of Proxy OFF to ON
            _store2.default.compare(function (_ref5) {
              var pac = _ref5.pac;
              return pac.mode === 'proxy';
            }, function (enabled) {
              if (enabled) Counters.increase('popup: proxy on');
            });

            // How much times user successfully logined
            _store2.default.compare(function (_ref6) {
              var email = _ref6['user'].email;
              return Boolean(email);
            }, function (logined) {
              if (logined) Counters.increase('user login');
            });

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

},{"core/store":148}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ajax = require('tools/ajax');

var _ajax2 = _interopRequireDefault(_ajax);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _generateRfc4122Id = require('tools/generateRfc4122Id');

var _generateRfc4122Id2 = _interopRequireDefault(_generateRfc4122Id);

var _Statistics = require('core/Statistics');

var _Statistics2 = _interopRequireDefault(_Statistics);

var _storage = require('core/storage');

var _storage2 = _interopRequireDefault(_storage);

var _store = require('core/store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @type {(String|undefined)} */
/** Part of background.js */
var gaId = _config2.default.ga.firstPremiumBuy;

/** Collect count of days from Statistics.installDate until first login with premium
@class singleton */
var FirstPremiumBuy = new function () {
  var _this = this;

  this.initiate = function () {
    /** @type {Boolean} */
    _this.called = _storage2.default.getItem('FirstPremiumBuy') !== '-';
  };

  this.call = function () {
    if (!gaId || _this.called) return;

    /** @type {integer} */
    var installDate = _Statistics2.default.get('installDate');
    if (!installDate) return;

    /** @type {integer} */
    var days = Math.floor((Date.now() - installDate) / (24 * 3600 * 1000));

    _storage2.default.setItem('FirstPremiumBuy', String(days));
    _this.called = true;

    // Sending data to google
    (0, _ajax2.default)('https://www.google-analytics.com/collect', {
      'mode': 'cors',
      'data': {
        'v': '1', // Version
        'tid': gaId, // Tracking ID / Property ID.
        'cid': (0, _generateRfc4122Id2.default)(), // Anonymous Client ID (every time unique)
        't': 'event', // Hit Type. / The type of hit. Must be one of 'pageview', 'screenview', 'event', 'transaction', 'item', 'social', 'exception', 'timing'.
        'ec': 'Payment', // Event category
        'ea': 'Payment', // Event action
        'el': String(days) // Event label / https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters?hl=en#ec
      }
    });
  };
}();

_store2.default.ready.then(function () {
  // If user initially logined -> then his data will not be sent
  if (!_storage2.default.getItem('FirstPremiumBuy')) {
    _storage2.default.setItem('FirstPremiumBuy', _store2.default.getState().user.premium ? 'before' : '-');
  }

  FirstPremiumBuy.initiate();

  // Subscription to store
  _store2.default.compare(function (_ref) {
    var _ref$user = _ref['user'],
        email = _ref$user.email,
        premium = _ref$user.premium;
    return { email: email, premium: premium };
  }, function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var user = {};user.new = args[0];
    user.old = args[1];

    if (!user.new.email || !user.old.email) return;

    if (user.new.premium || !user.old.premium) FirstPremiumBuy.call();
  });
});

exports.default = FirstPremiumBuy;

},{"config":"config","core/Statistics":32,"core/storage":145,"core/store":148,"tools/ajax":173,"tools/generateRfc4122Id":178}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /** Part of background.js. Different from original version! */


var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _log = require('core/log');

var _log2 = _interopRequireDefault(_log);

var _store = require('core/store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _window = window,
    _ = _window._;

/** Creates a ReduxBehavior behavior from a given Redux store.
@param {object} Polymer
@return {object} */

var PolymerRedux = function PolymerRedux(Polymer) {
  // check for arguments
  if (!Polymer) throw new TypeError('No Polymer argument');

  var twoWayWarning = 'Polymer Redux: <%s>.%s has "notify" enabled, two-way bindings goes against Redux\'s paradigm';
  var actionsWarning = 'Polymer Redux: <%s>.actions inaccessible property. "actions" is reserved for Action Creators.';

  /** Returns property bindings found on a given Element/Behavior.
  @private
  @param {HTMLElement|Object} obj Element or Behavior.
  @param {HTMLElement} element Polymer element.
  @param {Object} store Redux store.
  @return {Array} */
  var getStatePathProperties = function getStatePathProperties(obj, element) {
    var props = [];

    if (obj.properties) {
      Object.keys(obj.properties).forEach(function (name) {
        var prop = obj.properties[name];
        if (name === 'actions') {
          // actions, inaccessible property
          _log2.default.warn(actionsWarning, element.is);
        }
        if (!prop.hasOwnProperty('statePath')) return;

        // notify flag, warn against two-way bindings
        if (prop.notify && !prop.readOnly) {
          _log2.default.warn(twoWayWarning, element.is, name);
        }
        props.push({
          'name': name,
          // Empty statePath return state
          'path': prop.statePath || _store2.default.getState,
          'readOnly': prop.readOnly,
          'type': prop.type
        });
      });
    }

    return props;
  };

  /** Binds an given Polymer element to a Redux store.
  @private
  @param {HTMLElement} element Polymer element.
  @param {Object} store Redux store. */
  var bindReduxListener = function bindReduxListener(element) {
    if (element._reduxUnsubscribe) return;

    var props = getStatePathProperties(element, element);

    // behavior property bindings
    if (Array.isArray(element.behaviors)) {
      element.behaviors.forEach(function (behavior) {
        var extras = getStatePathProperties(behavior, element);
        if (extras.length) Array.prototype.push.apply(props, extras);
      });

      // de-dupe behavior props
      var names = props.map(function (_ref) {
        var name = _ref.name;
        return name;
      }); // grab the prop names
      props = props.filter(function (_ref2, i) {
        var name = _ref2.name;
        return names.indexOf(name) === i;
      }); // indices must match
    }

    // redux listener
    var reduxListener = function reduxListener() {
      var state = _store2.default.getState();
      props.forEach(function (property) {
        var propName = property.name;
        var splices = [];

        // statePath, a path or function.
        var value = function (path) {
          return typeof path === 'function' ? path.call(element, state) : _.get(state, path);
        }(property.path);

        // prevent unnecesary polymer notifications
        var previous = element.get(property.name);
        if (_.isEqual(value, previous)) return;

        // type of array, work out splices before setting the value
        if (property.type === Array) {
          value = value || /* istanbul ignore next */[];
          previous = previous || /* istanbul ignore next */[];

          // check the value type
          if (!Array.isArray(value)) {
            throw new TypeError('<' + element.is + '>.' + propName + ' type is Array but given: ' + (typeof value === 'undefined' ? 'undefined' : _typeof(value)));
          }

          splices = Polymer.ArraySplice.calculateSplices(value, previous);
        }

        // set
        if (property.readOnly) element.notifyPath(propName, value);else element.set(propName, value);

        // notify element of splices
        if (splices.length) element.notifySplices(propName, splices);
      });
      element.fire('state-changed', state);
    };
    reduxListener();

    element._reduxUnsubscribe = _store2.default.subscribe(reduxListener);
  };

  /** Unbinds a Polymer element from a Redux store.
  @private
  @param {HTMLElement} element */
  function unbindReduxListener(element) {
    if (typeof element._reduxUnsubscribe !== 'function') return;
    element._reduxUnsubscribe();
    delete element._reduxUnsubscribe;
  }

  /** Builds list of action creators from a given element and it's inherited
  behaviors setting the list onto the element.
  @private
  @param {HTMLElement} element Polymer element instance */
  var compileActionCreators = function compileActionCreators(element) {
    var actions = {};
    var behaviors = element.behaviors;

    if (element._reduxActions) return;

    // add behavior actions first, in reverse order so we keep priority
    if (Array.isArray(behaviors)) {
      for (var i = behaviors.length - 1; i >= 0; i--) {
        Object.assign(actions, behaviors[i].actions);
      }
    }

    // element actions have priority
    element._reduxActions = Object.assign(actions, element.actions);
  };

  /** Dispatches a Redux action via a Polymer element. This gives the element
  a polymorphic dispatch function. See the readme for the various ways to
  dispatch.
  @private
  @param {HTMLElement} element Polymer element.
  @param {Object} store Redux store.
  @param {Arguments} args The arguments passed to `element.dispatch`.
  @return {Object} The computed Redux action. */
  function dispatchReduxAction(element, args) {
    var action = args[0];
    var actions = element._reduxActions;

    args = Array.from(args);

    // action name
    if (actions && typeof action === 'string') {
      if (typeof actions[action] !== 'function') {
        throw new TypeError('Polymer Redux: <' + element.is + '> has no action "' + action + '"');
      }
      action = actions[action].apply(element, args.slice(1));
    }

    // !!! DEPRECIATED !!!
    // This will be removed as of 1.0.

    // action creator
    if (typeof action === 'function' && action.length === 0) {
      return _store2.default.dispatch(action());
    }

    // middleware, make sure we pass the polymer-redux dispatch
    // so we have access to the elements action creators
    if (typeof action === 'function') {
      return _store2.default.dispatch(function () {
        var argv = Array.from(arguments);
        // replace redux dispatch
        argv.splice(0, 1, function () {
          return dispatchReduxAction(element, arguments);
        });
        return action.apply(element, argv);
      });
    }

    // action
    return _store2.default.dispatch(action);
  }

  /** `PolymerRedux` binds a given Redux store's state to implementing Elements.
   Full documentation available, https://github.com/tur-nr/polymer-redux.
   @polymerBehavior ReduxBehavior
  @demo demo/index.html */
  return {
    /**
     * Fired when the Redux store state changes.
     * @event state-changed
     * @param {*} state
     */

    created: function created() {
      compileActionCreators(this);
    },
    ready: function ready() {
      bindReduxListener(this);
    },
    attached: function attached() {
      compileActionCreators(this); // not sure if we need to this again???
      bindReduxListener(this);
    },
    detached: function detached() {
      if (_config2.default.type === 'development') {
        (0, _log2.default)('Redux: detached. Element', this.is);
      }
      unbindReduxListener(this);
    },


    /** Dispatches an action to the Redux store.
    @param {String|Object|Function} action
    @return {Object} The action that was dispatched */
    dispatch: function dispatch(action /*, [...args] */) {
      return dispatchReduxAction(this, arguments);
    },


    /** Gets the current state in the Redux store.
    @return {*} */
    getState: function getState() {
      return _store2.default.getState();
    }
  };
};

exports.default = PolymerRedux;

},{"config":"config","core/log":129,"core/store":148}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ajaxes = require('core/ajaxes');

var _ajaxes2 = _interopRequireDefault(_ajaxes);

var _log = require('core/log');

var _log2 = _interopRequireDefault(_log);

var _pac = require('core/pac');

var _pac2 = _interopRequireDefault(_pac);

var _store = require('core/store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Part of background.js */
var _window = window,
    _ = _window._;

/** @type {integer} */

var delay = 10 * 60 * 1000;

/** @class singleton */
var SmartSettingsObserver = new function () {
  /** Activate observer */
  this.enable = function () {
    var _this = this;

    this.timeout = null;

    var loop = function loop() {
      // Blocked
      if (_this._blocked) {
        // Every 10 minutes fetch data from server
        _this.timeout = setTimeout(loop, delay);
        return;
      }

      var credentials = _store2.default.getState().user.credentials;

      // Not blocked


      _ajaxes2.default.getSmartSettings(credentials).then(
      /** @type {Array<Object>} */
      function (filters) {
        if (_this.timeout === undefined || _this._blocked) return;

        return _pac2.default.setState({ filters: filters });
      }).finally(function () {
        if (_this.timeout === undefined) return;

        // Every 10 minutes fetch data from server
        _this.timeout = setTimeout(loop, delay);
      });
    };

    loop();
  };

  /** Deactivate observer */
  this.disable = function () {
    if (this.timeout === undefined) return;
    if (this.timeout !== null) clearTimeout(this.timeout);
    delete this.timeout;
  };

  /** Blocks observer to not update anything */
  this.block = function () {
    this._blocked = true;
  };

  /** Unblocks observer to make updates */
  this.unblock = function () {
    this._blocked = false;
  };
}();

_store2.default.ready.then(function () {
  // On login / logout
  _store2.default.compare(function (_ref) {
    var email = _ref['user'].email;
    return Boolean(email);
  }, function (userLogined) {
    // Enabled only if user logined
    SmartSettingsObserver[userLogined ? 'enable' : 'disable']();

    if (!userLogined) _pac2.default.setState({ 'filters': [] });
  });

  // On premium loose OR gain
  _store2.default.compare(function (_ref2) {
    var _ref2$user = _ref2['user'],
        email = _ref2$user.email,
        premium = _ref2$user.premium;
    return {
      'logined': Boolean(email), premium: premium
    };
  }, function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var state = {};state.new = args[0];
    state.old = args[1];

    if (!state.new.logined || !state.old.logined) return; // No changes in login state

    /** @type {Array<Object>} */
    var filters = _.cloneDeep(_store2.default.getState().pac.filters);

    // Premium gain
    if (state.new.premium) {
      (0, _log2.default)('Premium gain');

      if (!filters.find(function (_ref3) {
        var disabled = _ref3.disabled;
        return disabled;
      })) return;

      filters.forEach(function (filter) {
        if (filter.disabled) delete filter.disabled;
      });

      _pac2.default.setState({ filters: filters });
      return;
    }

    // Premium loose
    (0, _log2.default)('Premium loose');

    if (filters.length <= 1) return;

    // For all filters except first -> set 'disabled' property to true
    filters.slice(1).forEach(function (filter) {
      filter.disabled = true;
    });

    _pac2.default.setState({ filters: filters });
  });

  // Initial start
  if (_store2.default.getState().user.email) SmartSettingsObserver.enable();
});

exports.default = SmartSettingsObserver;

},{"core/ajaxes":40,"core/log":129,"core/pac":136,"core/store":148}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Counters = require('core/Counters');

var _Counters2 = _interopRequireDefault(_Counters);

var _storage = require('core/storage');

var _storage2 = _interopRequireDefault(_storage);

var _store = require('core/store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var state = _storage2.default.getItem('statistics') || {
    /** days_before_uninstall - dbu - Integer count of full days from installation to removal
    @type {(integer|null)} */
    'daysLive': null,

    /** install_date - id - Installation date (UTC) in format of Date.now()
    @type {(integer|null)} - after convertion {String} in format YYYYMMDDhhmm */
    'installDate': null,

    /** logged_in - li - User is logined
    @type {Boolean} */
    'userLogined': Boolean(_store2.default.getState().user.email)
  };

  /** changed_location_times - cl - Count of location country changes
  @type {integer} */
  state.countryChanges = _Counters2.default.get('country changes');

  /** browsec_action_clicks - bac - Number of clicks on browser icon
  @type {integer} */
  state.iconClicks = _Counters2.default.get('icon clicks');

  /** change_location_opened_times - clo - Count of transitions to locations page
  @type {integer} */
  state.locationPageShows = _Counters2.default.get('popup: location page shows');

  /** successful_resources_loaded_number - s (Old: sl) -
  Count of successfully loaded proxied pages.
  @type {integer} */
  state.proxiedPages = _Counters2.default.get('proxied pages');

  /** proxy_errors_number - pe - Count of onProxyError errors
  @type {integer} */
  state.proxyErrors = _Counters2.default.get('proxy errors');

  /** turned_on_times - to - Global proxy ON click times
  @type {integer} */
  state.proxyOn = _Counters2.default.get('popup: proxy on');

  /** logged_in_times - lit - How much times user successfully logined
  @type {integer} */
  state.userLoginCount = _Counters2.default.get('user login');

  return state;
};

},{"core/Counters":26,"core/storage":145,"core/store":148}],32:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _getInitialState = require('./getInitialState');

var _getInitialState2 = _interopRequireDefault(_getInitialState);

var _listeners = require('./listeners');

var _listeners2 = _interopRequireDefault(_listeners);

var _log = require('core/log');

var _log2 = _interopRequireDefault(_log);

var _runtime = require('core/runtime.setUninstallURL');

var _runtime2 = _interopRequireDefault(_runtime);

var _storage = require('core/storage');

var _storage2 = _interopRequireDefault(_storage);

var _store = require('core/store');

var _store2 = _interopRequireDefault(_store);

var _urlModifyParameters = require('tools/urlModifyParameters');

var _urlModifyParameters2 = _interopRequireDefault(_urlModifyParameters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Part at background.js. This statistics used only during extension removal. */
var _window = window,
    _ = _window._;

/** @class singleton */

var Statistics = {
  initiate: function initiate() {
    /** Current state
    @type {Object} */
    this.state = (0, _getInitialState2.default)();
  },


  /** Set uninstall URL */
  setUninstallUrl: function setUninstallUrl() {
    /** @type {Array<String>} */
    var data = _.transform(this.state, function (carry, value, property) {
      switch (property) {
        case 'countryChanges':
          carry.cl = value;break;
        case 'daysLive':
          if (value === null) break;
          carry.dbu = value;break;
        case 'iconClicks':
          carry.bac = value;break;
        case 'installDate':
          {
            if (!value) break;
            carry.id = function (date) {
              return date.getUTCFullYear() + String(date.getUTCMonth() + 1).padStart(2, '0') + String(date.getUTCDate()).padStart(2, '0') + String(date.getUTCHours()).padStart(2, '0') + String(date.getUTCMinutes()).padStart(2, '0');
            }(new Date(value));
            break;
          }
        case 'language':
          if (!value) break;
          carry.l = value;break;
        case 'locationPageShows':
          carry.clo = value;break;
        case 'userLoginCount':
          carry.lit = value;break;
        case 'userLogined':
          carry.li = value ? '1' : '0';break;
        case 'proxiedPages':
          carry.s = value;break;
        case 'proxyErrors':
          carry.pe = value;break;
        case 'proxyOn':
          carry.to = value;break;
      }
    }, {});

    (0, _runtime2.default)((0, _urlModifyParameters2.default)('http://browsec-uninstall.s3-website.eu-central-1.amazonaws.com/', function (search) {
      return Object.assign(search, data);
    }));
  },


  /** Get proeprty value
  @param {String} property
  @return {*} property value in state */
  get: function get(property) {
    return this.state[property];
  },


  /** Set some property
  @param {String} property
  @param {*} value
  @return {undefined} */
  set: function set(property, value) {
    this.state[property] = value;
    if (_config2.default.type === 'development') {
      (0, _log2.default)('Statistics. Set ' + property + '. New value: ', value);
    }
    _storage2.default.setItem('statistics', this.state);
    this.setUninstallUrl();
  },


  /** Increase counter property
  @param {String}
  @return {undefined} */
  increase: function increase(property) {
    this.state[property]++;
    if (_config2.default.type === 'development') {
      (0, _log2.default)('Statistics. Increase ' + property + '. New value: ', this.state[property]);
    }
    _storage2.default.setItem('statistics', this.state);
    this.setUninstallUrl();
  }
};

_storage2.default.ready.then(function () {
  Statistics.initiate();

  // Initial set of uninstall URL
  Statistics.setUninstallUrl();

  _store2.default.ready.then(function () {
    (0, _listeners2.default)(Statistics);
  }); // Listen to store changes
});

exports.default = Statistics;

},{"./getInitialState":31,"./listeners":33,"config":"config","core/log":129,"core/runtime.setUninstallURL":142,"core/storage":145,"core/store":148,"tools/urlModifyParameters":181}],33:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _browser = require('core/browser');

var _browser2 = _interopRequireDefault(_browser);

var _Counters = require('core/Counters');

var _Counters2 = _interopRequireDefault(_Counters);

var _store = require('core/store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
@param {Object} Statistics
@return {undefined} */
var listeners = function listeners(Statistics) {
  // Setup of language
  Statistics.set('language', _browser2.default.i18n.getUILanguage().slice(0, 2).toLowerCase());

  // Save location country changes
  _Counters2.default.addListener('country changes', function (value) {
    Statistics.set('countryChanges', value);
  });

  // Number of clicks on browser icon
  _Counters2.default.addListener('icon clicks', function (value) {
    Statistics.set('iconClicks', value);
  });

  // Count of transitions to locations page
  _Counters2.default.addListener('popup: location page shows', function (value) {
    Statistics.set('locationPageShows', value);
  });

  // Count of Proxy OFF to ON
  _Counters2.default.addListener('popup: proxy on', function (value) {
    Statistics.set('proxyOn', value);
  });

  // Count of successfully loaded proxied pages.
  _Counters2.default.addListener('proxied pages', function (value) {
    Statistics.set('proxiedPages', value);
  });

  // Count of onProxyError errors
  _Counters2.default.addListener('proxy errors', function (value) {
    Statistics.set('proxyErrors', value);
  });

  // How much times user successfully logined
  _Counters2.default.addListener('user login', function (value) {
    Statistics.set('userLoginCount', value);
  });

  // Is user logined?
  _store2.default.compare(function (_ref) {
    var email = _ref['user'].email;
    return Boolean(email);
  }, function (logined) {
    Statistics.set('userLogined', logined);
  });

  // Integer count of full days from installation to removal
  var loop = function loop() {
    var installDate = Statistics.get('installDate');

    if (installDate) {
      var days = Math.floor((Date.now() - installDate) / (24 * 3600 * 1000));
      if (days < 0) days = 0;
      Statistics.set('daysLive', days);
    }

    setTimeout(loop, 3600 * 1000);
  };
  setTimeout(loop, 30 * 1000);
};

exports.default = listeners;

},{"core/Counters":26,"core/browser":118,"core/store":148}],34:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ajaxes = require('core/ajaxes');

var _ajaxes2 = _interopRequireDefault(_ajaxes);

var _log = require('core/log');

var _log2 = _interopRequireDefault(_log);

var _store = require('core/store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Account object
@typedef {object} Account
@property {object} credentials - (some object with property access_token)
@property {true} [guest] - guest account or not
@property {integer} validUntil - timestamp in format Date.now()
@property {integer} version - timestamp (JUNK) */

/** Direct load of account without any delay
@return {Promise<Account>} */
var directLoad = function directLoad() {
  console.time('account.load');

  return _ajaxes2.default.account(_store2.default.getState().user.credentials).finally(function () {
    console.timeEnd('account.load');
  }).then(function (data) {
    _store2.default.dispatch({ 'type': 'User data change', data: data });

    return _store2.default.getState().user; // With validUntil!
  }, function (error) {
    _log2.default.warn('Account load: fetch: ', error);

    return Promise.reject(error);
  });
};

/** Load account data from local storage and ... (async function)
@return {Promise<Account>} */
var load = function load() {
  var account = _store2.default.getState().user;

  /** Does property .validUntil valid and not expired? true = yes
  @type {Boolean} */
  var validAccount = Boolean(account.validUntil && account.validUntil >= Date.now());
  if (validAccount) return Promise.resolve(account);

  if (!account.guest) {
    (0, _log2.default)('revalidating invalid account, ', account);
    (0, _log2.default)('Account load: current=%o fetched=%o', account.version, account);
  }

  return directLoad();
};

/** Clear account data (sync function)
@return {Object} new account data (guest in fact) */
var clear = function clear() {
  (0, _log2.default)('account.clear');

  var account = { 'guest': true, 'premium': false };
  _store2.default.dispatch({ 'type': 'User data change', 'data': account });

  return account;
};

/** Used in external management of this extension
@return {Promise} */
var reload = function reload() {
  return directLoad().catch(function (error) {
    _log2.default.error('failed to load account', error);

    _store2.default.dispatch({
      'type': 'User data change',
      'data': { 'guest': true, 'premium': false }
    });

    return Promise.reject(error);
  });
};

exports.default = { clear: clear, directLoad: directLoad, load: load, reload: reload };

},{"core/ajaxes":40,"core/log":129,"core/store":148}],35:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _login = require('./login');

var _login2 = _interopRequireDefault(_login);

var _logout = require('./logout');

var _logout2 = _interopRequireDefault(_logout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actions = { login: _login2.default, logout: _logout2.default };

exports.default = actions;

},{"./login":36,"./logout":37}],36:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ajax = require('tools/ajax');

var _ajax2 = _interopRequireDefault(_ajax);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _ga = require('core/ga');

var _ga2 = _interopRequireDefault(_ga);

var _log = require('core/log');

var _log2 = _interopRequireDefault(_log);

var _store = require('core/store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @type {String} */
var prefix = _config2.default.browsec.apiPrefix;

/** Authenticate user and obtain access credentials
@param {String} email
@param {String} password
@return {Promise} */

exports.default = function (_ref) {
  var email = _ref.email,
      password = _ref.password;
  return (0, _ajax2.default)(prefix + 'authentication', { 'data': { email: email, password: password }, 'dataType': 'json' }).then(function (account) {
    _store2.default.dispatch({ 'type': 'User data change', 'data': account });
    return account;
  }, function (error) {
    var message = error.message,
        status = error.status;

    /** @type {Object} */

    var errorOutput = {
      'error': status === 401 ? 'unauthorized' : message, status: status
    };

    (0, _log2.default)('browsec.authenticate', 'ERROR', errorOutput);
    (0, _ga2.default)('error', 'browsec.authenticate', JSON.stringify(errorOutput));

    return Promise.reject(error);
  });
};

},{"config":"config","core/ga":126,"core/log":129,"core/store":148,"tools/ajax":173}],37:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _account = require('core/account');

var _account2 = _interopRequireDefault(_account);

var _ajax = require('tools/ajax');

var _ajax2 = _interopRequireDefault(_ajax);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _encodeTokenCredentials = require('tools/encodeTokenCredentials');

var _encodeTokenCredentials2 = _interopRequireDefault(_encodeTokenCredentials);

var _ga = require('core/ga');

var _ga2 = _interopRequireDefault(_ga);

var _log = require('core/log');

var _log2 = _interopRequireDefault(_log);

var _store = require('core/store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @type {String} */
var prefix = _config2.default.browsec.apiPrefix;

/** Un-registers current set of credentials with the server.
@return {Promise} - completion of all sub-tasks */
var logout = function logout() {
  var credentials = _store2.default.getState().user.credentials;

  var headers = {};
  if (credentials) {
    headers.Authorization = (0, _encodeTokenCredentials2.default)(credentials);
  }

  // Clear account
  _account2.default.clear();

  // Remove token from server
  return (0, _ajax2.default)( // ensure that tokens/sessions have been deleted on the server, otherwise ignore
  prefix + 'authentication', { headers: headers, 'method': 'DELETE' }).catch(function (_ref) {
    var message = _ref.message,
        status = _ref.status;

    /** @type {Object} */
    var error = {
      'error': status === 401 ? 'unauthorized' : message, status: status
    };

    _log2.default.error('Logout error', error);
    (0, _ga2.default)('error', 'browsec.deauthenticate', JSON.stringify(error));
  });
};

exports.default = logout;

},{"config":"config","core/account":34,"core/ga":126,"core/log":129,"core/store":148,"tools/ajax":173,"tools/encodeTokenCredentials":175}],38:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ajax = require('tools/ajax');

var _ajax2 = _interopRequireDefault(_ajax);

var _encodeTokenCredentials = require('tools/encodeTokenCredentials');

var _encodeTokenCredentials2 = _interopRequireDefault(_encodeTokenCredentials);

var _ga = require('core/ga');

var _ga2 = _interopRequireDefault(_ga);

var _log = require('core/log');

var _log2 = _interopRequireDefault(_log);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Get user data from server
@param {Object} [credentials]
@return {Promise} */
exports.default = function (credentials) {
  /** @type {String} */
  var url = credentials ? _config2.default.browsec.apiPrefix + 'account' // cloudfront
  : _config2.default.browsec.originalDomainApiPrefix + 'account'; // browsec.com for free accounts

  /** @type {Object} */
  var headers = {};
  if (credentials) {
    headers.Authorization = (0, _encodeTokenCredentials2.default)(credentials);
  }

  /** @type {Object} */
  var options = { 'method': 'GET', 'dataType': 'json', headers: headers };

  return (
    // First level
    new Promise(function (resolve, reject) {
      (0, _ajax2.default)(url, options).then(resolve, reject);

      setTimeout(reject, 30 * 1000); // Automatic rejection in 30 seconds
    }).catch( // Second level
    function () {
      return (0, _ajax2.default)(_config2.default.browsec.apiPrefix + 'account', options);
    } // cloudfront
    ).then( // Processing data
    function (data) {
      (0, _log2.default)('ajaxes.account', 'data', data);
      return data;
    }, function (error) {
      var message = error.message;


      (0, _ga2.default)('error', 'browsec.account', JSON.stringify({ 'status': message, error: error }));

      return Promise.reject({ 'status': message, error: error });
    })
  );
};

},{"config":"config","core/ga":126,"core/log":129,"tools/ajax":173,"tools/encodeTokenCredentials":175}],39:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ajax = require('tools/ajax');

var _ajax2 = _interopRequireDefault(_ajax);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _encodeTokenCredentials = require('tools/encodeTokenCredentials');

var _encodeTokenCredentials2 = _interopRequireDefault(_encodeTokenCredentials);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/** Get list of smart settings from server
@param {Object} credentials
@return {Promise<Array>} */
exports.default = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(credentials) {
    var _ref2, error, list, ok;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _ajax2.default)(_config2.default.browsec.apiPrefix + 'smart_settings', {
              'dataType': 'json',
              'headers': { 'Authorization': (0, _encodeTokenCredentials2.default)(credentials) },
              'method': 'GET'
            });

          case 2:
            _ref2 = _context.sent;
            error = _ref2['error_message'];
            list = _ref2.list;
            ok = _ref2.ok;

            if (ok) {
              _context.next = 8;
              break;
            }

            return _context.abrupt('return', Promise.reject(error));

          case 8:
            return _context.abrupt('return', list);

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

},{"config":"config","tools/ajax":173,"tools/encodeTokenCredentials":175}],40:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _account = require('./account');

var _account2 = _interopRequireDefault(_account);

var _getSmartSettings = require('./getSmartSettings');

var _getSmartSettings2 = _interopRequireDefault(_getSmartSettings);

var _premiumSignup = require('./premiumSignup');

var _premiumSignup2 = _interopRequireDefault(_premiumSignup);

var _servers = require('./servers');

var _servers2 = _interopRequireDefault(_servers);

var _setSmartSettings = require('./setSmartSettings');

var _setSmartSettings2 = _interopRequireDefault(_setSmartSettings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import signup from './signup';


exports.default = {
  account: _account2.default,
  getSmartSettings: _getSmartSettings2.default,
  // ipInfo,
  premiumSignup: _premiumSignup2.default,
  servers: _servers2.default,
  setSmartSettings: _setSmartSettings2.default
  // signup
};
// import ipInfo from './ipInfo';
/** All AJAXes here! */

},{"./account":38,"./getSmartSettings":39,"./premiumSignup":41,"./servers":42,"./setSmartSettings":43}],41:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ajax = require('tools/ajax');

var _ajax2 = _interopRequireDefault(_ajax);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _log = require('core/log');

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** (Used at offer 2 page)
@param {string} email
@param {string} token
@return {Promise} */
exports.default = function (email, token) {
  return (0, _ajax2.default)(_config2.default.browsec.baseUrl + 'en/users.json', {
    'headers': {
      'Content-Type': 'application/json'
    },
    'data': JSON.stringify({
      'user': {
        email: email,
        'create_password_after_activation': true,
        'trial_premium_token': token
      }
    }),
    'dataType': 'json'
  }).then(function (data) {
    (0, _log2.default)('Response status: %d', data.status);
    (0, _log2.default)(data);

    return data;
  }, function (error) {
    var status = error.status,
        message = error.message;

    (0, _log2.default)(status + ': ' + message);

    return Promise.reject(error);
  });
};

},{"config":"config","core/log":129,"tools/ajax":173}],42:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ajax = require('tools/ajax');

var _ajax2 = _interopRequireDefault(_ajax);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _ga = require('core/ga');

var _ga2 = _interopRequireDefault(_ga);

var _log = require('core/log');

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Get list of all servers
@return {Promise} */
exports.default = function () {
  return (0, _ajax2.default)(_config2.default.browsec.apiPrefix + 'servers', { 'dataType': 'json', 'method': 'GET' }).catch(function (_ref) {
    var message = _ref.message,
        status = _ref.status;

    /** @type {Object} */
    var error = { status: status, 'error': message };

    _log2.default.error('ajaxes.servers', error);
    (0, _ga2.default)('error', 'browsec.servers', JSON.stringify(error));

    return Promise.reject(error);
  });
};

},{"config":"config","core/ga":126,"core/log":129,"tools/ajax":173}],43:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ajax = require('tools/ajax');

var _ajax2 = _interopRequireDefault(_ajax);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _encodeTokenCredentials = require('tools/encodeTokenCredentials');

var _encodeTokenCredentials2 = _interopRequireDefault(_encodeTokenCredentials);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Set new smart settings
@param {Object} credentials
@param {Array<Object>} filters
@return {Promise} */
exports.default = function (_ref) {
  var credentials = _ref.credentials,
      filters = _ref.filters;

  var headers = {
    'Authorization': (0, _encodeTokenCredentials2.default)(credentials),
    'Content-Type': 'application/json'
  };

  return (0, _ajax2.default)(_config2.default.browsec.apiPrefix + 'smart_settings', {
    'dataType': 'json',
    headers: headers,
    'method': 'PUT',
    'body': JSON.stringify({ 'smart_settings': filters })
  });
};

},{"config":"config","tools/ajax":173,"tools/encodeTokenCredentials":175}],44:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _store = require('core/store');

var _store2 = _interopRequireDefault(_store);

var _urlModifyParameters = require('tools/urlModifyParameters');

var _urlModifyParameters2 = _interopRequireDefault(_urlModifyParameters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
@param {String} url
@param {Function} [action]
@return {String} */
// Any link to browsec.com must contain count of days after installation
// Syntax like urlModifyParameters
var browsecLink = function browsecLink(url) {
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (search) {
    return search;
  };

  /**
  @param {Object} search
  @return {Object} */
  var daysAction = function daysAction(search) {
    return Object.assign(action(search), { 'instd': _store2.default.getState().daysAfterInstall });
  };

  return (0, _urlModifyParameters2.default)(url, daysAction);
};

exports.default = browsecLink;

},{"core/store":148,"tools/urlModifyParameters":181}],45:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindObjects = require('../bindObjects');

var _bindObjects2 = _interopRequireDefault(_bindObjects);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.accessibilityFeatures || !_isChrome2.default) return _ns2.default.accessibilityFeatures;

  return (0, _bindObjects2.default)({}, _ns2.default.accessibilityFeatures, ['animationPolicy', 'autoclick', 'caretHighlight', 'cursorHighlight', 'focusHighlight', 'highContrast', 'largeCursor', 'screenMagnifier', 'selectToSpeak', 'spokenFeedback', 'stickyKeys', 'switchAccess', 'virtualKeyboard']);
}; /** accessibilityFeatures (Chrome only)
   https://developer.chrome.com/extensions/accessibilityFeatures */

},{"../bindObjects":115,"../isChrome":119,"../ns":120}],46:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindAll = require('../bindAll');

var _bindAll2 = _interopRequireDefault(_bindAll);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.alarms || !_isChrome2.default) return _ns2.default.alarms;

  return (0, _bindAll2.default)({}, _ns2.default.bookmarks, {
    'objects': ['onAlarm'],
    'methods': ['create'],
    'promises': {
      '0': ['getAll', 'clearAll'],
      '0-1': ['clear', 'get']
    }
  });
}; /** Alarms
   https://developer.chrome.com/extensions/alarms
   https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/alarms */

},{"../bindAll":111,"../isChrome":119,"../ns":120}],47:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindAll = require('../bindAll');

var _bindAll2 = _interopRequireDefault(_bindAll);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.bookmarks || !_isChrome2.default) return _ns2.default.bookmarks;

  return (0, _bindAll2.default)({}, _ns2.default.bookmarks, {
    'objects': ['onCreated', 'onRemoved', 'onChanged', 'onMoved', 'onChildrenReordered', 'onImportBegan', 'onImportEnded'],
    'promises': {
      '0': ['getTree'],
      '1': ['create', 'get', 'getChildren', 'getRecent', 'getSubTree', 'removeTree', 'search'],
      '2': ['move', 'update']
    }
  });
}; /** Bookmarks
   https://developer.chrome.com/extensions/bookmarks
   https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/bookmarks */

},{"../bindAll":111,"../isChrome":119,"../ns":120}],48:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindAll = require('../bindAll');

var _bindAll2 = _interopRequireDefault(_bindAll);

var _bindMethods = require('../bindMethods');

var _bindMethods2 = _interopRequireDefault(_bindMethods);

var _bindPromiseReturn = require('../bindPromiseReturn');

var _bindPromiseReturn2 = _interopRequireDefault(_bindPromiseReturn);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _window = window,
    _ = _window._; /** BrowserAction
                   https://developer.chrome.com/extensions/browserAction
                   https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/browserAction */

exports.default = function () {
  if (!_ns2.default.browserAction) return;

  var browserAction = (0, _bindAll2.default)({}, _ns2.default.browserAction, {
    'objects': ['onClicked'],
    'methods': ['setTitle', 'setPopup', 'enable', 'disable']
  });
  if (_isChrome2.default) {
    (0, _bindPromiseReturn2.default)(browserAction, _ns2.default.browserAction, { '1': ['setIcon'] });
  } else {
    (0, _bindMethods2.default)(browserAction, _ns2.default.browserAction, ['setIcon']);
  }

  if (_ns2.default.browserAction.setBadgeText) {
    browserAction.setBadgeText = function (details) {
      if (typeof details === 'string') details = { 'text': details };
      _ns2.default.browserAction.setBadgeText(details);
    };
    browserAction.removeBadgeText = function () {
      browserAction.setBadgeText('');
    };
  }
  if (_ns2.default.browserAction.setBadgeBackgroundColor) {
    browserAction.setBadgeBackgroundColor = function (details) {
      if (typeof details === 'string' || Array.isArray(details)) {
        details = { 'color': details };
      }
      _ns2.default.browserAction.setBadgeBackgroundColor(details);
    };
  }

  // 0 arguments support
  return _.transform(['getBadgeText', 'getTitle', 'getPopup', 'getBadgeBackgroundColor'], function (carry, property) {
    if (!_ns2.default.browserAction[property]) return;
    carry[property] = function () {
      var details = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (typeof details === 'number') details = { 'tabId': details };

      return _isChrome2.default ? new Promise(function (resolve) {
        _ns2.default.browserAction[property](details, resolve);
      }) : _ns2.default.browserAction[property](details);
    };
  }, browserAction);
};

},{"../bindAll":111,"../bindMethods":114,"../bindPromiseReturn":116,"../isChrome":119,"../ns":120}],49:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _ns2.default.browserSettings;
}; /** browserSettings (FF only)
   https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/browserSettings */

},{"../ns":120}],50:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindPromiseReturn = require('../bindPromiseReturn');

var _bindPromiseReturn2 = _interopRequireDefault(_bindPromiseReturn);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.browsingData || !_isChrome2.default) return _ns2.default.browsingData;

  return (0, _bindPromiseReturn2.default)({}, _ns2.default.browsingData, {
    '0': ['settings'],
    '1': ['removeAppcache', 'removeCache', 'removeCookies', 'removeDownloads', 'removeFileSystems', 'removeFormData', 'removeHistory', 'removeIndexedDB', 'removeLocalStorage', 'removePluginData', 'removePasswords', 'removeWebSQL'],
    '2': ['remove']
  });
}; /** BrowsingData (complete)
   https://developer.chrome.com/extensions/browsingData
   https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/browsingData */

},{"../bindPromiseReturn":116,"../isChrome":119,"../ns":120}],51:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindAll = require('../bindAll');

var _bindAll2 = _interopRequireDefault(_bindAll);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.certificateProvider || !_isChrome2.default) return _ns2.default.certificateProvider;

  return (0, _bindAll2.default)({}, _ns2.default.certificateProvider, {
    'objects': ['onCertificatesRequested', 'onSignDigestRequested'],
    'promises': {
      '1': ['requestPin', 'stopPinRequest']
    }
  });
}; /** certificateProvider (Chrome only)
   https://developer.chrome.com/extensions/certificateProvider */

},{"../bindAll":111,"../isChrome":119,"../ns":120}],52:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindAll = require('../bindAll');

var _bindAll2 = _interopRequireDefault(_bindAll);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.commands || !_isChrome2.default) return _ns2.default.commands;

  return (0, _bindAll2.default)({}, _ns2.default.commands, {
    'objects': ['onCommand'],
    'promises': { '0': ['getAll'] }
  });
}; /** Commands
   https://developer.chrome.com/extensions/commands
   https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/commands */

},{"../bindAll":111,"../isChrome":119,"../ns":120}],53:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindAll = require('../bindAll');

var _bindAll2 = _interopRequireDefault(_bindAll);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.contextMenus || !_isChrome2.default) return _ns2.default.contextMenus;

  var contextMenus = {
    get 'ACTION_MENU_TOP_LEVEL_LIMIT'() {
      return _ns2.default.contextMenus.ACTION_MENU_TOP_LEVEL_LIMIT;
    }
  };

  return (0, _bindAll2.default)(contextMenus, _ns2.default.contextMenus, {
    'objects': ['onClicked'],
    'promises': {
      '0': ['removeAll'],
      '1': ['create', 'remove'],
      '2': ['update']
    }
  });
}; /** ContextMenus
   https://developer.chrome.com/extensions/contextMenus
   https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/contextMenus */

},{"../bindAll":111,"../isChrome":119,"../ns":120}],54:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindMethods = require('../bindMethods');

var _bindMethods2 = _interopRequireDefault(_bindMethods);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** ContextualIdentities (FF only, complete)
https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/contextualIdentities */
exports.default = function () {
  if (!_ns2.default.contextualIdentities) return;

  var contextualIdentities = (0, _bindMethods2.default)({}, _ns2.default.contextualIdentities, ['create', 'get', 'remove', 'update']);

  if (_ns2.default.contextualIdentities.query) {
    contextualIdentities.query = function (details) {
      if (typeof details === 'string') details = { 'name': details };
      return _ns2.default.contextualIdentities.query(details);
    };
  }

  return contextualIdentities;
};

},{"../bindMethods":114,"../ns":120}],55:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindAll = require('../bindAll');

var _bindAll2 = _interopRequireDefault(_bindAll);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.cookies || !_isChrome2.default) return _ns2.default.cookies;

  return (0, _bindAll2.default)({}, _ns2.default.cookies, {
    'objects': ['onChanged'],
    'promises': {
      '0': ['getAllCookieStores'],
      '1': ['get', 'getAll', 'set', 'remove']
    }
  });
}; /** Cookies
   https://developer.chrome.com/extensions/cookies
   https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/cookies */

},{"../bindAll":111,"../isChrome":119,"../ns":120}],56:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindAll = require('../bindAll');

var _bindAll2 = _interopRequireDefault(_bindAll);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.debugger || !_isChrome2.default) return _ns2.default.debugger;

  return (0, _bindAll2.default)({}, _ns2.default.debugger, {
    'objects': ['onDetach', 'onEvent'],
    'promises': {
      '0': ['getTargets'],
      '1': ['detach'],
      '2': ['attach'],
      '2-3': ['sendCommand']
    }
  });
}; /** debugger (Chrome only)
   https://developer.chrome.com/extensions/debugger */

},{"../bindAll":111,"../isChrome":119,"../ns":120}],57:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindObjects = require('../bindObjects');

var _bindObjects2 = _interopRequireDefault(_bindObjects);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.declarativeContent || !_isChrome2.default) return _ns2.default.declarativeContent;

  return (0, _bindObjects2.default)({}, _ns2.default.declarativeContent, ['onPageChanged']);
}; /** declarativeContent (Chrome only)
   https://developer.chrome.com/extensions/declarativeContent */

},{"../bindObjects":115,"../isChrome":119,"../ns":120}],58:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindAll = require('../bindAll');

var _bindAll2 = _interopRequireDefault(_bindAll);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.desktopCapture || !_isChrome2.default) return _ns2.default.desktopCapture;

  return (0, _bindAll2.default)({}, _ns2.default.desktopCapture, {
    'methods': ['cancelChooseDesktopMedia'],
    'promises': { '1-2': ['chooseDesktopMedia'] }
  });
}; /** desktopCapture (Chrome only)
   https://developer.chrome.com/extensions/desktopCapture */

},{"../bindAll":111,"../isChrome":119,"../ns":120}],59:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ns = require('../../ns');

var _ns2 = _interopRequireDefault(_ns);

var _inspectedWindow = require('./inspectedWindow');

var _inspectedWindow2 = _interopRequireDefault(_inspectedWindow);

var _network = require('./network');

var _network2 = _interopRequireDefault(_network);

var _panels = require('./panels');

var _panels2 = _interopRequireDefault(_panels);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.devtools) return;

  return {
    'inspectedWindow': (0, _inspectedWindow2.default)(),
    'network': (0, _network2.default)(),
    'panels': (0, _panels2.default)()
  };
};

// APIs

},{"../../ns":120,"./inspectedWindow":60,"./network":61,"./panels":62}],60:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindAll = require('../../bindAll');

var _bindAll2 = _interopRequireDefault(_bindAll);

var _isChrome = require('../../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.devtools.inspectedWindow || !_isChrome2.default) return _ns2.default.devtools.inspectedWindow;

  var inspectedWindow = {
    get 'tabId'() {
      return _ns2.default.devtools.inspectedWindow.tabId;
    }
  };

  return (0, _bindAll2.default)(inspectedWindow, _ns2.default.devtools.inspectedWindow, {
    'objects': ['onResourceAdded', 'onResourceContentCommitted'],
    'methods': ['reload'],
    'promises': {
      '0': ['getResources'],
      '1-2': ['eval']
    }
  });
}; /** devtools.inspectedWindow
   https://developer.chrome.com/extensions/devtools_inspectedWindow
   https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/devtools.inspectedWindow */

},{"../../bindAll":111,"../../isChrome":119,"../../ns":120}],61:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindAll = require('../../bindAll');

var _bindAll2 = _interopRequireDefault(_bindAll);

var _isChrome = require('../../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.devtools.network || !_isChrome2.default) return _ns2.default.devtools.network;

  return (0, _bindAll2.default)({}, _ns2.default.devtools.network, {
    'objects': ['onNavigated', 'onRequestFinished'],
    'promises': { '0': ['getHAR'] }
  });
}; /** devtools.network
   https://developer.chrome.com/extensions/devtools_network
   https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/devtools.network */

},{"../../bindAll":111,"../../isChrome":119,"../../ns":120}],62:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindPromiseReturn = require('../../bindPromiseReturn');

var _bindPromiseReturn2 = _interopRequireDefault(_bindPromiseReturn);

var _isChrome = require('../../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.devtools.panels || !_isChrome2.default) return _ns2.default.devtools.panels;

  var panels = {
    get 'elements'() {
      return _ns2.default.devtools.panels.elements;
    },
    get 'sources'() {
      return _ns2.default.devtools.panels.sources;
    },
    get 'themeName'() {
      return _ns2.default.devtools.panels.themeName;
    }
  };

  return (0, _bindPromiseReturn2.default)(panels, _ns2.default.devtools.panels, {
    '0': ['setOpenResourceHandler'],
    '2': ['openResource'],
    '3': ['create']
  });
}; /** devtools.panels
   https://developer.chrome.com/extensions/devtools_panels
   https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/devtools.panels */

},{"../../bindPromiseReturn":116,"../../isChrome":119,"../../ns":120}],63:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindPromiseReturn = require('../bindPromiseReturn');

var _bindPromiseReturn2 = _interopRequireDefault(_bindPromiseReturn);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.documentScan || !_isChrome2.default) return _ns2.default.documentScan;

  return (0, _bindPromiseReturn2.default)({}, _ns2.default.documentScan, {
    '1': ['documentScan']
  });
}; /** documentScan (Chrome only)
   https://developer.chrome.com/extensions/documentScan */

},{"../bindPromiseReturn":116,"../isChrome":119,"../ns":120}],64:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindAll = require('../bindAll');

var _bindAll2 = _interopRequireDefault(_bindAll);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.downloads || !_isChrome2.default) return _ns2.default.downloads;

  return (0, _bindAll2.default)({}, _ns2.default.downloads, {
    'objects': ['onCreated', 'onErased', 'onChanged', 'onDeterminingFilename'],
    'methods': ['drag', 'open', 'setShelfEnabled', 'show', 'showDefaultFolder'],
    'promises': {
      '1': ['acceptDanger', 'cancel', 'download', 'erase', 'pause', 'removeFile', 'resume', 'search'],
      '1-2': ['getFileIcon']
    }
  });
}; /** Downloads
   https://developer.chrome.com/extensions/downloads
   https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/downloads */

},{"../bindAll":111,"../isChrome":119,"../ns":120}],65:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindPromiseReturn = require('../../bindPromiseReturn');

var _bindPromiseReturn2 = _interopRequireDefault(_bindPromiseReturn);

var _isChrome = require('../../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.enterprise.deviceAttributes || !_isChrome2.default) {
    return _ns2.default.enterprise.deviceAttributes;
  }

  return (0, _bindPromiseReturn2.default)({}, _ns2.default.enterprise.deviceAttributes, {
    '0': ['getDirectoryDeviceId']
  });
}; /** enterprise.deviceAttributes (Chrome only)
   https://developer.chrome.com/extensions/enterprise_deviceAttributes */

},{"../../bindPromiseReturn":116,"../../isChrome":119,"../../ns":120}],66:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ns = require('../../ns');

var _ns2 = _interopRequireDefault(_ns);

var _deviceAttributes = require('./deviceAttributes');

var _deviceAttributes2 = _interopRequireDefault(_deviceAttributes);

var _platformKeys = require('./platformKeys');

var _platformKeys2 = _interopRequireDefault(_platformKeys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// APIs
exports.default = function () {
  if (!_ns2.default.enterprise) return;

  return {
    'deviceAttributes': (0, _deviceAttributes2.default)(),
    'platformKeys': (0, _platformKeys2.default)()
  };
};

},{"../../ns":120,"./deviceAttributes":65,"./platformKeys":67}],67:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindPromiseReturn = require('../../bindPromiseReturn');

var _bindPromiseReturn2 = _interopRequireDefault(_bindPromiseReturn);

var _isChrome = require('../../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.enterprise.platformKeys || !_isChrome2.default) {
    return _ns2.default.enterprise.platformKeys;
  }

  return (0, _bindPromiseReturn2.default)({}, _ns2.default.enterprise.platformKeys, {
    '0': ['getTokens'],
    '1': ['getCertificates'],
    '2': ['challengeUserKey', 'importCertificate', 'removeCertificate'],
    '1-2': ['challengeMachineKey']
  });
}; /** enterprise.platformKeys (Chrome only)
   https://developer.chrome.com/extensions/enterprise_platformKeys */

},{"../../bindPromiseReturn":116,"../../isChrome":119,"../../ns":120}],68:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindAll = require('../bindAll');

var _bindAll2 = _interopRequireDefault(_bindAll);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.extension || !_isChrome2.default) return _ns2.default.extension;

  var extension = {
    get 'lastError'() {
      return _ns2.default.extension.lastError;
    },
    get 'inIncognitoContext'() {
      return _ns2.default.extension.inIncognitoContext;
    }
  };

  return (0, _bindAll2.default)(extension, _ns2.default.extension, {
    'methods': ['getViews', 'getBackgroundPage', 'setUpdateUrlData'],
    'promises': {
      '0': ['isAllowedIncognitoAccess', 'isAllowedFileSchemeAccess']
    }
  });
}; /** Extension
   https://developer.chrome.com/extensions/extension
   https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/extension */

},{"../bindAll":111,"../isChrome":119,"../ns":120}],69:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindAll = require('../bindAll');

var _bindAll2 = _interopRequireDefault(_bindAll);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.fileBrowserHandler || !_isChrome2.default) return _ns2.default.fileBrowserHandler;

  return (0, _bindAll2.default)({}, _ns2.default.fileBrowserHandler, {
    'objects': ['onExecute'],
    'promises': { '1': ['selectFile'] }
  });
}; /** fileBrowserHandler (Chrome only)
   https://developer.chrome.com/extensions/fileBrowserHandler */

},{"../bindAll":111,"../isChrome":119,"../ns":120}],70:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindAll = require('../bindAll');

var _bindAll2 = _interopRequireDefault(_bindAll);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.fileSystemProvider || !_isChrome2.default) return _ns2.default.fileSystemProvider;

  return (0, _bindAll2.default)({}, _ns2.default.fileSystemProvider, {
    'objects': ['onAbortRequested', 'onAddWatcherRequested', 'onCloseFileRequested', 'onCreateDirectoryRequested', 'onCreateFileRequested', 'onConfigureRequested', 'onCopyEntryRequested', 'onDeleteEntryRequested', 'onExecuteActionRequested', 'onGetActionsRequested', 'onGetMetadataRequested', 'onMountRequested', 'onMoveEntryRequested', 'onOpenFileRequested', 'onReadDirectoryRequested', 'onReadFileRequested', 'onRemoveWatcherRequested', 'onTruncateRequested', 'onUnmountRequested', 'onWriteFileRequested'],
    'promises': {
      '0': ['getAll'],
      '1': ['get', 'mount', 'notify', 'unmount']
    }
  });
}; /** fileSystemProvider (Chrome only)
   https://developer.chrome.com/extensions/fileSystemProvider */

},{"../bindAll":111,"../isChrome":119,"../ns":120}],71:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _ns2.default.find;
}; /** Find (FF only)
   https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/find */

},{"../ns":120}],72:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindAll = require('../bindAll');

var _bindAll2 = _interopRequireDefault(_bindAll);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.fontSettings || !_isChrome2.default) return _ns2.default.fontSettings;

  return (0, _bindAll2.default)({}, _ns2.default.fontSettings, {
    'objects': ['onDefaultFixedFontSizeChanged', 'onDefaultFontSizeChanged', 'onFontChanged', 'onMinimumFontSizeChanged'],
    'promises': {
      '0': ['getFontList'],
      '1': ['clearFont', 'getFont', 'setDefaultFixedFontSize', 'setDefaultFontSize', 'setMinimumFontSize', 'setFont'],
      '0-1': ['clearDefaultFixedFontSize', 'clearDefaultFontSize', 'clearMinimumFontSize', 'getDefaultFixedFontSize', 'getDefaultFontSize', 'getMinimumFontSize']
    }
  });
}; /** fontSettings (Chrome only)
   https://developer.chrome.com/extensions/fontSettings */

},{"../bindAll":111,"../isChrome":119,"../ns":120}],73:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindAll = require('../bindAll');

var _bindAll2 = _interopRequireDefault(_bindAll);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.gcm || !_isChrome2.default) return _ns2.default.gcm;

  return (0, _bindAll2.default)({}, _ns2.default.gcm, {
    'methods': ['onMessage', 'onMessagesDeleted', 'onSendError'],
    'promises': {
      '0': ['unregister'],
      '1': ['register', 'send']
    }
  });
}; /** gcm (Chrome only)
   https://developer.chrome.com/extensions/gcm */

},{"../bindAll":111,"../isChrome":119,"../ns":120}],74:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindMethods = require('../bindMethods');

var _bindMethods2 = _interopRequireDefault(_bindMethods);

var _bindObjects = require('../bindObjects');

var _bindObjects2 = _interopRequireDefault(_bindObjects);

var _bindPromiseReturn = require('../bindPromiseReturn');

var _bindPromiseReturn2 = _interopRequireDefault(_bindPromiseReturn);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _window = window,
    _ = _window._; /** History
                   https://developer.chrome.com/extensions/history
                   https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/history */

exports.default = function () {
  if (!_ns2.default.history) return;

  var history = (0, _bindObjects2.default)({}, _ns2.default.history, ['onVisited', 'onVisitRemoved']);

  if (_isChrome2.default) {
    (0, _bindPromiseReturn2.default)(history, _ns2.default.history, {
      '0': ['deleteAll'],
      '1': ['deleteRange', 'search']
    });
  } else {
    (0, _bindMethods2.default)(history, _ns2.default.history, ['deleteAll', 'deleteRange', 'search']);
  }

  // Support of url as argument
  return _.transform(['addUrl', 'deleteUrl', 'getVisits'], function (carry, property) {
    if (!_ns2.default.history[property]) return;
    carry[property] = function (details) {
      if (typeof details === 'string') details = { 'url': details };

      return _isChrome2.default ? new Promise(function (resolve) {
        _ns2.default.history[property](details, resolve);
      }) : _ns2.default.history[property](details);
    };
  }, history);
};

},{"../bindMethods":114,"../bindObjects":115,"../bindPromiseReturn":116,"../isChrome":119,"../ns":120}],75:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindAll = require('../bindAll');

var _bindAll2 = _interopRequireDefault(_bindAll);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.i18n || !_isChrome2.default) return _ns2.default.i18n;

  var i18n = (0, _bindAll2.default)({}, _ns2.default.i18n, {
    'methods': ['getMessage'],
    'promises': {
      '0': ['getAcceptLanguages'],
      '1': ['detectLanguage']
    }
  });

  /** @return {String} */
  i18n.getUILanguage = function () {
    return _ns2.default.i18n.getUILanguage && _ns2.default.i18n.getUILanguage() || navigator.language || navigator.userLanguage;
  };

  return i18n;
}; /** i18n
   https://developer.chrome.com/extensions/i18n
   https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/i18n */

},{"../bindAll":111,"../isChrome":119,"../ns":120}],76:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindAll = require('../bindAll');

var _bindAll2 = _interopRequireDefault(_bindAll);

var _bindMethods = require('../bindMethods');

var _bindMethods2 = _interopRequireDefault(_bindMethods);

var _bindPromiseReturn = require('../bindPromiseReturn');

var _bindPromiseReturn2 = _interopRequireDefault(_bindPromiseReturn);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.identity) return;

  var identity = (0, _bindAll2.default)({}, _ns2.default.identity, {
    'objects': ['onSignInChanged'],
    'methods': ['getRedirectURL']
  });

  if (_isChrome2.default) {
    (0, _bindPromiseReturn2.default)(identity, _ns2.default.identity, {
      '0': ['getAccounts', 'getProfileUserInfo'],
      '0-1': ['getAuthToken'],
      '1': ['launchWebAuthFlow']
    });
  } else {
    (0, _bindMethods2.default)(identity, _ns2.default.identity, ['getAccounts', 'getProfileUserInfo', 'getAuthToken', 'launchWebAuthFlow']);
  }

  if (_ns2.default.identity.removeCachedAuthToken) {
    identity.removeCachedAuthToken = function (details) {
      if (typeof details === 'string') details = { 'token': details };

      return _isChrome2.default ? new Promise(function (resolve) {
        _ns2.default.identity.removeCachedAuthToken(details, resolve);
      }) : _ns2.default.identity.removeCachedAuthToken(details);
    };
  }

  return identity;
}; /** Identity
   https://developer.chrome.com/extensions/identity
   https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/identity */

},{"../bindAll":111,"../bindMethods":114,"../bindPromiseReturn":116,"../isChrome":119,"../ns":120}],77:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindAll = require('../bindAll');

var _bindAll2 = _interopRequireDefault(_bindAll);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.idle || !_isChrome2.default) return _ns2.default.idle;

  return (0, _bindAll2.default)({}, _ns2.default.idle, {
    'objects': ['onStateChanged'],
    'methods': ['setDetectionInterval'],
    'promises': { '1': ['queryState'] }
  });
}; /** Idle (complete)
   https://developer.chrome.com/extensions/idle
   https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/idle */

},{"../bindAll":111,"../isChrome":119,"../ns":120}],78:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindAll = require('../bindAll');

var _bindAll2 = _interopRequireDefault(_bindAll);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _window = window,
    _ = _window._; /** input.ime (Chrome only)
                   https://developer.chrome.com/extensions/input_ime */

exports.default = function () {
  if (!_.get(_ns2.default, 'input.ime')) return;
  if (!_isChrome2.default) return _ns2.default.input.ime;

  return (0, _bindAll2.default)({}, _ns2.default.input.ime, {
    'objects': ['onActivate', 'onBlur', 'onCandidateClicked', 'onCompositionBoundsChanged', 'onDeactivated', 'onFocus', 'onInputContextUpdate', 'onKeyEvent', 'onMenuItemActivated', 'onReset', 'onSurroundingTextChanged'],
    'methods': ['hideInputView', 'keyEventHandled'],
    'promises': {
      '0': ['activate', 'deactivate'],
      '1': ['clearComposition', 'commitText', 'createWindow', 'deleteSurroundingText', 'hideWindow', 'sendKeyEvents', 'setMenuItems', 'setCandidates', 'setCandidateWindowProperties', 'setComposition', 'setCursorPosition', 'showWindow', 'updateMenuItems']
    }
  });
};

},{"../bindAll":111,"../isChrome":119,"../ns":120}],79:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindAll = require('../bindAll');

var _bindAll2 = _interopRequireDefault(_bindAll);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.instanceID || !_isChrome2.default) return _ns2.default.instanceID;

  return (0, _bindAll2.default)({}, _ns2.default.instanceID, {
    'objects': ['onTokenRefresh'],
    'promises': {
      '0': ['deleteID', 'getCreationTime', 'getID'],
      '1': ['deleteToken', 'getToken']
    }
  });
}; /** instanceID (Chrome only)
   https://developer.chrome.com/extensions/instanceID */

},{"../bindAll":111,"../isChrome":119,"../ns":120}],80:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindAll = require('../bindAll');

var _bindAll2 = _interopRequireDefault(_bindAll);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.management || !_isChrome2.default) return _ns2.default.management;

  return (0, _bindAll2.default)({}, _ns2.default.management, {
    'objects': ['onInstalled', 'onUninstalled', 'onEnabled', 'onDisabled', 'ExtensionInfo'],
    'promises': {
      '0': ['getAll', 'getSelf'],
      '1': ['get', 'getPermissionWarningsById', 'getPermissionWarningsByManifest', 'uninstallSelf', 'launchApp', 'createAppShortcut'],
      '2': ['setEnabled', 'uninstall', 'setLaunchType', 'generateAppForLink']
    }
  });
}; /** Management
   https://developer.chrome.com/extensions/management
   https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/management */

},{"../bindAll":111,"../isChrome":119,"../ns":120}],81:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindAll = require('../bindAll');

var _bindAll2 = _interopRequireDefault(_bindAll);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _window = window,
    _ = _window._; /** networking.config (Chrome only)
                   https://developer.chrome.com/extensions/networking_config */

exports.default = function () {
  if (!_.get(_ns2.default, 'networking.config')) return;
  if (!_isChrome2.default) return _ns2.default.networking.config;

  return (0, _bindAll2.default)({}, _ns2.default.networking.config, {
    'objects': ['onCaptivePortalDetected'],
    'promises': {
      '1': ['setNetworkFilter'],
      '2': ['finishAuthentication']
    }
  });
};

},{"../bindAll":111,"../isChrome":119,"../ns":120}],82:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindAll = require('../bindAll');

var _bindAll2 = _interopRequireDefault(_bindAll);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.notifications || !_isChrome2.default) return _ns2.default.notifications;

  return (0, _bindAll2.default)({}, _ns2.default.notifications, {
    'objects': ['onClosed', 'onClicked', 'onButtonClicked', 'onPermissionLevelChanged', 'onShowSettings'],
    'promises': {
      '0': ['getAll', 'getPermissionLevel'],
      '1': ['clear'],
      '1-2': ['create'],
      '2': ['update']
    }
  });
}; /** Notifications (complete)
   https://developer.chrome.com/extensions/notifications
   https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/notifications */

},{"../bindAll":111,"../isChrome":119,"../ns":120}],83:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _ns2.default.omnibox;
}; /** Omnibox (no async methods)
   https://developer.chrome.com/extensions/omnibox
   https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/omnibox */

},{"../ns":120}],84:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindAll = require('../bindAll');

var _bindAll2 = _interopRequireDefault(_bindAll);

var _bindMethods = require('../bindMethods');

var _bindMethods2 = _interopRequireDefault(_bindMethods);

var _bindPromiseReturn = require('../bindPromiseReturn');

var _bindPromiseReturn2 = _interopRequireDefault(_bindPromiseReturn);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _window = window,
    _ = _window._; /** PageAction
                   https://developer.chrome.com/extensions/pageAction
                   https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/pageAction */

exports.default = function () {
  if (!_ns2.default.pageAction) return;

  var pageAction = (0, _bindAll2.default)({}, _ns2.default.pageAction, {
    'objects': ['onClicked'],
    'methods': ['hide', 'show', 'setTitle', 'setPopup']
  });

  if (_isChrome2.default) {
    (0, _bindPromiseReturn2.default)(pageAction, _ns2.default.pageAction, { '1': ['setIcon'] });
  } else {
    (0, _bindMethods2.default)(pageAction, _ns2.default.pageAction, ['setIcon']);
  }

  // tabId without object
  return _.transform(['getTitle', 'getPopup'], function (carry, property) {
    if (!_ns2.default.pageAction[property]) return;

    carry[property] = function (details) {
      if (typeof details === 'number') details = { 'tabId': details };

      return _isChrome2.default ? new Promise(function (resolve) {
        _ns2.default.pageAction[property](details, resolve);
      }) : _ns2.default.pageAction[property](details);
    };
  }, pageAction);
};

},{"../bindAll":111,"../bindMethods":114,"../bindPromiseReturn":116,"../isChrome":119,"../ns":120}],85:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindPromiseReturn = require('../bindPromiseReturn');

var _bindPromiseReturn2 = _interopRequireDefault(_bindPromiseReturn);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.pageCapture || !_isChrome2.default) return _ns2.default.pageCapture;

  return (0, _bindPromiseReturn2.default)({}, _ns2.default.pageCapture, {
    '1': ['saveAsMHTML']
  });
}; /** pageCapture (Chrome only)
   https://developer.chrome.com/extensions/pageCapture */

},{"../bindPromiseReturn":116,"../isChrome":119,"../ns":120}],86:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindAll = require('../bindAll');

var _bindAll2 = _interopRequireDefault(_bindAll);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.permissions || !_isChrome2.default) return _ns2.default.permissions;

  return (0, _bindAll2.default)({}, _ns2.default.permissions, {
    'objects': ['onAdded', 'onRemoved'],
    'promises': {
      '0': ['getAll'],
      '1': ['contains', 'remove']
    },
    'fullPromises': {
      '1': ['request']
    }
  });
}; /** Permissions
   https://developer.chrome.com/extensions/permissions // F55+
   https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/permissions */

},{"../bindAll":111,"../isChrome":119,"../ns":120}],87:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindAll = require('../bindAll');

var _bindAll2 = _interopRequireDefault(_bindAll);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.platformKeys || !_isChrome2.default) return _ns2.default.platformKeys;

  return (0, _bindAll2.default)({}, _ns2.default.platformKeys, {
    'methods': ['subtleCrypto'],
    'promises': {
      '1': ['selectClientCertificates', 'verifyTLSServerCertificate'],
      '2': ['getKeyPair']
    }
  });
}; /** platformKeys (Chrome only)
   https://developer.chrome.com/extensions/platformKeys */

},{"../bindAll":111,"../isChrome":119,"../ns":120}],88:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindMethods = require('../bindMethods');

var _bindMethods2 = _interopRequireDefault(_bindMethods);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.power || !_isChrome2.default) return _ns2.default.power;

  return (0, _bindMethods2.default)({}, _ns2.default.power, ['releaseKeepAwake', 'requestKeepAwake']);
}; /** power (Chrome only)
   https://developer.chrome.com/extensions/power */

},{"../bindMethods":114,"../isChrome":119,"../ns":120}],89:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindObjects = require('../bindObjects');

var _bindObjects2 = _interopRequireDefault(_bindObjects);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.printerProvider || !_isChrome2.default) return _ns2.default.printerProvider;

  return (0, _bindObjects2.default)({}, _ns2.default.printerProvider, ['onGetCapabilityRequested', 'onGetPrintersRequested', 'onGetUsbPrinterInfoRequested', 'onPrintRequested']);
}; /** printerProvider (Chrome only)
   https://developer.chrome.com/extensions/printerProvider */

},{"../bindObjects":115,"../isChrome":119,"../ns":120}],90:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindBrowserSettings = require('../bindBrowserSettings');

var _bindBrowserSettings2 = _interopRequireDefault(_bindBrowserSettings);

var _buildBrowserSetting = require('../buildBrowserSetting');

var _buildBrowserSetting2 = _interopRequireDefault(_buildBrowserSetting);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _window = window,
    _ = _window._; /** Privacy
                   https://developer.chrome.com/extensions/privacy
                   https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/privacy */

exports.default = function () {
  var privacy = {};
  if (!_ns2.default.privacy) return _ns2.default.privacy;

  _.transform(['IPHandlingPolicy', 'services', 'websites'], function (carry, property) {
    carry[property] = _ns2.default.privacy[property];
  }, privacy);

  // FF54+, chrome
  if (_ns2.default.privacy.network) {
    // BrowserSettings
    var network = (0, _bindBrowserSettings2.default)({}, _ns2.default.privacy.network, ['networkPredictionEnabled', 'peerConnectionEnabled' // FF only feature
    ]);

    // WebRTC
    if (_ns2.default.privacy.network.webRTCIPHandlingPolicy) {
      network.webRTCIPHandlingPolicy = (0, _buildBrowserSetting2.default)(_ns2.default.privacy.network.webRTCIPHandlingPolicy);
    }
    // Deprecated features will be only if new version is not available
    else if (_ns2.default.privacy.network.webRTCNonProxiedUdpEnabled || _ns2.default.privacy.network.webRTCMultipleRoutesEnabled) {
        (0, _bindBrowserSettings2.default)(network, _ns2.default.privacy.network, ['webRTCNonProxiedUdpEnabled', 'webRTCMultipleRoutesEnabled']);
      }

    privacy.network = network;
  }

  // FF54+, chrome
  if (_ns2.default.privacy.websites) {
    var websites = (0, _bindBrowserSettings2.default)({}, _ns2.default.privacy.websites, ['hyperlinkAuditingEnabled', // FF54 + chrome
    'thirdPartyCookiesAllowed', // other only Chrome
    'referrersEnabled', 'protectedContentEnabled']);

    privacy.websites = websites;
  }

  if (_ns2.default.privacy.services) {
    // Chrome only
    var services = (0, _bindBrowserSettings2.default)({}, _ns2.default.privacy.services, ['alternateErrorPagesEnabled', 'autofillEnabled', 'hotwordSearchEnabled', 'passwordSavingEnabled', 'safeBrowsingEnabled', 'safeBrowsingExtendedReportingEnabled', 'searchSuggestEnabled', 'spellingServiceEnabled', 'translationServiceEnabled']);

    privacy.services = services;
  }

  return privacy;
};

},{"../bindBrowserSettings":112,"../buildBrowserSetting":117,"../ns":120}],91:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /** Proxy
                                                                                                                                                                                                                                                                              https://developer.chrome.com/extensions/proxy
                                                                                                                                                                                                                                                                              https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/proxy */


var _bindAll = require('../bindAll');

var _bindAll2 = _interopRequireDefault(_bindAll);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (_typeof(_ns2.default.proxy) !== 'object' || !_isChrome2.default) return _ns2.default.proxy;

  return (0, _bindAll2.default)({}, _ns2.default.proxy, {
    'objects': ['onProxyError'],
    'browserSettings': ['settings']
  });
};

},{"../bindAll":111,"../isChrome":119,"../ns":120}],92:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindAll = require('../bindAll');

var _bindAll2 = _interopRequireDefault(_bindAll);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _window = window,
    _ = _window._; /** Runtime
                   https://developer.chrome.com/extensions/runtime
                   https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/runtime */

exports.default = function () {
  if (!_ns2.default.runtime || !_isChrome2.default) return _ns2.default.runtime;

  var runtime = {
    get 'lastError'() {
      return _ns2.default.runtime.lastError;
    }
  };

  (0, _bindAll2.default)(runtime, _ns2.default.runtime, {
    'objects': ['id', 'onStartup', 'onInstalled', 'onSuspend', 'onSuspendCanceled', 'onUpdateAvailable', 'onConnect', 'onConnectExternal', 'onMessageExternal'],
    'methods': ['getManifest', 'getURL', 'reload', 'restart', 'connect', 'connectNative'],
    'promises': {
      '0': ['openOptionsPage', 'requestUpdateCheck', 'getPlatformInfo', 'getPackageDirectoryEntry'],
      '1': ['setUninstallURL', 'restartAfterDelay'],
      '2': ['sendNativeMessage'],
      '1-3': ['sendMessage']
    }
  });

  if (_ns2.default.runtime.onRestartRequired || _ns2.default.runtime.onBrowserUpdateAvailable) {
    runtime.onRestartRequired = _ns2.default.runtime.onRestartRequired || _ns2.default.runtime.onBrowserUpdateAvailable;
  }

  runtime.onMessage = {};
  {
    /** @type {Array<Object>} */
    var listeners = [];
    runtime.onMessage.addListener = function (callback) {
      var listener = function listener(message, sender, reply) {
        var returnValue = callback(message, sender, reply);
        if (returnValue instanceof Promise) {
          returnValue.then(function (arg) {
            reply(arg);
          });
        }
        return true;
        // Chrome: If you want to asynchronously use sendResponse, add return true;
        // to the onMessage event handler.
        // FF: The listener function can return either a Boolean or a Promise.
      };
      _ns2.default.runtime.onMessage.addListener(listener);
      listeners.push({ 'original': callback, 'modified': listener });
    };

    runtime.onMessage.hasListener = function (callback) {
      return Boolean(listeners.find(function (_ref) {
        var original = _ref.original;
        return original === callback;
      }));
    };

    runtime.onMessage.removeListener = function (callback) {
      /** @type {array} */
      var removed = _.remove(listeners, function (_ref2) {
        var original = _ref2.original;
        return original === callback;
      });
      if (!removed.length) return;

      removed.forEach(function (_ref3) {
        var modified = _ref3.modified;

        _ns2.default.runtime.onMessage.removeListener(modified);
      });
    };
  }

  runtime.getBackgroundPage = function () {
    var returnValue = void 0;
    var returnPromise = new Promise(function (resolve) {
      returnValue = _ns2.default.runtime.getBackgroundPage(function (bgPage) {
        resolve(bgPage);
      });
    });

    return returnValue || returnPromise;
  };

  return runtime;
};

},{"../bindAll":111,"../isChrome":119,"../ns":120}],93:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindAll = require('../bindAll');

var _bindAll2 = _interopRequireDefault(_bindAll);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.sessions || !_isChrome2.default) return _ns2.default.sessions;

  var sessions = {
    get 'MAX_SESSION_RESULTS'() {
      return _ns2.default.sessions.MAX_SESSION_RESULTS;
    }
  };

  return (0, _bindAll2.default)(sessions, _ns2.default.sessions, {
    'objects': ['onChanged'],
    'promises': { '0-1': ['getDevices', 'getRecentlyClosed', 'restore'] }
  });
}; /** Sessions (complete)
   https://developer.chrome.com/extensions/sessions
   https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/sessions */

},{"../bindAll":111,"../isChrome":119,"../ns":120}],94:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindMethods = require('../bindMethods');

var _bindMethods2 = _interopRequireDefault(_bindMethods);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** SidebarAction (FF only)
https://developer.mozilla.org/ru/Add-ons/WebExtensions/API/sidebarAction */
var _window = window,
    _ = _window._;

exports.default = function () {
  if (!_ns2.default.sidebarAction) return;

  var sidebarAction = (0, _bindMethods2.default)({}, _ns2.default.sidebarAction, ['setPanel', 'setTitle', 'setIcon']);

  // 0 arguments support
  return _.transform(['getPanel', 'getTitle'], function (carry, property) {
    if (!_ns2.default.sidebarAction[property]) return;
    carry[property] = function () {
      var details = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (typeof details === 'number') details = { 'tabId': details };
      return _ns2.default.sidebarAction[property](details);
    };
  }, sidebarAction);
};

},{"../bindMethods":114,"../ns":120}],95:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindObjects = require('../bindObjects');

var _bindObjects2 = _interopRequireDefault(_bindObjects);

var _bindPromiseReturn = require('../bindPromiseReturn');

var _bindPromiseReturn2 = _interopRequireDefault(_bindPromiseReturn);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Storage
https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/storage
https://developer.chrome.com/extensions/storage */
var _window = window,
    _ = _window._;

exports.default = function () {
  if (!_ns2.default.storage || !_isChrome2.default) return _ns2.default.storage;

  var storage = (0, _bindObjects2.default)({}, _ns2.default.storage, ['onChanged']);

  return _.transform(['sync', 'local', 'managed'], function (carry, property) {
    if (!_ns2.default.storage[property]) return;
    carry[property] = (0, _bindPromiseReturn2.default)({}, _ns2.default.storage[property], {
      '0': ['clear'],
      '1': ['remove', 'set', 'get', 'getBytesInUse']
    });
  }, storage);
};

},{"../bindObjects":115,"../bindPromiseReturn":116,"../isChrome":119,"../ns":120}],96:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindPromiseReturn = require('../../bindPromiseReturn');

var _bindPromiseReturn2 = _interopRequireDefault(_bindPromiseReturn);

var _isChrome = require('../../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.system.cpu || !_isChrome2.default) return _ns2.default.system.cpu;

  return (0, _bindPromiseReturn2.default)({}, _ns2.default.system.cpu, { '0': ['getInfo'] });
}; /** system.cpu (Chrome only)
   https://developer.chrome.com/extensions/system_cpu */

},{"../../bindPromiseReturn":116,"../../isChrome":119,"../../ns":120}],97:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ns = require('../../ns');

var _ns2 = _interopRequireDefault(_ns);

var _cpu = require('./cpu');

var _cpu2 = _interopRequireDefault(_cpu);

var _memory = require('./memory');

var _memory2 = _interopRequireDefault(_memory);

var _storage = require('./storage');

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.system) return;

  return {
    'cpu': (0, _cpu2.default)(),
    'memory': (0, _memory2.default)(),
    'storage': (0, _storage2.default)()
  };
};

// APIs

},{"../../ns":120,"./cpu":96,"./memory":98,"./storage":99}],98:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindPromiseReturn = require('../../bindPromiseReturn');

var _bindPromiseReturn2 = _interopRequireDefault(_bindPromiseReturn);

var _isChrome = require('../../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.system.memory || !_isChrome2.default) return _ns2.default.system.memory;

  return (0, _bindPromiseReturn2.default)({}, _ns2.default.system.memory, { '0': ['getInfo'] });
}; /** system.memory (Chrome only)
   https://developer.chrome.com/extensions/system_memory */

},{"../../bindPromiseReturn":116,"../../isChrome":119,"../../ns":120}],99:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindAll = require('../../bindAll');

var _bindAll2 = _interopRequireDefault(_bindAll);

var _isChrome = require('../../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.system.storage || !_isChrome2.default) return _ns2.default.system.storage;

  return (0, _bindAll2.default)({}, _ns2.default.system.storage, {
    'objects': ['onAttached', 'onDetached'],
    'promises': {
      '0': ['getInfo'],
      '1': ['ejectDevice', 'getAvailableCapacity']
    }
  });
}; /** system.storage (Chrome only)
   https://developer.chrome.com/extensions/system_storage */

},{"../../bindAll":111,"../../isChrome":119,"../../ns":120}],100:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindAll = require('../bindAll');

var _bindAll2 = _interopRequireDefault(_bindAll);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.tabCapture || !_isChrome2.default) return _ns2.default.tabCapture;

  return (0, _bindAll2.default)({}, _ns2.default.tabCapture, {
    'objects': ['onStatusChanged'],
    'promises': {
      '0': ['getCapturedTabs'],
      '1': ['capture'],
      '2': ['captureOffscreenTab']
    }
  });
}; /** tabCapture (Chrome only)
   https://developer.chrome.com/extensions/tabCapture */

},{"../bindAll":111,"../isChrome":119,"../ns":120}],101:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /** Tabs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         https://developer.chrome.com/extensions/tabs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         https://developer.mozilla.org/ru/Add-ons/WebExtensions/API/tabs */


var _bindAll = require('../bindAll');

var _bindAll2 = _interopRequireDefault(_bindAll);

var _bindFullPromiseReturn = require('../bindFullPromiseReturn');

var _bindFullPromiseReturn2 = _interopRequireDefault(_bindFullPromiseReturn);

var _bindMethods = require('../bindMethods');

var _bindMethods2 = _interopRequireDefault(_bindMethods);

var _bindPromiseReturn = require('../bindPromiseReturn');

var _bindPromiseReturn2 = _interopRequireDefault(_bindPromiseReturn);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.tabs) return;

  var tabs = (0, _bindAll2.default)({}, _ns2.default.tabs, {
    'objects': ['onCreated', 'onUpdated', 'onMoved', 'onSelectionChanged', 'onActiveChanged', 'onActivated', 'onHighlightChanged', 'onHighlighted', 'onDetached', 'onAttached', 'onRemoved', 'onReplaced', 'onZoomChange', 'TAB_ID_NONE'],
    'methods': ['connect']
  });

  if (_isChrome2.default) {
    (0, _bindPromiseReturn2.default)(tabs, _ns2.default.tabs, {
      '0': ['getCurrent'],
      '1': ['duplicate', 'highlight', 'remove', 'detectLanguage', 'getZoom', 'discard'],
      '2': ['update', 'move', 'captureVisibleTab', 'executeScript', 'insertCSS', 'setZoom', 'setZoomSettings'],
      '2-3': ['sendMessage'] // 3 only from Chrome 41+
    });
    (0, _bindFullPromiseReturn2.default)(tabs, _ns2.default.tabs, {
      '1': ['get']
    });
  } else {
    (0, _bindMethods2.default)(tabs, _ns2.default.tabs, ['getCurrent', 'get', 'duplicate', 'highlight', 'remove', 'detectLanguage', 'getZoom', 'discard', 'update', 'move', 'captureVisibleTab', 'executeScript', 'insertCSS', 'setZoom', 'setZoomSettings', 'sendMessage']);
  }

  if (_ns2.default.tabs.create) {
    tabs.create = function (createProperties) {
      if (typeof createProperties === 'string') {
        createProperties = { 'url': createProperties };
      }

      return _isChrome2.default ? new Promise(function (resolve) {
        _ns2.default.tabs.create(createProperties, resolve);
      }) : _ns2.default.tabs.create(createProperties);
    };
  }

  if (_ns2.default.tabs.query) {
    // 0 arguments support
    tabs.query = function () {
      var queryInfo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return _isChrome2.default ? new Promise(function (resolve) {
        _ns2.default.tabs.query(queryInfo, resolve);
      }) : _ns2.default.tabs.query(queryInfo);
    };
  }

  if (_ns2.default.tabs.reload) {
    /** @type {function} */
    var reload = _isChrome2.default ? (0, _bindFullPromiseReturn2.default)({}, _ns2.default.tabs, { '0-2': ['reload'] }).reload : _ns2.default.tabs.reload.bind(_ns2.default.tabs);

    tabs.reload = function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var tabs = void 0,
          reloadProperties = void 0;

      if (args.length === 2) {
        var _args = args;

        var _args2 = _slicedToArray(_args, 2);

        tabs = _args2[0];
        reloadProperties = _args2[1];
      } else if (args.length === 1) {
        var _args3 = args,
            _args4 = _slicedToArray(_args3, 1),
            arg = _args4[0];

        if (typeof arg === 'boolean') {
          reloadProperties = arg;
        } else if (typeof arg === 'number') {
          tabs = arg;
        } else if (Array.isArray(arg)) {
          tabs = arg;
        } else if (arg && (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object') {
          reloadProperties = arg;
        }
      }
      if (tabs !== undefined && !Array.isArray(tabs)) {
        tabs = [tabs];
      }
      if (typeof reloadProperties === 'boolean') {
        reloadProperties = { 'bypassCache': reloadProperties };
      }

      if (tabs) {
        return Promise.all(tabs.map(function (id) {
          var reloadArgs = [id];
          if (reloadProperties) reloadArgs.push(reloadProperties);

          return reload.apply({}, reloadArgs);
        }));
      } else {
        args = [];
        if (reloadProperties) args.push(reloadProperties);
        return reload.apply({}, args);
      }
    };
  }

  return tabs;
};

},{"../bindAll":111,"../bindFullPromiseReturn":113,"../bindMethods":114,"../bindPromiseReturn":116,"../isChrome":119,"../ns":120}],102:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _ns2.default.theme;
}; /** Theme (FF only)
   https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/theme */

},{"../ns":120}],103:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindPromiseReturn = require('../bindPromiseReturn');

var _bindPromiseReturn2 = _interopRequireDefault(_bindPromiseReturn);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.topSites || !_isChrome2.default) return _ns2.default.topSites;

  return (0, _bindPromiseReturn2.default)({}, _ns2.default.topSites, { '0': ['get'] });
}; /** TopSites
   https://developer.chrome.com/extensions/topSites
   https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/topSites */

},{"../bindPromiseReturn":116,"../isChrome":119,"../ns":120}],104:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindAll = require('../bindAll');

var _bindAll2 = _interopRequireDefault(_bindAll);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.tts || !_isChrome2.default) return _ns2.default.tts;

  return (0, _bindAll2.default)({}, _ns2.default.tts, {
    'methods': ['pause', 'resume', 'stop'],
    'promises': {
      '0': ['getVoices', 'isSpeaking'],
      '1-2': ['speak']
    }
  });
}; /** tts (Chrome only)
   https://developer.chrome.com/extensions/tts */

},{"../bindAll":111,"../isChrome":119,"../ns":120}],105:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindObjects = require('../bindObjects');

var _bindObjects2 = _interopRequireDefault(_bindObjects);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.ttsEngine || !_isChrome2.default) return _ns2.default.ttsEngine;

  return (0, _bindObjects2.default)({}, _ns2.default.ttsEngine, ['onPause', 'onResume', 'onSpeak', 'onStop']);
}; /** ttsEngine (Chrome only)
   https://developer.chrome.com/extensions/ttsEngine */

},{"../bindObjects":115,"../isChrome":119,"../ns":120}],106:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindAll = require('../bindAll');

var _bindAll2 = _interopRequireDefault(_bindAll);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.vpnProvider || !_isChrome2.default) return _ns2.default.vpnProvider;

  return (0, _bindAll2.default)({}, _ns2.default.vpnProvider, {
    'objects': ['onConfigCreated', 'onConfigRemoved', 'onPacketReceived', 'onPlatformMessage', 'onUIEvent'],
    'promises': {
      '1': ['createConfig', 'destroyConfig', 'notifyConnectionStateChanged', 'sendPacket', 'setParameters']
    }
  });
}; /** vpnProvider (Chrome only)
   https://developer.chrome.com/extensions/vpnProvider */

},{"../bindAll":111,"../isChrome":119,"../ns":120}],107:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindAll = require('../bindAll');

var _bindAll2 = _interopRequireDefault(_bindAll);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.webNavigation || !_isChrome2.default) return _ns2.default.webNavigation;

  var webNavigation = {};

  (0, _bindAll2.default)(webNavigation, _ns2.default.webNavigation, {
    'objects': ['onBeforeNavigate', 'onCommitted', 'onDOMContentLoaded', 'onCompleted', 'onErrorOccurred', 'onCreatedNavigationTarget', 'onReferenceFragmentUpdated', 'onTabReplaced', 'onHistoryStateUpdated'],
    'promises': {
      '1': ['getFrame', 'getAllFrames']
    }
  });

  return webNavigation;
}; /** WebNavigation
   https://developer.chrome.com/extensions/webNavigation
   https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/webNavigation */

},{"../bindAll":111,"../isChrome":119,"../ns":120}],108:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindMethods = require('../bindMethods');

var _bindMethods2 = _interopRequireDefault(_bindMethods);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _window = window,
    _ = _window._;

/**
@param {Object} webRequest
@param {String} property
@return {undefined} */

var bindStandardFilter = function bindStandardFilter(webRequest, property) {
  if (!_ns2.default.webRequest[property]) return;

  /** @type {Object} */
  var apiPart = (0, _bindMethods2.default)({}, _ns2.default.webRequest[property], ['hasListener', 'removeListener']);

  apiPart.addListener = function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (typeof args[1] === 'string') args[1] = { 'urls': [args[1]] };else if (Array.isArray(args[1])) args[1] = { 'urls': args[1] };

    if (typeof args[2] === 'string') args[2] = [args[2]];

    return _ns2.default.webRequest[property].addListener.apply(_ns2.default.webRequest[property], args);
  };

  webRequest[property] = apiPart;
};

exports.default = function () {
  if (!_ns2.default.webRequest) return;

  var webRequest = {};

  if (_ns2.default.webRequest.onAuthRequired) {
    var listeners = [];
    webRequest.onAuthRequired = {
      'addListener': function addListener() {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        // Arguments
        if (typeof args[1] === 'string') {
          args[1] = { 'urls': [args[1]] };
        } else if (Array.isArray(args[1])) {
          args[1] = { 'urls': args[1] };
        }

        if (args.length === 3 && typeof args[2] === 'string') {
          args[2] = [args[2]];
        }

        var original = args[0];
        var asyncBlocking = args.length === 3 && args[2].includes('asyncBlocking');

        /** To handle the request asynchronously, include "blocking"
        in the extraInfoSpec parameter (3rd argument) and return a Promise that is resolved with
        a BlockingResponse object, with its cancel or its authCredentials
        properties set. */

        // FF change asyncBlocking -> blocking
        if (asyncBlocking && !_isChrome2.default) {
          args[2] = args[2].map(function (item) {
            return item !== 'asyncBlocking' ? item : 'blocking';
          });
        }

        // Chrome - use callback for promises
        var modified = original;
        if (asyncBlocking && _isChrome2.default) {
          var callback = args[0];
          var chromeCallback = function chromeCallback(details, asyncCallback) {
            callback(details).then(asyncCallback);
          };
          args[0] = modified = chromeCallback;
        }
        listeners.push({ original: original, modified: modified });

        return _ns2.default.webRequest.onAuthRequired.addListener.apply(_ns2.default.webRequest.onAuthRequired, args);
      },
      'hasListener': function hasListener(callback) {
        return Boolean(listeners.find(function (_ref) {
          var original = _ref.original;
          return original === callback;
        }));
      },
      'removeListener': function removeListener(callback) {
        /** @type {array<object>} */
        var list = _.remove(listeners, function (_ref2) {
          var original = _ref2.original;
          return original === callback;
        });
        list.forEach(function (_ref3) {
          var modified = _ref3.modified;

          _ns2.default.webRequest.onAuthRequired.removeListener(modified);
        });
      }
    };
  }

  ['onBeforeRedirect', 'onBeforeRequest', 'onBeforeSendHeaders', 'onCompleted', 'onErrorOccurred', 'onHeadersReceived', 'onResponseStarted', 'onSendHeaders'].forEach(function (property) {
    bindStandardFilter(webRequest, property);
  });

  return webRequest;
};

},{"../bindMethods":114,"../isChrome":119,"../ns":120}],109:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindObjects = require('../bindObjects');

var _bindObjects2 = _interopRequireDefault(_bindObjects);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Web store (Chrome only)
https://developer.chrome.com/extensions/webstore */
exports.default = function () {
  if (!_ns2.default.webstore) return _ns2.default.webstore;

  var webstore = (0, _bindObjects2.default)({}, _ns2.default.webstore, ['onDownloadProgress', 'onInstallStageChanged']);

  if (_ns2.default.webstore.install) {
    /**
    @param {String} [url]
    @return {Promise} */
    webstore.install = function (url) {
      return new Promise(function (resolve, reject) {
        var args = [];
        if (url) args.push(url);
        args.push(resolve);
        args.push(function (error, errorCode) {
          reject(new Error(error));
        });

        _ns2.default.webstore.install.apply(_ns2.default.webstore, args);
      });
    };
  }

  return webstore;
};

},{"../bindObjects":115,"../ns":120}],110:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindAll = require('../bindAll');

var _bindAll2 = _interopRequireDefault(_bindAll);

var _isChrome = require('../isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

var _ns = require('../ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (!_ns2.default.windows || !_isChrome2.default) return _ns2.default.windows;

  var windows = {
    get 'WINDOW_ID_NONE'() {
      return _ns2.default.windows.WINDOW_ID_NONE;
    },
    get 'WINDOW_ID_CURRENT'() {
      return _ns2.default.windows.WINDOW_ID_CURRENT;
    }
  };

  return (0, _bindAll2.default)(windows, _ns2.default.windows, {
    'objects': ['onCreated', 'onRemoved', 'onFocusChanged'],
    'promises': {
      '1': ['remove'],
      '2': ['update'],
      '0-1': ['getCurrent', 'getLastFocused', 'getAll', 'create'],
      '1-2': ['get']
    }
  });
}; /** Windows
   https://developer.chrome.com/extensions/windows
   https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/windows */

},{"../bindAll":111,"../isChrome":119,"../ns":120}],111:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindBrowserSettings = require('./bindBrowserSettings');

var _bindBrowserSettings2 = _interopRequireDefault(_bindBrowserSettings);

var _bindMethods = require('./bindMethods');

var _bindMethods2 = _interopRequireDefault(_bindMethods);

var _bindObjects = require('./bindObjects');

var _bindObjects2 = _interopRequireDefault(_bindObjects);

var _bindPromiseReturn = require('./bindPromiseReturn');

var _bindPromiseReturn2 = _interopRequireDefault(_bindPromiseReturn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Bind objects, methods, promise return
@param {object} object
@param {object} browserObject
@param {object} properties
@param {array<string>} [properties.objects]
@param {array<string>} [properties.browserSettings]
@param {array} [properties.methods]
@param {object<array>} [properties.promises]
@return {object} same object */
var bindAll = function bindAll(object, browserObject, properties) {
  if (properties.objects) {
    (0, _bindObjects2.default)(object, browserObject, properties.objects);
  }
  if (properties.browserSettings) {
    (0, _bindBrowserSettings2.default)(object, browserObject, properties.browserSettings);
  }
  if (properties.methods) {
    (0, _bindMethods2.default)(object, browserObject, properties.methods);
  }
  if (properties.promises) {
    (0, _bindPromiseReturn2.default)(object, browserObject, properties.promises);
  }

  return object;
};

exports.default = bindAll;

},{"./bindBrowserSettings":112,"./bindMethods":114,"./bindObjects":115,"./bindPromiseReturn":116}],112:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _buildBrowserSetting = require('./buildBrowserSetting');

var _buildBrowserSetting2 = _interopRequireDefault(_buildBrowserSetting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _window = window,
    _ = _window._;

/** Bind BrowserSetting objects
@param {Object} object
@param {Object} browserObject
@param {Array<String>} properties
@return {Object} same object */

exports.default = function (object, browserObject, properties) {
  return _.transform(properties, function (carry, property) {
    if (!browserObject[property]) return;
    carry[property] = (0, _buildBrowserSetting2.default)(browserObject[property]);
  }, object);
};

},{"./buildBrowserSetting":117}],113:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ns = require('./ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _window = window,
    _ = _window._;

/** Modifies object for typical case of promise return binding
@param {object} object
@param {object} browserObject
@param {object<array>} properties - NOTE number of agruments does not count callback
@return {object} same object */

var bindFullPromiseReturn = function bindFullPromiseReturn(object, browserObject, properties) {
  if (Array.isArray(properties)) properties = { '1': properties };

  _.forIn(properties, function (properties, argsCount) {
    argsCount = !/\-/.test(argsCount) ? Number(argsCount) : argsCount.split('-').map(function (item) {
      return Number(item);
    });

    _.transform(properties, function (carry, property) {
      if (!browserObject[property]) return;
      carry[property] = function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return new Promise(function (resolve, reject) {
          var newArgs = function () {
            /** @type {integer} */
            var length = function () {
              if (typeof argsCount === 'number') return argsCount;

              var length = argsCount[0];
              if (args.length > length) length = args.length;
              if (length > argsCount[1]) length = argsCount[1];
              return length;
            }();

            return _.fill(Array(length), null).map(function (x, index) {
              return args[index];
            });
          }();

          // Adding callback as last argument
          newArgs.push(function (firstArg) {
            if (_ns2.default.runtime.lastError) {
              reject(_ns2.default.runtime.lastError);return;
            }

            if (firstArg === undefined) resolve();else resolve(firstArg);
          });

          browserObject[property].apply(browserObject, newArgs);
        });
      };
    }, object);
  });

  return object;
};

exports.default = bindFullPromiseReturn;

},{"./ns":120}],114:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _window = window,
    _ = _window._;

/** Bind methods
@param {object} object
@param {object} browserObject
@param {array<string>} properties
@return {object} same object */

var bindMethods = function bindMethods(object, browserObject, properties) {
  return _.transform(properties, function (carry, property) {
    if (!browserObject[property]) return;
    carry[property] = browserObject[property].bind(browserObject);
  }, object);
};

exports.default = bindMethods;

},{}],115:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _window = window,
    _ = _window._;

/** Copy links to objects
@param {object} object
@param {object} browserObject
@param {array<string>} properties
@return {object} same object */

exports.default = function (object, browserObject, properties) {
  return _.transform(properties, function (carry, property) {
    if (!browserObject[property]) return;
    carry[property] = browserObject[property];
  }, object);
};

},{}],116:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _window = window,
    _ = _window._;

/** Modifies object for typical case of promise return binding
@param {object} object
@param {object} browserObject
@param {object<array>} properties - NOTE number of agruments does not count callback
@return {object} same object */

exports.default = function (object, browserObject, properties) {
  if (Array.isArray(properties)) properties = { '1': properties };

  _.forIn(properties, function (properties, argsCount) {
    argsCount = !/\-/.test(argsCount) ? Number(argsCount) : argsCount.split('-').map(function (item) {
      return Number(item);
    });

    _.transform(properties, function (carry, property) {
      if (!browserObject[property]) return;
      carry[property] = function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return new Promise(function (resolve) {
          var newArgs = function () {
            /** @type {integer} */
            var length = function () {
              if (typeof argsCount === 'number') return argsCount;

              var length = argsCount[0];
              if (args.length > length) length = args.length;
              if (length > argsCount[1]) length = argsCount[1];
              return length;
            }();

            return _.fill(Array(length), null).map(function (x, index) {
              return args[index];
            });
          }();

          // Adding callback as last argument
          newArgs.push(function (firstArg) {
            if (firstArg === undefined) resolve();else resolve(firstArg);
          });

          browserObject[property].apply(browserObject, newArgs);
        });
      };
    }, object);
  });

  return object;
};

},{}],117:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindMethods = require('./bindMethods');

var _bindMethods2 = _interopRequireDefault(_bindMethods);

var _bindPromiseReturn = require('./bindPromiseReturn');

var _bindPromiseReturn2 = _interopRequireDefault(_bindPromiseReturn);

var _isChrome = require('./isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _window = window,
    _ = _window._;

/** Create BrowserSetting object with promise-based return
@param {object} browserObject
@return {object} */

var buildBrowserSetting = function buildBrowserSetting(browserObject) {
  if (!browserObject) return undefined;

  var returnObject = {};
  returnObject.set = function (data) {
    return _isChrome2.default ? new Promise(function (resolve) {
      browserObject.set(data, function (firstArg) {
        if (firstArg === undefined) resolve(true);else resolve(firstArg);
      });
    }) : browserObject.set(data);
  };

  _isChrome2.default ? (0, _bindPromiseReturn2.default)({}, browserObject, { '1': ['set'] }) : (0, _bindMethods2.default)({}, browserObject, ['set']);
  _.transform(['get', 'clear'], function (carry, property) {
    // Support of 0 arguments
    carry[property] = function () {
      var arg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return _isChrome2.default ? new Promise(function (resolve) {
        browserObject[property](arg, function (firstArg) {
          if (firstArg === undefined) resolve(true);else resolve(firstArg);
        });
      }) : browserObject[property](arg);
    };
  }, returnObject);

  if (browserObject.onChange) returnObject.onChange = browserObject.onChange;

  return returnObject;
};

exports.default = buildBrowserSetting;

},{"./bindMethods":114,"./bindPromiseReturn":116,"./isChrome":119}],118:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _accessibilityFeatures = require('./api/accessibilityFeatures');

var _accessibilityFeatures2 = _interopRequireDefault(_accessibilityFeatures);

var _alarms = require('./api/alarms');

var _alarms2 = _interopRequireDefault(_alarms);

var _bookmarks = require('./api/bookmarks');

var _bookmarks2 = _interopRequireDefault(_bookmarks);

var _browserAction = require('./api/browserAction');

var _browserAction2 = _interopRequireDefault(_browserAction);

var _browserSettings = require('./api/browserSettings');

var _browserSettings2 = _interopRequireDefault(_browserSettings);

var _browsingData = require('./api/browsingData');

var _browsingData2 = _interopRequireDefault(_browsingData);

var _certificateProvider = require('./api/certificateProvider');

var _certificateProvider2 = _interopRequireDefault(_certificateProvider);

var _commands = require('./api/commands');

var _commands2 = _interopRequireDefault(_commands);

var _contextMenus = require('./api/contextMenus');

var _contextMenus2 = _interopRequireDefault(_contextMenus);

var _contextualIdentities = require('./api/contextualIdentities');

var _contextualIdentities2 = _interopRequireDefault(_contextualIdentities);

var _cookies = require('./api/cookies');

var _cookies2 = _interopRequireDefault(_cookies);

var _declarativeContent = require('./api/declarativeContent');

var _declarativeContent2 = _interopRequireDefault(_declarativeContent);

var _debugger = require('./api/debugger');

var _debugger2 = _interopRequireDefault(_debugger);

var _desktopCapture = require('./api/desktopCapture');

var _desktopCapture2 = _interopRequireDefault(_desktopCapture);

var _devtools = require('./api/devtools');

var _devtools2 = _interopRequireDefault(_devtools);

var _documentScan = require('./api/documentScan');

var _documentScan2 = _interopRequireDefault(_documentScan);

var _downloads = require('./api/downloads');

var _downloads2 = _interopRequireDefault(_downloads);

var _enterprise = require('./api/enterprise');

var _enterprise2 = _interopRequireDefault(_enterprise);

var _extension = require('./api/extension');

var _extension2 = _interopRequireDefault(_extension);

var _fileBrowserHandler = require('./api/fileBrowserHandler');

var _fileBrowserHandler2 = _interopRequireDefault(_fileBrowserHandler);

var _fileSystemProvider = require('./api/fileSystemProvider');

var _fileSystemProvider2 = _interopRequireDefault(_fileSystemProvider);

var _find = require('./api/find');

var _find2 = _interopRequireDefault(_find);

var _fontSettings = require('./api/fontSettings');

var _fontSettings2 = _interopRequireDefault(_fontSettings);

var _gcm = require('./api/gcm');

var _gcm2 = _interopRequireDefault(_gcm);

var _history = require('./api/history');

var _history2 = _interopRequireDefault(_history);

var _identity = require('./api/identity');

var _identity2 = _interopRequireDefault(_identity);

var _idle = require('./api/idle');

var _idle2 = _interopRequireDefault(_idle);

var _input = require('./api/input.ime');

var _input2 = _interopRequireDefault(_input);

var _instanceID = require('./api/instanceID');

var _instanceID2 = _interopRequireDefault(_instanceID);

var _i18n = require('./api/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _management = require('./api/management');

var _management2 = _interopRequireDefault(_management);

var _networking = require('./api/networking.config');

var _networking2 = _interopRequireDefault(_networking);

var _notifications = require('./api/notifications');

var _notifications2 = _interopRequireDefault(_notifications);

var _omnibox = require('./api/omnibox');

var _omnibox2 = _interopRequireDefault(_omnibox);

var _pageAction = require('./api/pageAction');

var _pageAction2 = _interopRequireDefault(_pageAction);

var _pageCapture = require('./api/pageCapture');

var _pageCapture2 = _interopRequireDefault(_pageCapture);

var _permissions = require('./api/permissions');

var _permissions2 = _interopRequireDefault(_permissions);

var _platformKeys = require('./api/platformKeys');

var _platformKeys2 = _interopRequireDefault(_platformKeys);

var _power = require('./api/power');

var _power2 = _interopRequireDefault(_power);

var _printerProvider = require('./api/printerProvider');

var _printerProvider2 = _interopRequireDefault(_printerProvider);

var _privacy = require('./api/privacy');

var _privacy2 = _interopRequireDefault(_privacy);

var _proxy = require('./api/proxy');

var _proxy2 = _interopRequireDefault(_proxy);

var _runtime = require('./api/runtime');

var _runtime2 = _interopRequireDefault(_runtime);

var _sessions = require('./api/sessions');

var _sessions2 = _interopRequireDefault(_sessions);

var _sidebarAction = require('./api/sidebarAction');

var _sidebarAction2 = _interopRequireDefault(_sidebarAction);

var _storage = require('./api/storage');

var _storage2 = _interopRequireDefault(_storage);

var _system = require('./api/system');

var _system2 = _interopRequireDefault(_system);

var _tabCapture = require('./api/tabCapture');

var _tabCapture2 = _interopRequireDefault(_tabCapture);

var _tabs = require('./api/tabs');

var _tabs2 = _interopRequireDefault(_tabs);

var _theme = require('./api/theme');

var _theme2 = _interopRequireDefault(_theme);

var _topSites = require('./api/topSites');

var _topSites2 = _interopRequireDefault(_topSites);

var _tts = require('./api/tts');

var _tts2 = _interopRequireDefault(_tts);

var _ttsEngine = require('./api/ttsEngine');

var _ttsEngine2 = _interopRequireDefault(_ttsEngine);

var _vpnProvider = require('./api/vpnProvider');

var _vpnProvider2 = _interopRequireDefault(_vpnProvider);

var _webNavigation = require('./api/webNavigation');

var _webNavigation2 = _interopRequireDefault(_webNavigation);

var _webRequest = require('./api/webRequest');

var _webRequest2 = _interopRequireDefault(_webRequest);

var _webstore = require('./api/webstore');

var _webstore2 = _interopRequireDefault(_webstore);

var _windows = require('./api/windows');

var _windows2 = _interopRequireDefault(_windows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Mechanism to create similar output for both firefox anf chrome for browser|chrome */

// APIs
var _window = window,
    _ = _window._; // import _ from 'lodash';


/** Used for adding permissions
@type {Object<Function>} */

var apis = {
  accessibilityFeatures: _accessibilityFeatures2.default,
  alarms: _alarms2.default,
  bookmarks: _bookmarks2.default,
  browserAction: _browserAction2.default,
  browserSettings: _browserSettings2.default,
  browsingData: _browsingData2.default,
  certificateProvider: _certificateProvider2.default,
  commands: _commands2.default,
  contextMenus: _contextMenus2.default,
  contextualIdentities: _contextualIdentities2.default,
  cookies: _cookies2.default,
  declarativeContent: _declarativeContent2.default,
  'debugger': _debugger2.default,
  desktopCapture: _desktopCapture2.default,
  devtools: _devtools2.default,
  documentScan: _documentScan2.default,
  downloads: _downloads2.default,
  enterprise: _enterprise2.default,
  extension: _extension2.default,
  fileBrowserHandler: _fileBrowserHandler2.default,
  fileSystemProvider: _fileSystemProvider2.default,
  find: _find2.default,
  fontSettings: _fontSettings2.default,
  gcm: _gcm2.default,
  history: _history2.default,
  identity: _identity2.default,
  idle: _idle2.default,
  instanceID: _instanceID2.default,
  i18n: _i18n2.default,
  management: _management2.default,
  notifications: _notifications2.default,
  omnibox: _omnibox2.default,
  pageAction: _pageAction2.default,
  pageCapture: _pageCapture2.default,
  permissions: _permissions2.default,
  platformKeys: _platformKeys2.default,
  power: _power2.default,
  printerProvider: _printerProvider2.default,
  privacy: _privacy2.default,
  proxy: _proxy2.default,
  runtime: _runtime2.default,
  sessions: _sessions2.default,
  sidebarAction: _sidebarAction2.default,
  storage: _storage2.default,
  system: _system2.default,
  tabCapture: _tabCapture2.default,
  tabs: _tabs2.default,
  theme: _theme2.default,
  topSites: _topSites2.default,
  tts: _tts2.default,
  ttsEngine: _ttsEngine2.default,
  vpnProvider: _vpnProvider2.default,
  webNavigation: _webNavigation2.default,
  webRequest: _webRequest2.default,
  webstore: _webstore2.default,
  windows: _windows2.default
};

/** @type {object} - analog of chrome|browser */
var Browser = function () {
  var output = {
    'accessibilityFeatures': (0, _accessibilityFeatures2.default)(),
    'alarms': (0, _alarms2.default)(),
    'bookmarks': (0, _bookmarks2.default)(),
    'browserAction': (0, _browserAction2.default)(),
    'browserSettings': (0, _browserSettings2.default)(),
    'browsingData': (0, _browsingData2.default)(),
    'certificateProvider': (0, _certificateProvider2.default)(),
    'commands': (0, _commands2.default)(),
    'contextMenus': (0, _contextMenus2.default)(),
    'contextualIdentities': (0, _contextualIdentities2.default)(),
    'cookies': (0, _cookies2.default)(),
    'declarativeContent': (0, _declarativeContent2.default)(),
    'debugger': (0, _debugger2.default)(),
    'desktopCapture': (0, _desktopCapture2.default)(),
    'devtools': (0, _devtools2.default)(),
    'documentScan': (0, _documentScan2.default)(),
    'downloads': (0, _downloads2.default)(),
    'enterprise': (0, _enterprise2.default)(),
    'extension': (0, _extension2.default)(),
    'fileBrowserHandler': (0, _fileBrowserHandler2.default)(),
    'fileSystemProvider': (0, _fileSystemProvider2.default)(),
    'find': (0, _find2.default)(),
    'fontSettings': (0, _fontSettings2.default)(),
    'gcm': (0, _gcm2.default)(),
    'history': (0, _history2.default)(),
    'identity': (0, _identity2.default)(),
    'idle': (0, _idle2.default)(),

    // input.ime
    'input': function () {
      var output = (0, _input2.default)();
      if (!output) return;

      return { 'ime': output };
    }(),

    'instanceID': (0, _instanceID2.default)(),
    'i18n': (0, _i18n2.default)(),
    'management': (0, _management2.default)(),

    // networking.config
    'networking': function () {
      var output = (0, _networking2.default)();
      if (!output) return;

      return { 'config': output };
    }(),

    // Notifications
    'notifications': (0, _notifications2.default)(),
    'omnibox': (0, _omnibox2.default)(),
    'pageAction': (0, _pageAction2.default)(),
    'pageCapture': (0, _pageCapture2.default)(),
    'permissions': (0, _permissions2.default)(),
    'platformKeys': (0, _platformKeys2.default)(),
    'power': (0, _power2.default)(),
    'printerProvider': (0, _printerProvider2.default)(),
    'privacy': (0, _privacy2.default)(),
    'proxy': (0, _proxy2.default)(),
    'runtime': (0, _runtime2.default)(),
    'sessions': (0, _sessions2.default)(),
    'sidebarAction': (0, _sidebarAction2.default)(),
    'storage': (0, _storage2.default)(),
    'system': (0, _system2.default)(),
    'tabCapture': (0, _tabCapture2.default)(),
    'tabs': (0, _tabs2.default)(),
    'theme': (0, _theme2.default)(),
    'topSites': (0, _topSites2.default)(),
    'tts': (0, _tts2.default)(),
    'ttsEngine': (0, _ttsEngine2.default)(),
    'vpnProvider': (0, _vpnProvider2.default)(),
    'webNavigation': (0, _webNavigation2.default)(),
    'webRequest': (0, _webRequest2.default)(),
    'webstore': (0, _webstore2.default)(),
    'windows': (0, _windows2.default)()
  };

  // Delete all unused object keys
  _.forIn(output, function (value, key) {
    if (!value) delete output[key];
  });

  return output;
}();

/** Set optional API OR disable it
@param {String} api */
Browser.resetAPI = function (api) {
  if (apis[api]) Browser[api] = apis[api]();
};

exports.default = Browser;

},{"./api/accessibilityFeatures":45,"./api/alarms":46,"./api/bookmarks":47,"./api/browserAction":48,"./api/browserSettings":49,"./api/browsingData":50,"./api/certificateProvider":51,"./api/commands":52,"./api/contextMenus":53,"./api/contextualIdentities":54,"./api/cookies":55,"./api/debugger":56,"./api/declarativeContent":57,"./api/desktopCapture":58,"./api/devtools":59,"./api/documentScan":63,"./api/downloads":64,"./api/enterprise":66,"./api/extension":68,"./api/fileBrowserHandler":69,"./api/fileSystemProvider":70,"./api/find":71,"./api/fontSettings":72,"./api/gcm":73,"./api/history":74,"./api/i18n":75,"./api/identity":76,"./api/idle":77,"./api/input.ime":78,"./api/instanceID":79,"./api/management":80,"./api/networking.config":81,"./api/notifications":82,"./api/omnibox":83,"./api/pageAction":84,"./api/pageCapture":85,"./api/permissions":86,"./api/platformKeys":87,"./api/power":88,"./api/printerProvider":89,"./api/privacy":90,"./api/proxy":91,"./api/runtime":92,"./api/sessions":93,"./api/sidebarAction":94,"./api/storage":95,"./api/system":97,"./api/tabCapture":100,"./api/tabs":101,"./api/theme":102,"./api/topSites":103,"./api/tts":104,"./api/ttsEngine":105,"./api/vpnProvider":106,"./api/webNavigation":107,"./api/webRequest":108,"./api/webstore":109,"./api/windows":110}],119:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/** @type {Boolean} */
var isChrome = typeof browser === 'undefined';

exports.default = isChrome;

},{}],120:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isChrome = require('./isChrome');

var _isChrome2 = _interopRequireDefault(_isChrome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @type {Object} */
var ns = _isChrome2.default ? chrome : browser;

exports.default = ns;

},{"./isChrome":119}],121:[function(require,module,exports){
'use strict';

var _browser = require('core/browser');

var _browser2 = _interopRequireDefault(_browser);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _store = require('core/store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _window = window,
    _ = _window._;

/**
@typedef {Object} SetStateParameters
@property {Boolean} broken
@property {(String|null)} country
@property {(String|null)} domain
@property {Array<Object>} filters
@property {String} mode */

/** @type {String} */
/** Part of background.js */

var defaultCountry = _config2.default.proxy.defaultCountry || 'nl';

/** @class singleton */
var Icon = {
  /**
  @namespace
  @property {(String|null)} country
  @property {Boolean} broken */
  'state': {
    'country': null,
    'broken': false
  },

  /** Puts browser icon
  @method
  @param {SetStateParameters} params
  @return {undefined} */
  setState: function setState(_ref) {
    var broken = _ref.broken,
        countries = _ref.countries,
        country = _ref.country,
        domain = _ref.domain,
        filters = _ref.filters,
        mode = _ref.mode;

    filters = filters.filter(function (_ref2) {
      var disabled = _ref2.disabled;
      return !disabled;
    }); // No disabled filters

    /** @type {(String|null)} */
    var proxyCountry = function () {
      if (broken) return null; // Proxy broken -> like DIRECT

      if (mode === 'direct') country = null; // NOTE
      if (!domain) return country;

      /** Filters -> domain intersection
      @type {(Object|null)} */
      var filter = filters.find(function (item) {
        return domain.endsWith(item.domain);
      });
      if (filter) {
        if (!filter.proxyMode) return null; // Direct filter

        var _country = filter.country;

        return countries.includes(_country) ? _country : defaultCountry; // Proxy filter
      }

      // No filter matched
      return country;
    }();

    if (_.isEqual(this.state, { 'country': proxyCountry, broken: broken })) return; // Do nothing - no changes needed

    /** @type {Object<String>} */
    var icon = function () {
      /** @type {Boolean} */
      var errorIcon = broken && (mode === 'proxy' || filters.some(function (_ref3) {
        var proxyMode = _ref3.proxyMode;
        return proxyMode;
      }));
      if (errorIcon) {
        return {
          '19': 'images/icon-error-19.png',
          '38': 'images/icon-error-38.png'
        };
      }
      if (proxyCountry) {
        return {
          '19': 'images/icon-enabled-19.png',
          '38': 'images/icon-enabled-38.png'
        };
      }
      return {
        '19': 'images/icon-disabled-19.png',
        '38': 'images/icon-disabled-38.png'
      };
    }();

    _browser2.default.browserAction.setIcon({ 'path': icon });
    if (proxyCountry) {
      _browser2.default.browserAction.setBadgeText(proxyCountry.toUpperCase());
    } else {
      _browser2.default.browserAction.removeBadgeText();
    }

    this.state = { 'country': proxyCountry, broken: broken };
  }
};

/**
@function
@param {Object} state
@return {Object} */
var storeStateConversion = function storeStateConversion(state) {
  var domain = state.domain,
      _state$pac = state['pac'],
      broken = _state$pac.broken,
      country = _state$pac.country,
      filters = _state$pac.filters,
      mode = _state$pac.mode,
      servers = state.servers,
      premiumUser = state['user']['premium'];


  return {
    broken: broken,
    country: country,
    domain: domain,
    filters: filters,
    mode: mode,
    premiumUser: premiumUser,
    servers: servers
  };
};

/**
@function
@param {Boolean} broken
@param {(String|null)} country
@param {(String|null)} domain
@param {Array<Object>} filters
@param {String} mode
@param {Boolean} premiumUser
@param {Array<Object>} servers
@return {undefined} */
var stateChange = function stateChange(_ref4) {
  var broken = _ref4.broken,
      country = _ref4.country,
      domain = _ref4.domain,
      filters = _ref4.filters,
      mode = _ref4.mode,
      premiumUser = _ref4.premiumUser,
      servers = _ref4.servers;

  /** @type {Array<String>} */
  var countries = _.transform(servers, function (carry, value, country) {
    var servers = value[premiumUser ? 'premium_servers' : 'servers'];
    if (!servers) return;

    carry.push(country);
  }, []);

  Icon.setState({ broken: broken, countries: countries, country: country, domain: domain, filters: filters, mode: mode });
};

// Initial icon state
_browser2.default.browserAction.setBadgeBackgroundColor('#1c304e');

_store2.default.ready.then(function () {
  // After getting all data from store
  stateChange(storeStateConversion(_store2.default.getState()));

  // Store changes subscription
  _store2.default.compare(storeStateConversion, stateChange);
});

},{"config":"config","core/browser":118,"core/store":148}],122:[function(require,module,exports){
'use strict';

var _storage = require('core/storage');

var _storage2 = _interopRequireDefault(_storage);

var _store = require('core/store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Part of background.js */
_store2.default.ready.then(function () {
  if (!_storage2.default.getItem('daysAfterInstall')) {
    _storage2.default.setItem('daysAfterInstall', Date.now());
  }

  /** @type {Number} - timestamp of first install with this code section */
  var timestamp = _storage2.default.getItem('daysAfterInstall');

  /** @type {integer} - Delay between calculations of day count */
  var delay = 3600 * 1000; // 1 hour

  /** @type {Function} */
  var loop = function loop() {
    /** @type {integer} */
    var days = Math.floor((Date.now() - timestamp) / (24 * 3600 * 1000));

    var oldValue = _store2.default.getState().daysAfterInstall;
    if (days !== oldValue) {
      _store2.default.dispatch({ 'type': 'Days after install update', days: days });
    }
    setTimeout(loop, delay);
  };
  setTimeout(loop, delay);
});

},{"core/storage":145,"core/store":148}],123:[function(require,module,exports){
module.exports=["ac","ad","ae","aero","af","ag","ai","al","am","ao","aq","ar","arpa","as","asia","at","au","aw","ax","az","ba","bb","bd","be","bf","bg","bh","bi","biz","bj","bm","bn","bo","br","bs","bt","bv","bw","by","bz","ca","cat","cc","cd","cf","cg","ch","ci","ck","cl","cm","cn","co","com","coop","cr","cu","cv","cw","cx","cy","cz","de","dj","dk","dm","do","dz","ec","edu","ee","eg","er","es","et","eu","fi","fj","fk","fm","fo","fr","ga","gb","gd","ge","gf","gg","gh","gi","gl","gm","gn","gov","gp","gq","gr","gs","gt","gu","gw","gy","hk","hm","hn","hr","ht","hu","id","ie","il","im","in","info","int","io","iq","ir","is","it","je","jm","jo","jobs","jp","ke","kg","kh","ki","km","kn","kp","kr","kw","ky","kz","la","lb","lc","li","lk","lr","ls","lt","lu","lv","ly","ma","mc","md","me","mg","mh","mil","mk","ml","mm","mn","mo","mobi","mp","mq","mr","ms","mt","mu","museum","mv","mw","mx","my","mz","na","name","nc","ne","net","nf","ng","ni","nl","no","np","nr","nu","nz","om","onion","org","pa","pe","pf","pg","ph","pk","pl","pm","pn","post","pr","pro","ps","pt","pw","py","qa","re","ro","rs","ru","rw","sa","sb","sc","sd","se","sg","sh","si","sj","sk","sl","sm","sn","so","sr","st","su","sv","sx","sy","sz","tc","td","tel","tf","tg","th","tj","tk","tl","tm","tn","to","tr","travel","tt","tv","tw","tz","ua","ug","uk","us","uy","uz","va","vc","ve","vg","vi","vn","vu","wf","ws","yt","xn--mgbaam7a8h","xn--y9a3aq","xn--54b7fta0cc","xn--90ae","xn--90ais","xn--fiqs8s","xn--fiqz9s","xn--lgbbat1ad8j","xn--wgbh1c","xn--e1a4c","xn--node","xn--qxam","xn--j6w193g","xn--2scrj9c","xn--3hcrj9c","xn--45br5cyl","xn--h2breg3eve","xn--h2brj9c8c","xn--mgbgu82a","xn--rvc1e0am3e","xn--h2brj9c","xn--mgbbh1a71e","xn--fpcrj9c3d","xn--gecrj9c","xn--s9brj9c","xn--45brj9c","xn--xkc2dl3a5ee0h","xn--mgba3a4f16a","xn--mgba3a4fra","xn--mgbtx2b","xn--mgbayh7gpa","xn--3e0b707e","xn--80ao21a","xn--fzc2c9e2c","xn--xkc2al3hye2a","xn--mgbc0a9azcg","xn--d1alf","xn--l1acc","xn--mix891f","xn--mix082f","xn--mgbx4cd0ab","xn--mgb9awbf","xn--mgbai9azgqp6j","xn--mgbai9a5eva00b","xn--ygbi2ammx","xn--90a3ac","xn--p1ai","xn--wgbl6a","xn--mgberp4a5d4ar","xn--mgberp4a5d4a87g","xn--mgbqly7c0a67fbc","xn--mgbqly7cvafr","xn--mgbpl2fh","xn--yfro4i67o","xn--clchc0ea0b2g2a9gcd","xn--ogbpf8fl","xn--mgbtf8fl","xn--o3cw4h","xn--pgbs0dh","xn--kpry57d","xn--kprw13d","xn--nnx388a","xn--j1amh","xn--mgb2ddes","xxx","ye","za","zm","zw","aaa","aarp","abarth","abb","abbott","abbvie","abc","able","abogado","abudhabi","academy","accenture","accountant","accountants","aco","active","actor","adac","ads","adult","aeg","aetna","afamilycompany","afl","africa","agakhan","agency","aig","aigo","airbus","airforce","airtel","akdn","alfaromeo","alibaba","alipay","allfinanz","allstate","ally","alsace","alstom","americanexpress","americanfamily","amex","amfam","amica","amsterdam","analytics","android","anquan","anz","aol","apartments","app","apple","aquarelle","arab","aramco","archi","army","art","arte","asda","associates","athleta","attorney","auction","audi","audible","audio","auspost","author","auto","autos","avianca","aws","axa","azure","baby","baidu","banamex","bananarepublic","band","bank","bar","barcelona","barclaycard","barclays","barefoot","bargains","baseball","basketball","bauhaus","bayern","bbc","bbt","bbva","bcg","bcn","beats","beauty","beer","bentley","berlin","best","bestbuy","bet","bharti","bible","bid","bike","bing","bingo","bio","black","blackfriday","blanco","blockbuster","blog","bloomberg","blue","bms","bmw","bnl","bnpparibas","boats","boehringer","bofa","bom","bond","boo","book","booking","boots","bosch","bostik","boston","bot","boutique","box","bradesco","bridgestone","broadway","broker","brother","brussels","budapest","bugatti","build","builders","business","buy","buzz","bzh","cab","cafe","cal","call","calvinklein","cam","camera","camp","cancerresearch","canon","capetown","capital","capitalone","car","caravan","cards","care","career","careers","cars","cartier","casa","case","caseih","cash","casino","catering","catholic","cba","cbn","cbre","cbs","ceb","center","ceo","cern","cfa","cfd","chanel","channel","chase","chat","cheap","chintai","chloe","christmas","chrome","chrysler","church","cipriani","circle","cisco","citadel","citi","citic","city","cityeats","claims","cleaning","click","clinic","clinique","clothing","cloud","club","clubmed","coach","codes","coffee","college","cologne","comcast","commbank","community","company","compare","computer","comsec","condos","construction","consulting","contact","contractors","cooking","cookingchannel","cool","corsica","country","coupon","coupons","courses","credit","creditcard","creditunion","cricket","crown","crs","cruise","cruises","csc","cuisinella","cymru","cyou","dabur","dad","dance","data","date","dating","datsun","day","dclk","dds","deal","dealer","deals","degree","delivery","dell","deloitte","delta","democrat","dental","dentist","desi","design","dev","dhl","diamonds","diet","digital","direct","directory","discount","discover","dish","diy","dnp","docs","doctor","dodge","dog","doha","domains","dot","download","drive","dtv","dubai","duck","dunlop","duns","dupont","durban","dvag","dvr","earth","eat","eco","edeka","education","email","emerck","energy","engineer","engineering","enterprises","epost","epson","equipment","ericsson","erni","esq","estate","esurance","etisalat","eurovision","eus","events","everbank","exchange","expert","exposed","express","extraspace","fage","fail","fairwinds","faith","family","fan","fans","farm","farmers","fashion","fast","fedex","feedback","ferrari","ferrero","fiat","fidelity","fido","film","final","finance","financial","fire","firestone","firmdale","fish","fishing","fit","fitness","flickr","flights","flir","florist","flowers","fly","foo","food","foodnetwork","football","ford","forex","forsale","forum","foundation","fox","free","fresenius","frl","frogans","frontdoor","frontier","ftr","fujitsu","fujixerox","fun","fund","furniture","futbol","fyi","gal","gallery","gallo","gallup","game","games","gap","garden","gbiz","gdn","gea","gent","genting","george","ggee","gift","gifts","gives","giving","glade","glass","gle","global","globo","gmail","gmbh","gmo","gmx","godaddy","gold","goldpoint","golf","goo","goodhands","goodyear","goog","google","gop","got","grainger","graphics","gratis","green","gripe","grocery","group","guardian","gucci","guge","guide","guitars","guru","hair","hamburg","hangout","haus","hbo","hdfc","hdfcbank","health","healthcare","help","helsinki","here","hermes","hgtv","hiphop","hisamitsu","hitachi","hiv","hkt","hockey","holdings","holiday","homedepot","homegoods","homes","homesense","honda","honeywell","horse","hospital","host","hosting","hot","hoteles","hotels","hotmail","house","how","hsbc","htc","hughes","hyatt","hyundai","ibm","icbc","ice","icu","ieee","ifm","ikano","imamat","imdb","immo","immobilien","industries","infiniti","ing","ink","institute","insurance","insure","intel","international","intuit","investments","ipiranga","irish","iselect","ismaili","ist","istanbul","itau","itv","iveco","iwc","jaguar","java","jcb","jcp","jeep","jetzt","jewelry","jio","jlc","jll","jmp","jnj","joburg","jot","joy","jpmorgan","jprs","juegos","juniper","kaufen","kddi","kerryhotels","kerrylogistics","kerryproperties","kfh","kia","kim","kinder","kindle","kitchen","kiwi","koeln","komatsu","kosher","kpmg","kpn","krd","kred","kuokgroup","kyoto","lacaixa","ladbrokes","lamborghini","lamer","lancaster","lancia","lancome","land","landrover","lanxess","lasalle","lat","latino","latrobe","law","lawyer","lds","lease","leclerc","lefrak","legal","lego","lexus","lgbt","liaison","lidl","life","lifeinsurance","lifestyle","lighting","like","lilly","limited","limo","lincoln","linde","link","lipsy","live","living","lixil","loan","loans","locker","locus","loft","lol","london","lotte","lotto","love","lpl","lplfinancial","ltd","ltda","lundbeck","lupin","luxe","luxury","macys","madrid","maif","maison","makeup","man","management","mango","map","market","marketing","markets","marriott","marshalls","maserati","mattel","mba","mcd","mcdonalds","mckinsey","med","media","meet","melbourne","meme","memorial","men","menu","meo","merckmsd","metlife","miami","microsoft","mini","mint","mit","mitsubishi","mlb","mls","mma","mobile","mobily","moda","moe","moi","mom","monash","money","monster","montblanc","mopar","mormon","mortgage","moscow","moto","motorcycles","mov","movie","movistar","msd","mtn","mtpc","mtr","mutual","nab","nadex","nagoya","nationwide","natura","navy","nba","nec","netbank","netflix","network","neustar","new","newholland","news","next","nextdirect","nexus","nfl","ngo","nhk","nico","nike","nikon","ninja","nissan","nissay","nokia","northwesternmutual","norton","now","nowruz","nowtv","nra","nrw","ntt","nyc","obi","observer","off","office","okinawa","olayan","olayangroup","oldnavy","ollo","omega","one","ong","onl","online","onyourside","ooo","open","oracle","orange","organic","origins","osaka","otsuka","ott","ovh","page","pamperedchef","panasonic","panerai","paris","pars","partners","parts","party","passagens","pay","pccw","pet","pfizer","pharmacy","phd","philips","phone","photo","photography","photos","physio","piaget","pics","pictet","pictures","pid","pin","ping","pink","pioneer","pizza","place","play","playstation","plumbing","plus","pnc","pohl","poker","politie","porn","pramerica","praxi","press","prime","prod","productions","prof","progressive","promo","properties","property","protection","pru","prudential","pub","pwc","qpon","quebec","quest","qvc","racing","radio","raid","read","realestate","realtor","realty","recipes","red","redstone","redumbrella","rehab","reise","reisen","reit","reliance","ren","rent","rentals","repair","report","republican","rest","restaurant","review","reviews","rexroth","rich","richardli","ricoh","rightathome","ril","rio","rip","rmit","rocher","rocks","rodeo","rogers","room","rsvp","rugby","ruhr","run","rwe","ryukyu","saarland","safe","safety","sakura","sale","salon","samsclub","samsung","sandvik","sandvikcoromant","sanofi","sap","sapo","sarl","sas","save","saxo","sbi","sbs","sca","scb","schaeffler","schmidt","scholarships","school","schule","schwarz","science","scjohnson","scor","scot","search","seat","secure","security","seek","select","sener","services","ses","seven","sew","sex","sexy","sfr","shangrila","sharp","shaw","shell","shia","shiksha","shoes","shop","shopping","shouji","show","showtime","shriram","silk","sina","singles","site","ski","skin","sky","skype","sling","smart","smile","sncf","soccer","social","softbank","software","sohu","solar","solutions","song","sony","soy","space","spiegel","spot","spreadbetting","srl","srt","stada","staples","star","starhub","statebank","statefarm","statoil","stc","stcgroup","stockholm","storage","store","stream","studio","study","style","sucks","supplies","supply","support","surf","surgery","suzuki","swatch","swiftcover","swiss","sydney","symantec","systems","tab","taipei","talk","taobao","target","tatamotors","tatar","tattoo","tax","taxi","tci","tdk","team","tech","technology","telecity","telefonica","temasek","tennis","teva","thd","theater","theatre","tiaa","tickets","tienda","tiffany","tips","tires","tirol","tjmaxx","tjx","tkmaxx","tmall","today","tokyo","tools","top","toray","toshiba","total","tours","town","toyota","toys","trade","trading","training","travelchannel","travelers","travelersinsurance","trust","trv","tube","tui","tunes","tushu","tvs","ubank","ubs","uconnect","unicom","university","uno","uol","ups","vacations","vana","vanguard","vegas","ventures","verisign","versicherung","vet","viajes","video","vig","viking","villas","vin","vip","virgin","visa","vision","vista","vistaprint","viva","vivo","vlaanderen","vodka","volkswagen","volvo","vote","voting","voto","voyage","vuelos","wales","walmart","walter","wang","wanggou","warman","watch","watches","weather","weatherchannel","webcam","weber","website","wed","wedding","weibo","weir","whoswho","wien","wiki","williamhill","win","windows","wine","winners","wme","wolterskluwer","woodside","work","works","world","wow","wtc","wtf","xbox","xerox","xfinity","xihuan","xin","xn--11b4c3d","xn--1ck2e1b","xn--1qqw23a","xn--30rr7y","xn--3bst00m","xn--3ds443g","xn--3oq18vl8pn36a","xn--3pxu8k","xn--42c2d9a","xn--45q11c","xn--4gbrim","xn--55qw42g","xn--55qx5d","xn--5su34j936bgsg","xn--5tzm5g","xn--6frz82g","xn--6qq986b3xl","xn--80adxhks","xn--80aqecdr1a","xn--80asehdb","xn--80aswg","xn--8y0a063a","xn--9dbq2a","xn--9et52u","xn--9krt00a","xn--b4w605ferd","xn--bck1b9a5dre4c","xn--c1avg","xn--c2br7g","xn--cck2b3b","xn--cg4bki","xn--czr694b","xn--czrs0t","xn--czru2d","xn--d1acj3b","xn--eckvdtc9d","xn--efvy88h","xn--estv75g","xn--fct429k","xn--fhbei","xn--fiq228c5hs","xn--fiq64b","xn--fjq720a","xn--flw351e","xn--fzys8d69uvgm","xn--g2xx48c","xn--gckr3f0f","xn--gk3at1e","xn--hxt814e","xn--i1b6b1a6a2e","xn--imr513n","xn--io0a7i","xn--j1aef","xn--jlq61u9w7b","xn--jvr189m","xn--kcrx77d1x4a","xn--kpu716f","xn--kput3i","xn--mgba3a3ejt","xn--mgba7c0bbn0a","xn--mgbaakc7dvf","xn--mgbab2bd","xn--mgbb9fbpob","xn--mgbca7dzdo","xn--mgbi4ecexp","xn--mgbt3dhd","xn--mk1bu44c","xn--mxtq1m","xn--ngbc5azd","xn--ngbe9e0a","xn--ngbrx","xn--nqv7f","xn--nqv7fs00ema","xn--nyqy26a","xn--p1acf","xn--pbt977c","xn--pssy2u","xn--q9jyb4c","xn--qcka1pmc","xn--rhqv96g","xn--rovu88b","xn--ses554g","xn--t60b56a","xn--tckwe","xn--tiq49xqyj","xn--unup4y","xn--vermgensberater-ctb","xn--vermgensberatung-pwb","xn--vhquv","xn--vuq861b","xn--w4r85el8fhu5dnra","xn--w4rs40l","xn--xhq521b","xn--zfr164b","xperia","xyz","yachts","yahoo","yamaxun","yandex","yodobashi","yoga","yokohama","you","youtube","yun","zappos","zara","zero","zip","zippo","zone","zuerich"]

},{}],124:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _punycode = require('punycode');

var _punycode2 = _interopRequireDefault(_punycode);

var _ajax = require('tools/ajax');

var _ajax2 = _interopRequireDefault(_ajax);

var _domainZoneList = require('./domainZoneList.json');

var _domainZoneList2 = _interopRequireDefault(_domainZoneList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line
var _window = window,
    _ = _window._;

/** @type {Object} */

var domainZoneList = { 'data': _domainZoneList2.default };

var loop = function loop() {
  (0, _ajax2.default)('https://publicsuffix.org/list/public_suffix_list.dat', { 'method': 'GET' }).then(function (data) {
    /** @type {Array<String>} */
    var strings = _.transform(data.replace(/\r/g, '').split(/\n/g), function (carry, string) {
      string = string.trim();
      if (!string || /\/\//.test(string)) return;

      carry.push(string.split('.').pop());
    }, []);

    domainZoneList.data = _.uniq(strings).map(function (item) {
      return (/[^a-z0-9_\-]/.test(item) ? _punycode2.default.toASCII(item) : item
      );
    });
  });

  setTimeout(loop, 24 * 3600 * 1000);
};
loop();

exports.default = domainZoneList;

// https://publicsuffix.org/list/public_suffix_list.dat

},{"./domainZoneList.json":123,"punycode":14,"tools/ajax":173}],125:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _log = require('core/log');

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
@param {String} property
@return {Function} */
exports.default = function (property) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var category = void 0,
        action = void 0,
        label = void 0,
        value = void 0,
        noninteraction = void 0;
    if (args.length === 1 && _typeof(args[0]) === 'object') {
      var _args$ = args[0];
      category = _args$.category;
      action = _args$.action;
      label = _args$.label;
      value = _args$.value;
      noninteraction = _args$.noninteraction;
    } else {
      category = args[0];
      action = args[1];
      label = args[2];
      value = args[3];
      noninteraction = args[4];
    }
    (0, _log2.default)('GA', '[' + property + ']', { category: category, action: action, label: label, value: value, noninteraction: noninteraction });
  };
};

},{"core/log":129}],126:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _browser = require('core/browser');

var _browser2 = _interopRequireDefault(_browser);

var _createDisabledFunction = require('./createDisabledFunction');

var _createDisabledFunction2 = _interopRequireDefault(_createDisabledFunction);

var _generateRfc4122Id = require('tools/generateRfc4122Id');

var _generateRfc4122Id2 = _interopRequireDefault(_generateRfc4122Id);

var _listeners = require('./listeners');

var _listeners2 = _interopRequireDefault(_listeners);

var _log = require('core/log');

var _log2 = _interopRequireDefault(_log);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _request = require('./request');

var _request2 = _interopRequireDefault(_request);

var _storage = require('core/storage');

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = _config2.default.ga;

/** Stack of data before storage ready
@type {Array<Object>} */
var deferredStack = [];

/** @type {Boolean} can we use GA functionality */
var gaReady = false;

/** Use GA for only 1% of users to not exceed GA limits
@type {(Boolean|undefined)} */
var useGa = void 0;

/** Random GA user ID
@type {(String|undefined)} */
var gaUserId = void 0;

_storage2.default.ready.then(function () {
  /** @type {Boolean} */
  useGa = function () {
    /** @type {(Boolean|undefined)} */
    var storageValue = _storage2.default.getItem('useGa');
    if (typeof storageValue === 'boolean') return storageValue;

    /** Chance to be in GA tracking
    @type {Number} - from 0 to 1 */
    var chance = config.chance || 0.01;

    /** @type {Boolean} */
    var use = Math.random() < chance;
    _storage2.default.setItem('useGa', use);

    return use;
  }();

  if (useGa) {
    /** @type {String} */
    gaUserId = function () {
      var id = _storage2.default.getItem('gaUserId');
      if (id) return id;

      id = (0, _generateRfc4122Id2.default)();
      _storage2.default.setItem('gaUserId', id);
      return id;
    }();

    (0, _request2.default)(gaUserId, { 'type': 'pageview' }); // One time at browser start
  }

  // Working with deferredStack
  deferredStack.forEach(function (object) {
    ga(object);
  });
  deferredStack = [];

  gaReady = true;
});

/** @type {Function} */
var ga = function ga(_ref) {
  var category = _ref.category,
      action = _ref.action,
      label = _ref.label,
      value = _ref.value,
      noninteraction = _ref.noninteraction;

  if (!useGa) {
    (0, _createDisabledFunction2.default)('FILTERED')({
      category: category, action: action, label: label, value: value, noninteraction: noninteraction
    });
    return; // NOTE
  }

  // Use GA for only 1% of users to not exceed GA limits (working Google Analytics)
  (0, _log2.default)('GA', '[TRACK]', { category: category, action: action, label: label, value: value, noninteraction: noninteraction });

  (0, _request2.default)(gaUserId, { 'type': 'event', action: action, category: category, label: label, noninteraction: noninteraction, value: value });
};

/**
@type {Function} - optionally push data to _gaq.push and output in console passed data */
var gaExport = function () {
  var condition = config.enabled && (!config.extension_id || // For qa / qa2 profiles
  Array.isArray(config.extension_id) && config.extension_id.includes(_browser2.default.i18n.getMessage('@@extension_id')));
  if (!condition) return (0, _createDisabledFunction2.default)('DISABLED'); // NOTE


  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var category = void 0,
        action = void 0,
        label = void 0,
        value = void 0,
        noninteraction = void 0;
    if (args.length === 1 && _typeof(args[0]) === 'object') {
      var _args$ = args[0];
      category = _args$.category;
      action = _args$.action;
      label = _args$.label;
      value = _args$.value;
      noninteraction = _args$.noninteraction;
    } else {
      category = args[0];
      action = args[1];
      label = args[2];
      value = args[3];
      noninteraction = args[4];
    }

    // Storage not ready
    if (!gaReady) {
      deferredStack.push({ category: category, action: action, label: label, value: value, noninteraction: noninteraction });
      return;
    }

    // Storage ready
    ga({ category: category, action: action, label: label, value: value, noninteraction: noninteraction });
  };
}();

(0, _listeners2.default)(gaExport);

exports.default = gaExport;

},{"./createDisabledFunction":125,"./listeners":127,"./request":128,"config":"config","core/browser":118,"core/log":129,"core/storage":145,"tools/generateRfc4122Id":178}],127:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Counters = require('core/Counters');

var _Counters2 = _interopRequireDefault(_Counters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (ga) {
  _Counters2.default.addListener('popup: menu: smart settings click', function () {
    ga({ 'category': 'Smart Settings', 'action': 'Menu click' });
  });

  _Counters2.default.addListener('popup: smart settings: open help', function () {
    ga({ 'category': 'Smart Settings', 'action': 'Open help' });
  });

  _Counters2.default.addListener('popup: smart settings: open list', function () {
    ga({ 'category': 'Smart Settings', 'action': 'Open edit page' });
  });

  _Counters2.default.addListener('popup: smart settings: add rule', function () {
    ga({ 'category': 'Smart Settings', 'action': 'Add rule' });
  });
};

},{"core/Counters":26}],128:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ajax = require('tools/ajax');

var _ajax2 = _interopRequireDefault(_ajax);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Request to GA server
@param {String} gaUserId
@param {String} type
@return {Promise} */
exports.default = function (gaUserId, params) {
  var type = params.type,
      action = params.action,
      category = params.category,
      label = params.label,
      noninteraction = params.noninteraction,
      value = params.value;


  var data = {
    'v': '1', // Version
    'tid': _config2.default.ga.tracking_id, // Tracking ID / Property ID.
    'cid': gaUserId, // Anonymous Client ID (every time unique)
    't': type // Hit Type. / The type of hit. Must be one of 'pageview', 'screenview', 'event', 'transaction', 'item', 'social', 'exception', 'timing'.
  };
  if (type === 'event') {
    if (action) data.ea = action; // Event action
    if (category) data.ec = category; // Event category
    if (label) data.el = label; // Event label / https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters?hl=en#ec
    if (value) data.ev = value;
  }
  if (noninteraction) data.ni = '1';

  return (0, _ajax2.default)('https://www.google-analytics.com/collect', { 'mode': 'cors', data: data });
};

},{"config":"config","tools/ajax":173}],129:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
@param {String} type
@param {Array} data
@return {undefined} */
var logger = function logger(_ref) {
  var type = _ref.type,
      data = _ref.data;

  /** @type {String} */
  var time = function () {
    var date = new Date();

    var _map = [date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()].map(function (value) {
      return String(value).padStart(2, '0');
    }),
        _map2 = _slicedToArray(_map, 4),
        day = _map2[0],
        hours = _map2[1],
        minutes = _map2[2],
        seconds = _map2[3];

    return '[' + day + ', ' + hours + ':' + minutes + ':' + seconds + ']';
  }();
  data.unshift(time);

  if (_config2.default.type !== 'production') {
    console[type].apply(console, data);return;
  }

  /** @type {Array<String>} */
  data = data.map(function (item) {
    if (item && (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object') return JSON.stringify(item);
    return typeof item === 'string' ? item : String(item);
  });

  console[type](data.join(', '));
};

var log = function log() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  logger({ 'type': 'log', 'data': args });
};

/** console.warn analog */
log.warn = function () {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  logger({ 'type': 'warn', 'data': args });
};

/** console.error analog */
log.error = function () {
  for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  logger({ 'type': 'error', 'data': args });
};

exports.default = log;

},{"config":"config"}],130:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getServerString = require('./getServerString');

var _getServerString2 = _interopRequireDefault(_getServerString);

var _domainDependencies = require('./domainDependencies');

var _domainDependencies2 = _interopRequireDefault(_domainDependencies);

var _filtersSorting = require('tools/filtersSorting');

var _filtersSorting2 = _interopRequireDefault(_filtersSorting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @type {Array<Object>} */
var _window = window,
    _ = _window._;

/**
@param {String} defaultCountry
@param {Array<Object>} filters
@param {Object<Array>} servers
@return {Array} */

exports.default = function (_ref) {
  var defaultCountry = _ref.defaultCountry,
      filters = _ref.filters,
      servers = _ref.servers;

  filters = filters.filter(function (_ref2) {
    var disabled = _ref2.disabled;
    return !disabled;
  }); // No disabled rules

  // Filters including dependencies
  /** @type {Array<Object>} */
  var siteFilters = filters.map(function (_ref3) {
    var country = _ref3.country,
        domain = _ref3.domain,
        proxyMode = _ref3.proxyMode;
    return {
      domain: domain,
      'value': proxyMode ? (0, _getServerString2.default)(servers[country] || servers[defaultCountry]) : 'DIRECT'
    };
  });

  /**
  @typedef {Object} FiltersElement
  @property {String} domain
  @property {String} value - 'DIRECT' or 'HTTPS' + servers
   @type {Array<FiltersElement>} */
  siteFilters = _.transform(siteFilters, function (carry, _ref4) {
    var domain = _ref4.domain,
        value = _ref4.value;

    carry.push({ domain: domain, value: value });

    _domainDependencies2.default.forEach(function (_ref5) {
      var domains = _ref5.domains,
          dependencies = _ref5.dependencies;

      if (!domains.includes(domain)) return;

      dependencies.forEach(function (domain) {
        carry.push({ domain: domain, value: value });
      });
    });
  }, []);

  // Removing doubles
  siteFilters = _.uniqBy(siteFilters, function (_ref6) {
    var domain = _ref6.domain;
    return domain;
  });

  // Sorting with priority of level of domain
  siteFilters.sort(_filtersSorting2.default);

  return siteFilters;
};

},{"./domainDependencies":133,"./getServerString":135,"tools/filtersSorting":176}],131:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getServerString = require('./getServerString');

var _getServerString2 = _interopRequireDefault(_getServerString);

var _adaptFiltersForPac = require('./adaptFiltersForPac');

var _adaptFiltersForPac2 = _interopRequireDefault(_adaptFiltersForPac);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }


var pacScript = "/*global dnsDomainIs, isPlainHostName, isInNet, isInNetEx, __SiteFilters__, __GlobalReturn__*/\n/** This file must be ES5 based, until minimum version of chrome that's\nsupport ES6.\nNOTE Never use dnsResolve!*/\nfunction FindProxyForURL( url, host ) { // eslint-disable-line\n  /** @type {string} */\n  var domain = host.split( ':' )[ 0 ]; // By docs it could contain port, in FF does not contain port\n\n  var domainIs = function( host, domain ) {\n    return host === domain || dnsDomainIs( host, '.' + domain );\n  };\n\n  /**\n  @typedef {Object} SiteFilter\n  @property {String} domain\n  @property {String} value - 'DIRECT' or 'HTTPS' + servers\n\n  @type {Array<SiteFilter>} */\n  var siteFilters = __SiteFilters__;\n\n  /** @type {array} */\n  var bypass = [\n    // not real domains used in local networks\n    'local', 'ip', 'intra', 'intranet', 'onion',\n\n    // real domains which are resolved to 127.0.0.1\n    'discordapp.io', 'edit.boxlocalhost.com',\n    'localhost.megasyncloopback.mega.nz', 'localhost.wwbizsrv.alibaba.com',\n    'localtest.me', 'lvh.me', 'spotilocal.com', 'vcap.me',\n    'www.amazonmusiclocal.com',\n\n    // exclusions needed for the extension\n    'google-analytics.com', 'secure.gate2shop.com', 'cdn.safecharge.com'\n  ];\n\n  host = host.toLowerCase();\n\n  var condition = ( function() {\n    var condition1 = isPlainHostName( host );\n\n    var hostIP =\n      /^[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}$/.test( host )\n        ? host\n        : null;\n\n    // Don't proxy non-routable addresses (RFC 3330)\n    var condition2 = hostIP && (\n      isInNet( hostIP, '0.0.0.0', '255.0.0.0' ) ||\n      isInNet( hostIP, '10.0.0.0', '255.0.0.0' ) ||\n      isInNet( hostIP, '127.0.0.0', '255.0.0.0' ) ||\n      isInNet( hostIP, '169.254.0.0', '255.255.0.0' ) ||\n      isInNet( hostIP, '172.16.0.0', '255.240.0.0' ) ||\n      isInNet( hostIP, '192.0.2.0', '255.255.255.0' ) ||\n      isInNet( hostIP, '192.88.99.0', '255.255.255.0' ) ||\n      isInNet( hostIP, '192.168.0.0', '255.255.0.0' ) ||\n      isInNet( hostIP, '198.18.0.0', '255.254.0.0' ) ||\n      isInNet( hostIP, '224.0.0.0', '240.0.0.0' ) ||\n      isInNet( hostIP, '240.0.0.0', '240.0.0.0' )\n    );\n\n    var condition3 = typeof isInNetEx === 'undefined'\n      ? false\n      : isInNetEx( host, 'fc00::/7' ) || isInNetEx( host, 'fe80::/10' );\n\n    return condition1 || condition2 || condition3;\n  }() );\n  if( condition ) return 'DIRECT';\n\n  for( var i = 0, l = bypass.length; i < l; i++ ) {\n    if( domainIs( host, bypass[ i ] ) ) return 'DIRECT';\n  }\n\n  // Site filters looping\n  for( i = 0, l = siteFilters.length; i < l; i++ ) {\n    var item = siteFilters[ i ];\n    if( domainIs( domain, item.domain ) ) return item.value;\n  }\n\n  return __GlobalReturn__;\n}\n"; // NOTE URL relative to package.json

pacScript = pacScript.replace(/\/\/.*/g, '') // Remove comments
.replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
.replace(/\r/g, '').replace(/\n/g, ' ') // Remove new line symbols
.replace(/\s{2,}/g, ' ').trim(); // Less spaces


/**
@typedef {Object} FiltersElement
@property {String} domain
@property {String} value - 'DIRECT' or 'HTTPS' + servers */

/** Build PAC script for FF and Chrome both based on half calculated
or already calculated values
@param {(Array<String>|null)} countryServers
@param {String} defaultCountry
@param {Array<Object>} filters - from store.pac.filters
@param {String} mode - 'proxy' OR 'direct'
@param {Object<Array>} servers
@return {String} */
var buildPacScript = function buildPacScript(params) {
  var countryServers = params.countryServers,
      defaultCountry = params.defaultCountry,
      filters = params.filters,
      mode = params.mode,
      servers = params.servers;

  /** Global proxy mode
  @type {String} */

  var globalReturn = mode === 'proxy' ? countryServers && (0, _getServerString2.default)(countryServers) || 'DIRECT' : 'DIRECT';

  /** @type {Array} */
  var siteFilters = (0, _adaptFiltersForPac2.default)({ defaultCountry: defaultCountry, filters: filters, servers: servers });

  return pacScript.replace(/__GlobalReturn__/g, '\'' + globalReturn + '\'').replace(/__SiteFilters__/g, JSON.stringify(siteFilters));
};

exports.default = buildPacScript;

},{"./adaptFiltersForPac":130,"./getServerString":135}],132:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _browser = require('core/browser');

var _browser2 = _interopRequireDefault(_browser);

var _buildPacScript = require('./buildPacScript');

var _buildPacScript2 = _interopRequireDefault(_buildPacScript);

var _ga = require('core/ga');

var _ga2 = _interopRequireDefault(_ga);

var _log = require('core/log');

var _log2 = _interopRequireDefault(_log);

var _store = require('core/store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _window = window,
    _ = _window._;

/**
@typedef {Object} ControlLevel
@property {Boolean} state - true if controlled / false is not
@property {String} level */

/** @type {Array<String>} */

var controlledStates = Object.freeze(['controllable_by_this_extension', 'controlled_by_this_extension']);

/**
@function
@return {Promise<ControlLevel>} */
var checkControlLevel = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _ref2, level;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _browser2.default.proxy.settings.get({ 'incognito': false });

          case 2:
            _ref2 = _context.sent;
            level = _ref2['levelOfControl'];
            return _context.abrupt('return', { 'state': controlledStates.includes(level), level: level });

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function checkControlLevel() {
    return _ref.apply(this, arguments);
  };
}();

/**
@function
@param {String} defaultCountry
@return {Object} */
var vChrome = function vChrome(defaultCountry) {
  /** Listen for control of proxy by another extension
  @function
  @param {String} levelOfControl
  @return {undefined} */
  var proxySettingsChangeListener = function proxySettingsChangeListener(_ref3) {
    var levelOfControl = _ref3.levelOfControl;

    /** @type {Boolean} */
    var condition = controlledStates.includes(levelOfControl);
    if (condition) return; // <- No control by other extension

    // Change ONLY in store proxy mode to 'broken'
    var state = _.cloneDeep(_store2.default.getState().pac);
    state.broken = true;
    _store2.default.dispatch({ 'type': 'PAC update', 'data': state });
  };

  // Listen for control of proxy by another extension
  _browser2.default.proxy.settings.onChange.addListener(proxySettingsChangeListener);

  // Initial
  _browser2.default.proxy.settings.get({ 'incognito': false }).then(proxySettingsChangeListener);

  /** @type {Object} */
  var pac = {
    // Low level API
    /** (NOT USED) Get connection state (by pacscript) by external evidence
    @method
    @return {Promise<Boolean>} */
    'getConnectionState': function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _ref5, level, mode;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_browser2.default.proxy) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt('return', false);

              case 2:
                _context2.next = 4;
                return _browser2.default.proxy.settings.get({ 'incognito': false });

              case 4:
                _ref5 = _context2.sent;
                level = _ref5['levelOfControl'];
                mode = _ref5['value'].mode;
                return _context2.abrupt('return', level === 'controlled_by_this_extension' && mode === 'pac_script');

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, undefined);
      }));

      return function getConnectionState() {
        return _ref4.apply(this, arguments);
      };
    }(),

    /**
    @method
    @return {Promise<Boolean>} */
    'getControlState': function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _ref7, levelOfControl;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _browser2.default.proxy.settings.get({ 'incognito': false });

              case 2:
                _ref7 = _context3.sent;
                levelOfControl = _ref7.levelOfControl;
                return _context3.abrupt('return', controlledStates.includes(levelOfControl));

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, undefined);
      }));

      return function getControlState() {
        return _ref6.apply(this, arguments);
      };
    }(),

    /** Only for developers
    @method
    @param {String} hostname
    @return {undefined} */
    'setSingleProxy': function setSingleProxy(hostname) {
      _browser2.default.proxy.settings.set({
        'scope': 'regular',
        'value': {
          'mode': 'pac_script',
          'pacScript': {
            'data': "function FindProxyForURL(url, host) { return 'HTTPS " + hostname + "';}"
          }
        }
      });
    },

    /** Change state with new data. All missed paramteres will be filled
    by values of default
    @method
    @param {Object} [args]
    @return {Promise<Object>} resolved with new state */
    'setState': function setState() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /** @type {Object} */
      var state = _store2.default.getState();

      /** @type {Object} */
      var oldStoreState = _.cloneDeep(state.pac);

      var servers = state.servers,
          premiumUser = state['user']['premium'];

      // Arguments

      var _args$broken = args.broken,
          broken = _args$broken === undefined ? state.pac.broken || false : _args$broken,
          _args$country = args.country,
          country = _args$country === undefined ? state.pac.country : _args$country,
          _args$filters = args.filters,
          filters = _args$filters === undefined ? state.pac.filters : _args$filters,
          _args$mode = args.mode,
          mode = _args$mode === undefined ? state.pac.mode : _args$mode;

      /** List of servers depending on premium user state
      @type {Object<Array>} - property -> country */

      servers = _.transform(servers, function (carry, value, country) {
        var servers = value[premiumUser ? 'premium_servers' : 'servers'];
        if (!servers) return;

        carry[country] = servers;
      }, {});

      return checkControlLevel().then(function (_ref8) {
        var controlled = _ref8['state'],
            level = _ref8.level;
        // Do we have ability to use Proxy API
        if (controlled) return;

        _log2.default.warn('Proxy settings levelOfControl is: ' + level);
        (0, _ga2.default)('extension', 'alert', 'error_unable_change_proxy_settings ' + level);

        return Promise.reject();
      }).then(function () {
        /** @type {(Array<String>|null)} */
        var countryServers = void 0;
        if (country) {
          if (servers[country]) {
            countryServers = servers[country];
          } else {
            countryServers = servers[defaultCountry];
            country = defaultCountry;
          }

          // No server for same country -> let's enable empty PAC
          if (!countryServers) {
            _log2.default.error('Failed to find any suitable servers, turning off. Countries: ', country, '. Premium user: ', premiumUser);

            mode = 'direct';
            country = null;
          }
        }

        /** @type {Boolean} */
        var pacInUse = Boolean(filters.length || mode === 'proxy');

        if (!pacInUse) {
          return _browser2.default.proxy.settings.clear({ 'scope': 'regular' });
        }

        /** @type {String} */
        var pacScriptAdapted = (0, _buildPacScript2.default)({
          countryServers: countryServers,
          defaultCountry: defaultCountry,
          filters: filters,
          mode: mode,
          servers: servers
        });
        (0, _log2.default)('PAC script: ', { pacScriptAdapted: pacScriptAdapted });

        return _browser2.default.proxy.settings.set({
          'scope': 'regular',
          'value': {
            'mode': 'pac_script',
            'pacScript': { 'data': pacScriptAdapted }
          }
        });
      }).then(function () {
        /** @type {Object} - New state */
        var state = { broken: broken, country: country, filters: filters, mode: mode };

        if (!_.isEqual(oldStoreState, state)) {
          _store2.default.dispatch({ 'type': 'PAC update', 'data': state });
        }
        return [state, oldStoreState];
      });
    }
  };

  return pac;
};

exports.default = vChrome;

},{"./buildPacScript":131,"core/browser":118,"core/ga":126,"core/log":129,"core/store":148}],133:[function(require,module,exports){
module.exports=[
  {
    "domains": [ "linkedin.com" ],
    "dependencies": [ "licdn.com" ]
  },
  {
    "domains": [ "mail.ru" ],
    "dependencies": [ "imgsmail.ru" ]
  },
  {
    "domains": [ "ok.ru" ],
    "dependencies": [ "mycdn.me" ]
  },
  {
    "domains": [ "rutracker.org" ],
    "dependencies": [ "static.t-ru.org" ]
  },
  {
    "domains": [ "vk.com" ],
    "dependencies": [ "userapi.com", "vkuseraudio.net", "vkuservideo.net" ]
  },
  {
    "domains": [ "wikipedia.org" ],
    "dependencies": [ "wikimedia.org"]
  },
  {
    "domains": [ "youtube.com" ],
    "dependencies": [ "googlevideo.com", "ytimg.com" ]
  }
]

},{}],134:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _adaptFiltersForPac = require('./adaptFiltersForPac');

var _adaptFiltersForPac2 = _interopRequireDefault(_adaptFiltersForPac);

var _browser = require('core/browser');

var _browser2 = _interopRequireDefault(_browser);

var _getServerString = require('./getServerString');

var _getServerString2 = _interopRequireDefault(_getServerString);

var _log = require('core/log');

var _log2 = _interopRequireDefault(_log);

var _storage = require('core/storage');

var _storage2 = _interopRequireDefault(_storage);

var _store = require('core/store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /** Especially for FF 55+ */


var _window = window,
    _ = _window._;

/**
@param {*} message
@return {Promise} */

var proxyMessage = function proxyMessage(message) {
  return _browser2.default.runtime.sendMessage(message, { 'toProxyScript': true });
};

/**
@param {String} defaultCountry
@return {Object} */

exports.default = function (defaultCountry) {
  // Disable old observer
  _browser2.default.runtime.sendMessage({ 'type': 'disable onAuthRequired observer' });

  /** Register proxy script
  @type {Promise} */
  var registerPromise = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _ref2, version, majorVersion, url;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (_browser2.default.proxy.register) {
              _context.next = 2;
              break;
            }

            return _context.abrupt('return', _browser2.default.proxy.registerProxyScript('/pacFirefox55.js'));

          case 2:
            _context.next = 4;
            return _browser2.default.runtime.getBrowserInfo();

          case 4:
            _ref2 = _context.sent;
            version = _ref2.version;


            /** @type {integer} */
            majorVersion = Number(version.split('.')[0]);

            /** @type {String} */

            url = majorVersion === 56 ? '/pacFirefox56.js' // FF 56
            : '/pacFirefox.js'; // FF 57+

            return _context.abrupt('return', _browser2.default.proxy.register(url));

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }))();

  // Clear about:config only one time
  _storage2.default.ready.then(function () {
    if (_storage2.default.getItem('firefoxAboutConfigCleared')) return;

    _storage2.default.setItem('firefoxAboutConfigCleared', true);
    _browser2.default.runtime.sendMessage({ 'type': 'reset proxy settings' });
  });

  var pac = {
    'promise': registerPromise.then(function () {
      return Object.assign(pac, {
        /** Change state with new data. All missed paramteres will be filled
        by values of default
        @param {object} [args]
        @return {Promise<Object>} resolved with new state */
        'setState': function () {
          var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var state, oldStoreState, servers, user, premiumUser, _args$country, country, _args$filters, filters, _args$mode, mode, countryServers, _state;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    state = _store2.default.getState();
                    oldStoreState = _.cloneDeep(state.pac);
                    servers = state.servers, user = state.user;
                    premiumUser = user.premium;

                    // Arguments

                    _args$country = args.country, country = _args$country === undefined ? state.pac.country : _args$country, _args$filters = args.filters, filters = _args$filters === undefined ? state.pac.filters : _args$filters, _args$mode = args.mode, mode = _args$mode === undefined ? state.pac.mode : _args$mode;

                    // FF dead object bugfix (bug due to creation of filter objects in popup)

                    if (filters !== state.pac.filters) {
                      filters = filters.map(function (object) {
                        var output = {};
                        for (var property in object) {
                          output[property] = object[property];
                        }
                        return output;
                      });
                    }

                    /** List of servers depending on premium user state
                    @type {Object<Array>} */
                    servers = _.transform(servers, function (carry, value, country) {
                      var servers = value[premiumUser ? 'premium_servers' : 'servers'];
                      if (!servers) return;

                      carry[country] = servers;
                    }, {});

                    // Gettings servers for selected country
                    countryServers = void 0;

                    if (country) {
                      if (servers[country]) {
                        countryServers = servers[country];
                      } else {
                        countryServers = servers[defaultCountry];
                        country = defaultCountry;
                      }

                      // No server for same country -> let's enable empty PAC
                      if (!countryServers) {
                        _log2.default.error('Failed to find any suitable servers, turning off. Countries: ', country, '. Premium user: ', premiumUser);

                        mode = 'direct';
                        country = null;
                      }
                    }

                    // Send settings to PAC file
                    _context2.next = 11;
                    return proxyMessage({
                      'type': 'enable',
                      'config': {
                        'filters': (0, _adaptFiltersForPac2.default)({ defaultCountry: defaultCountry, filters: filters, servers: servers }),
                        'globalReturn': mode === 'proxy' ? countryServers && (0, _getServerString2.default)(countryServers) || 'DIRECT' : 'DIRECT'
                      }
                    });

                  case 11:
                    /** New state
                    @type {Object} */
                    _state = { country: country, filters: filters, mode: mode };


                    if (!_.isEqual(oldStoreState, _state)) {
                      _store2.default.dispatch({ 'type': 'PAC update', 'data': _state });
                    }
                    return _context2.abrupt('return', [_state, oldStoreState]);

                  case 14:
                  case 'end':
                    return _context2.stop();
                }
              }
            }, _callee2, undefined);
          }));

          return function setState() {
            return _ref3.apply(this, arguments);
          };
        }()
      });
    })
  };

  return pac;
};

},{"./adaptFiltersForPac":130,"./getServerString":135,"core/browser":118,"core/log":129,"core/storage":145,"core/store":148}],135:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _window = window,
    _ = _window._;

/**
@typedef {object} Server
@property {string} host
@property {integer} port

@typedef {object} Servers
@property {array<Server>} servers
@property {array<Server>} premium_servers */

/**
@param {Array<Server>} servers
@return {String} */

exports.default = function (servers) {
  servers = _.shuffle(servers);

  /** @type {String} */
  return servers.map(function (_ref) {
    var port = _ref.port,
        host = _ref.host;
    return 'HTTPS ' + host + ':' + port;
  }).join('; ');
};

},{}],136:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _ajaxes = require('core/ajaxes');

var _ajaxes2 = _interopRequireDefault(_ajaxes);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _filtersSorting = require('tools/filtersSorting');

var _filtersSorting2 = _interopRequireDefault(_filtersSorting);

var _store = require('core/store');

var _store2 = _interopRequireDefault(_store);

var _chrome = require('./chrome');

var _chrome2 = _interopRequireDefault(_chrome);

var _firefox = require('./firefox');

var _firefox2 = _interopRequireDefault(_firefox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _window = window,
    _ = _window._;

/** @type {String} */

var defaultCountry = _config2.default.proxy.defaultCountry || 'nl';

/** @type {Object} */
var pac = (typeof browser === 'undefined' ? _chrome2.default : _firefox2.default)(defaultCountry);

(pac.promise || Promise.resolve(pac)).then(function (pac) {
  var setState = pac.setState;
  pac.setState = function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return setState.apply({}, args).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          data = _ref2[0],
          newData = _ref2[1];

      var _store$getState$user = _store2.default.getState().user,
          credentials = _store$getState$user.credentials,
          email = _store$getState$user.email;

      if (!email) return data; // Not logined user
      if (_.isEqual(data.filters, newData.filters)) return data; // Filters not changed

      return _ajaxes2.default.setSmartSettings({ credentials: credentials, 'filters': data.filters }).catch(function () {
        return undefined;
      }).then(function () {
        return data;
      });
    });
  };
});

// High level API
Object.assign(pac, {
  /** Enable proxy with desired country
  @param {string} country - 2 letter code
  @return {Promise} */
  'setCountry': function setCountry(country) {
    return pac.setState({ 'mode': 'proxy', country: country });
  },

  /** Enable proxy
  @return {Promise} */
  'enable': function enable() {
    return pac.setCountry(_store2.default.getState().pac.country || defaultCountry);
  },

  /** Disable proxy
  @return {Promise} */
  'disable': function disable() {
    return pac.setState({ 'mode': 'direct' });
  }
});

pac.siteFilters = {
  /** Add filter to filters list
  @param {String} type - 'proxy' OR 'direct'
  @param {String} domain
  @param {String} [country]
  @return {Promise} */
  'add': function add(params) {
    var _params$country = params.country,
        country = _params$country === undefined ? _store2.default.getState().pac.country || defaultCountry : _params$country,
        domain = params.domain,
        type = params.type;


    var filters = _store2.default.getState().pac.filters.slice();
    filters.push({ country: country, domain: domain, 'proxyMode': type === 'proxy' });
    filters.sort(_filtersSorting2.default);

    return pac.setState({ filters: filters });
  },

  /** Remove filter with this domain from filters list
  @param {String} domain
  @return {Promise} */
  'remove': function remove(domain) {
    /** @type {Array<Object>} */
    var filters = _store2.default.getState().pac.filters.slice();

    _.remove(filters, function (item) {
      return item.domain === domain;
    });

    return pac.setState({ filters: filters });
  },

  /** Convert proxy filter to direct OR direct to proxy
  @param {String} domain
  @return {Promise} */
  'toggle': function toggle(domain) {
    /** @type {Object} */
    var filter = _store2.default.getState().pac.filters.find(function (item) {
      return item.domain === domain;
    });

    /** @type {(String|null)} */
    var country = !filter.proxyMode ? filter.country : null;

    return pac.siteFilters.changeCountry({ domain: domain, country: country });
  },

  /** Change country for proxy filter
  @param {String} domain
  @param {(String|null)} country
  @return {Promise} */
  'changeCountry': function changeCountry(_ref3) {
    var domain = _ref3.domain,
        country = _ref3.country;

    /** @type {Array<Object>} */
    var filters = _.cloneDeep(_store2.default.getState().pac.filters);

    /** @type {(Object|undefined)} */
    var filter = filters.find(function (item) {
      return item.domain === domain;
    });

    // Change country for existing filter
    if (filter) {
      if (country) filter.country = country;
      filter.proxyMode = Boolean(country);

      return pac.setState({ filters: filters });
    }

    // Add new filter
    return pac.siteFilters.add({ country: country, domain: domain, 'type': 'proxy' });
  }
};

exports.default = pac;

/*, Закомментирована до лучших времён
async 'detectDefaultCountry': () => {
  //@param {object} location
  //@param {object} location.continent_code
  //@param {object} location.country_code
  let { 'continent_code': continent, 'country_code': country } =
    await browsec.ipInfo();

  if( continent === 'NA' || continent === 'SA' ) {
    // If user isfrom North or South America send him to US server
    defaultCountry = 'us';
  }
  else if( country === 'SG' || // Singapore
          country === 'MY' || // Malaysia
          country === 'ID' || // Indonesia
          country === 'PH' || // Philippines
          country === 'TH' // Thailand
    ) {
    defaultCountry = 'sg';
  }
  else if( country === 'UK' || country === 'IE' ) {
    defaultCountry = 'uk';
  }
}*/

},{"./chrome":132,"./firefox":134,"config":"config","core/ajaxes":40,"core/store":148,"tools/filtersSorting":176}],137:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _browser = require('core/browser');

var _browser2 = _interopRequireDefault(_browser);

var _request = require('./request');

var _request2 = _interopRequireDefault(_request);

var _storage = require('core/storage');

var _storage2 = _interopRequireDefault(_storage);

var _store = require('core/store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
@function
@return {Promise} */
var putData = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var list;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _request2.default)();

          case 2:
            list = _context.sent;


            [].splice.apply(promotions, [0, promotions.length].concat(list));
            _storage2.default.set('promotions', list);

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function putData() {
    return _ref.apply(this, arguments);
  };
}();

/**
@typedef {Object} Promotion
@property {*} id
@property {Date} from
@property {Date} till
@property {String} [page]
@property {Object} structure

@type {Array<Promotion>} */
var promotions = [];

/** Loop function to put data into storage
@return {Promise} */
var putDataLoop = function putDataLoop() {
  var promise = putData();

  setTimeout(putDataLoop, 24 * 3600 * 1000);

  return promise;
};

// Loop function to show promotions
var showPromotionsLoop = function showPromotionsLoop() {
  if (!_store2.default.getState().user.premium) {
    // Only for not premium
    /** @type {Array} */
    var data = _storage2.default.get('promotionsActivation') || [];

    /** @type {integer} */
    var now = Date.now();

    /** @type {Array<Promotion>} - not activated promotions in time of need */
    var activePromotions = promotions.filter(function (_ref2) {
      var id = _ref2.id,
          from = _ref2.from,
          till = _ref2.till,
          page = _ref2.page;
      return page && !data.includes(id) && from <= now && now <= till;
    });

    if (activePromotions.length) {
      activePromotions.forEach(function (_ref3) {
        var id = _ref3.id,
            page = _ref3.page;

        _browser2.default.tabs.create(page);
        data.push(id);
      });
      _storage2.default.set('promotionsActivation', data);
    }
  }

  setTimeout(showPromotionsLoop, 3600 * 1000);
};

_store2.default.ready.then(function () {
  var value = _storage2.default.get('promotions');
  if (value) {
    [].splice.apply(promotions, [0, promotions.length].concat(value));
  }

  // Initial
  putDataLoop();
  showPromotionsLoop(); // Due to 2 promos for first installation -> too much for first time
});

/**
@return {(Object|undefined)} */
promotions.get = function () {
  /** @type {integer} */
  var now = Date.now();

  /** @type {Array<Object>} */
  var result = promotions.filter(function (_ref4) {
    var from = _ref4.from,
        till = _ref4.till;
    return from <= now && now <= till;
  });

  return result.length ? result[0].structure : undefined;
};

exports.default = promotions;

},{"./request":138,"core/browser":118,"core/storage":145,"core/store":148}],138:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ajax = require('tools/ajax');

var _ajax2 = _interopRequireDefault(_ajax);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _window = window,
    _ = _window._;

/**
@return {Promise<Array<Object>>} */

exports.default = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var _ref2, error, list, ok, promises;

  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _ajax2.default)(_config2.default.browsec.apiPrefix + 'promo/extension?_=' + Math.floor(Math.random() * 1000000000), {
            'dataType': 'json',
            'cache': 'no-store',
            'headers': {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Pragma': 'no-cache'
            },
            'method': 'GET'
          });

        case 2:
          _ref2 = _context.sent;
          error = _ref2['error_message'];
          list = _ref2['promo'];
          ok = _ref2.ok;

          if (ok) {
            _context.next = 8;
            break;
          }

          return _context.abrupt('return', Promise.reject(error));

        case 8:

          /** @type {Array<Promise>} */
          promises = _.transform(list, function (carry, _ref3) {
            var from = _ref3.from,
                media = _ref3.media,
                till = _ref3.till,
                id = _ref3['uid'];

            if (!media) return;

            /** @type {integer} */
            from = Date.parse(from);

            /** @type {integer} */
            till = Date.parse(till);

            /** @type {String} */
            var ajaxUrl = _.get(media, 'banner.json_url');

            /** @type {(String|undefined)} - url of page, opened only one time */
            var page = _.get(media, 'promo_page.url');

            carry.push((0, _ajax2.default)(ajaxUrl, { 'dataType': 'json', 'method': 'GET' }).then(function (structure) {
              return { id: id, from: from, till: till, page: page, structure: structure };
            }));
          }, []);
          return _context.abrupt('return', Promise.all(promises));

        case 10:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, undefined);
}));

},{"config":"config","tools/ajax":173}],139:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _window = window,
    _ = _window._; /** Some well-known routes for the server */

var baseUrl = _config2.default.browsec.baseUrl.replace(/\/$/, '');

var paths = {
  'main': '/',
  'new_user': '/users/new?source=extension&utm_source=Chromium+extension&utm_medium=link&utm_campaign=signup',
  'premium': '/plans?source=extension&utm_source=Chromium+extension&utm_medium=banner&utm_campaign=premium',
  'reset_password': '/login?source=extension&utm_source=Chromium+extension&utm_medium=link&utm_campaign=restore_pasword#forgot_password',
  'contact_us': '/contact_us?source=extension&utm_source=Chromium+extension&utm_medium=link&utm_campaign=contact_us'
};

/** @type {object<string>} */
var routes = _.transform(paths, function (carry, value, property) {
  carry[property + '_url'] = baseUrl + value;
}, {});
routes.premium = baseUrl + '/plans';

exports.default = routes;

},{"config":"config"}],140:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _browser = require('core/browser');

var _browser2 = _interopRequireDefault(_browser);

var _ga = require('core/ga');

var _ga2 = _interopRequireDefault(_ga);

var _log = require('core/log');

var _log2 = _interopRequireDefault(_log);

var _pac = require('core/pac');

var _pac2 = _interopRequireDefault(_pac);

var _showedOffers = require('core/showedOffers');

var _showedOffers2 = _interopRequireDefault(_showedOffers);

var _Statistics = require('core/Statistics');

var _Statistics2 = _interopRequireDefault(_Statistics);

var _storage = require('core/storage');

var _storage2 = _interopRequireDefault(_storage);

var _store = require('core/store');

var _store2 = _interopRequireDefault(_store);

var _versionCompare = require('tools/versionCompare');

var _versionCompare2 = _interopRequireDefault(_versionCompare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /** Part of background.js */


var _window = window,
    _ = _window._;

/** @class singleton */

var onInstalled = new function () {
  var _this = this;

  /**
  @typedef {object} Listener
  @property {string} type
  @property {function} callback
   @type {Array<Listener>} */
  this.listeners = [];

  _browser2.default.runtime.onInstalled.addListener(function (details) {
    if (details.reason === 'install') {
      _this.listeners.forEach(function (_ref) {
        var type = _ref.type,
            callback = _ref.callback;

        if (type !== 'install') return;
        callback();
      });
    } else if (details.reason === 'update') {
      _this.listeners.forEach(function (_ref2) {
        var type = _ref2.type,
            callback = _ref2.callback;

        if (type !== 'update') return;
        callback(details.previousVersion);
      });
    }
  });

  return {
    'addListener': function addListener(type, callback) {
      _this.listeners.push({ type: type, callback: callback });
    },
    'removeListener': function removeListener(params) {
      if (typeof params === 'string') {
        _.remove(_this.listeners, function (_ref3) {
          var type = _ref3.type;
          return type === params;
        });
      } else if (typeof params === 'function') {
        _.remove(_this.listeners, function (_ref4) {
          var callback = _ref4.callback;
          return callback === params;
        });
      }
    }
  };
}();

/** runs when user has just installed the plugin OR updated
@function
@return {undefined} */

exports.default = function () {
  // New installation
  onInstalled.addListener('install', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var manifestVersion;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            /** @type {String} */
            manifestVersion = _browser2.default.runtime.getManifest().version;


            (0, _log2.default)('browser.runtime.onInstalled', 'install');

            (0, _ga2.default)('extension', 'install', manifestVersion);

            _context3.next = 5;
            return _storage2.default.ready;

          case 5:

            _storage2.default.removeItem('congrats_tab_id');

            if (!_Statistics2.default.get('installDate')) {
              _Statistics2.default.set('installDate', Date.now());
            }
            _storage2.default.setItem('firstPopupOpen', 'installed');

            /** Congratulations for all first users
            congratulations tab id for changaing tab url in future (237 experiment) */
            _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var experimentVersion, _ref7, id, tabs, tabId;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      /** @type {Boolean} */
                      experimentVersion = typeof browser === 'undefined' && !/OPR\//.test(window.navigator.appVersion);

                      if (experimentVersion) {
                        _context2.next = 8;
                        break;
                      }

                      _context2.next = 4;
                      return _browser2.default.tabs.create('/pages/congratulations/congratulations.html');

                    case 4:
                      _ref7 = _context2.sent;
                      id = _ref7.id;


                      _storage2.default.setItem('congrats_tab_id', id);
                      return _context2.abrupt('return');

                    case 8:
                      _context2.next = 10;
                      return _browser2.default.tabs.query();

                    case 10:
                      tabs = _context2.sent;


                      /** @type {(Number|undefined)} */
                      tabId = _.get(tabs.find(function (_ref8) {
                        var url = _ref8.url;
                        return url && url.startsWith('https://chrome.google.com/webstore/detail/') && (url.includes('omghfjlpggmjjaagoclmmobgdodcjboh') || url.includes('ikjnacbhmajnfdhilmdcjdggbcjiimkm'));
                      }), 'id');

                      // If Chrome Webstore tab open -> change it's tab

                      if (!tabId) {
                        _context2.next = 17;
                        break;
                      }

                      _context2.next = 15;
                      return _browser2.default.tabs.update(tabId, { 'url': '/pages/congratulations/congratulations.html' });

                    case 15:

                      _storage2.default.setItem('congrats_tab_id', tabId);
                      return _context2.abrupt('return');

                    case 17:

                      // Otherwise - with delay 10 seconds show separate congratulations tab
                      setTimeout(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var _ref10, id;

                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                _context.next = 2;
                                return _browser2.default.tabs.create('/pages/congratulations/congratulations.html');

                              case 2:
                                _ref10 = _context.sent;
                                id = _ref10.id;


                                _storage2.default.setItem('congrats_tab_id', id);

                              case 5:
                              case 'end':
                                return _context.stop();
                            }
                          }
                        }, _callee, undefined);
                      })), 10 * 1000);

                    case 18:
                    case 'end':
                      return _context2.stop();
                  }
                }
              }, _callee2, undefined);
            }))();

            if (!_showedOffers2.default.includes('apps page')) {
              /** Show new apps page in 10 minutes on any popup open (only one time) */
              setTimeout(function () {
                _storage2.default.setItem('installBrowsecOnMobile', 'ready');
              }, 10 * 60 * 1000);
            }

          case 10:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  })));

  // Update of installed extention
  onInstalled.addListener('update', function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(previousVersion) {
      var version, condition;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              /** @type {Object<String>} - like 2.2.99 */
              version = {
                'previous': previousVersion,
                'current': _browser2.default.runtime.getManifest().version
              };


              (0, _log2.default)('browser.runtime.onInstalled', 'update', version.previous);

              (0, _ga2.default)('extension', 'update', version.current);

              _context4.next = 5;
              return _store2.default.ready;

            case 5:

              if (!_Statistics2.default.get('installDate')) {
                _Statistics2.default.set('installDate', Date.now());
              }

              condition = !_showedOffers2.default.includes('3.15.1: Android app') && (0, _versionCompare2.default)(version.previous, '3.15.1') === -1;

              if (condition) {
                // Show new tab
                _browser2.default.tabs.create({
                  'url': '/offers/android_app.html', 'active': true
                }).then(function () {
                  _showedOffers2.default.push('3.15.1: Android app');
                });
              }

              _pac2.default.setState();

            case 9:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined);
    }));

    return function (_x) {
      return _ref11.apply(this, arguments);
    };
  }());
};

},{"core/Statistics":32,"core/browser":118,"core/ga":126,"core/log":129,"core/pac":136,"core/showedOffers":144,"core/storage":145,"core/store":148,"tools/versionCompare":184}],141:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _browser = require('core/browser');

var _browser2 = _interopRequireDefault(_browser);

var _log = require('core/log');

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _window = window,
    _ = _window._;

/**
@typedef {object} Listener
@property {string} type
@property {function} callback

@type {array<Listener>} */

var listeners = [];

_browser2.default.runtime.onMessage.addListener(function (message, sender) {
  return new Promise(function (resolve) {
    var type = _.get(message, 'type');
    if (!type) return;

    (0, _log2.default)('browser.runtime.onMessage', message, sender);

    var callback = _.get(listeners.find(function (item) {
      return item.type === type;
    }), 'callback');
    if (!callback) return;

    var result = callback(message, sender);
    if (result instanceof Promise) result.then(resolve);else resolve(result);
  });
});

/** Async and only version of runtime.onMessage (NOTE critical -> must be the ONLY!)
@class singleton */
exports.default = {
  /**
  @param {Listener} listener
  @return {undefined} */
  'addListener': function addListener(listener) {
    listeners.push(listener);
  },

  /**
  @param {(string|function)} params
  @return {undefined} */
  'removeListener': function removeListener(params) {
    switch (typeof params === 'undefined' ? 'undefined' : _typeof(params)) {
      case 'string':
        _.remove(listeners, function (_ref) {
          var type = _ref.type;
          return type === params;
        });
        break;
      case 'function':
        _.remove(listeners, function (_ref2) {
          var callback = _ref2.callback;
          return callback === params;
        });
        break;
    }
  }
};

},{"core/browser":118,"core/log":129}],142:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _browser = require('core/browser');

var _browser2 = _interopRequireDefault(_browser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
@param {String} url - 255 symbols maximum
@return {undefined} */
exports.default = function (url) {
  if (!_browser2.default.runtime.setUninstallURL) return;

  _browser2.default.runtime.setUninstallURL(url);
};

},{"core/browser":118}],143:[function(require,module,exports){
'use strict';

var _ajaxes = require('core/ajaxes');

var _ajaxes2 = _interopRequireDefault(_ajaxes);

var _log = require('core/log');

var _log2 = _interopRequireDefault(_log);

var _pac = require('core/pac');

var _pac2 = _interopRequireDefault(_pac);

var _store = require('core/store');

var _store2 = _interopRequireDefault(_store);

var _validateServerList2 = require('tools/validateServerList');

var _validateServerList3 = _interopRequireDefault(_validateServerList2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _window = window,
    _ = _window._;

/** @type {Object<integer>} */

var timeout = {
  'retry': 5 * 60 * 1000,
  'refresh': 6 * 3600 * 1000
};

var loopAction = function loopAction() {
  _ajaxes2.default.servers().then(function (servers) {
    // Level of subtask
    var _validateServerList = (0, _validateServerList3.default)(_.get(servers, 'countries')),
        valid = _validateServerList.valid,
        error = _validateServerList.error;

    if (!valid) return Promise.reject(error);

    _store2.default.dispatch({ 'type': 'Server list update', 'data': servers });

    // Update proxy settings
    return _pac2.default.setState().then(function () {
      return servers;
    }, function () {
      return Promise.reject(new Error('Server list update, Failed to update proxy settings'));
    });
  }).then( // Level of loop task
  function () {
    setTimeout(function () {
      (0, _log2.default)('Server list update. Refresh');
      loopAction();
    }, timeout.refresh);
  }, function (error) {
    var minutes = timeout.retry / (60 * 1000);
    _log2.default.warn('Server list update. Error, retrying in ' + minutes + ' minutes', error);

    setTimeout(function () {
      (0, _log2.default)('Server list update. Retry');
      loopAction();
    }, timeout.retry);
  });
};

loopAction(); // Initial

},{"core/ajaxes":40,"core/log":129,"core/pac":136,"core/store":148,"tools/validateServerList":183}],144:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _storage = require('core/storage');

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _window = window,
    _ = _window._;

/** Array-like object directly associated with storage
@type {array} */

var ShowedOffers = new function () {
  var _this = this;

  /** @method */
  this.initiate = function () {
    /** @type {Array<String>} */
    _this.state = _storage2.default.getItem('showedOffers') || [];
  };

  /** Add
  @method
  @param {String} argument
  @return {integer} */
  this.push = function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    args.forEach(function (item) {
      if (_this.state.includes(item)) return; // No duplicates
      _this.state.push(item);
    });
    _storage2.default.setItem('showedOffers', _this.state);

    return _this.state.length;
  };

  /** Remove
  @method
  @param {String} argument */
  this.pull = function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var returnValue = _.pull.apply(_, args);
    _storage2.default.setItem('showedOffers', _this.state);

    return returnValue;
  };

  /** Check value in array
  @method
  @param {String} value
  @return {Boolean} */
  this.includes = function (value) {
    return _this.state.includes(value);
  };
}();

_storage2.default.ready.then(function () {
  ShowedOffers.initiate();
});

exports.default = ShowedOffers;

},{"core/storage":145}],145:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _browser = require('core/browser');

var _browser2 = _interopRequireDefault(_browser);

var _jsonParse = require('tools/jsonParse');

var _jsonParse2 = _interopRequireDefault(_jsonParse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _window = window,
    _ = _window._;

/** @class singleton */

var storage = new function () {
  var _this = this;

  this.data = {};

  /** @type {Promise} */
  this.ready = _browser2.default.storage.local.get().then(function (data) {
    // Getting old data from localStorage (if it exist)
    if (typeof localStorage !== 'undefined' && localStorage.length) {
      /** @type {Object} */
      var oldData = data;
      for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        oldData[key] = value;
      }

      // Specific type conversion
      if (oldData.account) {
        oldData.account = (0, _jsonParse2.default)(oldData.account);
      }
      if (oldData.authHistory) {
        oldData.authHistory = (0, _jsonParse2.default)(oldData.authHistory);
      }
      if (oldData.currentConfig) {
        oldData.currentConfig = (0, _jsonParse2.default)(oldData.currentConfig);
      }
      if (oldData.congrats_tab_id) {
        oldData.congrats_tab_id = Number(oldData.congrats_tab_id);
      }
      if (oldData.counters) {
        oldData.counters = (0, _jsonParse2.default)(oldData.counters);
      }
      if (oldData.daysAfterInstall) {
        oldData.daysAfterInstall = Number(oldData.daysAfterInstall);
      }
      if (oldData.ffLegacyProxy) {
        oldData.ffLegacyProxy = (0, _jsonParse2.default)(oldData.ffLegacyProxy);
      }
      if (oldData.notificationHidden) {
        oldData.notificationHidden = Number(oldData.notificationHidden);
      }
      if (oldData.pac) {
        oldData.pac = (0, _jsonParse2.default)(oldData.pac);
      }
      if (oldData.showedOffers) {
        oldData.showedOffers = (0, _jsonParse2.default)(oldData.showedOffers);
      }
      if (oldData.statistics) {
        oldData.statistics = (0, _jsonParse2.default)(oldData.statistics);
      }
      if (oldData.useGa) {
        oldData.useGa = oldData.useGa === 'true';
      }

      return _browser2.default.storage.local.set(oldData).then(function () {
        _this.data = oldData;
        localStorage.clear();
      });
    }

    _this.data = data;
  });

  /** Read
  @param {String} key */
  this.getItem = function (key) {
    return _.cloneDeep(_this.data[key]);
  };
  this.get = this.getItem;

  /** Write
  @param {String} key
  @param {*} value */
  this.setItem = function (key, value) {
    value = _.cloneDeep(value);
    _this.data[key] = value;

    _browser2.default.storage.local.set(_defineProperty({}, key, value));
  };
  this.set = this.setItem;

  /** Remove
  @param {(String|Array<String>)} keys */
  this.removeItem = function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var keys = args.length > 1 ? args : args[0];
    if (typeof keys === 'string') keys = [keys];

    keys.forEach(function (key) {
      delete _this.data[key];
    });

    _browser2.default.storage.local.remove(keys);
  };
  this.remove = this.removeItem;
}();

exports.default = storage;

},{"core/browser":118,"tools/jsonParse":180}],146:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _getInitialState = require('./getInitialState');

var _getInitialState2 = _interopRequireDefault(_getInitialState);

var _log = require('core/log');

var _log2 = _interopRequireDefault(_log);

var _storage = require('core/storage');

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _window = window,
    _ = _window._;

exports.default = function () {
  /** @type {Object} */
  var initialState = (0, _getInitialState2.default)();

  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
      case 'Days after install update':
        {
          var days = action.days;

          (0, _log2.default)('Store: days after install update. New: ', days, '. Old: ', state.daysAfterInstall);

          state = Object.assign({}, state, { 'daysAfterInstall': days });
          break;
        }

      case 'Domain change':
        {
          var domain = action.domain;

          if (_config2.default.type === 'development') {
            (0, _log2.default)('Store: domain update. New: ', domain, '. Old: ', state.domain);
          }

          state = Object.assign({}, state, { domain: domain });
          break;
        }

      case 'PAC update':
        {
          var pac = _.cloneDeep(action.data);

          _storage2.default.setItem('pac', pac);

          (0, _log2.default)('Store: PAC update. New: ', pac, '. Old: ', state.pac);

          state = Object.assign({}, state, { pac: pac });
          break;
        }

      case 'Page change':
        {
          /** @type {String} */
          var oldPage = state.page;
          state = Object.assign({}, state);
          state.page = action.page;

          (0, _log2.default)('Store: page change. New: ', state.page, 'Old: ', oldPage);
          break;
        }

      case 'Server list update':
        {
          var servers = _.cloneDeep(action.data);
          _storage2.default.setItem('currentConfig', servers);

          servers = servers.countries;
          (0, _log2.default)('Store: server list update. ', servers);

          state = Object.assign({}, state, { servers: servers });
          break;
        }

      case 'User data change':
        {
          /** @type {object} */
          var oldAccount = state.user;
          var account = _.cloneDeep(action.data);
          Object.assign(account, {
            'premium': Boolean(account.premium),
            'guest': Boolean(account.guest),
            'validUntil': Date.now() + 5 * 60 * 1000, // TODO make Refresh time separate constant
            'version': Date.now()
          });
          _storage2.default.setItem('account', account);

          (0, _log2.default)('Store: account update. New: ', account, '. Old: ', oldAccount);

          state = Object.assign({}, state, { 'user': account });
          break;
        }
    }

    // Default
    return state;
  };
};

},{"./getInitialState":147,"config":"config","core/log":129,"core/storage":145}],147:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _storage = require('core/storage');

var _storage2 = _interopRequireDefault(_storage);

var _validateServerList2 = require('tools/validateServerList');

var _validateServerList3 = _interopRequireDefault(_validateServerList2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
@typedef {Object} SiteFilter
@property {String} domain
@property {String} country
@property {Boolean} proxyMode */

exports.default = function () {
  return {
    /** Days after instllation
    @type {integer} */
    'daysAfterInstall': function () {
      var timestamp = _storage2.default.getItem('daysAfterInstall');
      if (!timestamp) return 0;

      return Math.floor((Date.now() - timestamp) / (24 * 3600 * 1000));
    }(),

    /** Current URL domain
    @type {(String|null)} */
    'domain': null,

    /** Pac script state
    @type {Object} */
    'pac': function () {
      /** @type {(Object|undefined)} */
      var pac = _storage2.default.getItem('pac');

      /**
      @namespace
      @property {String} mode - 'direct' OR 'proxy' (in past can be 'broken')
      @property {(String|null)} country
      @property {Boolean} broken
      @property {Array<SiteFilter>} filters */
      var defaultPac = {
        'mode': 'direct',
        'country': null,
        'broken': false,
        'filters': []
      };

      if (pac) {
        // Old user
        pac.broken = pac.broken || false; // Make it strict boolean

        if (pac.mode === 'broken') {
          pac.mode = 'direct';
          pac.broken = true;
        }
      } else {
        // New user
        while (true) {
          // For very old versions upgrade
          /** @type {(String|undefined)} */
          var connected = _storage2.default.getItem('connected');
          if (connected && connected !== 'off') {
            // Proxy up
            defaultPac.mode = 'proxy';
            defaultPac.country = connected;
            break;
          }

          var lastConnected = _storage2.default.getItem('lastConnected');
          if (lastConnected) defaultPac.country = lastConnected;
          break;
        }
      }

      return pac || defaultPac;
    }(),

    /** Page: index:home, index:changeLocation, login
    @type {String} */
    'page': 'index:home',

    /** List of proxy servers
    @type {Object} */
    'servers': function () {
      var defaultConfig = (_config2.default.proxy.settings || {}).countries;

      // No cache
      var currentConfig = _storage2.default.getItem('currentConfig');
      if (!currentConfig) return defaultConfig;

      currentConfig = currentConfig.countries;

      var _validateServerList = (0, _validateServerList3.default)(currentConfig),
          valid = _validateServerList.valid;

      if (valid) return currentConfig; // All correct

      _storage2.default.removeItem('currentConfig');
      return defaultConfig; // Not correct cached value
    }(),

    /** Information about owner
    @type {Object} */
    'user': function () {
      var defaultUser = { 'guest': true, 'premium': false };

      var account = _storage2.default.getItem('account');
      if (!account) return defaultUser;

      // Defaults
      account.premium = account.premium || false;
      return account;
    }()
  };
};

},{"config":"config","core/storage":145,"tools/validateServerList":183}],148:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _createReducer = require('./createReducer');

var _createReducer2 = _interopRequireDefault(_createReducer);

var _Deferred = require('tools/Deferred');

var _Deferred2 = _interopRequireDefault(_Deferred);

var _storage = require('core/storage');

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _window = window,
    _ = _window._;


var store = new function () {
  var _this = this;

  /** @type {Deferred} */
  this.ready = (0, _Deferred2.default)();

  /** Subscribe to changes like in React-Redux
  @param {String} [property] - used to get changes only from specific property
  @param {Function} compare - callback
  @return {Function} unsubscribe function */
  this.compare = function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var state = _this.getState();

    if (args.length === 1) {
      var compare = args[0];


      return _this.subscribe(function () {
        var newState = _this.getState();
        compare(newState, state);
        state = newState;
      });
    }
    if (args.length === 2) {
      var property = args[0],
          _compare = args[1];


      if (typeof property === 'string') {
        return _this.subscribe(function () {
          var newState = _this.getState();
          if (newState[property] !== state[property]) {
            _compare(newState[property], state[property]);
          }
          state = newState;
        });
      } else if (typeof property === 'function') {
        return _this.subscribe(function () {
          var newState = _this.getState();
          var values = [newState, state].map(function (value) {
            return property(value);
          });
          if (!_.isEqual.apply(_, values)) _compare.apply({}, values);
          state = newState;
        });
      }
    }
  };

  this.initiate = function () {
    /** @type {Object} */
    var realStore = (0, _redux.createStore)((0, _createReducer2.default)());

    // Binding all properties to our store object
    ['dispatch', 'getState', 'subscribe'].forEach(function (property) {
      /** @type {Function} */
      _this[property] = realStore[property].bind(realStore);
    });

    _this.ready.resolve();
  };
}();

_storage2.default.ready.then(function () {
  store.initiate();
});

exports.default = store;

},{"./createReducer":146,"core/storage":145,"redux":20,"tools/Deferred":172}],149:[function(require,module,exports){
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /** Part of background.js */


var _browser = require('core/browser');

var _browser2 = _interopRequireDefault(_browser);

var _store = require('core/store');

var _store2 = _interopRequireDefault(_store);

var _urlToDomain = require('tools/urlToDomain');

var _urlToDomain2 = _interopRequireDefault(_urlToDomain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @type {object} */
var state = { 'id': null, 'url': null, 'domain': null };

/**
@param {string} [url]
@return {undefined} */
var dispatch = function dispatch() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  // URL level
  if (state.url === url) return;
  state.url = url;

  // Domain level
  var domain = (0, _urlToDomain2.default)(url);
  if (state.domain === domain) return;
  state.domain = domain;

  _store2.default.ready.then(function () {
    _store2.default.dispatch({ 'type': 'Domain change', domain: domain });
  });
};

if (_browser2.default.tabs.onActivated) {
  _browser2.default.tabs.onActivated.addListener(function (_ref) {
    var tabId = _ref.tabId;

    _browser2.default.tabs.get(tabId).then(function (_ref2) {
      var id = _ref2.id,
          url = _ref2.url;

      state.id = id;
      dispatch(url);
    });
  });
}

if (_browser2.default.tabs.onUpdated) {
  _browser2.default.tabs.onUpdated.addListener(function (tabId, x, _ref3) {
    var url = _ref3.url;

    if (state.id !== tabId) return;

    dispatch(url);
  });
}

if (_browser2.default.windows.onFocusChanged) {
  _browser2.default.windows.onFocusChanged.addListener(function (windowId) {
    if (windowId === -1) return;

    _browser2.default.tabs.query({ windowId: windowId, 'active': true }).then(function (_ref4) {
      var _ref5 = _slicedToArray(_ref4, 1),
          data = _ref5[0];

      if (!data) {
        state.id = null;
        dispatch();
        return;
      }

      var id = data.id,
          url = data.url;

      state.id = id;
      dispatch(url);
    });
  });
}

// Initial URL
_browser2.default.tabs.query({ 'active': true, 'currentWindow': true }).then(function (tabs) {
  if (!tabs.length) return;

  var _tabs$pop = tabs.pop(),
      id = _tabs$pop.id,
      url = _tabs$pop.url;

  Object.assign(state, { id: id, url: url });

  dispatch(url);
});

},{"core/browser":118,"core/store":148,"tools/urlToDomain":182}],150:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ga = require('core/ga');

var _ga2 = _interopRequireDefault(_ga);

var _log = require('core/log');

var _log2 = _interopRequireDefault(_log);

var _storage = require('core/storage');

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @type {String} */
var sectionName = 'Check auth limit. ';

/**
@param {Object} details - https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/webRequest/onAuthRequired#details
@return {Boolean} */

exports.default = function (details) {
  var host = details['challenger'].host,
      timestamp = details['timeStamp'];


  var timeFrameMs = 10000;
  var authRequestsLimit = 10;

  /** @type {object} */
  var authHistory = _storage2.default.getItem('authHistory') || {};

  /** @type {boolean} */
  var returnValue = false;

  var hostAuthHistory = authHistory[host];
  var condition = !hostAuthHistory || !hostAuthHistory.periodStart || !hostAuthHistory.authRequestsNum;
  if (condition) {
    hostAuthHistory = authHistory[host] = {
      'periodStart': timestamp, 'authRequestsNum': 1
    };
    (0, _log2.default)(sectionName + 'No host auth history. Create record: ', hostAuthHistory);
  } else {
    (0, _log2.default)(sectionName + 'Host history record already exists: ', hostAuthHistory);

    var periodStart = hostAuthHistory.periodStart;
    if (timestamp - periodStart > timeFrameMs) {
      (0, _log2.default)(sectionName + 'Time frame already finished. Create new row.');
      hostAuthHistory.periodStart = timestamp;
      hostAuthHistory.authRequestsNum = 1;
    } else {
      (0, _log2.default)(sectionName + 'We are still in tracked time frame. Increase auth requests counter');
      hostAuthHistory.authRequestsNum++;

      if (hostAuthHistory.authRequestsNum >= authRequestsLimit) {
        (0, _log2.default)(sectionName + 'Limit exceeded. Return true and clear host auth history');

        delete hostAuthHistory.periodStart;
        delete hostAuthHistory.authRequestsNum;

        (0, _ga2.default)('auth_request_limit_exceeded');

        returnValue = true;
      }
    }
  }

  (0, _log2.default)(sectionName + 'Save auth history: ', authHistory);
  _storage2.default.setItem('authHistory', authHistory);

  return returnValue;
};

},{"core/ga":126,"core/log":129,"core/storage":145}],151:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _browser = require('core/browser');

var _browser2 = _interopRequireDefault(_browser);

var _onAuthRequired = require('./onAuthRequired');

var _onAuthRequired2 = _interopRequireDefault(_onAuthRequired);

var _onBeforeSendHeaders = require('./onBeforeSendHeaders');

var _onBeforeSendHeaders2 = _interopRequireDefault(_onBeforeSendHeaders);

var _onCompleted = require('./onCompleted');

var _onCompleted2 = _interopRequireDefault(_onCompleted);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
@param {Promise} waitingPromise
@return {undefined} */
/** Part of background.js */
exports.default = function (waitingPromise) {
  if (!_browser2.default.webRequest) return;

  // Count of proxied pages
  /*Browser.webRequest.onBeforeSendHeaders.addListener(
    ({ url }) => {
      if( !store.getState().proxy.connected ) return;
      Counters.increase( 'proxied pages' );
    },
    { 'urls': [ '<all_urls>' ], 'types': [ 'main_frame' ] }
  );*/

  (0, _onAuthRequired2.default)(waitingPromise);
  (0, _onBeforeSendHeaders2.default)();
  (0, _onCompleted2.default)();
};

},{"./onAuthRequired":152,"./onBeforeSendHeaders":153,"./onCompleted":154,"core/browser":118}],152:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _browser = require('core/browser');

var _browser2 = _interopRequireDefault(_browser);

var _checkAuthLimitExceeded = require('./checkAuthLimitExceeded');

var _checkAuthLimitExceeded2 = _interopRequireDefault(_checkAuthLimitExceeded);

var _ga = require('core/ga');

var _ga2 = _interopRequireDefault(_ga);

var _internationalize = require('tools/internationalize');

var _internationalize2 = _interopRequireDefault(_internationalize);

var _log = require('core/log');

var _log2 = _interopRequireDefault(_log);

var _pac = require('core/pac');

var _pac2 = _interopRequireDefault(_pac);

var _storage = require('core/storage');

var _storage2 = _interopRequireDefault(_storage);

var _store = require('core/store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _window = window,
    _ = _window._;

/**
@param {Promise} waitingPromise
@return {undefined} */

exports.default = function (waitingPromise) {
  if (!_browser2.default.webRequest.onAuthRequired || !_browser2.default.proxy) return; // Only Chrome and FF 55+

  _browser2.default.webRequest.onAuthRequired.addListener(
  /**
  @param {Object} details - https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/webRequest/onAuthRequired#details
  @return {Promise} */
  function (details) {
    return new Promise(function (resolve) {
      // waitingPromise.then( () =>
      (0, _log2.default)('onAuthRequired. Details', details);

      // If auth request is not from browsec proxy, do not handle it.
      if (!details.isProxy || details.realm !== 'Browsec') {
        resolve();return;
      }

      var credentials = _store2.default.getState().user.credentials;

      /** @type {(String|undefined)} */


      var email = _.get(credentials, 'email');

      /** @type {(String|undefined)} */
      var password = _.get(credentials, 'access_token');

      if (!email || !password) {
        _pac2.default.disable();
        (0, _ga2.default)('extension', 'auth_error');
        alert((0, _internationalize2.default)('cant_authenticate_please_contact_browsec_support'));
        return;
      }

      _storage2.default.ready.then(function () {
        if ((0, _checkAuthLimitExceeded2.default)(details)) {
          // Limit reached
          _pac2.default.disable();
          (0, _ga2.default)('extension', 'auth_limit_error');
          alert((0, _internationalize2.default)('premium_server_authentication_error'));
        } else {
          // Limit not reached
          (0, _log2.default)('Authenticate on proxy with email: ', email);

          resolve({ 'authCredentials': { 'username': email, password: password } });
        }
      });
    });
  }, // )
  '<all_urls>', 'asyncBlocking');
};

},{"./checkAuthLimitExceeded":150,"core/browser":118,"core/ga":126,"core/log":129,"core/pac":136,"core/storage":145,"core/store":148,"tools/internationalize":179}],153:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _browser = require('core/browser');

var _browser2 = _interopRequireDefault(_browser);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _encodeTokenCredentials = require('tools/encodeTokenCredentials');

var _encodeTokenCredentials2 = _interopRequireDefault(_encodeTokenCredentials);

var _store = require('core/store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _store2.default.ready;

        case 2:

          /** Especially for site browsec.com -> modify headers to know user installed
          extension and credentials for automatic login */
          _browser2.default.webRequest.onBeforeSendHeaders.addListener(
          /**
          @param {String} url
          @param {Array} requestHeaders
          @return {Object} */
          function (_ref2) {
            var url = _ref2.url,
                requestHeaders = _ref2.requestHeaders;

            if (!url.includes('/api/') && !url.includes('/assets/')) {
              requestHeaders.push({ 'name': 'X-Browsec-Installed', 'value': '1' });

              var credentials = _store2.default.getState().user.credentials;

              if (credentials) {
                requestHeaders.push({
                  'name': 'Authorization',
                  'value': (0, _encodeTokenCredentials2.default)(credentials)
                });
              }
            }

            return { requestHeaders: requestHeaders };
          }, _config2.default.browsec.baseUrl + '*', ['blocking', 'requestHeaders']);

        case 3:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, undefined);
}));

},{"config":"config","core/browser":118,"core/store":148,"tools/encodeTokenCredentials":175}],154:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _browser = require('core/browser');

var _browser2 = _interopRequireDefault(_browser);

var _Counters = require('core/Counters');

var _Counters2 = _interopRequireDefault(_Counters);

var _store = require('core/store');

var _store2 = _interopRequireDefault(_store);

var _urlToDomain = require('tools/urlToDomain');

var _urlToDomain2 = _interopRequireDefault(_urlToDomain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = function () {
  _browser2.default.webRequest.onCompleted.addListener(function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
      var url = _ref2.url;

      var domain, _store$getState$pac, mode, filters, filter;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              domain = (0, _urlToDomain2.default)(url);

              if (domain) {
                _context.next = 3;
                break;
              }

              return _context.abrupt('return');

            case 3:
              _context.next = 5;
              return _store2.default.ready;

            case 5:
              _store$getState$pac = _store2.default.getState().pac, mode = _store$getState$pac.mode, filters = _store$getState$pac.filters;

              /** @type {(Object|undefined)} */

              filter = filters.find(function (_ref3) {
                var disabled = _ref3.disabled,
                    ownDomain = _ref3['domain'];
                return !disabled && domain.endsWith(ownDomain);
              });

              if (!(filter && !filter.proxyMode)) {
                _context.next = 9;
                break;
              }

              return _context.abrupt('return');

            case 9:
              if (!(mode === 'direct' && !filter)) {
                _context.next = 11;
                break;
              }

              return _context.abrupt('return');

            case 11:
              // Pure direct mode

              _Counters2.default.increase('proxied pages');

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), { 'urls': ['<all_urls>'], 'types': ['main_frame'] });
};

},{"core/Counters":26,"core/browser":118,"core/store":148,"tools/urlToDomain":182}],155:[function(require,module,exports){
'use strict';

var _browsecLink = require('core/browsecLink');

var _browsecLink2 = _interopRequireDefault(_browsecLink);

var _log = require('core/log');

var _log2 = _interopRequireDefault(_log);

var _runtime = require('core/runtime.onMessage');

var _runtime2 = _interopRequireDefault(_runtime);

var _routes = require('core/routes');

var _routes2 = _interopRequireDefault(_routes);

var _storage = require('core/storage');

var _storage2 = _interopRequireDefault(_storage);

var _store = require('core/store');

var _store2 = _interopRequireDefault(_store);

var _translation = require('./translation');

var _translation2 = _interopRequireDefault(_translation);

var _urlToDomain = require('tools/urlToDomain');

var _urlToDomain2 = _interopRequireDefault(_urlToDomain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /** this file is part of background.js */


/** All possible languages for translation
@type {Array<String>} */
var languages = _translation2.default.map(function (_ref) {
  var language = _ref.language;
  return language;
});

/** Initial call to get status + all translations */
_runtime2.default.addListener({
  'type': 'notification:request:initial',
  'callback': function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref3) {
      var language = _ref3.language,
          url = _ref3.url;
      var domain, state, premium, proxyEnabled, showPopup, hidden, days, visible, translationLanguage, link;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _store2.default.ready;

            case 2:

              /** @type {String} */
              domain = (0, _urlToDomain2.default)(url) || '';

              /** @type {Object} */

              state = _store2.default.getState();

              /** Is user premium?
              @type {Boolean} */

              premium = state.user.premium;

              /** Is proxy enabled
              @type {Boolean} */

              proxyEnabled = function () {
                var _state$pac = state.pac,
                    mode = _state$pac.mode,
                    filters = _state$pac.filters;

                if (!domain) return false;

                /** @type {(Object|undefined)} */
                var filter = filters.find(function (_ref4) {
                  var disabled = _ref4.disabled,
                      ownDomain = _ref4['domain'];
                  return !disabled && domain.endsWith(ownDomain);
                });
                if (filter) return filter.proxyMode;

                return mode === 'proxy';
              }();

              /** Do we need to show popup?
              @type {boolean} */


              showPopup = proxyEnabled && !premium;

              (0, _log2.default)('Notification. Show: ', showPopup, '. Proxy: ', proxyEnabled, '. Premium user: ', premium);

              if (showPopup) {
                _context.next = 10;
                break;
              }

              return _context.abrupt('return', { 'show': false });

            case 10:
              // NOTE very important to make this return

              /** @type {(integer|null)} */
              hidden = _storage2.default.getItem('notificationHidden') || null;
              days = 3;

              /** Is popup big?
              @type {Boolean} */

              visible = function () {
                // Old variant or no data
                if (!hidden) return true;

                var breakPoint = hidden + 1000 * 60 * 60 * 24 * days;
                return Date.now() > breakPoint;
              }();

              /** @type {String} */


              translationLanguage = languages.includes(language) ? language : 'en';

              /** @type {String} */

              link = (0, _browsecLink2.default)(_routes2.default.premium, function (search) {
                return Object.assign(search, {
                  'utm_source': 'Chromium extension',
                  'utm_medium': 'inpage_notification',
                  'utm_campaign': 'inpage_notification-' + domain,
                  'utm_term': translationLanguage
                });
              });
              return _context.abrupt('return', {
                'show': true,
                'translation': _translation2.default.find(function (_ref5) {
                  var language = _ref5.language;
                  return language === translationLanguage;
                }).template,
                'size': visible ? 'big' : 'small',
                link: link
              });

            case 16:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function callback(_x) {
      return _ref2.apply(this, arguments);
    };
  }()
});

/** Set visibility state */
_runtime2.default.addListener({
  'type': 'notification:request:setVisibility',

  /** @param {boolean} popupVisible */
  'callback': function callback(_ref6) {
    var popupVisible = _ref6['visible'];

    if (popupVisible) {
      _storage2.default.removeItem('notificationHidden');
    } else {
      _storage2.default.setItem('notificationHidden', Date.now());
    }
  }
});

/** Ping for content script */
_runtime2.default.addListener({
  'type': 'notification:ping',
  'callback': function callback() {
    return 'ok';
  }
});

},{"./translation":156,"core/browsecLink":44,"core/log":129,"core/routes":139,"core/runtime.onMessage":141,"core/storage":145,"core/store":148,"tools/urlToDomain":182}],156:[function(require,module,exports){
module.exports=[
  {
    "language": "en",
    "template": {
      "title": "You’re using Browsec Free",
      "price_description": "Buy Browsec Premium for only $3.33 with Turbo Speed for HD quality streaming!",
      "upgrade_to_premium_now": "Upgrade to Premium Now",
      "remind_me_later": "Remind me later"
    }
  },
  {
    "language": "ar",
    "template": {
      "title": "أنت تستخدم Browsec المجاني",
      "price_description": "اشتري Browsec الرئيسي مقابل 3.33 دولار فقط مع سرعة تيربو للبث بسرعة فائقة HD!",
      "upgrade_to_premium_now": "قم بالترقية إلى الإصدار الأساسي الآن",
      "remind_me_later": "تذكير لاحقًا"
    }
  },
  {
    "language": "de",
    "template": {
      "title": "Sie nutzen die kostenlose Version von Browsec",
      "price_description": "Kaufen Sie für nur 3,33 $ Browsec Premium mit Turbo-Geschwindigkeit und HD Streaming in hoher Qualität!",
      "upgrade_to_premium_now": "Jetzt auf Premium upgraden",
      "remind_me_later": "Später erinnern"
    }
  },
  {
    "language": "es",
    "template": {
      "title": "Estás usando Browsec Free",
      "price_description": "¡Compra Browsec Premium por solo $3,33 con Velocidad Turbo para transmisión en calidad HD!",
      "upgrade_to_premium_now": "Pasar a Premium ahora",
      "remind_me_later": "Recordarme más tarde"
    }
  },
  {
    "language": "fr",
    "template": {
      "title": "Vous utilisez la version gratuite de Browsec",
      "price_description": "Achetez la version premium de Browsec pour 3,33 $ seulement avec Turbo Speed pour une diffusion en qualité HD !",
      "upgrade_to_premium_now": "Devenez premium dès maintenant",
      "remind_me_later": "Me le rappeler plus tard"
    }
  },
  {
    "language": "id",
    "template": {
      "title": "Anda sedang menggunakan Browsec Gratis",
      "price_description": "Beli Browsec Premiun hanya seharga $3,33 dengan Kecepatan Turbo untuk streaming berkualitas HD!",
      "upgrade_to_premium_now": "Tingkatkan ke Premium Sekarang",
      "remind_me_later": "Ingatkan saya nanti"
    }
  },
  {
    "language": "it",
    "template": {
      "title": "Stai usando Browsec Free",
      "price_description": "Acquista Browsec Premium per soli $3.33 con Turbo Speed per streaming ad alta qualità!",
      "upgrade_to_premium_now": "Passa subito a Premium",
      "remind_me_later": "Ricordamelo più tardi"
    }
  },
  {
    "language": "ko",
    "template": {
      "title": "Browsec Free를 사용 중입니다",
      "price_description": "단 $3.33에 HD 품질 스트리밍을 위한 터보 속도를 갖춘 Browsec Premium을 구입하세요!",
      "upgrade_to_premium_now": "지금 프리미엄으로 업그레이드",
      "remind_me_later": "나중에 알림"
    }
  },
  {
    "language": "pt",
    "template": {
      "title": "Está a utilizar o Browsec Free",
      "price_description": "Comprar Browsec Premium por apenas $3.33 com Turbo Speed para streaming em qualidade HD!",
      "upgrade_to_premium_now": "Fazer upgrade agora para o Premium",
      "remind_me_later": "Lembrar-me mais tarde"
    }
  },
  {
    "language": "ru",
    "template": {
      "title": "Вы используете бесплатный план Browsec",
      "price_description": "Купите Премиум всего за $3.33 для просмотра видео в HD-качестве!",
      "upgrade_to_premium_now": "Купить премиум",
      "remind_me_later": "Напомните мне позже"
    }
  },
  {
    "language": "th",
    "template": {
      "title": "คุณกำลังใช้งาน Browsec Free",
      "price_description": "ซื้อ Browsec Premium ในราคาเพียง $3.33 พร้อมด้วย Turbo Speed สำหรับสตรีมมิ่งคุณภาพระดับ HD!",
      "upgrade_to_premium_now": "อัปเกรดเป็น Premium ตอนนี้เลย",
      "remind_me_later": "เตือนฉันภายหลัง"
    }
  },
  {
    "language": "tr",
    "template": {
      "title": "Ücretsiz Browsec kullanıyorsunuz",
      "price_description": "Sadece 3.33$ 'a Browsec Premium'u Turbo Hız ve HD yayın kalitesi için satın alın!",
      "upgrade_to_premium_now": "Şimdi Premium'a Geç!",
      "remind_me_later": "Daha sonra hatırlat"
    }
  },
  {
    "language": "vi",
    "template": {
      "title": "Bạn đang sử dụng Browsec Miễn phí",
      "price_description": "Mua Browsec Cao cấp chỉ với 3,33$ với Turbo Speed cho tốc độ truyền dữ liệu chất lượng HD!",
      "upgrade_to_premium_now": "Nâng cấp ngay lên hạng Cao cấp.",
      "remind_me_later": "Nhắc lại sau."
    }
  },
  {
    "language": "uk",
    "template": {
      "title": "Ви використовуєте безкоштовний план Browsec",
      "price_description": "Купуйте Преміум всього за $ 3.33 для перегляду відео в HD-якості!",
      "upgrade_to_premium_now": "Купити преміум",
      "remind_me_later": "Нагадати мені пізніше"
    }
  }
]

},{}],157:[function(require,module,exports){
'use strict';

// Production steps of ECMA-262, Edition 6, 22.1.2.1
if (!Array.from) {
  Array.from = function () {
    var toStr = Object.prototype.toString;
    var isCallable = function isCallable(fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function toInteger(value) {
      var number = Number(value);
      if (isNaN(number)) {
        return 0;
      }
      if (number === 0 || !isFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function toLength(value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike /*, mapFn, thisArg */) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method
      // of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  }();
}

},{}],158:[function(require,module,exports){
'use strict';

// https://tc39.github.io/ecma262/#sec-array.prototype.find
if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', { // eslint-disable-line no-extend-native
    'value': function value(predicate) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return kValue.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return undefined.
      return undefined;
    }
  });
}

},{}],159:[function(require,module,exports){
'use strict';

// https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
if (!Array.prototype.findIndex) {
  Object.defineProperty(Array.prototype, 'findIndex', { // eslint-disable-line
    'value': function value(predicate) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return k.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return k;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return -1.
      return -1;
    }
  });
}

},{}],160:[function(require,module,exports){
'use strict';

// https://tc39.github.io/ecma262/#sec-array.prototype.includes
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', { // eslint-disable-line no-extend-native
    'value': function value(searchElement, fromIndex) {
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      // 1. Let O be ? ToObject(this value).
      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If len is 0, return false.
      if (len === 0) return false;

      // 4. Let n be ? ToInteger(fromIndex).
      //    (If fromIndex is undefined, this step produces the value 0.)
      var n = fromIndex | 0;

      // 5. If n ≥ 0, then
      //  a. Let k be n.
      // 6. Else n < 0,
      //  a. Let k be len + n.
      //  b. If k < 0, let k be 0.
      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      function sameValueZero(x, y) {
        return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
      }

      // 7. Repeat, while k < len
      while (k < len) {
        // a. Let elementK be the result of ? Get(O, ! ToString(k)).
        // b. If SameValueZero(searchElement, elementK) is true, return true.
        if (sameValueZero(o[k], searchElement)) {
          return true;
        }
        // c. Increase k by 1.
        k++;
      }

      // 8. Return false
      return false;
    }
  });
}

},{}],161:[function(require,module,exports){
'use strict';

if (typeof Object.assign !== 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, 'assign', {
    'value': function assign(target, varArgs) {
      // .length of function is 2
      'use strict';

      if (target == null) {
        // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) {
          // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    'writable': true,
    'configurable': true
  });
}

},{}],162:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promisePolyfill = require('promise-polyfill');

var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);

var _PromisePrototype = require('./Promise.prototype.finally');

var _PromisePrototype2 = _interopRequireDefault(_PromisePrototype);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// To add to window
if (window && !window.Promise) window.Promise = _promisePolyfill2.default;

(0, _PromisePrototype2.default)();

exports.default = _promisePolyfill2.default;

},{"./Promise.prototype.finally":163,"promise-polyfill":13}],163:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  if (window.Promise.prototype.finally) return;

  /**
  @method
  @param {Function}
  @return {Promise} initial */
  window.Promise.prototype.finally = function (onFinally) {
    // eslint-disable-line no-extend-native
    this.then(onFinally, onFinally);

    return this;
  };
};

},{}],164:[function(require,module,exports){
"use strict";

if (!String.prototype.endsWith) {
  String.prototype.endsWith = function (search, this_len) {
    // eslint-disable-line no-extend-native
    if (this_len === undefined || this_len > this.length) {
      this_len = this.length;
    }
    return this.substring(this_len - search.length, this_len) === search;
  };
}

},{}],165:[function(require,module,exports){
'use strict';

if (!String.prototype.includes) {
  String.prototype.includes = function (search, start) {
    // eslint-disable-line
    'use strict';

    if (typeof start !== 'number') start = 0;

    if (start + search.length > this.length) return false;

    return this.indexOf(search, start) !== -1;
  };
}

},{}],166:[function(require,module,exports){
'use strict';

// https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd
if (!String.prototype.padEnd) {
  String.prototype.padEnd = function padEnd(targetLength, padString) {
    // eslint-disable-line
    targetLength = targetLength >> 0; //floor if number or convert non-number to 0;
    padString = String(typeof padString !== 'undefined' ? padString : ' ');
    if (this.length > targetLength) {
      return String(this);
    } else {
      targetLength = targetLength - this.length;
      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
      }
      return String(this) + padString.slice(0, targetLength);
    }
  };
}

},{}],167:[function(require,module,exports){
'use strict';

// https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
if (!String.prototype.padStart) {
  String.prototype.padStart = function padStart(targetLength, padString) {
    // eslint-disable-line
    targetLength = targetLength >> 0; //truncate if number or convert non-number to 0;
    padString = String(typeof padString !== 'undefined' ? padString : ' ');
    if (this.length > targetLength) {
      return String(this);
    } else {
      targetLength = targetLength - this.length;
      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
      }
      return padString.slice(0, targetLength) + String(this);
    }
  };
}

},{}],168:[function(require,module,exports){
"use strict";

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (search, pos) {
    // eslint-disable-line
    return this.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
  };
}

},{}],169:[function(require,module,exports){
'use strict';

/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/publicdomain/zero/1.0/ */

var condition = typeof URL === 'undefined' || URL.prototype.toString === Object.prototype.toString;
if (condition) {
  var temporaryScope = {};

  /* eslint-disable */
  (function (scope) {
    'use strict';

    // feature detect for URL constructor

    var hasWorkingUrl = false;
    if (!scope.forceJURL) {
      try {
        var u = new URL('b', 'http://a');
        u.pathname = 'c%20d';
        hasWorkingUrl = u.href === 'http://a/c%20d';
      } catch (e) {}
    }

    if (hasWorkingUrl) {
      return;
    }

    var relative = Object.create(null);
    relative['ftp'] = 21;
    relative['file'] = 0;
    relative['gopher'] = 70;
    relative['http'] = 80;
    relative['https'] = 443;
    relative['ws'] = 80;
    relative['wss'] = 443;

    var relativePathDotMapping = Object.create(null);
    relativePathDotMapping['%2e'] = '.';
    relativePathDotMapping['.%2e'] = '..';
    relativePathDotMapping['%2e.'] = '..';
    relativePathDotMapping['%2e%2e'] = '..';

    function isRelativeScheme(scheme) {
      return relative[scheme] !== undefined;
    }

    function invalid() {
      clear.call(this);
      this._isInvalid = true;
    }

    function IDNAToASCII(h) {
      if (h == '') {
        invalid.call(this);
      }
      // XXX
      return h.toLowerCase();
    }

    function percentEscape(c) {
      var unicode = c.charCodeAt(0);
      if (unicode > 0x20 && unicode < 0x7F &&
      // " # < > ? `
      [0x22, 0x23, 0x3C, 0x3E, 0x3F, 0x60].indexOf(unicode) == -1) {
        return c;
      }
      return encodeURIComponent(c);
    }

    function percentEscapeQuery(c) {
      // XXX This actually needs to encode c using encoding and then
      // convert the bytes one-by-one.

      var unicode = c.charCodeAt(0);
      if (unicode > 0x20 && unicode < 0x7F &&
      // " # < > ` (do not escape '?')
      [0x22, 0x23, 0x3C, 0x3E, 0x60].indexOf(unicode) == -1) {
        return c;
      }
      return encodeURIComponent(c);
    }

    var EOF,
        ALPHA = /[a-zA-Z]/,
        ALPHANUMERIC = /[a-zA-Z0-9\+\-\.]/;

    function parse(input, stateOverride, base) {
      function err(message) {
        errors.push(message);
      }

      var state = stateOverride || 'scheme start',
          cursor = 0,
          buffer = '',
          seenAt = false,
          seenBracket = false,
          errors = [];

      loop: while ((input[cursor - 1] != EOF || cursor == 0) && !this._isInvalid) {
        var c = input[cursor];
        switch (state) {
          case 'scheme start':
            if (c && ALPHA.test(c)) {
              buffer += c.toLowerCase(); // ASCII-safe
              state = 'scheme';
            } else if (!stateOverride) {
              buffer = '';
              state = 'no scheme';
              continue;
            } else {
              err('Invalid scheme.');
              break loop;
            }
            break;

          case 'scheme':
            if (c && ALPHANUMERIC.test(c)) {
              buffer += c.toLowerCase(); // ASCII-safe
            } else if (c == ':') {
              this._scheme = buffer;
              buffer = '';
              if (stateOverride) {
                break loop;
              }
              if (isRelativeScheme(this._scheme)) {
                this._isRelative = true;
              }
              if (this._scheme == 'file') {
                state = 'relative';
              } else if (this._isRelative && base && base._scheme == this._scheme) {
                state = 'relative or authority';
              } else if (this._isRelative) {
                state = 'authority first slash';
              } else {
                state = 'scheme data';
              }
            } else if (!stateOverride) {
              buffer = '';
              cursor = 0;
              state = 'no scheme';
              continue;
            } else if (EOF == c) {
              break loop;
            } else {
              err('Code point not allowed in scheme: ' + c);
              break loop;
            }
            break;

          case 'scheme data':
            if (c == '?') {
              this._query = '?';
              state = 'query';
            } else if (c == '#') {
              this._fragment = '#';
              state = 'fragment';
            } else {
              // XXX error handling
              if (EOF != c && c != '\t' && c != '\n' && c != '\r') {
                this._schemeData += percentEscape(c);
              }
            }
            break;

          case 'no scheme':
            if (!base || !isRelativeScheme(base._scheme)) {
              err('Missing scheme.');
              invalid.call(this);
            } else {
              state = 'relative';
              continue;
            }
            break;

          case 'relative or authority':
            if (c == '/' && input[cursor + 1] == '/') {
              state = 'authority ignore slashes';
            } else {
              err('Expected /, got: ' + c);
              state = 'relative';
              continue;
            }
            break;

          case 'relative':
            this._isRelative = true;
            if (this._scheme != 'file') {
              this._scheme = base._scheme;
            }
            if (EOF == c) {
              this._host = base._host;
              this._port = base._port;
              this._path = base._path.slice();
              this._query = base._query;
              this._username = base._username;
              this._password = base._password;
              break loop;
            } else if (c == '/' || c == '\\') {
              if (c == '\\') {
                err('\\ is an invalid code point.');
              }
              state = 'relative slash';
            } else if (c == '?') {
              this._host = base._host;
              this._port = base._port;
              this._path = base._path.slice();
              this._query = '?';
              this._username = base._username;
              this._password = base._password;
              state = 'query';
            } else if (c == '#') {
              this._host = base._host;
              this._port = base._port;
              this._path = base._path.slice();
              this._query = base._query;
              this._fragment = '#';
              this._username = base._username;
              this._password = base._password;
              state = 'fragment';
            } else {
              var nextC = input[cursor + 1];
              var nextNextC = input[cursor + 2];
              if (this._scheme != 'file' || !ALPHA.test(c) || nextC != ':' && nextC != '|' || EOF != nextNextC && nextNextC != '/' && nextNextC != '\\' && nextNextC != '?' && nextNextC != '#') {
                this._host = base._host;
                this._port = base._port;
                this._username = base._username;
                this._password = base._password;
                this._path = base._path.slice();
                this._path.pop();
              }
              state = 'relative path';
              continue;
            }
            break;

          case 'relative slash':
            if (c == '/' || c == '\\') {
              if (c == '\\') {
                err('\\ is an invalid code point.');
              }
              if (this._scheme == 'file') {
                state = 'file host';
              } else {
                state = 'authority ignore slashes';
              }
            } else {
              if (this._scheme != 'file') {
                this._host = base._host;
                this._port = base._port;
                this._username = base._username;
                this._password = base._password;
              }
              state = 'relative path';
              continue;
            }
            break;

          case 'authority first slash':
            if (c == '/') {
              state = 'authority second slash';
            } else {
              err("Expected '/', got: " + c);
              state = 'authority ignore slashes';
              continue;
            }
            break;

          case 'authority second slash':
            state = 'authority ignore slashes';
            if (c != '/') {
              err("Expected '/', got: " + c);
              continue;
            }
            break;

          case 'authority ignore slashes':
            if (c != '/' && c != '\\') {
              state = 'authority';
              continue;
            } else {
              err('Expected authority, got: ' + c);
            }
            break;

          case 'authority':
            if (c == '@') {
              if (seenAt) {
                err('@ already seen.');
                buffer += '%40';
              }
              seenAt = true;
              for (var i = 0; i < buffer.length; i++) {
                var cp = buffer[i];
                if (cp == '\t' || cp == '\n' || cp == '\r') {
                  err('Invalid whitespace in authority.');
                  continue;
                }
                // XXX check URL code points
                if (cp == ':' && this._password === null) {
                  this._password = '';
                  continue;
                }
                var tempC = percentEscape(cp);
                this._password !== null ? this._password += tempC : this._username += tempC;
              }
              buffer = '';
            } else if (EOF == c || c == '/' || c == '\\' || c == '?' || c == '#') {
              cursor -= buffer.length;
              buffer = '';
              state = 'host';
              continue;
            } else {
              buffer += c;
            }
            break;

          case 'file host':
            if (EOF == c || c == '/' || c == '\\' || c == '?' || c == '#') {
              if (buffer.length == 2 && ALPHA.test(buffer[0]) && (buffer[1] == ':' || buffer[1] == '|')) {
                state = 'relative path';
              } else if (buffer.length == 0) {
                state = 'relative path start';
              } else {
                this._host = IDNAToASCII.call(this, buffer);
                buffer = '';
                state = 'relative path start';
              }
              continue;
            } else if (c == '\t' || c == '\n' || c == '\r') {
              err('Invalid whitespace in file host.');
            } else {
              buffer += c;
            }
            break;

          case 'host':
          case 'hostname':
            if (c == ':' && !seenBracket) {
              // XXX host parsing
              this._host = IDNAToASCII.call(this, buffer);
              buffer = '';
              state = 'port';
              if (stateOverride == 'hostname') {
                break loop;
              }
            } else if (EOF == c || c == '/' || c == '\\' || c == '?' || c == '#') {
              this._host = IDNAToASCII.call(this, buffer);
              buffer = '';
              state = 'relative path start';
              if (stateOverride) {
                break loop;
              }
              continue;
            } else if (c != '\t' && c != '\n' && c != '\r') {
              if (c == '[') {
                seenBracket = true;
              } else if (c == ']') {
                seenBracket = false;
              }
              buffer += c;
            } else {
              err('Invalid code point in host/hostname: ' + c);
            }
            break;

          case 'port':
            if (/[0-9]/.test(c)) {
              buffer += c;
            } else if (EOF == c || c == '/' || c == '\\' || c == '?' || c == '#' || stateOverride) {
              if (buffer != '') {
                var temp = parseInt(buffer, 10);
                if (temp != relative[this._scheme]) {
                  this._port = temp + '';
                }
                buffer = '';
              }
              if (stateOverride) {
                break loop;
              }
              state = 'relative path start';
              continue;
            } else if (c == '\t' || c == '\n' || c == '\r') {
              err('Invalid code point in port: ' + c);
            } else {
              invalid.call(this);
            }
            break;

          case 'relative path start':
            if (c == '\\') {
              err("'\\' not allowed in path.");
            }
            state = 'relative path';
            if (c != '/' && c != '\\') {
              continue;
            }
            break;

          case 'relative path':
            if (EOF == c || c == '/' || c == '\\' || !stateOverride && (c == '?' || c == '#')) {
              if (c == '\\') {
                err('\\ not allowed in relative path.');
              }
              var tmp;
              if (tmp = relativePathDotMapping[buffer.toLowerCase()]) {
                buffer = tmp;
              }
              if (buffer == '..') {
                this._path.pop();
                if (c != '/' && c != '\\') {
                  this._path.push('');
                }
              } else if (buffer == '.' && c != '/' && c != '\\') {
                this._path.push('');
              } else if (buffer != '.') {
                if (this._scheme == 'file' && this._path.length == 0 && buffer.length == 2 && ALPHA.test(buffer[0]) && buffer[1] == '|') {
                  buffer = buffer[0] + ':';
                }
                this._path.push(buffer);
              }
              buffer = '';
              if (c == '?') {
                this._query = '?';
                state = 'query';
              } else if (c == '#') {
                this._fragment = '#';
                state = 'fragment';
              }
            } else if (c != '\t' && c != '\n' && c != '\r') {
              buffer += percentEscape(c);
            }
            break;

          case 'query':
            if (!stateOverride && c == '#') {
              this._fragment = '#';
              state = 'fragment';
            } else if (EOF != c && c != '\t' && c != '\n' && c != '\r') {
              this._query += percentEscapeQuery(c);
            }
            break;

          case 'fragment':
            if (EOF != c && c != '\t' && c != '\n' && c != '\r') {
              this._fragment += c;
            }
            break;
        }

        cursor++;
      }
    }

    function clear() {
      this._scheme = '';
      this._schemeData = '';
      this._username = '';
      this._password = null;
      this._host = '';
      this._port = '';
      this._path = [];
      this._query = '';
      this._fragment = '';
      this._isInvalid = false;
      this._isRelative = false;
    }

    // Does not process domain names or IP addresses.
    // Does not handle encoding for the query parameter.
    function jURL(url, base /* , encoding */) {
      if (base !== undefined && !(base instanceof jURL)) {
        base = new jURL(String(base));
      }

      this._url = url;
      clear.call(this);

      var input = url.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, '');
      // encoding = encoding || 'utf-8'

      parse.call(this, input, null, base);
    }

    jURL.prototype = {
      'toString': function toString() {
        return this.href;
      },
      get 'href'() {
        if (this._isInvalid) {
          return this._url;
        }

        var authority = '';
        if (this._username != '' || this._password != null) {
          authority = this._username + (this._password != null ? ':' + this._password : '') + '@';
        }

        return this.protocol + (this._isRelative ? '//' + authority + this.host : '') + this.pathname + this._query + this._fragment;
      },
      set 'href'(href) {
        clear.call(this);
        parse.call(this, href);
      },

      get 'protocol'() {
        return this._scheme + ':';
      },
      set 'protocol'(protocol) {
        if (this._isInvalid) {
          return;
        }
        parse.call(this, protocol + ':', 'scheme start');
      },

      get 'host'() {
        return this._isInvalid ? '' : this._port ? this._host + ':' + this._port : this._host;
      },
      set 'host'(host) {
        if (this._isInvalid || !this._isRelative) {
          return;
        }
        parse.call(this, host, 'host');
      },

      get 'hostname'() {
        return this._host;
      },
      set 'hostname'(hostname) {
        if (this._isInvalid || !this._isRelative) {
          return;
        }
        parse.call(this, hostname, 'hostname');
      },

      get 'port'() {
        return this._port;
      },
      set 'port'(port) {
        if (this._isInvalid || !this._isRelative) {
          return;
        }
        parse.call(this, port, 'port');
      },

      get 'pathname'() {
        return this._isInvalid ? '' : this._isRelative ? '/' + this._path.join('/') : this._schemeData;
      },
      set 'pathname'(pathname) {
        if (this._isInvalid || !this._isRelative) {
          return;
        }
        this._path = [];
        parse.call(this, pathname, 'relative path start');
      },

      get 'search'() {
        return this._isInvalid || !this._query || this._query == '?' ? '' : this._query;
      },
      set 'search'(search) {
        if (this._isInvalid || !this._isRelative) {
          return;
        }
        this._query = '?';
        if (search[0] == '?') {
          search = search.slice(1);
        }
        parse.call(this, search, 'query');
      },

      get 'hash'() {
        return this._isInvalid || !this._fragment || this._fragment == '#' ? '' : this._fragment;
      },
      set 'hash'(hash) {
        if (this._isInvalid) {
          return;
        }
        this._fragment = '#';
        if (hash[0] == '#') {
          hash = hash.slice(1);
        }
        parse.call(this, hash, 'fragment');
      },

      get 'origin'() {
        var host;
        if (this._isInvalid || !this._scheme) {
          return '';
        }
        // javascript: Gecko returns String(""), WebKit/Blink String("null")
        // Gecko throws error for "data://"
        // data: Gecko returns "", Blink returns "data://", WebKit returns "null"
        // Gecko returns String("") for file: mailto:
        // WebKit/Blink returns String("SCHEME://") for file: mailto:
        switch (this._scheme) {
          case 'data':
          case 'file':
          case 'javascript':
          case 'mailto':
            return 'null';
        }
        host = this.host;
        if (!host) {
          return '';
        }
        return this._scheme + '://' + host;
      }
    };

    // Copy over the static methods
    var OriginalURL = scope.URL;
    if (OriginalURL) {
      jURL.createObjectURL = function (blob) {
        // IE extension allows a second optional options argument.
        // http://msdn.microsoft.com/en-us/library/ie/hh772302(v=vs.85).aspx
        return OriginalURL.createObjectURL.apply(OriginalURL, arguments);
      };
      jURL.revokeObjectURL = function (url) {
        OriginalURL.revokeObjectURL(url);
      };
    }

    scope.URL = jURL;
  })(temporaryScope);
  /* eslint-enable */

  window.URL = temporaryScope.URL;
}

},{}],170:[function(require,module,exports){
'use strict';

(function (self) {
  'use strict';

  if (self.fetch) return;

  var support = {
    'searchParams': 'URLSearchParams' in self,
    'iterable': 'Symbol' in self && 'iterator' in Symbol,
    'blob': 'FileReader' in self && 'Blob' in self && function () {
      try {
        new Blob();
        return true;
      } catch (e) {
        return false;
      }
    }(),
    'formData': 'FormData' in self,
    'arrayBuffer': 'ArrayBuffer' in self
  };

  if (support.arrayBuffer) {
    var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];

    var isDataView = function isDataView(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj);
    };

    var isArrayBufferView = ArrayBuffer.isView || function (obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
    };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name');
    }
    return name.toLowerCase();
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value;
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      'next': function next() {
        var value = items.shift();
        return { 'done': value === undefined, 'value': value };
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function () {
        return iterator;
      };
    }

    return iterator;
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function (value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function (header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function (name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function (name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ',' + value : value;
  };

  Headers.prototype['delete'] = function (name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function (name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null;
  };

  Headers.prototype.has = function (name) {
    return this.map.hasOwnProperty(normalizeName(name));
  };

  Headers.prototype.set = function (name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function (callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push(name);
    });
    return iteratorFor(items);
  };

  Headers.prototype.values = function () {
    var items = [];
    this.forEach(function (value) {
      items.push(value);
    });
    return iteratorFor(items);
  };

  Headers.prototype.entries = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items);
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'));
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function (resolve, reject) {
      reader.onload = function () {
        resolve(reader.result);
      };
      reader.onerror = function () {
        reject(reader.error);
      };
    });
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise;
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise;
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('');
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0);
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer;
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function (body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        throw new Error('unsupported BodyInit type');
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function () {
        var rejected = consumed(this);
        if (rejected) return rejected;

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob);
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]));
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob');
        } else {
          return Promise.resolve(new Blob([this._bodyText]));
        }
      };

      this.arrayBuffer = function () {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
        } else {
          return this.blob().then(readBlobAsArrayBuffer);
        }
      };
    }

    this.text = function () {
      var rejected = consumed(this);
      if (rejected) return rejected;

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob);
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text');
      } else {
        return Promise.resolve(this._bodyText);
      }
    };

    if (support.formData) {
      this.formData = function () {
        return this.text().then(decode);
      };
    }

    this.json = function () {
      return this.text().then(JSON.parse);
    };

    return this;
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method;
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read');
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'omit';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests');
    }
    this._initBody(body);
  }

  Request.prototype.clone = function () {
    return new Request(this, { 'body': this._bodyInit });
  };

  function decode(body) {
    var form = new FormData();
    body.trim().split('&').forEach(function (bytes) {
      if (bytes) {
        var split = bytes.split('=');
        var name = split.shift().replace(/\+/g, ' ');
        var value = split.join('=').replace(/\+/g, ' ');
        form.append(decodeURIComponent(name), decodeURIComponent(value));
      }
    });
    return form;
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    rawHeaders.split(/\r?\n/).forEach(function (line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers;
  }

  Body.call(Request.prototype);

  function Response(bodyInit) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    this.type = 'default';
    this.status = 'status' in options ? options.status : 200;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function () {
    return new Response(this._bodyInit, {
      'status': this.status,
      'statusText': this.statusText,
      'headers': new Headers(this.headers),
      'url': this.url
    });
  };

  Response.error = function () {
    var response = new Response(null, { 'status': 0, 'statusText': '' });
    response.type = 'error';
    return response;
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function (url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code');
    }

    return new Response(null, { 'status': status, 'headers': { 'location': url } });
  };

  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;

  self.fetch = function (input, init) {
    return new Promise(function (resolve, reject) {
      var request = new Request(input, init);
      var xhr = new XMLHttpRequest();

      xhr.onload = function () {
        var options = {
          'status': xhr.status,
          'statusText': xhr.statusText,
          'headers': parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function () {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function () {
        reject(new TypeError('Network request failed'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function (value, name) {
        xhr.setRequestHeader(name, value);
      });

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    });
  };

  self.fetch.polyfill = true;
})(typeof self !== 'undefined' ? self : undefined);

},{}],171:[function(require,module,exports){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!function (global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = (typeof module === "undefined" ? "undefined" : _typeof(module)) === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  runtime.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function (arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value && (typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" && hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
}(
// In sloppy mode, unbound `this` refers to the global object, fallback to
// Function constructor if we're in global strict mode. That is sadly a form
// of indirect eval which violates Content Security Policy.
function () {
  return this ? this : typeof self !== 'undefined' ? self : undefined;
}() || Function("return this")());

},{}],172:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/** Deferred based on Promise
@return {Promise} */
var Deferred = function Deferred() {
  var res = void 0,
      rej = void 0;
  var deferred = new Promise(function (resolve, reject) {
    res = resolve;
    rej = reject;
  });
  deferred.resolve = res;
  deferred.reject = rej;

  return deferred;
};

exports.default = Deferred;

},{}],173:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _window = window,
    _ = _window._;

/** Simplified AJAX function, POST by default
@param {String} url
@param {Object} [params]
@return {Promise} */

exports.default = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var options, dataType, response, error;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            /** @type {Object} - Result options object */
            options = { 'method': params.method || 'POST' };

            // Headers

            if (params.headers || options.method === 'POST') {
              options.headers = params.headers || { 'Content-Type': 'application/x-www-form-urlencoded' };
            }

            // Body
            if (params.data) {
              options.body = _.transform(params.data, function (carry, value, key) {
                carry.push(key + '=' + encodeURIComponent(value));
              }, []).join('&');
            }

            // Credentials
            options.credentials = params.credentials || 'include';

            /** @type {String} */
            dataType = params.dataType || 'text';


            params = _.transform(['headers', 'data', 'dataType'], function (carry, property) {
              delete carry[property];
            }, _.cloneDeep(params));
            Object.assign(options, params);

            /** @type {Object} */
            _context.next = 9;
            return fetch(url, options);

          case 9:
            response = _context.sent;

            if (!response.ok) {
              _context.next = 12;
              break;
            }

            return _context.abrupt('return', response[dataType === 'json' ? 'json' : 'text']());

          case 12:
            error = new Error(response.statusText);

            error.status = response.status;

            return _context.abrupt('return', Promise.reject(error));

          case 15:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

},{}],174:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var possibleAttributes = ['href', 'colspan', 'rowspan', 'target'];

/**
@param {Object} object
@return {Element} */
var createElement = function createElement(object) {
  if (!object.tag) return document.createTextNode(object.text);

  var element = document.createElement(object.tag);
  if (object.class) element.setAttribute('class', object.class);
  if (object.style) element.setAttribute('style', object.style);
  if (object.attributes) {
    Object.keys(object.attributes).forEach(function (attribute) {
      if (possibleAttributes.indexOf(attribute) === -1) return;

      var value = object.attributes[attribute];
      element.setAttribute(attribute, value);
    });
  }
  if (object.node) object.node(element);
  if (object.text) element.textContent = object.text;

  if (object.children) {
    /** @type {Array<Element>} */
    var children = [];
    object.children.forEach(function (child) {
      children.push(createElement(child));
    });

    children.forEach(function (child) {
      element.appendChild(child);
    });
  }

  return element;
};

exports.default = createElement;

},{}],175:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/** Convert credentials object to string for header in request
@param {string|number} access_token  (property of object)
@return {string} */
var encodeTokenCredentials = function encodeTokenCredentials(_ref) {
  var access_token = _ref.access_token;
  return "Token token=\"" + access_token + "\"";
};

exports.default = encodeTokenCredentials;

},{}],176:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/** Base sorting algorithm for pac.filters
@type {Function} */
var filtersSorting = function filtersSorting(_ref, _ref2) {
  var a = _ref['domain'];
  var b = _ref2['domain'];

  var levels = {
    'a': a.split('.').length,
    'b': b.split('.').length
  };
  if (levels.a > levels.b) return -1;if (levels.a < levels.b) return 1;

  if (a > b) return 1;if (a < b) return -1;return 0;
};

exports.default = filtersSorting;

},{}],177:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/** Replaces in initial string things like '{1}' to value of args[1]
@param {string} str
@param {*} args
@return {string} */
var format = function format(str) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return str.replace(/\{(\d+)\}/g, function (match, number) {
    return args[number] !== undefined ? args[number] : match;
  });
};

exports.default = format;

},{}],178:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/** http://www.ietf.org/rfc/rfc4122.txt */
/**
@return {String} */
var chr4 = function chr4() {
  return Math.random().toString(16).slice(-4);
};

/**
@return {String} */
var generateRfc4122Id = function generateRfc4122Id() {
  return chr4() + chr4() + '-' + chr4() + '-' + chr4() + '-' + chr4() + '-' + chr4() + chr4() + chr4();
};

exports.default = generateRfc4122Id;

},{}],179:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _browser = typeof browser !== 'undefined' ? browser : chrome;

/** Get data from locales through chrome.i18n.getMessage
@param {String} key
@return {String} */
var internationalize = function internationalize(key) {
  try {
    return _browser.i18n.getMessage(key) || key;
  } catch (error) {
    // Firefox
    return key;
  }
};

exports.default = internationalize;

},{}],180:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
@param {*} data
@param {*} [defaultValue]
@return {*} */
var jsonParse = function jsonParse(data) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

  try {
    return data && JSON.parse(data) || defaultValue;
  } catch (e) {
    return defaultValue;
  }
};

exports.default = jsonParse;

},{}],181:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _window = window,
    _ = _window._;

/**
@param {String} url
@param {Function} action
@return {String} */

var urlModifyParameters = function urlModifyParameters(url, action) {
  var urlObject = new URL(url);

  /** @type {object} */
  var search = urlObject.search ? _.transform(urlObject.search.replace(/^\?/, '').split('&'), function (carry, part) {
    var _part$split = part.split('='),
        _part$split2 = _slicedToArray(_part$split, 2),
        left = _part$split2[0],
        right = _part$split2[1];

    carry[left] = right ? decodeURIComponent(right) : true;
  }, {}) : {};
  search = action(search);

  urlObject.search = function () {
    /** @type {array<string>} */
    var parts = _.transform(search, function (carry, value, property) {
      carry.push(encodeURIComponent(property) + '=' + encodeURIComponent(value));
    }, []);

    return parts.length ? '?' + parts.join('&') : '';
  }();

  return urlObject.toString();
};

exports.default = urlModifyParameters;

},{}],182:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

/** Get domain from URL
@param {(String|null|undefined)} url
@return {(String|null)} domain */
exports.default = function (url) {
  if (!url) return null;
  try {
    var _ref = new URL(url),
        protocol = _ref.protocol,
        domain = _ref['hostname'];

    if (!['http:', 'https:'].includes(protocol)) return null;

    return domain;
  } catch (e) {
    return null;
  }
};

},{}],183:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
@param {object} servers
@return {(string|null)} error text of null */
var validateServer = function validateServer(servers) {
  for (var i = 0; i < servers.length; i++) {
    var _servers$i = servers[i],
        host = _servers$i.host,
        port = _servers$i.port;

    if (typeof host !== 'string') {
      return "server must have a 'host' property";
    }
    if (!(typeof port === 'string' || typeof port === 'number')) {
      return "server must have a 'port' property";
    }
  }
  return null;
};

/**
@param {object} settings
@return {object} */
var validate = function validate(config) {
  if (!config || (typeof config === 'undefined' ? 'undefined' : _typeof(config)) !== 'object') {
    return {
      'valid': false,
      'error': 'settings should be an object'
    };
  }

  if (Object.keys(config).length === 0) {
    return {
      'valid': false,
      'error': 'config should have at least one key (country)'
    };
  }

  for (var code in config) {
    var country = config[code];
    var servers = {
      'free': country.servers, 'premium': country.premium_servers
    };
    if (!Array.isArray(servers.free) && !Array.isArray(servers.premium)) {
      return {
        'valid': false,
        'error': "country must have either 'servers' or 'premium_servers' fields set to an array of servers"
      };
    }

    if (Array.isArray(servers.free)) {
      var error = validateServer(servers.free);
      if (error) return { 'valid': false, error: error };
    }

    if (Array.isArray(servers.premium)) {
      var _error = validateServer(servers.premium);
      if (_error) return { 'valid': false, error: _error };
    }
  }

  return { 'valid': true };
};

exports.default = validate;

},{}],184:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
@param {string} a
@param {string} b
@return {integer}
  Return 1 if a > b
  Return -1 if a < b
  Return 0 if a === b */
var versionCompare = function versionCompare() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args[0] === args[1]) return 0;

  /** @type {array<integer>} - each */

  var _args$map = args.map(function (item) {
    return item.split('.').map(function (n) {
      return Number(n);
    });
  }),
      _args$map2 = _slicedToArray(_args$map, 2),
      a = _args$map2[0],
      b = _args$map2[1];

  // loop while the components are equal


  var len = Math.min(a.length, b.length);
  for (var i = 0; i < len; i++) {
    if (a[i] > b[i]) return 1; // A bigger than B
    if (a[i] < b[i]) return -1; // B bigger than A
  }

  // If one's a prefix of the other, the longer one is greater.
  if (a.length > b.length) return 1;
  if (a.length < b.length) return -1;

  // Otherwise they are the same.
  return 0;
};

exports.default = versionCompare;

},{}],185:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/** Returns random int value between 0 (inclusive) and the specified value (exclusive)
@param {integer} max
@return {number} */
var randomInt = function randomInt(max) {
  return Math.floor(Math.random() * max);
};

/**
Returns random array element using weights. Element weight should be stored in 'weight' property of array element.
If 'weight' property is absent then weight for this element is 1.
@param {array<object>} array
@return {object} one of array elements */
var weightedRandom = function weightedRandom(array) {
  var totalWeight = 0;

  var map = array.map(function (_ref) {
    var weight = _ref.weight;

    weight = weight || 1;
    var start = totalWeight;
    totalWeight += weight;

    return { start: start, 'end': totalWeight };
  });

  var random = randomInt(totalWeight);

  for (var i = 0; i < map.length; i++) {
    if (random >= map[i].start && random < map[i].end) {
      return array[i];
    }
  }
};

exports.default = weightedRandom;

},{}],186:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _browser = require('core/browser');

var _browser2 = _interopRequireDefault(_browser);

var _format = require('tools/format');

var _format2 = _interopRequireDefault(_format);

var _ga = require('core/ga');

var _ga2 = _interopRequireDefault(_ga);

var _log = require('core/log');

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _window = window,
    _ = _window._;

// Error handler

var windowErrorHandler = function windowErrorHandler(message, filename, lineno) {
  try {
    _log2.default.error((0, _format2.default)('message: {0}\nfilename: {1}\nlineno: {2}', message, filename, lineno));

    var version = _.get(_browser2.default.runtime.getManifest(), 'version', 'n/a');
    (0, _ga2.default)('error', version, (0, _format2.default)('{0} at {1}:{2}', message, filename, lineno), 0, false);
  } catch (error) {
    _log2.default.error(error);
  }

  return false;
};

exports.default = windowErrorHandler;

},{"core/browser":118,"core/ga":126,"core/log":129,"tools/format":177}],"browserConfig":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'name': 'chrome'
};

},{}],"config":[function(require,module,exports){
'use strict';

var _proxySettings = require('./proxySettings');

var _proxySettings2 = _interopRequireDefault(_proxySettings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  'type': 'production',
  'name': 'Browsec VPN - Free and Unlimited VPN',
  'shortName': 'Browsec',
  'browsec': {
    'baseUrl': 'https://browsec.com/',
    'apiPrefix': 'https://drah7iczdw1tu.cloudfront.net/v1/',
    'originalDomainApiPrefix': 'https://browsec.com/api/v1/',
    'locationApiPrefix': 'http://d3ovgmdqhvkef1.cloudfront.net/v1/'
  },
  'ga': {
    'enabled': true,
    'extension_id': ['omghfjlpggmjjaagoclmmobgdodcjboh', 'dknfpcdpbkjijldegonllfnnfhabjpde', '05908b89-695d-4687-aa36-6d87f42a464d' // NOTE temporary
    ],
    'tracking_id': 'UA-43024042-1',
    'chance': 0.01,
    'firstPremiumBuy': 'UA-43024042-2'
  },
  'auth': {
    // When disabled, users can't login/register
    'enabled': true
  },
  'proxy': {
    'defaultCountry': 'nl',
    'settings': _proxySettings2.default
  }
};

},{"./proxySettings":1}]},{},[24]);
