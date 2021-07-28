import React, { ReactElement } from 'react';
import Image from 'next/image';

export default function Head(): ReactElement {
    return (
        <React.Fragment>
            <section className="docs-head bg-primary py-3">
                <div className="container grid">
                    <div className="">
                        <h1 className="xl">Docs</h1>
                        <p className="lea">Learn how to work with Loruki platform. </p>
                    </div>
                    
                    <div className="img">
                        <Image src={"/docs.png"} alt="Server" width="200%" height="200%" />
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
