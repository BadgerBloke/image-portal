import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="flex flex-col items-center justify-center w-screen h-screen">
            <div className="relative top-0 left-0 w-screen h-screen overflow-x-hidden opacity-50 aspect-w-16 aspect-h-9 blur-md">
                <Image src="/img/slider-1.jpg" alt="hero" fill />
            </div>
            <div className="absolute flex flex-col items-center justify-center gap-3 px-4 mx-auto text-3xl font-bold text-center lg:text-5xl top-1/3 lg:gap-6">
                <div className="flex gap-2">
                    <span>Hi</span>
                    <span className="text-warn-light">{"Mukesh" || "there"}!</span>
                </div>
                <span>Welcome to your personal image bank!</span>
                <span className="text-lg font-normal lg:text-xl">
                    Here, you can store your images and access and manage it
                    from anywhere in the world...
                </span>
                <Link
                    href="/auth/login"
                    className="flex items-center px-4 py-2 text-lg transition-all duration-500 ease-in-out rounded-md shadow-sm outline-none lg:text-2xl bg-warn-light text-primary-bg mt-7 hover:bg-warn-light/75 focus:outline-none hover:shadow-md"
                >
                    Get Started
                </Link>
            </div>
        </section>
    );
};

export default Hero;
