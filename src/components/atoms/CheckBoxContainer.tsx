import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const CheckBoxContainer = (props: Props) => {
  const { children } = props;

  return <div style={SDiv}>{children}</div>;
};

const SDiv: React.CSSProperties = {
  marginTop: 20,
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
};
