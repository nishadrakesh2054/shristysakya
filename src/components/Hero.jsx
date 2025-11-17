// import { Icon } from "@iconify/react";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Hero({ data }) {
  const { imgUrl, name, heading, typingText, description } = data;

  const handleScrollToProject = (e) => {
    e.preventDefault();
    const projectSection = document.getElementById("project");
    if (projectSection) {
      const headerOffset = 80;
      const elementPosition = projectSection.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="home-section" id="home" data-scroll-index={0}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hs-text-box">
              {/* Greeting Text */}
              <h6
                className="hero-greeting text-dark mb-2"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                Hey there! I'm
              </h6>

              {/* Name */}
              <h1
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
                className="text-dark mb-3"
              >
                {name || heading}
              </h1>

              {/* Typing Animation */}
              <h2
                className="mb-4"
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

              {/* Description with Star Icon */}
              <div
                className="d-flex align-items-start mb-5"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <Icon
                  icon="bi:star-fill"
                  className="text-dark me-3 mt-1"
                  style={{ fontSize: "20px", flexShrink: 0 }}
                />
                <p className="text text-dark mb-0">{description}</p>
              </div>

              <div
                className="btn-ba"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <button
                  onClick={handleScrollToProject}
                  className="px-btn"
                  style={{
                    display: "inline-flex",
                    textDecoration: "none",
                    backgroundColor: "#9c0101",
                    color: "#ffffff",
                    border: "2px solid #9c0101",
                    cursor: "pointer",
                  }}
                >
                  View My Work
                  <i>
                    <Icon icon="bi:arrow-right" />
                  </i>
                </button>
              </div>

              {/* </div> */}
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
