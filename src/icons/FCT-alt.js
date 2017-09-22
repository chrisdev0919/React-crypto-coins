import React from 'react';
import PropTypes from 'prop-types';

const FctAlt = props => {
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
      <path d="M113.388 0C50.766 0 0 50.766 0 113.389s50.766 113.388 113.389 113.388 113.389-50.766 113.389-113.388S176.011 0 113.388 0zM40.579 89.697c2.313 7.646 8.269 16.236 23.363 16.236 32.566 0 50.376-26.46 50.376-26.46l-2.009-.867 15.139-20.709 1.425 25.851-2.646-.612s-20.864 34.806-62.996 34.806c-14.863 0-21.385-7.361-23.994-15.759a76.594 76.594 0 0 1 1.342-12.486zm-.943 22.504c4.196 5.123 10.401 10.645 18.38 12.109 9.031 1.654 28.314 1.16 49.076-12.476 20.76-13.637 28.496-30.634 28.496-30.634l-2.011-.864 15.14-20.711 1.425 25.85-2.646-.61s-6.107 14.755-24.629 30.937c-18.523 16.184-46.205 24.324-66.253 19.541-6.313-1.506-10.96-5.322-14.365-9.846a75.915 75.915 0 0 1-2.613-13.296zm10.357 31.047a75.93 75.93 0 0 1-5.633-11.52c4.755 5.164 11.815 10.32 21.515 11.35 16.374 1.742 29.819-1.934 50.376-14.248 20.558-12.313 27.683-24.83 27.683-24.83l-2.315-1.046 15.139-21.141 1.322 26.255-2.035-.711s-11.906 18.113-28.496 28.598c-16.589 10.482-35.924 20.455-58.518 17.811-7.842-.919-14.146-5.251-19.038-10.518zm6.773 9.572c6.482 3.652 14.84 6.695 24.706 6.695 17.021 0 33.813-7.252 48.545-17.021 14.73-9.77 26.943-25.492 26.943-25.492l-2.671-.994L169.632 95.4l1.297 26.256-2.977-1.297s-11.83 16.791-28.929 28.775c-17.097 11.982-32.821 18.93-54.498 18.93-6.235 0-12.436-2.281-18.109-5.527a76.697 76.697 0 0 1-9.65-9.717zm112.788 1.582l-1.146-.689s-14.038 15.053-32.209 22.213c-6.553 2.582-12.987 3.922-18.937 4.496a76.608 76.608 0 0 1-18.259-1.779c8.809.281 21.383-.768 34.295-6.686 23.814-10.914 30.607-20.686 30.607-20.686l-1.22-.84 7.402-6.486-.533 10.457zm17.124-39.515s-11.603 25.036-33.788 41.015c-22.187 15.979-39.081 21.17-52.107 21.17-4.391 0-8.879-.744-13.234-1.922a76.067 76.067 0 0 1-13.677-7.074c5.952 1.906 13.076 3.398 20.805 3.398 20.659 0 43.042-13.254 56.688-25.037 17.911-15.469 25.543-34.499 25.543-34.499l-3.46-1.426 15.063-20.762 1.323 25.851-3.156-.714z" />
    </svg>
  );
};

FctAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FctAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default FctAlt;
