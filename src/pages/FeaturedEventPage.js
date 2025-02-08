import React from "react";
import Hero from "../components/Hero";
import Upcoming from "../components/Upcoming";
import Footer from "../components/Footer";
import { EVENT_DATA } from "../utils/DUMMY_DATA";
import EventCard from "../components/EventCard";
import Navbar from "../components/Navbar";

const FeaturedEventPage = () => {
  return (
    <div data-bs-spy="scroll" data-bs-offset="70">
      <Navbar />
      <Hero
        heading="Featured Events"
        subtext="Top Picks: BeatBuy's Must-Attend Featured Events"
      />
      {/* <Upcoming /> */}
      <section id="upcoming" className="niktacacoin-area ptb-100 about-area">
        <div className="container">
          <div className="row justify-content-center mt-2 flex-wrap pb-3">
            {EVENT_DATA?.map((event) => (
              <EventCard event={event} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FeaturedEventPage;
