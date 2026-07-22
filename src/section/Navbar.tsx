"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const menu = [
  { name: "Home", dropdown: true },
  { name: "About Us", dropdown: true },
  { name: "Services", dropdown: true },
  { name: "Project", dropdown: true },
  { name: "Blog", dropdown: true },
  { name: "Contact", dropdown: false },
];

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0  z-50">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="flex h-24 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Hassan"
              width={120}
              height={120}
              priority
              className=" bg-cover bg-center rounded-full"
            />

            <div>
              <h2 className="text-[30px] font-bold tracking-tight">
                Hassan
              </h2>

              <p className="text-xs text-zinc-500 -mt-1">
                Full-Stack Developer
              </p>
            </div>

          </Link>

          {/* Navigation */}
          <nav className="hidden xl:block">
            <ul className="flex items-center gap-12">
              {menu.map((item, index) => (
                <li key={item.name} className="relative">
                  <Link
                    href="#"
                    className="group flex items-center gap-1 text-[13px] font-semibold uppercase tracking-[0.22em] text-[#111] transition-colors duration-300 hover:text-[#ff7a1a]"
                  >
                    {item.name}

                    {item.dropdown && (
                      <ChevronDown
                        size={14}
                        strokeWidth={2}
                        className="transition-transform duration-300 group-hover:rotate-180"
                      />
                    )}
                  </Link>

                  {index === 0 && (
                    <span className="absolute left-1/2 top-9 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#ff7a1a]" />
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <button className="
px-7
py-3
rounded-xl
bg-black
text-white
font-semibold
transition-all
duration-300
hover:bg-[#FF7A1A]
hover:-translate-y-1
hover:shadow-xl
hover:shadow-orange-300/30
">
            Download CV
          </button>
        </div>
      </div>
    </header>
  );
}