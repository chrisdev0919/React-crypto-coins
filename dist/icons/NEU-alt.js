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

var NeuAlt = function NeuAlt(props) {
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
    _react2.default.createElement('path', { d: 'M160.53 98.028a5.86 5.86 0 1 0-1.98 11.376 3.526 3.526 0 0 1-.54-1.863 3.56 3.56 0 0 1 3.557-3.559 3.56 3.56 0 0 1 3.558 3.547 5.85 5.85 0 0 0 1.269-3.639 5.864 5.864 0 0 0-5.864-5.862z' }),
    _react2.default.createElement('path', { d: 'M113.327 0C50.739 0 0 50.739 0 113.327c0 62.589 50.739 113.328 113.328 113.328 62.589 0 113.328-50.738 113.328-113.328C226.655 50.739 175.917 0 113.327 0zm60.375 123.253s-5.378 1.512-11.989 1.064c-6.609-.447-12.156-3.754-12.379-3.642-.224.113 2.576 10.476 2.464 17.927-.112 7.449-4.257 16.244-4.761 16.076-.505-.167-.337-5.657-.952-8.795-.617-3.137-1.905-7.338-7.284-12.827-5.377-5.489-11.259-7.06-11.259-7.06 7.001 3.88 12.773 9.748 14.229 20.279 1.457 10.532-5.35 18.318-5.659 18.851-.308.531.281 1.119 1.234 1.119.952 0 17.673.028 19.55.028 1.878 0 3.866 1.989 3.866 3.978v4.58h-44.115c-4.665 0-11.933-1.26-18.361-5.798-6.429-4.538-8.781-11.89-8.781-11.89s.209 1.428.713 3.36 1.639 3.403 1.177 3.866c-.463.462-.588.756-5.504.125-4.916-.63-12.94-4.832-17.218-10.042-4.277-5.209-7.962-16.133-4.152-29.129 3.809-12.997 12.996-19.831 15.573-24.536 2.578-4.706 2.913-10.532-1.681-15.685-4.593-5.155-14.005-5.155-18.709-.672-4.706 4.482-4.314 12.043-4.314 12.043s-3.446-7.058-3.614-14.495c-.168-7.437 4.243-15.209 6.764-18.318 2.521-3.109 11.301-12.016 25.167-11.974 13.864.042 22.813 7.689 27.771 15.377 4.958 7.689 5.378 16.89 2.354 26.385-3.026 9.496-9.369 11.723-16.386 18.613-7.017 6.891-9.622 13.74-9.622 13.74s5.42-7.647 9.622-11.052c4.201-3.401 12.645-7.562 21.259-8.149 8.613-.589 14.369-3.194 14.873-3.612.504-.421.408-2.311.408-2.311s-3.419-3.417-4.65-6.219c-1.233-2.8-2.409-10.083 1.231-16.077 3.641-5.995 10.478-8.235 10.478-8.235s3.304 3.138 4.704 6.554c1.401 3.417 1.289 7.395 1.289 7.395s8.515 1.793 13.892 5.265c5.377 3.473 10.869 9.972 13.053 18.207 2.183 8.235-.281 15.686-.281 15.686z' })
  );
};

NeuAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

NeuAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = NeuAlt;