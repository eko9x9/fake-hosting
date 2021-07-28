import React, { ReactElement } from 'react'

export default function Main(): ReactElement {
    return (
        <section className="docs-main my-4">
            <div className="container grid">
                <div className="card bg-light p-3">
                    <h3 className="my-2">Essential</h3>
                    <nav>
                        <ul>
                            <li><a href="//#endregion" className="text-primary">Introduction</a></li>
                            <li><a href="//#endregion">About</a></li>
                            <li><a href="//#endregion">Installation</a></li>
                        </ul>
                    </nav>

                    <h3 className="my-2">Deployments</h3>
                    <nav>
                        <ul>
                            <li><a href="//#endregion">Set up container</a></li>
                            <li><a href="//#endregion">Docker</a></li>
                            <li><a href="//#endregion">Upgrade & Downrage</a></li>
                        </ul>
                    </nav>
                </div>

                <div className="card">
                    <h2>Introduction</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus consectetur suscipit nemo laudantium quis et cumque adipisci soluta natus ipsum.</p>
                    <div className="alert alert--success">
                        <i className="fas fa-info"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolorum.
                    </div>
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos minus asperiores eaque consequuntur inventore maxime magni ratione aspernatur delectus. Blanditiis.</p>
                    <a href="//#endregion" className="btn btn-primary">Install Cli</a>

                    <h3>Requirement</h3>
                    <ul>
                        <li>Windows 10, Mac OSX, Linux</li>
                        <li>Node.js v12 or higher</li>
                    </ul>
                    <h3>Install</h3>
                    <p>Mac (Homebrew)</p>
                    <pre><code>$ brew  install loruki-cli</code></pre>
                    <p>NPM</p>
                    <pre><code>$ npm  install loruki-cli</code></pre>
                    <p>Yarn</p>
                    <pre><code>$ yarn  add loruki-cli</code></pre>
                </div>
            </div>
        </section>
    )
}
