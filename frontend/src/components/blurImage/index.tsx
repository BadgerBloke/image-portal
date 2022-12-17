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
        <a href={image.href} className="overflow-x-hidden group">
            <div className="w-full overflow-hidden rounded-lg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
                <Image
                    alt=""
                    src={image.imageSrc}
                    layout="fill"
                    objectFit="cover"
                    className={cn(
                        "duration-700 ease-in-out group-hover:opacity-75",
                        isLoading
                            ? "scale-110 blur-2xl grayscale"
                            : "scale-100 blur-0 grayscale-0"
                    )}
                    onLoadingComplete={() => setLoading(false)}
                />
            </div>
            <h3 className="mt-4 text-sm text-brand-primary">{image.name}</h3>
            <p className="mt-1 text-lg font-medium text-brand-primary/60">
                {image.username}
            </p>
        </a>
    );
};

export default BlurImage;
