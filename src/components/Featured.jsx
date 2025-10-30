
import React from 'react'
import { motion } from "motion/react"

function Featured({ image1, image2, whiteDoth1, whiteDoth2, className = "", animyText1, animyText2, }) {

    return (
        <div

            className='w-full px-6 z-50 md:px-12 lg:px-14 font-[r-neue] pt-10 pb-30 bg-[#b2b2b2] text-black '>
            <h1 className={`text-[4vw] mb-6   py-4 border-b-2  border-[#b2b2b2] ${className}`}>Featured Project</h1>


            <div className='w-full relative flex gap-2'>


                <div className=' w-[50%] h-[40vw]  rounded-2xl'>

                    <div className='group'>

                        <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 
                -translate-y-1/2 text-[6vw] text-[#cdea68] font-bold text-center z-[999] hidden  group-hover:block'>{animyText1}</h1>

                        <div className='flex items-center py-4'>
                            <div className='w-3 h-3 mr-[0.5vw] rounded-full bg-[#212121]'></div>
                            <h1>{whiteDoth1}</h1>
                        </div>
                        <img className={` rounded-2xl transform w-[45vw] group h-[38vw]  transition-transform duration-800 ease-in-out hover:scale-95`}
                            src={image1} alt="image" />
                    </div>


                    <div className='flex  gap-2'>

                        <button className="relative px-6 py-1 mt-6 border border-zinc-600 text-black rounded-4xl overflow-hidden group">
                            <span className="absolute left-0 bottom-0 w-full h-0 rounded-t-4xl bg-black 
                              transition-all duration-500 ease-in-out group-hover:h-19"></span>
                            <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                                MORE DETAILS
                            </span>
                        </button>

                        <button className="relative px-6 py-1 mt-6 border border-zinc-600 text-black rounded-4xl overflow-hidden group">
                            <span className="absolute left-0 bottom-0 w-full h-0 rounded-t-4xl bg-black 
                              transition-all duration-500 ease-in-out group-hover:h-19"></span>
                            <span className="relative uppercase z-10 group-hover:text-white transition-colors duration-500">
                                VIEW PROJECT
                            </span>
                        </button>

                    </div>
                </div>

                <div className='w-[50%] h-[40vw] rounded-2xl'>

                    <div className='group'>

                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}      
                            animate={{ opacity: 10, y: 0 }}    
                            transition={{ duration: 1, ease: "easeOut" }} 
                            className='absolute top-1/2 left-1/2 transform  -translate-x-1/2 
                -translate-y-1/2  text-[6vw] text-[#cdea68] font-bold text-center z-[999] hidden  group-hover:block'>{animyText2}</motion.h1>

                        <div className='flex items-center py-4'>
                            <div className='w-3 h-3 mr-[0.5vw] rounded-full bg-[#212121]'></div>
                            <h1>{whiteDoth2}</h1>
                        </div>
                        <img className={`rounded-2xl w-[45vw] h-[38vw] transform transition-transform duration-800 ease-in-out hover:scale-95`}
                            src={image2} alt="image" />
                    </div>
                    <div className='flex gap-2'>
                        <button className="relative px-6 py-1 mt-6 border border-zinc-600 text-black rounded-4xl overflow-hidden group">
                            <span className="absolute left-0 bottom-0 w-full h-0 rounded-t-4xl bg-black 
                              transition-all duration-500 ease-in-out group-hover:h-19"></span>
                            <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                                MORE DETAILS
                            </span>
                        </button>

                        <button className="relative px-6 py-1 mt-6 border border-zinc-600 text-black rounded-4xl overflow-hidden group">
                            <span className="absolute left-0 bottom-0 w-full h-0 rounded-t-4xl bg-black 
                              transition-all duration-500 ease-in-out group-hover:h-19"></span>
                            <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                                VIEW PROJECT
                            </span>
                        </button>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Featured
