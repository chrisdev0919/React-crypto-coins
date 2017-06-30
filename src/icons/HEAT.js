import React from 'react';
import PropTypes from 'prop-types';

const Heat = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 226.8 226.8"
      {...otherProps}
    >
      <path d="M87.931 226.282h50.938L136.15 115.71h-45.5zM91.51 80.724h43.78L133.317.518H93.483zm-31.721-49.17c-20.845.866-38.223 16.537-41.01 37.388l-8.707 65.149c-3.2 23.945 15.274 45.235 39.352 45.536L59.789 31.554zm156.939 102.537l-8.707-65.149c-2.787-20.851-20.165-36.523-41.01-37.388l10.365 148.073c24.078-.301 42.553-21.591 39.352-45.536z" />
    </svg>
  );
};

Heat.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Heat.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Heat;
