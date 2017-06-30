import React from 'react';
import PropTypes from 'prop-types';

const UsdtAlt = props => {
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
      <path d="M127.329 100.328v16.979a278.765 278.765 0 0 1-29.027-.064v-13.556h-.003v-3.307c-26.678 1.284-46.427 5.897-46.427 11.392 0 6.491 27.542 11.749 61.518 11.749 33.974 0 61.518-5.258 61.518-11.749-.001-5.576-20.321-10.239-47.579-11.444z" />
      <path d="M113.389-.001C50.767-.001 0 50.763 0 113.387c0 62.621 50.767 113.39 113.389 113.39 62.622 0 113.388-50.769 113.388-113.39 0-62.624-50.767-113.388-113.388-113.388zm13.938 132.639v50.016H98.298V132.57c-31.075-1.798-54.321-9.026-54.321-17.674 0-8.646 23.246-15.873 54.321-17.674V83.207H58.779V54.179H166.85v29.028h-39.523l.002 13.948c31.654 1.684 55.474 8.989 55.474 17.741-.001 8.754-23.82 16.06-55.476 17.742z" />
    </svg>
  );
};

UsdtAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UsdtAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UsdtAlt;
