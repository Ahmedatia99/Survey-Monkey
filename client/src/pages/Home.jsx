import React from "react";
import Hero from "@/components/home/Hero";
import Feature from "@/components/home/Feature";
import Solutions from "@/components/home/Solutions";
import HowWork from "@/components/home/HowWork";
import SurveyTemplates from "@/components/home/SurveyTemplates";
import ChoiceOutTemplate from "@/components/home/ChoiceOutTemplate";
import AnalysisComers from "@/components/home/AnalysisComers";
import Questions from "./../components/home/Questions";
import UsersComments from "./../components/home/UsersComments";
import PricingPlans from "./../components/home/PricingPlans";
import CustomerStories from "./../components/home/CustomerStories";
const Home = () => {
  return (
    <section className="container mx-auto px-5 overflow-hidden">
      <Hero />
      <Feature />
      <Solutions />
      <HowWork />
      <SurveyTemplates />
      <ChoiceOutTemplate />
      <AnalysisComers />
      <Questions />
      <UsersComments />
      <PricingPlans />
      <CustomerStories />
    </section>
  );
};

export default Home;
