import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'success'],
      description: 'The visual style of main button',
      control: { type: 'radio' }
    }
  }
}

export default meta

type Story = StoryObj<typeof meta>
export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Primary button'

  }
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Secondary Button'
  }
}
