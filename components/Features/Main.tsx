import React, { ReactElement } from 'react'

export default function Main(): ReactElement {
    return (
        <section className="features-main my-2">
            <div className="container grid grid--3">
                <div className="card flex">
                    <i className="fas fa-server fa-3x"></i>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus nobis rem, voluptate, aut officiis pariatur alias tempore illum fuga, perspiciatis quos similique labore esse natus sed laborum distinctio delectus laudantium.</p>
                </div>
                <div className="card flex">
                    <i className="fas fa-database fa-3x"></i>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus nobis rem, voluptate, aut officiis pariatur alias tempore illum fuga, perspiciatis quos similique labore esse natus sed laborum distinctio delectus laudantium.</p>
                </div>
                <div className="card flex">
                    <i className="fas fa-laptop-code fa-3x"></i>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus nobis rem, voluptate, aut officiis pariatur alias tempore illum fuga, perspiciatis quos similique labore esse natus sed laborum distinctio delectus laudantium.</p>
                </div>
            </div>
        </section>
    )
}
