import React from "react";
import Img1 from "../assets/portfolio1.png";
import Img2 from "../assets/portfolio2.png";
import { LuArrowUpRight } from "react-icons/lu";

const Projects = () => {
  const projectsItems = [
    {
      img: Img1,
      tech: ["wordpress", "pwa"],
      name: "Modern look for the the software development company",
    },
    {
      img: Img2,
      tech: ["Building Style Guide", "react"],
      name: "Corporate website for an assemble modular houses enterprise",
    },
  ];
  return (
    <div className="max-w-[1220px] mx-auto px-[16px] xl:px-0 py-[40px]">
      <div className="w-full lg:w-[696px] mx-auto text-center">
        <p>Our projects</p>
        <h2 className="text-[40px] lg:text-[60px]">Case studies</h2>
        <p className="text-[15px] opacity-80 font-light">
          When it comes to creating a high quality website and adjusting the
          marketing strategy, experience matters a lot. Explore our portfolio to
          view some of the projects we've successfully completed!
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-[40px] mt-[40px]">
        {projectsItems.map((item, index) => (
          <div key={index}>
            <img src={item.img} className="first:w-[654px] h-[250px] lg:h-[486px] last:mb-[-30px]" alt="img" />
            <div className="flex items-center gap-[10px]">
              {item.tech.map((tech, index) => (
                <p key={index} className="mt-[20px] text-[14px] px-[12px] py-[8px] border border-[#8BAAB7] rounded-[20px]">{tech}</p>
              ))}
            </div>
            <p className="mt-[6px] text-[26px]">{item.name}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="flex items-center gap-[10px] py-[8px] px-[20px] bg-[#018ABE] text-white rounded-[10px] mt-[30px]">See more <LuArrowUpRight /></button>
      </div>
    </div>
  );
};

export default Projects;
