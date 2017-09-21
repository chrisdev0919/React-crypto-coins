import React from 'react';
import PropTypes from 'prop-types';

const Sdc = props => {
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
      <path d="M61.965 82.459v59.258l51.318 29.628 51.318-29.628V82.459l-51.318-29.63-51.318 29.63zm91.385 38.656l-13.758-7.797v-16.42l-26.31-15.19-18.547 10.708 58.615 33.151v9.653l-40.067 23.134-40.069-23.134v-33.327l13.759 7.796v17.589l26.31 15.19 19.535-11.281-59.604-33.749v-8.484l40.069-23.134 40.067 23.134v32.161z" />
      <path d="M113.283-.211C50.602-.211-.211 50.602-.211 113.283s50.813 113.494 113.494 113.494 113.494-50.813 113.494-113.494S175.964-.211 113.283-.211zm64.424 150.689l-64.424 37.195-64.424-37.195v-74.39l64.424-37.196 64.424 37.196v74.39z" />
    </svg>
  );
};

Sdc.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Sdc.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Sdc;
