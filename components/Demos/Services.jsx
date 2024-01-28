import React from 'react';

function Services() {
  return (
    <section className="services bords lficon section-padding position-re">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-12">
            <div className="sec-head text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">Why </h6>
              <h3 className="wow color-font">
                Because
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".5s">
            <div className="item-box">
              <div>
                <span className="icon pe-7s-user"></span>
              </div>
              <div className="cont">
                <h6>Online Business card</h6>
                <p>
                  Introduce yourself professionally in seconds.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".7s">
            <div className="item-box">
              <div>
                <span className="icon pe-7s-magic-wand"></span>
              </div>
              <div className="cont">
                <h6>All Your Links in One Page</h6>
                <p>Stop constantly sending piecemeal contact info. Display it all in one sharable page.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".9s">
            <div className="item-box">
              <div>
                <span className="icon pe-7s-science"></span>
              </div>
              <div className="cont">
                <h6>One Central Hub</h6>
                <p>Tired of constantly sending out your social media/contact info? Centralize it! Our pages allow you to showcase all your important links in one place that you can easily share.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".5s">
            <div className="item-box">
              <div>
                <span className="icon pe-7s-network"></span>
              </div>
              <div className="cont">
                <h6>Seamless Networking</h6>
                <p>Our automated tools keep your page looking sharp effortlessly, so you can focus on relationship building. Spend less time maintaining online presences and more time connecting.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line top right"></div>
    </section>
  )
}

export default Services