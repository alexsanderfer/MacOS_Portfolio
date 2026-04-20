import React, {useEffect, useState} from 'react'
import {Signal, Wifi, Battery} from "lucide-react"

function StatusBar() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000)
        return () => clearInterval(timer)
    }, [])

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        })
    }

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-2 text-white text-sm font-medium max-sm:flex hidden">
            <div className="flex items-center gap-2 pl-8">
                <span className="font-semibold">{formatTime(time)}</span>
            </div>
            <div className="flex items-center gap-2 pr-2">
                <Signal size={16} className="fill-current"/>
                <Wifi size={16} className="fill-current"/>
                <Battery size={20} className="fill-current"/>
            </div>
        </div>
    )
}

export default StatusBar