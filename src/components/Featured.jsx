import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Featured({
  image1,
  image2,
  whiteDoth1,
  whiteDoth2,
  className = "",
  animyText1 = "HOVER LEFT",
  animyText2 = "HOVER RIGHT",
}) {
  //  Refs for both sides
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);

  // 🟢 LEFT side animation
  useGSAP(() => {
    const letters = leftTextRef.current.querySelectorAll(".char-left");

    const tl = gsap.timeline({ paused: true });
    tl.fromTo(
      letters,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.05,
      }
    );

    leftTextRef.current.addEventListener("mouseenter", () => tl.play());
    leftTextRef.current.addEventListener("mouseleave", () => tl.reverse());
  }, []);


  useGSAP(() => {
    const letters = rightTextRef.current.querySelectorAll(".char-right");

    const tl = gsap.timeline({ paused: true });
    tl.fromTo(
      letters,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.05,
      }
    );

    rightTextRef.current.addEventListener("mouseenter", () => tl.play());
    rightTextRef.current.addEventListener("mouseleave", () => tl.reverse());
  }, []);


  const splitTextLeft = animyText1.split("").map((char, i) => (
    <span key={i} className="char-left inline-block">
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  const splitTextRight = animyText2.split("").map((char, i) => (
    <span key={i} className="char-right inline-block">
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  return (
    <div className="w-full px-6 z-50 md:px-12 lg:px-14 font-[r-neue] pt-10 pb-30 bg-[#f1f1f1] text-black">
      <h1
        className={`text-[4vw] mb-6 py-4 border-b-2 border-[#b2b2b2] ${className}`}
      >
        Featured Project
      </h1>

      <div className="w-full relative flex gap-2">
        {/* LEFT CARD */}
        <div className="w-[50%] h-[40vw] rounded-2xl ">
          <div className="group " ref={leftTextRef}>
            {/* Animated Text */}
            <h1
              className="textAnimation absolute top-1/2 left-1/2 transform -translate-x-1/2 
                -translate-y-1/2 text-[6vw] text-[#cdea68] font-[founders] font-bold text-center z-[999] hidden group-hover:inline-block"
            >
              {splitTextLeft}
            </h1>

            {/* Label */}
            <div className="flex items-center py-4">
              <div className="w-3 h-3 mr-[0.5vw] rounded-full bg-[#212121]"></div>
              <h1>{whiteDoth1}</h1>
            </div>

            {/* Image */}
            <img
              className="rounded-2xl transform w-[45vw] h-[38vw] transition-transform duration-800 ease-in-out hover:scale-95"
              src={image1}
              alt="image"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-2 mt-6">
            <button className="relative px-6 py-1 border border-zinc-600 text-black rounded-4xl overflow-hidden group">
              <span className="absolute left-0 bottom-0 w-full h-0 rounded-t-4xl bg-black transition-all duration-500 ease-in-out group-hover:h-19"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                MORE DETAILS
              </span>
            </button>

            <button className="relative px-6 py-1 border border-zinc-600 text-black rounded-4xl overflow-hidden group">
              <span className="absolute left-0 bottom-0 w-full h-0 rounded-t-4xl bg-black transition-all duration-500 ease-in-out group-hover:h-19"></span>
              <span className="relative uppercase z-10 group-hover:text-white transition-colors duration-500">
                VIEW PROJECT
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="w-[50%] h-[40vw] rounded-2xl">
          <div className="group " ref={rightTextRef}>
            <h1
              className="textAnimation absolute top-1/2 left-1/2 transform -translate-x-1/2 
                -translate-y-1/2 text-[6vw] text-[#cdea68] font-[founders] font-bold text-center z-[999] hidden group-hover:inline-block"
            >
              {splitTextRight}
            </h1>

            <div className="flex items-center py-4">
              <div className="w-3 h-3 mr-[0.5vw] rounded-full bg-[#212121]"></div>
              <h1>{whiteDoth2}</h1>
            </div>

            <img
              className="rounded-2xl w-[45vw] h-[38vw] transform transition-transform duration-800 ease-in-out hover:scale-95"
              src={image2}
              alt="image"
            />
          </div>

          <div className="flex gap-2 mt-6">
            <button className="relative px-6 py-1 border border-zinc-600 text-black rounded-4xl overflow-hidden group">
              <span className="absolute left-0 bottom-0 w-full h-0 rounded-t-4xl bg-black transition-all duration-500 ease-in-out group-hover:h-19"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                MORE DETAILS
              </span>
            </button>

            <button className="relative px-6 py-1 border border-zinc-600 text-black rounded-4xl overflow-hidden group">
              <span className="absolute left-0 bottom-0 w-full h-0 rounded-t-4xl bg-black transition-all duration-500 ease-in-out group-hover:h-19"></span>
              <span className="relative uppercase z-10 group-hover:text-white transition-colors duration-500">
                VIEW PROJECT
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
