import React from 'react'

import useInput from '@mui/base/useInput'
import MuiInput, { InputProps as MuiInputProps } from '@mui/base/Input'

import { unstable_useForkRef as useForkRef } from '@mui/utils'

import { styled, TrunkrsTheme } from '../Theme'

import { Typography } from '../Typography'

interface CustomInputProps {
  /**
   * The start adornment.
   */
  startAdornment?: React.ReactNode
  /**
   * The end adornment.
   */
  endAdornment?: React.ReactNode
  /**
   * The intent of the input. It will change the border color.
   */
  intent?: 'success' | 'warning' | 'danger'
  /**
   * If true, the input will have no border and will not be editable.
   */
  readOnly?: boolean
  /**
   * If true, the input will be disabled.
   */
  disabled?: boolean
  /**
   * If large, the input will have a fixed height of 56px.
   * If medium, the input will have a fixed height of 40px.
   * A number can also be passed, for a custom height in units (*4px).
   */
  height?: 'large' | 'medium' | number
  /**
   * If true, and the native html attribute multiline is also passed and true, the textarea will be resizable.
   */
  enableResize?: boolean
  /**
   * The currency symbol to be displayed in the input.
   */
  currency?: string
  /**
   * The label will be displayed above the input in bold.
   */
  label?: string
  /**
   * The helper message will be displayed below the input with a helper icon.
   */
  helperMessage?: string
  /**
   * Override or extend the styles applied to the component.
   * root: Styles applied to the root element.
   * input: Styles applied to the input element.
   * label: Styles applied to the label element.
   * helperMessage: Styles applied to the helper message element.
   */
  classes?: {
    root?: string
    input?: string
    label?: string
    helperMessage?: string
  }
}

export type InputProps = MuiInputProps & CustomInputProps

const handleBorderColors = (
  theme: TrunkrsTheme,
  intent?: 'success' | 'warning' | 'danger',
) => {
  switch (intent) {
    case 'success':
      return theme.palette.primary.green.color50
    case 'warning':
      return theme.palette.intent.yellow.color50
    case 'danger':
      return theme.palette.intent.red.color50
    case undefined:
      return theme.palette.grayScale.placeholder
    default:
      return theme.palette.grayScale.placeholder
  }
}

const StyledInputElement = styled(MuiInput, {
  shouldForwardProp: (prop) =>
    prop !== 'enableResize' &&
    prop !== 'size' &&
    prop !== 'intent' &&
    prop !== 'currency' &&
    prop !== 'height' &&
    prop !== 'intent' &&
    prop !== 'readOnly',
})<{
  height?: 'large' | 'medium' | number
  enableResize?: boolean
  currency?: string
  intent?: 'success' | 'warning' | 'danger'
}>(({ theme, height, intent, enableResize, currency }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: typeof height === 'number' ? 'flex-start' : 'center',
  flexDirection: 'row',
  cursor: 'text',
  padding: currency
    ? theme.spacing.units(0, 1, 0, 0)
    : theme.spacing.units(1, 1, 1, 2),

  fontFamily: theme.typography.variants.m.fontFamily,
  fontSize: theme.typography.variants.m.fontSize,
  fontWeight: theme.typography.variants.m.fontWeight,
  lineHeight: theme.typography.variants.m.lineHeight,

  borderRadius: theme.radius.r4,
  '--border-size': '1px',
  '--border-color': handleBorderColors(theme, intent),
  boxShadow: `inset 0px 0px 0px var(--border-size) var(--border-color)`,
  '&:hover:not(.Mui-disabled)': {
    '--border-color': intent
      ? handleBorderColors(theme, intent)
      : theme.palette.secondary.lightViolet.color40,
    '--border-size': '2px',
  },
  '&.Mui-focused:not(.Mui-disabled)': {
    '--border-color': intent
      ? handleBorderColors(theme, intent)
      : theme.palette.secondary.violet.color50,
    '--border-size': '2px',
  },
  transition: `box-shadow ${theme.transitions.fast}`,
  resize: enableResize ? 'both' : 'none',

  '&.MuiInput-adornedStart': {
    paddingLeft: currency ? 0 : theme.spacing.units(2),
  },
  '&.MuiInput-adornedEnd': {
    paddingRight: theme.spacing.units(2),
  },
  svg: {
    color: theme.palette.grayScale.grey90,
  },
  '&.Mui-disabled': {
    backgroundColor: theme.palette.grayScale.grey34,
    color: theme.palette.grayScale.grey58,
    svg: {
      color: theme.palette.grayScale.grey58,
    },
  },

  input: {
    width: '100%',
    fontFamily: theme.typography.variants.m.fontFamily,
    fontSize: theme.typography.variants.m.fontSize,
    fontWeight: theme.typography.variants.m.fontWeight,
    lineHeight: theme.typography.variants.m.lineHeight,
    color: theme.palette.primary.indigo.color50,
    border: 'none',
    height:
      typeof height === 'number'
        ? theme.spacing.units(height)
        : height === 'large'
        ? theme.spacing.units(11.5)
        : theme.spacing.units(7.5),
    '&:focus-visible': {
      outline: 0,
    },
    '&::placeholder': {
      color: theme.palette.grayScale.placeholder,
    },
    '&:disabled': {
      background: 'transparent',
      color: theme.palette.grayScale.grey58,
    },
  },
}))

