import React from 'react'
import { IoIosArrowRoundUp } from "react-icons/io";
import { useState } from 'react';
import { img } from 'framer-motion/client';


function Reviews() {
    const [active, setActive] = useState(0);

    const boxes = [
        { id: 0, title: "Ochi", color: "bg-[#0B3B32]", textColor: "text-[#B7F28B]" },
        { id: 1, title: "Clutch", color: "bg-[#1E1E1E]", textColor: "text-white" },
        { id: 2, title: "Futur", color: "bg-[#1E1E1E]", textColor: "text-white" },
    ];
    return (
        <div data-scroll data-scroll-speed="-0.5"
            className='bg-[#f1f1f1] text-zinc-900 pb-40 mt-[25vw] font-[r-neue] z-40'>
            <h1 className='p-[4vw] pt-[6vw] text-[3vw] border-b-1 leading-12'>
                Clients’ Reviews
            </h1>

            <div className='flex justify-center pt-[2vw] px-6 md:px-12 lg:px-14'>
                <h1 className=' w-[30%]'>Karman Ventures</h1>

                <div className='w-[40%]'>
                    <h1 className='ml-1'>Services:</h1>

                    <div className='group flex items-center mt-25'>
                        <button className="relative px-4 py-1 border border-zinc-600 text-black rounded-4xl hover:bg-zinc-900 hover:text-white transition-all duration-500 ease-in-out  group">
                            Investor Deck
                        </button>
                        <div className='rounded-full hidden group-hover:block items-center justify-center w-8 h-8 border-1 border-zinc-700 text-3xl uppercase rotate-[45deg]'>
                            <span><IoIosArrowRoundUp /></span>
                        </div>
                    </div>

                    <div className='group flex items-center mt-2'>
                        <button className="relative px-4 py-1 border border-zinc-600 text-black rounded-4xl hover:bg-zinc-900 hover:text-white transition-all duration-500 ease-in-out  group">
                            Sales Deck
                        </button>
                        <div className='rounded-full hidden group-hover:block items-center justify-center w-8 h-8 border-1 border-zinc-700 text-3xl uppercase rotate-[45deg]'>
                            <span><IoIosArrowRoundUp /></span>
                        </div>
                    </div>


                </div>

                <div className={`w-[40%] flex flex-col`}>
                    <h1>William Barnes</h1>
                    <img className='w-30 h-30 mt-8 rounded-lg'
                        src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png"
                        alt="image" />
                    <p className='mr-[3vw] mt-4'>
                        They were transparent about the time and the stages of the project.
                        The end product is high quality, and I feel confident about how they
                        were handholding the client through the process. I feel like I can
                        introduce them to someone who needs to put a sales deck together from scratch,
                        and they would be able to handhold the client experience from 0 to 100 very effectively
                        from story to design. 5/5</p>
                </div>
            </div>

            <div className="flex gap-4 mt-[4vw] w-full h-[400px] p-4 bg-[#F5F5F5] transition-all duration-500">
                {boxes.map((box, i) => (
                    <div
                        key={i}
                        onMouseEnter={() => setActive(i)}
                        onMouseLeave={() => setActive(0)} // first box default
                        className={` justify-center items-center rounded-2xl transition-all duration-500 cursor-pointer ${active === i ? "w-1/2" : "w-1/4"
                            } ${box.color}`}
                    >
                        <h1 className={`text-6xl text-center mt-[10vw] font-semibold ${box.textColor}`}>{box.title}
                      
                        </h1>
                        <p className={` text-sm ml-[2vw] font-[r-neue] mt-[8vw] opacity-60 ${box.textColor}`}>
                            {i === 0
                                ? "©2019–2025"
                                : i === 1
                                    ? "RATING 5.0 ON CLUTCH"
                                    : "BUSINESS BOOTCAMP ALUMNI"}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Reviews

