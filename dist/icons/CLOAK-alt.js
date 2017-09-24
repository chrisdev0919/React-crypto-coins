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

var CloakAlt = function CloakAlt(props) {
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
    _react2.default.createElement('path', { d: 'M113.353 41.198c-39.73 0-72.054 32.323-72.054 72.055 0 39.729 32.324 72.052 72.054 72.052 39.73 0 72.054-32.323 72.054-72.052 0-39.732-32.323-72.055-72.054-72.055zm25.333 100.821c-3.858-2.011-8.09-3.573-12.594-4.604 8.664-4.588 14.585-13.695 14.585-24.162 0-15.068-12.257-27.326-27.324-27.326-15.066 0-27.325 12.258-27.325 27.326 0 10.467 5.92 19.574 14.585 24.162-4.504 1.03-8.735 2.594-12.594 4.604-7.978-7.033-13.025-17.319-13.025-28.767 0-21.153 17.208-38.36 38.359-38.36 21.15 0 38.358 17.207 38.358 38.36.001 11.448-5.047 21.734-13.025 28.767zm17.818 16.786c-2.019-3.629-4.684-6.962-7.888-9.892 9.206-9.103 14.92-21.725 14.92-35.661 0-27.671-22.513-50.183-50.183-50.183s-50.182 22.512-50.182 50.183c0 13.937 5.713 26.559 14.917 35.661-3.203 2.93-5.868 6.263-7.887 9.892-12.083-11.451-19.643-27.633-19.643-45.553 0-34.625 28.169-62.793 62.793-62.793s62.793 28.167 62.793 62.793c.002 17.921-7.556 34.102-19.64 45.553z' }),
    _react2.default.createElement('path', { d: 'M113.354 0C50.75 0 0 50.75 0 113.354s50.75 113.354 113.354 113.354 113.354-50.751 113.354-113.354C226.709 50.75 175.958 0 113.354 0zm-.001 198.705c-47.119 0-85.453-38.335-85.453-85.452 0-47.12 38.334-85.454 85.453-85.454s85.453 38.334 85.453 85.454c0 47.117-38.334 85.452-85.453 85.452z' })
  );
};

CloakAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

CloakAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = CloakAlt;