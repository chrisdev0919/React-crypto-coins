import React from 'react';
import PropTypes from 'prop-types';

const Pivx = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 226.8 226.8"
      width={size}
      height={size}
      fill={color}
      {...otherProps}
    >
      <path d="M112.178.293L19.655 19.619v128.07c0 18.725 19.225 36.548 40.053 50.267 23.531 15.521 49.065 27.436 51.068 28.237l1.402.601 1.402-.601c3.705-1.402 91.121-38.551 91.121-78.504V19.619L112.178.293zM72.148 78.75h47.807v9.964H72.148V78.75zm54.168 43.355H94.939v49.715H82.536v-60.846h42.083c16.961 0 27.879-10.282 27.879-27.561 0-17.066-11.024-27.031-27.667-27.031l-44.415.212V45.253h45.899c22.685 0 39.009 14.734 39.009 38.161.001 23.533-16.324 38.691-39.008 38.691z" />
    </svg>
  );
};

Pivx.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Pivx.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Pivx;
