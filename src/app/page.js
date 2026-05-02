import Animal from "@/component/Animal";
import Banner from "@/component/Banner";
import ExtraSection from "@/component/ExtraSection";
import React from "react";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Animal></Animal>
      <ExtraSection></ExtraSection>
    </div>
  );
};

export default Home;
