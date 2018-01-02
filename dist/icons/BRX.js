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

var Brx = function Brx(props) {
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
    _react2.default.createElement('path', { d: 'M83.374 112.644c2.266-.272 7.748-4.214 7.975-11.509.181-9.244-3.829-16.493-15.644-16.493H57.637v60.264H75.49c6.525 0 16.493-3.534 18.034-14.681 1.54-11.147-4.35-15.95-10.15-17.581zM68.3 95.214h5.679c4.41 0 6.797 1.812 6.797 6.978s-4.138 6.646-6.857 6.646H68.3V95.214zm6.68 38.968H68.3v-15.648h6.752c5.243 0 8.08 2.082 8.08 8.015s-4.92 7.633-8.152 7.633zm58.478-30.751c0-14.077-8.458-18.789-16.795-18.789H97.874v60.264h10.875v-21.84c1.303 0 5.412-.006 5.67-.012l9.328 21.852h12.008l-10.851-24.3c5.287-2.854 8.554-8.333 8.554-17.175zm-19.816 8.941h-4.894V95.214h5.498c3.927 0 8.639 1.45 8.639 8.639 0 7.19-5.558 8.519-9.243 8.519zm50.93-27.73l-6.888 21.296-7.612-21.296h-12.053l12.415 29.271-13.14 30.993h11.509l7.794-21.84 8.518 21.84h11.963l-13.141-30.132 12.325-30.132z' }),
    _react2.default.createElement('path', { d: 'M223.442 85.93l-11.765 6.793s-8.109-8.608-17.556-24.971c-9.447-16.363-12.848-27.69-12.848-27.69l12.145-7.012c-13.343-13.288-29.976-23.273-48.572-28.629V19.03s-11.509 2.719-30.404 2.719-30.404-2.719-30.404-2.719V3.847c-19.077 5.1-36.17 15.049-49.882 28.447l13.455 7.768s-3.4 11.327-12.848 27.69-17.556 24.971-17.556 24.971L3.619 84.878A113.592 113.592 0 0 0 0 113.4c0 10.073 1.32 19.837 3.785 29.135l13.422-7.749s8.109 8.608 17.556 24.971 12.848 27.69 12.848 27.69l-12.999 7.505c13.634 13.174 30.56 22.958 49.426 28.002v-14.476s11.509-2.719 30.404-2.719 30.404 2.719 30.404 2.719v13.901c18.386-5.296 34.85-15.119 48.116-28.184l-11.689-6.749s3.4-11.326 12.848-27.69c9.447-16.363 17.556-24.971 17.556-24.971l11.614 6.705a113.63 113.63 0 0 0 3.509-28.091 113.62 113.62 0 0 0-3.358-27.469zM113.4 201.322c-48.558 0-87.922-39.364-87.922-87.922S64.842 25.478 113.4 25.478s87.922 39.364 87.922 87.922-39.364 87.922-87.922 87.922z' })
  );
};

Brx.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Brx.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Brx;