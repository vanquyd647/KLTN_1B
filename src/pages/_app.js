import { Provider } from 'react-redux';
import store from '../store';
import '../styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Head>
                <title>Fashion Store</title>
                <link
                    rel="icon"
                    href="https://firebasestorage.googleapis.com/v0/b/red89-f8933.appspot.com/o/KLTN%2FDALL%C2%B7E%202025-01-20%2014.48.34%20-%20A%20minimalistic%20logo%20for%20a%20Fashion%20Store%2C%20designed%20for%20use%20as%20a%20website%20favicon.%20The%20logo%20features%20a%20sleek%20and%20modern%20design%20with%20an%20abstract%20represent.webp?alt=media&token=da1ff9d9-3a6e-44ca-ba4c-6de1a45b80fc"
                />
                <meta name="description" content="Mua sắm thời trang với các sản phẩm mới nhất và phong cách nhất tại Fashion Store." />
                <meta name="keywords" content="thời trang, mua sắm, sản phẩm mới, quần áo, giày dép" />
                <meta name="author" content="Fashion Store" />
                <meta property="og:title" content="Fashion Store" />
                <meta property="og:description" content="Mua sắm thời trang với các sản phẩm mới nhất và phong cách nhất." />
                <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/red89-f8933.appspot.com/o/KLTN%2FDALL%C2%B7E%202025-01-20%2014.48.34%20-%20A%20minimalistic%20logo%20for%20a%20Fashion%20Store%2C%20designed%20for%20use%20as%20a%20website%20favicon.%20The%20logo%20features%20a%20sleek%20and%20modern%20design%20with%20an%20abstract%20represent.webp?alt=media&token=da1ff9d9-3a6e-44ca-ba4c-6de1a45b80fc" />
                <meta property="og:url" content="https://kltn-1-b.vercel.app/" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Component {...pageProps} />
        </Provider>
    );
}
