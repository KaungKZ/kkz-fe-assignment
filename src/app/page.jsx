"use client";

import Marquee from "@/src/components/Marquee";
import Footer from "@/src/components/Footer";
import { useCases } from "@/src/hooks/useCases";
import Image from "next/image";
import clsx from "clsx";

export default function Home() {
  const { data, isLoading, isError } = useCases();

  return (
    <>
      <main className="relative z-10 bg-white mb-[500px] shadow-2xl rounded-b-[3rem]">
        <div className="pt-20 pb-10">
          <Marquee />
        </div>

        <div className="container mx-auto px-4 py-24 min-h-screen">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-bold text-black">Selected Works</h2>
            <p className="text-gray-500">2024 — 2026</p>
          </div>

          {isLoading && (
            <div className="text-center py-20 text-black">Loading cases...</div>
          )}
          {isError && (
            <div className="text-center py-20 text-red-500">
              Failed to load data.
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {data?.map((item, index) => (
              <div
                key={item.id}
                className={clsx(
                  "group cursor-pointer interactive",
                  index % 2 === 1 ? "md:mt-24" : "",
                )}
              >
                <div className="relative h-[60vh] w-full overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={item.download_url}
                    alt={item.author}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="mt-6 flex justify-between items-center border-b border-gray-200 pb-4 group-hover:border-black transition-colors duration-300">
                  <div className="text-black">
                    <h3 className="text-2xl font-semibold">{item.author}</h3>
                    <p className="text-sm text-gray-500">Web Development</p>
                  </div>
                  <div className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all duration-300">
                    ↗
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
