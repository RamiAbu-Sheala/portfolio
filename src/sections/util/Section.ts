enum Section {
    WHO_AM_I,
    TOOLSET,
    EXPERIENCE,
    CONTACT,
}

const sectionStrings: Map<Section, string> = new Map([
    [Section.WHO_AM_I, "Who am I?"],
    [Section.TOOLSET, "Toolset"],
    [Section.EXPERIENCE, "Experience"],
    [Section.CONTACT, "Contact"],
]);

const sectionHashes: Map<Section, string> = new Map([
    [Section.WHO_AM_I, "#who-am-i"],
    [Section.TOOLSET, "#toolset"],
    [Section.EXPERIENCE, "#experience"],
    [Section.CONTACT, "#contact"],
]);

const sectionFromHash = (hash: string): Section => {
    switch (hash) {
        case "#who-am-i":
            return Section.WHO_AM_I;
        case "#toolset":
            return Section.TOOLSET;
        case "#experience":
            return Section.EXPERIENCE;
        case "#contact":
            return Section.CONTACT;
        default:
            return Section.WHO_AM_I;
    }
}

const hashFromSection = (section: Section): string => {
    return sectionHashes.get(section) || "";
}

const sectionToString = (section: Section): string => {
    return sectionStrings.get(section) || "";
}

const nextSection = (section: Section): Section | null => {
    return section === Section.CONTACT ? null : section + 1;
}

const previousSection = (section: Section): Section | null => {
    return section === Section.WHO_AM_I ? null : section - 1;
}

export {Section, sectionStrings, sectionFromHash, hashFromSection, sectionToString, nextSection, previousSection};