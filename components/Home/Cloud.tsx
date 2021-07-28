import React, { ReactElement } from 'react';
import Image from "next/image";
import CloudImg from "../../assets/images/cloud.png"

interface Props {
    
}

export default function Cloud({}: Props): ReactElement {
    return (
        <section className="cloud bg-primary my-2">
            &apos;
            <div className="container grid">
                <div className="text-center">
                    <h2 className="lg">Extreme Cloud Hosting</h2>
                    <p className="lead my-1">Cloud hosting never you've never seen. Fast, efficient and scalable </p>
                    <a href="#" className="btn btn-dark">Read More</a>
                </div>

                <Image src={CloudImg} alt="cloud" />
            </div>
        </section>
    )
}
