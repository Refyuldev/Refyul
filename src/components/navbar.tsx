import Image from "next/image";
import logo from "@/assets/logo.webp";

export default function Navbar() {
  return (
    <nav className="w-full bg-background border-b border-b-[#747474] md:py-6 py-5 md:px-8 px-4 flex justify-between items-center">
      <div className="flex justify-start items-center gap-4">
        <Image
          alt="logo"
          src={logo}
          width={36}
          height={52}
          className="w-full md:max-w-[36px] max-w-[24px] object-contain"
        />
        <p className="md:text-4xl text-2xl font-bold text-primary">Refyul</p>
      </div>
      <button className="md:text-base text-sm font-medium text-white bg-primary rounded-lg md:p-4 p-2 cursor-pointer">
        Join the waitlist
      </button>
    </nav>
  );
}
