export enum Section {
    WHO_AM_I,
    TOOLSET,
    EXPERIENCES,
    CONTACT,
}

export const sectionStrings: Map<Section, string> = new Map([
    [Section.WHO_AM_I, "Who am I?"],
    [Section.TOOLSET, "Toolset"],
    [Section.EXPERIENCES, "Experiences"],
    [Section.CONTACT, "Contact"],
]);

const sectionHashes: Map<Section, string> = new Map([
    [Section.WHO_AM_I, "#who-am-i"],
    [Section.TOOLSET, "#toolset"],
    [Section.EXPERIENCES, "#experiences"],
    [Section.CONTACT, "#contact"],
]);

export const sectionFromHash = (hash: string): Section => {
    switch (hash) {
        case "#who-am-i":
            return Section.WHO_AM_I;
        case "#toolset":
            return Section.TOOLSET;
        case "#experiences":
            return Section.EXPERIENCES;
        case "#contact":
            return Section.CONTACT;
        default:
            return Section.WHO_AM_I;
    }
}

export const hashFromSection = (section: Section): string => {
    return sectionHashes.get(section) || "";
}

export const sectionToString = (section: Section): string => {
    return sectionStrings.get(section) || "";
}

export const nextSection = (section: Section): Section | null => {
    return section === Section.CONTACT ? null : section + 1;
}

export const previousSection = (section: Section): Section | null => {
    return section === Section.WHO_AM_I ? null : section - 1;
}