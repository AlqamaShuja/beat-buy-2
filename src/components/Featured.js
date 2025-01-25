import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const eventsData = [
  {
    id: "918256",
    name: "Sagrada Familia: Fast Track Ticket",
    status: "published",
    type: "external",
    venue: {
      name: "Sagrada Familia",
      address: {
        country: "Spain",
        city: "Barcelona",
        street1: "Carrer de Mallorca, 401",
        zip: "08013",
        position: {
          latitude: 41.40378,
          longitude: 2.17436,
        },
      },
    },
    organizer: {
      name: "Junta Constructora del Temple Expiatori de la Sagrada Familia",
      display_name: "Junta Constructora del Temple Expiatori de la Sagrada Familia",
      country: "ES",
      city: "Barcelona",
      street1: "Mallorca, 401",
      zip: "08013",
    },
    description:
      "Get fast-track access to Gaudí’s unfinished masterpiece\nMake seeing the Sagrada Familia the first thing you do in Barcelona! Sagrada Familia tickets sell out fast, so join the many people who visited Barcelona's top attraction with our Sagrada Familia fast-track tickets and save yourself time and money.\n\nOnce you're inside, prepare to be mind-blown by Gaudí's modernist, yet unfinished masterpiece. Look up at the spires that tower over the Catalan capital. See the sunlight sending rainbows streaming in through the stained-glass windows. Every inch of this basilica has the wow-factor!\n\nLook for the turtle at the base of one pillar, and the tortoise at another. These are designed to show the balance between land and sea. In fact, there are decorations inspired by nature and Christian iconography everywhere.\n\nWhats included:\n* Fast Track entrance to Sagrada Familia\n* Downloadable Sagrada Familia app with audio guide\n\nWhats excluded:\n* Entry to the Sagrada Familia towers",
    external_url:
      "https://www.tiqets.com/en/barcelona-attractions-c66342/tickets-for-sagrada-familia-fast-track-p918256/",
    external_checkout_url:
      "https://www.tiqets.com/en/checkout/tickets-for-sagrada-familia-fast-track-p918256/booking_details/",
    main_image_uri:
      "https://aws-tiqets-cdn.imgix.net/images/content/89e308fba4dc46d481cbb5c841cacd1f.PNG?auto=format%2Ccompress&fit=crop&h=1284&ixlib=python-3.2.1&q=70&w=1284&s=4cc0caa3cee576b806c3cb850df8d0ec",
    price: 33.8,
    currency: "EUR",
  },
  {
    id: "973698",
    name: "Louvre Museum: E-Ticket",
    status: "published",
    type: "external",
    venue: {
      name: "Louvre Museum",
      address: {
        country: "France",
        city: "Paris",
        street1: "Rue de Rivoli",
        zip: "75001",
        position: {
          latitude: 48.861109,
          longitude: 2.335537,
        },
      },
    },
    organizer: {
      name: "Louvre Museum",
      display_name: "Louvre Museum",
      country: "FR",
      city: "Paris",
      street1: "Rue de Rivoli",
      zip: "75001",
    },
    description:
      "Save time with fast-track Louvre tickets and explore a world culture icon\nThese Louvre tickets give you effortless entry into what may be considered the finest museum in the world. Enjoy seamless and smooth access to the museum with well organised, easy, skip-the-line entry.\n\nThe Louvre's collection ranges from Mesopotamian, Egyptian, and Greek antiquities to masterpieces by artists such as Da Vinci, Michelangelo, and Rembrandt. With 35,000 artworks, there's no shortage of art to admire.\n\nWhats included:\n* Fast-track access to Louvre Museum (guaranteed access within 30 minutes)\n* Access to the museum's permanent collection\n* Access to the museum's temporary exhibitions (subject to availability)\n* Access to Eugène Delacroix Museum, within 48 hours of your Louvre visit\n\nWhats excluded:\n* Skip the security line\n* Fast-track access to the temporary exhibitions",
    external_url:
      "https://www.tiqets.com/en/things-to-do-in-paris-c66746/tickets-for-louvre-museum-e-ticket-p973698/",
    external_checkout_url:
      "https://www.tiqets.com/en/checkout/tickets-for-louvre-museum-e-ticket-p973698/booking_details/",
    main_image_uri:
      "https://aws-tiqets-cdn.imgix.net/images/content/e7e63229ba4c48a0888e6ce43fba8cdd.jpg?auto=format%2Ccompress&fit=crop&h=1284&ixlib=python-3.2.1&q=70&w=1284&s=1c30c26aeec0b15f3129b14bdbe0c1b3",
    price: 25,
    currency: "EUR",
  },
  {
    id: "973888",
    name: "Park Güell: Entry Ticket + Audio Guide",
    status: "published",
    type: "external",
    venue: {
      name: "Park Güell",
      address: {
        country: "Spain",
        city: "Barcelona",
        street1: "Carrer d'Olot, 11",
        zip: "08024",
        position: {
          latitude: 41.414495,
          longitude: 2.152694,
        },
      },
    },
    organizer: {
      name: "Tiqets International B.V.",
      display_name: "Tiqets International B.V.",
      country: "NL",
      city: "Amsterdam",
      street1: "James Wattstraat 77-P",
      zip: "1097 DL",
    },
    description:
      "Get fuss-free access to Gaudí’s famous Barcelona park and a handy audio guide\nWant to see the most flamboyant and famous park in Barcelona? Get your hands on these Park Güell tickets and explore the Park Güell Monumental Zone at your leisure with an included audio guide.\n\nThis colorful park perched high on the hills was named after Count Eusebi Güell – and originally intended as a gated community for the city's well-to-do. It was opened to everyone when Gaudí passed away in 1926, and at that point the architect himself had called it home for the last 20 years.\n\nIt gets even more fanciful inside the Park Güell Monumental Zone. Man-made walls, roads, and walkways mimic natural forms. Exuberant buildings, colorful tile work, and the amazing snaking Serpent Bench all beg for you to take a photo. And the views of Barcelona from up high are like no other!\n\nPark Güell tickets will immerse you in Gaudí's one-of-a-kind imagination, and it's bound to inspire yours, too.\n\nWhats included:\n* Entry ticket to Park Güell\n* Downloadable audio guide\n\nWhats excluded:\n* Casa Gaudí Museum",
    external_url:
      "https://www.tiqets.com/en/barcelona-attractions-c66342/tickets-for-park-guell-p973888/",
    external_checkout_url:
      "https://www.tiqets.com/en/checkout/tickets-for-park-guell-p973888/booking_details/",
    main_image_uri:
      "https://aws-tiqets-cdn.imgix.net/images/content/ec6dc25e0c424c1dac01664871cba84c.jpg?auto=format%2Ccompress&fit=crop&h=1284&ixlib=python-3.2.1&q=70&w=1284&s=7773908fb7b748aea47c58376c87dfe3",
    price: 21.9,
    currency: "EUR",
  },
  {
    id: "974847",
    name: "Lisboa Card: Access up to 51 Attractions + Public Transportation",
    status: "published",
    type: "external",
    venue: {
      name: "Lisbon City Cards",
      address: {
        country: "Portugal",
        city: "Lisbon",
        street1: null,
        position: {
          latitude: 38.707313,
          longitude: -9.13525,
        },
      },
    },
    organizer: {
      name: "Tiqets International B.V.",
      display_name: "Tiqets International B.V.",
      country: "NL",
      city: "Amsterdam",
      street1: "James Wattstraat 77-P",
      zip: "1097 DL",
    },
    description:
      "Access to up to 51 museums or monuments, free transport and more!\nTravel for free in Lisbon and get access to up to 51 museums and monuments with the Lisboa Card! Includes free admission to the Torre de Belém, Mosteiro dos Jerónimos, the Santa Justa Elevator and more, plus loads of discounts. Make the most of the Portuguese capital! Lovely Lisbon has lots to offer so don't waste a second booking different museum tickets. This single pass gets you in everywhere you want to go.\n\nSee highlights like Torre de Belém, Mosteiro dos Jerónimos, and more. Get free access to the elevator of Santa Justa, which first opened in 1902 and takes you to the best panoramic view of the city. Worried about getting around? No need. The Lisboa Card also offers free transport, including the world-famous 28 Tram.\n\nWhats included:\n* Lisboa Card valid 24, 48, or 72 hours after activation (first use, not collection date)\n* Multiple locations across Lisbon where you can pick up the physical card (mandatory to get a physical card)\n* Access to up to 51 museums or monuments in the city, including Castelo de São Jorge, Torre de Belém and Mosteiro dos Jerónimos\n* Unlimited free travel by bus, metro, tram and elevadores\n* Trains to go from Lisbon to Sintra or Lisbon to Cascais are included\n* Access to the famous 28 tram ride\n* Access to the Santa Justa elevator\n* Discount on many venues and shopping centers\n* Guidebook\n\nWhats excluded:\n* Ferry boats to cross the Tagus river\n* Group or discounted cards\n* A card for more than 72 hours",
    external_url:
      "https://www.tiqets.com/en/lisbon-attractions-c76528/tickets-for-lisbon-card-p974847/",
    external_checkout_url:
      "https://www.tiqets.com/en/checkout/tickets-for-lisbon-card-p974847/booking_details/",
    main_image_uri:
      "https://aws-tiqets-cdn.imgix.net/images/content/4b89690c51c142b1aad9db57e7a49135.jpg?auto=format%2Ccompress&fit=crop&h=1284&ixlib=python-3.2.1&q=70&w=1284&s=9db63f44c47c2dd1a74bb4cfd3c8e5b0",
    price: 27,
    currency: "EUR",
  },
  {
    id: "984871",
    name: "Centre Pompidou: Exhibition & Permanent Collection + Rooftop Access",
    status: "published",
    type: "external",
    venue: {
      name: "Centre Pompidou",
      address: {
        country: "France",
        city: "Paris",
        street1: "Place Georges-Pompidou",
        zip: "75004",
        position: {
          latitude: 48.860593,
          longitude: 2.352394,
        },
      },
    },
    organizer: {
      name: "Tiqets International B.V.",
      display_name: "Tiqets International B.V.",
      country: "NL",
      city: "Amsterdam",
      street1: "James Wattstraat 77-P",
      zip: "1097 DL",
    },
    description:
      "See everything the Centre Pompidou has on offer including the latest exhibitions\nWith works by Matisse, Cubist founders Picasso and Georges Braque, and home to important pieces that gave rise to art movements like Fauvism, Cubism, and Surrealism, the Centre Pompidou is a must-see in Paris.\n\nCast your eyes on works by Warhol, the masterful paint splatters of Pollock, and even step into the reconstructed studio of Surrealist poet, André Breton. Lovers of other mediums will also find photography by Cartier-Bresson and Brassaï alongside more contemporary works.\n\nWhats included:\n* Admission to the permanent collection of the Centre Pompidou\n* Access to the temporary exhibition\n* Access to the rooftop\n\nWhats excluded:\n* Access to Galerie des Enfants",
    external_url:
      "https://www.tiqets.com/en/things-to-do-in-paris-c66746/tickets-for-centre-pompidou-current-exhibitions-p984871/",
    external_checkout_url:
      "https://www.tiqets.com/en/checkout/tickets-for-centre-pompidou-current-exhibitions-p984871/booking_details/",
    main_image_uri:
      "https://aws-tiqets-cdn.imgix.net/images/content/a95016410698407bb9fa6a258a2bb8b7.jpg?auto=format%2Ccompress&fit=crop&h=1284&ixlib=python-3.2.1&q=70&w=1284&s=601c785d0d24529b85838a460e936934",
    price: 17,
    currency: "EUR",
  },
];


