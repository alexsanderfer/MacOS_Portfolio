import React from 'react'
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {locations, techStack} from "#constants/index.js";
import {Check, Flag, Search} from "lucide-react";
import {WindowControls} from "#components";
import useLocationStore from "#store/Location.jsx";
import clsx from "clsx";
import useWindowStore from "#store/Window.jsx";

const Finder = () => {
    const {activeLocation, setActiveLocation} = useLocationStore()
    const {openWindow} = useWindowStore()

    const openItem = (item) => {
        if (item.fileType === "pdf") return openWindow("resume")
        if (item.kind === "folder") return setActiveLocation(item)

        if (["fig", "url"].includes(item.fileType) && item.href) {
            return window.open(item.href, "_blank")
        }

        openWindow(`${item.fileType}${item.kind}`, item)
    }

    const renderList = (name, items) => (
        <div>
            <h3>{name}</h3>

            <ul>
                {items.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => setActiveLocation(item)}
                        className={clsx(item.id === activeLocation.id ? 'active' : 'not-active:')}>
                        <img src={item.icon} className="w-4" alt={item.name}/>
                        <p className="text-sm font-medium truncate">{item.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )

    return (
        <>
            <div id="window-header">
                c
                <Search target="finder"/>
            </div>

            <div className="bg-white flex h-full">
                <div className="sidebar">
                    {renderList("Favorites", Object.values(locations))}
                    {renderList("My Projects", locations.work.children)}
                </div>

                <ul className="content">
                    {activeLocation?.children.map((item) => (
                        <li
                            key={item.id}
                            className={item.position}
                            onClick={() => openItem(item)}
                        >
                            <img src={item.icon} alt={item.name}/>
                            <p>{item.name}</p>
                        </li>
                    ))}
                </ul>
            </div>

        </>
    )
}

const TerminalWindow = WindowWrapper(Finder, "finder")

export default TerminalWindow

