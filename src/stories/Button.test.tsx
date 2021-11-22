//@ts-nocheck
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Secondary, CustomColor, Template } from './Button.stories.tsx'

console.log({ Secondary })

describe('Template', () => {
  beforeEach(() => {
    render()
  })
})

test('should render secondary button', () => {
  render(<Secondary {...Secondary.args} />)
  expect(screen.getByRole('button')).toHaveTextContent(/button/i)
})

test('should render custom color', () => {
  render(<CustomColor {...CustomColor.args} />)
  expect(screen.getByRole('label')).toHaveTextContent(/Custom color/i)
  expect(screen.getByRole('button')).toHaveStyle(
    `background-color : ${CustomColor.background}`,
  )
})
