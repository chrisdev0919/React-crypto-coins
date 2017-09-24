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

var JbsAlt = function JbsAlt(props) {
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
    _react2.default.createElement('path', { d: 'M113.388 0C50.766 0 0 50.766 0 113.388c0 62.623 50.766 113.389 113.389 113.389s113.389-50.766 113.389-113.389C226.777 50.766 176.011 0 113.388 0zm59.832 158.025c-1.039 2.237-1.804 5.078-4.15 6.335-2.35 1.256-5.625.327-7.045.817-1.42.492-1.911 3.332-4.149 3.44-2.24.11-6.608-2.456-8.519-4.914-1.913-2.456-1.039-5.842-4.097-6.662-3.058-.817-5.788.492-7.917.492-2.132 0-5.517-.819-7.318-.218-1.801.601-4.422 3.221-7.918 6.989-3.494 3.768-5.46 4.368-7.917 8.737-2.458 4.366-1.912 8.954-1.912 8.954-3.085-.763-5.352-3.248-6.908-5.461-1.555-2.211-3.439-7.945 1.146-17.856 4.587-9.91 13.27-11.875 13.27-11.875s2.95 4.996 11.55 4.996 12.531-4.75 12.531-4.75 3.522 2.375 8.108 6.142c4.588 3.769 5.816 7.128 5.816 7.128s7.454.326 10.483-2.377c3.032-2.702 1.229-8.271 1.229-8.271l-4.75 4.175s-3.03-6.059-6.146-10.319c-3.11-4.26-8.024-9.337-10.237-9.337-2.211 0-3.604 2.048-7.208 3.849-3.604 1.803-10.239 1.885-10.239 1.885s8.028-9.175 7.864-14.743c-.163-5.571-7.699-10.075-7.699-10.075s6.717 1.229 11.468 4.586c4.751 3.359 9.828 9.419 10.401 8.848.573-.574-5.406-9.666-5.815-10.402-.408-.738.165-4.261-2.703-6.555-2.866-2.293-8.109 1.065-8.109 1.065s.083-7.617-6.961-8.927c7.616-17.365-1.884-30.144-9.994-37.844-8.109-7.699-33.582-19.084-53.323 4.669-18.43 22.608-7.781 50.21 10.976 56.598-14.662-15.151-13.433-35.875-4.341-48.16 9.092-12.288 29.815-15.154 40.709-4.669 10.892 10.484 6.061 21.459 6.061 21.459s-15.072-2.866-16.218-1.309c-1.148 1.555-.328 4.505 1.965 7.863 2.292 3.358 6.88 5.815 9.665 6.962-2.785 1.229-9.828 1.885-14.088-1.475-4.258-3.357-10.074-15.972-9.174-18.511.901-2.541 11.712-3.685 14.088-3.522-6.471-10.977-19.084-5.897-24.654.41-5.57 6.306-6.553 16.625-2.867 26.619 3.686 9.995 14.334 19.167 27.686 16.3 13.35-2.866 14.087-16.3 14.087-16.3s2.704 2.624 2.459 6.635c-.246 4.014-6.964 25.557-32.683 23.509-25.721-2.048-38.499-22.524-42.02-38.416-3.522-15.892 1.474-34.402 20.887-49.31 19.413-14.907 45.541-9.993 59.794 4.587 14.252 14.581 11.14 30.937 12.615 33.064 1.474 2.131 4.013 1.175 6.634 3.877 2.621 2.703 4.833 10.157 6.798 13.434 1.967 3.275 8.274 10.565 13.598 19.985 5.325 9.421 8.846 18.784 8.846 21.078.003 2.295-2.617 4.533-3.655 6.771z' })
  );
};

JbsAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

JbsAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = JbsAlt;