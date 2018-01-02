import React from 'react';
import PropTypes from 'prop-types';

const BtmAlt = props => {
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
      <g fill="currentColor" fillRule="evenodd">
        <circle fill="currentColor" cx="125" cy="125" r="125" />
        <path
          d="M99.304 92.522l14.609 14.608-40.696 40.957 6 22.696 15.392 4.174 19.304 19.304-5.74 5.739-45.912-12.26L50 141.825l9.13-9.13 40.174-40.174zm88.435 95.217L141.826 200l-49.304-49.304 14.608-14.609 40.957 40.696 22.696-6 4.174-15.392 19.304-19.304 5.739 5.74-12.26 45.912zM170.783 79.217l-15.392-4.174-19.304-19.304 5.74-5.739 45.912 12.26L200 108.175l-49.304 49.304-14.609-14.608 40.696-40.957-6-22.696zM75.043 94.61L55.74 113.913l-5.74-5.74 12.26-45.912L108.175 50l9.13 9.13 40.174 40.174-14.608 14.609-40.957-40.696-22.696 6-4.174 15.392z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};

BtmAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BtmAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default BtmAlt;
