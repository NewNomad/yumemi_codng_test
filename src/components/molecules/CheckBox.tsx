import React from 'react';

type Props = {
  name: string;
  checked: boolean;
  onChange: () => void;
};
export const CheckBox = React.memo((props: Props) => {
  const { name, checked, onChange } = props;

  return (
    <label>
      <input type="checkbox" onChange={onChange} checked={checked} />
      <span>{name}</span>
    </label>
  );
});

CheckBox.displayName = 'CheckBox';
