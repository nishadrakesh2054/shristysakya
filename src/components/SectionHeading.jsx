import React from "react";
import parser from "html-react-parser";

export default function SectionHeading({ miniTitle, title, variant }) {
  return (
    <div className={`section-heading ${variant ? variant : ""}`}>
      {miniTitle && (
        <div
          className="section-heading-mini"
          data-aos={variant === "text-center" ? "fade-up" : "fade-right"}
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <span className="mini-title-text">{miniTitle}</span>
          <span className="mini-title-line"></span>
        </div>
      )}
      <h2
        className="text-dark"
        data-aos={variant === "text-center" ? "fade-up" : "fade-right"}
        data-aos-duration="1200"
        data-aos-delay="300"
      >
        {parser(title)}
      </h2>
    </div>
  );
}
