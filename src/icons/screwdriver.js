import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Screwdriver = forwardRef(({
  color, size, title, ...rest
}, ref) => {
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
      {title ? <title>{title}</title> : null}
      <path d="M0 .995.995 0l3.064 2.19a.995.995 0 0 1 .417.809v.07c0 .264.105.517.291.704l5.677 5.676.909-.303a.995.995 0 0 1 1.018.24l3.338 3.339a.995.995 0 0 1 0 1.406L14.13 15.71a.995.995 0 0 1-1.406 0l-3.337-3.34a.995.995 0 0 1-.24-1.018l.302-.909-5.676-5.677a.995.995 0 0 0-.704-.291H3a.995.995 0 0 1-.81-.417L0 .995Zm11.293 9.595a.497.497 0 1 0-.703.703l2.984 2.984a.497.497 0 0 0 .703-.703l-2.984-2.984Z" />
    </svg>
  );
});

Screwdriver.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

Screwdriver.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Screwdriver;
