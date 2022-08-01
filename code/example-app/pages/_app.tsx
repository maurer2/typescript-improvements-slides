import '../styles/globals.css';
import type { AppProps } from 'next/app';

function ExampleApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default ExampleApp;
