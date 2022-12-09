import "../styles/globals.css";
import { ThemeContextProvider } from "../context/theme";
import Navbar from "@components/includes/navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html>
            <head></head>
            <ThemeContextProvider>
                <body className="bg-primary-bg text-primary-text max-w-[100vw] overflow-x-hidden selection:bg-primary-bg/75 selection:text-primary-text">
                    <Navbar />
                    <main>{children}</main>
                </body>
            </ThemeContextProvider>
        </html>
    );
};

export default RootLayout;
