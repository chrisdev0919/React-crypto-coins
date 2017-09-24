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

var Ok = function Ok(props) {
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
    _react2.default.createElement('path', { d: 'M107.721 77.342c-5.435-1.521-31.388-7.814-36.522-9.131-5.491-1.409-20-3.697-23.697 4.673-3.696 8.37-13.479 31.741-16.848 40.268-3.37 8.526 1.957 12.995 6.956 14.3 5 1.305 38.48 10.109 44.459 11.414s15.218.543 18.914-7.718c3.696-8.262 13.696-31.631 16.631-39.676 2.935-8.044-4.458-12.609-9.893-14.13zM92.695 96.201c-1.44 3.947-6.703 16.117-8.516 20.17-1.813 4.053-4.653 4.295-7.585 3.655-2.934-.641-15.575-3.664-18.027-4.304-2.454-.642-4.985-2.213-3.333-6.396 1.652-4.182 6.828-16.276 8.642-20.381 1.813-4.106 6.025-3.653 8.718-2.961 2.52.645 14.5 3.561 17.167 4.307 2.664.746 4.373 1.964 2.934 5.91zm77.367 21.849l29.756-17.895-25.272-6.4-37.99 24.295 13.124-30.41-21.196-5.38-25.844 61.47 21.36 5.544 9.621-23.235s18.424 4.811 21.521 5.707c3.099.897 2.528 3.506 1.875 5.544-.651 2.038-7.5 18.18-7.5 18.18l20.952 5.219s8.234-19.729 10.436-25.599c2.201-5.87 1.223-7.99-.734-10.926-1.956-2.935-10.109-6.114-10.109-6.114z' }),
    _react2.default.createElement('path', { d: 'M113.375 0C50.76 0 0 50.76 0 113.375S50.76 226.75 113.375 226.75c62.614 0 113.374-50.76 113.374-113.375S175.989 0 113.375 0zm-.001 202.619c-49.287 0-89.242-39.955-89.242-89.244s39.955-89.244 89.242-89.244c49.288 0 89.244 39.955 89.244 89.244s-39.956 89.244-89.244 89.244z' })
  );
};

Ok.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Ok.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Ok;