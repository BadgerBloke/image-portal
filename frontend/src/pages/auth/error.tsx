import Head from "next/head";
import Link from "next/link";
import React from "react";

const AuthErrorPage = () => {
    return (
        <>
            <Head>
                <title>Auth Error | imageBank</title>
                <meta name="Description" content="your personal image bank" />
                <link rel="canonical" href="/" />
            </Head>
            <div className="flex items-center justify-center w-full min-h-screenLessNav">
                <div className="flex flex-col items-center justify-start p-5 rounded-lg shadow-md w-fit bg-brand-base-light text-brand-base shadow-brand-themeShadow md:min-w-96">
                    <span className="mb-4 text-2xl font-semibold">
                        Auth Error
                    </span>
                    <p>It seems to be invalid credentials!</p>
                    <Link href="/forgot-password">
                        <a className="flex-1 text-sm font-semibold transition-all duration-300 ease-in-out text-primary w-fit hover:font-bold">
                            Already have an account? Login
                        </a>
                    </Link>
                    <Link href="/auth/register">
                        <a className="text-sm font-semibold transition-all duration-300 ease-in-out text-primary w-fit hover:font-bold">
                            Don&apos;t have account? Register
                        </a>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default AuthErrorPage;
