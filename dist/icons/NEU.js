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

var Neu = function Neu(props) {
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
    _react2.default.createElement('path', { d: 'M225.152 102.948c-4.025-15.171-14.142-27.145-24.048-33.543-9.906-6.397-25.595-9.7-25.595-9.7s.209-7.329-2.372-13.624-8.67-12.075-8.67-12.075-12.593 4.127-19.301 15.172c-6.706 11.043-4.54 24.46-2.271 29.62 2.271 5.16 8.567 11.456 8.567 11.456s.179 3.482-.749 4.257c-.93.773-11.533 5.572-27.401 6.656s-31.426 8.747-39.167 15.017c-7.74 6.271-17.726 20.357-17.726 20.357s4.8-12.616 17.726-25.312c12.927-12.694 24.615-16.797 30.188-34.291 5.573-17.493 4.8-34.445-4.335-48.609C100.867 14.164 84.379.077 58.837 0 33.292-.077 17.115 16.333 12.47 22.06 7.825 27.787-.301 42.107.009 55.808s6.657 26.705 6.657 26.705-.72-13.931 7.948-22.188c8.668-8.257 26.007-8.257 34.47 1.238 8.462 9.496 7.846 20.228 3.097 28.896-4.749 8.67-21.673 21.261-28.692 45.205-7.018 23.944-.229 44.068 7.651 53.666 7.881 9.599 22.665 17.339 31.721 18.5 9.057 1.161 9.288.62 10.14-.231s-1.238-3.561-2.167-7.122c-.929-3.561-1.315-6.192-1.315-6.192s4.334 13.546 16.178 21.906c11.842 8.359 25.234 10.682 33.826 10.682h81.274v-8.438c0-3.666-3.665-7.327-7.123-7.327-3.456 0-34.262-.053-36.018-.053-1.755 0-2.839-1.083-2.272-2.063.569-.98 13.11-15.325 10.426-34.727-2.684-19.403-13.314-30.216-26.214-37.362 0 0 10.836 2.893 20.743 13.006 9.908 10.113 12.28 17.854 13.417 23.633 1.136 5.779.825 15.894 1.755 16.203s8.565-15.895 8.772-29.62c.206-13.727-4.953-32.818-4.54-33.025.412-.207 10.629 5.885 22.807 6.709 12.181.824 22.087-1.962 22.087-1.962s4.54-13.727.515-28.899zm-16.173.035a6.781 6.781 0 0 0-6.778-6.761 6.78 6.78 0 0 0-6.779 6.78c0 1.308.389 2.518 1.029 3.554-4.314-1.552-7.401-5.663-7.401-10.51 0-6.17 5.003-11.174 11.175-11.174s11.177 5.004 11.177 11.174a11.133 11.133 0 0 1-2.423 6.937z' })
  );
};

Neu.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Neu.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Neu;