import React from "react";
import Navbar from "./components/Header/Navbar";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import MeetHappy from "./components/MeetHappy/MeetHappy";
import Names from "./components/Names/Names";

function Home() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <MeetHappy />
      <Names />
    </>
  );
}

export default Home;
