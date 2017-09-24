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

var NvcAlt = function NvcAlt(props) {
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
    _react2.default.createElement('path', { d: 'M113.66 0C50.887 0 0 50.887 0 113.66s50.887 113.661 113.66 113.661 113.661-50.888 113.661-113.661S176.433 0 113.66 0zM54.137 121.441v-10.18c0-6.337 14.667-11.473 32.763-11.473 18.092 0 32.76 5.136 32.76 11.473v10.18c-1.752 3.642-14.126 8.273-32.76 8.273-18.637.001-31.011-4.631-32.763-8.273zm74.082 15.843c-1.754 3.643-14.129 8.273-32.763 8.273-18.636 0-31.009-4.631-32.763-8.273v-5.916c6.506 1.904 14.927 3.014 24.208 3.014 18.673 0 33.872-4.489 36.965-10.917l.461-.958v-.823c2.478 1.614 3.892 3.459 3.892 5.421v10.179zm4.203 2.023l.463-.959v-1.588c.37.688.583 1.396.583 2.122v10.181c-1.753 3.642-14.126 8.274-32.76 8.274-18.637 0-31.012-4.633-32.764-8.274v-2.968c6.821 2.578 16.558 4.131 27.512 4.131 18.674-.001 33.872-4.49 36.966-10.919zm-6.734 24.719c-1.753 3.641-14.127 8.272-32.76 8.272-18.636 0-31.012-4.632-32.765-8.272v-10.181c0-1.739 1.138-3.381 3.113-4.856v1.136l.462.959c3.094 6.429 18.293 10.917 36.969 10.917 9.66 0 18.375-1.21 24.981-3.26v5.285zm38.109-11.607c0 6.337-14.668 11.473-32.761 11.473-.23 0-.452-.01-.681-.015v-6.888c2.564-1.163 4.583-2.497 5.943-3.961 11.076-.53 21.597-2.727 27.498-6.505v5.896zm0-12.202c-1.521 3.154-11.026 7.051-25.662 8.034v-9.369c0-.15-.022-.296-.033-.444 10.405-.672 20.111-2.832 25.695-6.404v8.183zm0-14.492c-1.57 3.263-11.699 7.314-27.2 8.12-.898-1.382-2.154-2.633-3.712-3.748v-2.993a8.838 8.838 0 0 0-.52-2.946c12.467-.149 24.832-2.393 31.432-6.617v8.184zm0-14.492c-1.751 3.641-14.127 8.275-32.761 8.275-.677 0-1.325-.02-1.981-.03-1.31-1.157-2.896-2.192-4.728-3.106v-5.11c0-.618-.078-1.218-.196-1.797 2.28.144 4.593.218 6.905.218 12.908 0 25.926-2.258 32.761-6.632v8.182zm0-14.49c-1.751 3.64-14.127 8.274-32.761 8.274-3.406 0-6.601-.159-9.563-.435-4.373-4.683-13.301-7.547-23.2-8.764v-7.262c6.836 4.375 19.852 6.635 32.764 6.635 12.908 0 25.926-2.259 32.761-6.635v8.187zm0-14.492c-1.751 3.642-14.127 8.275-32.761 8.275-18.636 0-31.009-4.633-32.764-8.275V72.07c0-6.337 14.669-11.473 32.764-11.473 18.093 0 32.761 5.136 32.761 11.473v10.181z' })
  );
};

NvcAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

NvcAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = NvcAlt;