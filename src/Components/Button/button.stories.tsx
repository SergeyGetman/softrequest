//@ts-nocheck

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ButtonNew from './index'

export default {
  title: 'Example/ButtonNew',
  component: ButtonNew,
} as ComponentMeta<typeof ButtonNew>

const withLabel: ComponentStory<typeof ButtonNew> = (args) => (
  <ButtonNew {...args} />
)

export const Temp = withLabel.bind({})
Temp.args = {
  value: true,
  text: 'Admin',
  backgroundColor: 'yellow',
  color: 'white',
  onClick: () => alert('Hello world'),
}

export const PartOne = Temp.bind({})
PartOne.args = {
  value: false,
  text: 'User',
  onClick: () => alert('Hello world2'),
}

export const UserColor = Temp.bind({})
UserColor.args = {
  text: 'User Color',
  backgroundColor: 'crimson',
  color: 'white',
  onClick: () => alert('Hello world3'),
}
