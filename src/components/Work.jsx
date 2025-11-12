// import { Icon } from '@iconify/react';
// import React, { useState } from 'react';
// import SectionHeading from './SectionHeading';
// import Modal from './Modal';

// export default function Work({ data }) {
//   const [modal, setModal] = useState(false);
//   const [modalType, setModalType] = useState('image');
//   const [modalData, setModalData] = useState({});
//   const [activeCategory, setActiveCategory] = useState('All');

//   const { sectionHeading, allProjects } = data;

//   // Extract unique categories from projects
//   const categories = ['All', ...new Set(allProjects.map((p) => p.category))];

//   const handleProjectDetails = (item, itemType) => {
//     setModalData(item);
//     setModalType(itemType);
//     setModal(true);
//   };

//   // Filter projects based on selected category
//   const filteredProjects =
//     activeCategory === 'All'
//       ? allProjects
//       : allProjects.filter((p) => p.category === activeCategory);

//   return (
//     <>
//       <section className="project-section section gray-bg" id="project">
//         <div className="container">
//           <SectionHeading
//             miniTitle={sectionHeading.miniTitle}
//             title={sectionHeading.title}
//           />

//           {/* Category Filter Buttons */}
//           <div className="mb-4 d-flex flex-wrap gap-2">
//             {categories.map((cat, index) => (
//               <button
//                 key={index}
//                 className={`btn btn-sm ${
//                   activeCategory === cat ? 'btn-primary' : 'btn-outline-primary'
//                 }`}
//                 onClick={() => setActiveCategory(cat)}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>

//           {/* Project Cards */}
//           <div
//             className="row g-4"
//             data-aos="fade"
//             data-aos-duration="1200"
//             data-aos-delay="400"
//           >
//             {filteredProjects.map((item, index) => (
//               <div className="col-lg-4 col-md-6" key={index}>
//                 <div className="project-box">
//                   <div className="project-media">
//                     <img src={item.thumbUrl} alt={item.title} />
//                     <span
//                       className="gallery-link"
//                       onClick={() => handleProjectDetails(item, 'image')}
//                     >
//                       <i>
//                         <Icon icon="bi:plus" />
//                       </i>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Modal */}
//       {modal && (
//         <div className="mfp-wrap">
//           <div className="mfp-container">
//             <div className="mfp-bg" onClick={() => setModal(false)}></div>
//             <div className="mfp-content">
//               <button
//                 type="button"
//                 className="mfp-close"
//                 onClick={() => setModal(false)}
//               >
//                 ×
//               </button>
//               {modalType === 'image' ? (
//                 <img src={modalData.thumbUrl} alt={modalData.title} />
//               ) : (
//                 <Modal modalData={modalData} />
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

import { Icon } from "@iconify/react";
import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import Modal from "./Modal";

export default function Works({ data }) {
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState("image");
  const [modalData, setModalData] = useState({});
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(9);

  const { sectionHeading, allProjects } = data;

  const categories = ["All", ...new Set(allProjects.map((p) => p.category))];

  const handleProjectDetails = (item, itemType) => {
    setModalData(item);
    setModalType(itemType);
    setModal(true);
  };

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  // Projects to display based on "Show More / Show Less"
  const visibleProjects = filteredProjects.slice(0, visibleCount);

  return (
    <>
      <section className="project-section section " id="project">
        <div className="container">
          <SectionHeading
            miniTitle={sectionHeading.miniTitle}
            title={sectionHeading.title}
          />

          {/* Category Filter Buttons */}
          {/* <div className="mb-4 d-flex flex-wrap gap-2">
            {categories.map((cat, index) => (
              <button
                key={index}
                className={`btn btn-sm ${
                  activeCategory === cat ? 'btn-primary' : 'btn-outline-primary'
                }`}
                onClick={() => {
                  setActiveCategory(cat);
                  setVisibleCount(9); // reset visible count when category changes
                }}
              >
                {cat}
              </button>
            ))}
          </div> */}
          <div className="category-filter mb-4 d-flex flex-wrap gap-2 justify-content-start">
            {categories.map((cat, index) => (
              <button
                key={index}
                className={`filter-btn ${
                  activeCategory === cat ? "active" : ""
                }`}
                onClick={() => {
                  setActiveCategory(cat);
                  setVisibleCount(9);
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Cards */}
          <div
            className="row g-4"
            data-aos="fade"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            {visibleProjects.map((item, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="project-box">
                  <div className="project-media">
                    <img src={item.thumbUrl} alt={item.title} />
                    <span
                      className="gallery-link"
                      onClick={() => handleProjectDetails(item, "image")}
                    >
                      <i>
                        <Icon icon="bi:plus" />
                      </i>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show More / Show Less Button */}
          {filteredProjects.length > 9 && (
            <div className="text-center mt-4">
              {/* <button
                className="btn btn-outline-primary"
                onClick={() =>
                  setVisibleCount(
                    visibleCount === 9 ? filteredProjects.length : 9
                  )
                }
              >
                {visibleCount === 9 ? 'Show More' : 'Show Less'}
              </button> */}
              <button
                className="btn-show-toggle"
                onClick={() =>
                  setVisibleCount(
                    visibleCount === 9 ? filteredProjects.length : 9
                  )
                }
              >
                {visibleCount === 9 ? "Show More" : "Show Less"}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {modal && (
        <div className="mfp-wrap">
          <div className="mfp-container">
            <div className="mfp-bg" onClick={() => setModal(false)}></div>
            <div className="mfp-content">
              <button
                type="button"
                className="mfp-close"
                onClick={() => setModal(false)}
              >
                ×
              </button>
              {modalType === "image" ? (
                <img src={modalData.thumbUrl} alt={modalData.title} />
              ) : (
                <Modal modalData={modalData} />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
