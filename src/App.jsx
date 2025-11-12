import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Advantages from './components/Advantages';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Advantages />
      <Projects />
      <Blog />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;