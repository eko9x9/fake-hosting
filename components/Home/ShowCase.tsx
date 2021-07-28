import React, { ReactElement } from 'react'

export default function ShowCase(): ReactElement {
    return (
        <section className="showcase">
            <div className="container grid">
                <div className="showcase--text">
                    <h1>Easier Deployment</h1>
                    <p>Commodo nostrud laborum est amet pariatur nostrud veniam quis esse laboris eu laborum tempor cillum.</p>
                    <a href="#" className="btn btn--outline">Read More</a>
                </div>

                <div className="showcase__form card">
                    <h2>Request a Demo</h2>
                    <form action="#">
                        <div className="form-control">
                            <input type="text" name="name" placeholder="Name" />
                        </div>
                        <div className="form-control">
                            <input type="text" name="company" placeholder="Company Name" />
                        </div>
                        <div className="form-control">
                            <input type="email" name="email" placeholder="Email" required />
                        </div>
                        
                        <input type="submit" value="send" className="btn btn--primary" />
                    </form>
                </div>
            </div>
        </section>
    )
}
