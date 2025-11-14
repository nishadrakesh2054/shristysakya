import React from "react";
import ContactForm from "./ContactForm";

export default function Contact({ data }) {
  const { sectionHeading } = data;

  return (
    <section id="contactus" className="section contactus-section">
      <div className="container">
        <div className="contactus-box rounded overflow-hidden gray-bg">
          {/* ---- NEW 2 EQUAL COLUMNS ---- */}
          <div className="row g-0 p-4 p-lg-5">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <div
                className="contactus-title"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <h5>{sectionHeading.title}</h5>
                <p className="m-0">{sectionHeading.subTitle}</p>

                <div className="contact-info">
                  <div
                    className="contact-info-in"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <label>write and email</label>
                    <a href="mailto:example@email.com">example@email.com</a>
                  </div>
                </div>

                {/* FB LINK */}
                {/* SOCIAL LINKS */}
                <div className="follow">FOLLOW US</div>
                <div className="social-links d-flex gap-3 mt-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark fw-bold"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://behance.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark fw-bold"
                  >
                    Behance
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark fw-bold"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - FORM */}
            <div className="col-lg-6">
              <div className="contact-form">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
