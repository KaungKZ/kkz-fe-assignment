"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    const moveCursor = (e) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0 });
      gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.15 });
    };

    const onHover = () => {
      gsap.to(cursor, { scale: 0, duration: 0.2 });
      gsap.to(follower, {
        scale: 3,
        backgroundColor: "rgba(0,0,0,0.1)",
        borderWidth: 0,
        duration: 0.2,
      });
    };

    const onLeave = () => {
      gsap.to(cursor, { scale: 1, duration: 0.2 });
      gsap.to(follower, {
        scale: 1,
        backgroundColor: "transparent",
        borderWidth: "1px",
        duration: 0.2,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    const setupInteractions = () => {
      const interactives = document.querySelectorAll("a, button, .interactive");
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", onHover);
        el.addEventListener("mouseleave", onLeave);
      });
      return interactives;
    };

    let interactives = setupInteractions();

    const observer = new MutationObserver(() => {
      interactives = setupInteractions();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      observer.disconnect();
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onHover);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-black rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border border-black rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-colors"
      />
    </>
  );
}
