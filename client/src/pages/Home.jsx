import React from "react";
import Hero from "@/components/home/Hero";
import Feature from "@/components/home/feature";
import Solutions from "@/components/home/Solutions";
import HowWork from "@/components/home/HowWork";
const Home = () => {
  return (
    <section className="container mx-auto px-5">
      <Hero />
      <Feature />
      <Solutions />
      <HowWork />
    </section>
  );
};

export default Home;
