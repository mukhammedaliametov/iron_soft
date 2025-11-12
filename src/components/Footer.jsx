import React from 'react';
import logo from '../assets/logo.svg';
import { FaFacebook, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <div className='border-y border-[#242C33]'>
                <div className='max-w-[1220px] mx-auto px-[16px] xl:px-0 flex flex-col md:flex-row items-start md:items-center gap-[20px] justify-between py-[40px]'>
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <nav className='flex flex-col md:flex-row gap-[20px] md:gap-[40px]'>
                        <a href="#">Services</a>
                        <a href="#">Our works</a>
                        <a href="#">About us</a>
                        <a href="#">Contact us</a>
                    </nav>
                    <div>
                        <button className='bg-white text-[#018ABE] px-[20px] py-[12px] cursor-pointer hover:opacity-80 rounded-[20px]'>Get started</button>
                    </div>
                </div>
            </div>
            <div className='max-w-[1220px] mx-auto px-[16px] xl:px-0 flex items-center justify-between py-[15px]'>
                <p className='font-light text-[#5C6268]'>© IRONSOFT, ALL RIGHTS RESERVED</p>
                <div className='hidden sm:flex items-center gap-[15px] text-[#8BAAB7]'>
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaLinkedinIn /></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;