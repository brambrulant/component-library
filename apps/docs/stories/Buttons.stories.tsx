import * as React from 'react'

import ArrowLeft from '../../../packages/trunkrs-fe-core/src/Icons/ArrowLeft'
import CaretDown from '../../../packages/trunkrs-fe-core/src/Icons/CaretDown'

import { Button } from '@trunkrs-fe/core/src/Button'

import type { Meta, StoryObj } from '@storybook/react'
import { Story } from '@storybook/addon-docs/blocks'

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    text: {
      options: ['Button'],
      control: { type: 'text' },
    },
    buttonType: {
      options: ['primary', 'secondary', 'tertiary', 'text'],
      control: { type: 'radio' },
    },
    intent: {
      options: ['success', 'warning', 'danger'],
      control: { type: 'radio' },
    },
    disabled: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    fullWidth: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    isLoading: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    startAdornment: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    endAdornment: {
      options: [true, false],
      control: { type: 'boolean' },
    },
  },
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

export const ButtonWithControls: Story = {
  render: (args) => (
    <StyledDiv>
      <Button
        {...args}
        startAdornment={args.startAdornment && <ArrowLeft />}
        endAdornment={args.endAdornment && <CaretDown />}
      >
        {args.text}
      </Button>
    </StyledDiv>
  ),
}
ButtonWithControls.args = {
  text: 'Button',
  buttonType: 'primary',
  intent: 'success',
  size: 'medium',
  disabled: false,
  fullWidth: false,
  isLoading: false,
  startAdornment: true,
  endAdornment: true,
}

export const Primary = () => {
  return (
    <StyledDiv>
      <Button buttonType="primary">Default</Button>
      <Button buttonType="primary" intent="success">
        Success
      </Button>
      <Button buttonType="primary" intent="warning">
        Warning
      </Button>
      <Button buttonType="primary" intent="danger">
        Danger
      </Button>
    </StyledDiv>
  )
}

export const Secondary = () => {
  return (
    <StyledDiv>
      <Button buttonType="secondary">Default</Button>
      <Button buttonType="secondary" intent="success">
        Success!
      </Button>
      <Button buttonType="secondary" intent="warning">
        Warning
      </Button>
      <Button buttonType="secondary" intent="danger">
        Danger
      </Button>
    </StyledDiv>
  )
}

export const Tertiary = () => {
  return (
    <StyledDiv>
      <Button buttonType="tertiary">Default</Button>
      <Button buttonType="tertiary" intent="success">
        Success
      </Button>
      <Button buttonType="tertiary" intent="warning">
        Warning
      </Button>
      <Button buttonType="tertiary" intent="danger">
        Danger
      </Button>
    </StyledDiv>
  )
}

export const Text = () => {
  return (
    <StyledDiv>
      <Button buttonType="text">Default</Button>
    </StyledDiv>
  )
}

export const IconPlacement = () => {
  return (
    <StyledDiv>
      <Button buttonType="primary" startAdornment={<ArrowLeft />}>
        Start Adornment
      </Button>
      <Button buttonType="primary" endAdornment={<CaretDown />}>
        End Adornment
      </Button>
      <Button
        buttonType="primary"
        startAdornment={<ArrowLeft />}
        endAdornment={<CaretDown />}
      >
        Both
      </Button>
    </StyledDiv>
  )
}

export const DisabledAndLoading = () => {
  return (
    <StyledDiv>
      <Button buttonType="primary" isLoading>
        Primary
      </Button>
    </StyledDiv>
  )
}
