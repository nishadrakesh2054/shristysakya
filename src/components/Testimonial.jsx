import React from "react";
import SectionHeading from "./SectionHeading";
import Slider from "react-slick";
import Ratings from "./Ratings";

export default function Testimonial({ data }) {
  const { sectionHeading, allTestimonial } = data;

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 992, // tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="section effect-section pb-0">
      <div className="effect-3">
        <img src="/images/effect-3.svg" alt="" />
      </div>

      <div className="container">
        <SectionHeading
          miniTitle={sectionHeading.miniTitle}
          title={sectionHeading.title}
          variant="text-center"
        />

        <div data-aos="fade" data-aos-duration="1200" data-aos-delay="300">
          <Slider {...settings}>
            {allTestimonial?.map((item, index) => (
              <div key={index} className="px-3">
                <div
                  className="testimonial-box h-100"
                  style={{
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                    borderRadius: "8px",
                  }}
                >
                  <div className="t-user">
                    <img src={item.avatarImg} alt="Avatar" />
                  </div>

                  <div className="t-text text-dark">{item.reviewText}</div>

                  {item.ratings && (
                    <div className="rating-wrap mb-3 d-flex justify-content-center">
                      <Ratings ratings={item.ratings} />
                    </div>
                  )}

                  <div className="t-person">
                    <h6>{item.avatarName}</h6>
                    <span className="text-dark">{item.avatarCompany}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
