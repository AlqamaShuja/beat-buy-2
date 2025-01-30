import React from 'react';

function Hero({ heading, subtext }) {
  return (
    <section id="home" className="banner-area">
      <div className="d-table">
        <div className="d-tablecell">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="banner-text text-center">
                  <span 
                    className="wow fadeInUp"  
                    data-wow-delay=".7s" 
                    style={{ fontSize: '16px' }}
                  >
                    beat buy
                  </span>
                  {/* Render HTML safely using dangerouslySetInnerHTML */}
                  <h2 
                    className="wow fadeInUp"  
                    data-wow-delay=".8s" 
                    style={{ fontSize: '54px' }}
                    dangerouslySetInnerHTML={{ __html: heading }}
                  />
                  <p  
                    className="wow mt-2 fadeInUp"  
                    data-wow-delay=".9s" 
                    style={{ fontSize: '18px' }}
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