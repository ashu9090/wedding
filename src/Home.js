import React from "react";
import Navbar from "./components/Header/Navbar";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import MeetHappy from "./components/MeetHappy/MeetHappy";
import Names from "./components/Names/Names";
import WeddingAlbum from "./components/WeddingAlbum/WeddingAlbum";
import Footer from "./components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <MeetHappy />
      <Names />
      <WeddingAlbum />
      <Footer />
    </>
  );
}

export default Home;
