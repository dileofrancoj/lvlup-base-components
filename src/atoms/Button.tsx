import * as React from 'react'

import { type Props } from './Button.types'

export const Button: React.FC<Props> = ({ variant = 'primary', onClick, label, textColor }) => {
  return (
    <button onClick={onClick}>
        <span>{label}</span>
    </button>
  )
}
