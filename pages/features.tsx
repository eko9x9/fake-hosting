import React, { ReactElement } from 'react'
import Head from '../components/Features/Head'
import Main from '../components/Features/Main'
import SubHead from '../components/Features/SubHead'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

export default function features(): ReactElement {
    return (
        <React.Fragment>
            <Navbar />
            <Head />
            <SubHead />
            <Main />
            <Footer />
        </React.Fragment>
    )
}
