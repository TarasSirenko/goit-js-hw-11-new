// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }
  return bundleURL;
}
function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"css/styles.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\..\\img\\base-bk.jpg":[["base-bk.1fd260e4.jpg","../img/base-bk.jpg"],"../img/base-bk.jpg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/simplelightbox/dist/simple-lightbox.min.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/notiflix/build/notiflix-notify-aio.js":[function(require,module,exports) {
var define;
var global = arguments[3];
/*
* Notiflix Notify AIO (https://notiflix.github.io)
* Description: This file has been created automatically that using "notiflix.js", and "notiflix.css" files.
* Version: 3.2.6
* Author: Furkan (https://github.com/furcan)
* Copyright 2019 - 2023 Notiflix, MIT Licence (https://opensource.org/licenses/MIT)
*/

/* global define */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return factory(root);
    });
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = factory(root);
  } else {
    root.Notiflix = factory(root);
  }
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this, function (window) {

  'use strict';

  // COMMON: SSR check: begin
  if (typeof window === 'undefined' && typeof window.document === 'undefined') {
    return false;
  }
  // COMMON: SSR check: end

  // COMMON: Variables: begin
  var notiflixNamespace = 'Notiflix';
  var notiflixConsoleDocs = '\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation';
  var defaultFontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif';
  // COMMON: Variables: end

  // NOTIFY: Default Settings: begin
  var typesNotify = {
    Success: 'Success',
    Failure: 'Failure',
    Warning: 'Warning',
    Info: 'Info',
  };
  var newNotifySettings;
  var notifySettings = {
    wrapID: 'NotiflixNotifyWrap', // can not customizable
    overlayID: 'NotiflixNotifyOverlay', // can not customizable
    width: '280px',
    position: 'right-top', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' - 'center-top' - 'center-bottom' - 'center-center'
    distance: '10px',
    opacity: 1,
    borderRadius: '5px',
    rtl: false,
    timeout: 3000,
    messageMaxLength: 110,
    backOverlay: false,
    backOverlayColor: 'rgba(0,0,0,0.5)',
    plainText: true,
    showOnlyTheLastOne: false,
    clickToClose: false,
    pauseOnHover: true,

    ID: 'NotiflixNotify',
    className: 'notiflix-notify',
    zindex: 4001,
    fontFamily: 'Quicksand',
    fontSize: '13px',
    cssAnimation: true,
    cssAnimationDuration: 400,
    cssAnimationStyle: 'fade', // 'fade' - 'zoom' - 'from-right' - 'from-top' - 'from-bottom' - 'from-left'
    closeButton: false,
    useIcon: true,
    useFontAwesome: false,
    fontAwesomeIconStyle: 'basic', // 'basic' - 'shadow'
    fontAwesomeIconSize: '34px',

    success: {
      background: '#32c682',
      textColor: '#fff',
      childClassName: 'notiflix-notify-success',
      notiflixIconColor: 'rgba(0,0,0,0.2)',
      fontAwesomeClassName: 'fas fa-check-circle',
      fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
      backOverlayColor: 'rgba(50,198,130,0.2)',
    },

    failure: {
      background: '#ff5549',
      textColor: '#fff',
      childClassName: 'notiflix-notify-failure',
      notiflixIconColor: 'rgba(0,0,0,0.2)',
      fontAwesomeClassName: 'fas fa-times-circle',
      fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
      backOverlayColor: 'rgba(255,85,73,0.2)',
    },

    warning: {
      background: '#eebf31',
      textColor: '#fff',
      childClassName: 'notiflix-notify-warning',
      notiflixIconColor: 'rgba(0,0,0,0.2)',
      fontAwesomeClassName: 'fas fa-exclamation-circle',
      fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
      backOverlayColor: 'rgba(238,191,49,0.2)',
    },

    info: {
      background: '#26c0d3',
      textColor: '#fff',
      childClassName: 'notiflix-notify-info',
      notiflixIconColor: 'rgba(0,0,0,0.2)',
      fontAwesomeClassName: 'fas fa-info-circle',
      fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
      backOverlayColor: 'rgba(38,192,211,0.2)',
    },
  };
  // NOTIFY: Default Settings: end

  // COMMON: Console Error: begin
  var commonConsoleError = function (message) {
    return console.error('%c ' + notiflixNamespace + ' Error ', 'padding:2px;border-radius:20px;color:#fff;background:#ff5549', '\n' + message + notiflixConsoleDocs);
  };
  // COMMON: Console Error: end

  // COMMON: Check Head or Body: begin
  var commonCheckHeadOrBody = function (element) {
    if (!element) { element = 'head'; }
    if (window.document[element] === null) {
      commonConsoleError('\nNotiflix needs to be appended to the "<' + element + '>" element, but you called it before the "<' + element + '>" element has been created.');
      return false;
    }
    return true;
  };
  // COMMON: Check Head or Body: end

  // COMMON: Set Internal CSS Codes: begin
  var commonSetInternalCSSCodes = function (getInternalCSSCodes, styleElementId) {
    // check doc head
    if (!commonCheckHeadOrBody('head')) { return false; }

    // internal css
    if (getInternalCSSCodes() !== null && !window.document.getElementById(styleElementId)) {
      var internalCSS = window.document.createElement('style');
      internalCSS.id = styleElementId;
      internalCSS.innerHTML = getInternalCSSCodes();
      window.document.head.appendChild(internalCSS);
    }
  };
  // COMMON: Set Internal CSS Codes: end

  // COMMON: Extend Options: begin
  var commonExtendOptions = function () {
    // variables
    var extended = {};
    var deep = false;
    var i = 0;
    // check if a deep merge
    if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
      deep = arguments[0];
      i++;
    }
    // merge the object into the extended object
    var merge = function (obj) {
      for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
          // if property is an object, merge properties
          if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
            extended[prop] = commonExtendOptions(extended[prop], obj[prop]);
          } else {
            extended[prop] = obj[prop];
          }
        }
      }
    };
    // loop through each object and conduct a merge
    for (; i < arguments.length; i++) {
      merge(arguments[i]);
    }
    return extended;
  };
  // COMMON: Extend Options: end

  // COMMON: Get Plaintext: begin
  var commonGetPlaintext = function (html) {
    var htmlPool = window.document.createElement('div');
    htmlPool.innerHTML = html;
    return htmlPool.textContent || htmlPool.innerText || '';
  };
  // COMMON: Get Plaintext: end

  // NOTIFY: Get Internal CSS Codes: begin
  var notifyGetInternalCSSCodes = function () {
    var notifyCSS = '[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}';
    return notifyCSS || null;
  };
  // NOTIFY: Get Internal CSS Codes: end

  // NOTIFY: Create: begin
  var notifyCreateCounter = 0;
  var notifyCreate = function (notifyType, message, callbackOrOptions, options) {
    // check doc body
    if (!commonCheckHeadOrBody('body')) { return false; }

    // if not initialized pretend like init
    if (!newNotifySettings) {
      Notiflix.Notify.init({});
    }

    // create a backup for new settings
    var newNotifySettingsBackup = commonExtendOptions(true, newNotifySettings, {});

    // check callbackOrOptions and options: begin
    if ((typeof callbackOrOptions === 'object' && !Array.isArray(callbackOrOptions)) || (typeof options === 'object' && !Array.isArray(options))) {
      // new options
      var newOptions = {};
      if (typeof callbackOrOptions === 'object') {
        newOptions = callbackOrOptions;
      } else if (typeof options === 'object') {
        newOptions = options;
      }

      // extend new settings with the new options
      newNotifySettings = commonExtendOptions(true, newNotifySettings, newOptions);
    }
    // check callbackOrOptions and options: end

    // notify type
    var theType = newNotifySettings[notifyType.toLocaleLowerCase('en')];

    // notify counter
    notifyCreateCounter++;

    // check the message: begin
    if (typeof message !== 'string') {
      message = 'Notiflix ' + notifyType;
    }
    // check the message: end

    // if plainText is true => HTML tags not allowed: begin
    if (newNotifySettings.plainText) {
      message = commonGetPlaintext(message); // message plain text
    }
    // if plainText is true => HTML tags not allowed: end

    // if plainText is false but the message length more than messageMaxLength => Possible HTML tags error: begin
    if (!newNotifySettings.plainText && message.length > newNotifySettings.messageMaxLength) {
      // extend settings for error massege
      newNotifySettings = commonExtendOptions(true, newNotifySettings, { closeButton: true, messageMaxLength: 150 });
      // error message
      message = 'Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.';
    }
    // if plainText is false but the message length more than messageMaxLength => Possible HTML tags error: end

    // check message max length: begin
    if (message.length > newNotifySettings.messageMaxLength) {
      message = message.substring(0, newNotifySettings.messageMaxLength) + '...';
    }
    // check message max length: end

    // font awesome icon style: begin
    if (newNotifySettings.fontAwesomeIconStyle === 'shadow') {
      theType.fontAwesomeIconColor = theType.background;
    }
    // font awesome icon style: end

    // if cssAnimaion is false => duration: begin
    if (!newNotifySettings.cssAnimation) {
      newNotifySettings.cssAnimationDuration = 0;
    }
    // if cssAnimaion is false => duration: end

    // notify wrap: begin
    var ntflxNotifyWrap = window.document.getElementById(notifySettings.wrapID) || window.document.createElement('div');
    ntflxNotifyWrap.id = notifySettings.wrapID;
    ntflxNotifyWrap.style.width = newNotifySettings.width;
    ntflxNotifyWrap.style.zIndex = newNotifySettings.zindex;
    ntflxNotifyWrap.style.opacity = newNotifySettings.opacity;

    // wrap position: begin
    if (newNotifySettings.position === 'center-center') {
      ntflxNotifyWrap.style.left = newNotifySettings.distance;
      ntflxNotifyWrap.style.top = newNotifySettings.distance;
      ntflxNotifyWrap.style.right = newNotifySettings.distance;
      ntflxNotifyWrap.style.bottom = newNotifySettings.distance;
      ntflxNotifyWrap.style.margin = 'auto';
      ntflxNotifyWrap.classList.add('nx-flex-center-center');
      ntflxNotifyWrap.style.maxHeight = 'calc((100vh - ' + newNotifySettings.distance + ') - ' + newNotifySettings.distance + ')';
      ntflxNotifyWrap.style.display = 'flex';
      ntflxNotifyWrap.style.flexWrap = 'wrap';
      ntflxNotifyWrap.style.flexDirection = 'column';
      ntflxNotifyWrap.style.justifyContent = 'center';
      ntflxNotifyWrap.style.alignItems = 'center';
      ntflxNotifyWrap.style.pointerEvents = 'none';
    } else if (newNotifySettings.position === 'center-top') {
      ntflxNotifyWrap.style.left = newNotifySettings.distance;
      ntflxNotifyWrap.style.right = newNotifySettings.distance;
      ntflxNotifyWrap.style.top = newNotifySettings.distance;
      ntflxNotifyWrap.style.bottom = 'auto';
      ntflxNotifyWrap.style.margin = 'auto';
    } else if (newNotifySettings.position === 'center-bottom') {
      ntflxNotifyWrap.style.left = newNotifySettings.distance;
      ntflxNotifyWrap.style.right = newNotifySettings.distance;
      ntflxNotifyWrap.style.bottom = newNotifySettings.distance;
      ntflxNotifyWrap.style.top = 'auto';
      ntflxNotifyWrap.style.margin = 'auto';
    } else if (newNotifySettings.position === 'right-bottom') {
      ntflxNotifyWrap.style.right = newNotifySettings.distance;
      ntflxNotifyWrap.style.bottom = newNotifySettings.distance;
      ntflxNotifyWrap.style.top = 'auto';
      ntflxNotifyWrap.style.left = 'auto';
    } else if (newNotifySettings.position === 'left-top') {
      ntflxNotifyWrap.style.left = newNotifySettings.distance;
      ntflxNotifyWrap.style.top = newNotifySettings.distance;
      ntflxNotifyWrap.style.right = 'auto';
      ntflxNotifyWrap.style.bottom = 'auto';
    } else if (newNotifySettings.position === 'left-bottom') {
      ntflxNotifyWrap.style.left = newNotifySettings.distance;
      ntflxNotifyWrap.style.bottom = newNotifySettings.distance;
      ntflxNotifyWrap.style.top = 'auto';
      ntflxNotifyWrap.style.right = 'auto';
    } else { // 'right-top' or else
      ntflxNotifyWrap.style.right = newNotifySettings.distance;
      ntflxNotifyWrap.style.top = newNotifySettings.distance;
      ntflxNotifyWrap.style.left = 'auto';
      ntflxNotifyWrap.style.bottom = 'auto';
    }
    // wrap position: end

    // if background overlay is true: begin
    if (newNotifySettings.backOverlay) {
      var ntflxNotifyOverlay = window.document.getElementById(notifySettings.overlayID) || window.document.createElement('div');
      ntflxNotifyOverlay.id = notifySettings.overlayID;
      ntflxNotifyOverlay.style.width = '100%';
      ntflxNotifyOverlay.style.height = '100%';
      ntflxNotifyOverlay.style.position = 'fixed';
      ntflxNotifyOverlay.style.zIndex = newNotifySettings.zindex - 1;
      ntflxNotifyOverlay.style.left = 0;
      ntflxNotifyOverlay.style.top = 0;
      ntflxNotifyOverlay.style.right = 0;
      ntflxNotifyOverlay.style.bottom = 0;
      ntflxNotifyOverlay.style.background = theType.backOverlayColor || newNotifySettings.backOverlayColor;
      ntflxNotifyOverlay.className = newNotifySettings.cssAnimation ? 'nx-with-animation' : '';
      ntflxNotifyOverlay.style.animationDuration = newNotifySettings.cssAnimation ? newNotifySettings.cssAnimationDuration + 'ms' : '';

      if (!window.document.getElementById(notifySettings.overlayID)) {
        window.document.body.appendChild(ntflxNotifyOverlay);
      }
    }
    // if background overlay is true: end

    if (!window.document.getElementById(notifySettings.wrapID)) {
      window.document.body.appendChild(ntflxNotifyWrap);
    }
    // notify wrap: end

    // notify content: begin
    var ntflxNotify = window.document.createElement('div');
    ntflxNotify.id = newNotifySettings.ID + '-' + notifyCreateCounter;
    ntflxNotify.className = newNotifySettings.className + ' ' + theType.childClassName + ' ' + (newNotifySettings.cssAnimation ? 'nx-with-animation' : '') + ' ' + (newNotifySettings.useIcon ? 'nx-with-icon' : '') + ' nx-' + newNotifySettings.cssAnimationStyle + ' ' + (newNotifySettings.closeButton && typeof callbackOrOptions !== 'function' ? 'nx-with-close-button' : '') + ' ' + (typeof callbackOrOptions === 'function' ? 'nx-with-callback' : '') + ' ' + (newNotifySettings.clickToClose ? 'nx-notify-click-to-close' : '');
    ntflxNotify.style.fontSize = newNotifySettings.fontSize;
    ntflxNotify.style.color = theType.textColor;
    ntflxNotify.style.background = theType.background;
    ntflxNotify.style.borderRadius = newNotifySettings.borderRadius;
    ntflxNotify.style.pointerEvents = 'all';

    // rtl: begin
    if (newNotifySettings.rtl) {
      ntflxNotify.setAttribute('dir', 'rtl');
      ntflxNotify.classList.add('nx-rtl-on');
    }
    // rtl: end

    // font-family: begin
    ntflxNotify.style.fontFamily = '"' + newNotifySettings.fontFamily + '", ' + defaultFontFamily;
    // font-family: end

    // use css animation: begin
    if (newNotifySettings.cssAnimation) {
      ntflxNotify.style.animationDuration = newNotifySettings.cssAnimationDuration + 'ms';
    }
    // use css animation: end

    // close button element: begin
    var closeButtonHTML = '';
    if (newNotifySettings.closeButton && typeof callbackOrOptions !== 'function') {
      closeButtonHTML = '<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="' + theType.notiflixIconColor + '" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>';
    }
    // close buttpon element: end

    // use icon: begin
    if (newNotifySettings.useIcon) {
      // use font awesome
      if (newNotifySettings.useFontAwesome) {
        ntflxNotify.innerHTML = '<i style="color:' + theType.fontAwesomeIconColor + '; font-size:' + newNotifySettings.fontAwesomeIconSize + ';" class="nx-message-icon nx-message-icon-fa ' + theType.fontAwesomeClassName + ' ' + (newNotifySettings.fontAwesomeIconStyle === 'shadow' ? 'nx-message-icon-fa-shadow' : 'nx-message-icon-fa-basic') + '"></i><span class="nx-message nx-with-icon">' + message + '</span>' + (newNotifySettings.closeButton ? closeButtonHTML : '');
      }
      // use notiflix icon
      else {
        var svgIcon = '';
        if (notifyType === typesNotify.Success) {  // success
          svgIcon = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + theType.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>';
        } else if (notifyType === typesNotify.Failure) { // failure
          svgIcon = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + theType.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>';
        } else if (notifyType === typesNotify.Warning) { // warning
          svgIcon = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + theType.notiflixIconColor + '" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>';
        } else if (notifyType === typesNotify.Info) { // info
          svgIcon = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + theType.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>';
        }
        ntflxNotify.innerHTML = svgIcon + '<span class="nx-message nx-with-icon">' + message + '</span>' + (newNotifySettings.closeButton ? closeButtonHTML : '');
      }
    }
    // without icon
    else {
      ntflxNotify.innerHTML = '<span class="nx-message">' + message + '</span>' + (newNotifySettings.closeButton ? closeButtonHTML : '');
    }
    // use icon: end
    // notify content: end

    // notify append or prepend: begin
    if (newNotifySettings.position === 'left-bottom' || newNotifySettings.position === 'right-bottom') { // the new one will be first
      var notifyWrap = window.document.getElementById(notifySettings.wrapID);
      notifyWrap.insertBefore(ntflxNotify, notifyWrap.firstChild);
    } else {
      window.document.getElementById(notifySettings.wrapID).appendChild(ntflxNotify);
    }
    // notify append or prepend: end

    // remove by timeout or click: begin
    var eachNotifyElement = window.document.getElementById(ntflxNotify.id);
    if (eachNotifyElement) {
      // timeout variables
      var timeoutHide;
      var timeoutRemove;

      // hide notify elm and hide overlay: begin
      var hideNotifyElementsAndOverlay = function () {
        eachNotifyElement.classList.add('nx-remove');
        var removeOverlay = window.document.getElementById(notifySettings.overlayID);
        if (removeOverlay && ntflxNotifyWrap.childElementCount <= 0) {
          removeOverlay.classList.add('nx-remove');
        }
        clearTimeout(timeoutHide);
      };
      // hide notify elm and hide overlay: end

      // remove notify elm and wrapper: begin
      var removeNotifyElmentsAndWrapper = function () {
        if (eachNotifyElement && eachNotifyElement.parentNode !== null) {
          eachNotifyElement.parentNode.removeChild(eachNotifyElement);
        }
        if (ntflxNotifyWrap.childElementCount <= 0 && ntflxNotifyWrap.parentNode !== null) { // if childs count === 0 remove wrap
          ntflxNotifyWrap.parentNode.removeChild(ntflxNotifyWrap);
          var removeOverlay = window.document.getElementById(notifySettings.overlayID);
          if (removeOverlay && removeOverlay.parentNode !== null) {
            removeOverlay.parentNode.removeChild(removeOverlay);
          }
        }
        clearTimeout(timeoutRemove);
      };
      // remove notify elm and wrapper: end

      // if has close button and callbackOrOptions is not a function: begin
      if (newNotifySettings.closeButton && typeof callbackOrOptions !== 'function') {
        var closeButtonElm = window.document.getElementById(ntflxNotify.id).querySelector('span.nx-close-button');
        closeButtonElm.addEventListener('click', function () {
          hideNotifyElementsAndOverlay();
          var clickToCloseTimeout = setTimeout(function () {
            removeNotifyElmentsAndWrapper();
            clearTimeout(clickToCloseTimeout);
          }, newNotifySettings.cssAnimationDuration);
        });
      }
      // if has close button and callbackOrOptions is not a function: end

      // if callbackOrOptions or click to close: begin
      if (typeof callbackOrOptions === 'function' || newNotifySettings.clickToClose) {
        eachNotifyElement.addEventListener('click', function () {
          if (typeof callbackOrOptions === 'function') {
            callbackOrOptions();
          }
          hideNotifyElementsAndOverlay();
          var callbackTimeout = setTimeout(function () {
            removeNotifyElmentsAndWrapper();
            clearTimeout(callbackTimeout);
          }, newNotifySettings.cssAnimationDuration);
        });
      }
      // if callbackOrOptions or click to close: end

      // else auto remove: begin
      if (!newNotifySettings.closeButton && typeof callbackOrOptions !== 'function') {
        // auto remove: begin
        var autoRemove = function () {
          timeoutHide = setTimeout(function () {
            hideNotifyElementsAndOverlay();
          }, newNotifySettings.timeout);
          timeoutRemove = setTimeout(function () {
            removeNotifyElmentsAndWrapper();
          }, newNotifySettings.timeout + newNotifySettings.cssAnimationDuration);
        };
        autoRemove();
        // auto remove: end

        // pause auto remove: begin
        if (newNotifySettings.pauseOnHover) {
          eachNotifyElement.addEventListener('mouseenter', function () {
            eachNotifyElement.classList.add('nx-paused');
            clearTimeout(timeoutHide);
            clearTimeout(timeoutRemove);
          });
          eachNotifyElement.addEventListener('mouseleave', function () {
            eachNotifyElement.classList.remove('nx-paused');
            autoRemove();
          });
        }
        // pause auto remove: end
      }
      // else auto remove: end
    }
    // remove by timeout or click: end

    // notify - show only the last one: begin
    if (newNotifySettings.showOnlyTheLastOne && notifyCreateCounter > 0) {
      var allNotifyElmNotTheLastOne = window.document.querySelectorAll('[id^=' + newNotifySettings.ID + '-]:not([id=' + newNotifySettings.ID + '-' + notifyCreateCounter + '])');
      for (var i = 0; i < allNotifyElmNotTheLastOne.length; i++) {
        var eachNotifyElmNotLastOne = allNotifyElmNotTheLastOne[i];
        if (eachNotifyElmNotLastOne.parentNode !== null) {
          eachNotifyElmNotLastOne.parentNode.removeChild(eachNotifyElmNotLastOne);
        }
      }
    }
    // notify - show only the last one: end

    // extend new settings with the backup settings
    newNotifySettings = commonExtendOptions(true, newNotifySettings, newNotifySettingsBackup);

  };
  // NOTIFY: Create: end

  var Notiflix = {
    Notify: {
      // Init
      init: function (userNotifyOptions) {
        // extend options
        newNotifySettings = commonExtendOptions(true, notifySettings, userNotifyOptions);
        // internal css if exist
        commonSetInternalCSSCodes(notifyGetInternalCSSCodes, 'NotiflixNotifyInternalCSS');
      },
      // Merge First Init
      merge: function (userNotifyExtendOptions) {
        // if initialized already
        if (newNotifySettings) {
          newNotifySettings = commonExtendOptions(true, newNotifySettings, userNotifyExtendOptions);
        }
        // initialize first
        else {
          commonConsoleError('You have to initialize the Notify module before call Merge function.');
          return false;
        }
      },
      // Success
      success: function (message, callbackOrOptions, options) {
        notifyCreate(typesNotify.Success, message, callbackOrOptions, options);
      },
      // Failure
      failure: function (message, callbackOrOptions, options) {
        notifyCreate(typesNotify.Failure, message, callbackOrOptions, options);
      },
      // Warning
      warning: function (message, callbackOrOptions, options) {
        notifyCreate(typesNotify.Warning, message, callbackOrOptions, options);
      },
      // Info
      info: function (message, callbackOrOptions, options) {
        notifyCreate(typesNotify.Info, message, callbackOrOptions, options);
      },
    },
  };

  if (typeof window.Notiflix === 'object') {
    return commonExtendOptions(true, window.Notiflix, { Notify: Notiflix.Notify });
  } else {
    return { Notify: Notiflix.Notify };
  }

});
},{}],"../node_modules/notiflix/build/notiflix-report-aio.js":[function(require,module,exports) {
var define;
var global = arguments[3];
/*
* Notiflix Report AIO (https://notiflix.github.io)
* Description: This file has been created automatically that using "notiflix.js", and "notiflix.css" files.
* Version: 3.2.6
* Author: Furkan (https://github.com/furcan)
* Copyright 2019 - 2023 Notiflix, MIT Licence (https://opensource.org/licenses/MIT)
*/

/* global define */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return factory(root);
    });
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = factory(root);
  } else {
    root.Notiflix = factory(root);
  }
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this, function (window) {

  'use strict';

  // COMMON: SSR check: begin
  if (typeof window === 'undefined' && typeof window.document === 'undefined') {
    return false;
  }
  // COMMON: SSR check: end

  // COMMON: Variables: begin
  var notiflixNamespace = 'Notiflix';
  var notiflixConsoleDocs = '\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation';
  var defaultFontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif';
  // COMMON: Variables: end

  // REPORT: Default Settings: begin
  var typesReport = {
    Success: 'Success',
    Failure: 'Failure',
    Warning: 'Warning',
    Info: 'Info',
  };
  var newReportSettings;
  var reportSettings = {
    ID: 'NotiflixReportWrap', // can not customizable
    className: 'notiflix-report',
    width: '320px',
    backgroundColor: '#f8f8f8',
    borderRadius: '25px',
    rtl: false,
    zindex: 4002,
    backOverlay: true,
    backOverlayColor: 'rgba(0,0,0,0.5)',
    backOverlayClickToClose: false,
    fontFamily: 'Quicksand',
    svgSize: '110px',
    plainText: true,
    titleFontSize: '16px',
    titleMaxLength: 34,
    messageFontSize: '13px',
    messageMaxLength: 400,
    buttonFontSize: '14px',
    buttonMaxLength: 34,
    cssAnimation: true,
    cssAnimationDuration: 360,
    cssAnimationStyle: 'fade', // 'fade' - 'zoom'

    success: {
      svgColor: '#32c682',
      titleColor: '#1e1e1e',
      messageColor: '#242424',
      buttonBackground: '#32c682',
      buttonColor: '#fff',
      backOverlayColor: 'rgba(50,198,130,0.2)',
    },

    failure: {
      svgColor: '#ff5549',
      titleColor: '#1e1e1e',
      messageColor: '#242424',
      buttonBackground: '#ff5549',
      buttonColor: '#fff',
      backOverlayColor: 'rgba(255,85,73,0.2)',
    },

    warning: {
      svgColor: '#eebf31',
      titleColor: '#1e1e1e',
      messageColor: '#242424',
      buttonBackground: '#eebf31',
      buttonColor: '#fff',
      backOverlayColor: 'rgba(238,191,49,0.2)',
    },

    info: {
      svgColor: '#26c0d3',
      titleColor: '#1e1e1e',
      messageColor: '#242424',
      buttonBackground: '#26c0d3',
      buttonColor: '#fff',
      backOverlayColor: 'rgba(38,192,211,0.2)',
    },
  };
  // REPORT: Default Settings: end

  // COMMON: Console Error: begin
  var commonConsoleError = function (message) {
    return console.error('%c ' + notiflixNamespace + ' Error ', 'padding:2px;border-radius:20px;color:#fff;background:#ff5549', '\n' + message + notiflixConsoleDocs);
  };
  // COMMON: Console Error: end

  // COMMON: Check Head or Body: begin
  var commonCheckHeadOrBody = function (element) {
    if (!element) { element = 'head'; }
    if (window.document[element] === null) {
      commonConsoleError('\nNotiflix needs to be appended to the "<' + element + '>" element, but you called it before the "<' + element + '>" element has been created.');
      return false;
    }
    return true;
  };
  // COMMON: Check Head or Body: end

  // COMMON: Set Internal CSS Codes: begin
  var commonSetInternalCSSCodes = function (getInternalCSSCodes, styleElementId) {
    // check doc head
    if (!commonCheckHeadOrBody('head')) { return false; }

    // internal css
    if (getInternalCSSCodes() !== null && !window.document.getElementById(styleElementId)) {
      var internalCSS = window.document.createElement('style');
      internalCSS.id = styleElementId;
      internalCSS.innerHTML = getInternalCSSCodes();
      window.document.head.appendChild(internalCSS);
    }
  };
  // COMMON: Set Internal CSS Codes: end

  // COMMON: Extend Options: begin
  var commonExtendOptions = function () {
    // variables
    var extended = {};
    var deep = false;
    var i = 0;
    // check if a deep merge
    if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
      deep = arguments[0];
      i++;
    }
    // merge the object into the extended object
    var merge = function (obj) {
      for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
          // if property is an object, merge properties
          if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
            extended[prop] = commonExtendOptions(extended[prop], obj[prop]);
          } else {
            extended[prop] = obj[prop];
          }
        }
      }
    };
    // loop through each object and conduct a merge
    for (; i < arguments.length; i++) {
      merge(arguments[i]);
    }
    return extended;
  };
  // COMMON: Extend Options: end

  // COMMON: Get Plaintext: begin
  var commonGetPlaintext = function (html) {
    var htmlPool = window.document.createElement('div');
    htmlPool.innerHTML = html;
    return htmlPool.textContent || htmlPool.innerText || '';
  };
  // COMMON: Get Plaintext: end

  // REPORT: SVG Icon Success: begin
  var reportSvgIconSuccess = function (width, color) {
    if (!width) { width = '110px'; }
    if (!color) { color = '#32c682'; }
    var reportSvgSuccess = '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="' + width + '" height="' + width + '" fill="' + color + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';
    return reportSvgSuccess;
  };
  // REPORT: SVG Icon Success: end

  // REPORT: SVG Icon Failure: begin
  var reportSvgIconFailure = function (width, color) {
    if (!width) { width = '110px'; }
    if (!color) { color = '#ff5549'; }
    var reportSvgFailure = '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="' + width + '" height="' + width + '" fill="' + color + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';
    return reportSvgFailure;
  };
  // REPORT: SVG Icon Failure: end

  // REPORT: SVG Icon Warning: begin
  var reportSvgIconWarning = function (width, color) {
    if (!width) { width = '110px'; }
    if (!color) { color = '#eebf31'; }
    var reportSvgWarning = '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="' + width + '" height="' + width + '" fill="' + color + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';
    return reportSvgWarning;
  };
  // REPORT: SVG Icon Warning: end

  // REPORT: SVG Icon Info: begin
  var reportSvgIconInfo = function (width, color) {
    if (!width) { width = '110px'; }
    if (!color) { color = '#26c0d3'; }
    var reportSvgInfo = '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="' + width + '" height="' + width + '" fill="' + color + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';
    return reportSvgInfo;
  };
  // REPORT: SVG Icon Info: end

  // REPORT: Get Internal CSS Codes: begin
  var reportGetInternalCSSCodes = function () {
    var reportCSS = '[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}';
    return reportCSS || null;
  };
  // REPORT: Get Internal CSS Codes: end

  // REPORT: Create: begin
  var reportCreate = function (reportType, title, message, buttonText, callbackOrOptions, options) {
    // check doc body
    if (!commonCheckHeadOrBody('body')) { return false; }

    // if not initialized pretend like init
    if (!newReportSettings) {
      Notiflix.Report.init({});
    }

    // create a backup for settings
    var newReportSettingsBackup = {};

    // check callbackOrOptions and options: begin
    if ((typeof callbackOrOptions === 'object' && !Array.isArray(callbackOrOptions)) || (typeof options === 'object' && !Array.isArray(options))) {
      // new options
      var newOptions = {};
      if (typeof callbackOrOptions === 'object') {
        newOptions = callbackOrOptions;
      } else if (typeof options === 'object') {
        newOptions = options;
      }

      // extend the backup settings with new settings
      newReportSettingsBackup = commonExtendOptions(true, newReportSettings, {});

      // extend new settings with the options
      newReportSettings = commonExtendOptions(true, newReportSettings, newOptions);
    }
    // check callbackOrOptions and callback: end

    // report type
    var theType = newReportSettings[reportType.toLocaleLowerCase('en')];

    // check the arguments: begin
    if (typeof title !== 'string') { title = 'Notiflix ' + reportType; }
    if (typeof message !== 'string') {
      if (reportType === typesReport.Success) {
        message = '"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein';
      }
      else if (reportType === typesReport.Failure) {
        message = '"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford';
      }
      else if (reportType === typesReport.Warning) {
        message = '"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk';
      }
      else if (reportType === typesReport.Info) {
        message = '"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung';
      }
    }
    if (typeof buttonText !== 'string') { buttonText = 'Okay'; }
    // check the arguments: end

    // if plainText is true => HTML tags not allowed: begin
    if (newReportSettings.plainText) {
      title = commonGetPlaintext(title);
      message = commonGetPlaintext(message);
      buttonText = commonGetPlaintext(buttonText);
    }
    // if plainText is true => HTML tags not allowed: end

    // if plainText is false but the contents length more than ${title | message | buttonText}MaxLength => Possible HTML tags error: begin
    if (!newReportSettings.plainText) {
      if (title.length > newReportSettings.titleMaxLength) {
        title = 'Possible HTML Tags Error';
        message = 'The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.';
        buttonText = 'Okay';
      }
      if (message.length > newReportSettings.messageMaxLength) {
        title = 'Possible HTML Tags Error';
        message = 'The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.';
        buttonText = 'Okay';
      }
      if (buttonText.length > newReportSettings.buttonMaxLength) {
        title = 'Possible HTML Tags Error';
        message = 'The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.';
        buttonText = 'Okay';
      }
    }
    // if plainText is false but the contents length more than ${title | message | buttonText}MaxLength => Possible HTML tags error: end

    // max length: begin
    if (title.length > newReportSettings.titleMaxLength) {
      title = title.substring(0, newReportSettings.titleMaxLength) + '...';
    }
    if (message.length > newReportSettings.messageMaxLength) {
      message = message.substring(0, newReportSettings.messageMaxLength) + '...';
    }
    if (buttonText.length > newReportSettings.buttonMaxLength) {
      buttonText = buttonText.substring(0, newReportSettings.buttonMaxLength) + '...';
    }
    // max length: end

    // if cssAnimaion is false => duration: begin
    if (!newReportSettings.cssAnimation) {
      newReportSettings.cssAnimationDuration = 0;
    }
    // if cssAnimaion is false => duration: end

    // report wrap: begin
    var ntflxReportWrap = window.document.createElement('div');
    ntflxReportWrap.id = reportSettings.ID;
    ntflxReportWrap.className = newReportSettings.className;
    ntflxReportWrap.style.zIndex = newReportSettings.zindex;
    ntflxReportWrap.style.borderRadius = newReportSettings.borderRadius;
    ntflxReportWrap.style.fontFamily = '"' + newReportSettings.fontFamily + '", ' + defaultFontFamily;

    // rtl: begin
    if (newReportSettings.rtl) {
      ntflxReportWrap.setAttribute('dir', 'rtl');
      ntflxReportWrap.classList.add('nx-rtl-on');
    }
    // rtl: end

    // position: begin
    ntflxReportWrap.style.display = 'flex';
    ntflxReportWrap.style.flexWrap = 'wrap';
    ntflxReportWrap.style.flexDirection = 'column';
    ntflxReportWrap.style.alignItems = 'center';
    ntflxReportWrap.style.justifyContent = 'center';
    // position: end

    // overlay: begin
    var reportOverlay = '';
    var reportOverlayClickToClose = newReportSettings.backOverlayClickToClose === true;
    if (newReportSettings.backOverlay) {
      reportOverlay = '<div class="' + newReportSettings.className + '-overlay' + (newReportSettings.cssAnimation ? ' nx-with-animation' : '') + (reportOverlayClickToClose ? ' nx-report-click-to-close' : '') + '" style="background:' + (theType.backOverlayColor || newReportSettings.backOverlayColor) + ';animation-duration:' + newReportSettings.cssAnimationDuration + 'ms;"></div>';
    }
    // overlay: end

    // svg icon: begin
    var svgIcon = '';
    if (reportType === typesReport.Success) {
      svgIcon = reportSvgIconSuccess(newReportSettings.svgSize, theType.svgColor);
    } else if (reportType === typesReport.Failure) {
      svgIcon = reportSvgIconFailure(newReportSettings.svgSize, theType.svgColor);
    } else if (reportType === typesReport.Warning) {
      svgIcon = reportSvgIconWarning(newReportSettings.svgSize, theType.svgColor);
    } else if (reportType === typesReport.Info) {
      svgIcon = reportSvgIconInfo(newReportSettings.svgSize, theType.svgColor);
    }
    // svg icon: end

    ntflxReportWrap.innerHTML = reportOverlay + '<div class="' + newReportSettings.className + '-content' + (newReportSettings.cssAnimation ? ' nx-with-animation ' : '') + ' nx-' + newReportSettings.cssAnimationStyle + '" style="width:' + newReportSettings.width + '; background:' + newReportSettings.backgroundColor + '; animation-duration:' + newReportSettings.cssAnimationDuration + 'ms;">' +
      '<div style="width:' + newReportSettings.svgSize + '; height:' + newReportSettings.svgSize + ';" class="' + newReportSettings.className + '-icon">' + svgIcon + '</div>' +
      '<h5 class="' + newReportSettings.className + '-title" style="font-weight:500; font-size:' + newReportSettings.titleFontSize + '; color:' + theType.titleColor + ';">' + title + '</h5>' +
      '<p class="' + newReportSettings.className + '-message" style="font-size:' + newReportSettings.messageFontSize + '; color:' + theType.messageColor + ';">' + message + '</p>' +
      '<a id="NXReportButton" class="' + newReportSettings.className + '-button" style="font-weight:500; font-size:' + newReportSettings.buttonFontSize + '; background:' + theType.buttonBackground + '; color:' + theType.buttonColor + ';">' + buttonText + '</a>' +
      '</div>';

    // if there is no report element
    if (!window.document.getElementById(ntflxReportWrap.id)) {
      // append
      window.document.body.appendChild(ntflxReportWrap);

      // report remove: begin
      var reportRemove = function () {
        var elementWrapper = window.document.getElementById(ntflxReportWrap.id);
        elementWrapper.classList.add('nx-remove');
        var timeout = setTimeout(function () {
          if (elementWrapper.parentNode !== null) {
            elementWrapper.parentNode.removeChild(elementWrapper);
          }
          clearTimeout(timeout);
        }, newReportSettings.cssAnimationDuration);
      };
      // report remove: end

      // callback: begin
      var elementButton = window.document.getElementById('NXReportButton');
      elementButton.addEventListener('click', function () {
        // if callback: begin
        if (typeof callbackOrOptions === 'function') {
          callbackOrOptions();
        }
        // if callback: end

        // remove report
        reportRemove();
      });
      // callback: end

      // overlay click to close: begin
      if (reportOverlay && reportOverlayClickToClose) {
        var elementOverlay = window.document.querySelector('.nx-report-click-to-close');
        elementOverlay.addEventListener('click', function () {
          reportRemove();
        });
      }
      // overlay click to close: end
    }
    // report wrap: end

    // extend new settings with the backup settings
    newReportSettings = commonExtendOptions(true, newReportSettings, newReportSettingsBackup);

  };
  // REPORT: Create: end

  var Notiflix = {
    Report: {
      // Init
      init: function (userReportOptions) {
        // extend options
        newReportSettings = commonExtendOptions(true, reportSettings, userReportOptions);
        // internal css if exist
        commonSetInternalCSSCodes(reportGetInternalCSSCodes, 'NotiflixReportInternalCSS');
      },
      // Merge First Init
      merge: function (userReportExtendOptions) {
        // if initialized already
        if (newReportSettings) {
          newReportSettings = commonExtendOptions(true, newReportSettings, userReportExtendOptions);
        }
        // initialize first
        else {
          commonConsoleError('You have to initialize the Report module before call Merge function.');
          return false;
        }
      },
      // Success
      success: function (title, message, buttonText, callbackOrOptions, options) {
        reportCreate(typesReport.Success, title, message, buttonText, callbackOrOptions, options);
      },
      // Failure
      failure: function (title, message, buttonText, callbackOrOptions, options) {
        reportCreate(typesReport.Failure, title, message, buttonText, callbackOrOptions, options);
      },
      // Warning
      warning: function (title, message, buttonText, callbackOrOptions, options) {
        reportCreate(typesReport.Warning, title, message, buttonText, callbackOrOptions, options);
      },
      // Info
      info: function (title, message, buttonText, callbackOrOptions, options) {
        reportCreate(typesReport.Info, title, message, buttonText, callbackOrOptions, options);
      },
    },
  };

  if (typeof window.Notiflix === 'object') {
    return commonExtendOptions(true, window.Notiflix, { Report: Notiflix.Report });
  } else {
    return { Report: Notiflix.Report };
  }

});
},{}],"../node_modules/simplelightbox/dist/simple-lightbox.modules.js":[function(require,module,exports) {
var global = arguments[3];
/*!
	By André Rinas, www.andrerinas.de
	Documentation, www.simplelightbox.de
	Available for use under the MIT License
	Version 2.12.1
*/
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var SimpleLightbox = /*#__PURE__*/function () {
  function SimpleLightbox(elements, options) {
    var _this = this;
    _classCallCheck(this, SimpleLightbox);
    _defineProperty(this, "defaultOptions", {
      sourceAttr: 'href',
      overlay: true,
      overlayOpacity: 0.7,
      spinner: true,
      nav: true,
      navText: ['&lsaquo;', '&rsaquo;'],
      captions: true,
      captionDelay: 0,
      captionSelector: 'img',
      captionType: 'attr',
      captionsData: 'title',
      captionPosition: 'bottom',
      captionClass: '',
      close: true,
      closeText: '&times;',
      swipeClose: true,
      showCounter: true,
      fileExt: 'png|jpg|jpeg|gif|webp',
      animationSlide: true,
      animationSpeed: 250,
      preloading: true,
      enableKeyboard: true,
      loop: true,
      rel: false,
      docClose: true,
      swipeTolerance: 50,
      className: 'simple-lightbox',
      widthRatio: 0.8,
      heightRatio: 0.9,
      scaleImageToRatio: false,
      disableRightClick: false,
      disableScroll: true,
      alertError: true,
      alertErrorMessage: 'Image not found, next image will be loaded',
      additionalHtml: false,
      history: true,
      throttleInterval: 0,
      doubleTapZoom: 2,
      maxZoom: 10,
      htmlClass: 'has-lightbox',
      rtl: false,
      fixedClass: 'sl-fixed',
      fadeSpeed: 300,
      uniqueImages: true,
      focus: true,
      scrollZoom: true,
      scrollZoomFactor: 0.5,
      download: false
    });
    _defineProperty(this, "transitionPrefix", void 0);
    _defineProperty(this, "isPassiveEventsSupported", void 0);
    _defineProperty(this, "transitionCapable", false);
    _defineProperty(this, "isTouchDevice", 'ontouchstart' in window);
    _defineProperty(this, "isAppleDevice", /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform));
    _defineProperty(this, "initialLocationHash", void 0);
    _defineProperty(this, "pushStateSupport", 'pushState' in history);
    _defineProperty(this, "isOpen", false);
    _defineProperty(this, "isAnimating", false);
    _defineProperty(this, "isClosing", false);
    _defineProperty(this, "isFadeIn", false);
    _defineProperty(this, "urlChangedOnce", false);
    _defineProperty(this, "hashReseted", false);
    _defineProperty(this, "historyHasChanges", false);
    _defineProperty(this, "historyUpdateTimeout", null);
    _defineProperty(this, "currentImage", void 0);
    _defineProperty(this, "eventNamespace", 'simplelightbox');
    _defineProperty(this, "domNodes", {});
    _defineProperty(this, "loadedImages", []);
    _defineProperty(this, "initialImageIndex", 0);
    _defineProperty(this, "currentImageIndex", 0);
    _defineProperty(this, "initialSelector", null);
    _defineProperty(this, "globalScrollbarWidth", 0);
    _defineProperty(this, "controlCoordinates", {
      swipeDiff: 0,
      swipeYDiff: 0,
      swipeStart: 0,
      swipeEnd: 0,
      swipeYStart: 0,
      swipeYEnd: 0,
      mousedown: false,
      imageLeft: 0,
      zoomed: false,
      containerHeight: 0,
      containerWidth: 0,
      containerOffsetX: 0,
      containerOffsetY: 0,
      imgHeight: 0,
      imgWidth: 0,
      capture: false,
      initialOffsetX: 0,
      initialOffsetY: 0,
      initialPointerOffsetX: 0,
      initialPointerOffsetY: 0,
      initialPointerOffsetX2: 0,
      initialPointerOffsetY2: 0,
      initialScale: 1,
      initialPinchDistance: 0,
      pointerOffsetX: 0,
      pointerOffsetY: 0,
      pointerOffsetX2: 0,
      pointerOffsetY2: 0,
      targetOffsetX: 0,
      targetOffsetY: 0,
      targetScale: 0,
      pinchOffsetX: 0,
      pinchOffsetY: 0,
      limitOffsetX: 0,
      limitOffsetY: 0,
      scaleDifference: 0,
      targetPinchDistance: 0,
      touchCount: 0,
      doubleTapped: false,
      touchmoveCount: 0
    });
    this.options = Object.assign(this.defaultOptions, options);
    this.isPassiveEventsSupported = this.checkPassiveEventsSupport();
    if (typeof elements === 'string') {
      this.initialSelector = elements;
      this.elements = Array.from(document.querySelectorAll(elements));
    } else {
      this.elements = typeof elements.length !== 'undefined' && elements.length > 0 ? Array.from(elements) : [elements];
    }
    this.relatedElements = [];
    this.transitionPrefix = this.calculateTransitionPrefix();
    this.transitionCapable = this.transitionPrefix !== false;
    this.initialLocationHash = this.hash;

    // this should be handled by attribute selector IMHO! => 'a[rel=bla]'...
    if (this.options.rel) {
      this.elements = this.getRelated(this.options.rel);
    }
    if (this.options.uniqueImages) {
      var imgArr = [];
      this.elements = Array.from(this.elements).filter(function (element) {
        var src = element.getAttribute(_this.options.sourceAttr);
        if (imgArr.indexOf(src) === -1) {
          imgArr.push(src);
          return true;
        }
        return false;
      });
    }
    this.createDomNodes();
    if (this.options.close) {
      this.domNodes.wrapper.appendChild(this.domNodes.closeButton);
    }
    if (this.options.nav) {
      this.domNodes.wrapper.appendChild(this.domNodes.navigation);
    }
    if (this.options.spinner) {
      this.domNodes.wrapper.appendChild(this.domNodes.spinner);
    }
    this.addEventListener(this.elements, 'click.' + this.eventNamespace, function (event) {
      if (_this.isValidLink(event.currentTarget)) {
        event.preventDefault();
        if (_this.isAnimating) {
          return false;
        }
        _this.initialImageIndex = _this.elements.indexOf(event.currentTarget);
        _this.openImage(event.currentTarget);
      }
    });

    // close addEventListener click addEventListener doc
    if (this.options.docClose) {
      this.addEventListener(this.domNodes.wrapper, ['click.' + this.eventNamespace, 'touchstart.' + this.eventNamespace], function (event) {
        if (_this.isOpen && event.target === event.currentTarget) {
          _this.close();
        }
      });
    }

    // disable rightclick
    if (this.options.disableRightClick) {
      this.addEventListener(document.body, 'contextmenu.' + this.eventNamespace, function (event) {
        if (event.target.parentElement.classList.contains("sl-image")) {
          event.preventDefault();
        }
      });
    }

    // keyboard-control
    if (this.options.enableKeyboard) {
      this.addEventListener(document.body, 'keyup.' + this.eventNamespace, this.throttle(function (event) {
        _this.controlCoordinates.swipeDiff = 0;
        // keyboard control only if lightbox is open

        if (_this.isAnimating && event.key === 'Escape') {
          _this.currentImage.setAttribute('src', '');
          _this.isAnimating = false;
          return _this.close();
        }
        if (_this.isOpen) {
          event.preventDefault();
          if (event.key === 'Escape') {
            _this.close();
          }
          if (!_this.isAnimating && ['ArrowLeft', 'ArrowRight'].indexOf(event.key) > -1) {
            _this.loadImage(event.key === 'ArrowRight' ? 1 : -1);
          }
        }
      }, this.options.throttleInterval));
    }
    this.addEvents();
  }
  _createClass(SimpleLightbox, [{
    key: "checkPassiveEventsSupport",
    value: function checkPassiveEventsSupport() {
      // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
      // Test via a getter in the options object to see if the passive property is accessed
      var supportsPassive = false;
      try {
        var opts = Object.defineProperty({}, 'passive', {
          get: function get() {
            supportsPassive = true;
          }
        });
        window.addEventListener("testPassive", null, opts);
        window.removeEventListener("testPassive", null, opts);
      } catch (e) {}
      return supportsPassive;
    }
  }, {
    key: "generateQuerySelector",
    value: function generateQuerySelector(elem) {
      var tagName = elem.tagName,
        id = elem.id,
        className = elem.className,
        parentNode = elem.parentNode;
      if (tagName === 'HTML') return 'HTML';
      var str = tagName;
      str += id !== '' ? "#".concat(id) : '';
      if (className) {
        var classes = className.trim().split(/\s/);
        for (var i = 0; i < classes.length; i++) {
          str += ".".concat(classes[i]);
        }
      }
      var childIndex = 1;
      for (var e = elem; e.previousElementSibling; e = e.previousElementSibling) {
        childIndex += 1;
      }
      str += ":nth-child(".concat(childIndex, ")");
      return "".concat(this.generateQuerySelector(parentNode), " > ").concat(str);
    }

    // generateQuerySelector(el) {
    //     if (el.tagName.toLowerCase() == "html")
    //         return "HTML";
    //     var str = el.tagName;
    //     str += (el.id != "") ? "#" + el.id : "";
    //     if (el.className) {
    //         var classes = el.className.split(/\s/);
    //         for (var i = 0; i < classes.length; i++) {
    //             str += "." + classes[i]
    //         }
    //     }
    //     return this.generateQuerySelector(el.parentNode) + " > " + str;
    // }
  }, {
    key: "createDomNodes",
    value: function createDomNodes() {
      this.domNodes.overlay = document.createElement('div');
      this.domNodes.overlay.classList.add('sl-overlay');
      this.domNodes.overlay.dataset.opacityTarget = this.options.overlayOpacity;
      this.domNodes.closeButton = document.createElement('button');
      this.domNodes.closeButton.classList.add('sl-close');
      this.domNodes.closeButton.innerHTML = this.options.closeText;
      this.domNodes.spinner = document.createElement('div');
      this.domNodes.spinner.classList.add('sl-spinner');
      this.domNodes.spinner.innerHTML = '<div></div>';
      this.domNodes.navigation = document.createElement('div');
      this.domNodes.navigation.classList.add('sl-navigation');
      this.domNodes.navigation.innerHTML = "<button class=\"sl-prev\">".concat(this.options.navText[0], "</button><button class=\"sl-next\">").concat(this.options.navText[1], "</button>");
      this.domNodes.counter = document.createElement('div');
      this.domNodes.counter.classList.add('sl-counter');
      this.domNodes.counter.innerHTML = '<span class="sl-current"></span>/<span class="sl-total"></span>';
      this.domNodes.download = document.createElement('div');
      this.domNodes.download.classList.add('sl-download');
      this.domNodes.downloadLink = document.createElement('a');
      this.domNodes.downloadLink.setAttribute('download', '');
      this.domNodes.downloadLink.textContent = this.options.download;
      this.domNodes.download.appendChild(this.domNodes.downloadLink);
      this.domNodes.caption = document.createElement('div');
      this.domNodes.caption.classList.add('sl-caption', 'pos-' + this.options.captionPosition);
      if (this.options.captionClass) {
        var _this$domNodes$captio;
        var captionClasses = this.options.captionClass.split(/[\s,]+/);
        (_this$domNodes$captio = this.domNodes.caption.classList).add.apply(_this$domNodes$captio, _toConsumableArray(captionClasses));
      }
      this.domNodes.image = document.createElement('div');
      this.domNodes.image.classList.add('sl-image');
      this.domNodes.wrapper = document.createElement('div');
      this.domNodes.wrapper.classList.add('sl-wrapper');
      this.domNodes.wrapper.setAttribute('tabindex', -1);
      this.domNodes.wrapper.setAttribute('role', 'dialog');
      this.domNodes.wrapper.setAttribute('aria-hidden', false);
      if (this.options.className) {
        this.domNodes.wrapper.classList.add(this.options.className);
      }
      if (this.options.rtl) {
        this.domNodes.wrapper.classList.add('sl-dir-rtl');
      }
    }
  }, {
    key: "throttle",
    value: function throttle(func, limit) {
      var inThrottle;
      return function () {
        if (!inThrottle) {
          func.apply(this, arguments);
          inThrottle = true;
          setTimeout(function () {
            return inThrottle = false;
          }, limit);
        }
      };
    }
  }, {
    key: "isValidLink",
    value: function isValidLink(element) {
      return !this.options.fileExt || element.getAttribute(this.options.sourceAttr) && new RegExp('(' + this.options.fileExt + ')($|\\?.*$)', 'i').test(element.getAttribute(this.options.sourceAttr));
    }
  }, {
    key: "calculateTransitionPrefix",
    value: function calculateTransitionPrefix() {
      var s = (document.body || document.documentElement).style;
      return 'transition' in s ? '' : 'WebkitTransition' in s ? '-webkit-' : 'MozTransition' in s ? '-moz-' : 'OTransition' in s ? '-o' : false;
    }
  }, {
    key: "getScrollbarWidth",
    value: function getScrollbarWidth() {
      var scrollbarWidth = 0;
      var scrollDiv = document.createElement('div');
      scrollDiv.classList.add('sl-scrollbar-measure');
      document.body.appendChild(scrollDiv);
      scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    }
  }, {
    key: "toggleScrollbar",
    value: function toggleScrollbar(type) {
      var scrollbarWidth = 0;
      var fixedElements = [].slice.call(document.querySelectorAll('.' + this.options.fixedClass));
      if (type === 'hide') {
        var fullWindowWidth = window.innerWidth;
        if (!fullWindowWidth) {
          var documentElementRect = document.documentElement.getBoundingClientRect();
          fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
        }
        if (document.body.clientWidth < fullWindowWidth || this.isAppleDevice) {
          var paddingRight = parseInt(document.body.style.paddingRight || 0, 10);
          scrollbarWidth = this.getScrollbarWidth();
          document.body.dataset.originalPaddingRight = paddingRight;
          if (scrollbarWidth > 0 || scrollbarWidth == 0 && this.isAppleDevice) {
            document.body.classList.add('hidden-scroll');
            document.body.style.paddingRight = paddingRight + scrollbarWidth + 'px';
            fixedElements.forEach(function (element) {
              var actualPadding = element.style.paddingRight;
              var calculatedPadding = window.getComputedStyle(element)['padding-right'];
              element.dataset.originalPaddingRight = actualPadding;
              element.style.paddingRight = "".concat(parseFloat(calculatedPadding) + scrollbarWidth, "px");
            });
          }
        }
      } else {
        document.body.classList.remove('hidden-scroll');
        document.body.style.paddingRight = document.body.dataset.originalPaddingRight;
        fixedElements.forEach(function (element) {
          var padding = element.dataset.originalPaddingRight;
          if (typeof padding !== 'undefined') {
            element.style.paddingRight = padding;
          }
        });
      }
      return scrollbarWidth;
    }
  }, {
    key: "close",
    value: function close() {
      var _this2 = this;
      if (!this.isOpen || this.isAnimating || this.isClosing) {
        return false;
      }
      this.isClosing = true;
      var element = this.relatedElements[this.currentImageIndex];
      element.dispatchEvent(new Event('close.simplelightbox'));
      if (this.options.history) {
        this.historyHasChanges = false;
        if (!this.hashReseted) {
          this.resetHash();
        }
      }
      this.removeEventListener(document, 'focusin.' + this.eventNamespace);
      this.fadeOut(this.domNodes.overlay, this.options.fadeSpeed);
      this.fadeOut(document.querySelectorAll('.sl-image img,  .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter'), this.options.fadeSpeed, function () {
        if (_this2.options.disableScroll) {
          _this2.toggleScrollbar('show');
        }
        if (_this2.options.htmlClass && _this2.options.htmlClass !== '') {
          document.querySelector('html').classList.remove(_this2.options.htmlClass);
        }
        document.body.removeChild(_this2.domNodes.wrapper);
        document.body.removeChild(_this2.domNodes.overlay);
        _this2.domNodes.additionalHtml = null;
        _this2.domNodes.download = null;
        element.dispatchEvent(new Event('closed.simplelightbox'));
        _this2.isClosing = false;
      });
      this.currentImage = null;
      this.isOpen = false;
      this.isAnimating = false;

      // reset touchcontrol coordinates
      for (var key in this.controlCoordinates) {
        this.controlCoordinates[key] = 0;
      }
      this.controlCoordinates.mousedown = false;
      this.controlCoordinates.zoomed = false;
      this.controlCoordinates.capture = false;
      this.controlCoordinates.initialScale = this.minMax(1, 1, this.options.maxZoom);
      this.controlCoordinates.doubleTapped = false;
    }
  }, {
    key: "hash",
    get: function get() {
      return window.location.hash.substring(1);
    }
  }, {
    key: "preload",
    value: function preload() {
      var _this3 = this;
      var index = this.currentImageIndex,
        length = this.relatedElements.length,
        next = index + 1 < 0 ? length - 1 : index + 1 >= length - 1 ? 0 : index + 1,
        prev = index - 1 < 0 ? length - 1 : index - 1 >= length - 1 ? 0 : index - 1,
        nextImage = new Image(),
        prevImage = new Image();
      nextImage.addEventListener('load', function (event) {
        var src = event.target.getAttribute('src');
        if (_this3.loadedImages.indexOf(src) === -1) {
          //is this condition even required... setting multiple times will not change usage...
          _this3.loadedImages.push(src);
        }
        _this3.relatedElements[index].dispatchEvent(new Event('nextImageLoaded.' + _this3.eventNamespace));
      });
      nextImage.setAttribute('src', this.relatedElements[next].getAttribute(this.options.sourceAttr));
      prevImage.addEventListener('load', function (event) {
        var src = event.target.getAttribute('src');
        if (_this3.loadedImages.indexOf(src) === -1) {
          _this3.loadedImages.push(src);
        }
        _this3.relatedElements[index].dispatchEvent(new Event('prevImageLoaded.' + _this3.eventNamespace));
      });
      prevImage.setAttribute('src', this.relatedElements[prev].getAttribute(this.options.sourceAttr));
    }
  }, {
    key: "loadImage",
    value: function loadImage(direction) {
      var _this4 = this;
      var slideDirection = direction;
      if (this.options.rtl) {
        direction = -direction;
      }
      this.relatedElements[this.currentImageIndex].dispatchEvent(new Event('change.' + this.eventNamespace));
      this.relatedElements[this.currentImageIndex].dispatchEvent(new Event((direction === 1 ? 'next' : 'prev') + '.' + this.eventNamespace));
      var newIndex = this.currentImageIndex + direction;
      if (this.isAnimating || (newIndex < 0 || newIndex >= this.relatedElements.length) && this.options.loop === false) {
        return false;
      }
      this.currentImageIndex = newIndex < 0 ? this.relatedElements.length - 1 : newIndex > this.relatedElements.length - 1 ? 0 : newIndex;
      this.domNodes.counter.querySelector('.sl-current').innerHTML = this.currentImageIndex + 1;
      if (this.options.animationSlide) {
        this.slide(this.options.animationSpeed / 1000, -100 * slideDirection - this.controlCoordinates.swipeDiff + 'px');
      }
      this.fadeOut(this.domNodes.image, this.options.fadeSpeed, function () {
        _this4.isAnimating = true;
        if (!_this4.isClosing) {
          setTimeout(function () {
            var element = _this4.relatedElements[_this4.currentImageIndex];
            _this4.currentImage.setAttribute('src', element.getAttribute(_this4.options.sourceAttr));
            if (_this4.loadedImages.indexOf(element.getAttribute(_this4.options.sourceAttr)) === -1) {
              _this4.show(_this4.domNodes.spinner);
            }
            if (_this4.domNodes.image.contains(_this4.domNodes.caption)) {
              _this4.domNodes.image.removeChild(_this4.domNodes.caption);
            }
            _this4.adjustImage(slideDirection);
            if (_this4.options.preloading) _this4.preload();
          }, 100);
        } else {
          _this4.isAnimating = false;
        }
      });
    }
  }, {
    key: "adjustImage",
    value: function adjustImage(direction) {
      var _this5 = this;
      if (!this.currentImage) {
        return false;
      }
      var tmpImage = new Image(),
        windowWidth = window.innerWidth * this.options.widthRatio,
        windowHeight = window.innerHeight * this.options.heightRatio;
      tmpImage.setAttribute('src', this.currentImage.getAttribute('src'));
      this.currentImage.dataset.scale = 1;
      this.currentImage.dataset.translateX = 0;
      this.currentImage.dataset.translateY = 0;
      this.zoomPanElement(0, 0, 1);
      tmpImage.addEventListener('error', function (event) {
        _this5.relatedElements[_this5.currentImageIndex].dispatchEvent(new Event('error.' + _this5.eventNamespace));
        _this5.isAnimating = false;
        _this5.isOpen = true;
        _this5.domNodes.spinner.style.display = 'none';
        var dirIsDefined = direction === 1 || direction === -1;
        if (_this5.initialImageIndex === _this5.currentImageIndex && dirIsDefined) {
          return _this5.close();
        }
        if (_this5.options.alertError) {
          alert(_this5.options.alertErrorMessage);
        }
        _this5.loadImage(dirIsDefined ? direction : 1);
      });
      tmpImage.addEventListener('load', function (event) {
        if (typeof direction !== 'undefined') {
          _this5.relatedElements[_this5.currentImageIndex].dispatchEvent(new Event('changed.' + _this5.eventNamespace));
          _this5.relatedElements[_this5.currentImageIndex].dispatchEvent(new Event((direction === 1 ? 'nextDone' : 'prevDone') + '.' + _this5.eventNamespace));
        }

        // history
        if (_this5.options.history) {
          _this5.updateURL();
        }
        if (_this5.loadedImages.indexOf(_this5.currentImage.getAttribute('src')) === -1) {
          _this5.loadedImages.push(_this5.currentImage.getAttribute('src'));
        }
        var imageWidth = event.target.width,
          imageHeight = event.target.height;
        if (_this5.options.scaleImageToRatio || imageWidth > windowWidth || imageHeight > windowHeight) {
          var ratio = imageWidth / imageHeight > windowWidth / windowHeight ? imageWidth / windowWidth : imageHeight / windowHeight;
          imageWidth /= ratio;
          imageHeight /= ratio;
        }
        _this5.domNodes.image.style.top = (window.innerHeight - imageHeight) / 2 + 'px';
        _this5.domNodes.image.style.left = (window.innerWidth - imageWidth - _this5.globalScrollbarWidth) / 2 + 'px';
        _this5.domNodes.image.style.width = imageWidth + 'px';
        _this5.domNodes.image.style.height = imageHeight + 'px';
        _this5.domNodes.spinner.style.display = 'none';
        if (_this5.options.focus) {
          _this5.forceFocus();
        }
        _this5.fadeIn(_this5.currentImage, _this5.options.fadeSpeed, function () {
          if (_this5.options.focus) {
            _this5.domNodes.wrapper.focus();
          }
        });
        _this5.isOpen = true;
        var captionContainer, captionText;
        if (typeof _this5.options.captionSelector === 'string') {
          captionContainer = _this5.options.captionSelector === 'self' ? _this5.relatedElements[_this5.currentImageIndex] : document.querySelector(_this5.generateQuerySelector(_this5.relatedElements[_this5.currentImageIndex]) + ' ' + _this5.options.captionSelector);
        } else if (typeof _this5.options.captionSelector === 'function') {
          captionContainer = _this5.options.captionSelector(_this5.relatedElements[_this5.currentImageIndex]);
        }
        if (_this5.options.captions && captionContainer) {
          if (_this5.options.captionType === 'data') {
            captionText = captionContainer.dataset[_this5.options.captionsData];
          } else if (_this5.options.captionType === 'text') {
            captionText = captionContainer.innerHTML;
          } else {
            captionText = captionContainer.getAttribute(_this5.options.captionsData);
          }
        }
        if (!_this5.options.loop) {
          if (_this5.currentImageIndex === 0) {
            _this5.hide(_this5.domNodes.navigation.querySelector('.sl-prev'));
          }
          if (_this5.currentImageIndex >= _this5.relatedElements.length - 1) {
            _this5.hide(_this5.domNodes.navigation.querySelector('.sl-next'));
          }
          if (_this5.currentImageIndex > 0) {
            _this5.show(_this5.domNodes.navigation.querySelector('.sl-prev'));
          }
          if (_this5.currentImageIndex < _this5.relatedElements.length - 1) {
            _this5.show(_this5.domNodes.navigation.querySelector('.sl-next'));
          }
        } else {
          if (_this5.relatedElements.length === 1) {
            _this5.hide(_this5.domNodes.navigation.querySelectorAll('.sl-prev, .sl-next'));
          } else {
            _this5.show(_this5.domNodes.navigation.querySelectorAll('.sl-prev, .sl-next'));
          }
        }
        if (direction === 1 || direction === -1) {
          if (_this5.options.animationSlide) {
            _this5.slide(0, 100 * direction + 'px');
            setTimeout(function () {
              _this5.slide(_this5.options.animationSpeed / 1000, 0 + 'px');
            }, 50);
          }
          _this5.fadeIn(_this5.domNodes.image, _this5.options.fadeSpeed, function () {
            _this5.isAnimating = false;
            _this5.setCaption(captionText, imageWidth);
          });
        } else {
          _this5.isAnimating = false;
          _this5.setCaption(captionText, imageWidth);
        }
        if (_this5.options.additionalHtml && !_this5.domNodes.additionalHtml) {
          _this5.domNodes.additionalHtml = document.createElement('div');
          _this5.domNodes.additionalHtml.classList.add('sl-additional-html');
          _this5.domNodes.additionalHtml.innerHTML = _this5.options.additionalHtml;
          _this5.domNodes.image.appendChild(_this5.domNodes.additionalHtml);
        }
        if (_this5.options.download) {
          _this5.domNodes.downloadLink.setAttribute('href', _this5.currentImage.getAttribute('src'));
        }
      });
    }
  }, {
    key: "zoomPanElement",
    value: function zoomPanElement(targetOffsetX, targetOffsetY, targetScale) {
      this.currentImage.style[this.transitionPrefix + 'transform'] = 'translate(' + targetOffsetX + ',' + targetOffsetY + ') scale(' + targetScale + ')';
    }
  }, {
    key: "minMax",
    value: function minMax(value, min, max) {
      return value < min ? min : value > max ? max : value;
    }
  }, {
    key: "setZoomData",
    value: function setZoomData(initialScale, targetOffsetX, targetOffsetY) {
      this.currentImage.dataset.scale = initialScale;
      this.currentImage.dataset.translateX = targetOffsetX;
      this.currentImage.dataset.translateY = targetOffsetY;
    }
  }, {
    key: "hashchangeHandler",
    value: function hashchangeHandler() {
      if (this.isOpen && this.hash === this.initialLocationHash) {
        this.hashReseted = true;
        this.close();
      }
    }
  }, {
    key: "addEvents",
    value: function addEvents() {
      var _this6 = this;
      // resize/responsive
      this.addEventListener(window, 'resize.' + this.eventNamespace, function (event) {
        //this.adjustImage.bind(this)
        if (_this6.isOpen) {
          _this6.adjustImage();
        }
      });
      this.addEventListener(this.domNodes.closeButton, ['click.' + this.eventNamespace, 'touchstart.' + this.eventNamespace], this.close.bind(this));
      if (this.options.history) {
        setTimeout(function () {
          _this6.addEventListener(window, 'hashchange.' + _this6.eventNamespace, function (event) {
            if (_this6.isOpen) {
              _this6.hashchangeHandler();
            }
          });
        }, 40);
      }
      this.addEventListener(this.domNodes.navigation.getElementsByTagName('button'), 'click.' + this.eventNamespace, function (event) {
        if (!event.currentTarget.tagName.match(/button/i)) {
          return true;
        }
        event.preventDefault();
        _this6.controlCoordinates.swipeDiff = 0;
        _this6.loadImage(event.currentTarget.classList.contains('sl-next') ? 1 : -1);
      });
      if (this.options.scrollZoom) {
        var scale = 1;
        this.addEventListener(this.domNodes.image, ['mousewheel', 'DOMMouseScroll'], function (event) {
          if (_this6.controlCoordinates.mousedown || _this6.isAnimating || _this6.isClosing || !_this6.isOpen) {
            return true;
          }
          if (_this6.controlCoordinates.containerHeight == 0) {
            _this6.controlCoordinates.containerHeight = _this6.getDimensions(_this6.domNodes.image).height;
            _this6.controlCoordinates.containerWidth = _this6.getDimensions(_this6.domNodes.image).width;
            _this6.controlCoordinates.imgHeight = _this6.getDimensions(_this6.currentImage).height;
            _this6.controlCoordinates.imgWidth = _this6.getDimensions(_this6.currentImage).width;
            _this6.controlCoordinates.containerOffsetX = _this6.domNodes.image.offsetLeft;
            _this6.controlCoordinates.containerOffsetY = _this6.domNodes.image.offsetTop;
            _this6.controlCoordinates.initialOffsetX = parseFloat(_this6.currentImage.dataset.translateX);
            _this6.controlCoordinates.initialOffsetY = parseFloat(_this6.currentImage.dataset.translateY);
          }
          event.preventDefault();
          var delta = event.delta || event.wheelDelta;
          if (delta === undefined) {
            //we are on firefox
            delta = event.detail;
          }
          delta = Math.max(-1, Math.min(1, delta)); // cap the delta to [-1,1] for cross browser consistency

          // apply zoom
          scale += delta * _this6.options.scrollZoomFactor * scale;
          scale = Math.max(1, Math.min(_this6.options.maxZoom, scale));
          _this6.controlCoordinates.targetScale = scale;
          var scrollTopPos = document.documentElement.scrollTop || document.body.scrollTop;
          _this6.controlCoordinates.pinchOffsetX = event.pageX;
          _this6.controlCoordinates.pinchOffsetY = event.pageY - scrollTopPos || 0; // need to substract the scroll position

          _this6.controlCoordinates.limitOffsetX = (_this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerWidth) / 2;
          _this6.controlCoordinates.limitOffsetY = (_this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerHeight) / 2;
          _this6.controlCoordinates.scaleDifference = _this6.controlCoordinates.targetScale - _this6.controlCoordinates.initialScale;
          _this6.controlCoordinates.targetOffsetX = _this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerWidth ? 0 : _this6.minMax(_this6.controlCoordinates.initialOffsetX - (_this6.controlCoordinates.pinchOffsetX - _this6.controlCoordinates.containerOffsetX - _this6.controlCoordinates.containerWidth / 2 - _this6.controlCoordinates.initialOffsetX) / (_this6.controlCoordinates.targetScale - _this6.controlCoordinates.scaleDifference) * _this6.controlCoordinates.scaleDifference, _this6.controlCoordinates.limitOffsetX * -1, _this6.controlCoordinates.limitOffsetX);
          _this6.controlCoordinates.targetOffsetY = _this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerHeight ? 0 : _this6.minMax(_this6.controlCoordinates.initialOffsetY - (_this6.controlCoordinates.pinchOffsetY - _this6.controlCoordinates.containerOffsetY - _this6.controlCoordinates.containerHeight / 2 - _this6.controlCoordinates.initialOffsetY) / (_this6.controlCoordinates.targetScale - _this6.controlCoordinates.scaleDifference) * _this6.controlCoordinates.scaleDifference, _this6.controlCoordinates.limitOffsetY * -1, _this6.controlCoordinates.limitOffsetY);
          _this6.zoomPanElement(_this6.controlCoordinates.targetOffsetX + "px", _this6.controlCoordinates.targetOffsetY + "px", _this6.controlCoordinates.targetScale);
          if (_this6.controlCoordinates.targetScale > 1) {
            _this6.controlCoordinates.zoomed = true;
            if ((!_this6.domNodes.caption.style.opacity || _this6.domNodes.caption.style.opacity > 0) && _this6.domNodes.caption.style.display !== 'none') {
              _this6.fadeOut(_this6.domNodes.caption, _this6.options.fadeSpeed);
            }
          } else {
            if (_this6.controlCoordinates.initialScale === 1) {
              _this6.controlCoordinates.zoomed = false;
              if (_this6.domNodes.caption.style.display === 'none') {
                _this6.fadeIn(_this6.domNodes.caption, _this6.options.fadeSpeed);
              }
            }
            _this6.controlCoordinates.initialPinchDistance = null;
            _this6.controlCoordinates.capture = false;
          }
          _this6.controlCoordinates.initialPinchDistance = _this6.controlCoordinates.targetPinchDistance;
          _this6.controlCoordinates.initialScale = _this6.controlCoordinates.targetScale;
          _this6.controlCoordinates.initialOffsetX = _this6.controlCoordinates.targetOffsetX;
          _this6.controlCoordinates.initialOffsetY = _this6.controlCoordinates.targetOffsetY;
          _this6.setZoomData(_this6.controlCoordinates.targetScale, _this6.controlCoordinates.targetOffsetX, _this6.controlCoordinates.targetOffsetY);
          _this6.zoomPanElement(_this6.controlCoordinates.targetOffsetX + "px", _this6.controlCoordinates.targetOffsetY + "px", _this6.controlCoordinates.targetScale);
        });
      }
      this.addEventListener(this.domNodes.image, ['touchstart.' + this.eventNamespace, 'mousedown.' + this.eventNamespace], function (event) {
        if (event.target.tagName === 'A' && event.type === 'touchstart') {
          return true;
        }
        if (event.type === 'mousedown') {
          event.preventDefault();
          _this6.controlCoordinates.initialPointerOffsetX = event.clientX;
          _this6.controlCoordinates.initialPointerOffsetY = event.clientY;
          _this6.controlCoordinates.containerHeight = _this6.getDimensions(_this6.domNodes.image).height;
          _this6.controlCoordinates.containerWidth = _this6.getDimensions(_this6.domNodes.image).width;
          _this6.controlCoordinates.imgHeight = _this6.getDimensions(_this6.currentImage).height;
          _this6.controlCoordinates.imgWidth = _this6.getDimensions(_this6.currentImage).width;
          _this6.controlCoordinates.containerOffsetX = _this6.domNodes.image.offsetLeft;
          _this6.controlCoordinates.containerOffsetY = _this6.domNodes.image.offsetTop;
          _this6.controlCoordinates.initialOffsetX = parseFloat(_this6.currentImage.dataset.translateX);
          _this6.controlCoordinates.initialOffsetY = parseFloat(_this6.currentImage.dataset.translateY);
          _this6.controlCoordinates.capture = true;
        } else {
          _this6.controlCoordinates.touchCount = event.touches.length;
          _this6.controlCoordinates.initialPointerOffsetX = event.touches[0].clientX;
          _this6.controlCoordinates.initialPointerOffsetY = event.touches[0].clientY;
          _this6.controlCoordinates.containerHeight = _this6.getDimensions(_this6.domNodes.image).height;
          _this6.controlCoordinates.containerWidth = _this6.getDimensions(_this6.domNodes.image).width;
          _this6.controlCoordinates.imgHeight = _this6.getDimensions(_this6.currentImage).height;
          _this6.controlCoordinates.imgWidth = _this6.getDimensions(_this6.currentImage).width;
          _this6.controlCoordinates.containerOffsetX = _this6.domNodes.image.offsetLeft;
          _this6.controlCoordinates.containerOffsetY = _this6.domNodes.image.offsetTop;
          if (_this6.controlCoordinates.touchCount === 1) /* Single touch */{
              if (!_this6.controlCoordinates.doubleTapped) {
                _this6.controlCoordinates.doubleTapped = true;
                setTimeout(function () {
                  _this6.controlCoordinates.doubleTapped = false;
                }, 300);
              } else {
                _this6.currentImage.classList.add('sl-transition');
                if (!_this6.controlCoordinates.zoomed) {
                  _this6.controlCoordinates.initialScale = _this6.options.doubleTapZoom;
                  _this6.setZoomData(_this6.controlCoordinates.initialScale, 0, 0);
                  _this6.zoomPanElement(0 + "px", 0 + "px", _this6.controlCoordinates.initialScale);
                  if ((!_this6.domNodes.caption.style.opacity || _this6.domNodes.caption.style.opacity > 0) && _this6.domNodes.caption.style.display !== 'none') {
                    _this6.fadeOut(_this6.domNodes.caption, _this6.options.fadeSpeed);
                  }
                  _this6.controlCoordinates.zoomed = true;
                } else {
                  _this6.controlCoordinates.initialScale = 1;
                  _this6.setZoomData(_this6.controlCoordinates.initialScale, 0, 0);
                  _this6.zoomPanElement(0 + "px", 0 + "px", _this6.controlCoordinates.initialScale);
                  _this6.controlCoordinates.zoomed = false;
                }
                setTimeout(function () {
                  if (_this6.currentImage) {
                    _this6.currentImage.classList.remove('sl-transition');
                  }
                }, 200);
                return false;
              }
              _this6.controlCoordinates.initialOffsetX = parseFloat(_this6.currentImage.dataset.translateX);
              _this6.controlCoordinates.initialOffsetY = parseFloat(_this6.currentImage.dataset.translateY);
            } else if (_this6.controlCoordinates.touchCount === 2) /* Pinch */{
              _this6.controlCoordinates.initialPointerOffsetX2 = event.touches[1].clientX;
              _this6.controlCoordinates.initialPointerOffsetY2 = event.touches[1].clientY;
              _this6.controlCoordinates.initialOffsetX = parseFloat(_this6.currentImage.dataset.translateX);
              _this6.controlCoordinates.initialOffsetY = parseFloat(_this6.currentImage.dataset.translateY);
              _this6.controlCoordinates.pinchOffsetX = (_this6.controlCoordinates.initialPointerOffsetX + _this6.controlCoordinates.initialPointerOffsetX2) / 2;
              _this6.controlCoordinates.pinchOffsetY = (_this6.controlCoordinates.initialPointerOffsetY + _this6.controlCoordinates.initialPointerOffsetY2) / 2;
              _this6.controlCoordinates.initialPinchDistance = Math.sqrt((_this6.controlCoordinates.initialPointerOffsetX - _this6.controlCoordinates.initialPointerOffsetX2) * (_this6.controlCoordinates.initialPointerOffsetX - _this6.controlCoordinates.initialPointerOffsetX2) + (_this6.controlCoordinates.initialPointerOffsetY - _this6.controlCoordinates.initialPointerOffsetY2) * (_this6.controlCoordinates.initialPointerOffsetY - _this6.controlCoordinates.initialPointerOffsetY2));
            }
          _this6.controlCoordinates.capture = true;
        }
        if (_this6.controlCoordinates.mousedown) return true;
        if (_this6.transitionCapable) {
          _this6.controlCoordinates.imageLeft = parseInt(_this6.domNodes.image.style.left, 10);
        }
        _this6.controlCoordinates.mousedown = true;
        _this6.controlCoordinates.swipeDiff = 0;
        _this6.controlCoordinates.swipeYDiff = 0;
        _this6.controlCoordinates.swipeStart = event.pageX || event.touches[0].pageX;
        _this6.controlCoordinates.swipeYStart = event.pageY || event.touches[0].pageY;
        return false;
      });
      this.addEventListener(this.domNodes.image, ['touchmove.' + this.eventNamespace, 'mousemove.' + this.eventNamespace, 'MSPointerMove'], function (event) {
        if (!_this6.controlCoordinates.mousedown) {
          return true;
        }
        if (event.type === 'touchmove') {
          if (_this6.controlCoordinates.capture === false) {
            return false;
          }
          _this6.controlCoordinates.pointerOffsetX = event.touches[0].clientX;
          _this6.controlCoordinates.pointerOffsetY = event.touches[0].clientY;
          _this6.controlCoordinates.touchCount = event.touches.length;
          _this6.controlCoordinates.touchmoveCount++;
          if (_this6.controlCoordinates.touchCount > 1) /* Pinch */{
              _this6.controlCoordinates.pointerOffsetX2 = event.touches[1].clientX;
              _this6.controlCoordinates.pointerOffsetY2 = event.touches[1].clientY;
              _this6.controlCoordinates.targetPinchDistance = Math.sqrt((_this6.controlCoordinates.pointerOffsetX - _this6.controlCoordinates.pointerOffsetX2) * (_this6.controlCoordinates.pointerOffsetX - _this6.controlCoordinates.pointerOffsetX2) + (_this6.controlCoordinates.pointerOffsetY - _this6.controlCoordinates.pointerOffsetY2) * (_this6.controlCoordinates.pointerOffsetY - _this6.controlCoordinates.pointerOffsetY2));
              if (_this6.controlCoordinates.initialPinchDistance === null) {
                _this6.controlCoordinates.initialPinchDistance = _this6.controlCoordinates.targetPinchDistance;
              }
              if (Math.abs(_this6.controlCoordinates.initialPinchDistance - _this6.controlCoordinates.targetPinchDistance) >= 1) {
                /* Initialize helpers */
                _this6.controlCoordinates.targetScale = _this6.minMax(_this6.controlCoordinates.targetPinchDistance / _this6.controlCoordinates.initialPinchDistance * _this6.controlCoordinates.initialScale, 1, _this6.options.maxZoom);
                _this6.controlCoordinates.limitOffsetX = (_this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerWidth) / 2;
                _this6.controlCoordinates.limitOffsetY = (_this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerHeight) / 2;
                _this6.controlCoordinates.scaleDifference = _this6.controlCoordinates.targetScale - _this6.controlCoordinates.initialScale;
                _this6.controlCoordinates.targetOffsetX = _this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerWidth ? 0 : _this6.minMax(_this6.controlCoordinates.initialOffsetX - (_this6.controlCoordinates.pinchOffsetX - _this6.controlCoordinates.containerOffsetX - _this6.controlCoordinates.containerWidth / 2 - _this6.controlCoordinates.initialOffsetX) / (_this6.controlCoordinates.targetScale - _this6.controlCoordinates.scaleDifference) * _this6.controlCoordinates.scaleDifference, _this6.controlCoordinates.limitOffsetX * -1, _this6.controlCoordinates.limitOffsetX);
                _this6.controlCoordinates.targetOffsetY = _this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerHeight ? 0 : _this6.minMax(_this6.controlCoordinates.initialOffsetY - (_this6.controlCoordinates.pinchOffsetY - _this6.controlCoordinates.containerOffsetY - _this6.controlCoordinates.containerHeight / 2 - _this6.controlCoordinates.initialOffsetY) / (_this6.controlCoordinates.targetScale - _this6.controlCoordinates.scaleDifference) * _this6.controlCoordinates.scaleDifference, _this6.controlCoordinates.limitOffsetY * -1, _this6.controlCoordinates.limitOffsetY);
                _this6.zoomPanElement(_this6.controlCoordinates.targetOffsetX + "px", _this6.controlCoordinates.targetOffsetY + "px", _this6.controlCoordinates.targetScale);
                if (_this6.controlCoordinates.targetScale > 1) {
                  _this6.controlCoordinates.zoomed = true;
                  if ((!_this6.domNodes.caption.style.opacity || _this6.domNodes.caption.style.opacity > 0) && _this6.domNodes.caption.style.display !== 'none') {
                    _this6.fadeOut(_this6.domNodes.caption, _this6.options.fadeSpeed);
                  }
                }
                _this6.controlCoordinates.initialPinchDistance = _this6.controlCoordinates.targetPinchDistance;
                _this6.controlCoordinates.initialScale = _this6.controlCoordinates.targetScale;
                _this6.controlCoordinates.initialOffsetX = _this6.controlCoordinates.targetOffsetX;
                _this6.controlCoordinates.initialOffsetY = _this6.controlCoordinates.targetOffsetY;
              }
            } else {
            _this6.controlCoordinates.targetScale = _this6.controlCoordinates.initialScale;
            _this6.controlCoordinates.limitOffsetX = (_this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerWidth) / 2;
            _this6.controlCoordinates.limitOffsetY = (_this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerHeight) / 2;
            _this6.controlCoordinates.targetOffsetX = _this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerWidth ? 0 : _this6.minMax(_this6.controlCoordinates.pointerOffsetX - (_this6.controlCoordinates.initialPointerOffsetX - _this6.controlCoordinates.initialOffsetX), _this6.controlCoordinates.limitOffsetX * -1, _this6.controlCoordinates.limitOffsetX);
            _this6.controlCoordinates.targetOffsetY = _this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerHeight ? 0 : _this6.minMax(_this6.controlCoordinates.pointerOffsetY - (_this6.controlCoordinates.initialPointerOffsetY - _this6.controlCoordinates.initialOffsetY), _this6.controlCoordinates.limitOffsetY * -1, _this6.controlCoordinates.limitOffsetY);
            if (Math.abs(_this6.controlCoordinates.targetOffsetX) === Math.abs(_this6.controlCoordinates.limitOffsetX)) {
              _this6.controlCoordinates.initialOffsetX = _this6.controlCoordinates.targetOffsetX;
              _this6.controlCoordinates.initialPointerOffsetX = _this6.controlCoordinates.pointerOffsetX;
            }
            if (Math.abs(_this6.controlCoordinates.targetOffsetY) === Math.abs(_this6.controlCoordinates.limitOffsetY)) {
              _this6.controlCoordinates.initialOffsetY = _this6.controlCoordinates.targetOffsetY;
              _this6.controlCoordinates.initialPointerOffsetY = _this6.controlCoordinates.pointerOffsetY;
            }
            _this6.setZoomData(_this6.controlCoordinates.initialScale, _this6.controlCoordinates.targetOffsetX, _this6.controlCoordinates.targetOffsetY);
            _this6.zoomPanElement(_this6.controlCoordinates.targetOffsetX + "px", _this6.controlCoordinates.targetOffsetY + "px", _this6.controlCoordinates.targetScale);
          }
        }

        /* Mouse Move implementation */
        if (event.type === 'mousemove' && _this6.controlCoordinates.mousedown) {
          if (event.type == 'touchmove') return true;
          event.preventDefault();
          if (_this6.controlCoordinates.capture === false) return false;
          _this6.controlCoordinates.pointerOffsetX = event.clientX;
          _this6.controlCoordinates.pointerOffsetY = event.clientY;
          _this6.controlCoordinates.targetScale = _this6.controlCoordinates.initialScale;
          _this6.controlCoordinates.limitOffsetX = (_this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerWidth) / 2;
          _this6.controlCoordinates.limitOffsetY = (_this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerHeight) / 2;
          _this6.controlCoordinates.targetOffsetX = _this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerWidth ? 0 : _this6.minMax(_this6.controlCoordinates.pointerOffsetX - (_this6.controlCoordinates.initialPointerOffsetX - _this6.controlCoordinates.initialOffsetX), _this6.controlCoordinates.limitOffsetX * -1, _this6.controlCoordinates.limitOffsetX);
          _this6.controlCoordinates.targetOffsetY = _this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerHeight ? 0 : _this6.minMax(_this6.controlCoordinates.pointerOffsetY - (_this6.controlCoordinates.initialPointerOffsetY - _this6.controlCoordinates.initialOffsetY), _this6.controlCoordinates.limitOffsetY * -1, _this6.controlCoordinates.limitOffsetY);
          if (Math.abs(_this6.controlCoordinates.targetOffsetX) === Math.abs(_this6.controlCoordinates.limitOffsetX)) {
            _this6.controlCoordinates.initialOffsetX = _this6.controlCoordinates.targetOffsetX;
            _this6.controlCoordinates.initialPointerOffsetX = _this6.controlCoordinates.pointerOffsetX;
          }
          if (Math.abs(_this6.controlCoordinates.targetOffsetY) === Math.abs(_this6.controlCoordinates.limitOffsetY)) {
            _this6.controlCoordinates.initialOffsetY = _this6.controlCoordinates.targetOffsetY;
            _this6.controlCoordinates.initialPointerOffsetY = _this6.controlCoordinates.pointerOffsetY;
          }
          _this6.setZoomData(_this6.controlCoordinates.initialScale, _this6.controlCoordinates.targetOffsetX, _this6.controlCoordinates.targetOffsetY);
          _this6.zoomPanElement(_this6.controlCoordinates.targetOffsetX + "px", _this6.controlCoordinates.targetOffsetY + "px", _this6.controlCoordinates.targetScale);
        }
        if (!_this6.controlCoordinates.zoomed) {
          _this6.controlCoordinates.swipeEnd = event.pageX || event.touches[0].pageX;
          _this6.controlCoordinates.swipeYEnd = event.pageY || event.touches[0].pageY;
          _this6.controlCoordinates.swipeDiff = _this6.controlCoordinates.swipeStart - _this6.controlCoordinates.swipeEnd;
          _this6.controlCoordinates.swipeYDiff = _this6.controlCoordinates.swipeYStart - _this6.controlCoordinates.swipeYEnd;
          if (_this6.options.animationSlide) {
            _this6.slide(0, -_this6.controlCoordinates.swipeDiff + 'px');
          }
        }
      });
      this.addEventListener(this.domNodes.image, ['touchend.' + this.eventNamespace, 'mouseup.' + this.eventNamespace, 'touchcancel.' + this.eventNamespace, 'mouseleave.' + this.eventNamespace, 'pointerup', 'pointercancel', 'MSPointerUp', 'MSPointerCancel'], function (event) {
        if (_this6.isTouchDevice && event.type === 'touchend') {
          _this6.controlCoordinates.touchCount = event.touches.length;
          if (_this6.controlCoordinates.touchCount === 0) /* No touch */{
              /* Set attributes */
              if (_this6.currentImage) {
                _this6.setZoomData(_this6.controlCoordinates.initialScale, _this6.controlCoordinates.targetOffsetX, _this6.controlCoordinates.targetOffsetY);
              }
              if (_this6.controlCoordinates.initialScale === 1) {
                _this6.controlCoordinates.zoomed = false;
                if (_this6.domNodes.caption.style.display === 'none') {
                  _this6.fadeIn(_this6.domNodes.caption, _this6.options.fadeSpeed);
                }
              }
              _this6.controlCoordinates.initialPinchDistance = null;
              _this6.controlCoordinates.capture = false;
            } else if (_this6.controlCoordinates.touchCount === 1) /* Single touch */{
              _this6.controlCoordinates.initialPointerOffsetX = event.touches[0].clientX;
              _this6.controlCoordinates.initialPointerOffsetY = event.touches[0].clientY;
            } else if (_this6.controlCoordinates.touchCount > 1) /* Pinch */{
              _this6.controlCoordinates.initialPinchDistance = null;
            }
        }
        if (_this6.controlCoordinates.mousedown) {
          _this6.controlCoordinates.mousedown = false;
          var possibleDir = true;
          if (!_this6.options.loop) {
            if (_this6.currentImageIndex === 0 && _this6.controlCoordinates.swipeDiff < 0) {
              possibleDir = false;
            }
            if (_this6.currentImageIndex >= _this6.relatedElements.length - 1 && _this6.controlCoordinates.swipeDiff > 0) {
              possibleDir = false;
            }
          }
          if (Math.abs(_this6.controlCoordinates.swipeDiff) > _this6.options.swipeTolerance && possibleDir) {
            _this6.loadImage(_this6.controlCoordinates.swipeDiff > 0 ? 1 : -1);
          } else if (_this6.options.animationSlide) {
            _this6.slide(_this6.options.animationSpeed / 1000, 0 + 'px');
          }
          if (_this6.options.swipeClose && Math.abs(_this6.controlCoordinates.swipeYDiff) > 50 && Math.abs(_this6.controlCoordinates.swipeDiff) < _this6.options.swipeTolerance) {
            _this6.close();
          }
        }
      });
      this.addEventListener(this.domNodes.image, ['dblclick'], function (event) {
        if (_this6.isTouchDevice) return;
        _this6.controlCoordinates.initialPointerOffsetX = event.clientX;
        _this6.controlCoordinates.initialPointerOffsetY = event.clientY;
        _this6.controlCoordinates.containerHeight = _this6.getDimensions(_this6.domNodes.image).height;
        _this6.controlCoordinates.containerWidth = _this6.getDimensions(_this6.domNodes.image).width;
        _this6.controlCoordinates.imgHeight = _this6.getDimensions(_this6.currentImage).height;
        _this6.controlCoordinates.imgWidth = _this6.getDimensions(_this6.currentImage).width;
        _this6.controlCoordinates.containerOffsetX = _this6.domNodes.image.offsetLeft;
        _this6.controlCoordinates.containerOffsetY = _this6.domNodes.image.offsetTop;
        _this6.currentImage.classList.add('sl-transition');
        if (!_this6.controlCoordinates.zoomed) {
          _this6.controlCoordinates.initialScale = _this6.options.doubleTapZoom;
          _this6.setZoomData(_this6.controlCoordinates.initialScale, 0, 0);
          _this6.zoomPanElement(0 + "px", 0 + "px", _this6.controlCoordinates.initialScale);
          if ((!_this6.domNodes.caption.style.opacity || _this6.domNodes.caption.style.opacity > 0) && _this6.domNodes.caption.style.display !== 'none') {
            _this6.fadeOut(_this6.domNodes.caption, _this6.options.fadeSpeed);
          }
          _this6.controlCoordinates.zoomed = true;
        } else {
          _this6.controlCoordinates.initialScale = 1;
          _this6.setZoomData(_this6.controlCoordinates.initialScale, 0, 0);
          _this6.zoomPanElement(0 + "px", 0 + "px", _this6.controlCoordinates.initialScale);
          _this6.controlCoordinates.zoomed = false;
          if (_this6.domNodes.caption.style.display === 'none') {
            _this6.fadeIn(_this6.domNodes.caption, _this6.options.fadeSpeed);
          }
        }
        setTimeout(function () {
          if (_this6.currentImage) {
            _this6.currentImage.classList.remove('sl-transition');
            _this6.currentImage.style[_this6.transitionPrefix + 'transform-origin'] = null;
          }
        }, 200);
        _this6.controlCoordinates.capture = true;
        return false;
      });
    }
  }, {
    key: "getDimensions",
    value: function getDimensions(element) {
      var styles = window.getComputedStyle(element),
        height = element.offsetHeight,
        width = element.offsetWidth,
        borderTopWidth = parseFloat(styles.borderTopWidth),
        borderBottomWidth = parseFloat(styles.borderBottomWidth),
        paddingTop = parseFloat(styles.paddingTop),
        paddingBottom = parseFloat(styles.paddingBottom),
        borderLeftWidth = parseFloat(styles.borderLeftWidth),
        borderRightWidth = parseFloat(styles.borderRightWidth),
        paddingLeft = parseFloat(styles.paddingLeft),
        paddingRight = parseFloat(styles.paddingRight);
      return {
        height: height - borderBottomWidth - borderTopWidth - paddingTop - paddingBottom,
        width: width - borderLeftWidth - borderRightWidth - paddingLeft - paddingRight
      };
    }
  }, {
    key: "updateHash",
    value: function updateHash() {
      var newHash = 'pid=' + (this.currentImageIndex + 1),
        newURL = window.location.href.split('#')[0] + '#' + newHash;
      this.hashReseted = false;
      if (this.pushStateSupport) {
        window.history[this.historyHasChanges ? 'replaceState' : 'pushState']('', document.title, newURL);
      } else {
        // what is the browser target of this?
        if (this.historyHasChanges) {
          window.location.replace(newURL);
        } else {
          window.location.hash = newHash;
        }
      }
      if (!this.historyHasChanges) {
        this.urlChangedOnce = true;
      }
      this.historyHasChanges = true;
    }
  }, {
    key: "resetHash",
    value: function resetHash() {
      this.hashReseted = true;
      if (this.urlChangedOnce) {
        history.back();
      } else {
        if (this.pushStateSupport) {
          history.pushState('', document.title, window.location.pathname + window.location.search);
        } else {
          window.location.hash = '';
        }
      }
      //
      //in case an history operation is still pending
      clearTimeout(this.historyUpdateTimeout);
    }
  }, {
    key: "updateURL",
    value: function updateURL() {
      clearTimeout(this.historyUpdateTimeout);
      if (!this.historyHasChanges) {
        this.updateHash(); // first time
      } else {
        this.historyUpdateTimeout = setTimeout(this.updateHash.bind(this), 800);
      }
    }
  }, {
    key: "setCaption",
    value: function setCaption(captionText, imageWidth) {
      var _this7 = this;
      if (this.options.captions && captionText && captionText !== '' && typeof captionText !== "undefined") {
        this.hide(this.domNodes.caption);
        this.domNodes.caption.style.width = imageWidth + 'px';
        this.domNodes.caption.innerHTML = captionText;
        this.domNodes.image.appendChild(this.domNodes.caption);
        setTimeout(function () {
          _this7.fadeIn(_this7.domNodes.caption, _this7.options.fadeSpeed);
        }, this.options.captionDelay);
      }
    }
  }, {
    key: "slide",
    value: function slide(speed, pos) {
      if (!this.transitionCapable) {
        return this.domNodes.image.style.left = pos;
      }
      this.domNodes.image.style[this.transitionPrefix + 'transform'] = 'translateX(' + pos + ')';
      this.domNodes.image.style[this.transitionPrefix + 'transition'] = this.transitionPrefix + 'transform ' + speed + 's linear';
    }
  }, {
    key: "getRelated",
    value: function getRelated(rel) {
      var elems;
      if (rel && rel !== false && rel !== 'nofollow') {
        elems = Array.from(this.elements).filter(function (element) {
          return element.getAttribute('rel') === rel;
        });
      } else {
        elems = this.elements;
      }
      return elems;
    }
  }, {
    key: "openImage",
    value: function openImage(element) {
      var _this8 = this;
      element.dispatchEvent(new Event('show.' + this.eventNamespace));
      this.globalScrollbarWidth = this.getScrollbarWidth();
      if (this.options.disableScroll) {
        this.toggleScrollbar('hide');
        this.globalScrollbarWidth = 0;
      }
      if (this.options.htmlClass && this.options.htmlClass !== '') {
        document.querySelector('html').classList.add(this.options.htmlClass);
      }
      document.body.appendChild(this.domNodes.wrapper);
      this.domNodes.wrapper.appendChild(this.domNodes.image);
      if (this.options.overlay) {
        document.body.appendChild(this.domNodes.overlay);
      }
      this.relatedElements = this.getRelated(element.rel);
      if (this.options.showCounter) {
        if (this.relatedElements.length == 1 && this.domNodes.wrapper.contains(this.domNodes.counter)) {
          this.domNodes.wrapper.removeChild(this.domNodes.counter);
        } else if (this.relatedElements.length > 1 && !this.domNodes.wrapper.contains(this.domNodes.counter)) {
          this.domNodes.wrapper.appendChild(this.domNodes.counter);
        }
      }
      if (this.options.download) {
        this.domNodes.wrapper.appendChild(this.domNodes.download);
      }
      this.isAnimating = true;
      this.currentImageIndex = this.relatedElements.indexOf(element);
      var targetURL = element.getAttribute(this.options.sourceAttr);
      this.currentImage = document.createElement('img');
      this.currentImage.style.display = 'none';
      this.currentImage.setAttribute('src', targetURL);
      this.currentImage.dataset.scale = 1;
      this.currentImage.dataset.translateX = 0;
      this.currentImage.dataset.translateY = 0;
      if (this.loadedImages.indexOf(targetURL) === -1) {
        this.loadedImages.push(targetURL);
      }
      this.domNodes.image.innerHTML = '';
      this.domNodes.image.setAttribute('style', '');
      this.domNodes.image.appendChild(this.currentImage);
      this.fadeIn(this.domNodes.overlay, this.options.fadeSpeed);
      this.fadeIn([this.domNodes.counter, this.domNodes.navigation, this.domNodes.closeButton, this.domNodes.download], this.options.fadeSpeed);
      this.show(this.domNodes.spinner);
      this.domNodes.counter.querySelector('.sl-current').innerHTML = this.currentImageIndex + 1;
      this.domNodes.counter.querySelector('.sl-total').innerHTML = this.relatedElements.length;
      this.adjustImage();
      if (this.options.preloading) {
        this.preload();
      }
      setTimeout(function () {
        element.dispatchEvent(new Event('shown.' + _this8.eventNamespace));
      }, this.options.animationSpeed);
    }
  }, {
    key: "forceFocus",
    value: function forceFocus() {
      var _this9 = this;
      this.removeEventListener(document, 'focusin.' + this.eventNamespace);
      this.addEventListener(document, 'focusin.' + this.eventNamespace, function (event) {
        if (document !== event.target && _this9.domNodes.wrapper !== event.target && !_this9.domNodes.wrapper.contains(event.target)) {
          _this9.domNodes.wrapper.focus();
        }
      });
    }

    // utility
  }, {
    key: "addEventListener",
    value: function addEventListener(elements, events, callback, opts) {
      elements = this.wrap(elements);
      events = this.wrap(events);
      var _iterator = _createForOfIteratorHelper(elements),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var element = _step.value;
          if (!element.namespaces) {
            element.namespaces = {};
          } // save the namespaces addEventListener the DOM element itself
          var _iterator2 = _createForOfIteratorHelper(events),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var event = _step2.value;
              var options = opts || false;
              var needsPassiveFix = ['touchstart', 'touchmove', 'mousewheel', 'DOMMouseScroll'].indexOf(event.split('.')[0]) >= 0;
              if (needsPassiveFix && this.isPassiveEventsSupported) {
                if (_typeof(options) === 'object') {
                  options.passive = true;
                } else {
                  options = {
                    passive: true
                  };
                }
              }
              element.namespaces[event] = callback;
              element.addEventListener(event.split('.')[0], callback, options);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(elements, events) {
      elements = this.wrap(elements);
      events = this.wrap(events);
      var _iterator3 = _createForOfIteratorHelper(elements),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var element = _step3.value;
          var _iterator4 = _createForOfIteratorHelper(events),
            _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var event = _step4.value;
              if (element.namespaces && element.namespaces[event]) {
                element.removeEventListener(event.split('.')[0], element.namespaces[event]);
                delete element.namespaces[event];
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }, {
    key: "fadeOut",
    value: function fadeOut(elements, duration, callback) {
      var _this10 = this;
      elements = this.wrap(elements);
      var _iterator5 = _createForOfIteratorHelper(elements),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var element = _step5.value;
          element.style.opacity = parseFloat(element) || window.getComputedStyle(element).getPropertyValue("opacity");
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      this.isFadeIn = false;
      var step = 16.66666 / (duration || this.options.fadeSpeed),
        fade = function fade() {
          var currentOpacity = parseFloat(elements[0].style.opacity);
          if ((currentOpacity -= step) < 0) {
            var _iterator6 = _createForOfIteratorHelper(elements),
              _step6;
            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var element = _step6.value;
                element.style.display = "none";
                // element.style.opacity = '';
                element.style.opacity = 1;
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
            callback && callback.call(_this10, elements);
          } else {
            var _iterator7 = _createForOfIteratorHelper(elements),
              _step7;
            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var _element = _step7.value;
                _element.style.opacity = currentOpacity;
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
            requestAnimationFrame(fade);
          }
        };
      fade();
    }
  }, {
    key: "fadeIn",
    value: function fadeIn(elements, duration, callback, display) {
      var _this11 = this;
      elements = this.wrap(elements);
      var _iterator8 = _createForOfIteratorHelper(elements),
        _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var element = _step8.value;
          if (element) {
            element.style.opacity = 0;
            element.style.display = display || "block";
          }
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      this.isFadeIn = true;
      var opacityTarget = parseFloat(elements[0].dataset.opacityTarget || 1),
        step = 16.66666 * opacityTarget / (duration || this.options.fadeSpeed),
        fade = function fade() {
          var currentOpacity = parseFloat(elements[0].style.opacity);
          if (!((currentOpacity += step) > opacityTarget)) {
            var _iterator9 = _createForOfIteratorHelper(elements),
              _step9;
            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var element = _step9.value;
                if (element) {
                  element.style.opacity = currentOpacity;
                }
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }
            if (!_this11.isFadeIn) return;
            requestAnimationFrame(fade);
          } else {
            var _iterator10 = _createForOfIteratorHelper(elements),
              _step10;
            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var _element2 = _step10.value;
                if (_element2) {
                  _element2.style.opacity = opacityTarget;
                }
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }
            callback && callback.call(_this11, elements);
          }
        };
      fade();
    }
  }, {
    key: "hide",
    value: function hide(elements) {
      elements = this.wrap(elements);
      var _iterator11 = _createForOfIteratorHelper(elements),
        _step11;
      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var element = _step11.value;
          if (element.style.display != 'none') {
            element.dataset.initialDisplay = element.style.display;
          }
          element.style.display = 'none';
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
    }
  }, {
    key: "show",
    value: function show(elements, display) {
      elements = this.wrap(elements);
      var _iterator12 = _createForOfIteratorHelper(elements),
        _step12;
      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var element = _step12.value;
          element.style.display = element.dataset.initialDisplay || display || 'block';
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }
    }
  }, {
    key: "wrap",
    value: function wrap(input) {
      return typeof input[Symbol.iterator] === 'function' && typeof input !== 'string' ? input : [input];
    }
  }, {
    key: "on",
    value: function on(events, callback) {
      events = this.wrap(events);
      var _iterator13 = _createForOfIteratorHelper(this.elements),
        _step13;
      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var element = _step13.value;
          if (!element.fullyNamespacedEvents) {
            element.fullyNamespacedEvents = {};
          }
          var _iterator14 = _createForOfIteratorHelper(events),
            _step14;
          try {
            for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
              var event = _step14.value;
              element.fullyNamespacedEvents[event] = callback;
              element.addEventListener(event, callback);
            }
          } catch (err) {
            _iterator14.e(err);
          } finally {
            _iterator14.f();
          }
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }
      return this;
    }
  }, {
    key: "off",
    value: function off(events) {
      events = this.wrap(events);
      var _iterator15 = _createForOfIteratorHelper(this.elements),
        _step15;
      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
          var element = _step15.value;
          var _iterator16 = _createForOfIteratorHelper(events),
            _step16;
          try {
            for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
              var event = _step16.value;
              if (typeof element.fullyNamespacedEvents !== 'undefined' && event in element.fullyNamespacedEvents) {
                element.removeEventListener(event, element.fullyNamespacedEvents[event]);
              }
            }
          } catch (err) {
            _iterator16.e(err);
          } finally {
            _iterator16.f();
          }
        }
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }
      return this;
    }

    // api
  }, {
    key: "open",
    value: function open(elem) {
      elem = elem || this.elements[0];
      if (typeof jQuery !== "undefined" && elem instanceof jQuery) {
        elem = elem.get(0);
      }
      this.initialImageIndex = this.elements.indexOf(elem);
      if (this.initialImageIndex > -1) {
        this.openImage(elem);
      }
    }
  }, {
    key: "next",
    value: function next() {
      this.loadImage(1);
    }
  }, {
    key: "prev",
    value: function prev() {
      this.loadImage(-1);
    }

    // get some useful data
  }, {
    key: "getLighboxData",
    value: function getLighboxData() {
      return {
        currentImageIndex: this.currentImageIndex,
        currentImage: this.currentImage,
        globalScrollbarWidth: this.globalScrollbarWidth
      };
    }

    //close is exposed anyways..
  }, {
    key: "destroy",
    value: function destroy() {
      //remove all custom event listeners from elements
      this.off(['close.' + this.eventNamespace, 'closed.' + this.eventNamespace, 'nextImageLoaded.' + this.eventNamespace, 'prevImageLoaded.' + this.eventNamespace, 'change.' + this.eventNamespace, 'nextDone.' + this.eventNamespace, 'prevDone.' + this.eventNamespace, 'error.' + this.eventNamespace, 'changed.' + this.eventNamespace, 'next.' + this.eventNamespace, 'prev.' + this.eventNamespace, 'show.' + this.eventNamespace, 'shown.' + this.eventNamespace]);
      this.removeEventListener(this.elements, 'click.' + this.eventNamespace);
      this.removeEventListener(document, 'focusin.' + this.eventNamespace);
      this.removeEventListener(document.body, 'contextmenu.' + this.eventNamespace);
      this.removeEventListener(document.body, 'keyup.' + this.eventNamespace);
      this.removeEventListener(this.domNodes.navigation.getElementsByTagName('button'), 'click.' + this.eventNamespace);
      this.removeEventListener(this.domNodes.closeButton, 'click.' + this.eventNamespace);
      this.removeEventListener(window, 'resize.' + this.eventNamespace);
      this.removeEventListener(window, 'hashchange.' + this.eventNamespace);
      this.close();
      if (this.isOpen) {
        document.body.removeChild(this.domNodes.wrapper);
        document.body.removeChild(this.domNodes.overlay);
      }
      this.elements = null;
    }
  }, {
    key: "refresh",
    value: function refresh() {
      if (!this.initialSelector) {
        throw 'refreshing only works when you initialize using a selector!';
      }
      var options = this.options,
        selector = this.initialSelector;
      this.destroy();
      this.constructor(selector, options);
      return this;
    }
  }]);
  return SimpleLightbox;
}();
var _default = SimpleLightbox;
exports["default"] = _default;
global.SimpleLightbox = SimpleLightbox;
},{}],"../node_modules/handlebars/dist/handlebars.runtime.js":[function(require,module,exports) {
var define;
var global = arguments[3];
/**!

 @license
 handlebars v4.7.7

Copyright (C) 2011-2019 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else if (typeof exports === 'object') exports["Handlebars"] = factory();else root["Handlebars"] = factory();
})(this, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/
      var installedModules = {};

      /******/ // The require function
      /******/
      function __webpack_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) /******/return installedModules[moduleId].exports;

        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
          /******/exports: {},
          /******/id: moduleId,
          /******/loaded: false
          /******/
        };

        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

        /******/ // Flag the module as loaded
        /******/
        module.loaded = true;

        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
      }

      /******/ // expose the modules object (__webpack_modules__)
      /******/
      __webpack_require__.m = modules;

      /******/ // expose the module cache
      /******/
      __webpack_require__.c = installedModules;

      /******/ // __webpack_public_path__
      /******/
      __webpack_require__.p = "";

      /******/ // Load entry module and return exports
      /******/
      return __webpack_require__(0);
      /******/
    }
    /************************************************************************/
    /******/([/* 0 */
    /***/function (module, exports, __webpack_require__) {
      'use strict';

      var _interopRequireWildcard = __webpack_require__(1)['default'];
      var _interopRequireDefault = __webpack_require__(2)['default'];
      exports.__esModule = true;
      var _handlebarsBase = __webpack_require__(3);
      var base = _interopRequireWildcard(_handlebarsBase);

      // Each of these augment the Handlebars object. No need to setup here.
      // (This is done to easily share code between commonjs and browse envs)

      var _handlebarsSafeString = __webpack_require__(36);
      var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);
      var _handlebarsException = __webpack_require__(5);
      var _handlebarsException2 = _interopRequireDefault(_handlebarsException);
      var _handlebarsUtils = __webpack_require__(4);
      var Utils = _interopRequireWildcard(_handlebarsUtils);
      var _handlebarsRuntime = __webpack_require__(37);
      var runtime = _interopRequireWildcard(_handlebarsRuntime);
      var _handlebarsNoConflict = __webpack_require__(43);
      var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

      // For compatibility and usage outside of module systems, make the Handlebars object a namespace
      function create() {
        var hb = new base.HandlebarsEnvironment();
        Utils.extend(hb, base);
        hb.SafeString = _handlebarsSafeString2['default'];
        hb.Exception = _handlebarsException2['default'];
        hb.Utils = Utils;
        hb.escapeExpression = Utils.escapeExpression;
        hb.VM = runtime;
        hb.template = function (spec) {
          return runtime.template(spec, hb);
        };
        return hb;
      }
      var inst = create();
      inst.create = create;
      _handlebarsNoConflict2['default'](inst);
      inst['default'] = inst;
      exports['default'] = inst;
      module.exports = exports['default'];

      /***/
    }, /* 1 */
    /***/function (module, exports) {
      "use strict";

      exports["default"] = function (obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};
          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
          }
          newObj["default"] = obj;
          return newObj;
        }
      };
      exports.__esModule = true;

      /***/
    }, /* 2 */
    /***/function (module, exports) {
      "use strict";

      exports["default"] = function (obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      };
      exports.__esModule = true;

      /***/
    }, /* 3 */
    /***/function (module, exports, __webpack_require__) {
      'use strict';

      var _interopRequireDefault = __webpack_require__(2)['default'];
      exports.__esModule = true;
      exports.HandlebarsEnvironment = HandlebarsEnvironment;
      var _utils = __webpack_require__(4);
      var _exception = __webpack_require__(5);
      var _exception2 = _interopRequireDefault(_exception);
      var _helpers = __webpack_require__(9);
      var _decorators = __webpack_require__(29);
      var _logger = __webpack_require__(31);
      var _logger2 = _interopRequireDefault(_logger);
      var _internalProtoAccess = __webpack_require__(32);
      var VERSION = '4.7.7';
      exports.VERSION = VERSION;
      var COMPILER_REVISION = 8;
      exports.COMPILER_REVISION = COMPILER_REVISION;
      var LAST_COMPATIBLE_COMPILER_REVISION = 7;
      exports.LAST_COMPATIBLE_COMPILER_REVISION = LAST_COMPATIBLE_COMPILER_REVISION;
      var REVISION_CHANGES = {
        1: '<= 1.0.rc.2',
        // 1.0.rc.2 is actually rev2 but doesn't report it
        2: '== 1.0.0-rc.3',
        3: '== 1.0.0-rc.4',
        4: '== 1.x.x',
        5: '== 2.0.0-alpha.x',
        6: '>= 2.0.0-beta.1',
        7: '>= 4.0.0 <4.3.0',
        8: '>= 4.3.0'
      };
      exports.REVISION_CHANGES = REVISION_CHANGES;
      var objectType = '[object Object]';
      function HandlebarsEnvironment(helpers, partials, decorators) {
        this.helpers = helpers || {};
        this.partials = partials || {};
        this.decorators = decorators || {};
        _helpers.registerDefaultHelpers(this);
        _decorators.registerDefaultDecorators(this);
      }
      HandlebarsEnvironment.prototype = {
        constructor: HandlebarsEnvironment,
        logger: _logger2['default'],
        log: _logger2['default'].log,
        registerHelper: function registerHelper(name, fn) {
          if (_utils.toString.call(name) === objectType) {
            if (fn) {
              throw new _exception2['default']('Arg not supported with multiple helpers');
            }
            _utils.extend(this.helpers, name);
          } else {
            this.helpers[name] = fn;
          }
        },
        unregisterHelper: function unregisterHelper(name) {
          delete this.helpers[name];
        },
        registerPartial: function registerPartial(name, partial) {
          if (_utils.toString.call(name) === objectType) {
            _utils.extend(this.partials, name);
          } else {
            if (typeof partial === 'undefined') {
              throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
            }
            this.partials[name] = partial;
          }
        },
        unregisterPartial: function unregisterPartial(name) {
          delete this.partials[name];
        },
        registerDecorator: function registerDecorator(name, fn) {
          if (_utils.toString.call(name) === objectType) {
            if (fn) {
              throw new _exception2['default']('Arg not supported with multiple decorators');
            }
            _utils.extend(this.decorators, name);
          } else {
            this.decorators[name] = fn;
          }
        },
        unregisterDecorator: function unregisterDecorator(name) {
          delete this.decorators[name];
        },
        /**
         * Reset the memory of illegal property accesses that have already been logged.
         * @deprecated should only be used in handlebars test-cases
         */
        resetLoggedPropertyAccesses: function resetLoggedPropertyAccesses() {
          _internalProtoAccess.resetLoggedProperties();
        }
      };
      var log = _logger2['default'].log;
      exports.log = log;
      exports.createFrame = _utils.createFrame;
      exports.logger = _logger2['default'];

      /***/
    }, /* 4 */
    /***/function (module, exports) {
      'use strict';

      exports.__esModule = true;
      exports.extend = extend;
      exports.indexOf = indexOf;
      exports.escapeExpression = escapeExpression;
      exports.isEmpty = isEmpty;
      exports.createFrame = createFrame;
      exports.blockParams = blockParams;
      exports.appendContextPath = appendContextPath;
      var escape = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '`': '&#x60;',
        '=': '&#x3D;'
      };
      var badChars = /[&<>"'`=]/g,
        possible = /[&<>"'`=]/;
      function escapeChar(chr) {
        return escape[chr];
      }
      function extend(obj /* , ...source */) {
        for (var i = 1; i < arguments.length; i++) {
          for (var key in arguments[i]) {
            if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
              obj[key] = arguments[i][key];
            }
          }
        }
        return obj;
      }
      var toString = Object.prototype.toString;
      exports.toString = toString;
      // Sourced from lodash
      // https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
      /* eslint-disable func-style */
      var isFunction = function isFunction(value) {
        return typeof value === 'function';
      };
      // fallback for older versions of Chrome and Safari
      /* istanbul ignore next */
      if (isFunction(/x/)) {
        exports.isFunction = isFunction = function (value) {
          return typeof value === 'function' && toString.call(value) === '[object Function]';
        };
      }
      exports.isFunction = isFunction;

      /* eslint-enable func-style */

      /* istanbul ignore next */
      var isArray = Array.isArray || function (value) {
        return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
      };
      exports.isArray = isArray;
      // Older IE versions do not directly support indexOf so we must implement our own, sadly.

      function indexOf(array, value) {
        for (var i = 0, len = array.length; i < len; i++) {
          if (array[i] === value) {
            return i;
          }
        }
        return -1;
      }
      function escapeExpression(string) {
        if (typeof string !== 'string') {
          // don't escape SafeStrings, since they're already safe
          if (string && string.toHTML) {
            return string.toHTML();
          } else if (string == null) {
            return '';
          } else if (!string) {
            return string + '';
          }

          // Force a string conversion as this will be done by the append regardless and
          // the regex test will do this transparently behind the scenes, causing issues if
          // an object's to string has escaped characters in it.
          string = '' + string;
        }
        if (!possible.test(string)) {
          return string;
        }
        return string.replace(badChars, escapeChar);
      }
      function isEmpty(value) {
        if (!value && value !== 0) {
          return true;
        } else if (isArray(value) && value.length === 0) {
          return true;
        } else {
          return false;
        }
      }
      function createFrame(object) {
        var frame = extend({}, object);
        frame._parent = object;
        return frame;
      }
      function blockParams(params, ids) {
        params.path = ids;
        return params;
      }
      function appendContextPath(contextPath, id) {
        return (contextPath ? contextPath + '.' : '') + id;
      }

      /***/
    }, /* 5 */
    /***/function (module, exports, __webpack_require__) {
      'use strict';

      var _Object$defineProperty = __webpack_require__(6)['default'];
      exports.__esModule = true;
      var errorProps = ['description', 'fileName', 'lineNumber', 'endLineNumber', 'message', 'name', 'number', 'stack'];
      function Exception(message, node) {
        var loc = node && node.loc,
          line = undefined,
          endLineNumber = undefined,
          column = undefined,
          endColumn = undefined;
        if (loc) {
          line = loc.start.line;
          endLineNumber = loc.end.line;
          column = loc.start.column;
          endColumn = loc.end.column;
          message += ' - ' + line + ':' + column;
        }
        var tmp = Error.prototype.constructor.call(this, message);

        // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
        for (var idx = 0; idx < errorProps.length; idx++) {
          this[errorProps[idx]] = tmp[errorProps[idx]];
        }

        /* istanbul ignore else */
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, Exception);
        }
        try {
          if (loc) {
            this.lineNumber = line;
            this.endLineNumber = endLineNumber;

            // Work around issue under safari where we can't directly set the column value
            /* istanbul ignore next */
            if (_Object$defineProperty) {
              Object.defineProperty(this, 'column', {
                value: column,
                enumerable: true
              });
              Object.defineProperty(this, 'endColumn', {
                value: endColumn,
                enumerable: true
              });
            } else {
              this.column = column;
              this.endColumn = endColumn;
            }
          }
        } catch (nop) {
          /* Ignore if the browser is very particular */
        }
      }
      Exception.prototype = new Error();
      exports['default'] = Exception;
      module.exports = exports['default'];

      /***/
    }, /* 6 */
    /***/function (module, exports, __webpack_require__) {
      module.exports = {
        "default": __webpack_require__(7),
        __esModule: true
      };

      /***/
    }, /* 7 */
    /***/function (module, exports, __webpack_require__) {
      var $ = __webpack_require__(8);
      module.exports = function defineProperty(it, key, desc) {
        return $.setDesc(it, key, desc);
      };

      /***/
    }, /* 8 */
    /***/function (module, exports) {
      var $Object = Object;
      module.exports = {
        create: $Object.create,
        getProto: $Object.getPrototypeOf,
        isEnum: {}.propertyIsEnumerable,
        getDesc: $Object.getOwnPropertyDescriptor,
        setDesc: $Object.defineProperty,
        setDescs: $Object.defineProperties,
        getKeys: $Object.keys,
        getNames: $Object.getOwnPropertyNames,
        getSymbols: $Object.getOwnPropertySymbols,
        each: [].forEach
      };

      /***/
    }, /* 9 */
    /***/function (module, exports, __webpack_require__) {
      'use strict';

      var _interopRequireDefault = __webpack_require__(2)['default'];
      exports.__esModule = true;
      exports.registerDefaultHelpers = registerDefaultHelpers;
      exports.moveHelperToHooks = moveHelperToHooks;
      var _helpersBlockHelperMissing = __webpack_require__(10);
      var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);
      var _helpersEach = __webpack_require__(11);
      var _helpersEach2 = _interopRequireDefault(_helpersEach);
      var _helpersHelperMissing = __webpack_require__(24);
      var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);
      var _helpersIf = __webpack_require__(25);
      var _helpersIf2 = _interopRequireDefault(_helpersIf);
      var _helpersLog = __webpack_require__(26);
      var _helpersLog2 = _interopRequireDefault(_helpersLog);
      var _helpersLookup = __webpack_require__(27);
      var _helpersLookup2 = _interopRequireDefault(_helpersLookup);
      var _helpersWith = __webpack_require__(28);
      var _helpersWith2 = _interopRequireDefault(_helpersWith);
      function registerDefaultHelpers(instance) {
        _helpersBlockHelperMissing2['default'](instance);
        _helpersEach2['default'](instance);
        _helpersHelperMissing2['default'](instance);
        _helpersIf2['default'](instance);
        _helpersLog2['default'](instance);
        _helpersLookup2['default'](instance);
        _helpersWith2['default'](instance);
      }
      function moveHelperToHooks(instance, helperName, keepHelper) {
        if (instance.helpers[helperName]) {
          instance.hooks[helperName] = instance.helpers[helperName];
          if (!keepHelper) {
            delete instance.helpers[helperName];
          }
        }
      }

      /***/
    }, /* 10 */
    /***/function (module, exports, __webpack_require__) {
      'use strict';

      exports.__esModule = true;
      var _utils = __webpack_require__(4);
      exports['default'] = function (instance) {
        instance.registerHelper('blockHelperMissing', function (context, options) {
          var inverse = options.inverse,
            fn = options.fn;
          if (context === true) {
            return fn(this);
          } else if (context === false || context == null) {
            return inverse(this);
          } else if (_utils.isArray(context)) {
            if (context.length > 0) {
              if (options.ids) {
                options.ids = [options.name];
              }
              return instance.helpers.each(context, options);
            } else {
              return inverse(this);
            }
          } else {
            if (options.data && options.ids) {
              var data = _utils.createFrame(options.data);
              data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
              options = {
                data: data
              };
            }
            return fn(context, options);
          }
        });
      };
      module.exports = exports['default'];

      /***/
    }, /* 11 */
    /***/function (module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */(function (global) {
        'use strict';

        var _Object$keys = __webpack_require__(12)['default'];
        var _interopRequireDefault = __webpack_require__(2)['default'];
        exports.__esModule = true;
        var _utils = __webpack_require__(4);
        var _exception = __webpack_require__(5);
        var _exception2 = _interopRequireDefault(_exception);
        exports['default'] = function (instance) {
          instance.registerHelper('each', function (context, options) {
            if (!options) {
              throw new _exception2['default']('Must pass iterator to #each');
            }
            var fn = options.fn,
              inverse = options.inverse,
              i = 0,
              ret = '',
              data = undefined,
              contextPath = undefined;
            if (options.data && options.ids) {
              contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
            }
            if (_utils.isFunction(context)) {
              context = context.call(this);
            }
            if (options.data) {
              data = _utils.createFrame(options.data);
            }
            function execIteration(field, index, last) {
              if (data) {
                data.key = field;
                data.index = index;
                data.first = index === 0;
                data.last = !!last;
                if (contextPath) {
                  data.contextPath = contextPath + field;
                }
              }
              ret = ret + fn(context[field], {
                data: data,
                blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
              });
            }
            if (context && typeof context === 'object') {
              if (_utils.isArray(context)) {
                for (var j = context.length; i < j; i++) {
                  if (i in context) {
                    execIteration(i, i, i === context.length - 1);
                  }
                }
              } else if (global.Symbol && context[global.Symbol.iterator]) {
                var newContext = [];
                var iterator = context[global.Symbol.iterator]();
                for (var it = iterator.next(); !it.done; it = iterator.next()) {
                  newContext.push(it.value);
                }
                context = newContext;
                for (var j = context.length; i < j; i++) {
                  execIteration(i, i, i === context.length - 1);
                }
              } else {
                (function () {
                  var priorKey = undefined;
                  _Object$keys(context).forEach(function (key) {
                    // We're running the iterations one step out of sync so we can detect
                    // the last iteration without have to scan the object twice and create
                    // an itermediate keys array.
                    if (priorKey !== undefined) {
                      execIteration(priorKey, i - 1);
                    }
                    priorKey = key;
                    i++;
                  });
                  if (priorKey !== undefined) {
                    execIteration(priorKey, i - 1, true);
                  }
                })();
              }
            }
            if (i === 0) {
              ret = inverse(this);
            }
            return ret;
          });
        };
        module.exports = exports['default'];
        /* WEBPACK VAR INJECTION */
      }).call(exports, function () {
        return this;
      }());

      /***/
    }, /* 12 */
    /***/function (module, exports, __webpack_require__) {
      module.exports = {
        "default": __webpack_require__(13),
        __esModule: true
      };

      /***/
    }, /* 13 */
    /***/function (module, exports, __webpack_require__) {
      __webpack_require__(14);
      module.exports = __webpack_require__(20).Object.keys;

      /***/
    }, /* 14 */
    /***/function (module, exports, __webpack_require__) {
      // 19.1.2.14 Object.keys(O)
      var toObject = __webpack_require__(15);
      __webpack_require__(17)('keys', function ($keys) {
        return function keys(it) {
          return $keys(toObject(it));
        };
      });

      /***/
    }, /* 15 */
    /***/function (module, exports, __webpack_require__) {
      // 7.1.13 ToObject(argument)
      var defined = __webpack_require__(16);
      module.exports = function (it) {
        return Object(defined(it));
      };

      /***/
    }, /* 16 */
    /***/function (module, exports) {
      // 7.2.1 RequireObjectCoercible(argument)
      module.exports = function (it) {
        if (it == undefined) throw TypeError("Can't call method on  " + it);
        return it;
      };

      /***/
    }, /* 17 */
    /***/function (module, exports, __webpack_require__) {
      // most Object methods by ES6 should accept primitives
      var $export = __webpack_require__(18),
        core = __webpack_require__(20),
        fails = __webpack_require__(23);
      module.exports = function (KEY, exec) {
        var fn = (core.Object || {})[KEY] || Object[KEY],
          exp = {};
        exp[KEY] = exec(fn);
        $export($export.S + $export.F * fails(function () {
          fn(1);
        }), 'Object', exp);
      };

      /***/
    }, /* 18 */
    /***/function (module, exports, __webpack_require__) {
      var global = __webpack_require__(19),
        core = __webpack_require__(20),
        ctx = __webpack_require__(21),
        PROTOTYPE = 'prototype';
      var $export = function (type, name, source) {
        var IS_FORCED = type & $export.F,
          IS_GLOBAL = type & $export.G,
          IS_STATIC = type & $export.S,
          IS_PROTO = type & $export.P,
          IS_BIND = type & $export.B,
          IS_WRAP = type & $export.W,
          exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
          target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
          key,
          own,
          out;
        if (IS_GLOBAL) source = name;
        for (key in source) {
          // contains in native
          own = !IS_FORCED && target && key in target;
          if (own && key in exports) continue;
          // export native or passed
          out = own ? target[key] : source[key];
          // prevent global pollution for namespaces
          exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
          // bind timers to global for call from export context
          : IS_BIND && own ? ctx(out, global)
          // wrap global constructors for prevent change them in library
          : IS_WRAP && target[key] == out ? function (C) {
            var F = function (param) {
              return this instanceof C ? new C(param) : C(param);
            };
            F[PROTOTYPE] = C[PROTOTYPE];
            return F;
            // make static versions for prototype methods
          }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
          if (IS_PROTO) (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
        }
      };
      // type bitmap
      $export.F = 1; // forced
      $export.G = 2; // global
      $export.S = 4; // static
      $export.P = 8; // proto
      $export.B = 16; // bind
      $export.W = 32; // wrap
      module.exports = $export;

      /***/
    }, /* 19 */
    /***/function (module, exports) {
      // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
      var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
      if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

      /***/
    }, /* 20 */
    /***/function (module, exports) {
      var core = module.exports = {
        version: '1.2.6'
      };
      if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

      /***/
    }, /* 21 */
    /***/function (module, exports, __webpack_require__) {
      // optional / simple context binding
      var aFunction = __webpack_require__(22);
      module.exports = function (fn, that, length) {
        aFunction(fn);
        if (that === undefined) return fn;
        switch (length) {
          case 1:
            return function (a) {
              return fn.call(that, a);
            };
          case 2:
            return function (a, b) {
              return fn.call(that, a, b);
            };
          case 3:
            return function (a, b, c) {
              return fn.call(that, a, b, c);
            };
        }
        return function /* ...args */
        () {
          return fn.apply(that, arguments);
        };
      };

      /***/
    }, /* 22 */
    /***/function (module, exports) {
      module.exports = function (it) {
        if (typeof it != 'function') throw TypeError(it + ' is not a function!');
        return it;
      };

      /***/
    }, /* 23 */
    /***/function (module, exports) {
      module.exports = function (exec) {
        try {
          return !!exec();
        } catch (e) {
          return true;
        }
      };

      /***/
    }, /* 24 */
    /***/function (module, exports, __webpack_require__) {
      'use strict';

      var _interopRequireDefault = __webpack_require__(2)['default'];
      exports.__esModule = true;
      var _exception = __webpack_require__(5);
      var _exception2 = _interopRequireDefault(_exception);
      exports['default'] = function (instance) {
        instance.registerHelper('helperMissing', function () /* [args, ]options */{
          if (arguments.length === 1) {
            // A missing field in a {{foo}} construct.
            return undefined;
          } else {
            // Someone is actually trying to call something, blow up.
            throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
          }
        });
      };
      module.exports = exports['default'];

      /***/
    }, /* 25 */
    /***/function (module, exports, __webpack_require__) {
      'use strict';

      var _interopRequireDefault = __webpack_require__(2)['default'];
      exports.__esModule = true;
      var _utils = __webpack_require__(4);
      var _exception = __webpack_require__(5);
      var _exception2 = _interopRequireDefault(_exception);
      exports['default'] = function (instance) {
        instance.registerHelper('if', function (conditional, options) {
          if (arguments.length != 2) {
            throw new _exception2['default']('#if requires exactly one argument');
          }
          if (_utils.isFunction(conditional)) {
            conditional = conditional.call(this);
          }

          // Default behavior is to render the positive path if the value is truthy and not empty.
          // The `includeZero` option may be set to treat the condtional as purely not empty based on the
          // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
          if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
            return options.inverse(this);
          } else {
            return options.fn(this);
          }
        });
        instance.registerHelper('unless', function (conditional, options) {
          if (arguments.length != 2) {
            throw new _exception2['default']('#unless requires exactly one argument');
          }
          return instance.helpers['if'].call(this, conditional, {
            fn: options.inverse,
            inverse: options.fn,
            hash: options.hash
          });
        });
      };
      module.exports = exports['default'];

      /***/
    }, /* 26 */
    /***/function (module, exports) {
      'use strict';

      exports.__esModule = true;
      exports['default'] = function (instance) {
        instance.registerHelper('log', function () /* message, options */{
          var args = [undefined],
            options = arguments[arguments.length - 1];
          for (var i = 0; i < arguments.length - 1; i++) {
            args.push(arguments[i]);
          }
          var level = 1;
          if (options.hash.level != null) {
            level = options.hash.level;
          } else if (options.data && options.data.level != null) {
            level = options.data.level;
          }
          args[0] = level;
          instance.log.apply(instance, args);
        });
      };
      module.exports = exports['default'];

      /***/
    }, /* 27 */
    /***/function (module, exports) {
      'use strict';

      exports.__esModule = true;
      exports['default'] = function (instance) {
        instance.registerHelper('lookup', function (obj, field, options) {
          if (!obj) {
            // Note for 5.0: Change to "obj == null" in 5.0
            return obj;
          }
          return options.lookupProperty(obj, field);
        });
      };
      module.exports = exports['default'];

      /***/
    }, /* 28 */
    /***/function (module, exports, __webpack_require__) {
      'use strict';

      var _interopRequireDefault = __webpack_require__(2)['default'];
      exports.__esModule = true;
      var _utils = __webpack_require__(4);
      var _exception = __webpack_require__(5);
      var _exception2 = _interopRequireDefault(_exception);
      exports['default'] = function (instance) {
        instance.registerHelper('with', function (context, options) {
          if (arguments.length != 2) {
            throw new _exception2['default']('#with requires exactly one argument');
          }
          if (_utils.isFunction(context)) {
            context = context.call(this);
          }
          var fn = options.fn;
          if (!_utils.isEmpty(context)) {
            var data = options.data;
            if (options.data && options.ids) {
              data = _utils.createFrame(options.data);
              data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
            }
            return fn(context, {
              data: data,
              blockParams: _utils.blockParams([context], [data && data.contextPath])
            });
          } else {
            return options.inverse(this);
          }
        });
      };
      module.exports = exports['default'];

      /***/
    }, /* 29 */
    /***/function (module, exports, __webpack_require__) {
      'use strict';

      var _interopRequireDefault = __webpack_require__(2)['default'];
      exports.__esModule = true;
      exports.registerDefaultDecorators = registerDefaultDecorators;
      var _decoratorsInline = __webpack_require__(30);
      var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);
      function registerDefaultDecorators(instance) {
        _decoratorsInline2['default'](instance);
      }

      /***/
    }, /* 30 */
    /***/function (module, exports, __webpack_require__) {
      'use strict';

      exports.__esModule = true;
      var _utils = __webpack_require__(4);
      exports['default'] = function (instance) {
        instance.registerDecorator('inline', function (fn, props, container, options) {
          var ret = fn;
          if (!props.partials) {
            props.partials = {};
            ret = function (context, options) {
              // Create a new partials stack frame prior to exec.
              var original = container.partials;
              container.partials = _utils.extend({}, original, props.partials);
              var ret = fn(context, options);
              container.partials = original;
              return ret;
            };
          }
          props.partials[options.args[0]] = options.fn;
          return ret;
        });
      };
      module.exports = exports['default'];

      /***/
    }, /* 31 */
    /***/function (module, exports, __webpack_require__) {
      'use strict';

      exports.__esModule = true;
      var _utils = __webpack_require__(4);
      var logger = {
        methodMap: ['debug', 'info', 'warn', 'error'],
        level: 'info',
        // Maps a given level value to the `methodMap` indexes above.
        lookupLevel: function lookupLevel(level) {
          if (typeof level === 'string') {
            var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
            if (levelMap >= 0) {
              level = levelMap;
            } else {
              level = parseInt(level, 10);
            }
          }
          return level;
        },
        // Can be overridden in the host environment
        log: function log(level) {
          level = logger.lookupLevel(level);
          if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
            var method = logger.methodMap[level];
            // eslint-disable-next-line no-console
            if (!console[method]) {
              method = 'log';
            }
            for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              message[_key - 1] = arguments[_key];
            }
            console[method].apply(console, message); // eslint-disable-line no-console
          }
        }
      };

      exports['default'] = logger;
      module.exports = exports['default'];

      /***/
    }, /* 32 */
    /***/function (module, exports, __webpack_require__) {
      'use strict';

      var _Object$create = __webpack_require__(33)['default'];
      var _Object$keys = __webpack_require__(12)['default'];
      var _interopRequireWildcard = __webpack_require__(1)['default'];
      exports.__esModule = true;
      exports.createProtoAccessControl = createProtoAccessControl;
      exports.resultIsAllowed = resultIsAllowed;
      exports.resetLoggedProperties = resetLoggedProperties;
      var _createNewLookupObject = __webpack_require__(35);
      var _logger = __webpack_require__(31);
      var logger = _interopRequireWildcard(_logger);
      var loggedProperties = _Object$create(null);
      function createProtoAccessControl(runtimeOptions) {
        var defaultMethodWhiteList = _Object$create(null);
        defaultMethodWhiteList['constructor'] = false;
        defaultMethodWhiteList['__defineGetter__'] = false;
        defaultMethodWhiteList['__defineSetter__'] = false;
        defaultMethodWhiteList['__lookupGetter__'] = false;
        var defaultPropertyWhiteList = _Object$create(null);
        // eslint-disable-next-line no-proto
        defaultPropertyWhiteList['__proto__'] = false;
        return {
          properties: {
            whitelist: _createNewLookupObject.createNewLookupObject(defaultPropertyWhiteList, runtimeOptions.allowedProtoProperties),
            defaultValue: runtimeOptions.allowProtoPropertiesByDefault
          },
          methods: {
            whitelist: _createNewLookupObject.createNewLookupObject(defaultMethodWhiteList, runtimeOptions.allowedProtoMethods),
            defaultValue: runtimeOptions.allowProtoMethodsByDefault
          }
        };
      }
      function resultIsAllowed(result, protoAccessControl, propertyName) {
        if (typeof result === 'function') {
          return checkWhiteList(protoAccessControl.methods, propertyName);
        } else {
          return checkWhiteList(protoAccessControl.properties, propertyName);
        }
      }
      function checkWhiteList(protoAccessControlForType, propertyName) {
        if (protoAccessControlForType.whitelist[propertyName] !== undefined) {
          return protoAccessControlForType.whitelist[propertyName] === true;
        }
        if (protoAccessControlForType.defaultValue !== undefined) {
          return protoAccessControlForType.defaultValue;
        }
        logUnexpecedPropertyAccessOnce(propertyName);
        return false;
      }
      function logUnexpecedPropertyAccessOnce(propertyName) {
        if (loggedProperties[propertyName] !== true) {
          loggedProperties[propertyName] = true;
          logger.log('error', 'Handlebars: Access has been denied to resolve the property "' + propertyName + '" because it is not an "own property" of its parent.\n' + 'You can add a runtime option to disable the check or this warning:\n' + 'See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details');
        }
      }
      function resetLoggedProperties() {
        _Object$keys(loggedProperties).forEach(function (propertyName) {
          delete loggedProperties[propertyName];
        });
      }

      /***/
    }, /* 33 */
    /***/function (module, exports, __webpack_require__) {
      module.exports = {
        "default": __webpack_require__(34),
        __esModule: true
      };

      /***/
    }, /* 34 */
    /***/function (module, exports, __webpack_require__) {
      var $ = __webpack_require__(8);
      module.exports = function create(P, D) {
        return $.create(P, D);
      };

      /***/
    }, /* 35 */
    /***/function (module, exports, __webpack_require__) {
      'use strict';

      var _Object$create = __webpack_require__(33)['default'];
      exports.__esModule = true;
      exports.createNewLookupObject = createNewLookupObject;
      var _utils = __webpack_require__(4);

      /**
       * Create a new object with "null"-prototype to avoid truthy results on prototype properties.
       * The resulting object can be used with "object[property]" to check if a property exists
       * @param {...object} sources a varargs parameter of source objects that will be merged
       * @returns {object}
       */

      function createNewLookupObject() {
        for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
          sources[_key] = arguments[_key];
        }
        return _utils.extend.apply(undefined, [_Object$create(null)].concat(sources));
      }

      /***/
    }, /* 36 */
    /***/function (module, exports) {
      // Build out our basic SafeString type
      'use strict';

      exports.__esModule = true;
      function SafeString(string) {
        this.string = string;
      }
      SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
        return '' + this.string;
      };
      exports['default'] = SafeString;
      module.exports = exports['default'];

      /***/
    }, /* 37 */
    /***/function (module, exports, __webpack_require__) {
      'use strict';

      var _Object$seal = __webpack_require__(38)['default'];
      var _Object$keys = __webpack_require__(12)['default'];
      var _interopRequireWildcard = __webpack_require__(1)['default'];
      var _interopRequireDefault = __webpack_require__(2)['default'];
      exports.__esModule = true;
      exports.checkRevision = checkRevision;
      exports.template = template;
      exports.wrapProgram = wrapProgram;
      exports.resolvePartial = resolvePartial;
      exports.invokePartial = invokePartial;
      exports.noop = noop;
      var _utils = __webpack_require__(4);
      var Utils = _interopRequireWildcard(_utils);
      var _exception = __webpack_require__(5);
      var _exception2 = _interopRequireDefault(_exception);
      var _base = __webpack_require__(3);
      var _helpers = __webpack_require__(9);
      var _internalWrapHelper = __webpack_require__(42);
      var _internalProtoAccess = __webpack_require__(32);
      function checkRevision(compilerInfo) {
        var compilerRevision = compilerInfo && compilerInfo[0] || 1,
          currentRevision = _base.COMPILER_REVISION;
        if (compilerRevision >= _base.LAST_COMPATIBLE_COMPILER_REVISION && compilerRevision <= _base.COMPILER_REVISION) {
          return;
        }
        if (compilerRevision < _base.LAST_COMPATIBLE_COMPILER_REVISION) {
          var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
            compilerVersions = _base.REVISION_CHANGES[compilerRevision];
          throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
        } else {
          // Use the embedded version info since the runtime doesn't know about this revision yet
          throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
        }
      }
      function template(templateSpec, env) {
        /* istanbul ignore next */
        if (!env) {
          throw new _exception2['default']('No environment passed to template');
        }
        if (!templateSpec || !templateSpec.main) {
          throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
        }
        templateSpec.main.decorator = templateSpec.main_d;

        // Note: Using env.VM references rather than local var references throughout this section to allow
        // for external users to override these as pseudo-supported APIs.
        env.VM.checkRevision(templateSpec.compiler);

        // backwards compatibility for precompiled templates with compiler-version 7 (<4.3.0)
        var templateWasPrecompiledWithCompilerV7 = templateSpec.compiler && templateSpec.compiler[0] === 7;
        function invokePartialWrapper(partial, context, options) {
          if (options.hash) {
            context = Utils.extend({}, context, options.hash);
            if (options.ids) {
              options.ids[0] = true;
            }
          }
          partial = env.VM.resolvePartial.call(this, partial, context, options);
          var extendedOptions = Utils.extend({}, options, {
            hooks: this.hooks,
            protoAccessControl: this.protoAccessControl
          });
          var result = env.VM.invokePartial.call(this, partial, context, extendedOptions);
          if (result == null && env.compile) {
            options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
            result = options.partials[options.name](context, extendedOptions);
          }
          if (result != null) {
            if (options.indent) {
              var lines = result.split('\n');
              for (var i = 0, l = lines.length; i < l; i++) {
                if (!lines[i] && i + 1 === l) {
                  break;
                }
                lines[i] = options.indent + lines[i];
              }
              result = lines.join('\n');
            }
            return result;
          } else {
            throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
          }
        }

        // Just add water
        var container = {
          strict: function strict(obj, name, loc) {
            if (!obj || !(name in obj)) {
              throw new _exception2['default']('"' + name + '" not defined in ' + obj, {
                loc: loc
              });
            }
            return container.lookupProperty(obj, name);
          },
          lookupProperty: function lookupProperty(parent, propertyName) {
            var result = parent[propertyName];
            if (result == null) {
              return result;
            }
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return result;
            }
            if (_internalProtoAccess.resultIsAllowed(result, container.protoAccessControl, propertyName)) {
              return result;
            }
            return undefined;
          },
          lookup: function lookup(depths, name) {
            var len = depths.length;
            for (var i = 0; i < len; i++) {
              var result = depths[i] && container.lookupProperty(depths[i], name);
              if (result != null) {
                return depths[i][name];
              }
            }
          },
          lambda: function lambda(current, context) {
            return typeof current === 'function' ? current.call(context) : current;
          },
          escapeExpression: Utils.escapeExpression,
          invokePartial: invokePartialWrapper,
          fn: function fn(i) {
            var ret = templateSpec[i];
            ret.decorator = templateSpec[i + '_d'];
            return ret;
          },
          programs: [],
          program: function program(i, data, declaredBlockParams, blockParams, depths) {
            var programWrapper = this.programs[i],
              fn = this.fn(i);
            if (data || depths || blockParams || declaredBlockParams) {
              programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
            } else if (!programWrapper) {
              programWrapper = this.programs[i] = wrapProgram(this, i, fn);
            }
            return programWrapper;
          },
          data: function data(value, depth) {
            while (value && depth--) {
              value = value._parent;
            }
            return value;
          },
          mergeIfNeeded: function mergeIfNeeded(param, common) {
            var obj = param || common;
            if (param && common && param !== common) {
              obj = Utils.extend({}, common, param);
            }
            return obj;
          },
          // An empty object to use as replacement for null-contexts
          nullContext: _Object$seal({}),
          noop: env.VM.noop,
          compilerInfo: templateSpec.compiler
        };
        function ret(context) {
          var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
          var data = options.data;
          ret._setup(options);
          if (!options.partial && templateSpec.useData) {
            data = initData(context, data);
          }
          var depths = undefined,
            blockParams = templateSpec.useBlockParams ? [] : undefined;
          if (templateSpec.useDepths) {
            if (options.depths) {
              depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
            } else {
              depths = [context];
            }
          }
          function main(context /*, options*/) {
            return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
          }
          main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
          return main(context, options);
        }
        ret.isTop = true;
        ret._setup = function (options) {
          if (!options.partial) {
            var mergedHelpers = Utils.extend({}, env.helpers, options.helpers);
            wrapHelpersToPassLookupProperty(mergedHelpers, container);
            container.helpers = mergedHelpers;
            if (templateSpec.usePartial) {
              // Use mergeIfNeeded here to prevent compiling global partials multiple times
              container.partials = container.mergeIfNeeded(options.partials, env.partials);
            }
            if (templateSpec.usePartial || templateSpec.useDecorators) {
              container.decorators = Utils.extend({}, env.decorators, options.decorators);
            }
            container.hooks = {};
            container.protoAccessControl = _internalProtoAccess.createProtoAccessControl(options);
            var keepHelperInHelpers = options.allowCallsToHelperMissing || templateWasPrecompiledWithCompilerV7;
            _helpers.moveHelperToHooks(container, 'helperMissing', keepHelperInHelpers);
            _helpers.moveHelperToHooks(container, 'blockHelperMissing', keepHelperInHelpers);
          } else {
            container.protoAccessControl = options.protoAccessControl; // internal option
            container.helpers = options.helpers;
            container.partials = options.partials;
            container.decorators = options.decorators;
            container.hooks = options.hooks;
          }
        };
        ret._child = function (i, data, blockParams, depths) {
          if (templateSpec.useBlockParams && !blockParams) {
            throw new _exception2['default']('must pass block params');
          }
          if (templateSpec.useDepths && !depths) {
            throw new _exception2['default']('must pass parent depths');
          }
          return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
        };
        return ret;
      }
      function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
        function prog(context) {
          var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
          var currentDepths = depths;
          if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
            currentDepths = [context].concat(depths);
          }
          return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
        }
        prog = executeDecorators(fn, prog, container, depths, data, blockParams);
        prog.program = i;
        prog.depth = depths ? depths.length : 0;
        prog.blockParams = declaredBlockParams || 0;
        return prog;
      }

      /**
       * This is currently part of the official API, therefore implementation details should not be changed.
       */

      function resolvePartial(partial, context, options) {
        if (!partial) {
          if (options.name === '@partial-block') {
            partial = options.data['partial-block'];
          } else {
            partial = options.partials[options.name];
          }
        } else if (!partial.call && !options.name) {
          // This is a dynamic partial that returned a string
          options.name = partial;
          partial = options.partials[partial];
        }
        return partial;
      }
      function invokePartial(partial, context, options) {
        // Use the current closure context to save the partial-block if this partial
        var currentPartialBlock = options.data && options.data['partial-block'];
        options.partial = true;
        if (options.ids) {
          options.data.contextPath = options.ids[0] || options.data.contextPath;
        }
        var partialBlock = undefined;
        if (options.fn && options.fn !== noop) {
          (function () {
            options.data = _base.createFrame(options.data);
            // Wrapper function to get access to currentPartialBlock from the closure
            var fn = options.fn;
            partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {
              var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

              // Restore the partial-block from the closure for the execution of the block
              // i.e. the part inside the block of the partial call.
              options.data = _base.createFrame(options.data);
              options.data['partial-block'] = currentPartialBlock;
              return fn(context, options);
            };
            if (fn.partials) {
              options.partials = Utils.extend({}, options.partials, fn.partials);
            }
          })();
        }
        if (partial === undefined && partialBlock) {
          partial = partialBlock;
        }
        if (partial === undefined) {
          throw new _exception2['default']('The partial ' + options.name + ' could not be found');
        } else if (partial instanceof Function) {
          return partial(context, options);
        }
      }
      function noop() {
        return '';
      }
      function initData(context, data) {
        if (!data || !('root' in data)) {
          data = data ? _base.createFrame(data) : {};
          data.root = context;
        }
        return data;
      }
      function executeDecorators(fn, prog, container, depths, data, blockParams) {
        if (fn.decorator) {
          var props = {};
          prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
          Utils.extend(prog, props);
        }
        return prog;
      }
      function wrapHelpersToPassLookupProperty(mergedHelpers, container) {
        _Object$keys(mergedHelpers).forEach(function (helperName) {
          var helper = mergedHelpers[helperName];
          mergedHelpers[helperName] = passLookupPropertyOption(helper, container);
        });
      }
      function passLookupPropertyOption(helper, container) {
        var lookupProperty = container.lookupProperty;
        return _internalWrapHelper.wrapHelper(helper, function (options) {
          return Utils.extend({
            lookupProperty: lookupProperty
          }, options);
        });
      }

      /***/
    }, /* 38 */
    /***/function (module, exports, __webpack_require__) {
      module.exports = {
        "default": __webpack_require__(39),
        __esModule: true
      };

      /***/
    }, /* 39 */
    /***/function (module, exports, __webpack_require__) {
      __webpack_require__(40);
      module.exports = __webpack_require__(20).Object.seal;

      /***/
    }, /* 40 */
    /***/function (module, exports, __webpack_require__) {
      // 19.1.2.17 Object.seal(O)
      var isObject = __webpack_require__(41);
      __webpack_require__(17)('seal', function ($seal) {
        return function seal(it) {
          return $seal && isObject(it) ? $seal(it) : it;
        };
      });

      /***/
    }, /* 41 */
    /***/function (module, exports) {
      module.exports = function (it) {
        return typeof it === 'object' ? it !== null : typeof it === 'function';
      };

      /***/
    }, /* 42 */
    /***/function (module, exports) {
      'use strict';

      exports.__esModule = true;
      exports.wrapHelper = wrapHelper;
      function wrapHelper(helper, transformOptionsFn) {
        if (typeof helper !== 'function') {
          // This should not happen, but apparently it does in https://github.com/wycats/handlebars.js/issues/1639
          // We try to make the wrapper least-invasive by not wrapping it, if the helper is not a function.
          return helper;
        }
        var wrapper = function wrapper() /* dynamic arguments */{
          var options = arguments[arguments.length - 1];
          arguments[arguments.length - 1] = transformOptionsFn(options);
          return helper.apply(this, arguments);
        };
        return wrapper;
      }

      /***/
    }, /* 43 */
    /***/function (module, exports) {
      /* WEBPACK VAR INJECTION */(function (global) {
        'use strict';

        exports.__esModule = true;
        exports['default'] = function (Handlebars) {
          /* istanbul ignore next */
          var root = typeof global !== 'undefined' ? global : window,
            $Handlebars = root.Handlebars;
          /* istanbul ignore next */
          Handlebars.noConflict = function () {
            if (root.Handlebars === Handlebars) {
              root.Handlebars = $Handlebars;
            }
            return Handlebars;
          };
        };
        module.exports = exports['default'];
        /* WEBPACK VAR INJECTION */
      }).call(exports, function () {
        return this;
      }());

      /***/
    }
    /******/])
  );
});

