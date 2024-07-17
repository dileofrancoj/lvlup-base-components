import { fireEvent, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { createRender } from '../../../tests/helpers'
import { Image } from './Image'
import { type Props } from './Image.types'
describe('Image', () => {
  let defaultProps: Props
  beforeEach(() => {
    defaultProps = {
      src: 'some-src',
      alt: 'some-alt',
      onImageClick: vi.fn(),
      ariaLabel: 'ariaLabel'
    }
  })
  const render = createRender(Image)
  it('Should render Image component', () => {
    render(defaultProps) // monta dentro del test runner el componente con sus props
    const element = screen.getByAltText('some-alt')
    expect(element).toBeDefined()
    expect(element.getAttribute('src')).toBe('some-src')
    expect(element.getAttribute('loading')).toBeFalsy()
  })
  it('Should throw an event on click', () => {
    defaultProps.loading = 'lazy'
    render(defaultProps)
    const element = screen.getByAltText('some-alt')
    expect(element.getAttribute('loading')).toBe('lazy')
    fireEvent.click(element)
    expect(defaultProps.onImageClick).toHaveBeenCalledTimes(1)
  })
})
