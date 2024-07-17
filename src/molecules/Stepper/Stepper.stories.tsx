import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { Stepper } from './'

const meta: Meta<typeof Stepper> = {
  title: 'Molecules/Stepper',
  component: Stepper,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
  },
  args: {
    onStepperChange: fn(),
    onTrashClick: fn()
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    max: 10,
    defaultValue: 1,
    min: 1,
    withTrashIcon: true
  }
}
