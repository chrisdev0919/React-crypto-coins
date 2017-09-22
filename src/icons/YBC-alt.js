import React from 'react';
import PropTypes from 'prop-types';

const YbcAlt = props => {
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
      <path d="M86.182 157.237h54.731v66.147a113.77 113.77 0 0 1-27.63 3.393C50.602 226.777-.21 175.964-.21 113.283c0-47.096 28.688-87.49 69.54-104.666v131.809l16.852 16.811z" />
      <path d="M157.237 86.14v131.809c40.854-17.176 69.54-57.569 69.54-104.666 0-62.681-50.813-113.494-113.494-113.494-9.529 0-18.782 1.182-27.626 3.393V69.33h54.73l16.85 16.81z" />
    </svg>
  );
};

YbcAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

YbcAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default YbcAlt;
