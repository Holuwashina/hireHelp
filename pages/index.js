import { Container } from "@mui/system";
import React from "react";
import Categories from "../components/categories";
import Hero from "../components/heroSection";
import NavBar from "../components/navbar";
import Sponsor from "../components/sponsorComponent";
import TopSkills from "../components/topSkillsComponent";
import ProfessionalSkills from "../components/professionalSkills";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Container>
        <Sponsor />
        <TopSkills />
        <Categories />
        <ProfessionalSkills />
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
