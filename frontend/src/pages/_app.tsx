import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@components/layout/includes/Navbar";
import { SessionProvider } from "next-auth/react";
import { ThemeContextProvider } from "store";
import "setimmediate";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SessionProvider session={pageProps.session}>
            <ThemeContextProvider>
                <div className="relative flex flex-col w-screen h-full max-w-screen bg-brand-base">
                    <Navbar />
                    <main>
                        <Component {...pageProps} />
                    </main>
                </div>
            </ThemeContextProvider>
        </SessionProvider>
    );
}

export default MyApp;
