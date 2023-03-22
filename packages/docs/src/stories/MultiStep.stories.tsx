import { StoryObj, Meta } from '@storybook/react'
import { Box, MultiStep, MultiStepProps } from '@pedro-ignite-ds/react'
import React from 'react'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {story()}
        </Box>
      )
    },
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {}

export const Secondary: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 3,
  },
}
