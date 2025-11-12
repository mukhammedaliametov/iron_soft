import React from 'react';
import { FaAngleDown } from "react-icons/fa6";

const Faq = () => {
    return (
        <div className='max-w-[1220px] mx-auto px-[16px] xl:px-0'>
            <h2 className='text-center text-[40px] py-[30px]'>FAQ</h2>
            <div className='flex flex-col gap-[10px] w-full md:w-[700px] mx-auto'>
                <div className='w-full flex justify-between items-center py-[10px] px-[20px] rounded-full border border-[#555B60] cursor-pointer'>
                    <p className='font-[400]'>Do you have all your team in-house?</p>
                    <FaAngleDown />
                </div>
                <div className='w-full flex justify-between items-center py-[10px] px-[20px] rounded-full border border-[#555B60] cursor-pointer'>
                    <p className='font-[400]'>How can I get a quote for my project?</p>
                    <FaAngleDown />
                </div>
                <div className='w-full flex justify-between items-center py-[10px] px-[20px] rounded-full border border-[#555B60] cursor-pointer'>
                    <p className='font-[400]'>How can I control the project?</p>
                    <FaAngleDown />
                </div>
                <div className='w-full flex justify-between items-center py-[10px] px-[20px] rounded-full border border-[#555B60] cursor-pointer'>
                    <p className='font-[400]'>Who can recommend your software agency?</p>
                    <FaAngleDown />
                </div>
            </div>
        </div>
    );
};

export default Faq;