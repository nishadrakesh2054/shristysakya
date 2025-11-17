import React from "react";
import HomePagdData from "../data/HomePagdData.json";

export default function About({ data }) {
  const { aboutMe, process, skills, tools, aboutMe1 } = data;
  const { brands } = HomePagdData;

  return (
    <section className="about-section section" id="about">
      <div className="container">
        {/* About Me Section */}
        <div className="row mb-5">
          <div className="col-12">
            <div
              className="about-me-section"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h5 className="about-me-label mb-4">* About Me</h5>
              <p className="about-me-text text-dark ">{aboutMe}</p>
            </div>
          </div>
        </div>

        {/* My Process Section */}
        {process && (
          <div className="row mb-5">
            <div className="col-12">
              <h3
                className="process-title text-dark mb-4"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                My process is simple:
              </h3>
              <div className="row g-4">
                {process.map((step, index) => (
                  <div
                    key={index}
                    className="col-md-4"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay={200 + index * 100}
                  >
                    <div className="process-step">
                      <div className="step-number">{index + 1}</div>
                      <h4 className="step-title mb-3">{step.title}</h4>
                      <p className="step-description text-dark mb-0">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* About Me Continuation */}
        {aboutMe1 && (
          <div className="row ">
            <div className="col-12">
              <p
                className="about-me-text text-dark mb-5"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                {aboutMe1}
              </p>
            </div>
          </div>
        )}

        {/* Brands Grid Section */}
        {brands && brands.length > 0 && (
          <div className="row ">
            <h3
              className="process-title text-dark mb-4"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              Brand that I have worked for:
            </h3>
            <div className="col-12">
              <div
                className="brands-grid-section"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="450"
              >
                <div className="row g-2 ">
                  {brands.map((brand, index) => (
                    <div key={index} className="col-6 col-md-4 col-lg-2">
                      <div className="brand-item border">
                        <img
                          src={brand.src}
                          alt={brand.alt}
                          className="brand-logo"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Skills and Tools Section */}
        <div className="row g-3">
          {/* Skills */}
          {skills && skills.length > 0 && (
            <div className="col-lg-6">
              <div
                className="skills-section"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="500"
              >
                <h3 className="skills-title text-dark">Skills:</h3>
                <ul className="skills-list">
                  {skills.map((skill, index) => (
                    <li key={index} className="skill-item text-dark">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Tools */}
          {tools && tools.length > 0 && (
            <div className="col-lg-6">
              <div
                className="tools-section"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="600"
              >
                <h3 className="tools-title text-dark ">Tools:</h3>
                <ul className="tools-list">
                  {tools.map((tool, index) => (
                    <li key={index} className="tool-item text-dark">
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
