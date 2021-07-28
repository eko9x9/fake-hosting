import React, { ReactElement } from 'react'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

export default function features(): ReactElement {
    return (
        <React.Fragment>
            <Navbar />
            <Footer />
        </React.Fragment>
    )
}
