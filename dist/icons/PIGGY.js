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

var Piggy = function Piggy(props) {
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
    _react2.default.createElement('path', { d: 'M221.698 121.885l-7.878-8.257c.262-17.5-4.803-34.801-14.581-50.149 3.088-11.172 8.956-33.619 8.04-39.787-1.231-8.315-9.854-21.868-30.491-20.021-14.164 1.268-26.727 10.131-33.218 15.567-26.91-10.739-51.658-10.187-72.095-4.9-6.909-4.458-18.897-10.259-27.629-4.052-7.97 5.668-10.601 15.355-11.449 21.993-.019.01-.04.021-.059.038 0 0-32.339 19.709-32.339 68.684 0 27.526 9.439 47.654 23.121 62.796.405 6.067 1.816 13.588 6.139 16.356 3.809 2.438 10.022 2.464 15.333 1.866 5.137 3.421 10.445 6.476 15.775 9.222 9.389 4.837 21.264 9.519 34.431 12.305 5.655 7.816 16.291 19.938 27.783 19.728 12.288-.224 21.631-12.586 26.087-21.954 13.588-4.563 26.982-12.755 39.234-25.98 8.02 4.665 21.835-3.084 31.123-17.58 9.434-14.712 10.631-30.769 2.673-35.875zm-97.27-86.179s-17.103-10.815-33.553-12.73c-16.448-1.916-29.053.487-33.384.512l8.417-3.338s11.356-5.113 37.269-1.538c22.328 3.08 31.57 11.086 31.57 11.086l-10.319 6.008zm50.093 73.791c-3.682.148-6.893-5.471-7.171-12.547-.277-7.077 2.483-12.927 6.165-13.073 3.684-.146 6.895 5.474 7.17 12.551.281 7.074-2.479 12.925-6.164 13.069zm18.093-10.059c-3.121.127-5.842-4.637-6.079-10.639-.234-5.996 2.106-10.959 5.228-11.081 3.123-.126 5.844 4.639 6.078 10.639.239 5.999-2.104 10.962-5.227 11.081zm14.72 53.804c-.553 5.277-3.128 9.324-5.756 9.05-2.62-.272-4.296-4.766-3.742-10.044.554-5.276 3.131-9.326 5.753-9.045 2.621.27 4.297 4.771 3.745 10.039zm12.663-12.001c-.503 4.815-2.772 8.517-5.061 8.277-2.286-.237-3.733-4.332-3.229-9.149.507-4.811 2.773-8.517 5.063-8.273 2.288.237 3.732 4.333 3.227 9.145z' })
  );
};

Piggy.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Piggy.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Piggy;