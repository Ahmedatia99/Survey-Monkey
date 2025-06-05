import React from "react";
import Hero from "@/components/home/Hero";
import Feature from "@/components/home/feature";
import Solutions from "@/components/home/Solutions";
import HowWork from "@/components/home/HowWork";
import SurveyTemplates from "@/components/home/SurveyTemplates";
import ChoiceOutTemplate from "@/components/home/ChoiceOutTemplate";
import AnalysisComers from "@/components/home/AnalysisComers";
const Home = () => {
  return (
    <section className="container mx-auto px-5">
      <Hero />
      <Feature />
      <Solutions />
      <HowWork />
      <SurveyTemplates />
      <ChoiceOutTemplate />
      <AnalysisComers />
    </section>
  );
};

export default Home;
