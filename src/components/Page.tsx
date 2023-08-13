import React from "react";

// set max height to work with Menu, otherwise the scroll bar still
// exists when the menu is opened
export default function Page({children}: { children: React.ReactNode }) {
    return (
        <div className='max-h-screen overflow-y-scroll'>
            {children}
        </div>
    )
}