"use client";
import React, { useEffect } from "react";
import Link from "next/link";

function Portfolio({ grid, filterPosition }) {
  return (
    <section className="portfolio section-padding pb-70">
      <div className="container">
        <div className="gallery full-width">
          <div
            className="col-md-6 lg-mr items brand wow fadeInUp"
            // data-wow-delay=".1s"
          >
            <div className="item-img ">
              <Link className="shadow-drop-2-center" href="/club">
                <img src="/img/1.png" alt="image" />
                <div className="item-img-overlay"></div>
              </Link>
            </div>
            <div className="cont">
              <h6>Business card for Company</h6>
              <span>
                <Link href="/club">Design for me!</Link>
              </span>
            </div>
          </div>

          <div
            className="col-md-6 lg-mr items brand"
            // data-wow-delay=".0001s"
          >
            <div className="item-img">
              <Link className="shadow-drop-2-center" href="/club">
                <img src="/img/2.png" alt="image" />
                <div className="item-img-overlay"></div>
              </Link>
            </div>
            <div className="cont">
              <h6>Your Personal Business card</h6>
              <span>
                <Link href="/club">Design for me!</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
