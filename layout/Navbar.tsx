import React, { ReactElement } from 'react'
import Link from "next/link";

function Navbar(): ReactElement {
    return (
        <div className="navbar">
            <div className="container flex">
                <h1 className="logo">Loruki Hosting</h1>
                <nav>
                    <ul>
                        <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/features">
                                <a>Features</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/documentation">
                                <a>Docs</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
