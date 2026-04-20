import React, {useLayoutEffect, useRef} from 'react'
import useWindowStore from "#store/Window.jsx";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {Draggable} from "gsap/Draggable";

const WindowWrapper = (Component, windowKey) => {
    const Wrapper = (props) => {
        const {focusWindow, closeWindow, windows} = useWindowStore()
        const {isOpen, zIndex} = windows[windowKey];
        const ref = useRef(null);

        useGSAP(() => {
            const el = ref.current;
            if (!el || !isOpen) return;

            el.style.display = "block";

            const isMobile = window.innerWidth <= 640;

            if (isMobile) {
                gsap.fromTo(
                    el,
                    {scale: 0.9, opacity: 0, y: 100},
                    {scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "cubic-bezier(0.16, 1, 0.3, 1)"}
                );
            } else {
                gsap.fromTo(
                    el,
                    {scale: 0.8, opacity: 0, y: 40},
                    {scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out"}
                );
            }
        }, [isOpen])

        useGSAP(() => {
            const el = ref.current;
            if (!el) return;

            const isMobile = window.innerWidth <= 640;

            const draggableConfig = {
                onPress: () => focusWindow(windowKey),
                type: "x,y",
                edgeResistance: 0.65,
                bounds: window,
                inertia: true,
                allowNativeTouchScrolling: false,
                force3D: true
            };

            if (isMobile) {
                draggableConfig.onDragEnd = function() {
                    const y = this.y;
                    if (y > 100) {
                        gsap.to(el, {
                            y: window.innerHeight,
                            opacity: 0,
                            duration: 0.3,
                            ease: "power2.in",
                            onComplete: () => closeWindow(windowKey)
                        });
                    } else {
                        gsap.to(el, {
                            y: 0,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    }
                };
            }

            const [instance] = Draggable.create(el, draggableConfig);

            return () => instance.kill()
        }, [isOpen])

        useLayoutEffect(() => {
            const el = ref.current;
            if (!el) return;
            el.style.display = isOpen ? "block" : "none";
        }, [isOpen]);

        return <section id={windowKey} ref={ref} style={{
            zIndex,
        }} className="absolute">
            <Component {...props} />
        </section>
    }

    Wrapper.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;

    return Wrapper
}

export default WindowWrapper
