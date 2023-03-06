import React from 'react'

type Props = {
  prefectureName: string
  checked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export const CheckButton = (props: Props) => {
  const { prefectureName, checked, onChange } = props

  return (
    <label>
      <input type="checkbox" onChange={onChange} checked={checked} />
      {prefectureName}
    </label>
  )
}
