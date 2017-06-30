import React from 'react';
import PropTypes from 'prop-types';

const NxtAlt = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 226.777 226.777"
      stroke={color}
      {...otherProps}
    >
      <path d="M103.611 151.382h-20.78L25.09 113.118H9.681c-5.346 0-9.681-4.335-9.681-9.682 0-5.346 4.335-9.68 9.681-9.68h21.241l57.741 38.263h14.948c5.346 0 9.681 4.336 9.681 9.682 0 5.347-4.335 9.681-9.681 9.681zm85.364 0h-30.67l-57.74-38.264h-15.41c-5.347 0-9.682-4.335-9.682-9.682 0-5.346 4.335-9.68 9.682-9.68h21.242l57.741 38.263h24.837c5.348 0 9.682 4.336 9.682 9.682-.001 5.347-4.335 9.681-9.682 9.681zm28.122-19.132a9.68 9.68 0 0 1-9.681-9.681v-9.451h-47.117c-5.347 0-9.682-4.335-9.682-9.682 0-5.346 4.335-9.68 9.682-9.68h66.479v28.813c-.001 5.347-4.335 9.681-9.681 9.681zM28.39 151.382H9.681c-5.346 0-9.681-4.334-9.681-9.681 0-5.346 4.335-9.682 9.681-9.682H28.39c5.347 0 9.682 4.336 9.682 9.682 0 5.347-4.335 9.681-9.682 9.681z" />
    </svg>
  );
};

NxtAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

NxtAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default NxtAlt;
