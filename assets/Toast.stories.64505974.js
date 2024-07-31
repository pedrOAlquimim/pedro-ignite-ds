var i=Object.defineProperty;var n=(t,e)=>i(t,"name",{value:e,configurable:!0});import{a as p,d as c}from"./index.c611c4fc.js";import{r as s}from"./index.ce0122d7.js";import{a as u,j as r}from"./jsx-runtime.537a3050.js";import"./index.d5241724.js";import"./iframe.be038445.js";const l=n(t=>{const[e,o]=s.exports.useState(!1),a=s.exports.useRef(0);return u("div",{children:[r(p,{onClick:()=>{o(!1),a.current=window.setTimeout(()=>{o(!0)})},children:"Agendar"}),r(c,{open:e,onOpenChange:o,...t})]})},"DefaultToast"),g={parameters:{storySource:{source:`import { StoryObj, Meta } from '@storybook/react'
import { Button, Toast, ToastProps } from '@pedro-ignite-ds/react'
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
    description: 'Quarta-feira, 23 de Outubro \xE0s 16h',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
`,locationsMap:{"default-toast":{startLoc:{col:28,line:5},endLoc:{col:1,line:24},startBody:{col:28,line:5},endBody:{col:1,line:24}}}}},title:"Form/Toast",component:l,args:{title:"Agendamento Realizado",description:"Quarta-feira, 23 de Outubro \xE0s 16h"}},y={},R=["DefaultToast","Primary"];export{l as DefaultToast,y as Primary,R as __namedExportsOrder,g as default};
//# sourceMappingURL=Toast.stories.64505974.js.map
