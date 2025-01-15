import React from 'react'
import { Link } from 'react-router-dom'
function Navbar2() {
  return (
    <div>
      
<nav className="navbar navbar-expand-lg navbar-light mein-navbar fixed-top">
    <div className="container">
        <a className="navbar-brand scroll-btn "  href="index.html">
            <img src="assets/images/logo.svg" alt=""/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mr-auto "  >
                <li className="nav-item">
                    <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#upcoming">Upcoming Events</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#featured">Featured Events</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="purchase">Purchase</Link>
                </li>
                 
            </ul>
            <div className="other-option dropdown user_dropp"  >
                <Link   to="#" className="default-btn-border scroll-btn mr-1 dropdown-toggle override-width" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    user@gmail.com
                </Link> 

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a className="dropdown-item" href="profile.html">Profile</a></li>
                    <li><a className="dropdown-item" href="purchase-history.html">History</a></li>
                    <li><a className="dropdown-item" href="1">Logout</a></li>
                </ul>
            </div>
        </div>
    </div>
</nav>
    </div>
  )
}

export default Navbar2
