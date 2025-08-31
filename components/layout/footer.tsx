import Image from "next/image";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-between items-center gap-3 w-full pb-4">
      <Image
        src="/logo.png"
        alt="Logo"
        width={150}
        height={150}
        className="object-contain scale-150"
      />

      <p className="text-gray-500">
        @ {new Date().getFullYear()} Nepalese Sultan Butcher. All rights
        reserved.
      </p>

      <div className="flex justify-center items-center gap-4">
        <FaFacebookF className="text-gray-500 hover:text-gray-700 transition-colors cursor-pointer hover:scale-110" />
        <FaXTwitter className="text-gray-500 hover:text-gray-700 transition-colors cursor-pointer hover:scale-110" />
        <FaInstagram className="text-gray-500 hover:text-gray-700 transition-colors cursor-pointer hover:scale-110" />
      </div>
    </footer>
  );
}
