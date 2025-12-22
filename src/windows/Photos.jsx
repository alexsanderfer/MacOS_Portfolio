import React from 'react'
import useWindowStore from "#store/Window.jsx";
import {WindowControls} from "#components/index.js";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {Mail, Search} from "lucide-react";
import {gallery, photosLinks} from "#constants/index.js";
import clsx from "clsx";
import useLocationStore from "#store/Location.jsx";

const Photos = () => {
    const {openWindow} = useWindowStore()

    return (
        <>
            <div id="window-header">
                <WindowControls target="photos"/>

                <div className="w-full flex justify-end items-center gap-3 text-gray-500">
                    <Mail className="icon"/>
                    <Search className="icon"/>
                </div>
            </div>

            <div className="flex w-full">
                <div className="sidebar">
                    <h2>Photos</h2>

                    <ul>
                        {photosLinks.map(({id, icon, title}) => (
                            <li key={id}>
                                <img src={icon} alt={title}/>
                                <p>{title}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="gallery">
                    <ul className="content">
                        {gallery.map(({id, img}) => (
                            <li key={id}>
                                <img
                                    src={img}
                                    alt={`Gallery Image ${id}`}
                                    onClick={() => openWindow(
                                        "imgfile", {
                                            id,
                                            name: "Gallery Image",
                                            icon: "/images/images.png",
                                            kind: "file",
                                            fileType: "img",
                                            imageUrl: img
                                        })
                                    }
                                />

                                <img src={img} alt={`Gallery Image ${name}`}/>

                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

const PhotosWindows = WindowWrapper(Photos, "photos")

export default PhotosWindows
