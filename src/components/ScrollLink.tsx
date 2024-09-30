'use client';
import Link from "next/link";

type ScrollLinkProps = {
    element: string;
    isActive: boolean;
    text: string;
};

export function ScrollLink({element, isActive, text}: ScrollLinkProps) {

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const target = document.querySelector(element);
        if (target) {
            target.scrollIntoView({behavior: "smooth"});
            history.pushState(null, "", element);
        }
    }

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