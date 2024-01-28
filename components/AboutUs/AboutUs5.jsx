"use client";
import React, { useEffect } from "react";
//= Scripts
import BusinessCard from "@/components/BusinessCard/BusinessCard";

const AboutUs5 = () => {
  return (
    <section className="about-cr text-center">
      <BusinessCard />

      <div className="container">
        <div className="row">
          <div className="col-lg-12 mx-auto">
            {/* Professional Interests */}
            <div className="cont full-width mt-50">
              <h3 className="color-font wow fadeIn" data-wow-delay=".5s">
                PROFESSIONAL INTERESTS
              </h3>

              <div className="row">
                <div className="col-lg-12 wow fadeInLeft" data-wow-delay=".6s">
                  <div className="item-box">
                    <div>
                      <i className="fas fa-home"></i>
                    </div>

                    <h6>Rent apartments</h6>
                  </div>
                </div>
                <div className="col-lg-12 wow fadeInLeft" data-wow-delay=".7s">
                  <div className="item-box">
                    <div>
                      <i className="fas fa-building"></i>
                    </div>

                    <h6>Buy apartment</h6>
                  </div>
                </div>

                <div className="cont full-width mt-50">
                  <h3 className="color-font wow fadeIn" data-wow-delay=".5s">
                    CONNECT WITH ME
                  </h3>
                  <div className="row">
                    <div
                      className="col-lg-12 wow fadeInLeft"
                      data-wow-delay=".6s"
                    >
                      <div className="item-box">
                        <div>
                          <i className="fab fa-instagram"></i>
                        </div>

                        <h6>Instagram</h6>
                      </div>
                    </div>
                    <div
                      className="col-lg-12 wow fadeInLeft"
                      data-wow-delay=".7s"
                    >
                      <div className="item-box">
                        <div>
                          <i className="icon fab fa-linkedin-in"></i>
                        </div>
                        <h6>LinkedIn</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs5;
