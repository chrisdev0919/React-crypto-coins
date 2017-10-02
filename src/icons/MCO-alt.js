import React from 'react';
import PropTypes from 'prop-types';

const McoAlt = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 227 227"
      fill={color}
      {...otherProps}
    >
      <path d="M49.795 77.044V149.6l63.48 36.278 63.346-36.278V77.044l-63.346-36.233-63.48 36.233zm57.955 74.114l-11.816 10.95h-9.973L60.938 119.02l18.329-13.531 16.219 10.238v18.339l12.265 11.661v5.431zm-8.087-18.206l1.842-17.226-5.975-15.446h35.491l-5.841 15.446 1.707 17.182-27.224.044zm40.882 29.023h-9.839l-11.815-10.772-.045-5.519 12.221-11.618v-18.339l16.037-10.373 18.285 13.666-24.844 42.955zm6.559-65.879l-67.612-.045 6.289-27.598h54.72l6.603 27.643z" />
      <path d="M113.5 0C50.816 0 0 50.816 0 113.5S50.816 227 113.5 227 227 176.184 227 113.5 176.184 0 113.5 0zM183 153.25L113.275 193 44 153.25v-79.5L113.275 34 183 73.75v79.5z" />
    </svg>
  );
};

McoAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

McoAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default McoAlt;
