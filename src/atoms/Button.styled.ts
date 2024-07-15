import styled from 'styled-components'

import type { VariantProps } from './Button.types'

interface LabelProps {
  textColor: React.CSSProperties['color']
}
// tokens

const getButtonColor = (variant: VariantProps): string => {
  switch (variant) {
    // token.color.primary
    case 'primary':
      return '#457BFF'
    case 'secondary':
      return '#6C757D'
    case 'success':
      return '#33A645'
    default:
      return '#457BFF'
  }
}

export const Label = styled.span<LabelProps>`
    color: ${(props) => props.textColor !== null ? props.textColor : 'white'}
`
interface ButtonProps {
  variant: VariantProps
}

export const Button = styled.button<ButtonProps>`
    display: inline-block;
    font-weight: 500;
    text-align: center;
    font-size:1rem;
    background-color: ${(props) => getButtonColor(props.variant)};
    vertical-align: middle;
    border: 1px solid transparent;
    border-radius: 4px;
    line-height: 1.5
    padding: 0.4rem 0.8rem;
    transition: color 0.15s ease-in-out, background-color: 0.15 ease-in-out;
    color: #fff;
`
