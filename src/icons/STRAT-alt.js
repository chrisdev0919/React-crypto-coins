import React from 'react';
import PropTypes from 'prop-types';

const StratAlt = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="595.279"
      height="595.281"
      viewBox="0 0 595.279 595.281"
      {...otherProps}
    >
      <path d="M298.505 333.021c26.896-14.914 125.938-69.84 153.45-85.093-28.294-15.649-122.33-67.851-155.143-86.067-23.739 13.309-123.746 69.392-153.452 86.05 32.507 18.225 146.622 82.222 152.199 85.35.895.507 1.829.38 2.946-.24z" />
      <path d="M297.661 0C133.268 0 0 133.268 0 297.66c0 164.396 133.268 297.665 297.662 297.665 164.393 0 297.662-133.269 297.662-297.665C595.323 133.268 462.054 0 297.661 0zM141.184 298.623c3.185 1.756 151 84.338 153.418 85.659 2.227 1.219 2.763.889 3.822.245 5.757-3.503 153.201-85.603 154.267-86.177 6.461-3.464 13.38-3.704 18.516-.627 4.494 2.689 7.07 7.498 7.07 13.195v31.515c0 12.636-10.016 18.948-13.784 21.317-5.819 3.676-153.534 86.554-154.699 87.187-3.348 1.812-7.774 3.731-13.004 3.731-3.566 0-7.503-.889-11.724-3.315-5.008-2.872-164.579-92.507-166.191-93.412l10.22-18.191c6.58 3.698 161.269 90.587 166.362 93.51 1.179.679 1.535.884 4.397-.667 6.699-3.628 148.303-83.266 153.527-86.496 4.027-2.54 4.027-3.39 4.027-3.663v-22.861c-26.98 14.942-144.72 80.719-148.148 82.787-5.406 3.287-14.078 6.005-24.645.239-2.515-1.367-150.365-83.973-153.487-85.693-8.956-4.921-14.091-13.483-14.091-23.488v-45.505h.003c0-.017-.003-.034-.003-.054-.006-5.7 2.92-10.742 7.822-13.49 3.33-1.872 138.604-77.729 163.055-91.439a17.8 17.8 0 0 1 8.705-2.273c3.304 0 6.557.877 9.667 2.603 77.061 42.778 160.489 89.066 163.54 90.69 5.246 2.803 8.405 7.839 8.451 13.479.048 5.996-3.461 11.684-9.161 14.84-3.799 2.108-129.634 71.888-160.488 89.007-3.736 2.073-7.861 3.167-11.935 3.167a23.23 23.23 0 0 1-11.337-2.979c-5.338-2.991-109.908-61.635-147.453-82.69v24.644c0 3.046 1.874 4.43 3.281 5.205z" />
    </svg>
  );
};

StratAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

StratAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default StratAlt;
