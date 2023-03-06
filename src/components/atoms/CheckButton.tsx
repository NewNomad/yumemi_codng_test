import React from 'react'

type Props = {
  prefectureName: string
  checked: boolean
}

export const CheckButton = (props: Props) => {
  const { prefectureName, checked } = props

  return (
    <label>
      <input type="checkbox" checked={checked} />
      {prefectureName}
    </label>
  )
}
