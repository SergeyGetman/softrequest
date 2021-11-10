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

export const Part = withLabel.bind({})
Part.args = {
  value: true,
  text: 'First',
  backgroundColor: 'yellow',
  color: 'white',
  onClick: () => alert('Hello world'),
}

export const PartOne = Part.bind({})
PartOne.args = {
  value: false,
  text: 'Second',
  onClick: () => alert('Hello world2'),
}

export const PartTwo = Part.bind({})
PartTwo.args = {
  text: 'Third',
  backgroundColor: 'crimson',
  color: 'white',
  onClick: () => alert('Hello world3'),
}
