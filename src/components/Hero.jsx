import React from "react";
import Logo from "../assets/mobile_logo.svg";
import { LuArrowUpRight } from "react-icons/lu";
import comp1 from "../assets/comp1.svg";
import comp2 from "../assets/comp2.svg";
import comp3 from "../assets/comp3.svg";
import comp4 from "../assets/comp4.svg";
import heroImg from "../assets/hero.png";
import web from "../assets/web.svg";
import seo from "../assets/seo.svg";
import smm from "../assets/smm.svg";

const Hero = () => {
  return (
    <div className="max-w-[1220px] mx-auto px-[16px] xl:px-0 flex flex-col lg:flex-row overflow-x-hidden lg:overflow-x-visible items-center justify-between gap-[20px] mt-[25px]">
      <div className="flex flex-col flex-shrink-0">
        <div className="mb-[20px] lg:mb-[120px]">
          <div className="flex items-center justify-center lg:justify-start gap-[30px] mb-[30px]">
            <img
              src={Logo}
              alt="logo"
              className="hidden lg:block w-[40px] xl:w-[70px]"
            />
            <h1 className="text-[30px]/[35px] xl:text-[40px]/[45px] text-center lg:text-left">
              Your Website <br /> good enough?
            </h1>
          </div>
          <button className="flex justify-between items-center gap-[20px] text-[22px] xl:text-[28px] py-[15px] w-[280px] xl:w-[348px] px-[20px] cursor-pointer rounded-[20px] bg-white text-black">
            Check this now!{" "}
            <span className="bg-[#018ABE] text-white p-[10px] rounded-full">
              <LuArrowUpRight className="" />
            </span>
          </button>
        </div>
        <div className="hidden lg:block">
          <a href="#" className="text-[20px]">
            They Trust Us
          </a>
          <div className="flex items-center gap-[20px] w-[17%] mt-[20px]">
            <img src={comp1} alt="comp1" />
            <img src={comp2} alt="comp2" />
            <img src={comp3} alt="comp3" />
            <img src={comp4} alt="comp4" />
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col w-[716px] flex-shrink-0">
          <img
            src={heroImg}
            alt="hero_img"
            className="w-[816px]"
          />
          <div className="flex items-center">
            <div className="border border-[#3D4449] py-[15px] px-[30px] w-[256px]">
              <img src={web} className="w-[35px] mb-[10px]" alt="web" />
              <p>Web Development</p>
            </div>
            <div className="border-y border-[#3D4449] py-[15px] px-[30px] w-[256px]">
              <img src={seo} className="w-[35px] mb-[13px]" alt="seo" />
              <p>Seo optimisation</p>
            </div>
            <div className="border border-[#3D4449] py-[15px] px-[30px] w-[246px]">
              <img src={smm} className="w-[35px] mb-[10px]" alt="smm" />
              <p>PPC and SMM</p>
            </div>
          </div>
        </div>
        <div className="block lg:hidden text-center my-[20px]">
          <a href="#" className="text-[20px]">
            They Trust Us
          </a>
          <div className="flex justify-center w-full items-center gap-[20px] w-[17%] mt-[20px]">
            <img src={comp1} alt="comp1" className="flex-shrink-0" />
            <img src={comp2} alt="comp2" className="flex-shrink-0" />
            <img src={comp3} alt="comp3" className="flex-shrink-0" />
            <img src={comp4} alt="comp4" className="flex-shrink-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
