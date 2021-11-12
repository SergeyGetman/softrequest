import React from 'react'
import { ComponentStory } from '@storybook/react'
import Accordion from './TabMenu'
import AppLing from './TabAccord'

export default {
  title: 'Example/Accordion',
  component: { Accordion, AppLing },
}

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
)
const newTemplate: ComponentStory<typeof AppLing> = () => <AppLing />

export const First = Template.bind({})
First.args = {
  type: 'tab-menu',
  backgroundColor: 'red',
}

export const ExapmeleAccordion = newTemplate.bind({})
ExapmeleAccordion.args = {
  title: 'accordion',
  color: 'green',
}
