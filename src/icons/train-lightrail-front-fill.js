import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const TrainLightrailFrontFill = forwardRef(
  ({
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

        <path
          fillRule="evenodd"
          d="M6.5 0a.5.5 0 0 0 0 1h1v1.011c-1.525.064-3.346.394-4.588.655C1.775 2.904 1 3.915 1 5.055V13.5A2.5 2.5 0 0 0 3.5 16h9a2.5 2.5 0 0 0 2.5-2.5V5.055c0-1.14-.775-2.15-1.912-2.39-1.242-.26-3.063-.59-4.588-.654V1h1a.5.5 0 0 0 0-1h-3ZM8 4c-1.136 0-2.645.2-3.604.346-.825.126-1.356.9-1.244 1.697.022.16.046.335.07.522C3.357 7.596 3.5 8.949 3.5 10c0 .428-.024.933-.062 1.464a57.32 57.32 0 0 1-.266 2.682c-.041.34-.08.634-.108.854h1.008a62.692 62.692 0 0 0 .328-3h2.246c.36 0 .704-.143.958-.396a.353.353 0 0 1 .25-.104h.292a.35.35 0 0 1 .25.104c.254.253.599.396.958.396H11.6a62.703 62.703 0 0 0 .328 3h1.008c-.029-.22-.066-.514-.108-.854-.092-.761-.2-1.752-.266-2.682A21.26 21.26 0 0 1 12.5 10c0-1.051.143-2.404.278-3.435.024-.187.048-.362.07-.522.112-.798-.42-1.571-1.244-1.697C10.644 4.199 9.136 4 8 4Zm-1.354 7H4.47c.019-.353.03-.692.03-1 0-.927-.104-2.051-.216-3h7.432c-.112.949-.216 2.073-.216 3 0 .308.011.647.03 1H9.354a.353.353 0 0 1-.25-.104 1.354 1.354 0 0 0-.958-.396h-.292c-.36 0-.704.143-.958.396a.353.353 0 0 1-.25.104Zm5.199-5h-7.69l-.013-.096a.497.497 0 0 1 .405-.57C5.505 5.188 6.947 5 8 5s2.495.188 3.453.334a.497.497 0 0 1 .405.57L11.845 6ZM6 13.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm4 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Z"
        />
      </svg>
    );
  },
);

TrainLightrailFrontFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

TrainLightrailFrontFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default TrainLightrailFrontFill;
