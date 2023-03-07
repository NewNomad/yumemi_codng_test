import React, { Children, ReactNode } from 'react'
type Props = {
  name: string
  children: ReactNode
}

export const Label = (props: Props) => {
  const { name, children } = props

  return (
    <label>
      {children}
      {name}
    </label>
  )
}
