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
'use strict';

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

require('polyfills/URL');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _browser = typeof browser !== 'undefined' ? browser : chrome;

window.addEventListener('message', function (event) {
  /** @type {(String|undefined)} */
  var sourceDomain = function () {
    try {
      return new URL(event.origin).origin;
    } catch (e) {
      return undefined;
    }
  }();
  if (!sourceDomain) return;

  /** @type {String} */
  var targetDomain = new URL(_config2.default.browsec.baseUrl).origin;
  if (sourceDomain !== targetDomain) return;

  _browser.runtime.sendMessage(event.data);
});

},{"config":"config","polyfills/URL":3}],3:[function(require,module,exports){
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

},{}],"browserConfig":[function(require,module,exports){
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

},{"./proxySettings":1}]},{},[2]);
