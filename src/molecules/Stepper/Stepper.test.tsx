import { fireEvent, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { createRender } from '../../../tests/helpers'
import { Stepper } from './Stepper'
import { type Props } from './Stepper.types'
import { useStepper } from './useStepper'

vi.mock('./useStepper')
describe('Stepper', () => {
  const render = createRender(Stepper)
  // const mockUseStepper = useStepper as vi.MockedFunction<typeof useStepper>
  let defaultProps: Props
  beforeEach(() => {
    defaultProps = {
      min: 1,
      defaultValue: 1,
      max: 10,
      onStepperChange: vi.fn(),
      onTrashClick: vi.fn()
    }
    useStepper.mockReturnValue({
      increment: vi.fn(),
      decrement: vi.fn(),
      shouldShowTrashIcon: true,
      counter: 1
    })
  })
  it('Should render Stepper with initial state', () => {
    render(defaultProps)
    expect(screen.getByText(1)).toBeDefined()
    expect(screen.getByTestId('trash-icon')).toBeDefined()
    expect(screen.getByTestId('plus-icon')).toBeDefined()
  })
  it('should call increment function when add button is clicked', () => {
    const incrementMock = vi.fn()
    useStepper.mockReturnValue({
      increment: incrementMock,
      decrement: vi.fn(),
      shouldShowTrashIcon: true,
      counter: 1
    })
    render(defaultProps)
    const addButton = screen.getByTestId('plus-icon')
    fireEvent.click(addButton)
    expect(incrementMock).toHaveBeenCalled()
    // no lleva el cambio visual a la ui expect(screen.getByText(2)).toBeDefined()
  })
})
