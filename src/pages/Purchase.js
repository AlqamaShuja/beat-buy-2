import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Purchase = () => {
  return (
    <>
      <Navbar />
      <section
        id="home"
        className="sub_banner_area banner-height-518"
        // style={{ height: "518px !important" }}
      >
        <div className="d-table">
          <div className="d-tablecell">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12 mb-4">
                  <div className="banner-text text-center mt-100">
                    <span className="wow fadeInUp" data-wow-delay=".7s">
                      Ticket
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".8s">
                      Purchase Ticket
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purchase Ticket Section */}
      <section id="buy_ticket" className="niktacacoin-area ptb-100 about-area">
        <div className="container">
          <div className="row">
            {/* Left Section (Ticket Categories) */}
            <div className="col-lg-6 mb-3">
              <div className="ticket_section_area">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Category</th>
                        <th>Avail.</th>
                        <th>Price</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        "Adults",
                        "Seniors 65+",
                        "Students",
                        "Kids 12+",
                      ].map((category, index) => (
                        <tr key={index} className="purchase_left-table-tr">
                          <td>
                            <div className="cat_td">
                              <p>Sale Ends in 4 Hours</p>
                              <span className="text-white">Erwachese / {category}</span>
                            </div>
                          </td>
                          <td>
                            <div className="cat_td">
                              <span className="text-white">Available</span>
                            </div>
                          </td>
                          <td>
                            <div className="cat_td">
                              <span className="text-white">7.50 EUR - Standard</span>
                            </div>
                          </td>
                          <td>
                            <div className="other-option">
                              <a
                                href="#"
                                className="default-btn-border scroll-btn mr-1 text-decoration-none"
                              >
                                Add
                              </a>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Section (Cart) */}
            <div className="col-lg-6 mb-3">
              <div className="cart_sections">
                <div className="cart_s">
                  <div className="cart_itemm mb-3">
                    <p>Tickets</p>
                    <span>4</span>
                  </div>
                  <div className="cart_itemm mb-3">
                    <p>Total Amount</p>
                    <span>23.50 EUR</span>
                  </div>
                  <div className="cart_itemm mb-3">
                    <div className="other-option">
                      <Link
                        // href="user-holder.html"
                        to="/user-holder"
                        className="default-btn-border scroll-btn mr-1 text-decoration-none"
                      >
                        Buy Now
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="single_cart_items">
                  {["Adults", "Seniors", "Students", "Kids"].map(
                    (category, index) => (
                      <div className="s_cart_item" key={index}>
                        <a href="#">
                          <img src="assets/images/x-circle.svg" alt="remove" />
                        </a>
                        <p>Erwachsene / {category}</p>
                        <p>7.50 EUR</p>
                      </div>
                    )
                  )}
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

export default Purchase;