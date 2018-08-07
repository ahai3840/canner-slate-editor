'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  background: transparent;\n  color: #222;\n  cursor: pointer;\n  -webkit-transition: background 0.2s ease 0s;\n  border-bottom: 0.5px solid #ebebeb;\n\n  &:hover {\n    background: #ebebeb;\n  }\n'], ['\n  display: inline-block;\n  background: transparent;\n  color: #222;\n  cursor: pointer;\n  -webkit-transition: background 0.2s ease 0s;\n  border-bottom: 0.5px solid #ebebeb;\n\n  &:hover {\n    background: #ebebeb;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  height: 35px;\n  width: 1px;\n  margin: 2px 0;\n  background: #ebebeb;\n  display: inline-block;\n  vertical-align: top;\n'], ['\n  height: 35px;\n  width: 1px;\n  margin: 2px 0;\n  background: #ebebeb;\n  display: inline-block;\n  vertical-align: top;\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _item = require('./components/item');

var _fullScreen = require('./components/fullScreen');

var _fullScreen2 = _interopRequireDefault(_fullScreen);

var _slateIconAlign = require('@canner/slate-icon-align');

var _slateIconBlockquote = require('@canner/slate-icon-blockquote');

var _slateIconBlockquote2 = _interopRequireDefault(_slateIconBlockquote);

var _slateIconTable = require('@canner/slate-icon-table');

var _slateIconTable2 = _interopRequireDefault(_slateIconTable);

var _slateIconCodeblock = require('@canner/slate-icon-codeblock');

var _slateIconCodeblock2 = _interopRequireDefault(_slateIconCodeblock);

var _slateIconFontbgcolor = require('@canner/slate-icon-fontbgcolor');

var _slateIconFontbgcolor2 = _interopRequireDefault(_slateIconFontbgcolor);

var _slateIconFontcolor = require('@canner/slate-icon-fontcolor');

var _slateIconFontcolor2 = _interopRequireDefault(_slateIconFontcolor);

var _slateIconHeader = require('@canner/slate-icon-header');

var _slateIconHr = require('@canner/slate-icon-hr');

var _slateIconHr2 = _interopRequireDefault(_slateIconHr);

var _slateIconImage = require('@canner/slate-icon-image');

var _slateIconImage2 = _interopRequireDefault(_slateIconImage);

var _slateIconIndent = require('@canner/slate-icon-indent');

var _slateIconLink = require('@canner/slate-icon-link');

var _slateIconLink2 = _interopRequireDefault(_slateIconLink);

var _slateIconList = require('@canner/slate-icon-list');

var _slateIconUndo = require('@canner/slate-icon-undo');

var _slateIconUndo2 = _interopRequireDefault(_slateIconUndo);

var _slateIconRedo = require('@canner/slate-icon-redo');

var _slateIconRedo2 = _interopRequireDefault(_slateIconRedo);

var _slateIconVideo = require('@canner/slate-icon-video');

var _slateIconVideo2 = _interopRequireDefault(_slateIconVideo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var IconContainer = _styledComponents2.default.div(_templateObject);

var Seperator = _styledComponents2.default.div(_templateObject2);

var Toolbar = function (_React$Component) {
  _inherits(Toolbar, _React$Component);

  function Toolbar() {
    _classCallCheck(this, Toolbar);

    return _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).apply(this, arguments));
  }

  _createClass(Toolbar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          onChange = _props.onChange,
          goFull = _props.goFull,
          isFull = _props.isFull,
          serviceConfig = _props.serviceConfig,
          galleryConfig = _props.galleryConfig,
          menuToolbarOption = _props.menuToolbarOption;


      var options = menuToolbarOption || [{ type: _slateIconUndo2.default, title: "Undo" }, { type: _slateIconRedo2.default, title: "Redo" }, 'seperator', { type: _slateIconHeader.Header1, title: "Header One" }, { type: _slateIconHeader.Header2, title: "Header Two" }, { type: _slateIconHeader.Header3, title: "Header Three" }, { type: _slateIconBlockquote2.default, title: "Blockquote" }, { type: _slateIconHr2.default, title: "Ruler" }, 'seperator', { type: _slateIconAlign.AlignLeft, title: "Align Left" }, { type: _slateIconAlign.AlignCenter, title: "Align Center" }, { type: _slateIconAlign.AlignRight, title: "Align Right" }, { type: _slateIconIndent.Indent, title: "Indent" }, { type: _slateIconIndent.Outdent, title: "Outdent" }, 'seperator', { type: _slateIconList.OlList, title: "Order List" }, { type: _slateIconList.UlList, title: "Unorder List" }, 'seperator', { type: _slateIconLink2.default, title: "Link" }, { type: 'image', title: "Image" }, { type: _slateIconVideo2.default, title: "Video" }, { type: _slateIconCodeblock2.default, title: "Code Bloack" }, { type: _slateIconTable2.default, title: "Table" }, 'seperator', { type: _slateIconFontcolor2.default, title: "Font Color" }, { type: _slateIconFontbgcolor2.default, title: "Font Background Color" }, 'seperator', { type: 'fullScreen', title: "Full Screen" }];

      return React.createElement(
        _item.Container,
        null,
        options.map(function (option, i) {
          var Type = typeof option === "string" ? option : option.type || option;
          var title = option.title;

          if (Type === 'seperator') return React.createElement(Seperator, { key: i });
          if (Type === 'fullScreen') {
            return React.createElement(
              IconContainer,
              {
                key: i,
                title: title },
              React.createElement(_fullScreen2.default, { className: '__canner-editor_topToolbarItem', goFull: goFull, isFull: isFull })
            );
          }

          // special plugin
          if (Type === 'image') {
            Type = _slateIconImage2.default;
          }

          return React.createElement(
            IconContainer,
            {
              key: i,
              title: title },
            React.createElement(Type, {
              change: value.change(),
              onChange: onChange,
              className: '__canner-editor_topToolbarItem',
              disableClassName: '__canner-editor_topToolbarItemDisabled',
              strokeClassName: 'qlStroke',
              serviceConfig: Type === _slateIconImage2.default && serviceConfig,
              galleryConfig: Type === _slateIconImage2.default && galleryConfig,
              strokeMitterClassName: 'qlStrokeMitter',
              fillClassName: 'qlFill',
              evenClassName: 'qlEven',
              colorLabelClassName: 'qlColorLabel',
              thinClassName: 'qlThin',
              activeStrokeMitterClassName: 'qlStrokeMitterActive',
              activeClassName: '__canner-editor_topToolbarItem __canner-editor_topToolbarItemActive',
              activeStrokeClassName: 'qlStrokeActive',
              activeFillClassName: 'qlFillActive',
              activeThinClassName: 'qlThinActive',
              activeEvenClassName: 'qlEvenActive'
            })
          );
        })
      );
    }
  }]);

  return Toolbar;
}(React.Component);

exports.default = Toolbar;