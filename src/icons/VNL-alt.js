import React from 'react';
import PropTypes from 'prop-types';

const VnlAlt = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="226.777"
      height="226.777"
      viewBox="0 0 226.777 226.777"
      {...otherProps}
    >
      <path d="M113.388 0C50.765 0 0 50.766 0 113.387c0 62.624 50.765 113.39 113.389 113.39 62.623 0 113.389-50.766 113.389-113.39C226.777 50.766 176.011 0 113.388 0zm71.091 104.163c-.886 2.325-3.139 7.873-4.135 10.199-.997 2.326-2.621 3.09-4.946 3.09h-17.882l-2.27 6.314h15.315c3.543 0 4.541 2.436 3.654 4.762-.886 2.325-3.137 7.874-4.135 10.198-.996 2.326-2.62 3.091-4.946 3.091h-16.378l-8.825 24.548s-8.86 6.792-25.769 6.792c-16.906 0-25.618-6.497-25.618-6.497l-8.941-24.843H61.781c-2.325 0-3.95-.765-4.947-3.091-.997-2.324-3.249-7.873-4.134-10.198-.886-2.326.11-4.762 3.654-4.762h16.751l-2.272-6.314H51.519c-2.326 0-3.95-.764-4.946-3.09-.997-2.326-3.249-7.874-4.134-10.199-.886-2.326.11-4.763 3.654-4.763h18.243L53.255 68.614h23.774c8.564 0 13.584 5.316 15.355 10.189 1.772 4.872 21.707 60.246 21.707 60.246s19.492-53.898 21.854-60.395c2.361-6.497 10.188-10.04 15.503-10.04h23.626l-11.069 30.787h16.818c3.545 0 4.541 2.437 3.656 4.762z" />
    </svg>
  );
};

VnlAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

VnlAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default VnlAlt;
