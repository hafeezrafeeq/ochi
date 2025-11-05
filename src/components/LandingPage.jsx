import { motion } from "motion/react"
import React from 'react'
import { IoIosArrowRoundUp } from "react-icons/io";



function LandingPage() {
    return (
        <div data-scroll data-scroll-speed='.2' data-scroll-section
        className='LandingPage relative  h-screen bg-zinc-900'>
            <div className='px-6 md:px-12 lg:px-14 pt-40'>
                {["We create", "eye-opening", "presentations"].map((item, index) => (

                    <div className='heading flex items-center' key={index}>

                        {index === 1 && (
                            <motion.img   
                            initial={{width:0}}
                            animate={{width:"8.5vw"}}
                            transition={{ease:[0.76, 0, 0.24, 1], duration:2}}                            
                            src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                            className="w-[8.5vw] h-[5.4vw] mr-[0.5vw] object-cover overflow-hidden relative top-[0.4vw] rounded-md">                                
                             </motion.img>
                        )}

                        <h1 className="font-[founders] text-[8.5vw] leading-[6vw] uppercase">
                            {item}
                        </h1>

                        {/* Agar second item hai to green box render karo */}
                    </div>
                ))}
            </div>






            {/* heading */}
            <div className='px-6 md:px-12 lg:px-14 border-t-2 border-zinc-700 lg:flex md:flex-none md:items-center justify-between  items-center mt-[7vw]'>
                {["Presentation and storytelling agency", "For innovation teams and global brands"].map((item, index) => (
                    <div className='heading-items' key={index}>
                        <p className="mt-3 font-thin text-md">{item}</p>
                    </div>
                ))}

                <div className='flex items-center mt-4'>
                    <h1 className='px-4 p-2 border-2 font-[neue] rounded-4xl border-zinc-400'> START THE PROJECT </h1>
                    <div className='rounded-full border-2 w-10 h-10 border-zinc-400 text-4xl uppercase rotate-[45deg]'>
                        <span><IoIosArrowRoundUp /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
