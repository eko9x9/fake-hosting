import React, { ReactElement } from 'react';
import Image from 'next/image';
import CliImg from "../../assets/images/cli.png"

interface Props {
    
}

export default function Cli({}: Props): ReactElement {
    return (
        <section className="cli">
            <div className="container grid grid--3">
                <Image src={CliImg} />
                <div className="card">
                    <h3>Ease to use, Cross platform CLI</h3>
                </div>

                <div className="card">
                    <h3>Deploy in seconds</h3>
                </div>
            </div>
        </section>
    )
}
