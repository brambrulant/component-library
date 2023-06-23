import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import { ButtonBaseProps } from '@mui/material/ButtonBase/ButtonBase'
import { styled } from '../Theme'

import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import TertiaryButton from './TertiaryButton'
import TextButton from './TextButton'
import Typography from '../Typography/typography'

export interface ButtonProps extends ButtonBaseProps {
  buttonType?: 'primary' | 'secondary' | 'tertiary' | 'text'
  intent?: 'success' | 'warning' | 'danger'
  size?: 'small' | 'medium' | 'large'
  isLoading?: boolean
  startAdornment?: React.ReactNode
  endAdornment?: React.ReactNode
  fullWidth?: boolean
  disabled?: boolean
  children: React.ReactNode
}

const StartAdornment = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& svg': {
    height: '100%',
  },
}))

const EndAdornment = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))
const Spinner = styled(CircularProgress)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 'auto',
}))
const Children = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 8px',
}))

export const Button: React.FC<ButtonProps> = ({
  children,
  buttonType = 'primary',
  intent,
  isLoading,
  startAdornment,
  endAdornment,
  fullWidth,
  disabled,
  size,
}) => {
  const buttonComponents = {
    primary: PrimaryButton,
    secondary: SecondaryButton,
    tertiary: TertiaryButton,
    text: TextButton,
  }

  const ButtonComponent = buttonComponents[buttonType]

  if (ButtonComponent) {
    return (
      <ButtonComponent
        disableRipple
        disabled={disabled || isLoading}
        intent={intent}
        size={size}
        fullWidth={fullWidth}
        classes={{
          disabled: 'disabled',
        }}
      >
        {isLoading && <Spinner size={16} />}
        {startAdornment && !isLoading && (
          <StartAdornment>{startAdornment}</StartAdornment>
        )}
        {children && (
          <Children>
            <Typography variant="m">{children}</Typography>
          </Children>
        )}
        {endAdornment && <EndAdornment> {endAdornment}</EndAdornment>}
      </ButtonComponent>
    )
  }

  return null
}

export default Button
