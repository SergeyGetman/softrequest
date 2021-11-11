//@ts-nocheck

import React from 'react'
import ActiveTab from './TabMenu'

export default {
  title: 'Example/ActiveTab',
  component: ActiveTab,
}

const Template = (args) => <ActiveTab {...args} />

export const First = Template.bind({})
First.args = {
  label: 'tab-menu',
  backgroundColor: 'red',
}
