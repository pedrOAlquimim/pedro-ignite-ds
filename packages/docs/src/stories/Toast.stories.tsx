import { StoryObj, Meta } from '@storybook/react'
import { Button, Toast, ToastProps } from '@ignite-ds/react'
import React, { useRef, useState } from 'react'

export const DefaultToast = (props: ToastProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const timerRef = useRef(0)

  return (
    <div>
      <Button
        onClick={() => {
          setIsOpen(false)
          timerRef.current = window.setTimeout(() => {
            setIsOpen(true)
          })
        }}
      >
        Agendar
      </Button>
      <Toast open={isOpen} onOpenChange={setIsOpen} {...props} />
    </div>
  )
}

export default {
  title: 'Form/Toast',
  component: DefaultToast,
  args: {
    title: 'Agendamento Realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
