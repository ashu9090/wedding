import React from "react";
import Navbar from "./components/Header/Navbar";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import MeetHappy from "./components/MeetHappy/MeetHappy";
import Names from "./components/Names/Names";
import WeddingAlbum from "./components/WeddingAlbum/WeddingAlbum";
import FriendsWishes from "./components/FriendsWishes/FriendsWishes";
import Gift from "./components/Gift/Gift";
import Footer from "./components/Footer/Footer";
import WhenWhere from "./components/WhenWhere/WhenWhere";
import OurBeautiful from "./components/OurBeautiful/OurBeautiful";
import CountDown from "./components/CountDown/CountDown";
import IconNumbers from "./components/IconsNumbers/IconNumbers";

function Home() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <MeetHappy />
      <Names />
      <WeddingAlbum />
      <CountDown />
      <OurBeautiful />
      <WhenWhere />
      <IconNumbers />
      <FriendsWishes />
      <Gift />
      <Footer />
    </>
  );
}

export default Home;
