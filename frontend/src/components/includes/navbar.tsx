"use client";
import { DropdownMenu } from "@components/dropdowns";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useContext } from "react";
import ThemeContext from "../../context/theme";

const Navbar = () => {
    const themeCtx: {
        theme?: string;
        themeHandler: (themeName: string) => void;
    } = useContext(ThemeContext);
    const [scrolled, setScrolled] = useState(false);

    const changeTheme = (themeName: string) => {
        themeCtx.themeHandler(themeName);
    };

    const handleScroll = () => {
        if (window.scrollY > 25) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        const themeColor = document.querySelector("meta[name='theme-color']");
        if (
            (themeColor && themeCtx.theme === "theme-black") ||
            themeCtx.theme === "theme-light" ||
            themeCtx.theme === "theme-dark"
        ) {
            themeColor?.setAttribute("content", "#DE0611");
        } else if (themeColor && themeCtx.theme === "theme-dark-blue") {
            themeColor?.setAttribute("content", "#FD1F4A");
        } else if (themeColor && themeCtx.theme === "theme-neon") {
            themeColor?.setAttribute("content", "#b3ff17");
        }
    }, [themeCtx.theme]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <nav
            className={`sticky z-10 top-0 flex items-center justify-center w-full font-semibold backdrop-blur-lg text-brand-primary
                        ${scrolled && "shadow-lg"} bg-brand-base/70`}
        >
            <div
                className={`flex items-center justify-between w-full max-w-7xl
                ${scrolled ? "px-6 text-lg h-14" : "h-16 text-xl px-4 md:px-0"}
                transform transition-all ease-in duration-200`}
            >
                <div className="flex items-center justify-start gap-6">
                    <Link href="/">ImageBank</Link>
                </div>
                <div className="flex items-center justify-end gap-6">
                    <DropdownMenu
                        options={[
                            {
                                label: (
                                    <span className="flex flex-row items-center justify-start w-full gap-2 capitalize">
                                        <span className="w-4 h-4 bg-black border border-white rounded-full outline-none" />
                                        default
                                    </span>
                                ),
                                value: "theme-black",
                            },
                            {
                                label: (
                                    <span className="flex flex-row items-center justify-start w-full gap-2 capitalize">
                                        <span className="w-4 h-4 bg-white border border-black rounded-full outline-none" />
                                        light
                                    </span>
                                ),
                                value: "theme-light",
                            },
                            {
                                label: (
                                    <span className="flex flex-row items-center justify-start w-full gap-2 capitalize">
                                        <span className="w-4 h-4 rounded-full border outline-none bg-[#0d1117] border-black" />
                                        Dark
                                    </span>
                                ),
                                value: "theme-dark",
                            },
                            {
                                label: (
                                    <span className="flex flex-row items-center justify-start w-full gap-2 capitalize">
                                        <span className="w-4 h-4 rounded-full border outline-none bg-[#131223] border-white" />
                                        dark blue
                                    </span>
                                ),
                                value: "theme-dark-blue",
                            },
                            {
                                label: (
                                    <span className="flex flex-row items-center justify-start w-full gap-2 capitalize">
                                        <span className="w-4 h-4 rounded-full border outline-none bg-[#b3ff17] border-black" />
                                        neon
                                    </span>
                                ),
                                value: "theme-neon",
                            },
                        ]}
                        onClick={changeTheme}
                        activeValue={themeCtx.theme}
                    >
                        <span className="grid w-6 h-6 grid-cols-2 overflow-hidden transition-all duration-200 ease-in-out transform border rounded-full outline-none cursor-pointer hover:scale-110 border-brand-base-light/20">
                            <span className="bg-[#de0611]" />
                            <span className="bg-white" />
                            {/* <span className="bg-[#b3ff17]" /> */}
                            <span className="bg-white" />
                            <span className="bg-black" />
                        </span>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
