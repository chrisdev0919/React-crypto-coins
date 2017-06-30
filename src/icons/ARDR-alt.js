import React from 'react';
import PropTypes from 'prop-types';

const ArdrAlt = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="595.279"
      height="595.28"
      viewBox="0 123.305 595.279 595.28"
      {...otherProps}
    >
      <path d="M297.64 124.087C133.689 124.087.782 256.994.782 420.945c0 163.953 132.907 296.86 296.858 296.86s296.857-132.907 296.857-296.86c0-163.951-132.906-296.858-296.857-296.858zm-173.979 409.79l172.598-301.509 44.531 76.711-131.06 224.798h-86.069zm92.194 0l70.584-121.287 44.061 54.541-114.645 66.746zm176.268-.068L288.601 407.551l82.651-45.043 100.366 171.301h-79.495z" />
    </svg>
  );
};

ArdrAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArdrAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default ArdrAlt;
