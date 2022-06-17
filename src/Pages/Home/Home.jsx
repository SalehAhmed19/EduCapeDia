import React from "react";
import Footer from "../../Shared/Footer";
import Banner from "./Banner";
import Courses from "./Courses";
import News from "./Newses";

const Home = () => {
  return (
    <div>
      <Banner />
      <News />
      <Courses />
      <Footer />
    </div>
  );
};

export default Home;
