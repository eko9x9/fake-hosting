import React, { ReactElement } from 'react';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';

export default function documentation(): ReactElement {
    return (
        <React.Fragment>
            <Navbar />
            <Footer />
        </React.Fragment>
    )
}
