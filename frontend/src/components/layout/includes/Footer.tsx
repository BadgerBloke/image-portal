import Link from "next/link";
import Image from "next/image";
import WideLogo from "@components/logo/wide";

const Footer = () => {
    return (
        <footer className="flex justify-center w-full py-5 mt-3 bg-brand-base-light/25 text-brand-inverted lg:mt-5">
            <div className="flex flex-col items-center justify-center px-5 mx-auto">
                <p className="text-sm text-center">
                    imageBank is a company dedicated to excellence in Image
                    Storage Service.
                </p>
                <p className="flex justify-center text-xs text-center">
                    ©2022-23 All Rights Reserverd. This site is developed and
                    maintained by www.MKSingh.in
                </p>
            </div>
        </footer>
    );
};

export default Footer;
