import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Featured from '../components/Featured'
import Upcoming from '../components/Upcoming'
import Footer from '../components/Footer'
function Home() {
  return (
    <div data-bs-spy="scroll" data-bs-offset="70">
      <Navbar />
      <Hero
        heading="Memorable Events,<br/>Exclusive NFTs!"
        subtext="Where Memorable Events Meet Blockchain Security"
      />
      <Upcoming />
      <Featured />
      <Footer />
    </div>
  )
}

export default Home
