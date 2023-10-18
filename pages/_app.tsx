import type { AppProps } from 'next/app';
import 'styles/globals.css';

function MainApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MainApp;
