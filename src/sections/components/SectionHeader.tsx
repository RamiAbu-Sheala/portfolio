import React from "react";

type SectionHeaderProps = {
    children: React.ReactNode;
}

function SectionHeader({children}: SectionHeaderProps) {
    return (
        <div className="flex flex-col gap-4 text-center">
            {children}
        </div>
    );
}

export {SectionHeader};