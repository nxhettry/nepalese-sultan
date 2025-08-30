"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

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
                className={` hover:text-orange-700 px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === "/" ? "text-orange" : "text-white"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={` hover:text-orange-700 px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === "/about" ? "text-orange" : "text-white"
                }`}
              >
                About Us
              </Link>
              <Link
                href="/products"
                className={` hover:text-orange-700 px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === "/products" ? "text-orange" : "text-white"
                }`}
              >
                Products
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <Button
              variant="outline"
              className="cursor-pointer border-red-500 text-white hover:bg-orange-600 bg-orange-700 tracking-wider"
            >
              Order Now
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="text-orange hover:text-orange-700"
            >
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
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
