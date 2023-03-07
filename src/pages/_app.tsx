import { NextPage } from 'next';
import { AppProps } from 'next/app';
import 'modern-css-reset/dist/reset.min.css';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
