import React, { ReactElement } from 'react';
import Head from '../components/Docs/Head';
import Main from '../components/Docs/Main';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';

export default function documentation(): ReactElement {
    return (
        <React.Fragment>
            <Navbar />
            <Head />
            <Main />
            <Footer />
        </React.Fragment>
    )
}
