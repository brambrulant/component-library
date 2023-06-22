import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export const CaretDown: React.FC<Exclude<SvgIconProps, "viewBox">> =
  React.forwardRef((props, ref) => (
    <SvgIcon {...props} width="24" height="24" viewBox="0 0 24 24" ref={ref}>
      <path d="M12 15L18 9H6L12 15Z" />
    </SvgIcon>
  ));

export default CaretDown;
