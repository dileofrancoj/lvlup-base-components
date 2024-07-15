import * as React from 'react'

import * as Styled from './Button.styled'
import { type Props } from './Button.types'

export const Button: React.FC<Props> = ({ variant = 'primary', onClick, label, textColor, ...props }) => {
  return (
    <Styled.Button variant={variant} onClick={onClick} {...props}>
      <Styled.Label textColor={textColor}>{label}</Styled.Label>
    </Styled.Button>
  )
}
