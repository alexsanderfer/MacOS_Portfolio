import React from 'react'

function Notch() {
    return (
        <div className="fixed top-0 left-1/2 -translate-x-1/2 z-[60] w-32 h-7 bg-black rounded-b-2xl flex items-center justify-center max-sm:flex hidden">
            <div className="w-16 h-4 bg-black rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-gray-800 rounded-full"/>
            </div>
        </div>
    )
}

export default Notch