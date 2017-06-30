import React from 'react';
import PropTypes from 'prop-types';

const NoteAlt = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="226.777"
      height="226.777"
      viewBox="0 0 226.777 226.777"
      {...otherProps}
    >
      <path d="M106.329 0H18.546v214.547c0 6.781 5.497 12.277 12.278 12.277s12.278-5.496 12.278-12.277V24.554h63.228c19.824 0 77.348 21.877 77.348 88.858 0 66.98-56.382 88.857-75.813 88.857H73.18c-6.781 0-12.278 5.496-12.278 12.277s5.497 12.277 12.278 12.277h34.684c34.997 0 100.367-33.267 100.367-113.412C208.231 34.247 140.751 0 106.329 0z" />
      <path d="M99.577 163.288H71.953c-6.782 0-12.277 5.497-12.277 12.278s5.495 12.277 12.277 12.277h27.624c22.815 0 65.377-24.95 65.377-72.648 0-50.108-39.928-73.453-66.912-73.453H59.676v89.011c0 6.781 5.495 12.276 12.277 12.276 6.781 0 12.277-5.495 12.277-12.276V66.298h13.812c13.271 0 42.356 12.313 42.356 48.897 0 35.54-32.513 48.093-40.821 48.093z" />
    </svg>
  );
};

NoteAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

NoteAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default NoteAlt;
