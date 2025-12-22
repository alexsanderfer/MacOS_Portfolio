import React from 'react'

import {Dock, Home, Navbar, Welcome} from "#components";
import {Finder, Resume, Safari, Terminal, Text, Image, Contact, Photos} from "#windows"

import {Draggable} from "gsap/Draggable";
import gsap from "gsap";

gsap.registerPlugin(Draggable)

function App() {
    return (
        <main>
            <Navbar/>
            <Welcome/>
            <Home/>

            <Dock/>

            <Terminal/>
            <Safari/>
            <Resume/>
            <Finder/>
            <Photos/>

            <Text/>
            <Image/>

            <Contact/>
        </main>
    )
}

export default App
