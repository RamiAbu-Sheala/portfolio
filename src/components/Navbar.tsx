import Image from "next/image";
import { MdDarkMode } from "react-icons/md";
import {ScrollLink} from "@/components/ScrollLink";

export function Navbar() {
    return (
        <div className="absolute w-full z-10">
        <div className="flex justify-between py-8 px-8 md:px-24 lg:px-48 xl:px-72 2xl:px-96">
            <Image src="logo.svg" alt="logo" width={50} height={50} />
            <div className="flex gap-8 h-fit">
                <ScrollLink href={"/who-am-i"} isActive={true} text="Who am I?" />
                <ScrollLink href={"/toolset"} isActive={false} text="Toolset" />
                <ScrollLink href={"/experience"} isActive={false} text="Experience" />
                <ScrollLink href={"/contact"} isActive={false} text="Contact" />
                <button>
                    <MdDarkMode size={24} />
                </button>
            </div>
        </div></div>
    )
}