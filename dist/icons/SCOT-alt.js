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

var ScotAlt = function ScotAlt(props) {
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
    _react2.default.createElement('path', { d: 'M113.388 44.226c-38.136 0-69.162 31.024-69.162 69.162 0 38.141 31.026 69.163 69.162 69.163 38.137 0 69.162-31.022 69.162-69.163.001-38.138-31.025-69.162-69.162-69.162zm32.998 72.911h17.376v12.797h-10.865c.573 2.45.972 5.009.972 7.826 0 20.013-16.2 34.971-41.255 34.971-16.63 0-30.237-6.534-40.173-19.169l17.709-18.96c6.696 7.582 16.419 13.058 23.978 13.058 7.126 0 12.74-4 12.74-9.059 0-3.298-2.243-6.007-6.169-8.667H63.013v-12.797h33.865c-3.304-2.039-6.222-4.167-8.713-6.399H63.013V97.941h15.828c-1.347-3.375-2.08-6.932-2.08-10.744 0-17.485 15.118-32.232 37.151-32.232 14.902 0 28.509 6.535 37.797 18.542l-17.713 17.487c-6.479-6.323-12.959-10.324-19.869-10.324-5.832 0-10.367 2.316-10.367 6.741 0 4.211 4.102 6.109 10.367 9.267l2.532 1.264h47.103v12.797h-24.485c2.706 2.033 5.147 4.132 7.109 6.398z' }),
    _react2.default.createElement('path', { d: 'M113.389 0C50.766 0 0 50.766 0 113.388c0 62.623 50.766 113.389 113.389 113.389 62.622 0 113.388-50.766 113.388-113.389C226.777 50.766 176.011 0 113.389 0zm-.001 199.978c-47.745 0-86.59-38.845-86.59-86.59s38.845-86.59 86.59-86.59c47.746 0 86.59 38.845 86.59 86.59s-38.843 86.59-86.59 86.59z' })
  );
};

ScotAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

ScotAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = ScotAlt;