import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Profile = () => {
    return (
        <>
            <Navbar />
            <section
                id="home"
                className="sub_banner_area"
                style={{ height: "518px !important" }}
            >
                <div className="d-table">
                    <div className="d-tablecell">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-12 mb-4">
                                    <div className="banner-text text-center mt-20">
                                        <span className="wow fadeInUp" data-wow-delay=".7s">
                                            Your Profile
                                        </span>
                                        <h2 className="wow fadeInUp" data-wow-delay=".8s">
                                            General Info
                                        </h2>
                                        <p
                                            className="color_blue_text wow mt-2 fadeInUp"
                                            data-wow-delay=".9s"
                                        >
                                            Activate Your BeatBuy Wallet to Secure Your Tickets!
                                            Download the BeatBuy Wallet <br />
                                            app from the Play Store or App Store and enable it in the
                                            application settings.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Profile Form Section */}
            <section
                id="buy_ticket"
                className="niktacacoin-area ptb-100 about-area"
            >
                <div className="container">
                    <div className="row justify-content-center">
                        {/* Form Section */}
                        <div className="col-lg-6">
                            <div className="user_info">
                                <div className="user_infoo_title">
                                    <h6 className="text-white">Contact Information</h6>
                                </div>
                                <form action="" method="post" encType="multipart/form-data">
                                    <div className="form-group">
                                        <label htmlFor="photo">Your Photo</label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            id="photo"
                                            name="photo"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="first_name">First Name*</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="first_name"
                                            name="first_name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="last_name">Last Name*</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="last_name"
                                            name="last_name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email*</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone*</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            id="phone"
                                            name="phone"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="street_1">Street 1</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="street_1"
                                            name="street_1"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="street_2">Street 2</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="street_2"
                                            name="street_2"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="city">City</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="city"
                                            name="city"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="zip">Zip</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="zip"
                                            name="zip"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="state">State</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="state"
                                            name="state"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="country">Country</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="country"
                                            name="country"
                                        />
                                    </div>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="agree_event_terms"
                                            name="agree_event_terms"
                                            required
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="agree_event_terms"
                                        >
                                            I Agree to The Event Organizers{" "}
                                            <a className="color_blue_text text-decoration-none" href="#">
                                                Terms of Service
                                            </a>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="agree_beatbuy_terms"
                                            name="agree_beatbuy_terms"
                                            required
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="agree_beatbuy_terms"
                                        >
                                            I agree to The BeatBuy{" "}
                                            <a className="color_blue_text text-decoration-none" href="#">
                                                Terms of Service
                                            </a>
                                        </label>
                                    </div>
                                    <div className="form-group text-center other-option mt-4">
                                        <button
                                            style={{ width: "120px" }}
                                            type="submit"
                                            className="default-btn-border scroll-btn mr-1 text-uppercase"
                                        >
                                            Finish
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Profile Info Section */}
                        <div className="col-lg-6">
                            <div className="profile_image_area">
                                <h6 className="text-white fw-bold">Your Profile Info</h6>
                                <div className="pro_imgg">
                                    <img src="assets/images/profile.png" alt="Profile" />
                                </div>
                                <p>Jhonathon Doe</p>
                                <p>jhonthon@gmail.com</p>
                                <p>+1909876556</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Profile;