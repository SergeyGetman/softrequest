import { ComponentStory, ComponentMeta } from '@storybook/react'
import MyModal from './MyModal'

export default {
  title: 'Example/MyModal',
  component: MyModal,
  argTypes: {
    visible: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof MyModal>

const Template: ComponentStory<typeof MyModal> = (args) => (
  <MyModal {...args}> {args.children} </MyModal>
)

export const Modal = Template.bind({})
Modal.args = {
  visible: true,
  children: 'text',
  color: 'red',
  backgroundColor: 'green',
}
