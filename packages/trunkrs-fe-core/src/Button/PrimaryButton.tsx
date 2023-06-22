import React from 'react'
import { styled, TrunkrsTheme } from '../Theme'
import ButtonBase from '@mui/material/ButtonBase'
import { getButtonHeight } from './utils'

const getShade = (theme: TrunkrsTheme, state?: 'hover' | 'active') => {
  switch (state) {
    case 'hover':
      return 'color40'
    case 'active':
      return 'color55'
    default:
      return 'color50'
  }
}

const getIntentColor = (
  theme: TrunkrsTheme,
  intent?: 'success' | 'warning' | 'danger',
  state?: 'hover' | 'active',
) => {
  switch (intent) {
    case 'success':
      return theme.palette.primary.green[getShade(theme, state)]
    case 'warning':
      return theme.palette.intent.orange[getShade(theme, state)]
    case 'danger':
      return theme.palette.intent.red[getShade(theme, state)]
    default:
      return theme.palette.primary.green[getShade(theme, state)]
  }
}

const PrimaryButton = styled(ButtonBase, {
  shouldForwardProp: (prop) =>
    prop !== 'intent' &&
    prop !== 'size' &&
    prop !== 'isLoading' &&
    prop !== 'startAdornment' &&
    prop !== 'endAdornment' &&
    prop !== 'fullWidth' &&
    prop !== 'height' &&
    prop !== 'disabled',
})<{
  intent?: 'success' | 'warning' | 'danger'
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  disabled?: boolean
}>(({ theme, intent, size, fullWidth, disabled }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  margin: 'auto',
  padding: theme.spacing.units(0, 2),
  minHeight: getButtonHeight(theme, size),
  width: fullWidth ? '100%' : 'auto',
  borderRadius: theme.radius.r4,
  backgroundColor: getIntentColor(theme, intent),
  boxShadow: theme.elevations[1].shadow1,
  color: theme.palette.primary.indigo.color50,
  '&:hover': {
    backgroundColor: getIntentColor(theme, intent, 'hover'),
    boxShadow: theme.elevations[1].shadow1,
  },
  '&:active': {
    backgroundColor: getIntentColor(theme, intent, 'active'),
    boxShadow: 'none',
  },
  '&:focus-visible': {
    boxShadow: `${theme.elevations[1].shadow1}, inset 0px 0px 0px 4px ${theme.palette.secondary.violet.color50}`,
  },
  ...(disabled && {
    pointerEvents: 'none',
    backgroundColor: theme.palette.grayScale.grey34,
    boxShadow: 'none',
    color: theme.palette.grayScale.placeholder,
    '& .MuiCircularProgress-root': {
      color: theme.palette.primary.indigo.color50,
      margin: theme.spacing.units(0, 2, 0, 1),
    },
  }),
}))

export default PrimaryButton
