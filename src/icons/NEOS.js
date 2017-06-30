import React from 'react';
import PropTypes from 'prop-types';

const Neos = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 595.279 595.281"
      stroke={color}
      {...otherProps}
    >
      <path d="M0 .001h64.997v595.28H0zm364.322 164.468L78.559.001v595.28h64.997V111.912l220.766 127.729zm0-90.865L237.103.001H107.389l256.933 148.774zm0-73.603H264.219l100.103 57.915zm165.961 0h64.996v595.28h-64.996z" />
      <path d="M451.722 483.371l-220.765-127.73v75.172l285.762 164.468V.001h-64.997zm-220.765 38.306l127.219 73.604h129.713L230.957 446.506zm0 73.604H331.06l-100.103-57.909z" />
    </svg>
  );
};

Neos.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Neos.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Neos;
