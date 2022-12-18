import { DropdownMenu } from "@components/dropdowns";
import { useEffect, useState } from "react";
import { useContext } from "react";
import ThemeContext from "store";
import { signIn, signOut, useSession } from "next-auth/client";
import Link from "next/link";
import WideLogo from "@components/logo/wide";
import { useRouter } from "next/router";

const Navbar = () => {
    const themeCtx: {
        theme?: string;
        themeHandler: (themeName: string) => void;
    } = useContext(ThemeContext);
    const [signInSignOut, setSignInSignOut] = useState("");
    const [scrolled, setScrolled] = useState(false);
    const [session] = useSession();
    const router = useRouter();
    const [isTablet, setIsTablet] = useState(false);

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

    useEffect(() => {
        if (signInSignOut === "signIn") {
            setSignInSignOut("");
            router.push("/auth/login");
        } else if (signInSignOut === "signUp") {
            setSignInSignOut("");
            router.push("/auth/register");
        } else if (signInSignOut === "signOut") {
            setSignInSignOut("");
            signOut({
                callbackUrl: "/",
            });
        } else {
            setSignInSignOut("");
        }
    }, [signInSignOut]);

    useEffect(() => {
        if (window.innerWidth < 768) {
            setIsTablet(false);
        } else {
            setIsTablet(true);
        }
    }, []);
    return (
        <nav
            className={`sticky top-0 flex items-center justify-center w-full font-semibold backdrop-blur-lg text-brand-primary
                        ${scrolled && "shadow-lg z-10"} bg-brand-base/70`}
        >
            <div
                className={`flex items-center justify-between w-full max-w-7xl
                ${scrolled ? "px-6 text-lg h-14" : "h-16 text-xl px-4 md:px-0"}
                transform transition-all ease-in duration-200`}
            >
                <div className="flex items-center justify-start h-full gap-6">
                    <WideLogo width="w-40 md:w-80" />
                </div>
                <div className="flex items-center justify-end gap-6">
                    {session?.user ? (
                        <span className="hidden capitalize md:block">
                            {session.user?.name?.trim()}
                        </span>
                    ) : null}
                    <DropdownMenu
                        options={
                            session
                                ? isTablet
                                    ? [
                                          {
                                              label: (
                                                  <span className="flex flex-row items-center justify-start w-full gap-2 capitalize">
                                                      Sign Out
                                                  </span>
                                              ),
                                              value: "signOut",
                                          },
                                      ]
                                    : [
                                          {
                                              label: (
                                                  <span className="flex flex-row items-center justify-start w-full gap-2 capitalize">
                                                      {session?.user?.name?.trim()}
                                                  </span>
                                              ),
                                              value: "",
                                          },
                                          {
                                              label: (
                                                  <span className="flex flex-row items-center justify-start w-full gap-2 capitalize">
                                                      Sign Out
                                                  </span>
                                              ),
                                              value: "signOut",
                                          },
                                      ]
                                : [
                                      {
                                          label: (
                                              <span className="flex flex-row items-center justify-start w-full gap-2 capitalize">
                                                  Sign In
                                              </span>
                                          ),
                                          value: "signIn",
                                      },
                                      {
                                          label: (
                                              <span className="flex flex-row items-center justify-start w-full gap-2 capitalize">
                                                  Sign Up
                                              </span>
                                          ),
                                          value: "signUp",
                                      },
                                  ]
                        }
                        onClick={(e: string) => setSignInSignOut(e)}
                        activeValue={signInSignOut}
                    >
                        <span className="flex items-center justify-center w-8 h-8 p-2 overflow-hidden transition-all duration-200 ease-in-out transform border rounded-full outline-none cursor-pointer hover:scale-110 border-brand-base-light/20 bg-brand-base-light/50">
                            {session?.user ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6 text-brand-red"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6 text-brand-base-primary"
                                >
                                    <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
                                </svg>
                            )}
                        </span>
                    </DropdownMenu>
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
                        <span className="grid w-8 h-8 grid-cols-2 overflow-hidden transition-all duration-200 ease-in-out transform border rounded-full outline-none cursor-pointer hover:scale-110 border-brand-base-light/20">
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
