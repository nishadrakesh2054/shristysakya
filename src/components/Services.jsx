import { Icon } from "@iconify/react";
import React from "react";
import SectionHeading from "./SectionHeading";
import Slider from "react-slick";
import Ratings from "./Ratings";

export default function Services({ data }) {
  const { sectionHeading, allService } = data;

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: true,
  };

  return (
    <section className="project-section section " id="services">
      <div className="container">
        <SectionHeading
          miniTitle={sectionHeading.miniTitle}
          title={sectionHeading.title}
        />
        <div
          className="full-width"
          data-aos="fade"
          data-aos-duration="1200"
          data-aos-delay="400"
        >
          <Slider {...settings} className="slider-gap-24">
            {allService?.map((item, index) => (
              <div key={index} style={{ width: "416px" }}>
                <div
                  className="services-box"
                  style={{
                    backgroundImage: `url(${item.imgUrl})`,
                  }}
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  data-aos-delay={index * 100}
                >
                  <div className="services-body">
                    <div className="icon">
                      <Icon icon={item.icon} />
                    </div>
                    <h5>{item.title}</h5>

                    <div className="rating-wrap">
                      <Ratings ratings={item.ratings} />
                    </div>
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
