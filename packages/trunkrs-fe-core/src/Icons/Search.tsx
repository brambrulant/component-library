import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export const Search24: React.FC<Exclude<SvgIconProps, "viewBox">> =
  React.forwardRef((props, ref) => (
    <SvgIcon {...props} width="24" height="24" viewBox="0 0 24 24" ref={ref}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.5 10.75C18.5 15.0302 15.0302 18.5 10.75 18.5C6.46979 18.5 3 15.0302 3 10.75C3 6.46979 6.46979 3 10.75 3C15.0302 3 18.5 6.46979 18.5 10.75ZM16.5718 18.5718C14.9471 19.783 12.9323 20.5 10.75 20.5C5.36522 20.5 1 16.1348 1 10.75C1 5.36522 5.36522 1 10.75 1C16.1348 1 20.5 5.36522 20.5 10.75C20.5 13.2316 19.5729 15.4967 18.0461 17.2177L21.4142 20.5858L20 22L16.5718 18.5718Z"
      />
    </SvgIcon>
  ));

export default Search24;
