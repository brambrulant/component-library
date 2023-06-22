import * as React from 'react'
import { Typography, TypographyProps } from '@trunkrs-fe/core/src'
import { Meta, StoryObj } from '@storybook/react'
import { palette } from '@trunkrs-fe/core/src/Theme'

const meta: Meta<typeof Typography> = {
  component: Typography,
}

export default meta
type Story = StoryObj<typeof Typography>
export const TypographyVariants = () => {
  const variants: TypographyProps['variant'][] = [
    'h1',
    'h2',
    'h3',
    'h4',
    'xs',
    's',
    'm',
    'l',
  ]

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '16px',
        height: '200px',
      }}
    >
      {variants.map((variant) => (
        <div
          style={{
            margin: '1rem',
            padding: '1rem',
          }}
          key={variant}
        >
          <Typography variant={variant}>{variant.toUpperCase()}</Typography>
          <Typography variant={variant}>
            A shining crescent far beneath the flying vessel.
          </Typography>
        </div>
      ))}
    </div>
  )
}
