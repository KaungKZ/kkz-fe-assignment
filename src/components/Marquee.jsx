"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Marquee() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".marquee-wrapper", {
        xPercent: -50,
        repeat: -1,
        duration: 10,
        ease: "linear",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex overflow-hidden py-10 border-b border-gray-200 interactive"
    >
      <div className="marquee-wrapper flex whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <h1
            key={i}
            className="text-[10vw] font-bold uppercase leading-none px-4"
          >
            Case Studies <span className="text-gray-400">—</span> OneNex{" "}
            <span className="text-gray-400">—</span>
          </h1>
        ))}
      </div>
    </div>
  );
}
