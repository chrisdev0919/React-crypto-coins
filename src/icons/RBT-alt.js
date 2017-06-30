import React from 'react';
import PropTypes from 'prop-types';

const RbtAlt = props => {
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
      <path d="M92.96 112.597h23.571c19.892 0 19.892-7.922 19.892-14.29 0-14.297-10.25-14.297-14.626-14.297H20.654a94.324 94.324 0 0 0-.532 9.927c0 25.943 10.501 49.423 27.52 66.419l-.015.008 66.427 66.412 23.536-23.53-44.63-90.649z" />
      <path d="M207.983 93.938C207.983 42.053 165.926 0 114.053 0 76.205 0 43.681 22.427 28.802 54.674h92.994c30.369 0 43.964 21.916 43.964 43.634 0 20.027-9.892 34.146-27.326 40.247l21.058 42.789 20.981-20.979-.008-.008c17.012-16.996 27.518-40.476 27.518-66.419z" />
    </svg>
  );
};

RbtAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

RbtAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default RbtAlt;
