import * as React from 'react'

import { Typography } from '@trunkrs-fe/core/src'
import ArrowLeft from '../../../packages/trunkrs-fe-core/src/Icons/ArrowLeft'
import CaretDown from '../../../packages/trunkrs-fe-core/src/Icons/CaretDown'

import { Button } from '@trunkrs-fe/core/src/Button'

import type { Meta, StoryObj } from '@storybook/react'
import { Story, Preview, Props } from '@storybook/addon-docs/blocks'

const meta: Meta<typeof Button> = {
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

const StyledDiv = ({ children }: any) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '16px',
      height: '200px',
    }}
  >
    {children}
  </div>
)

export const Primary = () => {
  return (
    <StyledDiv>
      <Button buttonType="primary">
        <Typography variant="s">Default</Typography>
      </Button>
      <Button buttonType="primary" intent="success">
        <Typography variant="s">Success</Typography>
      </Button>
      <Button buttonType="primary" intent="warning">
        <Typography variant="s">Warning</Typography>
      </Button>
      <Button buttonType="primary" intent="danger">
        <Typography variant="s">Danger</Typography>
      </Button>
    </StyledDiv>
  )
}

export const Secondary = () => {
  return (
    <StyledDiv>
      <Button buttonType="secondary">
        <Typography variant="s">Default</Typography>
      </Button>
      <Button buttonType="secondary" intent="success">
        <Typography variant="s">Success</Typography>
      </Button>
      <Button buttonType="secondary" intent="warning">
        <Typography variant="s">Warning</Typography>
      </Button>
      <Button buttonType="secondary" intent="danger">
        <Typography variant="s">Danger</Typography>
      </Button>
    </StyledDiv>
  )
}

export const Tertiary = () => {
  return (
    <StyledDiv>
      <Button buttonType="tertiary">
        <Typography variant="s">Default</Typography>
      </Button>
      <Button buttonType="tertiary" intent="success">
        <Typography variant="s">Success</Typography>
      </Button>
      <Button buttonType="tertiary" intent="warning">
        <Typography variant="s">Warning</Typography>
      </Button>
      <Button buttonType="tertiary" intent="danger">
        <Typography variant="s">Danger</Typography>
      </Button>
    </StyledDiv>
  )
}

export const Text = () => {
  return (
    <StyledDiv>
      <Button buttonType="text">
        <Typography variant="s">Default</Typography>
      </Button>
    </StyledDiv>
  )
}

export const IconPlacement = () => {
  return (
    <StyledDiv>
      <Button buttonType="primary" startAdornment={<ArrowLeft />}>
        <Typography variant="s">Start Adornment</Typography>
      </Button>
      <Button buttonType="primary" endAdornment={<CaretDown />}>
        <Typography variant="s">End Adornment</Typography>
      </Button>
      <Button
        buttonType="primary"
        startAdornment={<ArrowLeft />}
        endAdornment={<CaretDown />}
      >
        <Typography variant="s">Both</Typography>
      </Button>
    </StyledDiv>
  )
}

export const DisabledAndLoading = () => {
  return (
    <StyledDiv>
      <Button buttonType="primary" isLoading>
        <Typography variant="s">Primary</Typography>
      </Button>
      <Button buttonType="secondary" isLoading>
        <Typography variant="s">Secondary</Typography>
      </Button>
      <Button buttonType="tertiary" isLoading>
        <Typography variant="s">Tertiary</Typography>
      </Button>
      <Button buttonType="primary" disabled>
        <Typography variant="m">Disabled</Typography>
      </Button>
      <Button buttonType="primary" disabled startAdornment={<ArrowLeft />}>
        <Typography variant="l">Disabled</Typography>
      </Button>
    </StyledDiv>
  )
}
