import React from 'react'
import Checkboxing from './index.jsx'

export default {
  title: 'Example/Checkboxing',
  component: Checkboxing,
}

const withLabel = (args) => {
  return <Checkboxing {...args} />
}

export const Temp = withLabel.bind({})
Temp.args = {
  label: 'My new LabeL',
  isChecked: true,
  id: 'my checkbox',
}
