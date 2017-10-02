import React from 'react';
import PropTypes from 'prop-types';

const Swift = props => {
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
      <path d="M112.1 0L66.7 26.2l45.4 26.2zM61.8 81.5V29L16.4 55.2zm0 58.3V87.4l-45.4 26.2zm100.7 0V87.4l-45.4 26.2zM61.8 198.1v-52.4l-45.4 26.2zm-46.9-81.6v52.4l45.4-26.2zm0-58.3v52.4l45.4-26.2zM65.3 29v52.5l45.4-26.3zm46.8 197.8v-52.4l-45.4 26.2zm-46.8-81.5v52.4l45.4-26.2zM115.7 0v52.4l45.4-26.2zM166 29v52.5l45.3-26.3zm0 58.4v52.4l45.3-26.2zm0 110.7l45.3-26.2-45.3-26.2zm46.9-29.2v-52.4l-45.4 26.2zm-45.4-84.5l45.4 26.2V58.2zm-5-2.9V29l-45.4 26.2zm-46.8 145.3l45.4-26.2-45.4-26.2zm46.8-29.1v-52.4l-45.4 26.2z" />
    </svg>
  );
};

Swift.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Swift.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Swift;
