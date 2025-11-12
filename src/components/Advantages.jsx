import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import person1 from "../assets/person1.svg";
import person2 from "../assets/person2.svg";
import person3 from "../assets/person3.svg";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";
import { LuArrowUpRight } from "react-icons/lu";

const Advantages = () => {
  const team = [
    {
      desc: "“I’ve worked with them several times and have always been happy with the results.”",
      img: person1,
      name: "Olexander Danilkovych",
      type: "co-owner of S-8 Trading",
    },
    {
      desc: '"We were impressed by how promptly they could go from approval of the project to delivering final outputs."',
      img: person2,
      name: "Vitaliy Stetsenko",
      type: "founder of Vital Interiors",
    },
    {
      desc: '“Their team really listens and researches the best ways to make our partnership the best it can possibly be."',
      img: person3,
      name: "Oleg Bolebrukh",
      type: "founder at Trident Modular",
    },
  ];
  const blog = [
    {
      id: "01",
      title: "Highly process-oriented",
      desc: "We follow battle-tested, unique processes for everything that we do, ensuring high-quality.",
    },
    {
      id: "02",
      title: "Technical excel lency",
      desc: "Our engineering practices will bring website and marketing craftsmanship, quality, and consistency to the table.",
    },
    {
      id: "03",
      title: "Full transparency",
      desc: "We provide transparent and clear communication, project management, and budgeting.",
    },
  ];
  return (
    <div className="bg-white rounded-tl-[50px] rounded-tr-[50px] lg:rounded-tl-[120px] lg:rounded-tr-[120px] text-[#0C151C] mt-[50px] pb-[30px]">
      <div className="max-w-[1220px] mx-auto px-[16px] xl:px-0 pt-[50px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] lg:gap-[40px]">
        <div>
          <p>Our advantages</p>
          <h2 className="text-[42px]/[47px] my-[8px]">
            Why <br /> Iron<span className="text-[#018ABE]">Soft</span>
          </h2>
          <p className="text-[#000000B2]">
            Team of 12 passionate engineers developing and setting with care to
            make sure our clients are 100% happy.
          </p>
          <a href="#" className="flex items-center gap-[15px] mt-[8px]">
            more About us <FaArrowRight className="text-[#018ABE]" />
          </a>
        </div>
        {team.map((item, index) => (
          <div
            key={index}
            className="bg-[#DEF4FE] flex flex-col justify-between rounded-[30px] p-[20px]"
          >
            <p className="text-[14px]">{item.desc}</p>
            <div>
                <div className="flex items-center gap-[10px]">
              <img src={item.img} alt="img" className="w-[40px]" />
              <div>
                <p>{item.name}</p>
                <p className="text-[14px] text-[#000000B2]">{item.type}</p>
              </div>
            </div>
            <div className="flex gap-[6px] items-center justify-end mt-[18px]">
              <span className="p-[8px] rounded-full border border-[#B4CFDB] text-[#8BAAB7] cursor-pointer">
                <AiOutlineGlobal />
              </span>
              <span className="p-[8px] rounded-full border border-[#B4CFDB] text-[#8BAAB7] cursor-pointer">
                <FaLinkedinIn />
              </span>
            </div>
            </div>
          </div>
        ))}
        {blog.map((item, index) => (
          <div key={index} className="border border-[#E2E2E2] rounded-[30px] p-[20px]">
            <h2 className="text-[#018ABE] text-[26px]">{item.id}</h2>
            <p className="text-[26px]/[31px]">{item.title}</p>
            <p className="text-[14px] text-[#000000B2] mt-[10px]">{item.desc}</p>
          </div>
        ))}
        <div className="bg-[#018ABE] cursor-pointer text-white rounded-[30px] flex flex-col justify-center items-center">
          <h2 className="text-[30px]/[35px] text-center">Get a free <br /> consultation</h2>
          <span className="bg-white text-[#018ABE] text-[28px] p-[16px] rounded-full mt-[10px]">
            <LuArrowUpRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
