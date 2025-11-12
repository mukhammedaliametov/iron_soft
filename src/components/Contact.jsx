import React from "react";
import { CiUser } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaPencil } from "react-icons/fa6";
import { LuArrowUpRight } from "react-icons/lu";

const Contact = () => {
  return (
    <div className="max-w-[1220px] mx-auto px-[16px] xl:px-0 my-[30px]">
      <h2 className="text-center text-[25px]/[30px] lg:text-[40px]/[45px]">
        <span className='text-[#018ABE]'>Tell us</span> about your <br /> amazing project
      </h2>
      <form className="max-w-[580px] w-full mx-auto flex flex-col gap-[40px] py-[40px]">
        <div className="flex items-center w-full border-b border-[#242C33]">
          <input type="text" placeholder="name" className="w-full outline-none py-[10px]" />
          <CiUser />
        </div>
        <div className="flex items-center gap-[30px]">
          <div className="flex items-center w-full border-b border-[#242C33]">
            <input type="text" placeholder="email" className="w-full outline-none py-[10px]" />
            <MdOutlineEmail />
          </div>
          <div className="flex items-center w-full border-b border-[#242C33]">
            <input type="text" placeholder="phone" className="w-full outline-none py-[10px]" />
            <FiPhone />
          </div>
        </div>
          <div className="flex items-top w-full border-b border-[#242C33]">
            <textarea placeholder="message" className="w-full outline-none py-[10px]"></textarea>
            <FaPencil />
          </div>
          <div>
            <input type="checkbox" id="checked" />
            <label htmlFor="checked" className='ml-[10px] font-[400]'> I agree to the Privacy Policy</label>
          </div>
          <div className="flex justify-center">
          <button className="flex items-center bg-[#018ABE] text-white py-[20px] px-[30px] lg:px-[60px] rounded-[20px] gap-[10px] cursor-pointer text-[16px] lg:text-[24px]">Get a free consultation <LuArrowUpRight className="text-[22px]" /></button>
          </div>
      </form>
    </div>
  );
};

export default Contact;
