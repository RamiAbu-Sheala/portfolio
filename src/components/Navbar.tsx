import Image from "next/image";
import { MdDarkMode } from "react-icons/md";
import {ScrollLink} from "@/components/ScrollLink";

export function Navbar() {
    return (
        <div className="flex justify-between py-8 z-10">
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
        </div>
    )
}