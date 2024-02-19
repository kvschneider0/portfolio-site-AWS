import { FC } from "react";

import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

const Home: FC = () => {
  return (
    <div>
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;