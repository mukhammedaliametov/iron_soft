import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { IoClose, IoMenu } from "react-icons/io5";
import mobile_logo from '../assets/mobile_logo.svg';

const Header = () => {
  const [nav, setNav] = useState();
  const handleClick = () => setNav(!nav);
  const navItems = [
    { name: "Services", link: "#" },
    { name: "Our works", link: "#" },
    { name: "About us", link: "#" },
    { name: "Contact us", link: "#" },
  ];
  return (
    <div className="bg-[#0c151c86] sticky top-0 backdrop-blur-[6px] z-999">
    <div className="max-w-[1220px] mx-auto flex items-center justify-between px-[16px] xl:px-0 py-[15px]">
      <a href="">
        <img src={logo} alt="logo" className="hidden md:block w-[165px]" />
        <img src={mobile_logo} alt="mobile_logo" className="block md:hidden w-[39px]" />
      </a>
      <nav className="hidden md:flex gap-[40px]">
        {navItems.map((item, index) => {
          return (
            <a href={item.link} key={index} className="hover:opacity-80">
              {item.name}
            </a>
          );
        })}
      </nav>
      <div className="hidden md:block">
        <button className="py-[12px] px-[20px] bg-[#018ABE] rounded-[12px] text-[14px] hover:opacity-80 cursor-pointer">
          Get Started
        </button>
      </div>
      <div onClick={handleClick} className="block md:hidden text-[26px]">
        {nav ? <IoClose /> : <IoMenu />} 
      </div>
      <nav className={`absolute top-[68px] pt-[40px] pb-[20px] px-[16px] w-full h-screen bg-[#0188bee8] flex flex-col gap-[20px] transition-all duration-500 backdrop-blur-3xl ${nav ? 'left-0' : 'left-[-100%]'}`}>
        {navItems.map((item, index) => {
          return (
            <a href={item.link} key={index} className="hover:opacity-80 border-b border-[#ffffff69] last:border-0 pb-[20px]">
              {item.name}
            </a>
          );
        })}
        <button className="py-[12px] px-[20px] bg-[#018ABE] rounded-[12px] text-[14px] hover:opacity-80 cursor-pointer">
          Get Started
        </button>
      </nav>
    </div>
    </div>
  );
};

export default Header;
