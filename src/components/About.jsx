import React from 'react'
import { IoIosArrowRoundUp } from "react-icons/io";

function About() {
    return (
        <div className='bg-[#cdea68] text-zinc-900 font-[r-neue]'>
            <h1 className='p-[4vw] pt-[6vw] text-[3vw] border-b-1 leading-12'>
                We craft category-defining presentations, brand <br />
                identities, and digital experiences that <span className='underline decoration-2 underline-offset-8'>drive funding,<br />sales, </span>
                and  <span className='underline decoration-2 underline-offset-8'>market leadership</span> .
            </h1>

            <div className='flex justify-center pt-[2vw] px-6 md:px-12 lg:px-14'>
                <h1 className=' text-lg w-[50%]'>What you can expect:</h1>

                <div className='w-[25%]'>
                    <p className=' w-[70%]'>We don't just make slides. We shape strategy, storytelling,
                        design scalable brand systems, and build presentations
                        that make people say: "I want in!"
                    </p>

                    <p className='pt-[2vw] w-[70%]'>Our clients make the world go round – from deep tech, aerospace
                        and robotics to music festivals and Michelin-starred restaurants.
                    </p>

                    <p className='pt-[2vw] w-[70%]'>Since 2019, we've been the go-to partner for Yahoo,
                        Medallia, Uber, Lexus, Salience Labs, Trawa and AllThingsGo.
                    </p>


                </div>

                <div className={`w-[25%] flex flex-col`}>
                    {["Social Link", "Linkedin", "Facebook", "Behance", "Linkedin"].map(
                        (item, index) => (
                            <a
                                key={index}
                                href="#"
                                className={`hover:text-gray-300 transition  underline ${index == 0 && "mb-[2vw] none-underline"}`}
                            >
                                {item}
                            </a>
                        )
                    )}
                </div>
            </div>

            <div className='flex justify-between px-6 md:px-12 lg:px-14 mt-10 p-10 border-y-1 border-black'>

                <div>
                    <h1 className='text-[3vw] '>How we can help:</h1>
                    <button className='btn-hover bg-zinc-900 text-white flex items-center rounded-4xl py-4 px-4 '>
                        <h1>READ MORE </h1>
                        <div className=' circle w-2 h-2 flex items-center rounded-full bg-white rotate-45 ml-[2vw]'>
                            <IoIosArrowRoundUp  className='erow text-sm text-white'/>
                        </div>
                    </button>
                </div>

                <img className='w-[50%]' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="image" />

            </div>



        </div>
    )
}

export default About
