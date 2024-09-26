import Link from "next/link";

type ScrollLinkProps = {
    href: string;
    isActive: boolean;
    text: string;
};

export function ScrollLink({href, isActive, text}: ScrollLinkProps) {
    return (
        <Link
            href={href}
            className={`border-accent-500 ${isActive ? "border-b-2" : "hover:border-b-2"}`}
        >
            {text}
        </Link>
    );
}