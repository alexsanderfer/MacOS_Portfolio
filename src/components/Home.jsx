import React from 'react'
import {locations} from "#constants/index.js";
import clsx from "clsx";
import {useGSAP} from "@gsap/react";
import {Draggable} from "gsap/Draggable";
import useWindowStore from "#store/Window.jsx";
import useLocationStore from "#store/Location.jsx";

const projects = locations.work?.children ?? [];

const Home = () => {
    const {setActiveLocation} = useLocationStore()
    const {openWindow} = useWindowStore()

    const handleFolderClick = (project) => {
        setActiveLocation(project)
        openWindow("finder")
    }

    useGSAP(() => {
        // GSAP animation
        Draggable.create(".folder")
    }, []);


    return (
        <section id="home">
            <ul>
                {projects.map((project) => (
                    <li
                        key={project.id}
                        className={clsx("group folder", project.windowPosition)}
                        onClick={() => handleFolderClick(project)}
                    >
                        <img src="/images/folder.png" alt={project.name}/>
                        <p>{project.name}</p>
                    </li>
                ))}
            </ul>

        </section>
    )
}

export default Home
