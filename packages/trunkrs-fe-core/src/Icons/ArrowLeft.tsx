import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export const ArrowLeft: React.FC<Exclude<SvgIconProps, "viewBox">> =
  React.forwardRef((props, ref) => (
    <SvgIcon {...props} width="24" height="24" viewBox="0 0 24 24" ref={ref}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.4049 12.9906L12.7073 19.2929L11.293 20.7071L2.58594 12L11.293 3.29291L12.7073 4.70712L6.42381 10.9906L21.0008 11L20.9995 13L6.4049 12.9906Z"
      />
    </SvgIcon>
  ));

export default ArrowLeft;
