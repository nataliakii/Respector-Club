import React from "react";

const slogan1={
  color:{1: "Respect", 2:"Club"},
  plain: {1:" Brings Us Together - Join the"}
}
const slogan2={
  color:{1: "The Respector ", 2:"People "},
  plain: {1:" Group Club - Where Respect Brings", 2:"Together"}
}

const Header4 = ({ sliderRef }) => {
  return (
    <header ref={sliderRef} className="particles circle-bg valign">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="cont text-center">
              <h1>
                <span className="color-font">{slogan1.color[1]} </span>{slogan1.plain[1]}  <span className="color-font">{slogan1.color[2]}</span>.
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="gradient-circle"></div>
      <div className="gradient-circle two"></div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default Header4;
