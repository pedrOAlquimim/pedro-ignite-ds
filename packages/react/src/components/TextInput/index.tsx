import { ComponentProps, forwardRef, ElementRef } from 'react'
import { Prefix, TextInputContainer, TextInputInput } from './styles'

export interface TextInputProps extends ComponentProps<typeof TextInputInput> {
  prefix?: string
}

export const TextInput = forwardRef<
  ElementRef<typeof TextInputInput>,
  TextInputProps
>(({ prefix, ...props }: TextInputProps, ref) => {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <TextInputInput ref={ref} {...props} />
    </TextInputContainer>
  )
})

TextInput.displayName = 'TextInput'
