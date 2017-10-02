import React from 'react';
import PropTypes from 'prop-types';

const NeoAlt = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 227 227"
      fill={color}
      {...otherProps}
    >
      <path d="M113.5 0C50.816 0 0 50.816 0 113.5S50.816 227 113.5 227 227 176.184 227 113.5 176.184 0 113.5 0zm-9.911 177L61 156.854V79.847l42.589 20.193V177zm1.082-84.803L62.758 72.324 124.411 50l41.913 19.874-61.653 22.323zM167 155.357l-43.671-20.69V93.489L167 77.677v77.68z" />
    </svg>
  );
};

NeoAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

NeoAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default NeoAlt;
