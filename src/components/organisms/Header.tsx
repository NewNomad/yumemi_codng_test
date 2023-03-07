import React from 'react'

type Props = {
  title: string
}

export const Header = (props: Props) => {
  const { title } = props

  return <header>{title}</header>
}
