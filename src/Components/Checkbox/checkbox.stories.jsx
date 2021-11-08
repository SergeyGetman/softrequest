import React from 'react'
import Checkboxing from './index'

export default {
  title: 'Example/Checkboxing',
  component: Checkboxing,
}

const withLabel = (args) => {
  console.log(args)
  return <Checkboxing {...args} />
}

export const Temp = withLabel.bind({})
Temp.args = {
  label: 'My new LabeL',
  isChecked: true,
  id: 'my checkbox',
}
