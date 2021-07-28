import React, { ReactElement } from 'react';
import Image from 'next/image';

export default function SubHead(): ReactElement {
    return (
        <section className="features-sub-head bg-light py-3">
            <div className="container grid">
                <div className="">
                    <h1 className="md">The Loruki Platform</h1>
                    <p className="lea">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem fugit, culpa laudantium sequi voluptas at voluptatibus possimus cum error similique iure necessitatibus minus dolor officia rem sunt illo optio sed.</p>
                </div>
                
                <div className="img">
                    <Image src={"/server2.png"} alt="Server" width="250%" height="250%" />
                </div>
            </div>
        </section>
    )
}
