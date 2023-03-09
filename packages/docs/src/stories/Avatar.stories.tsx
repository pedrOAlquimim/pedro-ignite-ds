import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignite-ds/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/pedrOAlquimim.png',
    alt: 'Pedro Alquimim',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const Fallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
