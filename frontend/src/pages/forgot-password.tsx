import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import WideLogo from "@components/logo/wide";
import { LabelAndField } from "@components/input/block";

const ForgotPassword: NextPage = () => {
    const [isLoading, setLoading] = useState(false);
    const [email, setEmail] = useState("")
    const router = useRouter();

    const onSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        const body = JSON.stringify({ email });
        try {
            const res = await fetch(`/api/account/reset-password`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body,
            });

            if (res.status === 200) {
                alert(
                    "✅ An email has been sent to you with instructions on how to reset your password."
                );
                router.push("/");
            } else {
                alert("😔 Password reset link sending failed");
            }
        } catch (err) {
            alert("⚠️ Something unexpected happened");
        }
        setLoading(false);
    };

    return (
        <div className="flex items-center justify-center min-h-screen px-4 py-8 sm:py-12">
            <div className="w-full p-5 my-auto rounded-lg bg-brand-base-light lg:w-1/3">
                <div className="px-8 mb-4 text-center">
                    <div className="flex justify-center mb-2">
                        <Link href="/">
                            <a>
                                <WideLogo width="w-40 md:w-96" />
                            </a>
                        </Link>
                    </div>
                    <h3 className="pt-4 mb-2 text-2xl">
                        Forgot Your Password?
                    </h3>
                    <p className="mb-4 text-sm">
                        We get it, stuff happens. Just enter your email address
                        below and we&apos;ll send you a link to reset your
                        password!
                    </p>
                </div>
                <form
                    onSubmit={onSubmit}
                    className="flex flex-col w-full gap-4 p-4 md:p-8 md:gap-6 md:min-w-96"
                >
                    <LabelAndField
                        label="Email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {isLoading ? (
                        <div className="flex self-center border-t-2 border-b-2 rounded-full w-7 h-7 border-brand-base animate-spin" />
                    ) : (
                        <button
                            className="flex self-center px-4 py-2 transition-all duration-300 ease-in-out transform rounded-md shadow-md outline-none shadow-brand-themeShadow hover:scale-105 bg-brand-base w-fit text-brand-muted"
                            type="submit"
                        >
                            Continue
                        </button>
                    )}
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
