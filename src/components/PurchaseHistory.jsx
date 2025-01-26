import React from "react";
import Navbar from "./Navbar";

const PurchaseHistory = () => {
    return (
        <>
            <Navbar />
            <section id="home" className="sub_banner_area" style={{ height: "518px" }}>
                <div className="d-table">
                    <div className="d-tablecell">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-12 mb-4">
                                    <div className="banner-text text-center" style={{ marginTop: '100px' }}>
                                        <span className="wow fadeInUp" data-wow-delay=".7s">
                                            Your Profile
                                        </span>
                                        <h2 className="wow fadeInUp" data-wow-delay=".8s" style={{ marginTop: '18px', marginBottom: '18px' }}>
                                            Purchase History
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

            {/* Purchase History Section */}
            <section id="buy_ticket" className="niktacacoin-area ptb-100 about-area">
                <div className="container">
                    <div className="row">
                        {/* Tickets */}
                        {[...Array(5)].map((_, index) => (
                            <div className="col-lg-12 mb-3" key={index}>
                                <div className="ticket_section">
                                    <div className="left_ticket_section">
                                        <div className="date_ticket_section">
                                            <span>
                                                {["Friday", "Saturday", "Sunday", "Monday", "Tuesday"][
                                                    index
                                                ]}
                                            </span>
                                            <p>{20 + index}</p>
                                            <span className="datet">sept 24</span>
                                            <span className="timet">03:00 PM</span>
                                        </div>
                                        <div className="title_ticket_section">
                                            <p>Beethovenfries & Aussstellungen Ticket</p>
                                            <span>
                                                <img
                                                    src="assets/images/map-pin.svg"
                                                    alt="location"
                                                />
                                                Wolfgang's Place two two Homestreet, 1234, Homecity
                                            </span>
                                        </div>
                                    </div>
                                    <div className="right_pricing_section">
                                        <p>0.00 EUR - 12.00 EUR</p>
                                        <div className="other-option text-center">
                                            {index === 1 ? (
                                                <a
                                                    href="#"
                                                    className="default-btn-border btn-danger scroll-btn mr-1 text-uppercase"
                                                >
                                                    <img
                                                        src="assets/images/x-circle.svg"
                                                        alt="canceled"
                                                    />{" "}
                                                    Canceled
                                                </a>
                                            ) : (
                                                <a
                                                    href="#"
                                                    className="default-btn-border scroll-btn mr-1 text-uppercase"
                                                >
                                                    + Purchased
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Load More */}
                        <div className="col-lg-12 mt-3">
                            <div className="other-option text-center">
                                <a
                                    href="#"
                                    className="default-btn-border scroll-btn mr-1 text-uppercase"
                                >
                                    Load More Tickets
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PurchaseHistory;
