import Checkboxing from './index.jsx'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

it('renders the checked inside checkbox ', () => {
  render(<Checkboxing {...Checkboxing.args} />)
  expect(screen.getByText('checked')).toHaveTextContent('Checkboxing')
})

test('самописный текст', () => {
  render(<p>First a wall</p>)
  expect(screen.getByText('First a wall')).toBeInTheDocument()
})
