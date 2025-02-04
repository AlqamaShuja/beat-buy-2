import React from 'react';

function Hero({ heading, subtext }) {
  return (
    <section id="home" className="banner-area">
      <div className="d-table">
        <div className="d-tablecell">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 d-flex justify-content-center">
                <div className="banner-text text-center">
                  <span 
                    className="wow fadeInUp text-16"  
                    data-wow-delay=".7s" 
                  >
                    beat buy
                  </span>
                  {/* Render HTML safely using dangerouslySetInnerHTML */}
                  <h2 
                    className="wow fadeInUp text-60"  
                    data-wow-delay=".8s"
                    dangerouslySetInnerHTML={{ __html: heading }}
                  />
                  <p  
                    className="wow mt-2 fadeInUp text-18"  
                    data-wow-delay=".9s"
                  >
                    {subtext}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;