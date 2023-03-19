import * as Toast from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles'

const VIEWPORT_PADDING = 32

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

export const ToastRoot = styled(Toast.Root, {
  padding: '$3 $5',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',

  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  position: 'relative',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  color: '$white',
  fontFamily: '$default',
  fontWeight: '$bold',
  fontSize: '$xl',
  lineHeight: '$base',
})

export const ToastDescription = styled(Toast.Description, {
  color: '$gray200',
  lineHeight: '$base',
  fontFamily: '$default',
  fontSize: '$sm',
})

export const ToastClose = styled(Toast.Close, {
  position: 'absolute',
  top: '$4',
  right: '$4',
  color: '$gray200',
  background: 'transparent',
  border: 0,
  cursor: 'pointer',
  lineHeight: 0,
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  right: 0,
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: 10,
  width: 390,
  maxWidth: '100vh',
  zIndex: 999999999,
  margin: 0,
  listStyle: 'none',
  outline: 'none',
})
