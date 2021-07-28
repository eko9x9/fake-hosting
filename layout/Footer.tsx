import React, { ReactElement } from 'react'

export default function Footer(): ReactElement {
    return (
        <footer className="footer bg-dark py-4">
            <div className="container grid grid--3">
                <div className="">
                    <h1>Loruki</h1>
                    <p>Copyright &copy; 2021</p>
                </div>

                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Docs</a></li>
                    </ul>
                </nav>

                <div className="social">
                    <a href="#">
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                    <a href="#">
                        <i className="fab fa-facebook fa-2x"></i>
                    </a>
                    <a href="//#endregion" className="">
                        <i className="fab fa-instagram fa-2x"></i>
                    </a>
                    <a href="">
                        <i className="fab fa-twitter fa-2x"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}
