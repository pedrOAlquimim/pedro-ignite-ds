import { ComponentProps } from 'react'
import { Prefix, TextInputContainer, TextInputInput } from './styles'

export interface TextInputProps extends ComponentProps<typeof TextInputInput> {
  prefix?: string
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <TextInputInput {...props} />
    </TextInputContainer>
  )
}

TextInput.displayName = 'TextInput'
