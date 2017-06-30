import React from 'react';
import PropTypes from 'prop-types';

const BftAlt = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="595.279"
      height="595.28"
      viewBox="0 123.305 595.279 595.28"
      {...otherProps}
    >
      <path d="M316.458 441.51c-6.739-5.107-15.683-7.665-26.794-7.665h-55.853v64.129h54.872c5.018 0 9.81-.5 14.379-1.467 4.585-.994 8.613-2.631 12.097-4.915 3.461-2.29 6.251-5.392 8.318-9.323 2.065-3.938 3.128-8.938 3.128-15.053.001-12.001-3.382-20.558-10.147-25.706z" />
      <path d="M298.158 124.06c-164.097 0-297.121 132.914-297.121 296.891 0 163.958 133.024 296.881 297.121 296.881 164.094 0 297.121-132.923 297.121-296.881.001-163.978-133.027-296.891-297.121-296.891zm72.868 376.681c-4.565 8.658-10.711 15.682-18.464 21.125-7.711 5.461-16.54 9.467-26.459 12.086-9.896 2.614-20.092 3.933-30.535 3.933H182.496V304.268h109.79c11.097 0 21.243.969 30.391 2.935 9.147 1.972 16.986 5.182 23.526 9.659 6.535 4.464 11.595 10.418 15.191 17.842 3.597 7.401 5.39 16.552 5.39 27.467 0 11.779-2.659 21.586-7.992 29.448-5.363 7.861-13.253 14.288-23.7 19.293 14.379 4.173 25.121 11.409 32.169 21.772 7.095 10.369 10.635 22.865 10.635 37.485 0 11.78-2.282 21.969-6.87 30.572zm75.464 37.144h-51.318v-50.372h51.318v50.372z" />
      <path d="M308.295 392.275c5.879-4.347 8.827-11.452 8.827-21.279 0-5.426-.994-9.904-2.948-13.396-1.955-3.469-4.578-6.225-7.827-8.194-3.281-1.929-7.044-3.318-11.277-4.08a76.125 76.125 0 0 0-13.25-1.145h-48.008v54.636h51.943c9.159.002 16.659-2.172 22.54-6.542z" />
    </svg>
  );
};

BftAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BftAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default BftAlt;
