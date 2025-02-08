import React, { useEffect, useState } from "react";
import { EVENT_DATA } from "../utils/DUMMY_DATA";
import { useLocation, useParams } from "react-router-dom";
import { CalenderIcon, MapPinIcon } from "../utils/svg_icons";
import Navbar from "./Navbar";
import Footer from "./Footer";

const TicketDetails = () => {
//   const { id } = useParams(); // Get the event ID from the URL
//   const [event, setEvent] = useState(null);
const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const eventId = searchParams.get("event");
  const event = EVENT_DATA?.find((e) => e.id == eventId);

//   useEffect(() => {
//     // Find the event with the matching ID
//     setEvent(selectedEvent);
//   }, [id]);
  return (
    <>
      <div data-bs-spy="scroll" data-bs-offset="70">
        <Navbar />
        <section id="home" className="sub_banner_area niktacacoin-area ptb-100 about-area">
          <div className="d-table">
            <div className="d-tablecell">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-12 mb-4">
                    <div className="banner-text text-center">
                      <span className="wow fadeInUp" data-wow-delay=".7s">
                        Ticket Details
                      </span>
                      <h2 className="wow fadeInUp" data-wow-delay=".8s">
                        Memorable Events Ticket
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-3">
                    <div className="ticket_timee">
                      <div
                        className="ticket_area fadeInUp"
                        style={{ display: "flex", gap: "10px" }}
                        data-wow-delay=".9s"
                      >
                        {/* <img src="assets/images/calendar.svg" alt="" /> */}
                        <div className="w-25px">
                          <CalenderIcon />
                        </div>
                        <p>
                          <span>Start:</span> Fri, September 20, 2024, 03:00 PM{" "}
                          <br />
                          <span>End:</span> Sun, November 17, 2024, 11:00 PM{" "}
                          <br />
                          <span>Gate open:</span> 03:00 PM
                        </p>
                      </div>
                      <div
                        className="ticket_area fadeInUp"
                        style={{ display: "flex", gap: "10px" }}
                        data-wow-delay=".10s"
                      >
                        {/* <img src="assets/images/map-pin.svg" alt="" /> */}
                        <div className="w-25px">
                          <MapPinIcon />
                        </div>
                        <p>
                          Secession, Friedrichstraße 12, Vienna,
                          AustriaFriedrichstraße 12, 1010, Austria
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Buy Ticket Section */}
        <section
          id="buy_ticket"
          className="niktacacoin-area ptb-100 about-area"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="wow fadeInUp" data-wow-delay=".3s">
                    Tickets
                  </span>
                  <h2 className="wow fadeInUp" data-wow-delay=".4s">
                    All Tickets
                  </h2>
                </div>
              </div>
            </div>

            <div className="row">
              {[...Array(7)].map((_, index) => (
                <div className="col-lg-12 mb-3" key={index}>
                  <div className="ticket_section">
                    <div className="left_ticket_section">
                      <div className="date_ticket_section">
                        <span>Friday</span>
                        <p>20</p>
                        <span className="datet">sept 24</span>
                        <span className="timet">03:00 PM</span>
                      </div>
                      <div className="title_ticket_section">
                        <p>Beethovenfries & Aussstellungen Ticket</p>
                        <span className="ticket-det-343333">
                          {/* <img src="assets/images/map-pin.svg" alt="" /> */}
                          <div className="w-25px">
                            <MapPinIcon />
                          </div>
                          Wolfgang's Place two two Homestreet, 1234, Homecity
                        </span>
                      </div>
                    </div>
                    <div className="right_pricing_section">
                      <p>0.00 EUR - 12.00 EUR</p>
                      <div className="other-option text-center">
                        <a
                          href="purchase.html"
                          className="default-btn-border scroll-btn mr-1 text-uppercase"
                        >
                          Buy Tickets
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="col-lg-12 mt-3">
                <div className="other-option text-center">
                  <a
                    href="#"
                    className="default-btn-border scroll-btn mr-1 text-uppercase"
                  >
                    Load More Tickets
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Info Section */}
        <section
          id="solution"
          className="niktacacoin-area ptb-100 featured_event"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="wow fadeInUp" data-wow-delay=".3s">
                    Events
                  </span>
                  <h2 className="wow fadeInUp" data-wow-delay=".4s">
                    Event Info
                  </h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 mb-3">
                <div className="events__info">
                  <div className="row align-items-center">
                    <div
                      className="col-lg-6 mb-3"
                      style={{
                        height: "275px",
                        borderRadius: "15px",
                        overflow: "hidden",
                      }}
                    >
                      <div className="events_img">
                        <img src={event?.main_image_uri} alt="" />
                      </div>
                    </div>

                    <div className="col-lg-6 mb-3">
                      <div className="eventss_text">
                        <h5 style={{ color: "#FFF", fontSize: "25px" }}>
                          Party House Event Discount Automation
                        </h5>
                        <p>
                          {event?.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 mt-3">
                <div className="other-option text-center">
                  <a
                    href={event?.external_checkout_url}
                    className="default-btn-border scroll-btn mr-1 text-uppercase"
                  >
                    Buy Tickets here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default TicketDetails;
