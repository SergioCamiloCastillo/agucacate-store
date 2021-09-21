import React from 'react'
import NavBar from "@components/NavBar/NavBar";

export default function Layout({ children }) {
    return (
        <div className='container'>
            <NavBar />
            {children}
            <footer>this ia a footers</footer>
        </div>
    )
}
