import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Section = (props: Props) => {
  const { children } = props;

  return <section style={SSection}>{children}</section>;
};

const SSection: React.CSSProperties = {
  width: 1000,
  margin: '0 auto',
};
