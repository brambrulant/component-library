import * as React from 'react'
import Typography from '../../../packages/trunkrs-fe-core/src/Typography/typography'
import Input, {
  InputProps,
} from '../../../packages/trunkrs-fe-core/src/Input/input'
import Search from '../../../packages/trunkrs-fe-core/src/Icons/Search'
import CaretDown from '../../../packages/trunkrs-fe-core/src/Icons/CaretDown'
import { Meta, StoryObj } from '@storybook/react'
import { Button } from '@trunkrs-fe/core/src'
import ArrowLeft from '@trunkrs-fe/core/src/Icons/ArrowLeft'

const startAdornment = <Search />
const endAdornment = <CaretDown />

const meta: Meta<typeof Input> = {
  component: Input,
  argTypes: {
    label: {
      options: ['Label'],
      control: { type: 'text' },
    },
    placeholder: {
      options: ['Placeholder'],
      control: { type: 'text' },
    },
    helperMessage: {
      options: ['Helper Message'],
      control: { type: 'text' },
    },
    height: {
      options: ['medium', 'large'],
      control: { type: 'radio' },
    },
    currency: {
      options: ['$'],
      control: { type: 'text' },
    },
    startAdornment: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    endAdornment: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    disabled: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    readOnly: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    enableResize: {
      options: [true, false],
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const InputWithControls: Story = {
  render: (args) => (
    <Input
      {...args}
      startAdornment={args.startAdornment && <Search />}
      endAdornment={args.endAdornment && <CaretDown />}
    >
      {args.text}
    </Input>
  ),
}
InputWithControls.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  helperMessage: 'Helper Message',
  height: 'medium',
  currency: '$',
  startAdornment: true,
  endAdornment: true,
  disabled: false,
  readOnly: false,
  enableResize: false,
}

export const SmallInputs = () => {
  return (
    <div>
      <Typography variant="h3">Small Inputs</Typography>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridGap: '1rem',
        }}
      >
        <Input placeholder="Placeholder" />
        <Input startAdornment={startAdornment} placeholder="Placeholder" />
        <Input endAdornment={endAdornment} placeholder="Placeholder" />
        <Input
          startAdornment={startAdornment}
          endAdornment={endAdornment}
          placeholder="Placeholder"
        />
        <Input value="Filled" />
        <Input startAdornment={startAdornment} value="Filled" />
        <Input endAdornment={endAdornment} value="Filled" />
        <Input
          startAdornment={startAdornment}
          endAdornment={endAdornment}
          value="Filled"
        />
        <Input placeholder="Placeholder" disabled />
        <Input
          placeholder="Placeholder"
          startAdornment={startAdornment}
          disabled
        />
        <Input placeholder="Placeholder" endAdornment={endAdornment} disabled />
        <Input
          placeholder="Placeholder"
          startAdornment={startAdornment}
          endAdornment={endAdornment}
          disabled
        />
        <Input value="Filled" disabled />
        <Input value="Filled" startAdornment={startAdornment} disabled />
        <Input value="Filled" endAdornment={endAdornment} disabled />
        <Input
          value="Filled"
          startAdornment={startAdornment}
          endAdornment={endAdornment}
          disabled
        />
        <Input placeholder="Placeholder" intent="success" />
        <Input placeholder="Placeholder" intent="warning" />
        <Input placeholder="Placeholder" intent="danger" />
      </div>
    </div>
  )
}

export const LargeInputs = () => {
  return (
    <div>
      <Typography variant="h3">Large Inputs</Typography>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridGap: '1rem',
        }}
      >
        <Input placeholder="Placeholder" height="large" />
        <Input
          startAdornment={startAdornment}
          placeholder="Placeholder"
          height="large"
        />
        <Input
          endAdornment={endAdornment}
          placeholder="Placeholder"
          height="large"
        />
        <Input
          startAdornment={startAdornment}
          endAdornment={endAdornment}
          placeholder="Placeholder"
          height="large"
        />
        <Input value="Filled" height="large" />
        <Input startAdornment={startAdornment} value="Filled" height="large" />
        <Input endAdornment={endAdornment} value="Filled" height="large" />
        <Input
          startAdornment={startAdornment}
          endAdornment={endAdornment}
          value="Filled"
          height="large"
        />
        <Input placeholder="Placeholder" disabled height="large" />
        <Input
          placeholder="Placeholder"
          startAdornment={startAdornment}
          disabled
          height="large"
        />
        <Input
          placeholder="Placeholder"
          endAdornment={endAdornment}
          disabled
          height="large"
        />
        <Input
          placeholder="Placeholder"
          startAdornment={startAdornment}
          endAdornment={endAdornment}
          disabled
          height="large"
        />
        <Input value="Filled" disabled height="large" />
        <Input
          value="Filled"
          startAdornment={startAdornment}
          disabled
          height="large"
        />
        <Input
          value="Filled"
          endAdornment={endAdornment}
          disabled
          height="large"
        />
        <Input
          value="Filled"
          startAdornment={startAdornment}
          endAdornment={endAdornment}
          disabled
          height="large"
        />
        <Input placeholder="Placeholder" intent="success" height="large" />
        <Input placeholder="Placeholder" intent="warning" height="large" />
        <Input placeholder="Placeholder" intent="danger" height="large" />
      </div>
    </div>
  )
}

export const MultiLineInputs = () => {
  return (
    <div>
      <Typography variant="h3">Multiline Inputs</Typography>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridGap: '1rem',
        }}
      >
        <Input placeholder="Placeholder" multiline />
        <Input placeholder="Placeholder" multiline disabled />
        <Input placeholder="Placeholder" multiline intent="success" />
        <Input placeholder="Placeholder" multiline intent="warning" />
        <Input placeholder="Placeholder" multiline intent="danger" />
      </div>
    </div>
  )
}

export const ResizableMultiLineInput = () => {
  return (
    <div>
      <Typography variant="h3">Resizable Multiline input</Typography>
      <Input placeholder="Placeholder" multiline enableResize />
    </div>
  )
}

export const InputWithLabelAndHelperMessage = () => {
  return (
    <div>
      <Typography variant="h3">Input with label and helper message</Typography>
      <Input
        label="Small input"
        helperMessage="Helper message"
        placeholder="Placeholder"
      />
      <Input
        label="Large input"
        helperMessage="Helper message"
        placeholder="Placeholder"
        height="large"
      />
      <Input
        label="Multi line"
        helperMessage="Helper message"
        placeholder="Placeholder"
        multiline
      />
    </div>
  )
}
