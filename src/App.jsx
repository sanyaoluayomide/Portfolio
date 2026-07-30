import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Loader from "./components/Loader/Loader";
import Journey from "./components/Journey/Journey";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
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