;
},{}],"hbs/imgCardMarcup.hbs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const templateFunction = _handlebars.default.template({
  "1": function (container, depth0, helpers, partials, data) {
    var alias1 = container.lambda,
      alias2 = container.escapeExpression,
      lookupProperty = container.lookupProperty || function (parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined;
      };
    return "<a class=\"card-link\" href=\"" + alias2(alias1(depth0 != null ? lookupProperty(depth0, "largeImageURL") : depth0, depth0)) + "\">\r\n    <div class=\"photo-card\">\r\n<img src=\"" + alias2(alias1(depth0 != null ? lookupProperty(depth0, "webformatURL") : depth0, depth0)) + "\" alt=\"" + alias2(alias1(depth0 != null ? lookupProperty(depth0, "tags") : depth0, depth0)) + "\" loading=\"lazy\" />\r\n    <div class=\"info\">\r\n        <p class=\"info-item\">\r\n            <b>Likes: " + alias2(alias1(depth0 != null ? lookupProperty(depth0, "likes") : depth0, depth0)) + "</b>\r\n        </p>\r\n        <p class=\"info-item\">\r\n            <b>Views: " + alias2(alias1(depth0 != null ? lookupProperty(depth0, "views") : depth0, depth0)) + "</b>\r\n        </p>\r\n        <p class=\"info-item\">\r\n            <b>Comments: " + alias2(alias1(depth0 != null ? lookupProperty(depth0, "comments") : depth0, depth0)) + "</b>\r\n        </p>\r\n        <p class=\"info-item\">\r\n            <b>Downloads: " + alias2(alias1(depth0 != null ? lookupProperty(depth0, "downloads") : depth0, depth0)) + "</b>\r\n        </p>\r\n    </div>\r\n</div>\r\n</a>\r\n";
  },
  "compiler": [8, ">= 4.3.0"],
  "main": function (container, depth0, helpers, partials, data) {
    var stack1,
      lookupProperty = container.lookupProperty || function (parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined;
      };
    return (stack1 = lookupProperty(helpers, "each").call(depth0 != null ? depth0 : container.nullContext || {}, depth0, {
      "name": "each",
      "hash": {},
      "fn": container.program(1, data, 0),
      "inverse": container.noop,
      "data": data,
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 21,
          "column": 9
        }
      }
    })) != null ? stack1 : "";
  },
  "useData": true
});
var _default = templateFunction;
exports.default = _default;
},{"handlebars/dist/handlebars.runtime":"../node_modules/handlebars/dist/handlebars.runtime.js"}],"../node_modules/lodash.debounce/index.js":[function(require,module,exports) {
var global = arguments[3];
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

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
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

},{}],"js/index.js":[function(require,module,exports) {
"use strict";

require("../css/styles.css");
require("simplelightbox/dist/simple-lightbox.min.css");
var _notiflixNotifyAio = require("notiflix/build/notiflix-notify-aio");
var _notiflixReportAio = require("notiflix/build/notiflix-report-aio");
var _simplelightbox = _interopRequireDefault(require("simplelightbox"));
var _imgCardMarcup = _interopRequireDefault(require("../hbs/imgCardMarcup.hbs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const lightboxGallery = new _simplelightbox.default('.gallery a');
const debounce = require('lodash.debounce');
const BASE_URL = 'https://pixabay.com/api/';
const DEBOUNCE_DELAY = 50;
const Refs = {
  userInput: document.querySelector('[name="searchQuery"]'),
  gallery: document.querySelector('.gallery'),
  submitButton: document.querySelector('[type="submit"]'),
  requestForm: document.querySelector('#search-form'),
  loadMoreButton: document.querySelector('.load-more')
};

// auxiliary variables--------------
let requestUser = '';
let currentRequest = '';
let currentPage = 1;
let perPage = 30;
// ----------------------------

const searchParams = new URLSearchParams({
  key: '33110097-e31e2273406f912ac77c7c325',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: 30
});
Refs.requestForm.addEventListener('submit', event => event.preventDefault());
Refs.userInput.addEventListener('input', debounce(onUserInput, DEBOUNCE_DELAY));
Refs.submitButton.addEventListener('click', onSubmitBtnClick);
Refs.loadMoreButton.addEventListener('click', onLoadMoreBtnClick);
function onSubmitBtnClick() {
  if (requestUser === currentRequest && !(requestUser === '')) return;
  if (requestUser === '') {
    clearPage();
    _notiflixNotifyAio.Notify.warning('Enter a search term please.');
    currentRequest = requestUser;
    return;
  }
  currentPage = 1;
  clearPage();
  fechImages().then(searchResultMessage);
}
function searchResultMessage(obj) {
  _notiflixNotifyAio.Notify.info(`Hooray! We found ${obj.totalHits} images.`);
}
function clearPage() {
  Refs.gallery.innerHTML = '';
  Refs.loadMoreButton.classList.add('visually-hidden');
}
function fechImages() {
  return fetch(`${BASE_URL}?q=${requestUser}&page=${currentPage}&${searchParams}`).then(response => response.json()).then(obj => {
    obj.hits.length === 0 ? onIncorectRequest().then() : onCorectRequest(obj);
    return obj;
  });
}
function onUserInput(event) {
  requestUser = event.target.value;
}
function onLoadMoreBtnClick() {
  currentPage += 1;
  fechImages();
}
function onIncorectRequest() {
  clearPage();
  _notiflixReportAio.Report.failure('', '"Sorry, there are no images matching your search query. Please try again."', 'Okay');
}
function onCorectRequest(obj) {
  renderCards(obj);
  Refs.loadMoreButton.classList.remove('visually-hidden');
  if (perPage * currentPage > obj.totalHits) whenQueryResultsEnd();
  lightboxGallery.refresh();
  currentRequest = requestUser;
  if (currentPage > 1) {
    setTimeout(() => {
      window.scrollBy({
        top: window.innerHeight - 80,
        behavior: 'smooth'
      });
    }, 250);
  }
}
function whenQueryResultsEnd() {
  Refs.loadMoreButton.classList.add('visually-hidden');
  _notiflixNotifyAio.Notify.info('We`re sorry, but you`ve reached the end of search results.');
}
function renderCards(obj) {
  Refs.gallery.insertAdjacentHTML('beforeend', (0, _imgCardMarcup.default)(obj.hits));
}

//
//   Refs.gallery.firstElementChild.getBoundingClientRect();
},{"../css/styles.css":"css/styles.css","simplelightbox/dist/simple-lightbox.min.css":"../node_modules/simplelightbox/dist/simple-lightbox.min.css","notiflix/build/notiflix-notify-aio":"../node_modules/notiflix/build/notiflix-notify-aio.js","notiflix/build/notiflix-report-aio":"../node_modules/notiflix/build/notiflix-report-aio.js","simplelightbox":"../node_modules/simplelightbox/dist/simple-lightbox.modules.js","../hbs/imgCardMarcup.hbs":"hbs/imgCardMarcup.hbs","lodash.debounce":"../node_modules/lodash.debounce/index.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "13173" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map