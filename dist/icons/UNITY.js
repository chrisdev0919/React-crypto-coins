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

var Unity = function Unity(props) {
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
    _react2.default.createElement('path', { d: 'M113.38-.018C50.752-.018-.018 50.752-.018 113.38s50.77 113.397 113.398 113.397 113.397-50.77 113.397-113.397S176.008-.018 113.38-.018zm-70.921 140.54C35.826 132.601 32 123.486 32 113.763c0-7.671 2.37-14.959 6.609-21.583.339 4.199 1.601 9.531 6.269 14.229 7.037 7.096 19.72 10.541 38.746 10.541 13.54 0 23.304 2.734 28.239 7.896 4.093 4.297 3.859 9.311 3.76 11.518-.016.204-1.697 19.81-31.133 19.81-18.386-.002-32.575-6.689-42.031-15.652zm70.925 27.905c-6.407 0-12.61-.548-18.588-1.488 26.566-4.251 32.429-24.54 32.429-30.591.364-7.719-1.99-14.28-6.974-19.505-7.278-7.626-19.598-11.493-36.626-11.493-19.381 0-27.3-3.867-30.529-7.11-3.065-3.1-3.042-6.893-3.008-11.075 0-4.206 5.71-12.149 27.323-12.149 17.013 0 33.434 7.718 50.201 23.603 6.778 6.427 29.735 34.961 44.118 53.203-14.786 10.232-35.447 16.605-58.346 16.605zm61.599-31.167c-12.467-15.677-32.52-40.542-39.395-47.052-17.893-16.957-35.802-25.609-54.601-26.596 9.933-2.896 20.87-4.532 32.396-4.532 24.64 0 46.675 7.395 61.6 19.019v59.161zm11.598.268v-47.53c5.186 7.188 8.18 15.238 8.18 23.765-.001 8.524-2.995 16.567-8.18 23.765z' })
  );
};

Unity.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Unity.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Unity;