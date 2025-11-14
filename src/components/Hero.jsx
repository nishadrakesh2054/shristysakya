// import { Icon } from "@iconify/react";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { ScrollLink } from "react-scroll";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Hero({ data }) {
  const { imgUrl, heading, typingText, description, btnUrl, btnText } = data;
  return (
    <section className="home-section" id="home" data-scroll-index={0}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hs-text-box">
              {/* <h6 data-aos="fade-up" data-aos-duration="1200">
                <span>{name}</span>
              </h6> */}

              <h1
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
                className="text-dark"
              >
                {heading}
              </h1>
              <h2
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <TypeAnimation
                  sequence={typingText}
                  speed={0}
                  repeat={Infinity}
                />
              </h2>
              <p
                className="text text-dark"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                {description}
              </p>

              <div
                className="btn-ba d-flex align-items-sm-start flex-column  "
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"  
              >
                <ScrollLink
                  to={btnUrl}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={300}
                  className="px-btn"

                >
                  <span className="">{btnText} </span>{" "}
                  <i>
                    <Icon icon="bi:arrow-right" />
                  </i>
                </ScrollLink>
              </div>
         
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hs-banner">
              <img src={imgUrl} title alt="Admin" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
