"use client";
import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import BusinessCard from "../BusinessCard/BusinessCard";

function FreelancreIntro() {
  const [loadTypeWriter, setloadTypeWriter] = useState(false);

  useEffect(() => {
    setloadTypeWriter(true);
  }, []);

  return (
    <header className="freelancre valign">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="img">
              <img src="/img/panagiotis.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-8 valign">
            <div className="cont">
              <h1 className="cd-headline clip">
                Hello, my name is Panagiotis Glazko and I create
                <span
                  style={{
                    fontSize: "35px",
                    lineHeight: "49px",
                    marginLeft: "7px",
                  }}
                  className="cd-words-wrapper"
                >
                  {/* {loadTypeWriter && (
                    <Typewriter
                      options={{
                        wrapperClassName: "color-font fw-600",
                        strings: [
                          "unique opportunities.",
                          "investment opportunities.",
                          "a seamless partnership for a future of endless possibilities.",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                      loop={true}
                    />
                  )} */}
                </span>
              </h1>
            </div>
          </div>
        </div>

        <div className="states">
          <div className="container">
            {/* <ul className="flex"> */}
            {/* <div className="social">
                <a href="#0">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-youtube"></i>
                </a>
              </div> */}

            {/* <li className="mail-us">
                <a href="mailto:your@email.com?subject=Subject">
                  <div className="flex">
                    <div className="text valign">
                      <div className="full-width">
                        <p>Get In Touch</p>
                        <h6>Vie_Support@Gmail.Com</h6>
                      </div>
                    </div>
                    <div className="mail-icon">
                      <div className="icon-box">
                        <span className="icon color-font pe-7s-mail"></span>
                      </div>
                    </div>
                  </div>
                </a>
              </li> */}
            {/* </ul> */}
          </div>
        </div>
      </div>
      <div className="line bottom left"></div>
    </header>
  );
}

export default FreelancreIntro;
