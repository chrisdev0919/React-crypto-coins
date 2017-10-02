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

var GolosAlt = function GolosAlt(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 227 227',
      fill: color
    }, otherProps),
    _react2.default.createElement('path', { d: 'M100.982 56.833c-6.025-.744-10.249 1.52-12.793 3.042l-2.213-3.724c2.666-1.591 8.196-4.325 15.471-3.627 6.381.691 10.65 4.578 12.677 6.422.162.149.326.297.49.443l-2.859 3.25-.084-.074-.197-.176-.229-.206-.002-.002c-2.053-1.85-5.342-4.815-10.261-5.348zM113.5 0C50.816 0 0 50.816 0 113.5S50.816 227 113.5 227 227 176.184 227 113.5 176.184 0 113.5 0zM72.46 70.541C74.122 54.37 88.586 45.533 103.88 47.2c15.295 1.667 26.112 22.508 19.95 35.679-5.693 12.171-15.627 16.505-24.771 17.673-7.315.933-23.441 1.166-30.59 1.166l13.3-9.002c-3.657-2.001-10.639-9.237-9.309-22.175zm101.079 87.697c-.067.165-.237-.327-.545-1.221h-.001c-1.252-3.627-4.784-13.853-12.921-13.451-11.443.564-26.004 10.207-38.958 18.785h-.001l-.001.002-.002.001-.001.001c-5.486 3.633-10.684 7.074-15.234 9.554-15.294 8.337-29.093 8.17-36.574 5.335-7.48-2.834-12.469-6.001-14.297-15.005-.04-.198.274.01.91.428 2.572 1.695 10.401 6.853 21.2 2.573 13.467-5.335 18.454-23.836 18.454-34.846 0-.276-.842-.426-2.356-.694-3.96-.702-12.526-2.224-22.747-8.976-11.305-7.469-15.018-14.56-15.462-17.172 7.038 3.112 24.007 8.869 35.577 7.002 14.464-2.334 27.764-7.502 35.91-19.84 2.001-3.031 3.972-6.191 5.898-9.282l.002-.004.002-.002c5.913-9.486 11.403-18.292 16.042-20.556 6.409-3.126 18.257-2.436 24.625-2.066l1.145.066-.234.134-.203.117c-4.313 2.485-14.155 8.153-16.853 12.92l-.617 1.086-.009.015c-3.318 5.831-6.897 12.119-10.181 26.076-2.793 11.871-9.365 25.063-12.303 30.176 8.146-2.668 26.301-6.936 33.749-2.668 9.31 5.337 10.308 20.842 5.986 31.512z' })
  );
};

GolosAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

GolosAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = GolosAlt;