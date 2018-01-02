import React from 'react';
import PropTypes from 'prop-types';

const ArkAlt = props => {
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
          d="M124.637 107.958L50 184.279 124.972 66 200 185l-75.363-77.042zm10.83 30.318h-23.335l12-12.804 11.335 12.911v-.107zm-44.995 21.003l-.002-.164 13.23-13.136v-.055l40.364-.169 13.621 13.524H90.472z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};

ArkAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArkAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default ArkAlt;
