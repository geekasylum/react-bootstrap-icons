import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Sunglasses = forwardRef(({ color, size, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M3 5a2 2 0 0 0-2 2v.5H.5a.5.5 0 0 0 0 1H1V9a2 2 0 0 0 2 2h1a3 3 0 0 0 3-3 1 1 0 1 1 2 0 3 3 0 0 0 3 3h1a2 2 0 0 0 2-2v-.5h.5a.5.5 0 0 0 0-1H15V7a2 2 0 0 0-2-2h-2a2 2 0 0 0-1.888 1.338A1.99 1.99 0 0 0 8 6a1.99 1.99 0 0 0-1.112.338A2 2 0 0 0 5 5H3zm0 1a1 1 0 0 0-1 1v.941c0 .264.356.348.474.112l.228-.457a2 2 0 0 1 .894-.894l.457-.228C4.289 6.356 4.205 6 3.94 6H3z"
      />
    </svg>
  );
});

Sunglasses.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Sunglasses.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Sunglasses;