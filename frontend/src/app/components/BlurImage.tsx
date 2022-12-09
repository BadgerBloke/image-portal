import Image from "next/image";
import { useState } from "react";

function cn(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

type ImageType = {
    id: number;
    href: string;
    imageSrc: string;
    name: string;
    username: string;
};

const BlurImage = ({ image }: { image: ImageType }) => {
    const [isLoading, setLoading] = useState(true);

    return (
        <a href={image.href} className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-primary-bg rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <Image
                    alt=""
                    src={image.imageSrc}
                    fill
                    className={cn(
                        "group-hover:opacity-75 duration-700 ease-in-out object-cover",
                        isLoading
                            ? "grayscale blur-2xl scale-110"
                            : "grayscale-0 blur-0 scale-100"
                    )}
                    onLoadingComplete={() => setLoading(false)}
                />
            </div>
            <h3 className="mt-4 text-sm text-primary-text">{image.name}</h3>
            <p className="mt-1 text-lg font-medium text-primary-text/75">
                {image.username}
            </p>
        </a>
    );
};

export default BlurImage;
