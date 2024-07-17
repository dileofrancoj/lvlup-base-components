import * as React from 'react'
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa'

import * as Styled from './Stepper.styled'
import { type Props } from './Stepper.types'
import { useStepper } from './useStepper'

export const Stepper: React.FC<Props> = (props: Props) => {
  const { increment, decrement, shouldShowTrashIcon, counter } = useStepper(props)
  // disable when max has reached or message UI
  return (
    <Styled.Container>
        <button onClick={increment}><FaPlus data-testid='plus-icon'/></button>
        {counter}
        <button onClick={decrement}>
          {shouldShowTrashIcon ? <FaTrash data-testid='trash-icon' onClick={props.onTrashClick} /> : <FaMinus data-testid='minus-icon'/>}
        </button>
      </Styled.Container>
  )
}
