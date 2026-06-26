import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Products from "../components/home/Products";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Process from "../components/home/Process";
import Gallery from "../components/home/Gallery";
import Contact from "../components/home/Contact";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <WhyChooseUs />
      <Process />
      <Gallery />
      <Contact />
    </>
  );
}

export default Home;