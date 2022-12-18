import { createContext, ReactElement, useEffect, useState } from "react";

const ThemeContext = createContext({
    theme: "theme-black",
    themeHandler: (themeName: string) => {},
});

interface ThemePropsInterface {
    children?: JSX.Element | Array<JSX.Element>;
}

export function ThemeContextProvider(props: ThemePropsInterface): ReactElement {
    const [theme, setTheme] = useState("theme-black");
    useEffect(() => initialThemeHandler(), []);

    function isLocalStorageEmpty(): boolean {
        return !localStorage.getItem("theme");
    }

    function initialThemeHandler(): void {
        if (isLocalStorageEmpty()) {
            localStorage.setItem("theme", theme);
            document!.querySelector("body")!.classList.add(theme);
        } else {
            const theme: string = localStorage.getItem("theme") as string;
            theme && document!.querySelector("body")!.classList.add(theme);
            setTheme(theme);
        }
    }

    function themeHandler(themeName: string): void {
        setTheme(themeName);
        const existingTheme: string = localStorage.getItem("theme") as string;
        document!.querySelector("body")!.classList.remove(existingTheme);
        document!.querySelector("body")!.classList.add(themeName);
        localStorage.setItem("theme", themeName);
    }

    return (
        <ThemeContext.Provider value={{ theme, themeHandler }}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeContext;
