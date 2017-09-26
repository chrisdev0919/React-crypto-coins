import React from 'react';
import PropTypes from 'prop-types';

const RiseAlt = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 226.8 226.8"
      width={size}
      height={size}
      fill={color}
      {...otherProps}
    >
      <path
        class="st0"
        d="M113.4 0C50.8 0 0 50.8 0 113.4 0 176 50.8 226.8 113.4 226.8c62.6 0 113.4-50.8 113.4-113.4C226.8 50.8 176 0 113.4 0zM89.5 45c6 0 10.8 4.8 10.8 10.8 0 6-4.8 10.8-10.8 10.8-6 0-10.8-4.8-10.8-10.8 0-6 4.9-10.8 10.8-10.8zm-7 40.7l49.9-38c4.3-3.3 10.4-2.4 13.7 1.9s2.4 10.4-1.9 13.7l-49.9 38c-1.8 1.3-3.9 2-5.9 2-3 0-5.9-1.3-7.8-3.9-3.3-4.2-2.4-10.4 1.9-13.7zm0 38.9l49.9-38c4.3-3.3 10.4-2.4 13.7 1.9 3.3 4.3 2.4 10.4-1.9 13.7l-49.9 38c-1.8 1.3-3.9 2-5.9 2-3 0-5.9-1.3-7.8-3.9-3.3-4.3-2.4-10.4 1.9-13.7zm11.8 55.2c-1.8 1.3-3.9 2-5.9 2-3 0-5.9-1.3-7.8-3.9-3.3-4.3-2.4-10.4 1.9-13.7l49.9-38c4.3-3.3 10.4-2.4 13.7 1.9 3.3 4.3 2.4 10.4-1.9 13.7l-49.9 38zm43.1 1.9c-6 0-10.8-4.8-10.8-10.8 0-6 4.8-10.8 10.8-10.8 6 0 10.8 4.8 10.8 10.8 0 6-4.9 10.8-10.8 10.8z"
      />
    </svg>
  );
};

RiseAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

RiseAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default RiseAlt;
