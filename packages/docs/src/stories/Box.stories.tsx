import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps } from '@ignite-ds/react'
import React from 'react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Testando elemento Box</span>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
