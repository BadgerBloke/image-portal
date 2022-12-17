import { FileUploader } from "react-drag-drop-files";

type UploadFilesType = {
    acceptedFiles?: string[];
    handleChange: (file: File) => void;
    hoverTitle?: string;
    children: React.ReactNode;
};

export const UploadFiles = ({ children, ...props }: UploadFilesType) => {
    const { handleChange, acceptedFiles, hoverTitle } = props;
    return (
        <div className="flex items-start self-stretch w-full gap-4">
            <FileUploader
                classes="flex h-full w-full hover:bg-brand-primary/10 cursor-pointer overflow-hidden rounded-xl transition-colors duration-300"
                maxSize={5}
                handleChange={handleChange}
                name="restaurant-data"
                types={acceptedFiles || ["JPG", "JPEG", "PNG", "WEBP"]}
                hoverTitle={hoverTitle}
                onTypeError={(err: string) => alert(err)}
                onSizeError={(file: string) => alert(file)}
            >
                {children}
            </FileUploader>
        </div>
    );
};