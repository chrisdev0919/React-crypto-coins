import React from 'react';
import PropTypes from 'prop-types';

const Dcr = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 595.279 595.281"
      fill={color}
      {...otherProps}
    >
      <path d="M595.282 254.087c0-102.905-83.421-186.343-186.32-186.343H261.687l100.354 87.109h46.92c54.708 0 99.217 44.515 99.217 99.234 0 54.711-44.509 99.238-99.217 99.238H261.687l200.708 174.212H595.27L479.152 426.73c68.109-27.721 116.13-94.582 116.13-172.643z" />
      <path d="M186.334 440.428c-54.705 0-99.227-44.521-99.227-99.228 0-54.718 44.528-99.222 99.227-99.222h147.262L132.888 67.744H.012l116.12 100.807C48.023 196.27 0 263.139 0 341.201c0 102.916 83.425 186.337 186.334 186.337h147.267l-100.353-87.109h-46.914z" />
    </svg>
  );
};

Dcr.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Dcr.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Dcr;
