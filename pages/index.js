import Head from 'next/head'
import Design from '../components/Design/Design'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import HeroSection from '../components/HeroSection/HeroSection'
import Illustration from '../components/Illustration/Illustration'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Designo Agency</title>
      </Head>
      <Header/>
      <HeroSection/>
      <Design />
      <Illustration/>
      <Footer/>
    </div>
  )
}
