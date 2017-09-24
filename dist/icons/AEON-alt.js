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

var AeonAlt = function AeonAlt(props) {
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
    _react2.default.createElement('path', { d: 'M146.835 87.515c-10.021-1.901-21.25 2.188-27.354 8.87-2.477-5.644-10.193-9.617-20.559-8.811S80.437 90.28 80.437 90.28l-2.131 12.267s7.774-4.205 15.318-4.264c7.543-.057 14.916.405 13.706 8.178 0 0-9.558-.346-18.024.806 0 0-16.643 1.383-19.408 14.109-2.763 12.726 4.377 18.656 14.34 18.601 9.962-.059 17.422-2.708 23.223-9.214 5.801 8.926 15.303 8.581 22.443 8.695 7.14.115 16.758-2.476 16.758-2.476l2.418-12.44s-9.732 4.492-17.563 4.377c-7.832-.113-12.266-1.15-11.46-8.292 0 0 11.518.115 17.795-.748 0 0 15.663-1.901 18.887-12.036 3.226-10.135.116-18.427-9.904-20.328zm-46.244 38.929c-2.935 2.937-9.242 4.319-12.999 1.339-3.758-2.98-1.469-8.941 3.023-10.496 4.491-1.554 14.686-.991 14.686-.991s-1.772 7.212-4.71 10.148zm33.559-15.894c-7.083.778-12.395.301-12.395.301s.475-7.169 5.355-10.624c4.881-3.456 11.921-3.281 13.648.258 1.729 3.544.475 9.287-6.608 10.065z' }),
    _react2.default.createElement('path', { d: 'M113.389 0C50.766 0 0 50.766 0 113.388c0 62.623 50.766 113.389 113.389 113.389 62.622 0 113.388-50.766 113.388-113.389C226.777 50.766 176.011 0 113.389 0zm70.068 60.423c3.722 4.881 5.082 11.176 4.368 18.337-18.479-9.684-47.696-14.009-79.745-10.259-1.234.145-2.46.304-3.68.469 33.651-20.181 66.918-24.465 79.057-8.547zm-41.046-29.77c6.476 2.259 11.467 7.616 14.881 15.217-17.754 1.505-39.831 9.988-61.48 24.456a189.926 189.926 0 0 0-10.036 2.094c16.717-30.052 39.38-47.786 56.635-41.767zm-99.09 136.622c-3.721-4.883-5.083-11.176-4.368-18.339 18.479 9.685 47.695 14.011 79.745 10.259 1.232-.144 2.458-.303 3.678-.471-33.65 20.184-66.917 24.469-79.055 8.551zm41.047 29.769c-6.477-2.26-11.468-7.617-14.882-15.217 17.754-1.506 39.83-9.988 61.479-24.455a189.224 189.224 0 0 0 10.034-2.093c-16.715 30.05-39.378 47.784-56.631 41.765zm33.931-41.245c-48.332 5.658-89.713-8.537-92.425-31.706-2.712-23.167 34.272-46.538 82.604-52.195 48.334-5.657 89.714 8.54 92.424 31.708 2.713 23.168-34.27 46.536-82.603 52.193z' })
  );
};

AeonAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

AeonAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = AeonAlt;