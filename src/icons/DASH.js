import React from 'react';
import PropTypes from 'prop-types';

const Dash = props => {
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
      <path d="M113.388 0C50.766 0 0 50.766 0 113.388c0 62.623 50.766 113.389 113.389 113.389s113.389-50.766 113.389-113.389C226.777 50.766 176.011 0 113.388 0zM56.562 104.802h45.266l-5.238 17.024H51.326l5.236-17.024zm117.268-8.029c-1.801 6.506-7.656 26.023-10.059 32.945-2.4 6.922-6.829 12.734-12.506 16.057-5.676 3.323-7.797 4.712-15.731 4.712H54.303l5.721-18.542h76.395l11.414-37.109h-75.79l5.722-18.541h84.577c3.875 0 8.996 1.792 11.488 6.639 2.491 4.841 1.799 7.333 0 13.839z" />
    </svg>
  );
};

Dash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Dash.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Dash;
