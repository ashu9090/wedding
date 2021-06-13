import React from "react";
import Navbar from "./components/Header/Navbar";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import MeetHappy from "./components/MeetHappy/MeetHappy";

function Home() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <MeetHappy />
    </>
  );
}

export default Home;
