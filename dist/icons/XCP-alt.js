'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var XcpAlt = function XcpAlt(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 226.777 226.777',
      fill: color
    }, otherProps),
    _react2.default.createElement('path', { d: 'M193.424 50.858h-46.207l-80.195 80.196H46.316l-14.883-14.882v-18.88l14.93-14.929H65.9L76.372 92.8a3.727 3.727 0 0 0 2.702 1.163 3.717 3.717 0 0 0 2.801-1.282L98.641 75.96v-.015a3.734 3.734 0 0 0 .033-5.251v-.007L78.92 50.93H33.342L0 84.272v44.92l33.295 33.295H80.04l80.196-80.196h20.168l15.058 15.059v19.197l-14.618 14.619h-22.675l-8.661-8.66h-.007a3.728 3.728 0 0 0-5.26-.063h-.015L124.61 142.06v45.794a3.744 3.744 0 0 0 3.742 3.742h23.929a3.743 3.743 0 0 0 3.736-3.719l.026-18.836.012-.012a6.44 6.44 0 0 1 6.436-6.43h31.372l33.032-33.033V84.331l-33.471-33.473z' })
  );
};

XcpAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

XcpAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = XcpAlt;