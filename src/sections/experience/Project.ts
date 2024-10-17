import {IconType} from "react-icons";
import {RiNextjsFill} from "react-icons/ri";
import {BiLogoTailwindCss, BiLogoTypescript} from "react-icons/bi";
import {SiFramer} from "react-icons/si";

type Project = {
    id: string,
    title: string,
    startDate: Date,
    endDate: Date,
    description: string,
    image: string,
    technologies: IconType[],
    company?: string,
};

const PROJECTS: Project[] = [
    {
        id: "portfolio",
        title: "My Portfolio",
        startDate: new Date(2024, 9, 23),
        endDate: new Date(),
        description: "How I built this portfolio. The technologies I used and the challenges I faced.",
        image: "/experience/projects/portfolio.png",
        technologies: [RiNextjsFill, BiLogoTailwindCss, SiFramer, BiLogoTypescript],
    },
    {
        id: "portfolio2",
        title: "My Portfolio2",
        startDate: new Date(2024, 9, 23),
        endDate: new Date(),
        description: "How I built this portfolio. The technologies I used and the challenges I faced.",
        image: "/experience/projects/portfolio.png",
        technologies: [RiNextjsFill, BiLogoTailwindCss, SiFramer, BiLogoTypescript],
    },
    {
        id: "portfolio3",
        title: "My Portfolio3",
        startDate: new Date(2024, 9, 23),
        endDate: new Date(),
        description: "How I built this portfolio. The technologies I used and the challenges I faced.",
        image: "/experience/projects/portfolio.png",
        technologies: [RiNextjsFill, BiLogoTailwindCss, SiFramer, BiLogoTypescript],
    },
];

export {type Project, PROJECTS};