const StyledTextArea = styled('textarea')(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  padding: theme.spacing.units(1),
  minWidth: '99%',
  minHeight: theme.spacing.units(22),
  border: 'none',
  resize: 'inherit',
  fontFamily: theme.typography.variants.m.fontFamily,
  fontSize: theme.typography.variants.m.fontSize,
  fontWeight: theme.typography.variants.m.fontWeight,
  lineHeight: theme.typography.variants.m.lineHeight,
  color: theme.palette.primary.indigo.color50,
  '::-webkit-scrollbar': {
    backgroundColor: theme.palette.grayScale.grey42,
    borderRadius: theme.radius.r4,
    width: theme.spacing.units(1),
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.grayScale.grey58,
    borderRadius: theme.radius.r4,
  },
  '::-webkit-scrollbar-track': {
    height: '5px',
    width: theme.spacing.units(1),
  },
  '&:focus-visible': {
    outline: 0,
  },
  input: {
    background: 'pink',
  },
}))

const Label = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing.units(1),
}))

const HelperMessage = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing.units(1),
}))

const CurrencyIcon = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: theme.spacing.units(5),
  marginRight: theme.spacing.units(1),
  padding: theme.spacing.units(1),
  zIndex: -1,
  borderRadius: `${theme.radius.r4} 0 0 ${theme.radius.r4}`,
  borderRight: `1px solid ${theme.palette.grayScale.placeholder}`,
  background: theme.palette.grayScale.grey34,
}))

export const Input = React.forwardRef(function CustomInput(
  {
    startAdornment,
    endAdornment,
    readOnly,
    disabled,
    currency,
    height,
    value,
    intent,
    enableResize,
    label,
    helperMessage,
    classes,
    ...props
  }: InputProps,
  ref: React.Ref<HTMLInputElement>,
) {
  const { getRootProps, getInputProps } = useInput(props)
  const inputProps = getInputProps()
  inputProps.ref = useForkRef(inputProps.ref, ref)

  return (
    <div {...getRootProps()} className={classes?.root}>
      {label && (
        <Label variant="s" bold className={classes?.label}>
          {label}
        </Label>
      )}
      <StyledInputElement
        {...props}
        {...inputProps}
        startAdornment={
          currency ? (
            <CurrencyIcon>
              <Typography variant="l">{currency}</Typography>
            </CurrencyIcon>
          ) : (
            startAdornment
          )
        }
        endAdornment={endAdornment}
        intent={intent}
        height={height}
        disabled={disabled}
        enableResize={enableResize}
        currency={currency}
        value={value}
        slots={{
          textarea: StyledTextArea,
        }}
        className={classes?.input}
      />
      {helperMessage && (
        <div className={classes?.helperMessage}>
          {
            // TO BE IMPLEMENTED: This should have a helper icon
          }
          <HelperMessage variant="xs">{helperMessage}</HelperMessage>
        </div>
      )}
    </div>
  )
})

export default Input
