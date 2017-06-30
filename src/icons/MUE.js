import React from 'react';
import PropTypes from 'prop-types';

const Mue = props => {
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
      <path d="M113.389 0C50.766 0 0 50.766 0 113.389s50.766 113.39 113.39 113.39c62.623 0 113.39-50.767 113.39-113.39C226.779 50.766 176.012 0 113.389 0zM90.45 59.588c4.521-2.803 17.904 18.085 20.436 18.446 2.532.362 9.042-6.148 13.202-9.585 4.159-3.435 22.335-14.829 23.147-13.653.815 1.175-12.749 9.043-20.254 14.83-7.505 5.788-12.841 14.648-18.809 14.648-5.967 0-16.818-16.819-18.355-18.687-1.537-1.868-1.502-4.676.633-5.999zm58.533 96.178l-11.331-47.019-24.263 29.177-24.687-29.177-11.332 47.019H55.909l21.461-90.18 36.019 44.126 35.113-44.126 21.219 90.18h-20.738z" />
    </svg>
  );
};

Mue.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Mue.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Mue;
