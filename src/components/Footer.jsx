import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full h-[500px] bg-zinc-900 text-white flex flex-col justify-center items-center -z-10">
      <h2 className="text-6xl font-bold mb-8">Let's Create Together</h2>

      <div className="flex gap-4">
        <Link
          href="/services"
          className="px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-colors interactive"
        >
          Contact Us
        </Link>
        <Link
          href="/services"
          className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors interactive"
        >
          View Services
        </Link>
      </div>

      <div className="absolute bottom-10 text-sm opacity-50">
        © 2026 OneNex Clone.
      </div>
    </footer>
  );
}
