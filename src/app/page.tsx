import {WhoAmI} from "@/pages/who-am-i/WhoAmI";
import {BackgroundLogo} from "@/components/BackgroundLogo";
import {ToolSet} from "@/pages/toolset/ToolSet";
import {Experiences} from "@/pages/experiences/Experiences";
import {Contact} from "@/pages/contact/Contact";
import {Navbar} from "@/components/Navbar";
import React from "react";

export default function Home() {

    return (
        <div>
            <Navbar/>
            <WhoAmI/>
            <ToolSet/>
            <Experiences/>
            <Contact/>
            <BackgroundLogo/>
        </div>
    )
}
//