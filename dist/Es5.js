"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//类 class
var Es6Class =
/*#__PURE__*/
function () {
  function Es6Class(name, type) {
    console.log("function_start:Es6Class");

    _classCallCheck(this, Es6Class);

    this.version = 'ES2015';
    this.name = name;
    this.type = type;
  }

  _createClass(Es6Class, [{
    key: "sayHello",
    value: function sayHello() {
      console.log("function_start:sayHello");
      console.log("hello: ".concat(this.name, " here is ").concat(this.version));
    }
  }]);

  return Es6Class;
}();

Es6Class.prototype.transform = function (code) {
  console.log('transformed code');
};

var ES2016 =
/*#__PURE__*/
function (_Es6Class) {
  _inherits(ES2016, _Es6Class);

  function ES2016(name, type) {
    var _this;

    console.log("function_start:ES2016");

    _classCallCheck(this, ES2016);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ES2016).call(this, name, type));
    _this.version = 'ES2016';
    return _this;
  }

  return ES2016;
}(Es6Class);

var es6Class = new Es6Class('es6', 'test'); // 箭头函数 arrow-functions

var arrowFunctions = function arrowFunctions() {
  console.log('arrowFunctions');
}; // 块级作用域 block-scoped-functions


function blockScopedFunctions() {
  console.log("function_start:blockScopedFunctions");

  function setPI() {
    console.log("function_start:setPI");
    var PI = 3.14;
    PI = (_readOnlyError("PI"), 3); // TypeError: Assignment to constant variable.
  }

  for (var _i = 0; _i < 10; _i++) {
    console.log(_i);
  }

  console.log(PI); // Uncaught ReferenceError: PI is not defined

  console.log(i); // ReferenceError: i is not defined
} //解构 destructur


var destructurObj = {
  name: 'test',
  value: 'es6',
  time: '2019-10-22',
  timeList: ['2019', '10', '22']
};
var name = destructurObj.name,
    value = destructurObj.value;

var _destructurObj$timeLi = _slicedToArray(destructurObj.timeList, 3),
    year = _destructurObj$timeLi[0],
    month = _destructurObj$timeLi[1],
    day = _destructurObj$timeLi[2];

console.log(name);
console.log(value);
console.log(year);
console.log(month);
console.log(day); // for-of

for (var key in es6Class) {
  console.log(key);
}