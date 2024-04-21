import React from "react";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Hero from "../components/Hero";
import TabletsAnimationContainer from "../components/TabletsAnimationContainer";
import FollowUs from "../components/FollowUs";
import JoinTeam from "../components/JoinTeam";
import Footer from "../components/Footer";
import NeedHelp from "../components/NeedHelp";
import Fantasy from "../components/Fantasy";

const Home = () => {
  return (
    <div className="w-full h-auto relative">
      <Intro />
      <Navbar />
      <Hero />
      <TabletsAnimationContainer />
      <Fantasy />
      <Fantasy />

      <FollowUs />
      <JoinTeam />
      <NeedHelp />
      <Footer />
    </div>
  );
};

export default Home;
