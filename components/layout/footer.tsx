import Image from "next/image";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative flex flex-col justify-between items-center gap-3 w-full pb-4 bg-orange-50">
      <div
        className="pointer-events-none select-none absolute inset-0 z-0 bg-[url('/logo-gap.png')] bg-repeat bg-[length:120px_120px] opacity-10"
        aria-hidden="true"
      />

      <Image
        src="/logo.png"
        alt="Logo"
        width={150}
        height={150}
        className="object-contain scale-150"
      />

      <p className="text-green">
        @ {new Date().getFullYear()} Nepalese Sultan Butcher. All rights
        reserved.
      </p>

      <div className="flex justify-center items-center gap-4">
        <FaFacebookF className="text-green hover:text-gray-700 transition-colors cursor-pointer hover:scale-110" />
        <FaXTwitter className="text-green hover:text-gray-700 transition-colors cursor-pointer hover:scale-110" />
        <FaInstagram className="text-green hover:text-gray-700 transition-colors cursor-pointer hover:scale-110" />
      </div>
    </footer>
  );
}
