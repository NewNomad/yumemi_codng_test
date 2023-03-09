import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const CheckBoxContainer = (props: Props) => {
  const { children } = props;

  return <div style={SDiv}>{children}</div>;
};

const SDiv: React.CSSProperties = {
  width: '100%',
  margin: '0 auto',
  maxWidth: 768,
  padding: 16,
};

const mediaQuery = '@media screen and (max-width: 768px)';

const responsiveSDiv: React.CSSProperties = {
  ...SDiv,
  maxWidth: '100%',
};

const responsiveStyles = {
  [mediaQuery]: {
    section: responsiveSDiv,
  },
};
