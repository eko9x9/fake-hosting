import React, { ReactElement } from 'react';
import Image from 'next/image';

export default function Head(): ReactElement {
    return (
        <React.Fragment>
            <section className="features-head bg-primary py-3">
                <div className="container grid">
                    <div className="">
                        <h1 className="xl">Features</h1>
                        <p className="lea">Cupidatat occaecat adipisicing exercitation reprehenderit.</p>
                    </div>
                    
                    <div className="img">
                        <Image src={"/server.png"} alt="Server" width="200%" height="200%" />
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
