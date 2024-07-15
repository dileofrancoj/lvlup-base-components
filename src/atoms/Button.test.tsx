// Test integracion !== Test E2E

// Test unitario -> Testeo que mi boton sea clickeable y que tenga estilos (atomo)
// Test de integración (testear como interactuan / comportan) 2 o más componentes (página)
// Formulario (input + boton) -> el input se llene con los valores que ingresa el usuario y que al apretar el boton este se llame con esos valores
// test unitarios, test de integracion, test de mutaciones, test visuales, test e2e, test de carga (artillery), test accesibilidad
// webviews -> unitarios, integracion, e2e, pruebas de carga

import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { Button } from './Button'
import type { Props } from './Button.types'
describe('Button', () => {
  let defaultProps: Props

  beforeEach(() => {
    defaultProps = {
      label: 'Hello world',
      onClick: vi.fn()
    }
  })
  it('Should render base Button', () => {
    render(<Button {...defaultProps} />)
    const btn = screen.getByRole('button', { name: 'Hello world' }) // name: 'valor de texto que se encuentra dentro del boton (children)
    expect(btn).toBeDefined()
    expect(btn.getAttribute('variant')).toBe('primary')
  })
  it('Should render the base button with secondary variant', () => {
    defaultProps.variant = 'secondary'
    render(<Button {...defaultProps} />)

    const btn = screen.getByRole('button', { name: 'Hello world' })
    expect(btn).toBeDefined()
    expect(btn.getAttribute('variant')).toBe('secondary')
  })
  it('should call the onClick callback', () => {
    render(<Button {...defaultProps} />)
    const btn = screen.getByRole('button', { name: 'Hello world' })
    fireEvent.click(btn)
    expect(defaultProps.onClick).toHaveBeenCalledOnce()
  })
})
