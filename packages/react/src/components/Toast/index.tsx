import * as ToastRadix from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import {
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastRadix.Root> {
  title: string
  description?: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastRadix.Provider>
      <ToastRoot {...props}>
        <ToastTitle>{title}</ToastTitle>
        {description && <ToastDescription>{description}</ToastDescription>}
        <ToastClose>
          <X size={20} />
        </ToastClose>
      </ToastRoot>

      <ToastViewport />
    </ToastRadix.Provider>
  )
}

Toast.displayName = 'Toast'
