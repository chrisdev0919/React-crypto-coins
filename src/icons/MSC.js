import React from 'react';
import PropTypes from 'prop-types';

const Msc = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 226.777 226.777"
      fill={color}
      {...otherProps}
    >
      <path d="M113.616.455C51.119.455.455 51.119.455 113.616s50.664 113.161 113.161 113.161 113.161-50.664 113.161-113.161S176.113.455 113.616.455zm-35.561 143.65l-36.107 7.871 49.667-95.857L106 88.141c-18.145 3.632-31.815 19.65-31.815 38.862a39.48 39.48 0 0 0 3.87 17.102zm35.767 10.582c-15.288 0-27.684-12.394-27.684-27.684 0-15.291 12.396-27.686 27.684-27.686 15.291 0 27.687 12.395 27.687 27.686s-12.396 27.684-27.687 27.684zm35.732-10.5a39.516 39.516 0 0 0 3.906-17.184c0-19.084-13.487-35.015-31.45-38.788l15.091-32.097 48.182 95.857-35.729-7.788z" />
    </svg>
  );
};

Msc.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Msc.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Msc;
