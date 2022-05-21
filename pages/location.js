import React from 'react'
import Header from '../components/Header/Header'
import Head from 'next/head'
import Location from '../components/Location/Location'
import Footer from '../components/Footer/Footer'

const location = () => {
  return (
    <div>
       <Head>
        <title>Location</title>
      </Head>
      <Header/>
      <Location/>
      <Footer/>
    </div>
  )
}

export default location