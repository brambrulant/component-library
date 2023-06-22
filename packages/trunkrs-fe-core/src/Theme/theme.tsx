import React from 'react'
import { ThemeProvider as ThemeProviderEmotion } from '@emotion/react'

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

const uniqueString = 'trunkrs-font'
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  themeOverride,
  children,
}) => {
  React.useEffect(() => {
    if (typeof document === 'undefined') return
    if (document.getElementById(uniqueString)) return
    const fontLink = document.createElement('link')

    fontLink.href = 'https://theme.trunkrs.nl/fonts.css'
    fontLink.id = uniqueString
    fontLink.rel = 'stylesheet'
    document.head.appendChild(fontLink)
  }, [])

  const theme = React.useMemo(() => ({ ...trunkrsTheme, ...themeOverride }), [])
  return <ThemeProviderEmotion theme={theme}>{children}</ThemeProviderEmotion>
}
