import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ds/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Placeholder',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong tag',
    as: 'strong',
  },
}
