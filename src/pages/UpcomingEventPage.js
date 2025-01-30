import React from 'react'
import Hero from '../components/Hero'
import Upcoming from '../components/Upcoming'
import Footer from '../components/Footer'
import { EVENT_DATA } from '../utils/DUMMY_DATA'
import EventCard from '../components/EventCard'
import Navbar from '../components/Navbar'

const UpcomingEventPage = () => {
    return (
        <div data-bs-spy="scroll" data-bs-offset="70">
            <Navbar />
            <Hero
                heading="Upcoming Events"
                subtext="Don't Miss Out: Secure Your Spot with BeatBuy's Upcoming Events"
            />
            {/* <Upcoming /> */}
            <div className="row justify-content-center mt-2 flex-wrap pb-3">
                {EVENT_DATA?.map((event) => <EventCard event={event} />)}
            </div>
            <Footer />
        </div>
    )
}

export default UpcomingEventPage