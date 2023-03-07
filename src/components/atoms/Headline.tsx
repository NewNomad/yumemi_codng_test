import React from 'react'

type Props = {
  title: string
}

export const Headline = (props: Props) => {
  const { title } = props

  return <h2>{title}</h2>
}
