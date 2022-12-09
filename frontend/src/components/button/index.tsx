import { FC, HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva(
    "h-fit font-medium shadow-black shadow-sm capitalize outline-none rounded-md transition-all ease-in-out duration-300",
    {
        variants: {
            intent: {
                primary: "bg-info-dark hover:bg-info/20 focus:bg-info/20",
                success:
                    "bg-success hover:bg-success-light focus:bg-success-light",
                secondary:
                    "bg-primary-button-bg hover:bg-primary-text/25 focus:bg-primary-text/25",
                warning: "bg-warn hover:bg-warn-light focus:bg-warn-light",
                "dark-primary":
                    "bg-button text-info hover:bg-info/75 hover:text-white focus:bg-info/75 focus:text-white",
                "dark-success":
                    "bg-button text-success-light hover:bg-success hover:text-white focus:bg-success focus:text-white",
                "dark-danger":
                    "bg-button, text-danger-light hover:bg-danger hover:text-white focus:bg-danger focus:text-white",
            },
            size: {
                small: ["text-xs", "py-1", "px-2"],
                medium: ["text-sm", "py-2", "px-3"],
                large: ["text-base", "py-3", "px-4"],
            },
        },
        defaultVariants: {
            intent: "primary",
            size: "medium",
        },
    }
);

interface ButtonProps
    extends HTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof button> {}

const Button: FC<ButtonProps> = ({ className, intent, size, ...props }) => {
    return (
        <button
            className={button({ intent, size, class: className })}
            {...props}
        />
    );
};

export { Button };
