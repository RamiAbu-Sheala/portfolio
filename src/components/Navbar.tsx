import Image from "next/image";
import {MdDarkMode} from "react-icons/md";
import {ScrollLink} from "@/components/ScrollLink";

export function Navbar() {
    return (
        <div className="fixed w-full z-10 top-0 bg-background-50">
            <div className="flex justify-between py-4 align-bottom px-8 md:px-24 lg:px-36 xl:px-52 2xl:px-96 3xl:px-128">
                <Image src="logo.svg" alt="logo" width={50} height={50}/>
                <div className="flex gap-8 align-bottom">
                    <ScrollLink href={"/who-am-i"} isActive={true} text="Who am I?"/>
                    <ScrollLink href={"/toolset"} isActive={false} text="Toolset"/>
                    <ScrollLink href={"/experience"} isActive={false} text="Experience"/>
                    <ScrollLink href={"/contact"} isActive={false} text="Contact"/>
                    <button className="flex items-end">
                        <MdDarkMode size={24}/>
                    </button>
                </div>
            </div>
        </div>
    )
}