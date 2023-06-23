import React from 'react'
import { ThemeProvider as ThemeProviderEmotion } from '@emotion/react/dist/emotion-react.cjs'
import { ThemeProviderProps, trunkrsTheme } from './theme'

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

export default ThemeProvider
