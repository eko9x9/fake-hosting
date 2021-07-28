import React, { ReactElement } from 'react'

interface Props {
    
}

function Navbar({}: Props): ReactElement {
    return (
        <div className="navbar">
            <div className="container flex">
                <h1 className="logo">Loruki Hosting</h1>
                <nav>
                    <ul>
                        <li>
                            <a href="/" className="">Home</a>
                        </li>
                        <li>
                            <a href="/" className="">Features</a>
                        </li>
                        <li>
                            <a href="/" className="">Docs</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
