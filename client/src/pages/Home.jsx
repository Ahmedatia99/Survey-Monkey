import React from "react";
import Hero from "@/components/home/Hero";
import Feature from '@/components/home/feature';

const Home = () => {
  return (
    <section className="container mx-auto px-5">
      <Hero />
      <Feature />
    </section>
  );
};

export default Home;
