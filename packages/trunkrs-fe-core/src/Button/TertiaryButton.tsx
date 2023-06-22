import ButtonBase from '@mui/material/ButtonBase'
import { styled, TrunkrsTheme } from '../Theme'
import { getButtonHeight, getFontColor } from './utils'

const getIntentBackgroundColorTertiary = (
  theme: TrunkrsTheme,
  intent?: 'success' | 'warning' | 'danger',
  state?: 'hover' | 'active',
) => {
  switch (intent) {
    case 'success':
      return state === 'active'
        ? theme.palette.primary.green.lightFade
        : 'white'
    case 'warning':
      return state === 'active'
        ? theme.palette.intent.yellow.lightFade
        : 'white'
    case 'danger':
      return state === 'active' ? theme.palette.intent.red.lightFade : 'white'
    default:
      return state === 'active' ? theme.palette.grayScale.grey34 : 'white'
  }
}

export const TertiaryButton = styled(ButtonBase, {
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
  backgroundColor: getIntentBackgroundColorTertiary(theme, intent),
  boxShadow: 'none',
  color: getFontColor(theme, intent),
  '&:hover': {
    boxShadow: theme.elevations[1].shadow1,
  },
  '&:active': {
    backgroundColor: getIntentBackgroundColorTertiary(theme, intent, 'active'),
    boxShadow: 'none',
  },
  '&:focus-visible': {
    boxShadow: `inset 0px 0px 0px 4px ${theme.palette.secondary.violet.color50}`,
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

export default TertiaryButton
