"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/src/lib/utils";
import Footer from "@/src/components/Footer";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SERVICES = [
  {
    title: "UI/UX Design",
    color: "bg-blue-600",
    desc: "Crafting intuitive interfaces.",
  },
  {
    title: "Development",
    color: "bg-purple-600",
    desc: "Robust front-end & back-end solutions.",
  },
  {
    title: "Marketing",
    color: "bg-orange-600",
    desc: "Data-driven growth strategies.",
  },
  {
    title: "Branding",
    color: "bg-emerald-600",
    desc: "Identity that speaks volumes.",
  },
];

const PROCESS = [
  {
    id: "01",
    title: "Discovery",
    desc: "We start by immersing ourselves in your business to understand your vision, goals, and target audience. This foundational step ensures every decision is backed by data and aligned with your objectives.",
    details: [
      "Stakeholder Interviews",
      "User Research & Personas",
      "Market & Competitor Analysis",
      "Problem Definition",
      "KPI Establishment",
    ],
  },
  {
    id: "02",
    title: "Strategy",
    desc: "We build a comprehensive roadmap that aligns design and technology with your long-term business objectives. We define the 'how' and 'why' before we move to the 'what'.",
    details: [
      "Brand Positioning",
      "Content Strategy",
      "Information Architecture",
      "User Experience Mapping",
      "Technology Stack Selection",
    ],
  },
  {
    id: "03",
    title: "Execution",
    desc: "Our team crafts pixel-perfect designs and writes clean, scalable code. We work in agile sprints, providing continuous updates and ensuring the final product is of the highest quality.",
    details: [
      "UI/UX Design & Prototyping",
      "Frontend Development",
      "Backend API Integration",
      "Quality Assurance (QA)",
      "Accessibility Compliance",
    ],
  },
  {
    id: "04",
    title: "Launch & Scale",
    desc: "We deploy with confidence and continue to optimize. Our partnership doesn't end at launch; we help you analyze performance and iterate for future growth.",
    details: [
      "Deployment Strategy",
      "Performance Monitoring",
      "A/B Testing & Iteration",
      "Feature Roadmap Planning",
      "Ongoing Support & Growth",
    ],
  },
];

export default function ServicesPage() {
  const containerRef = useRef(null);
  const textSectionRef = useRef(null);
  const textRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const cardsRef = useRef([]);
  const processRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (textSectionRef.current && textRef.current) {
        gsap.to(textRef.current, {
          backgroundPositionX: "0%",
          ease: "none",
          scrollTrigger: {
            trigger: textSectionRef.current,
            start: "top top",
            end: "+=200%",
            pin: true,
            scrub: 1,
          },
        });
      }

      if (cardsContainerRef.current) {
        cardsRef.current.forEach((card, index) => {
          if (index > 0) {
            gsap.set(card, {
              yPercent: 100,
              autoAlpha: 0,
              scale: 1,
              filter: "brightness(1)",
            });
          } else {
            gsap.set(card, {
              zIndex: index,
              filter: "brightness(1)",
              scale: 1,
            });
          }
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: cardsContainerRef.current,
            start: "top top",
            end: () => `+=${window.innerHeight * 3}`,
            pin: true,
            scrub: 1,
          },
        });

        cardsRef.current.forEach((card, index) => {
          if (index === 0) return;

          tl.fromTo(
            card,
            {
              yPercent: 100,
              autoAlpha: 0,
              filter: "brightness(1)",
            },
            {
              yPercent: 0,
              autoAlpha: 1,
              filter: "brightness(1)",
              duration: 1,
              ease: "none",
            },
          );

          if (index > 0) {
            tl.to(
              cardsRef.current[index - 1],
              {
                scale: 0.95,
                filter: "brightness(0.9)",
                duration: 1,
                ease: "none",
              },
              "<",
            );
          }
        });
      }

      processRefs.current.forEach((el, index) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <main
        ref={containerRef}
        className="relative z-10 bg-black min-h-screen text-white mb-96 md:mb-[500px] shadow-2xl"
      >
        <section
          className="min-h-[60vh] md:min-h-[80vh] flex items-center justify-center py-16 md:py-24"
          ref={textSectionRef}
        >
          <h2
            ref={textRef}
            className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight max-w-4xl text-center px-6"
            style={{
              backgroundImage: "linear-gradient(to right, white 50%, #333 50%)",
              backgroundSize: "200% 100%",
              backgroundPositionX: "75%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            We build digital products that help brands grow, evolve, and stand
            out in the modern world.
          </h2>
        </section>

        <section
          ref={cardsContainerRef}
          className="h-screen flex flex-col items-center justify-center relative overflow-hidden"
        >
          <div className="absolute top-10 text-white text-center z-10">
            <h3 className="text-sm md:text-xl uppercase tracking-widest opacity-50">
              Our Capabilities
            </h3>
          </div>

          <div className="relative w-[90%] md:w-full max-w-4xl h-[50vh] md:h-[60vh]">
            {SERVICES.map((service, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className={cn(
                  "absolute top-0 left-0 w-full h-full rounded-3xl p-6 md:p-12 flex flex-col justify-between text-white shadow-2xl origin-top will-change-transform",
                  service.color,
                )}
                style={{
                  zIndex: index + 10,
                }}
              >
                <div>
                  <h2 className="text-3xl md:text-6xl font-bold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg md:text-2xl opacity-80">
                    {service.desc}
                  </p>
                </div>
                <div className="text-5xl md:text-9xl font-bold opacity-20 self-end">
                  0{index + 1}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 md:py-32 w-full bg-[#5727e9]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16 md:space-y-32">
            {PROCESS.map((step, index) => (
              <div
                key={step.id}
                ref={(el) => (processRefs.current[index] = el)}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 items-start"
              >
                <div>
                  <h3 className="text-3xl md:text-5xl font-bold text-cyan-400 uppercase mb-4 md:mb-8">
                    {step.title}
                  </h3>
                  <p className="text-white text-base md:text-lg leading-relaxed opacity-90">
                    {step.desc}
                  </p>
                </div>

                <div>
                  <h4 className="text-cyan-400 uppercase tracking-wider font-semibold mb-4 md:mb-6">
                    Service Detail
                  </h4>
                  <ul className="space-y-2 md:space-y-3">
                    {step.details.map((detail, i) => (
                      <li
                        key={i}
                        className="text-white text-base md:text-lg opacity-90"
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {index + 1 !== PROCESS.length && (
                  <div className="border-white/20 border-t my-4 col-span-1 md:col-span-2"></div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
