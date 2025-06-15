import React from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import GroupOfTemplates from "./GroupOfTemplates";
import CardsMainTemp from "./CardsMainTemp";
import SectionTitle from "@/components/comman/SectionTitle";
const SurveyTemplates = () => {
  return (
    <section>
      <SectionTitle
        subTitle="Professional Survey "
        rightTitle="Templates"
        description="Choose from a variety of templates to get started quickly."
      />
      {/* search input */}
      <div className="flex justify-center items-center mt-5">
        <input
          type="text"
          placeholder="Search templates..."
          className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <Button
          type="submit"
          value="Search"
          className="ml-2 gradient text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-purple-600 transition duration-300"
        >
          <Search strokeWidth={2.5} /> Search
        </Button>
      </div>
      <GroupOfTemplates />
      <CardsMainTemp />
      <div className="flex justify-center items-center mt-10">
        <Button className="gradient text-white text-base p-6 rounded-lg hover:opacity-80 transition duration-300">
          View All Templates
        </Button>
      </div>
    </section>
  );
};

export default SurveyTemplates;
