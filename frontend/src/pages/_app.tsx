import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "next-auth/client";
import Head from "next/head";
import Navbar from "@components/layout/includes/Navbar";
import { ThemeContextProvider } from "store";
import Footer from "@components/layout/includes/Footer";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider session={pageProps.session}>
            <Head>
                <meta
                    httpEquiv="Content-Type"
                    content="text/html; charset=utf-8"
                />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href="/favicon.ico"
                />
                <title>
                    imageBank - Image Storage Services for Professionals
                </title>
            </Head>
            <ThemeContextProvider>
                <div className="relative flex flex-col w-screen h-full max-w-screen bg-brand-base">
                    <Navbar />
                    <main>
                        <Component {...pageProps} />
                    </main>
                    <Footer />
                </div>
            </ThemeContextProvider>
        </Provider>
    );
}
export default MyApp;
