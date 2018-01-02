import React from 'react';
import PropTypes from 'prop-types';

const Xzc = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 250 250"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
    >
      <path d="M159.565 164.846h42.366v37.055H74.641L232.656 43.75c5.153-5.157 6.68-12.988 4.008-19.673C233.802 17.393 227.313 13 219.87 13H31.13C21.015 13 13 21.022 13 31.145v133.701l78.435-78.501H49.07V49.099h127.099L18.344 207.25c-5.153 5.157-6.68 12.988-4.008 19.673C17.198 233.607 23.687 238 31.13 238h188.74c9.924 0 18.13-8.022 18.13-18.145V86.345l-78.435 78.501z" />
    </svg>
  );
};

Xzc.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Xzc.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Xzc;
