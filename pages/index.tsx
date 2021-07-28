import React, { ReactElement } from 'react'
import Cli from '../components/Home/Cli'
import Cloud from '../components/Home/Cloud'
import Languages from '../components/Home/Languages'
import Navbar from '../layout/Navbar'
import ShowCase from '../components/Home/ShowCase'
import Stats from '../components/Home/Stats';
import Footer from '../layout/Footer'

interface Props {
  
}

function index({}: Props): ReactElement {
  return (
    <React.Fragment>
      <Navbar />
      <ShowCase />
      <Stats />
      <Cli />
      <Cloud />
      <Languages />
      <Footer />
    </React.Fragment>
  ) 
}

export default index
