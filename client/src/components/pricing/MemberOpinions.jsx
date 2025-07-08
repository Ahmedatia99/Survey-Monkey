import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SectionTitle from "@/components/comman/SectionTitle";
import { IoLogoInstagram } from "react-icons/io";
import { RiLinkedinLine } from "react-icons/ri";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";

const MembersData = [
  {
    name: "Tom Cruise",
    role: "Founder & chairman",
    image: "/public/image/user1.png",
    comment:
      "The Professional plan has everything we need to gather customer feedback effectively. The analytics tools have been invaluable for our product development.",
  },
  {
    name: "Emma Watson",
    role: "Managing Director",
    image: "/public/image/user1.png",
    comment:
      "The Professional plan has everything we need to gather customer feedback effectively. The analytics tools have been invaluable for our product development.",
  },
  {
    name: "Will Smith",
    role: "Product designer",
    image: "/public/image/user1.png",
    comment:
      "The Professional plan has everything we need to gather customer feedback effectively. The analytics tools have been invaluable for our product development.",
  },
  {
    name: "Tom Cruise",
    role: "Founder & chairman",
    image: "/public/image/user1.png",
    comment:
      "The Professional plan has everything we need to gather customer feedback effectively. The analytics tools have been invaluable for our product development.",
  },
  {
    name: "Emma Watson",
    role: "Managing Director",
    image: "/public/image/user1.png",
    comment:
      "The Professional plan has everything we need to gather customer feedback effectively. The analytics tools have been invaluable for our product development.",
  },
  {
    name: "Will Smith",
    role: "Product designer",
    image: "/public/image/user1.png",
    comment:
      "The Professional plan has everything we need to gather customer feedback effectively. The analytics tools have been invaluable for our product development.",
  },
];
const MemberOpinions = () => {
  return (
    <div className=" mx-auto my-12 relative dark:bg-[#5c2a6e1f] bg-[#F7F7F7] p-14">
      <div className="mb-24">
        <SectionTitle classname="text-purple" leftTitle="Trusted by thousands">
          <p className="!text-purple !text-sm absolute top-24">
            See what our customers have to say about their
            experience
          </p>
        </SectionTitle>
      </div>
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{
          clickable: true,
          dynamicBullets: false,
          el: ".swiper-pagination",
        }}
        className="pb-12"
      >
        {MembersData.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white dark:bg-[#bf4ee81f] py-4 px-2 rounded-2xl">
              <p className="text-sm font-normal">{member.comment}</p>
              <div className="flex items-center py-2">
                <div>
                  <img
                    src={member.image}
                    className="rounded-full w-[50px] h-[50px]"
                    alt="member img"
                  />
                </div>
                <div className="flex flex-col justify-end  p-2">
                  <h3 className="text-xs font-semibold mt-4">{member.name}</h3>
                  <p className="text-xs text-gray-500">{member.role}</p>
                </div>
              </div>
              <div className="flex justify-end gap-4  text-xl">
                <FaStar className="text-yellow-400 text-base" />
                <FaStar className="text-yellow-400 text-base" />
                <FaStar className="text-yellow-400 text-base" />
                <FaStar className="text-yellow-400 text-base" />
                <CiStar className=" text-base" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div className="swiper-pagination mt-4"></div> */}

      <style jsx global>{`
        .swiper-pagination {
          position: relative !important;
          display: flex;
          justify-content: center;
          margin-top: 10px;
        }

        .swiper-pagination-bullet {
          width: 7px;
          height: 7px;
          background-color: gray !important;
          opacity: 0.5 !important;
          transition: all 0.3s ease;
          margin: 0 5px !important;
          border-radius: 50%;
        }

        .swiper-pagination-bullet-active {
          background-color: #ff4500 !important;
          opacity: 1 !important;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
};

export default MemberOpinions;
