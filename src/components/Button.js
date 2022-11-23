import React from "react";
import PropTypes from "prop-types";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  rounded,
  outline,
}) {
  return (
    <button className="px-3 py-1.5 border border-emerald-600 bg-blue-500 rounded text-white">
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariantionValue: ({
    primary,
    secondary,
    success,
    warning,
    danger,
    rounded,
    outline,
  }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger) +
      Number(!!rounded) +
      Number(!!outline);
    if (count > 1) {
      return new Error("Only one of the style props is allowed");
    }
  },
};

export default Button;
