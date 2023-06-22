import React from 'react'
import { addDecorator } from '@storybook/react'

import { ThemeProvider } from '@trunkrs-fe/core/src/Theme'
addDecorator(Story => (
  <ThemeProvider>
      <Story />
  </ThemeProvider>
))
