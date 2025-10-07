import React, { useEffect } from "react";
import { useState } from "react";

const Eyes = () => {

    const [rotate, setRotate] = useState(0);
    useEffect(() => {
        const handleMouseMove = (e) => {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            const deltaX = mouseX - centerX;
            const deltaY = mouseY - centerY;

            const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);

        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);



    return (
        <div className="bg-[#cdea68] h-screen overflow-hidden flex items-center justify-center p-8 cover bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')] rounded-lg">
            <div className="w-[15vw] h-[15vw] bg-white rounded-full mx-2 flex items-center justify-center">
                <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className="w-2/4 h-2/4 top-1/2 left-1/2  relative -translate-x-[50%] -translate-y-[50%] bg-black rounded-full flex items-center">
                    <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className=" absolute top-1/2 left-2 ">
                        <div className="w-6 h-6 rounded-full bg-white"></div>
                    </div>
                </div>
            </div>
            <div className="w-[15vw] h-[15vw] bg-white rounded-full mx-2 flex items-center justify-center">
                <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className="w-2/4 h-2/4 top-1/2 left-1/2  relative -translate-x-[50%] -translate-y-[50%] bg-black rounded-full flex items-center">
                    <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className=" absolute top-1/2 left-2 ">
                        <div className="w-6 h-6 rounded-full bg-white"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Eyes;