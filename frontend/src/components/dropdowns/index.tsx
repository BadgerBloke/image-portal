import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { DropdownMenuOptionsInterface } from "@libs/interfaces/DropdownMenu";

const DropdownMenu1 = ({ children, ...props }: any) => {
    const { options, onClick, id } = props;
    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button>{children}</Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 mt-2 origin-top-right border rounded-md shadow-lg bg-brand-base border-brand-base-light/20 focus:outline-none">
                    {options.map((option: any, index: number) =>
                        Object.keys(option).map((key: any) => (
                            <div key={index + key} className="px-1 py-1 ">
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            className={`${
                                                active
                                                    ? "bg-brand-muted/10 text-brand-primary"
                                                    : "text-brand-muted"
                                            } group flex w-full items-center capitalize whitespace-nowrap rounded-md px-2 py-2 text-sm
                                            transition-colors duration-200`}
                                            onClick={() => onClick(option[key])}
                                        >
                                            <span
                                                className={`w-4 h-4 rounded-full border mr-2 outline-none ${
                                                    key === "default"
                                                        ? "bg-black border-white"
                                                        : key === "light"
                                                        ? "bg-white border-black"
                                                        : key === "dark blue"
                                                        ? "bg-[#131223] border-white"
                                                        : key === "neon"
                                                        ? "bg-[#b3ff17] border-black"
                                                        : null
                                                }`}
                                            />
                                            {key}
                                        </button>
                                    )}
                                </Menu.Item>
                            </div>
                        ))
                    )}
                </Menu.Items>
            </Transition>
        </Menu>
    );
};
const DropdownMenu = ({ children, ...props }: any) => {
    const { options, activeValue, onClick } = props;
    return (
        <DropdownMenuPrimitive.Root>
            <DropdownMenuPrimitive.Trigger asChild>
                {children}
            </DropdownMenuPrimitive.Trigger>
            <DropdownMenuPrimitive.Portal>
                <DropdownMenuPrimitive.Content className="z-10 flex flex-col gap-1 p-1 border rounded-md shadow-lg bg-brand-base border-brand-base-light/20">
                    {options &&
                        options.map(
                            (
                                option: DropdownMenuOptionsInterface,
                                index: number
                            ) => (
                                <DropdownMenuPrimitive.Item asChild key={index}>
                                    <button
                                        className={`${
                                            option.value === activeValue
                                                ? "bg-brand-muted/10 text-brand-primary"
                                                : "text-brand-muted"
                                        } group flex w-full items-center capitalize outline-none whitespace-nowrap
                                                 rounded-md px-2 py-2 text-sm transition-colors duration-200
                                                 hover:bg-brand-muted/10 hover:text-brand-primary`}
                                        onClick={() => onClick(option.value)}
                                    >
                                        {option.label}
                                    </button>
                                </DropdownMenuPrimitive.Item>
                            )
                        )}
                    <DropdownMenuPrimitive.Arrow className="fill-brand-primary/50" />
                </DropdownMenuPrimitive.Content>
            </DropdownMenuPrimitive.Portal>
        </DropdownMenuPrimitive.Root>
    );
};

export { DropdownMenu, DropdownMenu1 };
