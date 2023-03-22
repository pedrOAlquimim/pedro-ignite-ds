import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@pedro-ignite-ds/react'
import { ArrowRight } from 'phosphor-react'
import React from 'react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
  },
  argTypes: {
    variant: {
      option: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      option: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      action: 'click',
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo Passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
}
