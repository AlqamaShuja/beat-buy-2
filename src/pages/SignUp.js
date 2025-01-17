import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.username || !formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
      alert('Please fill in all required fields.');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    if (!formData.agreeTerms) {
      alert('You must agree to the terms and conditions.');
      return;
    }

    // Submit form data
    console.log('Form submitted:', formData);

    // Reset form
    setFormData({
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreeTerms: false,
    });

    alert('Registration successful!');
  };

  return (
    <div>
      <Navbar />
      <section
        id="home"
        className="sub_banner_area"
        style={{ height: 'auto', paddingBottom: '100px' }}
      >
        <div className="d-table">
          <div className="d-tablecell">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6 " style={{ marginTop: '150px' }}>
                  <div className="user_info">
                    <div className="user_infoo_title">
                      <h5>Register</h5>
                      <span style={{ color: '#fff' }}>Let's get you on board!</span>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          name="username"
                          value={formData.username}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="firstName">First Name*</label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="lastName">Last Name*</label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email*</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group position-relative">
                        <label htmlFor="password">Password</label>
                        <input
                          type={showPassword ? 'text' : 'password'}
                          className="form-control"
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                        />
                        <i
                          className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                          style={{
                            position: 'absolute',
                            right: '10px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            cursor: 'pointer',
                          }}
                          onClick={() => setShowPassword(!showPassword)}
                        ></i>
                      </div>
                      <div className="form-group position-relative">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          className="form-control"
                          id="confirmPassword"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                        />
                        <i
                          className={`fa ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                          style={{
                            position: 'absolute',
                            right: '10px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            cursor: 'pointer',
                          }}
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        ></i>
                      </div>

                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="agreeTerms"
                          name="agreeTerms"
                          checked={formData.agreeTerms}
                          onChange={handleInputChange}
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="agreeTerms"
                        >
                          By clicking “Register” you agree to our Data Privacy
                          and{' '}
                          <a className="color_blue_text" href="1">
                            Terms of Service
                          </a>
                        </label>
                      </div>

                      <div className="form-group text-center other-option mt-4">
                        <button
                          style={{ width: '120px' }}
                          type="submit"
                          className="default-btn-border scroll-btn mr-1 text-uppercase"
                        >
                          Sign Up
                        </button>
                      </div>
                      <p className="text-center">
                        Already have an account?{' '}
                        <Link className="color_blue_text" to="/login">
                          Login
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
    </div>
  );
}

export default SignUp;





















// import React from 'react'
// import Navbar from '../components/Navbar'
// import { Link } from 'react-router-dom'
// function SignUp() {
//     return (
//         <div>
//             <Navbar />
//             <section id="home" className="sub_banner_area" style={{ height: 'auto', paddingBottom: '100px' }}>
//                 <div className="d-table">
//                     <div className="d-tablecell">
//                         <div className="container">
//                             <div className="row justify-content-center">
//                                 <div className="col-lg-6 " style={{ marginTop: "150px" }}>
//                                     <div className="user_info">
//                                         <div className="user_infoo_title">
//                                             <h5>Register</h5>
//                                             <span style={{ color: "#fff" }}>Let's get you on board!</span>
//                                         </div>
//                                         <form action="" method="post" enctype="multipart/form-data">
//                                             <div className="form-group">
//                                                 <label for="username">Username</label>
//                                                 <input type="text" className="form-control" id="username" name="username" />
//                                             </div>
//                                             <div className="form-group">
//                                                 <label for="first_name">First Name*</label>
//                                                 <input type="text" className="form-control" id="first_name" name="first_name" />
//                                             </div>
//                                             <div className="form-group">
//                                                 <label for="last_name">Last Name*</label>
//                                                 <input type="text" className="form-control" id="last_name" name="last_name" />
//                                             </div>
//                                             <div className="form-group">
//                                                 <label for="email">Email*</label>
//                                                 <input type="email" className="form-control" id="email" name="email" />
//                                             </div>
//                                             <div className="form-group">
//                                                 <label for="password">Password</label>
//                                                 <input type="password" className="form-control" id="password" name="password" />
//                                             </div>
//                                             <div className="form-group">
//                                                 <label for="c_password">Confirm Password</label>
//                                                 <input type="password" className="form-control" id="c_password" name="c_password" />
//                                             </div>

//                                             <div className="form-check">
//                                                 <input type="checkbox" className="form-check-input" id="agree_event_terms" name="agree_event_terms" required />
//                                                 <label className="form-check-label" for="agree_event_terms">
//                                                     By clicking “Register” you agree to our Data Privacy and   <a className="color_blue_text" href="1">Terms of Service</a>
//                                                 </label>
//                                             </div>

//                                             <div className="form-group text-center other-option mt-4">
//                                                 <button style={{ width: " 120px" }} type="submit" className="  default-btn-border scroll-btn mr-1 text-uppercase">Sign Up</button>
//                                             </div>
//                                             <p className="text-center">Already have an account? <Link className="color_blue_text" to="/login">Login</Link></p>
//                                         </form>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </section>
//         </div>
//     )
// }

// export default SignUp
