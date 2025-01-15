import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
function SignUp() {
  return (
    <div>
<Navbar/>
      <section id="home" className="sub_banner_area  "  style={{ height: 'auto', paddingBottom: '100px' }}>
    <div className="d-table">
        <div className="d-tablecell">
            <div className="container">
                <div className="row justify-content-center">
            <div className="col-lg-6 " style={{marginTop: "150px"}}>
                <div className="user_info">
                    <div className="user_infoo_title">
                        <h5>Register</h5>
                        <span style={{color: "#fff"}}> Let's get you on board!</span>
                    </div>
                    <form action="" method="post" enctype="multipart/form-data">
                        <div className="form-group">
                            <label for="username">Username</label>
                            <input type="text" className="form-control" id="username" name="username" />
                        </div>
                        <div className="form-group">
                            <label for="first_name">First Name*</label>
                            <input type="text" className="form-control" id="first_name" name="first_name" />
                        </div>
                        <div className="form-group">
                            <label for="last_name">Last Name*</label>
                            <input type="text" className="form-control" id="last_name" name="last_name" />
                        </div>
                        <div className="form-group">
                            <label for="email">Email*</label>
                            <input type="email" className="form-control" id="email" name="email" />
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" className="form-control" id="password" name="password" />
                        </div>
                        <div className="form-group">
                            <label for="c_password">Confirm Password</label>
                            <input type="password" className="form-control" id="c_password" name="c_password"/>
                        </div>
                         
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="agree_event_terms" name="agree_event_terms" required/>
                            <label className="form-check-label" for="agree_event_terms">
                                  By clicking “Register” you agree to our Data Privacy and   <a className="color_blue_text" href="1">Terms of Service</a>
                            </label>
                        </div>
                         
                        <div className="form-group text-center other-option mt-4">
                            <button style={{width:" 120px"}} type="submit" className="  default-btn-border scroll-btn mr-1 text-uppercase">Sign Up</button>
                        </div>
                        <p className="text-center">Already have an account? <Link  className="color_blue_text" to="/login">Login</Link></p>
                    </form>
                </div>
            </div>
            
        </div>
            </div>
        </div>
    </div>
    
</section>
    </div>
  )
}

export default SignUp
