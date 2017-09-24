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

var Ldoge = function Ldoge(props) {
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
    _react2.default.createElement('path', { d: 'M81.026 96.324s-1.021 1.719-4.125 1.593c-.546 3.146 1.3 6.838 4.32 6.838 3.021 0 4.699-4.027 4.699-6.921-.251-.043-3.649.545-4.894-1.51z' }),
    _react2.default.createElement('ellipse', { cx: '73.197', cy: '76.357', rx: '4.475', ry: '6.992' }),
    _react2.default.createElement('ellipse', { cx: '81.026', cy: '91.066', rx: '4.894', ry: '3.049' }),
    _react2.default.createElement('path', { d: 'M113.387 0C50.764 0 0 50.764 0 113.387c0 62.621 50.765 113.387 113.387 113.387s113.387-50.767 113.387-113.387C226.774 50.764 176.009 0 113.387 0zm55.002 104.042c-2.266 3.943-8.223 6.88-8.223 7.718 0 .839 1.931 2.099 2.602 6.376.671 4.279-.42 18.71-.084 21.562s3.775 2.014 4.698 8.641c.923 6.628-2.685 27.097-3.607 27.854-.923.754-12.418.249-13.173-.254-.754-.504 2.602-6.375 3.692-9.563 1.09-3.188 1.511-11.074 1.007-12.332-.503-1.259-10.067-6.041-10.067-6.041s-.839 7.132-1.595 10.319c-.755 3.188-4.026 11.074-5.956 12.248-1.929 1.175-11.997.253-12.919-.335-.924-.587 7.634-14.598 7.466-16.611-.167-2.014-8.642-9.396-9.984-11.325s-1.511-6.544-1.511-6.544-12.248 8.138-12.751 8.726c-.503.587-3.607 30.453-5.537 32.383-1.93 1.93-9.816.923-10.403 0-.587-.924 1.175-8.557 1.426-14.011.252-5.453.336-13.675-.419-15.185-.755-1.511-6.879-2.014-6.879-2.014s.083 8.222 0 13.927c-.085 5.705-1.092 15.521-2.267 16.275-1.174.754-9.731.754-10.57 0-.839-.755 1.51-11.661 0-22.484-1.51-10.822-5.369-17.366-6.795-25.923-1.426-8.558-.419-24.498-1.006-26.008-.587-1.511-8.977-9.229-9.647-10.906-.671-1.678-.168-5.286-.168-5.286s-1.09-.42-1.175-2.349c-.083-1.93 5.118-7.718 5.118-7.718-.168-2.965-1.79-24.218 3.747-26.485 5.538-2.267 13.647 11.775 13.647 11.775s3.916-1.285 7.886-1.063c3.97.225 6.768 1.678 7.355 1.678s7.802-14.346 14.094-12.165c6.292 2.182 3.859 26.26 3.859 26.26.838 1.342 7.802 10.067 4.026 9.647 1.512 6.041-3.859 10.235-3.859 10.235s5.788 2.938 8.727 3.441c2.935.503 10.906.336 10.906.336s-.757-10.992 10.066-16.948c10.822-5.957 20.975 2.098 20.975 2.098.503-3.607 5.872 3.523 5.872 5.537 3.608 0 1.845 9.061 1.845 9.061s1.846 1.509-.419 5.453z' }),
    _react2.default.createElement('ellipse', { cx: '92.548', cy: '76.357', rx: '4.474', ry: '6.992' })
  );
};

Ldoge.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Ldoge.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Ldoge;