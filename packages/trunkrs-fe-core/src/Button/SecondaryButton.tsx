import ButtonBase from '@mui/material/ButtonBase'

import { styled, TrunkrsTheme } from '../Theme'
import { getButtonHeight, getFontColor } from './utils'

const getIntentBackgroundColorSecondary = (
  theme: TrunkrsTheme,
  intent?: 'success' | 'warning' | 'danger',
  state?: 'hover' | 'active',
) => {
  switch (intent) {
    case 'success':
      return state ? theme.palette.primary.green.lightFade : 'white'
    case 'warning':
      return state ? theme.palette.intent.yellow.lightFade : 'white'
    case 'danger':
      return state ? theme.palette.intent.red.lightFade : 'white'
    default:
      if (state === 'hover') return theme.palette.grayScale.grey34
      if (state === 'active') return theme.palette.grayScale.grey42
      return 'white'
  }
}

export const SecondaryButton = styled(ButtonBase, {
  shouldForwardProp: (prop) =>
    prop !== 'intent' &&
    prop !== 'size' &&
    prop !== 'isLoading' &&
    prop !== 'startAdornment' &&
    prop !== 'endAdornment' &&
    prop !== 'fullWidth' &&
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
  backgroundColor: getIntentBackgroundColorSecondary(theme, intent),
  boxShadow: theme.elevations[1].shadow1,
  color: getFontColor(theme, intent),
  '&:hover': {
    backgroundColor: getIntentBackgroundColorSecondary(theme, intent, 'hover'),
    boxShadow: theme.elevations[1].shadow1,
  },
  '&:active': {
    backgroundColor: getIntentBackgroundColorSecondary(theme, intent, 'active'),
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

export default SecondaryButton