function Featured() {
  return (
    <>
      <Navbar />
      <section id="featured" className="niktacacoin-area ptb-100 featured_event">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="wow fadeInUp" data-wow-delay=".3s">
                  Events
                </span>
                <h2 className="wow fadeInUp" data-wow-delay=".4s">
                  Featured Events
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".5s">
                  Top Picks: BeatBuy's Must-Attend Featured Events
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mt-4">
            {eventsData.map((event) => (
              <div
                key={event.id}
                className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center"
              >
                <Link to={`/event/${event.id}`}>
                  <div className="event_item wow fadeInUp" data-wow-delay=".6s">
                    <div className="event_image">
                      <img
                        src={event.main_image_uri}
                        alt={event.name}
                        className="img-fluid rounded"
                      />
                    </div>
                    <div className="event_text">
                      <h4>{event.name}</h4>
                      <div className="event_time">
                        <p>
                          <strong>Venue:</strong> {event.venue.name},{" "}
                          {event.venue.address.city}, {event.venue.address.country}
                        </p>
                        <p>
                          <strong>Price:</strong> {event.price} {event.currency}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="row">
            <div className="col-lg-12 mt-3">
              <div className="other-option text-center">
                <Link
                  to="/load-more"
                  className="default-btn-border scroll-btn mr-1 text-uppercase"
                >
                  Load More Tickets
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Featured;
























// import React from 'react'
// import Navbar from './Navbar'

// function Featured() {
//   return (
//     <>
//       <Navbar />
//       <section
//         id="featured"
//         className="niktacacoin-area ptb-100 featured_event"
//       >
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-12">
//               <div className="section-title text-center">
//                 <span className="wow fadeInUp" data-wow-delay=".3s">
//                   Events
//                 </span>
//                 <h2 className="wow fadeInUp" data-wow-delay=".4s">
//                   Featured Events
//                 </h2>
//                 <p className="wow fadeInUp" data-wow-delay=".5s">
//                   Top Picks: BeatBuy's Must-Attend Featured Events
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="row justify-content-center mt-4">
//             <div className="col-md-2 col-lg-3 mb-3">
//               <a href="ticket-details.html">
//                 <div className="event_item wow fadeInUp" data-wow-delay=".6s">
//                   <div className="event_image">
//                     <img src="assets/images/event1.png" alt="" />
//                   </div>
//                   <div className="event_text">
//                     <h4>Party House Event Discount Automation</h4>
//                     <div className="event_time">
//                       <p>
//                         <img src="assets/images/calendar.svg" alt="" />{" "}
//                         <span>11 Feb, 2025, 10.00 pm - 12:00 Am</span>
//                       </p>
//                       <p>
//                         <img src="assets/images/map-pin.svg" alt="" />{" "}
//                         <span>
//                           Ivana Gorana Kovacica, 78000 Banja Luka, BiH
//                         </span>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             </div>

//             <div className="col-md-2 col-lg-3 mb-3">
//               <a href="1">
//                 <div className="event_item wow fadeInUp" data-wow-delay=".6s">
//                   <div className="event_image">
//                     <img src="assets/images/event2.png" alt="" />
//                   </div>
//                   <div className="event_text">
//                     <h4>Party House Event Discount Automation</h4>
//                     <div className="event_time">
//                       <p>
//                         <img src="assets/images/calendar.svg" alt="" />{" "}
//                         <span>11 Feb, 2025, 10.00 pm - 12:00 Am</span>
//                       </p>
//                       <p>
//                         <img src="assets/images/map-pin.svg" alt="" />{" "}
//                         <span>
//                           Ivana Gorana Kovacica, 78000 Banja Luka, BiH
//                         </span>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             </div>

//             <div className="col-md-2 col-lg-3 mb-3">
//               <a href="1">
//                 <div className="event_item wow fadeInUp" data-wow-delay=".6s">
//                   <div className="event_image">
//                     <img src="assets/images/event3.png" alt="" />
//                   </div>
//                   <div className="event_text">
//                     <h4>Party House Event Discount Automation</h4>
//                     <div className="event_time">
//                       <p>
//                         <img src="assets/images/calendar.svg" alt="" />{" "}
//                         <span>11 Feb, 2025, 10.00 pm - 12:00 Am</span>
//                       </p>
//                       <p>
//                         <img src="assets/images/map-pin.svg" alt="" />{" "}
//                         <span>
//                           Ivana Gorana Kovacica, 78000 Banja Luka, BiH
//                         </span>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             </div>

//             <div className="col-md-2 col-lg-3 mb-3">
//               <a href="1">
//                 <div className="event_item wow fadeInUp" data-wow-delay=".6s">
//                   <div className="event_image">
//                     <img src="assets/images/event4.png" alt="" />
//                   </div>
//                   <div className="event_text">
//                     <h4>Party House Event Discount Automation</h4>
//                     <div className="event_time">
//                       <p>
//                         <img src="assets/images/calendar.svg" alt="" />{" "}
//                         <span>11 Feb, 2025, 10.00 pm - 12:00 Am</span>
//                       </p>
//                       <p>
//                         <img src="assets/images/map-pin.svg" alt="" />{" "}
//                         <span>
//                           Ivana Gorana Kovacica, 78000 Banja Luka, BiH
//                         </span>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             </div>

//             <div className="col-lg-3 mb-3">
//               <a href="1">
//                 <div className="event_item wow fadeInUp" data-wow-delay=".6s">
//                   <div className="event_image">
//                     <img src="assets/images/event5.png" alt="" />
//                   </div>
//                   <div className="event_text">
//                     <h4>Party House Event Discount Automation</h4>
//                     <div className="event_time">
//                       <p>
//                         <img src="assets/images/calendar.svg" alt="" />{" "}
//                         <span>11 Feb, 2025, 10.00 pm - 12:00 Am</span>
//                       </p>
//                       <p>
//                         <img src="assets/images/map-pin.svg" alt="" />{" "}
//                         <span>
//                           Ivana Gorana Kovacica, 78000 Banja Luka, BiH
//                         </span>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             </div>

//             <div className="col-lg-3 mb-3">
//               <a href="1">
//                 <div className="event_item wow fadeInUp" data-wow-delay=".6s">
//                   <div className="event_image">
//                     <img src="assets/images/event6.png" alt="" />
//                   </div>
//                   <div className="event_text">
//                     <h4>Party House Event Discount Automation</h4>
//                     <div className="event_time">
//                       <p>
//                         <img src="assets/images/calendar.svg" alt="" />{" "}
//                         <span>11 Feb, 2025, 10.00 pm - 12:00 Am</span>
//                       </p>
//                       <p>
//                         <img src="assets/images/map-pin.svg" alt="" />{" "}
//                         <span>
//                           Ivana Gorana Kovacica, 78000 Banja Luka, BiH
//                         </span>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             </div>

//             <div className="col-lg-3 mb-3">
//               <a href="1">
//                 <div className="event_item wow fadeInUp" data-wow-delay=".6s">
//                   <div className="event_image">
//                     <img src="assets/images/event7.png" alt="" />
//                   </div>
//                   <div className="event_text">
//                     <h4>Party House Event Discount Automation</h4>
//                     <div className="event_time">
//                       <p>
//                         <img src="assets/images/calendar.svg" alt="" />{" "}
//                         <span>11 Feb, 2025, 10.00 pm - 12:00 Am</span>
//                       </p>
//                       <p>
//                         <img src="assets/images/map-pin.svg" alt="" />{" "}
//                         <span>
//                           Ivana Gorana Kovacica, 78000 Banja Luka, BiH
//                         </span>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             </div>

//             <div className="col-lg-3 mb-3">
//               <a href="1">
//                 <div className="event_item wow fadeInUp" data-wow-delay=".6s">
//                   <div className="event_image">
//                     <img src="assets/images/event8.png" alt="" />
//                   </div>
//                   <div className="event_text">
//                     <h4>Party House Event Discount Automation</h4>
//                     <div className="event_time">
//                       <p>
//                         <img src="assets/images/calendar.svg" alt="" />{" "}
//                         <span>11 Feb, 2025, 10.00 pm - 12:00 Am</span>
//                       </p>
//                       <p>
//                         <img src="assets/images/map-pin.svg" alt="" />{" "}
//                         <span>
//                           Ivana Gorana Kovacica, 78000 Banja Luka, BiH
//                         </span>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             </div>

//             <div className="col-lg-3 mb-3">
//               <a href="1">
//                 <div className="event_item wow fadeInUp" data-wow-delay=".6s">
//                   <div className="event_image">
//                     <img src="assets/images/event9.png" alt="" />
//                   </div>
//                   <div className="event_text">
//                     <h4>Party House Event Discount Automation</h4>
//                     <div className="event_time">
//                       <p>
//                         <img src="assets/images/calendar.svg" alt="" />{" "}
//                         <span>11 Feb, 2025, 10.00 pm - 12:00 Am</span>
//                       </p>
//                       <p>
//                         <img src="assets/images/map-pin.svg" alt="" />{" "}
//                         <span>
//                           Ivana Gorana Kovacica, 78000 Banja Luka, BiH
//                         </span>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             </div>

//             <div className="col-lg-3 mb-3">
//               <a href="1">
//                 <div className="event_item wow fadeInUp" data-wow-delay=".6s">
//                   <div className="event_image">
//                     <img src="assets/images/event10.png" alt="" />
//                   </div>
//                   <div className="event_text">
//                     <h4>Party House Event Discount Automation</h4>
//                     <div className="event_time">
//                       <p>
//                         <img src="assets/images/calendar.svg" alt="" />{" "}
//                         <span>11 Feb, 2025, 10.00 pm - 12:00 Am</span>
//                       </p>
//                       <p>
//                         <img src="assets/images/map-pin.svg" alt="" />{" "}
//                         <span>
//                           Ivana Gorana Kovacica, 78000 Banja Luka, BiH
//                         </span>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             </div>

//             <div className="col-lg-3 mb-3">
//               <a href="1">
//                 <div className="event_item wow fadeInUp" data-wow-delay=".6s">
//                   <div className="event_image">
//                     <img src="assets/images/event11.png" alt="" />
//                   </div>
//                   <div className="event_text">
//                     <h4>Party House Event Discount Automation</h4>
//                     <div className="event_time">
//                       <p>
//                         <img src="assets/images/calendar.svg" alt="" />{" "}
//                         <span>11 Feb, 2025, 10.00 pm - 12:00 Am</span>
//                       </p>
//                       <p>
//                         <img src="assets/images/map-pin.svg" alt="" />{" "}
//                         <span>
//                           Ivana Gorana Kovacica, 78000 Banja Luka, BiH
//                         </span>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             </div>

//             <div className="col-lg-3 mb-3">
//               <a href="1">
//                 <div className="event_item wow fadeInUp" data-wow-delay=".6s">
//                   <div className="event_image">
//                     <img src="assets/images/event12.png" alt="" />
//                   </div>
//                   <div className="event_text">
//                     <h4>Party House Event Discount Automation</h4>
//                     <div className="event_time">
//                       <p>
//                         <img src="assets/images/calendar.svg" alt="" />{" "}
//                         <span>11 Feb, 2025, 10.00 pm - 12:00 Am</span>
//                       </p>
//                       <p>
//                         <img src="assets/images/map-pin.svg" alt="" />{" "}
//                         <span>
//                           Ivana Gorana Kovacica, 78000 Banja Luka, BiH
//                         </span>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             </div>

//             <div className="col-lg-3 mb-3">
//               <a href="1">
//                 <div className="event_item wow fadeInUp" data-wow-delay=".6s">
//                   <div className="event_image">
//                     <img src="assets/images/event13.png" alt="" />
//                   </div>
//                   <div className="event_text">
//                     <h4>Party House Event Discount Automation</h4>
//                     <div className="event_time">
//                       <p>
//                         <img src="assets/images/calendar.svg" alt="" />{" "}
//                         <span>11 Feb, 2025, 10.00 pm - 12:00 Am</span>
//                       </p>
//                       <p>
//                         <img src="assets/images/map-pin.svg" alt="" />{" "}
//                         <span>
//                           Ivana Gorana Kovacica, 78000 Banja Luka, BiH
//                         </span>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             </div>

//             <div className="col-lg-3 mb-3">
//               <a href="1">
//                 <div className="event_item wow fadeInUp" data-wow-delay=".6s">
//                   <div className="event_image">
//                     <img src="assets/images/event14.png" alt="" />
//                   </div>
//                   <div className="event_text">
//                     <h4>Party House Event Discount Automation</h4>
//                     <div className="event_time">
//                       <p>
//                         <img src="assets/images/calendar.svg" alt="" />{" "}
//                         <span>11 Feb, 2025, 10.00 pm - 12:00 Am</span>
//                       </p>
//                       <p>
//                         <img src="assets/images/map-pin.svg" alt="" />{" "}
//                         <span>
//                           Ivana Gorana Kovacica, 78000 Banja Luka, BiH
//                         </span>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             </div>

//             <div className="col-lg-3 mb-3">
//               <a href="1">
//                 <div className="event_item wow fadeInUp" data-wow-delay=".6s">
//                   <div className="event_image">
//                     <img src="assets/images/event15.png" alt="" />
//                   </div>
//                   <div className="event_text">
//                     <h4>Party House Event Discount Automation</h4>
//                     <div className="event_time">
//                       <p>
//                         <img src="assets/images/calendar.svg" alt="" />{" "}
//                         <span>11 Feb, 2025, 10.00 pm - 12:00 Am</span>
//                       </p>
//                       <p>
//                         <img src="assets/images/map-pin.svg" alt="" />{" "}
//                         <span>
//                           Ivana Gorana Kovacica, 78000 Banja Luka, BiH
//                         </span>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             </div>

//             <div className="col-lg-3 mb-3">
//               <a href="1">
//                 <div className="event_item wow fadeInUp" data-wow-delay=".6s">
//                   <div className="event_image">
//                     <img src="assets/images/event16.png" alt="" />
//                   </div>
//                   <div className="event_text">
//                     <h4>Party House Event Discount Automation</h4>
//                     <div className="event_time">
//                       <p>
//                         <img src="assets/images/calendar.svg" alt="" />{" "}
//                         <span>11 Feb, 2025, 10.00 pm - 12:00 Am</span>
//                       </p>
//                       <p>
//                         <img src="assets/images/map-pin.svg" alt="" />{" "}
//                         <span>
//                           Ivana Gorana Kovacica, 78000 Banja Luka, BiH
//                         </span>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             </div>

//             <div className="col-lg-12 mt-3">
//               <div className="other-option text-center ">
//                 <a
//                   href="1"
//                   className="default-btn-border scroll-btn mr-1 text-uppercase"
//                 >
//                   Load More Tickets
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Featured
