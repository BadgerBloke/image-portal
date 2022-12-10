import MainLogo from "@components/logo";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
    return (
        <div className="flex items-center justify-center px-4 md:px-0 min-h-screenLessNav text-brand-primary">
            <Head>
                <title>imageAi - images your imagination</title>
            </Head>

            <main className="flex flex-col items-center justify-center w-full">
                <MainLogo />
                <h1 className="text-6xl font-bold text-center">
                    Welcome to{" "}
                    <a href="https://imageai.io" className="text-brand-red">
                        imageAi
                    </a>
                </h1>
                <p className="mt-4 text-base text-center md:mr-8 md:-mt-2 md:text-left">
                    Coming soon... <code>for imaging your imagination!</code>
                </p>
            </main>
        </div>
    );
};

export default Home;
