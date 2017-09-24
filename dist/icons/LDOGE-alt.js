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

var LdogeAlt = function LdogeAlt(props) {
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
    _react2.default.createElement('path', { d: 'M211.784 97.719c3.955-6.885.731-9.521.731-9.521s3.078-15.819-3.221-15.819c0-3.516-9.374-15.964-10.254-9.667 0 0-17.722-14.061-36.616-3.662-18.896 10.4-17.577 29.586-17.577 29.586s-13.914.293-19.041-.585c-5.126-.879-15.233-6.006-15.233-6.006s9.375-7.323 6.737-17.869c6.592.732-5.565-14.5-7.03-16.844 0 0 4.249-42.038-6.737-45.846-10.985-3.805-23.581 21.24-24.607 21.24-1.025 0-5.909-2.539-12.841-2.929-6.932-.391-13.768 1.854-13.768 1.854S38.169-2.863 28.502 1.094c-9.667 3.958-6.834 41.063-6.542 46.24 0 0-9.081 10.106-8.935 13.475.147 3.369 2.051 4.101 2.051 4.101s-.879 6.298.292 9.228c1.172 2.929 15.818 16.405 16.844 19.041 1.026 2.637-.732 30.466 1.758 45.406 2.49 14.939 9.227 26.364 11.864 45.259s-1.465 37.936 0 39.254c1.465 1.317 16.404 1.317 18.456 0 2.05-1.318 3.808-18.456 3.955-28.415.146-9.96 0-24.314 0-24.314s10.691.879 12.01 3.516c1.318 2.636 1.172 16.99.732 26.511-.439 9.521-3.515 22.849-2.491 24.461 1.025 1.611 14.794 3.369 18.163 0 3.369-3.368 8.789-55.513 9.667-56.537.878-1.025 22.264-15.233 22.264-15.233s.293 8.055 2.636 11.425c2.344 3.369 17.138 16.259 17.431 19.772.292 3.516-14.647 27.977-13.036 29.002 1.611 1.024 19.188 2.636 22.558.586 3.368-2.051 9.08-15.819 10.398-21.385 1.317-5.565 2.783-18.016 2.783-18.016s16.698 8.349 17.575 10.546c.88 2.196.147 15.965-1.757 21.53-1.903 5.566-7.763 15.819-6.445 16.697 1.318.88 21.385 1.758 22.996.44 1.611-1.318 7.91-37.058 6.299-48.628-1.611-11.572-7.616-10.106-8.203-15.086-.584-4.981 1.319-30.174.147-37.644s-4.542-9.667-4.542-11.132c-.001-1.464 10.401-6.591 14.354-13.475zM45.592 61.591c-4.313 0-7.812-5.466-7.812-12.207 0-6.741 3.498-12.206 7.812-12.206s7.811 5.465 7.811 12.206c-.001 6.741-3.498 12.207-7.811 12.207zm14.01 37.373c-5.273 0-8.495-6.445-7.543-11.937 5.419.22 7.202-2.783 7.202-2.783 2.171 3.589 8.105 2.563 8.544 2.637.001 5.053-2.929 12.083-8.203 12.083zm-.341-18.577c-4.719 0-8.544-2.383-8.544-5.322s3.825-5.322 8.544-5.322c4.718 0 8.544 2.383 8.544 5.322.001 2.94-3.825 5.322-8.544 5.322zm20.116-18.796c-4.313 0-7.812-5.466-7.812-12.207 0-6.741 3.498-12.206 7.812-12.206s7.812 5.465 7.812 12.206-3.499 12.207-7.812 12.207z' })
  );
};

LdogeAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

LdogeAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = LdogeAlt;