import { ButtonNew } from './index'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('ButtonNew', () => {
  it('passes', () => {
    render(<ButtonNew text="Hello world" />)
    const elem = screen.getByText(/hello/i)
    expect(elem).toBeInTheDocument()
  })

  it('passes', () => {
    render(<ButtonNew text="Hello world" />)
    const elem = screen.getByText(/world/i)
    expect(elem).toBeInTheDocument()
  })
})
