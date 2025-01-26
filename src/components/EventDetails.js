import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import bgImage from "../assets/bg-details.jpg";
import { EVENT_DATA } from "../utils/DUMMY_DATA";

function EventDetails() {
  const { id } = useParams(); // Get the event ID from the URL
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Find the event with the matching ID
    const selectedEvent = EVENT_DATA?.find((e) => e.id === id);
    setEvent(selectedEvent);
  }, [id]);

  if (!event) {
    return (
      <div>
        <Navbar />
        <div className="text-center pt-5">
          <h2>Event Not Found</h2>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <section
        id="event-details"
        className="event-details-area ptb-100"
        style={{
          padding: "20px",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          minHeight: "100vh",
          paddingTop: '80px',
        }}
      >
        <div className="container">
          {/* Title and Venue Information */}
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="text-4xl font-bold text-white mb-4">{event.name}</h2>
              <p className="text-lg text-white opacity-80">
                {`${event.venue.address.street1}, ${event.venue.address.city}, ${event.venue.address.country}`}
              </p>
            </div>
          </div>

          {/* Event Information */}
          <div className="row">
            {/* Left Column - Event Image */}
            <div className="col-md-6 mb-4">
              <div className="event-image">
                <img
                  src={event.main_image_uri}
                  alt={event.name}
                  className="img-fluid rounded-lg shadow-lg"
                  style={{ maxHeight: "400px", objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Right Column - Event Details */}
            <div className="col-md-6 mb-4">
              <div className="event-info">
                <h4 className="text-2xl font-semibold text-white mb-3">Event Description</h4>
                <p className="text-white opacity-90 mb-4">{event.description}</p>

                <div className="event-meta mb-4 text-white">
                  <h5 className="text-xl font-semibold">Location</h5>
                  <p>
                    <strong>Venue:</strong> {event.venue.name}
                  </p>
                  <p>
                    <strong>Address:</strong> {event.venue.address.street1}, {event.venue.address.city}, {event.venue.address.zip}, {event.venue.address.country}
                  </p>

                  <h5 className="text-xl font-semibold mt-4">Organizer</h5>
                  <p>
                    <strong>{event.organizer.display_name}</strong>
                  </p>
                  <p>
                    {event.organizer.street1}, {event.organizer.city}, {event.organizer.zip}, {event.organizer.country}
                  </p>

                  <h5 className="text-xl font-semibold mt-4">Pricing</h5>
                  <p>
                    <strong>Price:</strong> {event.price} {event.currency}
                  </p>
                </div>

                <div className="mt-4">
                  <a
                    href={event.external_url}
                    className="default-btn-border scroll-btn text-uppercase bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Tickets
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* External Links */}
          <div className="row mt-5">
            <div className="col-12 text-center">
              <div className="event-external-links">
                <h5 className="text-white text-xl font-semibold">External Links</h5>
                <a
                  href={event.external_checkout_url}
                  className="btn btn-primary text-white py-2 px-6 rounded-lg hover:bg-blue-700 mt-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Checkout Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EventDetails;
























// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Navbar from "./Navbar";
// import bgImage from "../assets/bg-details.jpg";
// import { EVENT_DATA } from "../utils/DUMMY_DATA";


// function EventDetails() {
//   const { id } = useParams(); // Get the event ID from the URL
//   const [event, setEvent] = useState(null);

//   useEffect(() => {
//     // Find the event with the matching ID
//     const selectedEvent = EVENT_DATA?.find((e) => e.id === id);
//     setEvent(selectedEvent);
//   }, [id]);

//   if (!event) {
//     return (
//       <div>
//         <Navbar />
//         <div className="text-center pt-5">
//           <h2>Event Not Found</h2>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Navbar />
//       <section
//         id="event-details"
//         className="event-details-area ptb-100"
//         style={{
//           padding: "20px",
//           backgroundImage: `url(${bgImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           color: "#fff",
//           minHeight: "100vh",
//           paddingTop: '100px'
//         }}
//       >
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-12">
//               <div className="section-title text-center">
//                 <h2>{event.name}</h2>
//                 <p>{`${event.venue.address.street1}, ${event.venue.address.city}, ${event.venue.address.country}`}</p>
//               </div>
//             </div>
//           </div>

//           <div className="row align-items-center mt-5">
//             <div className="col-md-6">
//               <div className="event-image">
//                 <img
//                   src={event.main_image_uri}
//                   alt={event.name}
//                   className="img-fluid rounded shadow"
//                 />
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div className="event-info">
//                 <h4>Event Details</h4>
//                 <p>{event.description}</p>
//                 <div className="event-meta mt-4">
//                   <p>
//                     <strong>Location:</strong> {event.venue.name},{" "}
//                     {event.venue.address.street1}, {event.venue.address.city},{" "}
//                     {event.venue.address.zip}, {event.venue.address.country}
//                   </p>
//                   <p>
//                     <strong>Price:</strong> {event.price} {event.currency}
//                   </p>
//                 </div>
//                 <div className="mt-4">
//                   <a
//                     href={event.external_url}
//                     className="default-btn-border scroll-btn text-uppercase"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Book Tickets
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default EventDetails;
