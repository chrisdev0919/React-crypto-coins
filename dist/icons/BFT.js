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

var Bft = function Bft(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 123.305 595.279 595.28',
      fill: color
    }, otherProps),
    _react2.default.createElement('path', { d: 'M314.623 376.888c7.656-5.659 11.495-14.91 11.495-27.71 0-7.063-1.293-12.902-3.839-17.448-2.544-4.52-5.964-8.106-10.197-10.669-4.27-2.512-9.171-4.318-14.68-5.317a99.798 99.798 0 0 0-17.26-1.49h-62.521v71.154h67.643c11.934-.001 21.697-2.829 29.359-8.52zm10.63 64.123c-8.778-6.65-20.422-9.992-34.897-9.992h-72.735v83.517h71.462c6.531 0 12.78-.644 18.727-1.903 5.968-1.296 11.214-3.426 15.751-6.408 4.506-2.979 8.141-7.015 10.835-12.139 2.683-5.13 4.073-11.642 4.073-19.602 0-15.627-4.406-26.774-13.216-33.473z' }),
    _react2.default.createElement('path', { d: 'M.304 123.305v595.28h595.28v-595.28H.304zM396.32 518.141c-5.944 11.273-13.948 20.428-24.048 27.514-10.043 7.109-21.544 12.327-34.461 15.739-12.886 3.407-26.161 5.121-39.764 5.121H150.793V262.281h142.981c14.452 0 27.663 1.256 39.579 3.819 11.915 2.563 22.12 6.745 30.639 12.572 8.508 5.822 15.104 13.572 19.781 23.236 4.683 9.65 7.018 21.561 7.018 35.774 0 15.34-3.463 28.121-10.407 38.354-6.983 10.234-17.257 18.607-30.863 25.127 18.725 5.434 32.712 14.856 41.895 28.354 9.237 13.498 13.846 29.775 13.846 48.811-.002 15.341-2.97 28.608-8.942 39.813zm98.271 48.374h-66.833V500.91h66.833v65.605z' })
  );
};

Bft.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Bft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Bft;