import React from 'react';
import PropTypes from 'prop-types';

const Gemz = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="226.777"
      height="226.777"
      viewBox="0 0 226.777 226.777"
      {...otherProps}
    >
      <path d="M113.369 0C50.757 0 0 50.757 0 113.369c0 62.611 50.757 113.369 113.369 113.369 62.611 0 113.369-50.758 113.369-113.369C226.738 50.757 175.98 0 113.369 0zm27.514 71.849c0 .061-.008.119-.003.181l3.701 40.998-28.032-41.179h24.334zm-26.78 3.553l29.375 43.153h-59.21l29.835-43.153zm-27.144-3.553h24.714l-28.527 41.26 3.813-41.074c.006-.063 0-.123 0-.186zm-6.525 0h2.505l-4.295 46.27L49 111.663l31.434-39.814zm-30.227 44.193l28.91 6.295 29.593 52.836-58.503-59.131zm33.64 6.534h59.958l-29.836 53.79-30.122-53.79zm35.436 52.617l29.293-52.849 29.374-6.289-58.667 59.138zm29.795-57.068L144.9 71.849h2.38l31.933 39.825-30.135 6.451z" />
    </svg>
  );
};

Gemz.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Gemz.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Gemz;
