import React from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import { MdOutlineCalendarToday } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { CalenderIcon, MapPinIcon } from '../utils/svg_icons'

const EventCard = ({ event = {} }) => {
    return (
        <div
            key={event.id}
            // style={{ width: '330px' }}
            className="col-9 col-sm-8 col-md-6 col-lg-3 mb-6 d-flex align-items-stretch mt-3"
        >
            <Link to={`/event-details?event=${event.id}`} className="w-100" style={{ textDecoration: 'none' }}>
                <div
                    className="event_item wow fadeInUp d-flex flex-column bg-gray-100 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
                    style={{ flexGrow: 1, minHeight: '100%' }}
                    data-wow-delay=".6s"
                >
                    {/* Image Section */}
                    <div className="event_image w-100 h-56 overflow-hidden">
                        <img
                            src={event.main_image_uri}
                            alt={event.name}
                            className="w-100 h-100 object-cover rounded-top"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="event_text p-2 d-flex flex-column flex-grow-1">
                        <h4 className="font-semibold text-gray-800 truncate" style={{ fontSize: '16px', color: 'white', lineHeight: '1.3' }}>{event.name}</h4>
                        <div className="event_time text-gray-600">
                            {/* Venue Information */}
                            <p className="truncate d-flex gap-2 align-items-center">
                                <CalenderIcon />
                                <span className='blue-color font-12'>
                                    {event.venue.name}, {event.venue.address.city}, {event.venue.address.country}
                                </span>
                            </p>

                            {/* Price Information */}
                            <p className="font-medium d-flex gap-2 align-items-center">
                                <MapPinIcon />
                                <span className='blue-color font-12'>
                                    {event.price} {event.currency}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default EventCard
