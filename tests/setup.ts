import { cleanup } from '@testing-library/react'
import { afterEach, beforeEach } from 'vitest'

afterEach(() => {
  cleanup()
})

beforeEach(() => {
  vi.useFakeTimers()
})
