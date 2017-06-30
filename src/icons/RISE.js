import React from 'react';
import PropTypes from 'prop-types';

const Rise = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 226.8 226.8"
      width={size}
      height={size}
      stroke={color}
      {...otherProps}
    >
      <circle class="st0" cx="73.8" cy="17.9" r="17.9" />
      <circle class="st0" cx="153.2" cy="208.9" r="17.9" />
      <path
        class="st0"
        d="M71.9 96.7c3.4 0 6.9-1.1 9.8-3.3l82.8-63c7.1-5.4 8.5-15.6 3.1-22.8C162.2.5 152-.9 144.8 4.5L62 67.5c-7 5.5-8.4 15.7-3 22.8 3.2 4.2 8.1 6.4 12.9 6.4zm0 64.5c3.4 0 6.9-1.1 9.8-3.3l82.8-63c7.1-5.4 8.5-15.6 3.1-22.8-5.4-7.1-15.6-8.5-22.8-3.1L62 132c-7.1 5.4-8.5 15.6-3.1 22.8 3.3 4.2 8.2 6.4 13 6.4zm95.7-23.4c-5.4-7.1-15.6-8.5-22.8-3.1l-82.8 63c-7.1 5.4-8.5 15.6-3.1 22.8 3.2 4.2 8 6.4 12.9 6.4 3.4 0 6.9-1.1 9.8-3.3l82.8-63c7.3-5.5 8.7-15.7 3.2-22.8z"
      />
    </svg>
  );
};

Rise.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Rise.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Rise;
