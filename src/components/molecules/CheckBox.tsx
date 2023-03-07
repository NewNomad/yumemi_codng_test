import React from 'react';

type Props = {
  name: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export const CheckBox = (props: Props) => {
  const { name, checked, onChange } = props;

  return (
    <label>
      <input type="checkbox" onChange={onChange} checked={checked} />
      {name}
    </label>
  );
};
