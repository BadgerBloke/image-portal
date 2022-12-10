import Image from "next/image";
import {
    getProviders,
    signIn,
    getSession,
    getCsrfToken,
} from "next-auth/react";
import { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { LabelAndField } from "@components/input/block";
import { API_URL } from "@config/index";

const Login = ({ csrf }: any) => {
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const router = useRouter();
    const [switchingPage, setSwitchingPage] = useState(false);

    // initial state
    const [formData, setFormData] = useState({
        csrfToken: csrf,
        email: "",
        password: "",
    });

    // Destructure formData.
    const { csrfToken, email, password } = formData;

    // OnChange function for each input.
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // OnSubmit function for the form.
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (email === "" || password === "") {
            alert("Please fill in all fields");
            return;
        } else {
            setSwitchingPage(!switchingPage);
            try {
                const res = await signIn("credentials", {
                    username: email,
                    password,
                    csrfToken,
                    // redirect: false,
                });
                // if (res) router.push("/");
            } catch (error: any) {
                if (error.status === 302) {
                    alert(
                        "This email id doesn't seems active. You can check your email for activation link."
                    );
                } else {
                    alert("Invalid credentials");
                }
            }
            setSwitchingPage(!switchingPage);
        }
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleRememberMe = () => {
        setRememberMe(!rememberMe);
    };

    const handleSignUp = () => {
        setSwitchingPage(!switchingPage);
        router.push("/auth/register");
    };

    const handleForgotPassword = () => {
        setSwitchingPage(!switchingPage);
        router.push("/forgot-password");
    };

    return (
        <>
            <Head>
                <title>Login | imageAi</title>
                <meta name="Description" content="your personal image bank" />
                <link rel="canonical" href="/" />
            </Head>
            <div className="flex items-center justify-center w-full min-h-screenLessNav">
                <div className="flex flex-col items-center justify-start p-5 rounded-lg shadow-md w-fit bg-brand-base-light text-brand-base shadow-brand-themeShadow md:min-w-96">
                    <span className="mb-4 text-2xl font-semibold">
                        Login to imageAi
                    </span>
                    <form
                        className="flex flex-col w-full gap-5"
                        onSubmit={onSubmit}
                    >
                        <LabelAndField
                            label="Email *"
                            name="email"
                            value={email}
                            onChange={onChange}
                            type="email"
                        />
                        <LabelAndField
                            label="Password *"
                            name="password"
                            value={password}
                            onChange={onChange}
                            type={showPassword ? "text" : "password"}
                        />
                        <div className="flex items-center justify-between w-full gap-2">
                            <Link
                                className="flex-1 text-sm font-semibold transition-all duration-300 ease-in-out text-primary w-fit hover:font-bold"
                                href="/forgot-password"
                            >
                                Forget Password?
                            </Link>
                            <div className="flex items-center justify-end flex-1 w-full gap-3">
                                <input
                                    type="checkbox"
                                    onChange={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    id="show-password"
                                    name="show-password"
                                    className="transition-all duration-300 ease-in-out border-none rounded-md outline-none cursor-pointer text-brand-base ring-brand-base focus:ring-0"
                                />
                                <label
                                    htmlFor="show-password"
                                    className="cursor-pointer"
                                >
                                    Show Password
                                </label>
                            </div>
                        </div>
                        {switchingPage ? (
                            <div className="flex self-center border-t-2 border-b-2 rounded-full w-7 h-7 border-brand-base animate-spin" />
                        ) : (
                            <button className="flex self-center px-4 py-2 transition-all duration-300 ease-in-out transform rounded-md shadow-md outline-none shadow-brand-themeShadow hover:scale-105 bg-brand-base w-fit text-brand-muted">
                                Sign In
                            </button>
                        )}
                        <Link
                            className="text-sm font-semibold transition-all duration-300 ease-in-out text-primary w-fit hover:font-bold"
                            href="/auth/register"
                        >
                            Don&apos;t have account? Register
                        </Link>
                    </form>
                </div>
            </div>
        </>
    );
};

export async function getServerSideProps(context: any) {
    const providers = await getProviders();
    const session = await getSession(context);
    const csrf = await getCsrfToken(context);
    const { callbackUrl } = context.query;

    if (session) {
        return {
            redirect: {
                destination: callbackUrl || "/",
                permanent: false,
            },
        };
    }

    return {
        props: {
            providers,
            csrf: csrf || null,
        },
    };
}

export default Login;
