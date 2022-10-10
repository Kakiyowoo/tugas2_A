import React from "react";
import PropTypes from "prop-types";

const shapes = {
  CustomBorderTL30:
    "rounded-bl-[15px] rounded-br-[15px] rounded-tl-[30px] rounded-tr-[30px]",
};
const variants = {
  FillDeeporange50: "bg-deep_orange_50 text-bluegray_900",
  FillYellow700: "bg-yellow_700 text-bluegray_900",
};
const sizes = { sm: "lg:p-[10px] xl:p-[13px] p-[15px] 3xl:p-[18px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["CustomBorderTL30"]),
  variant: PropTypes.oneOf(["FillDeeporange50", "FillYellow700"]),
  size: PropTypes.oneOf(["sm"]),
};
Button.defaultProps = {
  className: "",
  shape: "CustomBorderTL30",
  variant: "FillDeeporange50",
  size: "sm",
};

export { Button };
