import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light mein-navbar fixed-top">
            <div className="container">
                <Link className="navbar-brand scroll-btn " to="/">
                    <img src="assets/images/logo.svg" alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/upcoming">Upcoming Events</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/featured">Featured Events</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/purchase">Purchase</Link>
                        </li>

                    </ul>
                    <div className="other-option">
                        <Link to="/signup" className="default-btn-border scroll-btn mr-1">
                            Sign Up
                        </Link>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar
