
import React from 'react'

function Featured({ image, whiteDoth, btnText, btnTextTwo, className = "" }) {

    return (
        <div className='w-full px-6 md:px-12 lg:px-14 font-[r-neue] py-20 text-black bg-[#f1f1f1] ${className}'>
            <h1 className={`text-[4vw]  pb-4x border-b-2  border-[#b2b2b2] ${className}`}>Featured projects</h1>
            <div className='w-full py-10 flex   gap-6'>
                <div className='w-[50%] h-[40vw] rounded-2xl'>
                    <div className='flex items-center py-4'>
                        <div className='w-3 h-3 mr-[0.5vw] rounded-full bg-[#212121]'></div>
                        <h1>{whiteDoth}</h1>
                    </div>
                    <img className={`rounded-2xl transform transition-transform duration-800 ease-in-out hover:scale-95`}
                        src={image} alt="image" />
                    <div>
                        <button className="relative px-6 py-2 mt-6 border border-zinc-600 text-black rounded-4xl overflow-hidden group">
                            <span className="absolute left-0 bottom-0 w-full h-0 rounded-t-4xl bg-black 
                              transition-all duration-500 ease-in-out group-hover:h-19"></span>
                            <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                                {btnText}
                            </span>
                        </button>

                        <button className="relative px-6 py-2 mt-6 border border-zinc-600 text-black rounded-4xl overflow-hidden group">
                            <span className="absolute left-0 bottom-0 w-full h-0 rounded-t-4xl bg-black 
                              transition-all duration-500 ease-in-out group-hover:h-19"></span>
                            <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                                {btnTextTwo}
                            </span>
                        </button>

                    </div>
                </div>

                <div className='w-[50%] h-[40vw] rounded-2xl'>
                    <div className='flex items-center py-4'>
                        <div className='w-3 h-3 mr-[0.5vw] rounded-full bg-[#212121]'></div>
                        <h1>{whiteDoth}</h1>
                    </div>
                    <img className={`rounded-2xl transform transition-transform duration-800 ease-in-out hover:scale-95`}
                        src={image} alt="image" />
                    <div>
                        <button className="relative px-6 py-2 mt-6 border border-zinc-600 text-black rounded-4xl overflow-hidden group">
                            <span className="absolute left-0 bottom-0 w-full h-0 rounded-t-4xl bg-black 
                              transition-all duration-500 ease-in-out group-hover:h-19"></span>
                            <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                                {btnText}
                            </span>
                        </button>

                        <button className="relative px-6 py-2 mt-6 border border-zinc-600 text-black rounded-4xl overflow-hidden group">
                            <span className="absolute left-0 bottom-0 w-full h-0 rounded-t-4xl bg-black 
                              transition-all duration-500 ease-in-out group-hover:h-19"></span>
                            <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                                {btnTextTwo}
                            </span>
                        </button>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Featured
