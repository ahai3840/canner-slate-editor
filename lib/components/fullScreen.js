"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FullScreen = function (_React$Component) {
  _inherits(FullScreen, _React$Component);

  function FullScreen() {
    _classCallCheck(this, FullScreen);

    return _possibleConstructorReturn(this, (FullScreen.__proto__ || Object.getPrototypeOf(FullScreen)).apply(this, arguments));
  }

  _createClass(FullScreen, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          className = _props.className,
          goFull = _props.goFull,
          isFull = _props.isFull;


      return _react2.default.createElement(
        "svg",
        {
          className: className,
          onClick: goFull,
          height: "18",
          width: "18",
          viewBox: "0 0 48 48"
        },
        _react2.default.createElement("path", { d: "M0 0h48v48h-48z", fill: "none" }),
        _react2.default.createElement("path", {
          style: isFull ? { fill: "#CCC" } : {},
          d: "M14 28h-4v10h10v-4h-6v-6zm-4-8h4v-6h6v-4h-10v10zm24 14h-6v4h10v-10h-4v6zm-6-24v4h6v6h4v-10h-10z"
        })
      );
    }
  }]);

  return FullScreen;
}(_react2.default.Component);

exports.default = FullScreen;