import React from 'react'
import { motion } from "motion/react"
import { div } from 'framer-motion/client'

function GreenArea() {
  return (
    <div className='bg-zinc-900'>
      <div data-scroll data-scroll-speed='0.8' data-scroll-section
        className='greenAria rounded-tl-4xl rounded-tr-4xl bg-[#004d43] h-[31.5vw] scroll-auto overflow-hidden whitespace-nowrap flex  items-center'>
        <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 8 }}
          className='font-[founders] pb-[6vw] mt-[1.5vw] h-[24vw] text-[24vw] leading-[18vw] pl-[2vw] border-green-200 border-y-2'>WE ARE OCHI</motion.h1>
        <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 8 }}
          className='font-[founders] pb-[6vw] mt-[1.5vw] h-[24vw] text-[24vw] leading-[18vw] pl-[2vw] border-green-200 border-y-2'>WE ARE OCHI</motion.h1>
        <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 8 }}
          className='font-[founders] pb-[6vw] mt-[1.5vw] h-[24vw] text-[24vw] leading-[18vw] pl-[2vw] border-green-200 border-y-2'>WE ARE OCHI</motion.h1>
      </div>
    </div>
  )
}

export default GreenArea
