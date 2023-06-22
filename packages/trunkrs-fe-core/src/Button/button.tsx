import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { ButtonBaseProps } from "@mui/material/ButtonBase/ButtonBase";
import { styled } from "../Theme";

import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import TertiaryButton from "./TertiaryButton";
import TextButton from "./TextButton";

export interface ButtonProps extends ButtonBaseProps {
  buttonType?: "primary" | "secondary" | "tertiary" | "text";
  intent?: "success" | "warning" | "danger";
  size?: "small" | "medium" | "large";
  isLoading?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

const StartAdornment = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginRight: theme.spacing.units(2),
  "& svg": {
    height: "100%",
  },
}));
const EndAdornment = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginLeft: theme.spacing.units(2),
}));
const Spinner = styled(CircularProgress)(({ theme }) => ({
  width: theme.spacing.units(2),
}));

export const Button: React.FC<ButtonProps> = ({
  children,
  buttonType = "primary",
  intent,
  isLoading,
  startAdornment,
  endAdornment,
  fullWidth,
  disabled,
  size,
}) => {
  const buttonComponents = {
    primary: PrimaryButton,
    secondary: SecondaryButton,
    tertiary: TertiaryButton,
    text: TextButton,
  };

  const ButtonComponent = buttonComponents[buttonType];

  if (ButtonComponent) {
    return (
      <ButtonComponent
        disableRipple
        disabled={disabled || isLoading}
        intent={intent}
        size={size}
        fullWidth={fullWidth}
        classes={{
          disabled: "disabled",
        }}
      >
        {isLoading && <Spinner size={16} />}
        {startAdornment && <StartAdornment>{startAdornment}</StartAdornment>}
        {children}
        {endAdornment && <EndAdornment> {endAdornment}</EndAdornment>}
      </ButtonComponent>
    );
  }

  return null;
};

export default Button;
