import React from "react";
import SectionTitle from "@/components/comman/SectionTitle";
import SuccessCard from "@/components/comman/SuccessCard";

const CustomerStories = () => {
  return (
    <section>
      <SectionTitle
        leftTitle="Customer"
        subTitle="Success Stories"
        description="See how organizations are transforming their feedback process"
        classname="text-purple"
      />
      <div className="mt-5 md:mt-10">
        <SuccessCard />
      </div>
    </section>
  );
};

export default CustomerStories;
