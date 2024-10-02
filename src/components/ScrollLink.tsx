import Link from "next/link";
import React from "react";

type ScrollLinkProps = {
    element: string;
    isActive: boolean;
    handleClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    text: string;
};

function ScrollLink({element, isActive, handleClick, text}: ScrollLinkProps) {

    return (
        <Link
            href={element}
            onClick={handleClick}
            className={`border-accent-500 ${isActive ? "border-b-2" : "hover:border-b-2"} flex items-end`}
        >
            {text}
        </Link>
    );
}

export {ScrollLink};