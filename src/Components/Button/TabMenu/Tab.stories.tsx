//@ts-nocheck

import React from 'react'
import Accordion from './TabMenu'

export default {
  title: 'Example/Accordion',
  component: Accordion,
}

const Template = (args) => <Accordion {...args} />

export const First = Template.bind({})
First.args = {
  label: 'tab-menu',
  backgroundColor: 'red',
}
