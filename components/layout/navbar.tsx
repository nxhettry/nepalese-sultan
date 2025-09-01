"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative w-full bg-transparent">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              height={100}
              width={100}
              alt="Nepalese Sultan Butcher"
              className="scale-150 h-24"
              draggable={false}
            />
          </div>

          <div className="hidden md:block">
            <div className="ml-10 font-montse font-bold flex items-baseline space-x-8">
              <Link
                href="/"
                className={` hover:text-orange-700 px-3 py-2 text-base font-medium transition-colors ${
                  pathname === "/" ? "text-orange border-b-2 border-orange-600 rounded-b-xl" : "text-white"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={` hover:text-orange-700 px-3 py-2 text-base font-medium transition-colors ${
                  pathname === "/about" ? "text-orange border-b-2 border-orange-600 rounded-b-xl" : "text-white"
                }`}
              >
                About Us
              </Link>
              <Link
                href="/products"
                className={` hover:text-orange-700 px-3 py-2 text-base font-medium transition-colors ${
                  pathname === "/products" ? "text-orange border-b-2 border-orange-600 rounded-b-xl" : "text-white"
                }`}
              >
                Products
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <Button
              variant="outline"
              className=" cursor-pointer btn-glow border-none text-white hover:bg-orange-600 bg-orange-700 tracking-wider"
            >
              Contact Us
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="text-orange hover:text-orange-700"
              aria-label="Open menu"
              onClick={() => setIsOpen((open) => !open)}
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/80 flex flex-col items-center justify-center space-y-8 animate-fade-in">
          <button
            className="absolute top-4 right-4 p-2 rounded-full text-white hover:bg-white/10 focus:outline-none"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <Link
            href="/"
            className={`text-2xl font-bold font-montse px-4 py-2 rounded transition-colors ${
              pathname === "/" ? "text-orange" : "text-white"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-2xl font-bold font-montse px-4 py-2 rounded transition-colors ${
              pathname === "/about" ? "text-orange" : "text-white"
            }`}
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/products"
            className={`text-2xl font-bold font-montse px-4 py-2 rounded transition-colors ${
              pathname === "/products" ? "text-orange" : "text-white"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          <Button
            variant="outline"
            className="w-48 border-none rounded-b-xl text-white hover:bg-orange-600 bg-orange-700 tracking-wider font-montse text-lg"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Button>
        </div>
      )}
    </nav>
  );
}
