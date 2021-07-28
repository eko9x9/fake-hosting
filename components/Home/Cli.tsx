import React, { ReactElement } from 'react';
import Image from 'next/image';
import CliImg from "../../assets/images/cli.png"

export default function Cli(): ReactElement {
    return (
        <section className="cli">
            <div className="container grid grid--3">
                <Image src={CliImg} alt="install" />
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
