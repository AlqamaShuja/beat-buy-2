import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { adminLoginThunk } from '../slices/userSlice';

function Login() {
    const dispatch = useDispatch();
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Log the form data or handle it as needed
        console.log('Email:', email);
        console.log('Password:', password);
        // Add your form submission logic here
        // alert(email + ", " + password);
        if (location.pathname.includes("admin")) {
            dispatch(adminLoginThunk({ username: email, password: password, })).unwrap()
                .then(res => {
                    console.log(res, "scajncja:res:login");
                })
                .catch(error => {
                    console.log(error, "scajncja:error:login");
                })
        }
    };

    return (
        <>
            <Navbar />
            <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="70">
                <section
                    id="home"
                    className="sub_banner_area"
                    style={{ height: 'auto', paddingBottom: '100px', important: true }}
                >
                    <div className="d-table">
                        <div className="d-tablecell">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-6" style={{ marginTop: '150px' }}>
                                        <div className="user_info">
                                            <div className="user_infoo_title">
                                                <h5>Login</h5>
                                                <span style={{ color: '#fff' }}>Welcome back, we've missed you!</span>
                                            </div>
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-group">
                                                    <label htmlFor="email">Email or Username</label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="email"
                                                        name="email"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="password">Password</label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        id="password"
                                                        name="password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                    <small>
                                                        <a className="color_blue_text" href="forgot.html">
                                                            Forgot password?
                                                        </a>
                                                    </small>
                                                </div>
                                                <div className="form-group text-center other-option mt-4">
                                                    <button
                                                        style={{ width: '120px' }}
                                                        type="submit"
                                                        className="default-btn-border scroll-btn mr-1 text-uppercase"
                                                    >
                                                        Log in
                                                    </button>
                                                </div>
                                                <p className="text-center">
                                                    Don't have an account?{' '}
                                                    <Link className="color_blue_text" to="/signup">
                                                        Register
                                                    </Link>
                                                </p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="footer-bottom" id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="single-widgets text-center wow fadeInUp" data-wow-delay=".4s">
                                    <p className="wow fadeInUp" data-wow-delay=".4s">
                                        Copyright © 2024, BeatBuy. <br /> All trademarks and copyrights belong to
                                        their respective owners.
                                    </p>
                                    <a
                                        style={{ color: '#47B5F5' }}
                                        href="https://beatbind.io/legal"
                                    >
                                        Legal Information
                                    </a>{' '}
                                    <span style={{ color: '#fff' }}>|</span>{' '}
                                    <a
                                        style={{ color: '#47B5F5' }}
                                        href="https://beatbind.io/privacy"
                                    >
                                        Privacy Policy
                                    </a>{' '}
                                    <span style={{ color: '#fff' }}>|</span>{' '}
                                    <a
                                        style={{ color: '#47B5F5' }}
                                        href="https://beatbind.io/pledge"
                                    >
                                        Pledge Policy
                                    </a>
                                    <div className="single-widgets mt-3">
                                        <ul
                                            className="social-links wow fadeInUp"
                                            data-wow-delay=".4s"
                                        >
                                            <li>
                                                <a href="https://t.me/beatbindutilitytoken">
                                                    <i className="fa fa-telegram"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.facebook.com/beatbind/">
                                                    <i className="fa fa-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://t.me/BeatBind_BBND">
                                                    <i className="fa fa-telegram"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.linkedin.com/company/beatbind">
                                                    <i className="fa fa-linkedin"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://twitter.com/beat_bind">
                                                    <img
                                                        width="16px"
                                                        src="https://beatbind.io/public/frontend/images/x-twitter.png"
                                                        alt=""
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.instagram.com/beatbindgram/">
                                                    <i className="fa fa-instagram"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://medium.com/@beatbind">
                                                    <i className="fa fa-medium"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default Login;
























// import React from 'react'
// import Navbar from '../components/Navbar'
// import { Link } from 'react-router-dom'
// function Login() {
//     return (
//         <>
//             <Navbar />
//             <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="70">
//                 <section id="home" className="sub_banner_area" style={{ height: 'auto', paddingBottom: '100px', important: true }}
//                 >
//                     <div className="d-table">
//                         <div className="d-tablecell">
//                             <div className="container">
//                                 <div className="row justify-content-center">
//                                     <div className="col-lg-6 " style={{ marginTop: '150px' }}
//                                     >
//                                         <div className="user_info">
//                                             <div className="user_infoo_title">
//                                                 <h5>Login</h5>
//                                                 <span style={{ color: "#fff" }}> Welcome back, we've missed you!</span>
//                                             </div>
//                                             <form action="" method="post" enctype="multipart/form-data">

//                                                 <div className="form-group">
//                                                     <label for="email">Email or Username</label>
//                                                     <input type="email" className="form-control" id="email" name="email" />
//                                                 </div>
//                                                 <div className="form-group">
//                                                     <label for="password">Password</label>
//                                                     <input type="password" className="form-control" id="password" name="password" />
//                                                     <small><a className="color_blue_text" href="forgot.html">Forgot password?</a></small>
//                                                 </div>


//                                                 <div className="form-group text-center other-option mt-4">
//                                                     <button style={{ width: "120px" }} type="submit" className="  default-btn-border scroll-btn mr-1 text-uppercase">Log in</button>
//                                                 </div>
//                                                 <p className="text-center">Don't have an account? <Link className="color_blue_text" to="/signup">Register</Link></p>
//                                             </form>
//                                         </div>
//                                     </div>

//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 </section>







//                 <footer className="footer-bottom" id="contact">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-lg-12 col-md-12">
//                                 <div className="single-widgets text-center wow fadeInUp" data-wow-delay=".4s">
//                                     <p className="wow fadeInUp" data-wow-delay=".4s">Copyright © 2024, BeatBuy. <br /> All trademarks and copyrights belong to their respective owners.</p>

//                                     <a style={{ color: "#47B5F5" }} href="https://beatbind.io/legal">Legal Information</a> <span style={{ color: "#fff" }}>|</span>  <a style={{ color: "#47B5F5" }} href="https://beatbind.io/privacy">Privacy Policy</a>
//                                     <span style={{ color: "#fff" }}>|</span>
//                                     <a style={{ color: "#47B5F5" }} href="https://beatbind.io/pledge">Pledge Policy</a>

//                                     <div className="single-widgets mt-3">
//                                         <ul className="social-links wow fadeInUp" data-wow-delay=".4s">
//                                             <li>
//                                                 <a href="https://t.me/beatbindutilitytoken"><i className="fa fa-telegram"></i></a>
//                                             </li>
//                                             <li>
//                                                 <a href="https://www.facebook.com/beatbind/"><i className="fa fa-facebook"></i></a>
//                                             </li>
//                                             <li>
//                                                 <a href="https://t.me/BeatBind_BBND"><i className="fa fa-telegram"></i></a>
//                                             </li>
//                                             <li>
//                                                 <a href="https://www.linkedin.com/company/beatbind"><i className="fa fa-linkedin"></i></a>
//                                             </li>
//                                             <li>
//                                                 <a href="https://twitter.com/beat_bind"><img width="16px" src="https://beatbind.io/public/frontend/images/x-twitter.png" alt="" /></a>
//                                             </li>
//                                             <li>
//                                                 <a href="https://www.instagram.com/beatbindgram/"><i className="fa fa-instagram"></i></a>
//                                             </li>
//                                             <li>
//                                                 <a href="https://medium.com/@beatbind"><i className="fa fa-medium"></i></a>
//                                             </li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 </footer>












//             </div>
//         </>
//     )
// }

// export default Login
