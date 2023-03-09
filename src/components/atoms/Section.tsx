import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Section = (props: Props) => {
  const { children } = props;

  return <section style={SSection}>{children}</section>;
};

const SSection: React.CSSProperties = {
  width: '100%',
  margin: '0 auto',
  maxWidth: 768,
  padding: 16,
  backgroundColor: '#fff',
  boxShadow: '2px 2px 2px 2px #eee',
  borderRadius: 10,
  marginTop: 30,
};

const mediaQuery = '@media screen and (max-width: 768px)';

const responsiveSSection: React.CSSProperties = {
  ...SSection,
  maxWidth: '100%',
};

const responsiveStyles = {
  [mediaQuery]: {
    section: responsiveSSection,
  },
};
