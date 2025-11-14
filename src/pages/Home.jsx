import Brands from "../components/Brands";
// import Projects from "../components/Projects";
import Testimonial from "../components/Testimonial";
import Hero from "../components/Hero";
import About from "../components/About";
// import Service from "../components/Service";
import HomePagdData from "../data/HomePagdData.json";
import Contact from "../components/Contact";
import Work from "../components/Work";
// import Newservice from "../components/Newservice";
import Service from "../components/Service";

export default function Home() {
  const {
    hero,
    socialBtns,
    about,
    brands,
    testimonial,
    contact,
    work,
    service,
  } = HomePagdData;
  return (
    <>
      <Hero data={hero} socialData={socialBtns} />
      <About data={about} />
      <Brands data={brands} />
      <Work data={work} />

      <Service data={service} />
      <Testimonial data={testimonial} />
      <Contact data={contact} socialData={socialBtns} />
    </>
  );
}
