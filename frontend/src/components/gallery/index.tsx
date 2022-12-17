import BlurImage from "../blurImage";

type Image = {
    id: number;
    href: string;
    imageSrc: string;
    name: string;
    username: string;
};

const Gallery = ({ images }: { images: Image[] }) => {
    return (
        <div className="w-full max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 overflow-hidden gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl:gap-x-8">
                {images.map((image) => (
                    <BlurImage key={image.id} image={image} />
                ))}
            </div>
        </div>
    );
};

export default Gallery;
