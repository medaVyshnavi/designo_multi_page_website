import React from 'react'
import Head from 'next/head'
import Header from '../components/Header/Header'
import AboutUs from '../components/About/AboutUs'
import Footer from '../components/Footer/Footer'

const about = () => {
  return (
    <div>
       <Head>
        <title>About Us</title>
      </Head>
      <Header/>
      <AboutUs/>
      <Footer/>
    </div>
  )
}

export default about