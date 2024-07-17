import React from 'react'

import type { Props } from './Stepper.types'

interface UseStepperProps {
  counter: number
  increment: () => void
  decrement: () => void
  shouldShowTrashIcon: boolean
}

export const useStepper = (props: Props): UseStepperProps => {
  const { defaultValue = 1, min = 1, max, onStepperChange, withTrashIcon = true } = props
  const [counter, setCounter] = React.useState(defaultValue)

  const shouldShowTrashIcon = counter === min && withTrashIcon

  React.useEffect(() => {
    onStepperChange(counter)
  }, [counter])

  const increment = (): void => {
    // if (counter >= max) return
    // Math.max(prev+1, max)
    setCounter((prev) => prev + 1 >= max ? prev : prev + 1)
  }

  const decrement = (): void => {
    if (counter > 0 && counter > min) {
      setCounter((prev) => prev - 1)
    }
  }

  return {
    increment,
    decrement,
    shouldShowTrashIcon,
    counter
  }
}
