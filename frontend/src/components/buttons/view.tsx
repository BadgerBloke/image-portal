const View = ({ link }: { link: string }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="mb-[10.5px] outline-none focus:ring-2 ring-brand-base hover:ring-2 transition-all
             ease-in-out duration-300 rounded-md bg-brand-base/80 p-2 hover:bg-brand-base text-brand-primary"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
            </svg>
        </a>
    );
};
export default View;
