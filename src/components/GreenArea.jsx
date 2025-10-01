import React from 'react'
import { motion } from "motion/react"

function GreenArea() {
  return (
    <div className='greenAria bg-[#004d43] h-[31.5vw] scroll-auto overflow-hidden whitespace-nowrap flex  items-center'>
        <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat:Infinity , duration:5}} className='font-[founders] pb-[4vw] mt-[4vw] h-[24vw] text-[24vw] leading-[22vw] pl-[2vw] border-green-200 border-y-2'>WE ARE OCHI</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat:Infinity , duration:5}} className='font-[founders] pb-[4vw] mt-[4vw] h-[24vw] text-[24vw] leading-[22vw] pl-[2vw] border-green-200 border-y-2'>WE ARE OCHI</motion.h1>      
        <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat:Infinity , duration:5}} className='font-[founders] pb-[4vw] mt-[4vw] h-[24vw] text-[24vw] leading-[22vw] pl-[2vw] border-green-200 border-y-2'>WE ARE OCHI</motion.h1>
    </div>
  )
}

export default GreenArea
