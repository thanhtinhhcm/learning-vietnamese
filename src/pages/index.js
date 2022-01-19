import React, { useState } from "react";
import SideBar from "../components/SideBar/SideBar";
import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne, homeObjThree, homeObjTwo } from "../components/InfoSection/Data";
import Courses from "../components/Courses";
import Footer from "../components/Footer/Footer";

import TestCourse from '../pages/Courses';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div style={{ height: 'auto' }}>
      {/* <SideBar isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} /> */}
      <HeroSection />
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <Courses />
      <TestCourse />
      <InfoSection {...homeObjThree}/>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
