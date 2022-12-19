import Gallery from "@components/gallery";
import { LabelAndField } from "@components/input/block";
import { UploadFiles } from "@components/input/fileUploader";
import MainLogo from "@components/logo";
import { PopUpModal } from "@components/modal";
import type { NextPage } from "next";
import { useSession } from "next-auth/client";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import axios from "axios";
import { API_URL } from "@config/index";

const Home: NextPage = () => {
    const [session] = useSession();
    const [image, setImage] = useState<File | null>(null);
    const [isImageAdded, setIsImageAdded] = useState<boolean>(false);
    const [formData, setFormData] = useState({
        imageTitle: "",
        imageDescription: "",
    });
    const [currentImageModification, setCurrentImageModification] = useState("");
    const [images, setImages] = useState<
        {
            id: number;
            image: string;
            modified_at: string;
            title: string;
            description: string;
        }[]
    >([]);
    const { imageTitle, imageDescription } = formData;

    // Fetching images
    useEffect(() => {
        const getImages = async () => {
            try {
                const res = await axios.get(
                    `${API_URL}/image/all/`,
                    {
                        headers: {
                            Authorization: `JWT ${session?.accessToken}`,
                        },
                    }
                );
                setImages(res.data);
                console.log("res", res.data);
            } catch (error: any) {
                console.log(error);
            }
        };
        getImages();
    }, [session]);

    // Uploading image
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileSelected = async (file: File) => {
        if (file) {
            const imageName = uuidV4();
            const imageExtension = file.name.split(".").pop();
            const imageSlug = imageName + "." + imageExtension;
            const newFile = new File([file], imageSlug, {
                type: file.type,
            });
            setCurrentImageModification(newFile.lastModified.toString()); 
            setImage(newFile);
            setIsImageAdded(true);
        } else {
            setIsImageAdded(false);
        }
    };

    const handleImageUpload = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (imageTitle !== "" && imageDescription !== "") {
            if (image) {
                try {
                    setIsImageAdded(false);
                    const config = {
                        headers: {
                            "Content-Type": "multipart/form-data",
                            Accept: "application/json",
                            Authorization: `JWT ${session?.accessToken}`,
                        },
                    };

                    const formData = new FormData();
                    formData.append("image", image);
                    formData.append("title", imageTitle);
                    formData.append("description", imageDescription);

                    const body = formData;
                    const res = await axios.post(
                        `${API_URL}/image/add/`,
                        body,
                        config
                    );

                    if (res.status === 201) {
                        const img = [...images];
                        const newImg = {
                            id: res.data.id,
                            image: res.data.image,
                            title: res.data.title,
                            description: res.data.description,
                            modified_at: currentImageModification,
                        };

                        img.unshift(newImg);
                        setImages(img);
                        alert("Image uploaded successfully");
                    }
                    setImage(null);
                    setFormData({
                        imageTitle: "",
                        imageDescription: "",
                    });
                } catch (error) {
                    setImage(null);
                    alert("Something went wrong");
                    console.log(error);
                }
            } else {
                alert("Please select an image");
            }
        } else {
            alert("Please provide both the details");
        }
    };
    return (
        <div className="flex items-center justify-center px-4 min-h-screenLessNav text-brand-primary">
            <Head>
                <title>imageBank - images your imagination</title>
            </Head>

            <div className="flex flex-col items-center justify-center w-full gap-5">
                <MainLogo />
                <h1 className="-mt-5 text-6xl font-bold text-center">
                    Welcomes{" "}
                    {session?.user?.name?.trim()
                        ? "you " + session?.user?.name?.trim() + "!"
                        : "you!"}
                </h1>
                <p className="-mt-2 text-base text-center">
                    your very personal image bank...
                </p>
                {session?.user ? (
                    <>
                        <div className="flex self-center w-full max-w-2xl px-4 mx-auto mt-10 sm:px-6 lg:max-w-7xl lg:px-8">
                            <UploadFiles handleChange={handleFileSelected}>
                                <div className="flex flex-col self-stretch px-12 w-full items-center justify-center gap-6 border-[1.7px] border-brand-primary/50 border-dashed rounded-xl min-h-48">
                                    <svg
                                        width="37"
                                        height="36"
                                        viewBox="0 0 37 36"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M34.3746 0H3.42305C2.73898 0 2.08292 0.269437 1.59921 0.749038C1.1155 1.22864 0.84375 1.87912 0.84375 2.55738V33.2459C0.84375 33.9242 1.1155 34.5746 1.59921 35.0542C2.08292 35.5338 2.73898 35.8033 3.42305 35.8033H34.3746C35.0587 35.8033 35.7147 35.5338 36.1985 35.0542C36.6822 34.5746 36.9539 33.9242 36.9539 33.2459V2.55738C36.9539 1.87912 36.6822 1.22864 36.1985 0.749038C35.7147 0.269437 35.0587 0 34.3746 0ZM13.4178 6.39344C14.1193 6.39344 14.8049 6.59968 15.3882 6.98606C15.9714 7.37245 16.426 7.92163 16.6944 8.56417C16.9628 9.20671 17.0331 9.91374 16.8962 10.5958C16.7594 11.278 16.4216 11.9045 15.9256 12.3963C15.4296 12.8881 14.7977 13.223 14.1097 13.3587C13.4218 13.4943 12.7087 13.4247 12.0606 13.1586C11.4126 12.8924 10.8587 12.4417 10.469 11.8634C10.0793 11.2852 9.87129 10.6053 9.87129 9.90984C9.87129 8.97723 10.2449 8.08282 10.91 7.42337C11.5752 6.76392 12.4772 6.39344 13.4178 6.39344ZM33.0057 27.7993C32.9501 27.8998 32.8682 27.9836 32.7687 28.042C32.6692 28.1004 32.5557 28.1312 32.4401 28.1311H5.35752C5.24279 28.1312 5.13012 28.1009 5.03115 28.0433C4.93218 27.9858 4.85049 27.9031 4.7945 27.8038C4.73851 27.7045 4.71026 27.5922 4.71266 27.4785C4.71505 27.3647 4.74801 27.2537 4.80813 27.1568L9.96673 18.8453C10.0194 18.7603 10.0915 18.6887 10.1771 18.6362C10.2628 18.5837 10.3596 18.5519 10.4599 18.5432C10.5602 18.5345 10.6611 18.5492 10.7546 18.5861C10.8481 18.623 10.9316 18.6811 10.9984 18.7558L15.6025 23.8904L22.8761 13.0714C22.9365 12.9837 23.0176 12.912 23.1124 12.8624C23.2071 12.8128 23.3126 12.7869 23.4197 12.7869C23.527 12.788 23.6323 12.8157 23.7261 12.8674C23.8199 12.9191 23.8992 12.9931 23.9568 13.0829L32.9844 27.1485C33.0464 27.2451 33.0811 27.3565 33.0849 27.471C33.0886 27.5855 33.0612 27.6989 33.0057 27.7993Z"
                                            className="fill-brand-red"
                                        />
                                    </svg>
                                    <span className="text-xs leading-4 text-center text-brand-primary">
                                        + Click to select photo<br></br> or
                                        <br></br> Simply drop here
                                    </span>
                                </div>
                            </UploadFiles>
                        </div>
                        <PopUpModal
                            isOpen={isImageAdded}
                            setIsOpen={setIsImageAdded}
                        >
                            <form
                                className="flex flex-col w-full gap-4 p-4 md:p-8 md:gap-6 md:min-w-96"
                                onSubmit={handleImageUpload}
                            >
                                <LabelAndField
                                    label="Image Title *"
                                    name="imageTitle"
                                    value={imageTitle}
                                    onChange={onChange}
                                />
                                <LabelAndField
                                    label="Image Description *"
                                    name="imageDescription"
                                    value={imageDescription}
                                    onChange={onChange}
                                />
                                <button
                                    className="flex self-center px-4 py-2 transition-all duration-300 ease-in-out transform rounded-md shadow-md outline-none shadow-brand-themeShadow hover:scale-105 bg-brand-base w-fit text-brand-muted"
                                    type="submit"
                                >
                                    Add Image
                                </button>
                            </form>
                        </PopUpModal>
                        <Gallery images={images} />
                    </>
                ) : (
                    <p className="mt-10 text-lg lg:text-2xl">
                        <Link href="/auth/login">
                            <a>
                                <strong>Login</strong>
                            </a>
                        </Link>{" "}
                        to access your all images!
                    </p>
                )}
            </div>
        </div>
    );
};

export default Home;
