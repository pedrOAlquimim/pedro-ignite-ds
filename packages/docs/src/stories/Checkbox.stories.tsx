import { CheckboxProps, Checkbox, Box, Text } from '@pedro-ignite-ds/react'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'row',
            gap: '$2',
            alignItems: 'center',
          }}
        >
          {story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
