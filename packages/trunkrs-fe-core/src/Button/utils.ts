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
