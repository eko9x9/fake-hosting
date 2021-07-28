import React, { ReactElement } from 'react';
import Image from "next/image";
import NodeImg from "../../assets/images/logos/node.png";
import PythonImg from "../../assets/images/logos/python.png";
import GoImg from "../../assets/images/logos/go.png";
import RubyImg from "../../assets/images/logos/ruby.png";
import PhpImg from "../../assets/images/logos/php.png";
import Link from "next/link";

interface Props {
    
}

export default function Languages({}: Props): ReactElement {
    return (
        <section className="languages">
            <h2 className="md text-center my-2">
                Supported Languages
            </h2>
            <div className="container flex">
                <div className="card">
                    <h4>Node.js</h4>
                    <Image src={NodeImg} alt="node.js"/>
                </div>
                <div className="card">
                    <h4>Go</h4>
                    <Image src={GoImg} alt="go" />
                </div>
                <div className="card">
                    <h4>Ruby</h4>
                    <Image src={RubyImg} alt="ruby" />
                </div>
                <div className="card">
                    <h4>Python</h4>
                    <Image src={PythonImg} alt="python" />
                </div>
                <div className="card">
                    <h4>Php</h4>
                    <Image src={PhpImg} alt="php" />
                </div>
            </div>
        </section>
    )
}
