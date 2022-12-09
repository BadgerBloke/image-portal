import { cva, type VariantProps } from "class-variance-authority";
import {
    ChangeEvent,
    FC,
    HTMLAttributes,
    InputHTMLAttributes,
    LabelHTMLAttributes,
} from "react";

const input = cva(
    "transition-all duration-300 w-full ease-in-out border-none rounded-md outline-none ring-0",
    {
        variants: {
            intent: {
                primary:
                    "bg-primary-bg/25 hover:bg-primary-bg/50 focus:bg-primary-bg hover:ring-2 ring-info/50 focus:ring-2 focus:ring-info",
            },
            size: {
                small: "px-2 py-1 text-xs",
                medium: "px-3 py-2 text-sm",
                large: "px-4 py-3 text-base",
            },
        },
        defaultVariants: {
            intent: "primary",
            size: "medium",
        },
    }
);

const labelElement = cva("transition-colors duration-300", {
    variants: {
        intent: {
            primary:
                "text-primary-text hover:text-info/50 group-focus-within:text-info",
        },
        size: {
            small: "text-xs",
            medium: "text-sm",
            large: "text-base",
        },
    },
    defaultVariants: {
        intent: "primary",
        size: "medium",
    },
});

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    labelClassName?: string;
    inputClassName?: string;
}

interface LabelProps
    extends LabelHTMLAttributes<HTMLLabelElement>,
        VariantProps<typeof labelElement> {}
type InputBlockProps = InputProps & LabelProps;

const LabelAndFieldInRow: FC<InputBlockProps> = ({
    intent,
    size,
    labelClassName,
    inputClassName,
    label,
    ...props
}) => {
    return (
        <div className="flex flex-col items-start justify-between w-full gap-2 group">
            <label
                htmlFor={props.name}
                className={labelElement({
                    intent,
                    size,
                    class: labelClassName,
                })}
            >
                {label}
            </label>
            <input
                className={input({ intent, size, class: inputClassName })}
                {...props}
            />
        </div>
    );
};

export { LabelAndFieldInRow };
