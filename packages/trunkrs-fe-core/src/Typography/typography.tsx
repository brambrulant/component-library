import React from 'react'
import { styled, Typography as TypographyInterface } from '../Theme'

export interface TypographyProps {
  /**
   * The variant to use. choose between h1, h2, h3, h4, xs, s, m, l
   */
  variant: keyof TypographyInterface['variants']
  /**
   * The component to render the typography as. Defaults to the variant component.
   */
  component?: React.ComponentType
  /**
   * Whether or not to use the bold font weight.
   */
  bold?: boolean
  /**
   * The class name to apply to the typography.
   */
  color?: string

  className?: string
  /**
   * The children to render.
   */
  children?: React.ReactNode
}

const variantComponents: {
  [key in keyof TypographyInterface['variants']]: React.ElementType
} = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  xs: 'p',
  s: 'p',
  m: 'p',
  l: 'p',
}

export const Typography: React.FC<TypographyProps> = ({
  bold,
  variant = 'm',
  color,
  component,
  children,
  className,
}) => {
  const StyledTypography = React.useMemo(() => {
    const Component = component || variantComponents[variant]

    return styled(Component as any)`
      margin: 0;
      font-family: ${({ theme }) =>
        bold ? 'ClanPro-Bold' : theme.typography.variants[variant].fontFamily};
      font-size: ${({ theme }) => theme.typography.variants[variant].fontSize};
      font-weight: ${({ theme }) =>
        bold ? '475' : theme.typography.variants[variant].fontWeight};
      line-height: ${({ theme }) =>
        theme.typography.variants[variant].lineHeight};
      letter-spacing: ${({ theme }) =>
        theme.typography.variants[variant].letterSpacing};
      color: ${() => color || 'inherit'};
    `
  }, [])

  return <StyledTypography className={className}>{children}</StyledTypography>
}

export default Typography
