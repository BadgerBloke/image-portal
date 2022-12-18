import Delete from "@components/buttons/delete";
import View from "@components/buttons/view";
import { API_URL } from "@config/index";
import axios from "axios";
import { useSession } from "next-auth/client";
import Image from "next/image";
import { useState } from "react";

function cn(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

type ImageType = {
    id: number;
    image: string;
    modified_at: string;
    title: string;
    description: string;
};

const BlurImage = ({ image }: { image: ImageType }) => {
    const [isLoading, setLoading] = useState(true);
    const [session] = useSession();

    const handleDelete = async () => {
        const shouldDelete = confirm(
            "Are you sure you want to delete this image?"
        );
        const config = {
            headers: {
                Authorization: `JWT ${session?.accessToken}`,
            },
        };
        if (shouldDelete) {
            const res = await axios.delete(
                `${API_URL}/image/delete/${image.id}/`,
                config
            );
            if (res.status === 204) {
                window.location.reload();
            }
        }
    };

    return (
        <div className="relative group">
            <a href={image.image} target="_blank" rel="noreferrer">
                <div className="w-full overflow-hidden transition-shadow duration-500 ease-in-out rounded-lg shadow-md shadow-brand-themeShadow aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 group-hover:shadow-lg">
                    <Image
                        alt={image.title}
                        src={image.image}
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
                <h3 className="mt-4 text-lg font-medium transition-all duration-300 ease-in-out text-brand-primary line-clamp-1 group-hover:line-clamp-none max-h-10 group-hover:max-h-96">
                    {image.title}
                </h3>
                <p className="mt-1 text-sm transition-all duration-300 ease-in-out text-brand-primary/60 line-clamp-1 group-hover:line-clamp-none max-h-10 group-hover:max-h-96">
                    {image.description}
                </p>
            </a>
            <div className="absolute inset-0 flex items-center justify-center gap-5 transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100">
                <View link={image.image} />
                <Delete onClick={handleDelete} />
            </div>
        </div>
    );
};

export default BlurImage;
