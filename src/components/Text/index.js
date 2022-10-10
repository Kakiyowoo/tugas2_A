import React from "react";
const variantClasses = {
  h1: "font-bold lg:text-[355px] xl:text-[444px] text-[500px] 3xl:text-[600px]",
  h2: "font-bold lg:text-[32px] xl:text-[40px] text-[46px] 3xl:text-[55px]",
  h3: "font-normal lg:text-[25px] xl:text-[32px] text-[36px] 3xl:text-[43px]",
  h4: "font-bold lg:text-[22px] xl:text-[28px] text-[32px] 3xl:text-[38px]",
  h5: "font-medium lg:text-[19px] xl:text-[24px] text-[28px] 3xl:text-[33px]",
  h6: "font-medium lg:text-[15px] xl:text-[19px] text-[22px] 3xl:text-[26px]",
  body1: "lg:text-[14px] xl:text-[17px] text-[20px] 3xl:text-[24px]",
  body2:
    "font-normal lg:text-[12px] xl:text-[16px] text-[18px] 3xl:text-[21px]",
  body3:
    "font-normal lg:text-[11px] xl:text-[14px] text-[16px] 3xl:text-[19px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
