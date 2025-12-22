import React from 'react'
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {socials, CONTACT_EMAIL} from "#constants/index.js";
import {WindowControls} from "#components/index.js";
import {LucideMail, LucideMailX, Phone} from "lucide-react";

const Contact = () => {
    const subject = encodeURIComponent("Hello from your portfolio");
    const body = encodeURIComponent("Hi Alexsander, I'd like to get in touch about...");
    const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    const whatsAppLink = (phoneNumber, message) => {
        const encodedMessage = encodeURIComponent(message);
        return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    }

    return (
        <>
            <div id="window-header">
                <WindowControls target="contact"/>
                <h2>Contact Me</h2>
            </div>

            <div className="p-5 space-y-5">
                <img
                    src="/images/eu.jpeg"
                    alt="Alexsander"
                    className="w-20 rounded-full"
                />

                <h3 className="">Let's Connect</h3>
                <p>Got an idea? A bug to squash? Or just wanna talk? I'm in.</p>

                <div>
                    <p className="flex items-center gap-1">
                        <LucideMail className="icon"/>
                        <a
                            href={mailtoHref}
                            title="afgouveia90@gmail.com"
                            className="text-blue-600 underline"
                        >
                            afgouveia90@gmail.com
                        </a>
                    </p>

                    <p className="flex items-center gap-1">
                        <Phone className="icon inline-block"/>
                        <a
                            href={whatsAppLink("351960169404", "Hello Alexsander, I would like to get in touch with you.")}
                            title="afgouveia90@gmail.com"
                            className="text-blue-600 underline"
                        >
                            WhatsApp: +351 960 169 404
                        </a>
                    </p>

                </div>
                
                <ul>
                    {socials.map(({id, bg, link, icon, text}) => (
                        <li
                            key={id}
                            style={{backgroundColor: bg}}
                        >
                            <a href={link} target="_blank" noopener noreferrer title={text}>
                                <img src={icon} className="size-5" alt={text}/>
                                <p>{text}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow
