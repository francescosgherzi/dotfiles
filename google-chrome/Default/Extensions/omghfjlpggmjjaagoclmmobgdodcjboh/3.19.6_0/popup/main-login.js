(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

(function () {
  /** @type {Object} */
  var _browser = typeof browser !== 'undefined' ? browser : chrome;

  /** @type {(Object|null)} */
  var backgroundPage = _browser.extension.getBackgroundPage();
  if (!backgroundPage) return;

  var _ = backgroundPage._,
      actions = backgroundPage.actions,
      browsecLink = backgroundPage.browsecLink,
      PolymerRedux = backgroundPage.PolymerRedux,
      routes = backgroundPage.routes,
      internationalize = backgroundPage['tools'].internationalize;

  /**
  @param {Object} data
  @return {Object} */

  var transform = function transform(data) {
    return _.transform(data, function (carry, value, key) {
      carry[key] = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' ? transform(value) : internationalize(value);
    }, {});
  };

  /** @type {object<string>} */
  var translations = transform({
    'dontHaveAnAccount': 'dont_have_an_account',
    'email': 'email',
    'forgotYourPassword': 'forgot_your_password',
    'logIn': 'log_in',
    'password': 'password',
    'signIn': 'sign_in',
    'signUp': 'sign_up',
    'welcomeBack': 'welcome_back',
    'errors': {
      'incorrectEmailOrPassword': 'incorrect_email_or_password',
      'noConnection': 'authentication_error_no_connection'
    }
  });

  Polymer({
    'is': 'main-login',
    'behaviors': [PolymerRedux(Polymer)],
    'properties': {
      'translations': {
        'type': Object,
        'value': translations,
        'readOnly': true
      },
      'links': {
        'type': Object,
        'statePath': function statePath(_ref) {
          var days = _ref['daysAfterInstall'];
          return {
            'resetPassword': browsecLink(routes.reset_password_url),
            'signUp': browsecLink(routes.new_user_url)
          };
        }
      },
      'routes': {
        'type': Object,
        'value': routes,
        'readOnly': true
      },
      'error': {
        'type': String,
        'notify': true
      },
      'notice': {
        'type': String,
        'notify': true
      }
    },

    // Lifecycle
    ready: function ready() {
      var root = Polymer.dom(this.root);

      // Nodes
      var $ = function $(selector) {
        return root.querySelector(selector);
      };
      this.nodes = {
        'mail': $('input[type="text"][name="email"]'),
        'password': $('input[type="password"][name="password"]'),
        'if': {
          'error': $('#ifError'),
          'notice': $('#ifNotice')
        }
      };

      // Popup close after link click for FF and early Chrome
      root.querySelectorAll('a').forEach(function (node) {
        node.addEventListener('click', function () {
          setTimeout(function () {
            if (window && window.close) window.close();
          }, 50);
        });
      });
    },
    attached: function attached() {
      this.nodes.mail.focus();
    },


    // Conditional rendering
    'conditionInputClass': function conditionInputClass(error) {
      return error ? 'invalid' : '';
    },

    // Methods
    formSubmit: function formSubmit(event) {
      var _this = this;

      event.preventDefault();
      this.error = null;
      this.notice = null;

      /** @type {string} */
      var email = this.nodes.mail.value;

      /** @type {string} */
      var password = this.nodes.password.value;

      actions.login({ email: email, password: password }).then(function (account) {
        _this.notice = translations.welcomeBack;
        _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var node;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this.nodes.if.notice.render();
                  node = Polymer.dom(_this.root).querySelector('div.Notice');


                  node.setAttribute('style', 'opacity: 0');
                  _context.next = 5;
                  return window.Velocity(node, { 'opacity': 1 }, 200);

                case 5:
                  node.removeAttribute('style');

                case 6:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this);
        }))();

        setTimeout(function () {
          _this.dispatch({ 'type': 'Page change', 'page': 'index:home' });
        }, 1000);
      }, function (_ref3) {
        var status = _ref3.status;

        var property = status === 401 ? 'incorrectEmailOrPassword' : 'noConnection';
        _this.error = translations.errors[property];
        if (status === 401) _this.nodes.password.value = '';

        _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var node;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _this.nodes.if.error.render();
                  node = Polymer.dom(_this.root).querySelector('div.Error');


                  node.setAttribute('style', 'opacity: 0');
                  _context2.next = 5;
                  return window.Velocity(node, { 'opacity': 1 }, 200);

                case 5:
                  node.removeAttribute('style');

                case 6:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this);
        }))();
      });
    },
    onAnimationComplete: function onAnimationComplete() {
      this.nodes.mail.focus();
    }
  });
})();

},{}]},{},[1]);
