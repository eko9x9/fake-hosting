import React, { ReactElement } from 'react';

interface Props {
    
}

export default function Stats({}: Props): ReactElement {
    return (
        <section className="stats">
            <div className="container">
                <h3 className="stats--heading text-center my-1">
                    Consectetur cillum cupidatat consectetur dolore irure nisi dolore enim Lorem commodo adipisicing qui deserunt nulla.
                </h3>

                <div className="grid grid--3 text-center my-4">
                    <div className="">
                        <i className="fas fa-server fa-3x"></i>
                        <h3>10,231,231</h3>
                        <p className="text-secondary">Deployments</p>
                    </div>
                    <div className="">
                        <i className="fas fa-upload fa-3x"></i>
                        <h3>239 TB</h3>
                        <p className="text-secondary">Published</p>
                    </div>
                    <div className="">
                        <i className="fas fa-project-diagram fa-3x"></i>
                        <h3>1,231,231</h3>
                        <p className="text-secondary">Projects</p>
                    </div>
                </div>
                
            </div>
        </section>
    )
}
