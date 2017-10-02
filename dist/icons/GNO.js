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

var Gno = function Gno(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 226.8 226.8',
      width: size,
      height: size,
      fill: color
    }, otherProps),
    _react2.default.createElement('path', { d: 'M150.536 91.192l-3.278 3.278c2.608 4.098 3.427 9.239 1.639 14.156-2.98 8.345-12.219 12.741-20.639 9.76-1.192-.447-2.31-.969-3.278-1.639l-10.506 10.506-9.164-9.239a16.733 16.733 0 0 1-14.827 1.863c-8.643-3.129-13.113-12.592-9.984-21.16.447-1.341 1.118-2.533 1.863-3.651l-3.949-3.949-.745 1.267a43.02 43.02 0 0 0-6.333 22.427c-.075 23.768 19.297 43.214 43.065 43.214h.075c23.768 0 43.065-19.297 43.14-43.065a43.34 43.34 0 0 0-6.259-22.427l-.82-1.341z' }),
    _react2.default.createElement('path', { d: 'M87.205 99.909a8.924 8.924 0 0 0-1.788 5.365c0 4.843 3.949 8.792 8.792 8.792a8.532 8.532 0 0 0 5.365-1.863L87.205 99.909zm43.14 11.549c1.416.969 3.055 1.49 4.917 1.49 4.843 0 8.792-3.949 8.792-8.792 0-1.788-.522-3.502-1.49-4.917l-12.219 12.219zm-15.721 9.239L79.009 84.933l1.416-1.49c8.792-9.313 20.788-14.529 33.677-14.529h.075c13.039 0 25.556 5.588 34.273 15.274l1.341 1.49-35.167 35.019zM84.821 84.933l29.803 29.877 29.43-29.281c-7.898-7.898-18.627-12.443-29.803-12.443h-.075c-11.101 0-21.458 4.173-29.355 11.847zm-9.463 58.786l-4.172-.298c-17.733-1.118-42.171-5.514-57.967-19.744-9.76-8.717-11.623-16.988-11.698-17.36L1 103.783h64.523l-.373 2.384a48.483 48.483 0 0 0-.447 6.557c0 9.835 2.831 19.372 8.27 27.493l2.385 3.502zm78.084 0l2.31-3.502c5.439-8.121 8.27-17.584 8.27-27.344 0-2.235-.149-4.545-.447-6.706l-.298-2.384H227.8l-.522 2.533c-.075.373-1.937 8.643-11.623 17.36-15.796 14.231-40.308 18.627-58.041 19.744l-4.172.299z' })
  );
};

Gno.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Gno.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Gno;