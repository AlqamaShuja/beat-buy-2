import React from 'react';
import Navbar from './Navbar';
import { EVENT_DATA } from '../utils/DUMMY_DATA';
import { Link } from 'react-router-dom';
import EventCard from './EventCard';

function Upcoming() {
  return (
    <>
      <Navbar />
      <section id="upcoming" className="niktacacoin-area ptb-100 about-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="wow fadeInUp text-16" data-wow-delay=".3s">Events</span>
                <h2 className="wow fadeInUp text-48" data-wow-delay=".4s">Upcoming Events</h2>
                <p className="wow fadeInUp" data-wow-delay=".5s">Don't Miss Out: Secure Your Spot with BeatBuy's Upcoming Events</p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mt-2 flex-wrap">
            {EVENT_DATA?.map((event) => <EventCard event={event} />)}
          </div>


          {/* <div className="row">
            <div className="col-lg-12 mt-3">
              <div className="other-option text-center">
                <a href="1" className="default-btn-border scroll-btn mr-1 text-uppercase">
                  Load More Tickets
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default Upcoming;



























// import React from 'react'
// import Navbar from './Navbar'

// function Upcoming() {
//     return (
//         <>
//             <Navbar />
//             <section id="upcoming" className="niktacacoin-area ptb-100 about-area">
//                 <div className="container">
//                     <div className="row justify-content-center">
//                         <div className="col-lg-12">
//                             <div className="section-title text-center">
//                                 <span className="wow fadeInUp" data-wow-delay=".3s">Events</span>
//                                 <h2 className="wow fadeInUp" data-wow-delay=".4s">Upcoming Events</h2>
//                                 <p className="wow fadeInUp" data-wow-delay=".5s">Don't Miss Out: Secure Your Spot with BeatBuy's Upcoming Events</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="row justify-content-center mt-4">

//                         <div className="col-lg-3 mb-3">
//                             <a href="ticket-details.html">
//                                 <div className="event_item wow fadeInUp" data-wow-delay=".6s">
//                                     <div className="event_image">
//                                         <img src="assets/images/event1.png" alt="" />
//                                     </div>
//                                     <div className="event_text">
//                                         <h4>Party House Event Discount Automation</h4>
//                                         <div className="event_time">
//                                             <p><img src="assets/images/calendar.svg" alt="" /> <span>11 Feb, 2025, 10.00 pm - 12:00 Am</span></p>
//                                             <p><img src="assets/images/map-pin.svg" alt="" /> <span>Ivana Gorana Kovacica, 78000 Banja Luka, BiH</span></p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </a>
//                         </div>

//                         <div className="col-lg-3 mb-3">
//                             <a href="1">
//                                 <div className="event_item wow fadeInUp" data-wow-delay=".6s">
//                                     <div className="event_image">
//                                         <img src="assets/images/event2.png" alt="" />
//                                     </div>
//                                     <div className="event_text">
//                                         <h4>Party House Event Discount Automation</h4>
//                                         <div className="event_time">
//                                             <p><img src="assets/images/calendar.svg" alt="" /> <span>11 Feb, 2025, 10.00 pm - 12:00 Am</span></p>
//                                             <p><img src="assets/images/map-pin.svg" alt="" /> <span>Ivana Gorana Kovacica, 78000 Banja Luka, BiH</span></p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </a>
//                         </div>

//                         <div className="col-lg-3 mb-3">
//                             <a href="1">
//                                 <div className="event_item wow fadeInUp" data-wow-delay=".6s">
//                                     <div className="event_image">
//                                         <img src="assets/images/event3.png" alt="" />
//                                     </div>
//                                     <div className="event_text">
//                                         <h4>Party House Event Discount Automation</h4>
//                                         <div className="event_time">
//                                             <p><img src="assets/images/calendar.svg" alt="" /> <span>11 Feb, 2025, 10.00 pm - 12:00 Am</span></p>
//                                             <p><img src="assets/images/map-pin.svg" alt="" /> <span>Ivana Gorana Kovacica, 78000 Banja Luka, BiH</span></p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </a>
//                         </div>

//                         <div className="col-lg-3 mb-3">
//                             <a href="1">
//                                 <div className="event_item wow fadeInUp" data-wow-delay=".6s">
//                                     <div className="event_image">
//                                         <img src="assets/images/event4.png" alt="" />
//                                     </div>
//                                     <div className="event_text">
//                                         <h4>Party House Event Discount Automation</h4>
//                                         <div className="event_time">
//                                             <p><img src="assets/images/calendar.svg" alt="" /> <span>11 Feb, 2025, 10.00 pm - 12:00 Am</span></p>
//                                             <p><img src="assets/images/map-pin.svg" alt="" /> <span>Ivana Gorana Kovacica, 78000 Banja Luka, BiH</span></p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </a>
//                         </div>

//                         <div className="col-lg-3 mb-3">
//                             <a href="1">
//                                 <div className="event_item wow fadeInUp" data-wow-delay=".6s">
//                                     <div className="event_image">
//                                         <img src="assets/images/event5.png" alt="" />
//                                     </div>
//                                     <div className="event_text">
//                                         <h4>Party House Event Discount Automation</h4>
//                                         <div className="event_time">
//                                             <p><img src="assets/images/calendar.svg" alt="" /> <span>11 Feb, 2025, 10.00 pm - 12:00 Am</span></p>
//                                             <p><img src="assets/images/map-pin.svg" alt="" /> <span>Ivana Gorana Kovacica, 78000 Banja Luka, BiH</span></p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </a>
//                         </div>

//                         <div className="col-lg-3 mb-3">
//                             <a href="1">
//                                 <div className="event_item wow fadeInUp" data-wow-delay=".6s">
//                                     <div className="event_image">
//                                         <img src="assets/images/event6.png" alt="" />
//                                     </div>
//                                     <div className="event_text">
//                                         <h4>Party House Event Discount Automation</h4>
//                                         <div className="event_time">
//                                             <p><img src="assets/images/calendar.svg" alt="" /> <span>11 Feb, 2025, 10.00 pm - 12:00 Am</span></p>
//                                             <p><img src="assets/images/map-pin.svg" alt="" /> <span>Ivana Gorana Kovacica, 78000 Banja Luka, BiH</span></p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </a>
//                         </div>

//                         <div className="col-lg-3 mb-3">
//                             <a href="1">
//                                 <div className="event_item wow fadeInUp" data-wow-delay=".6s">
//                                     <div className="event_image">
//                                         <img src="assets/images/event7.png" alt="" />
//                                     </div>
//                                     <div className="event_text">
//                                         <h4>Party House Event Discount Automation</h4>
//                                         <div className="event_time">
//                                             <p><img src="assets/images/calendar.svg" alt="" /> <span>11 Feb, 2025, 10.00 pm - 12:00 Am</span></p>
//                                             <p><img src="assets/images/map-pin.svg" alt="" /> <span>Ivana Gorana Kovacica, 78000 Banja Luka, BiH</span></p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </a>
//                         </div>

//                         <div className="col-lg-3 mb-3">
//                             <a href="1">
//                                 <div className="event_item wow fadeInUp" data-wow-delay=".6s">
//                                     <div className="event_image">
//                                         <img src="assets/images/event8.png" alt="" />
//                                     </div>
//                                     <div className="event_text">
//                                         <h4>Party House Event Discount Automation</h4>
//                                         <div className="event_time">
//                                             <p><img src="assets/images/calendar.svg" alt="" /> <span>11 Feb, 2025, 10.00 pm - 12:00 Am</span></p>
//                                             <p><img src="assets/images/map-pin.svg" alt="" /> <span>Ivana Gorana Kovacica, 78000 Banja Luka, BiH</span></p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </a>
//                         </div>

//                         <div className="col-lg-3 mb-3">
//                             <a href="1">
//                                 <div className="event_item wow fadeInUp" data-wow-delay=".6s">
//                                     <div className="event_image">
//                                         <img src="assets/images/event9.png" alt="" />
//                                     </div>
//                                     <div className="event_text">
//                                         <h4>Party House Event Discount Automation</h4>
//                                         <div className="event_time">
//                                             <p><img src="assets/images/calendar.svg" alt="" /> <span>11 Feb, 2025, 10.00 pm - 12:00 Am</span></p>
//                                             <p><img src="assets/images/map-pin.svg" alt="" /> <span>Ivana Gorana Kovacica, 78000 Banja Luka, BiH</span></p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </a>
//                         </div>

//                         <div className="col-lg-3 mb-3">
//                             <a href="1">
//                                 <div className="event_item wow fadeInUp" data-wow-delay=".6s">
//                                     <div className="event_image">
//                                         <img src="assets/images/event10.png" alt="" />
//                                     </div>
//                                     <div className="event_text">
//                                         <h4>Party House Event Discount Automation</h4>
//                                         <div className="event_time">
//                                             <p><img src="assets/images/calendar.svg" alt="" /> <span>11 Feb, 2025, 10.00 pm - 12:00 Am</span></p>
//                                             <p><img src="assets/images/map-pin.svg" alt="" /> <span>Ivana Gorana Kovacica, 78000 Banja Luka, BiH</span></p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </a>
//                         </div>

//                         <div className="col-lg-3 mb-3">
//                             <a href="1">
//                                 <div className="event_item wow fadeInUp" data-wow-delay=".6s">
//                                     <div className="event_image">
//                                         <img src="assets/images/event11.png" alt="" />
//                                     </div>
//                                     <div className="event_text">
//                                         <h4>Party House Event Discount Automation</h4>
//                                         <div className="event_time">
//                                             <p><img src="assets/images/calendar.svg" alt="" /> <span>11 Feb, 2025, 10.00 pm - 12:00 Am</span></p>
//                                             <p><img src="assets/images/map-pin.svg" alt="" /> <span>Ivana Gorana Kovacica, 78000 Banja Luka, BiH</span></p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </a>
//                         </div>

//                         <div className="col-lg-3 mb-3">
//                             <a href="1">
//                                 <div className="event_item wow fadeInUp" data-wow-delay=".6s">
//                                     <div className="event_image">
//                                         <img src="assets/images/event12.png" alt="" />
//                                     </div>
//                                     <div className="event_text">
//                                         <h4>Party House Event Discount Automation</h4>
//                                         <div className="event_time">
//                                             <p><img src="assets/images/calendar.svg" alt="" /> <span>11 Feb, 2025, 10.00 pm - 12:00 Am</span></p>
//                                             <p><img src="assets/images/map-pin.svg" alt="" /> <span>Ivana Gorana Kovacica, 78000 Banja Luka, BiH</span></p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </a>
//                         </div>

//                         <div className="col-lg-3 mb-3">
//                             <a href="1">
//                                 <div className="event_item wow fadeInUp" data-wow-delay=".6s">
//                                     <div className="event_image">
//                                         <img src="assets/images/event13.png" alt="" />
//                                     </div>
//                                     <div className="event_text">
//                                         <h4>Party House Event Discount Automation</h4>
//                                         <div className="event_time">
//                                             <p><img src="assets/images/calendar.svg" alt="" /> <span>11 Feb, 2025, 10.00 pm - 12:00 Am</span></p>
//                                             <p><img src="assets/images/map-pin.svg" alt="" /> <span>Ivana Gorana Kovacica, 78000 Banja Luka, BiH</span></p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </a>
//                         </div>

//                         <div className="col-lg-3 mb-3">
//                             <a href="1">
//                                 <div className="event_item wow fadeInUp" data-wow-delay=".6s">
//                                     <div className="event_image">
//                                         <img src="assets/images/event14.png" alt="" />
//                                     </div>
//                                     <div className="event_text">
//                                         <h4>Party House Event Discount Automation</h4>
//                                         <div className="event_time">
//                                             <p><img src="assets/images/calendar.svg" alt="" /> <span>11 Feb, 2025, 10.00 pm - 12:00 Am</span></p>
//                                             <p><img src="assets/images/map-pin.svg" alt="" /> <span>Ivana Gorana Kovacica, 78000 Banja Luka, BiH</span></p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </a>
//                         </div>

//                         <div className="col-lg-3 mb-3">
//                             <a href="1">
//                                 <div className="event_item wow fadeInUp" data-wow-delay=".6s">
//                                     <div className="event_image">
//                                         <img src="assets/images/event15.png" alt="" />
//                                     </div>
//                                     <div className="event_text">
//                                         <h4>Party House Event Discount Automation</h4>
//                                         <div className="event_time">
//                                             <p><img src="assets/images/calendar.svg" alt="" /> <span>11 Feb, 2025, 10.00 pm - 12:00 Am</span></p>
//                                             <p><img src="assets/images/map-pin.svg" alt="" /> <span>Ivana Gorana Kovacica, 78000 Banja Luka, BiH</span></p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </a>
//                         </div>

//                         <div className="col-lg-3 mb-3">
//                             <a href="1">
//                                 <div className="event_item wow fadeInUp" data-wow-delay=".6s">
//                                     <div className="event_image">
//                                         <img src="assets/images/event16.png" alt="" />
//                                     </div>
//                                     <div className="event_text">
//                                         <h4>Party House Event Discount Automation</h4>
//                                         <div className="event_time">
//                                             <p><img src="assets/images/calendar.svg" alt="" /> <span>11 Feb, 2025, 10.00 pm - 12:00 Am</span></p>
//                                             <p><img src="assets/images/map-pin.svg" alt="" /> <span>Ivana Gorana Kovacica, 78000 Banja Luka, BiH</span></p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </a>
//                         </div>



//                         <div className="col-lg-12 mt-3">
//                             <div className="other-option text-center "  >
//                                 <a href="1" className="default-btn-border scroll-btn mr-1 text-uppercase">
//                                     Load More Tickets
//                                 </a>
//                             </div>
//                         </div>


//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default Upcoming
