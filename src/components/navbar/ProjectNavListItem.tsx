import {Project} from "@/components/navbar/types";
import {NavigationMenuLink} from "@/components/ui/navigation-menu";

type ProjectContentCardProps = {
    project: Project;
}

export function ProjectNavListItem({project}: ProjectContentCardProps) {
    if (project.image) {
        return projectNavListItemWithImage({project});
    }
    return projectNavListItemWithoutImage({project});
}

function projectNavListItemWithImage({project}: ProjectContentCardProps) {

    return (
        <li className="sm:row-span-3">
            <NavigationMenuLink asChild>
                <a
                    href={`/projects/${project.id}`}
                    className="flex flex-row sm:h-full w-full select-none sm:flex-col justify-start border border-gray-200 rounded-lg shadow-md p-2 gap-2"
                >
                    <img
                        src={project.image!}
                        alt={`${project.name} cover image`}
                        className="h-24 md:rounded-t-lg md:w-full md:h-[50%] md:object-cover"
                    />
                    <div>
                        <h3 className="text-lg font-bold">{project.name}</h3>
                        <p>{project.description}</p>
                    </div>
                </a>
            </NavigationMenuLink>
        </li>
    )
}

function projectNavListItemWithoutImage({project}: ProjectContentCardProps) {
    return (
        <li className="col-span-2">
            <NavigationMenuLink asChild>
                <a
                    href={`/projects/${project.id}`}
                    className="flex h-full w-full select-none flex-col justify-start border border-gray-200 rounded-lg shadow-md p-2 gap-2"
                >
                        <h3 className="text-lg font-bold">{project.name}</h3>
                        <p>{project.description}</p>
                </a>
            </NavigationMenuLink>
        </li>
    )
}