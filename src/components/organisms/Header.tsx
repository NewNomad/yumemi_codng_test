import React from 'react'

type Props = {
  title: string
}

export const Header = (props: Props) => {
  const { title } = props

  return (
    <header
      style={{
        width: '100%',
        height: 50,
        backgroundColor: '#ccc',
        fontSize: 40,
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {title}
    </header>
  )
}
