//@ts-nocheck

import { ButtonNew } from './index'
import { Part } from './button.stories'
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

test('should render', () => {
  const { container } = render(<Part {...Part.args} />)
  expect(container.firstChild).toMatchInlineSnapshot(`
    <button
      class="button button_part"
      color="white"
      style="background-color: yellow;"
      type="button"
    >
      First
    </button>
  `)
})

test('should find type button in case', () => {
  render(<Part {...Part.args} />)
  const firstPart = screen.getByText(/First/i)

  expect(firstPart).toBeInTheDocument()
})

test('should to be yellow color', () => {
  render(<Part {...Part.args} />)
  const findColor = screen.getByText(/yellow/i)
  expect(findColor).toBeInTheDocument()
})
