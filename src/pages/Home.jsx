// import Brands from "../components/Brands";
import Projects from "../components/Projects";
import Testimonial from "../components/Testimonial";
import Hero from "../components/Hero";
import About from "../components/About";
import Service from "../components/Service";
import HomePagdData from "../data/HomePagdData.json";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Work from "../components/Work";
import Newservice from "../components/Newservice";

export default function Home() {
  const {
    hero,
    socialBtns,
    // brands,
    about,
    // projects,
    // service,
    experience,
    testimonial,
    contact,
    work,
    newservice,
  } = HomePagdData;
  return (
    <>
      <Hero data={hero} socialData={socialBtns} />
        <About data={about} />
      <Work data={work} />
      {/* <Brands data={brands} /> */}
      <Newservice data={newservice} />
    
      {/* <Projects data={projects} /> */}
      {/* <Service data={service} /> */}
      <Experience data={experience} />
      <Testimonial data={testimonial} />
      <Contact data={contact} socialData={socialBtns} />
    </>
  );
}
