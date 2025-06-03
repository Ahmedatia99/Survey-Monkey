import React from "react";
import Hero from "@/components/home/Hero";
import Feature from "@/components/home/feature";
import Solutions from "@/components/home/Solutions";
const Home = () => {
  return (
    <section className="container mx-auto px-5">
      <Hero />
      <Feature />
      <Solutions />
    </section>
  );
};

export default Home;
