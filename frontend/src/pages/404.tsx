import MainLogo from "@components/logo";
import Head from "next/head";
const PageNotFound = () => {
    return (
        <>
            <Head>
                <title>Page Not Found | imageAi</title>
                <meta
                    name="description"
                    content="Oops! Looks like you followed a bad link. If you think this is a problem with us, please let us know."
                />
            </Head>
            <main className="flex flex-col items-center justify-center w-full gap-2 min-h-screenLessNav text-brand-primary">
                <MainLogo />
                <h1 className="text-3xl font-bold text-center">
                    Oops! Looks like you followed a bad link.
                </h1>
                <p className="text-base text-center">
                    If you think this is a problem with us, please let us know.
                </p>
            </main>
        </>
    );
};

export default PageNotFound;
