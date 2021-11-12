//@ts-nocheck

import { ButtonNew } from './index'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('ButtonNew', () => {
  it('passes', () => {
    render(<ButtonNew text="Hello world" />)
    const elem = screen.getByText(/hello/i)
    expect(elem).toBeInTheDocument()
  })

  test('should render custom color', () => {
    render(<ButtonNew {...ButtonNew.args} />)
    expect(screen.getByRole('first')).toHaveTextContent(/first/i)
  })
})
