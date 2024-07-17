import { render } from '@testing-library/react'
import React from 'react'

export function createRender<TProps> (Component: React.ComponentType<TProps>) {
  return (props: Partial<TProps> = {}) => {
    return {
      // @ts-expect-error omit required props
      ...render(<Component {...props} />),
      wrapper: null
    }
  }
}
