"use client";
import { useState } from "react";
import Hero from "./components/hero";
import Gallery from "./components/gallery";

const HomePage = () => {
    const [greetMsg, setGreetMsg] = useState("");
    const [name, setName] = useState("");

    return (
        <>
            <Hero />
            <Gallery
                images={[
                    {
                        id: 1,
                        href: "/",
                        imageSrc: "/img/slider-1.jpg",
                        name: "Mukesh",
                        username: "mkSingh",
                    },
                    {
                        id: 2,
                        href: "/",
                        imageSrc: "/img/slider-2.jpg",
                        name: "MK",
                        username: "singh",
                    },
                ]}
            />
        </>
    );
};

export default HomePage;
