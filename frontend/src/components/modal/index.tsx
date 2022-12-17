import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const PopUpModal = ({ children, ...props }: any) => {
    const { isOpen, setIsOpen } = props;
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-10"
                onClose={() => setIsOpen(false)}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-brand-base/50 backdrop-blur-lg" />
                </Transition.Child>

                <div className="fixed inset-0 flex flex-row items-center justify-center w-screen h-screen">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-500"
                        enterFrom="opacity-0 scale-75"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-300"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-75"
                    >
                        <Dialog.Panel className="flex flex-col py-4 max-h-[75vh] bg-brand-base-light h-fit w-fit rounded-xl">
                            {children}
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
};

export { PopUpModal };
