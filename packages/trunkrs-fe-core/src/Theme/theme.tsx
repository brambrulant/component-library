import React from 'react'

import { palette, Palette } from './palette'
import { typography, Typography } from './typography'
import { elevations, Elevation, transitions, Transitions } from './effects'
import { radius, Radius } from './radius'
import { spacing, Spacing } from './spacing'

export interface TrunkrsTheme {
  palette: Palette
  typography: Typography
  elevations: Elevation
  radius: Radius
  spacing: Spacing
  transitions: Transitions
}

export interface ThemeProviderProps {
  themeOverride?: Partial<TrunkrsTheme>
  children?: React.ReactNode
}

declare module '@emotion/react' {
  export interface Theme extends TrunkrsTheme {}
}

export const trunkrsTheme: TrunkrsTheme = {
  palette,
  typography,
  elevations,
  radius,
  spacing,
  transitions,
}
