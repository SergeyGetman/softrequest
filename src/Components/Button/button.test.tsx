import ButtonNew from './index'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

it('renders the checked inside checkbox ', () => {
  render(<ButtonNew />)
  expect(screen.getByText('234234')).toBeInTheDocument()
})

test('самописный текст', () => {
  render(<p>First a wall</p>)
  expect(screen.getByText('First a wall')).toBeInTheDocument()
})

test('hello world', () => {
  render(<p>Hello Jest!</p>)
  expect(screen.getByText('Hello Jest!')).toBeInTheDocument()
})
