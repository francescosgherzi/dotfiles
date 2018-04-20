(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

(function () {
  /** @type {Object} */
  var _browser = typeof browser !== 'undefined' ? browser : chrome;

  /** @type {(Object|null)} */
  var backgroundPage = _browser.extension.getBackgroundPage();
  if (!backgroundPage) return;

  var PolymerRedux = backgroundPage.PolymerRedux;


  Polymer({
    'is': 'page-switch',
    'behaviors': [PolymerRedux(Polymer)],
    'properties': {
      'animation': {
        'type': Boolean,
        'value': false
      },
      'indexPage': {
        'type': Boolean,
        'statePath': function statePath(_ref) {
          var page = _ref.page;
          return page.split(':')[0] === 'index';
        },
        'observer': 'observeIndexPage'
      }
    },

    // Lifecycle
    ready: function ready() {
      this.ribbonNode = Array.from(Polymer.dom(this.root).childNodes).filter(function (_ref2) {
        var nodeType = _ref2.nodeType;
        return nodeType === Node.ELEMENT_NODE;
      }).pop();
      this.ribbon = Polymer.dom(this.ribbonNode);

      var node = document.createElement('main-index');
      this.ribbon.appendChild(node);
    },
    observeIndexPage: function observeIndexPage(newIsIndex, oldValue) {
      var _this = this;

      if (oldValue === undefined) return; // First case when element just created

      if (this.animation) {
        // Over-clicking
        // Stop current animation
        window.Velocity(this.ribbonNode, 'stop');
      } else {
        this.animation = true;
      }

      // Remove old element from old animation
      Array.from(this.ribbonNode.childNodes).filter(function (element) {
        return element.dataset.old === 'true';
      }).forEach(function (element) {
        _this.ribbonNode.removeChild(element);
      });

      // Remove all other old elements
      Array.from(this.ribbonNode.childNodes).slice(0, -1).forEach(function (element) {
        _this.ribbonNode.removeChild(element);
      });

      /** @type {Object<Node>} */
      var nodes = {
        'old': this.ribbon.lastChild,
        'new': function (tag) {
          var node = document.createElement(tag);
          node.setAttribute('style', 'visibility:hidden;');
          return node;
        }(newIsIndex ? 'main-index' : 'main-login')
      };

      // Mark old element for future conflicts
      nodes.old.dataset.old = 'true';

      // Adding new nodes
      if (newIsIndex) {
        this.ribbon.insertBefore(nodes.new, nodes.old);
      } else {
        this.ribbon.appendChild(nodes.new);
      }

      if (newIsIndex) {
        this.ribbon.setAttribute('style', 'margin-left:-100%;');
      }

      setTimeout(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                nodes.new.removeAttribute('style');

                _context.next = 3;
                return window.Velocity(_this.ribbonNode, { 'margin-left': newIsIndex ? '0%' : '-100%' }, 250);

              case 3:

                if (_this.ribbonNode.contains(nodes.old)) {
                  _this.ribbon.removeChild(nodes.old);
                }

                _this.ribbon.removeAttribute('style');
                if (nodes.new.onAnimationComplete) nodes.new.onAnimationComplete();

                _this.animation = false;

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      })), 0); // NOTE setTimeout due to chrome bug
    }
  });
})();

},{}]},{},[1]);
