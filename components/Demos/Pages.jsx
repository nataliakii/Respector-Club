import React from 'react';
import Link from 'next/link';

function Pages() {
  return (
    <section className="masonery section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 text-center">
            <div className="sec-head">
              <h3 className="text-3xl font-bold color-font">Respector Group Club</h3>
              <span className="tbg block"><b>CLUB</b></span>
            </div>
          </div>
        </div>

  <div className="text-center ">
            <Link target="_blank" href="/club">
    <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <img src="/img/panagiotis.jpg" alt="image" />
              </div>
              <div className="cont text-center">
                <h6 className="text-base font-semibold">JOIN THE CLUB</h6>
              </div>
            </Link>
          </div>
        </div>
    </section>
  );
}

export default Pages;
