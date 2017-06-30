import React from 'react';
import PropTypes from 'prop-types';

const Rbt = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 226.777 226.777"
      stroke={color}
      {...otherProps}
    >
      <path d="M113.494 0C50.813 0 0 50.813 0 113.494s50.813 113.494 113.494 113.494 113.494-50.813 113.494-113.494S176.175 0 113.494 0zm0 200.452l-43.556-43.546.011-.006c-11.159-11.145-18.045-26.541-18.045-43.551 0-2.204.123-4.368.349-6.51h66.319c2.87 0 9.591 0 9.591 9.375 0 4.175 0 9.369-13.043 9.369H99.664l29.264 59.439-15.434 15.43zm43.552-43.546l-13.758 13.756-13.807-28.058c11.432-4.001 17.918-13.258 17.918-26.39 0-14.241-8.915-28.612-28.828-28.612H57.595c9.755-21.144 31.082-35.849 55.898-35.849 34.014 0 61.591 27.574 61.591 61.596 0 17.01-6.89 32.406-18.043 43.551l.005.006z" />
    </svg>
  );
};

Rbt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Rbt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Rbt;
