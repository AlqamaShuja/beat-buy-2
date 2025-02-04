import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getUserFromSlice } from '../slices/userSlice';
import { useSelector } from 'react-redux';
function Navbar() {
    const location = useLocation();
    const { isLogin, user={ email: 'user1234567@gmail.com', } } = useSelector(getUserFromSlice);
    const [selected, setSelected] = useState("/");

    const ALL_NAV_LINKS = [
        { id: 1, path: '/', title: 'Home' },
        { id: 2, path: '/upcoming', title: 'Upcoming' },
        { id: 3, path: '/featured', title: 'Featured' },
        { id: 4, path: '/purchase', title: 'Purchase' },
        { id: 4, path: '/profile', title: 'Profile' },
        { id: 4, path: '/purchase-history', title: 'History' },
        { id: 4, path: '/user-holder', title: 'User_Holder' },
    ]

    useEffect(() => {
        setSelected(location.pathname);
    }, [])

    return (
        <nav className="navbar navbar-expand-lg navbar-light mein-navbar fixed-top">
            <div className="container">
                <Link className="navbar-brand scroll-btn " to="/">
                    <img width={130} src="assets/images/logo.svg" alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mr-auto">
                        {ALL_NAV_LINKS?.map(({ id, path, title }) =>
                            <li className="nav-item">
                                <Link style={{ fontSize: '14px', fontWeight: '300' }} className={`nav-link ${selected == path ? "active" : ""}`} to={path}>{title}</Link>
                            </li>
                        )}

                    </ul>
                    {!isLogin && <div className="other-option">
                        {/* <Link to="/login" className="default-btn-border scroll-btn mr-1">
                            Sign In
                        </Link> */}
                        <Link to="/signup" className="default-btn-border scroll-btn mr-1 text-decoration-none">
                            Sign Up
                        </Link>
                    </div>}
                    {isLogin && (
                        <div className="other-option dropdown user_dropp">
                            <Link
                                to="#"
                                className="default-btn-border scroll-btn mr-1 dropdown-toggle"
                                role="button"
                                id="dropdownMenuLink"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{ width: '180px' }}
                            >
                                {/* Conditionally slice the email */}
                                {user?.email?.length > 12 ? `${user?.email?.slice(0, 15)}...` : user?.email}
                            </Link>

                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink" style={{ width: '180px' }}>
                                <li><a className="dropdown-item" href="profile.html">Profile</a></li>
                                <li><a className="dropdown-item" href="purchase-history.html">History</a></li>
                                <li><a className="dropdown-item" href="1">Logout</a></li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
