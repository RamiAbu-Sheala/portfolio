import {IconType} from "react-icons";
import {
    BiLogoAws, BiLogoFigma,
    BiLogoFirebase,
    BiLogoJava,
    BiLogoJavascript,
    BiLogoReact,
    BiLogoSpringBoot, BiLogoTailwindCss,
    BiLogoTypescript
} from "react-icons/bi";
import {SiFramer, SiJetpackcompose, SiNextui, SiNx, SiPostman, SiSwagger} from "react-icons/si";
import {DiScrum} from "react-icons/di";
import {RiNextjsFill} from "react-icons/ri";

type Tool = {
    name: string;
    Logo: IconType;
}

const TOOLSET: Tool[] = [
    {
        name: "React",
        Logo: BiLogoReact,
    },
    {
        name: "JavaScript",
        Logo: BiLogoJavascript,
    },
    {
        name: "TypeScript",
        Logo: BiLogoTypescript,
    },
    {
        name: "Java",
        Logo: BiLogoJava,
    },
    {
        name: "Spring Boot",
        Logo: BiLogoSpringBoot,
    },
    {
        name: "Jetpack Compose",
        Logo: SiJetpackcompose,
    },
    {
        name: "Firebase",
        Logo: BiLogoFirebase,
    },
    {
        name: "AWS",
        Logo: BiLogoAws,
    },
    {
        name: "Scrum/Agile",
        Logo: DiScrum,
    },
    {
        name: "Next.js",
        Logo: RiNextjsFill,
    },
    {
        name: "NextUI",
        Logo: SiNextui,
    },
    {
        name: "NX",
        Logo: SiNx,
    },
    {
        name: "Tailwind",
        Logo: BiLogoTailwindCss,
    },
    {
        name: "Figma",
        Logo: BiLogoFigma,
    },
    {
        name: "Framer Motion",
        Logo: SiFramer,
    },
    {
        name: "Swagger",
        Logo: SiSwagger,
    },
    {
        name: "Postman",
        Logo: SiPostman,
    },
];

export {type Tool, TOOLSET};