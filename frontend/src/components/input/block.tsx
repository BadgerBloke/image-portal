const LabelAndField = ({
    label,
    name,
    value,
    onChange,
    type,
}: {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}) => {
    return (
        <div className="flex flex-col items-start justify-center w-full gap-2">
            <label htmlFor={name} className="text-sm font-semibold">
                {label}
            </label>
            <input
                type={type || "text"}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                className="w-full p-2 transition-all duration-300 ease-in-out border-none rounded-md shadow-sm outline-none focus:ring-2 hover:ring-brand-base hover:ring-2 focus:ring-brand-base"
            />
        </div>
    );
};

export { LabelAndField };
