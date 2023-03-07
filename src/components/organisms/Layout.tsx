import React from 'react';
import { Header } from '../atoms/Header';

type Props = {
  title: string;
};

export const Layout = (props: Props) => {
  const { title } = props;
  return <Header title={title} />;
};
