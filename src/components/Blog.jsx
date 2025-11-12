import React from 'react';
import Blog1 from '../assets/blog1.png';
import Blog2 from '../assets/blog2.png';
import Blog3 from '../assets/blog3.png';

const Blog = () => {
    const blogItems = [
        {
            img: Blog1,
            type: 'Marketing',
            title: 'IKEA.com — the problems with static content',
            desc: 'In my previous blog post, I wrote about the history of IKEA.com going from a monolithic e-commerce platform…',
            date: '12.08.23'
        },
        {
            img: Blog2,
            type: 'artificial intelligence',
            title: 'IKEA.com — the problems with static content',
            desc: 'In my previous blog post, I wrote about the history of IKEA.com going from a monolithic e-commerce platform…',
            date: '12.08.23'
        },
        {
            img: Blog3,
            type: 'Business',
            title: 'IKEA.com — the problems with static content',
            desc: 'In my previous blog post, I wrote about the history of IKEA.com going from a monolithic e-commerce platform…',
            date: '12.08.23'
        },
    ]
    return (
        <div className='bg-white text-[#0C151C] pb-[60px]'>
            <div className='max-w-[1220px] mx-auto px-[16px] xl:px-0'>
                <h2 className='text-center text-[40px] py-[40px]'>Blog</h2>
                <div className='flex flex-col md:flex-row items-center justify-between gap-[20px]'>
                    {blogItems.map((item, index) => (
                        <div key={index}>
                            <div className='relative'>
                                <img src={item.img} alt="img" />
                                <p className='absolute bottom-0 left-0 m-[10px] px-[20px] py-[8px] text-[16px] text-white capitalize bg-[#8BAAB7] rounded-full'>{item.type}</p>
                            </div>
                            <h3 className='text-[22px]/[27px] my-[10px]'>{item.title}</h3>
                            <p className='text-[#000000B2] text-[14px]'>{item.desc}</p>
                            <p className='text-[14px] text-[#000000B2]'>{item.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;