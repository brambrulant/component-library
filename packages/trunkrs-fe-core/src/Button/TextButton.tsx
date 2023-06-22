import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "../Theme";

import { getButtonHeight } from "./utils";

export const TextButton = styled(ButtonBase, {
  shouldForwardProp: (prop) =>
    prop !== "intent" &&
    prop !== "size" &&
    prop !== "isLoading" &&
    prop !== "startAdornment" &&
    prop !== "endAdornment" &&
    prop !== "fullWidth" &&
    prop !== "disabled",
})<{
  intent?: "success" | "warning" | "danger";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  disabled?: boolean;
}>(({ theme, size, fullWidth, disabled }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
  margin: "auto",
  padding: theme.spacing.units(0, 2),
  height: getButtonHeight(theme, size),
  width: fullWidth ? "100%" : "auto",
  borderRadius: theme.radius.r4,
  backgroundColor: "transparent",
  color: theme.palette.primary.indigo.color50,
  "&:hover": {
    color: theme.palette.primary.green.color50,
    textDecoration: "underline",
  },
  "&:active": {
    color: theme.palette.primary.green.color50,
    textDecoration: "underline",
  },
  "&:focus-visible": {
    boxShadow: `${theme.elevations[1].shadow1}, inset 0px 0px 0px 4px ${theme.palette.secondary.violet.color50}`,
  },
  ...(disabled && {
    pointerEvents: "none",
    backgroundColor: theme.palette.grayScale.grey34,
    boxShadow: "none",
    color: theme.palette.grayScale.placeholder,
    "& .MuiCircularProgress-root": {
      color: theme.palette.primary.indigo.color50,
      margin: theme.spacing.units(0, 2, 0, 1),
    },
  }),
}));

export default TextButton;
