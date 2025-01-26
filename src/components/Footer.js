import React from 'react'

function Footer() {
  return (

    <footer className="footer-bottom" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div
              className="single-widgets text-center wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="wow fadeInUp d-flex flex-column align-items-center text-white gap-3" data-wow-delay=".4s">
                <span>Copyright © 2024, BeatBuy.</span>
                <span>All trademarks and copyrights belong to their respective owners.</span>
              </div>

              <div className='d-flex justify-content-center align-items-center gap-3 mt-3 text-decoration-none'>
                <a
                  style={{ color: "#47B5F5" }}
                  className='text-decoration-none'
                  href="https://beatbind.io/legal"
                >
                  Legal Information
                </a>
                <span style={{ color: "#fff" }}>|</span>
                <a
                  style={{ color: "#47B5F5" }}
                  className='text-decoration-none'
                  href="https://beatbind.io/privacy"
                >
                  Privacy Policy
                </a>
                <span style={{ color: "#fff" }}>|</span>
                <a
                  style={{ color: "#47B5F5" }}
                  className='text-decoration-none'
                  href="https://beatbind.io/pledge"
                >
                  Pledge Policy
                </a>
              </div>

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
  )
}

export default Footer
