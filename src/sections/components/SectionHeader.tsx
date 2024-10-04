import React from "react";

type SectionHeaderProps = {
    className?: string;
    children: React.ReactNode;
}

function SectionHeader({children, className}: SectionHeaderProps) {
    return (
        <div className={`flex flex-col gap-4 text-center ${className}`}>
            {children}
        </div>
    );
}

export {SectionHeader};