import React from 'react';
import PropTypes from 'prop-types';

const Eth = props => {
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
      <path d="M113.313 0C50.732 0 0 50.732 0 113.313s50.732 113.313 113.313 113.313 113.313-50.732 113.313-113.313S175.894 0 113.313 0zm-1.469 188.386l-44.78-63.344 44.78 26.218v37.126zm0-46.41l-45.083-26.408 45.083-19.748v46.156zm0-49.329l-43.631 19.11 43.631-73.306v54.196zm2.906-54.218l44.244 73.6-44.244-19.382V38.429zm0 149.957V151.26l44.78-26.218-44.78 63.344zm0-46.409V95.821l45.116 19.762-45.116 26.394z" />
    </svg>
  );
};

Eth.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Eth.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Eth;
