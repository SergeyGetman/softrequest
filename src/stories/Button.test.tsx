//@ts-nocheck
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Secondary, CustomColor } from './Button'

test('should render secondary button', () => {
  render(<Secondary {...Secondary.args} />)
  expect(screen.getByRole('button')).toHaveTextContent(/button/i)
})

test('should render custom color', () => {
  render(<CustomColor {...CustomColor.args} />)
  expect(screen.getByRole('button')).toHaveTextContent(/Custom color/i)
})
