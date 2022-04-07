import '../styles/globals.css';
import type { AppProps } from 'next/app';
import './App.css';
import './index.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;