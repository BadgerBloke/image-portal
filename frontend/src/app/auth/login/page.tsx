"use client";
import { Button } from "@components/button";
import { LabelAndFieldInRow } from "@components/input";
import Link from "next/link";
import { FormEvent, useState } from "react";

const Login = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formData.email === "" || formData.password === "") {
            alert("Please fill all the fields");
            return;
        } else {
            setIsProcessing(true);
            console.log(formData);
            setIsProcessing(false);
        }
    };

    return (
        <div className="flex items-center justify-center w-screen p-6 h-screenLessNav">
            <div className="flex flex-col w-full overflow-hidden rounded-lg bg-base-layer-bg md:min-w-96 md:w-fit">
                <div className="grid items-center w-full grid-cols-2 text-center">
                    <span className="flex items-center justify-center h-10 text-lg font-bold text-primary-text">
                        Login
                    </span>
                    <Link
                        href="/auth/register"
                        className="flex items-center justify-center h-10 text-lg font-bold transition-all duration-300 border-b bg-primary-bg/30 hover:bg-primary-bg/10 border-primary-bg"
                    >
                        Sign Up
                    </Link>
                </div>
                <form
                    className="flex flex-col items-center justify-center w-full gap-4 p-6"
                    onSubmit={handleSubmit}
                >
                    <LabelAndFieldInRow
                        label="Email"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <LabelAndFieldInRow
                        label="Password"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {isProcessing ? (
                        <div className="flex mt-4 border-t-2 border-b-2 rounded-full w-7 h-7 border-primary-text/50 animate-spin" />
                    ) : (
                        <Button className="mt-4" intent="secondary">
                            Login
                        </Button>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Login;
