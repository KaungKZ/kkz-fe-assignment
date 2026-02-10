import Link from "next/link";
import { cn } from "@/src/lib/utils";

const NAV_LINKS = [
  { href: "/services", label: "Work" },
  { href: "/services", label: "Services" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 mix-blend-difference text-white">
      <Link href="/" className="text-2xl font-bold tracking-tighter uppercase">
        OneNex<span className="opacity-50">Clone</span>
      </Link>

      <div className="flex gap-8">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-sm font-medium uppercase tracking-widest hover:underline decoration-1 underline-offset-4"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
