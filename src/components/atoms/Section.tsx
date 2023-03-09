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
