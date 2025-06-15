import React from "react";
import SectionTitle from "@/components/comman/SectionTitle";
import Comments from "./../comman/Comments";

const UsersComments = () => {
  const users = [
    {
      id: 1,
      name: "John Doe",
      position: "Product Manager",
      img: "./image/user1.png",
      rate: 5,
      comment: `"This survey platform is amazing! It has made collecting feedback so easy and efficient. Highly recommend it to anyone looking to create surveys."`,
    },
    {
      id: 2,
      name: "John Doe",
      position: "Product Manager",
      img: "./image/user2.png",
      rate: 5,
      comment: `"This survey platform is amazing! It has made collecting feedback so easy and efficient. Highly recommend it to anyone looking to create surveys."`,
    },
    {
      id: 3,
      name: "John Doe",
      position: "Product Manager",
      img: "./image/user3.png",
      rate: 5,
      comment: `"This survey platform is amazing! It has made collecting feedback so easy and efficient. Highly recommend it to anyone looking to create surveys."`,
    },
    {
      id: 4,
      name: "John Doe",
      position: "Product Manager",
      img: "./image/user4.png",
      rate: 5,
      comment: `"This survey platform is amazing! It has made collecting feedback so easy and efficient. Highly recommend it to anyone looking to create surveys."`,
    },
  ];
  return (
    <section className="pb-20">
      <SectionTitle
        classname="text-purple"
        leftTitle="What"
        subTitle="Our Users Say"
        description="Join thousands of satisfied customers worldwide"
      />
      <div className="">
        <Comments comment={users} />
      </div>
    </section>
  );
};

export default UsersComments;
