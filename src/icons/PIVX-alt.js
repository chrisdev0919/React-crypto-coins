import React from 'react';
import PropTypes from 'prop-types';

const PivxAlt = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 226.8 226.8"
      fill={color}
      {...otherProps}
    >
      <path d="M93.464 80.598l27.878-.133c10.446 0 17.366 6.254 17.366 16.966 0 10.845-6.853 17.299-17.499 17.299H94.795v38.191h7.785v-31.205h19.694c14.238 0 24.485-9.514 24.485-24.285 0-14.704-10.246-23.953-24.485-23.953h-28.81v7.12z" />
      <path d="M88.275 94.504h30.007v6.254H88.275z" />
      <path d="M113.4 0C50.8 0 0 50.8 0 113.4s50.8 113.4 113.4 113.4S226.8 176 226.8 113.4 176 0 113.4 0zm58.073 137.775c0 25.077-54.868 48.394-57.193 49.274l-.88.377-.88-.377c-1.257-.503-17.284-7.982-32.053-17.724-13.073-8.61-25.14-19.798-25.14-31.551V57.39L113.4 45.26l58.073 12.13v80.385z" />
    </svg>
  );
};

PivxAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PivxAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default PivxAlt;
