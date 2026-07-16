import { useEffect, useState } from "react";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Loader from "./components/Loader/Loader";
import Journey from "./components/journey/journey";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

 

  return (
    <>
      <Navbar/>
      <Hero/>
      <Journey/>
      <Skills/>
    <Projects/>
      <Contact/>
      <Footer/>
      <ScrollProgress />
    </>
  );
}

export default App;