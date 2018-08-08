"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _class2;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n  ", "\n  background-color: #FFF;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 1px 1px rgba(0,0,0,0.16);\n  overflow-y: ", ";\n  overflow-x: hidden;\n"], ["\n  ", "\n  background-color: #FFF;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 1px 1px rgba(0,0,0,0.16);\n  overflow-y: ", ";\n  overflow-x: hidden;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  padding: 25px;\n  margin-top: ", ";\n"], ["\n  padding: 25px;\n  margin-top: ", ";\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 10px;\n  z-index: 10;\n  width: 100%;\n"], ["\n  position: fixed;\n  top: 10px;\n  z-index: 10;\n  width: 100%;\n"]);

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _slateReact = require("slate-react");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _menuToolbar = require("./menuToolbar");

var _menuToolbar2 = _interopRequireDefault(_menuToolbar);

var _slateToolbar = require("slate-toolbar");

var _slateToolbar2 = _interopRequireDefault(_slateToolbar);

var _slateConstant = require("@canner/slate-constant");

var _slateIconBold = require("@canner/slate-icon-bold");

var _slateIconBold2 = _interopRequireDefault(_slateIconBold);

var _slateIconClean = require("@canner/slate-icon-clean");

var _slateIconClean2 = _interopRequireDefault(_slateIconClean);

var _slateIconTable = require("@canner/slate-icon-table");

var _slateIconHeader = require("@canner/slate-icon-header");

var _slateIconImage = require("@canner/slate-icon-image");

var _slateIconList = require("@canner/slate-icon-list");

var _slateIconUnderline = require("@canner/slate-icon-underline");

var _slateIconUnderline2 = _interopRequireDefault(_slateIconUnderline);

var _slateIconShared = require("@canner/slate-icon-shared");

var _slateIconAlign = require("@canner/slate-icon-align");

var _slateEditList = require("slate-edit-list");

var _slateEditList2 = _interopRequireDefault(_slateEditList);

var _slateTrailingBlock = require("slate-trailing-block");

var _slateTrailingBlock2 = _interopRequireDefault(_slateTrailingBlock);

var _slateHelperBlockList = require("@canner/slate-helper-block-list");

require("github-markdown-css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
// default value


var plugins = [(0, _slateTrailingBlock2.default)(), (0, _slateEditList2.default)(_slateHelperBlockList.DEFAULT), (0, _slateIconShared.ParagraphPlugin)(), (0, _slateIconBold.BoldPlugin)(), (0, _slateIconUnderline.UnderlinePlugin)(), (0, _slateIconHeader.HeaderOnePlugin)(), (0, _slateIconHeader.HeaderTwoPlugin)(), (0, _slateIconHeader.HeaderThreePlugin)(), (0, _slateIconTable.TablePlugin)(), (0, _slateIconImage.ImagePlugin)(), (0, _slateIconList.ListPlugin)()];

var Container = _styledComponents2.default.div(_templateObject, function (props) {
  return props.isFull && "\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    z-index: 99000\n  ";
}, function (props) {
  return props.isFull ? 'scroll' : 'hidden';
});

var EditorContainer = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.isFull ? '60px' : '10px';
});

var FixedToolbar = _styledComponents2.default.div(_templateObject3);

var toolbarOptions = {
  icons: [_slateIconBold2.default, _slateIconUnderline2.default, _slateIconAlign.AlignLeft, _slateIconAlign.AlignCenter, _slateIconAlign.AlignRight, _slateIconClean2.default],
  position: 'top',
  disabledTypes: [_slateConstant.BLOCKS.CODE, _slateConstant.BLOCKS.CODE_LINE, _slateConstant.BLOCKS.HEADING_1, _slateConstant.BLOCKS.HEADING_2, _slateConstant.BLOCKS.HEADING_3, _slateConstant.BLOCKS.HEADING_4, _slateConstant.BLOCKS.HEADING_5, _slateConstant.BLOCKS.HEADING_6]
};

var EditorComponent = function (_React$Component) {
  _inherits(EditorComponent, _React$Component);

  function EditorComponent(props) {
    _classCallCheck(this, EditorComponent);

    var _this = _possibleConstructorReturn(this, (EditorComponent.__proto__ || Object.getPrototypeOf(EditorComponent)).call(this, props));

    _this.goFull = function () {
      _this.setState({ isFull: !_this.state.isFull });
    };

    _this.state = {
      isFull: false
    };
    return _this;
  }

  _createClass(EditorComponent, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          value = _props.value,
          onChange = _props.onChange,
          serviceConfig = _props.serviceConfig,
          galleryConfig = _props.galleryConfig,
          menuToolbarOption = _props.menuToolbarOption,
          readOnly = _props.readOnly,
          placeholder = _props.placeholder,
          placeholderClassName = _props.placeholderClassName,
          autoFocus = _props.autoFocus,
          rest = _objectWithoutProperties(_props, ["value", "onChange", "serviceConfig", "galleryConfig", "menuToolbarOption", "readOnly", "placeholder", "placeholderClassName", "autoFocus"]);

      var isFull = this.state.isFull;

      return readOnly ? React.createElement(CannerEditor, {
        value: value,
        onChange: function onChange(arg) {
          return arg;
        },
        readOnly: readOnly,
        placeholder: placeholder,
        autoFocus: autoFocus,
        placeholderClassName: placeholderClassName }) : React.createElement(
        Container,
        _extends({ isFull: isFull }, rest),
        isFull ? React.createElement(
          FixedToolbar,
          null,
          React.createElement(_menuToolbar2.default, {
            isFull: true,
            value: value,
            serviceConfig: serviceConfig,
            galleryConfig: galleryConfig,
            menuToolbarOption: menuToolbarOption,
            onChange: onChange,
            goFull: this.goFull })
        ) : React.createElement(_menuToolbar2.default, {
          serviceConfig: serviceConfig,
          galleryConfig: galleryConfig,
          menuToolbarOption: menuToolbarOption,
          value: value,
          onChange: onChange,
          goFull: this.goFull }),
        React.createElement(
          EditorContainer,
          { isFull: isFull },
          React.createElement(CannerEditor, {
            value: value,
            onChange: onChange,
            readOnly: readOnly,
            placeholder: placeholder,
            autoFocus: autoFocus,
            placeholderClassName: placeholderClassName
          })
        )
      );
    }
  }]);

  return EditorComponent;
}(React.Component);

exports.default = EditorComponent;
var CannerEditor = (_dec = (0, _slateToolbar2.default)(toolbarOptions), _dec(_class2 = function (_React$Component2) {
  _inherits(CannerEditor, _React$Component2);

  function CannerEditor() {
    _classCallCheck(this, CannerEditor);

    return _possibleConstructorReturn(this, (CannerEditor.__proto__ || Object.getPrototypeOf(CannerEditor)).apply(this, arguments));
  }

  _createClass(CannerEditor, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (this.props.value === nextProps.value) return false;
      return true;
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          value = _props2.value,
          onChange = _props2.onChange,
          readOnly = _props2.readOnly,
          placeholder = _props2.placeholder,
          placeholderClassName = _props2.placeholderClassName,
          autoFocus = _props2.autoFocus;

      return React.createElement(_slateReact.Editor, {
        className: "markdown-body",
        value: value,
        readOnly: readOnly,
        onChange: onChange,
        plugins: plugins,
        placeholder: placeholder,
        autoFocus: autoFocus,
        placeholderClassName: placeholderClassName
      });
    }
  }]);

  return CannerEditor;
}(React.Component)) || _class2);