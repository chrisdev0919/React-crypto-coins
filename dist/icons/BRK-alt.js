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

var BrkAlt = function BrkAlt(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 226.8 226.8',
      fill: color
    }, otherProps),
    _react2.default.createElement('path', { d: 'M113.621 97.878h-4.559v14.227h4.058c3.056 0 7.664-1.102 7.664-7.063.001-5.961-3.906-7.164-7.163-7.164zm-32.499 19.337h-5.598v12.975h5.539c2.68 0 6.76-1.41 6.76-6.329 0-4.92-2.353-6.646-6.701-6.646zm4.747-13.551c0-4.283-1.979-5.786-5.636-5.786h-4.709v11.296h4.659c2.254 0 5.686-1.226 5.686-5.51z' }),
    _react2.default.createElement('path', { d: 'M113.4 0C50.8 0 0 50.8 0 113.4s50.8 113.4 113.4 113.4S226.8 176 226.8 113.4 176 0 113.4 0zm84.872 131.379s-7.003 7.434-15.162 21.565c-8.159 14.132-11.095 23.913-11.095 23.913l10.095 5.828c-11.456 11.283-25.675 19.766-41.553 24.339v-12.005s-9.939-2.348-26.257-2.348-26.257 2.348-26.257 2.348v12.501c-16.293-4.356-30.91-12.805-42.684-24.183l11.226-6.481s-2.936-9.781-11.095-23.913c-8.159-14.131-15.162-21.565-15.162-21.565l-11.591 6.692a98.046 98.046 0 0 1-3.269-25.161 98.102 98.102 0 0 1 3.126-24.632l11.735 6.775s7.003-7.434 15.162-21.565 11.095-23.913 11.095-23.913l-11.619-6.708c11.84-11.57 26.601-20.161 43.076-24.566v13.113s9.939 2.348 26.257 2.348 26.257-2.348 26.257-2.348V18.796c16.059 4.626 30.424 13.248 41.947 24.724l-10.488 6.055s2.936 9.782 11.095 23.913 15.162 21.565 15.162 21.565l10.161-5.866a98.136 98.136 0 0 1 2.9 23.723 98.074 98.074 0 0 1-3.031 24.259l-10.031-5.79z' }),
    _react2.default.createElement('path', { d: 'M113.4 36.981c-41.935 0-75.93 33.995-75.93 75.93 0 41.935 33.995 75.93 75.93 75.93 41.935 0 75.93-33.995 75.93-75.93 0-41.935-33.995-75.93-75.93-75.93zm-16.961 89.927c-1.277 9.242-9.543 12.173-14.953 12.173H66.683v-49.97h14.981c9.796 0 13.122 6.011 12.972 13.676-.188 6.049-4.734 9.318-6.613 9.543 4.809 1.353 9.693 5.336 8.416 14.578zm25.06 12.173l-7.735-18.119c-.214.005-3.621.01-4.701.01v18.109h-9.017v-49.97h15.58c6.913 0 13.926 3.907 13.926 15.58 0 7.332-2.709 11.875-7.094 14.241l8.998 20.149h-9.957zm36.607 0l-9.929-20.575-4.392 7.355v13.22h-8.877v-49.97h8.877v20.152l11.976-20.152h9.966l-11.934 19.987 14.111 29.983h-9.798z' })
  );
};

BrkAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

BrkAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = BrkAlt;