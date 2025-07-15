import React from "react";
import Header from "../components/header/Header";
import Tags from "../components/tags/Tags";
import Channels from "../components/channels/Channels";
import Carousels from "../components/carousel/Carousel";
import Featured from "../components/featured/Featured";
function Home() {
  return (
    <>
      <Header />
      <Tags />
      <Carousels />
      <Channels />
      <Featured />
    </>
  );
}

export default Home;
