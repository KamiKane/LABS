import React from 'react'
import {link} from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <h1>React Classroom App</h1>
            <nav>
                <link to="/">Home</link> &nbsp; |&nbsp;
                <link to="/about">About</link>
            </nav>
        </header>
    )
}
