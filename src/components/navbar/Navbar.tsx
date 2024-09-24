import * as React from "react";
import {
    NavigationMenu, NavigationMenuContent,
    NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList, NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import {Project} from "@/components/navbar/types";
import {ProjectNavListItem} from "@/components/navbar/ProjectNavListItem";

const projects: Project[] = [
    {
        name: "Portfolio",
        id: "portfolio",
        description: "How I built my portfolio. A website built with Next.js and Shadcn/ui",
        image: "/images/portfolio.svg"
    },
    {
        name: "Hocar",
        id: "hocar",
        description: "A car sharing app for students by students",
    },
    {
        name: "Meal Mapper",
        id: "meal-mapper",
        description: "A meal planning app that helps you plan your meals",
    },
    {
        name: "Axxes Jobfair Games",
        id: "axxes-jobfair-games",
        description: "A collection of mini games designed for Axxes to use at Networking events",
    },
    {
        name: "Hocar",
        id: "hocar",
        description: "A car sharing app for students by students",
    },
    {
        name: "Meal Mapper",
        id: "meal-mapper",
        description: "A meal planning app that helps you plan your meals",
    },
    {
        name: "Axxes Jobfair Games",
        id: "axxes-jobfair-games",
        description: "A collection of mini games designed for Axxes to use at Networking events",
    },
    {
        name: "Portfolio",
        id: "portfolio",
        description: "How I built my portfolio. A website built with Next.js and Shadcn/ui",
        image: "/images/portfolio.svg"
    },
];


export function Navbar() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink href={"/projects"}>
                        <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="flex flex-wrap sm:grid sm:grid-cols-3 gap-2 p-2 w-96 md:w-[400px] lg:w-[500px] md:grid-flow-dense">
                                {projects.map((project) => (
                                    <ProjectNavListItem key={project.id} project={project}/>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}