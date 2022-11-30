import { Container } from "@mui/system";
import React from "react";
import Categories from "../components/categories";
import Hero from "../components/heroSection";
import NavBar from "../components/navbar";
import Sponsor from "../components/sponsorComponent";
import RecommendedSkills from "../components/recommendedSkills";
import TrendingSkills from "../components/trendingSkills";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Container>
        <Sponsor />
        <TrendingSkills />
        <Categories />
        <RecommendedSkills />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Container>
    </>
  );
};

export default Home;
