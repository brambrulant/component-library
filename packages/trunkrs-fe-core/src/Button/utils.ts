import { TrunkrsTheme } from '../Theme'

export const getButtonHeight = (
  theme: TrunkrsTheme,
  size?: 'small' | 'medium' | 'large',
) => {
  switch (size) {
    case 'small':
      return theme.spacing.units(6)
    case 'medium':
      return theme.spacing.units(8)
    case 'large':
      return theme.spacing.units(12)
    default:
      return theme.spacing.units(8)
  }
}

export const getFontColor = (
  theme: TrunkrsTheme,
  intent?: 'success' | 'danger' | 'warning',
) => {
  switch (intent) {
    case 'success':
      return theme.palette.primary.green.color60
    case 'warning':
      return theme.palette.intent.yellow.color60
    case 'danger':
      return theme.palette.intent.red.color60
    default:
      return 'inherit'
  }
}
