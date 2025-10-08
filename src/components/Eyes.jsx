import React, { useEffect, useRef, useState } from "react";

const Eyes = () => {
    const eyeRefs = [useRef(null), useRef(null)];
    const [offsets, setOffsets] = useState([
        { x: 0, y: 0 },
        { x: 0, y: 0 },
    ]);




    useEffect(() => {
        const handleMouseMove = (e) => {
            const newOffsets = eyeRefs.map((ref) => {
                const el = ref.current;
                if (!el) return { x: 0, y: 0 };

                const rect = el.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                const dx = e.clientX - centerX;
                const dy = e.clientY - centerY;
                const distance = Math.hypot(dx, dy) || 0.0001;

                const eyeRadius = rect.width / 4;
                const pupilSize = rect.width * 0.35; // pupil = 35% of eye width
                const pupilRadius = pupilSize / 2;
                const maxDist = Math.max(0, eyeRadius - pupilRadius - 4); // keep a small padding

                const ratio = Math.min(1, maxDist / distance);

                return {
                    x: dx * ratio,
                    y: dy * ratio,
                };
            });

            setOffsets(newOffsets);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const [rotate, setRotate] = useState(0);
    useEffect(() => {
        const handleMouseRotate = (e) => {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            const deltaX = mouseX - centerX;
            const deltaY = mouseY - centerY;

            const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);

        };
        window.addEventListener("mousemove", handleMouseRotate);
        return () => window.removeEventListener("mousemove", handleMouseRotate);
    }, []);



    return (
        <div className="bg-[#cdea68] h-screen overflow-hidden flex items-center justify-center p-8 cover bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')] rounded-lg">
            {[0, 1].map((i) => (
                <div
                    key={i}
                    ref={eyeRefs[i]}
                    className="w-[15vw] h-[15vw] bg-white rounded-full mx-2 flex items-center justify-center relative"
                >
                    {/* Pupil */}
                    <div
                        style={{
                            // center at 50%/50% then shift by calculated offsets
                            transform: `translate(calc(-50% + ${offsets[i].x}px), calc(-50% + ${offsets[i].y}px))`,
                            transition: "transform 0.05s linear",
                            width: "60%",
                            height: "60%",
                        }}
                        className="absolute left-1/2 top-1/2  bg-black rounded-full pointer-events-none"
                    >
                        {/* highlight */}
                        <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className="w-1/6 h-1/6  rounded-full bg-white absolute right-12 top-1"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Eyes;