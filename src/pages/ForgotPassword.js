import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ForgotPassword = () => {
  return (
    <>
      <Navbar />
      <section
        id="home"
        className="sub_banner_area"
        style={{ height: "auto !important", paddingBottom: "100px" }}
      >
        <div className="d-table">
          <div className="d-tablecell">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6 mt-150">
                  <div className="user_info">
                    <div className="user_infoo_title">
                      <h5 className="text-white">Reset Password</h5>
                      <span className="text-white text-15">
                        If we find the account associated with the mail, you will{" "}
                        <br /> receive a code to complete your password reset.
                      </span>
                    </div>
                    <form action="" method="post" encType="multipart/form-data">
                      <div className="form-group">
                        <label className="text-15" htmlFor="email">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                        />
                      </div>

                      <div className="form-group text-center other-option mt-4">
                        <button
                          style={{ width: "120px" }}
                          type="submit"
                          className="default-btn-border scroll-btn mr-1 text-uppercase"
                        >
                          Reset
                        </button>
                      </div>
                      <p className="text-center">
                        Back to{" "}
                        <a className="color_blue_text" href="login.html">
                          Login
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ForgotPassword;
