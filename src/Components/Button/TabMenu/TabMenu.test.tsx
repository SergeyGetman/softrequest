//@ts-nocheck

import Accordion from './TabMenu'
import AppLing from './TabAccord'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

console.log({ Appling })

test('should render', () => {
  render(<Accordion title="hello world" content="level" />)
  expect(screen.getByRole('accordion')).toHaveTextContent(/hello/i)
  expect(screen.getByText('level')).toBeInTheDocument()
})

it('Renders component correctly', () => {
  const { getByText } = render(<AppLing />)
  expect(getByRole(/Accordion/i)).toBeInTheDocument()
})
