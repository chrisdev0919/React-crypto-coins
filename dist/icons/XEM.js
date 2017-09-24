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

var Xem = function Xem(props) {
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
    _react2.default.createElement('path', { d: 'M113.494 0C50.813 0 0 50.813 0 113.494s50.813 113.494 113.494 113.494 113.494-50.813 113.494-113.494S176.175 0 113.494 0zM56.229 109.718a125.808 125.808 0 0 1-1.088-4.792 127.089 127.089 0 0 1-2.523-21.623c-.013-.45.028-.541.173-.79.066-.117.125-.217.986-.675 18.31-9.751 38.957-14.905 59.706-14.905 4.469 0 8.995.246 13.513.735-11.149 6.458-18.094 18.323-18.094 31.62l.001.073c-.042 9.659-5.02 18.396-13.346 23.393a27.4 27.4 0 0 1-14.033 3.865c-10.93 0-21.079-6.787-25.295-16.901zm79.023 61.48a124.58 124.58 0 0 1-3.634 3.365 126.985 126.985 0 0 1-16.133 12.155c-.544.343-.812.454-1.917.454-1.221 0-1.567-.14-2.068-.459-20.919-13.277-37.788-32.914-47.962-55.701 5.488 3.11 11.709 4.784 17.987 4.784 6.21 0 12.343-1.586 17.72-4.577.364-.196.729-.408 1.005-.58 4.009-2.232 8.588-3.412 13.245-3.412 4.631 0 9.209 1.18 13.148 3.358l.252.146c.207.116.416.236.644.377 8.221 4.921 13.327 13.926 13.327 23.5-.001 5.942-1.993 11.828-5.614 16.59zm14.789-16.957c-.129-12.646-6.91-24.496-17.752-30.988a20.19 20.19 0 0 0-.869-.5l-.119-.074c-8.273-5.007-13.214-13.764-13.217-23.424v-.35c.182-14.94 12.391-27.038 27.371-27.038 1.383 0 2.79.108 4.188.322 1.556.46 3.085.944 4.546 1.437a126.747 126.747 0 0 1 19.021 8.212c.863.459.923.563.988.674.147.256.183.334.17.782-.765 25.345-9.362 50.326-24.327 70.947z' })
  );
};

Xem.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Xem.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Xem;