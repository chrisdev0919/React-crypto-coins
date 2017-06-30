import React from 'react';
import PropTypes from 'prop-types';

const Ppc = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 226.8 226.8"
      width={size}
      height={size}
      stroke={color}
      {...otherProps}
    >
      <path
        class="st0"
        d="M164.6 223.8s10.4-34.6 5.8-65.7C165.8 127 138 89.3 117 72.3S55.7 36 55.7 36s35 26.8 47.1 39.6c12.1 12.8 28.8 34 36.7 61.9 7.9 27.8 6.5 76.2-9.5 86.3-16 10.2-58.3-7.4-72.4-19.2-14.1-11.8-32.1-31.1-37.3-71C15.1 93.6 16.6 0 16.6 0s75.1.4 131.8 36.2c56.8 35.8 62 64.2 62 110 0 45.9-45.8 77.6-45.8 77.6z"
      />
    </svg>
  );
};

Ppc.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Ppc.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Ppc;
