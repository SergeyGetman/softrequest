//@ts-nocheck

import React from 'react'
import { Button } from './Button'

export default {
  title: 'Example/Button',
  component: Button,
}

const Template = (args) => {
  return <Button {...args} />
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button',
}
