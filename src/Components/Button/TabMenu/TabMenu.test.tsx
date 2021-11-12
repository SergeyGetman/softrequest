//@ts-nocheck

import React from 'react'
import Accordion from './TabMenu'
import AppLing from './TabAccord'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('Accordion', () => {
  it('passes', () => {
    render(<Accordion text="Hello world" />)
  })
})

describe('<AppLing />', () => {
  it('Renders <AppLing /> component correctly', () => {
    const { getByText } = render(<AppLing />)
    expect(getByText(/Accordion/i)).toBeInTheDocument()
  })
})
