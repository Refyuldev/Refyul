"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/logo.webp";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full sm:pt-12 pt-5 sm:pb-8 pb-4 sm:px-8 px-4 relative">
      <nav className="w-full flex justify-between items-center gap-3 max-w-[1442px] mx-auto relative z-20">
        <div className="flex justify-start items-center gap-3">
          <Image
            src={logo}
            alt="logo"
            width={37}
            height={52}
            className="w-full md:max-w-[37px] max-w-[24px] object-contain"
          />
          <p className="md:text-4xl text-2xl font-bold font-montserrat text-primary">
            Refyul
          </p>
        </div>

        <div className="hidden lg:flex justify-center items-center gap-6">
          <a
            href="#service"
            className="text-lg font-normal text-black outline-none"
          >
            Our Service
          </a>
          <a
            href="#works"
            className="text-lg font-normal text-black outline-none"
          >
            How it Works
          </a>
          <a
            href="#coverage"
            className="text-lg font-normal text-black outline-none"
          >
            Coverage
          </a>
          <a
            href="#faq"
            className="text-lg font-normal text-black outline-none"
          >
            FAQs
          </a>
        </div>

        <div className="hidden lg:flex justify-start items-center gap-6">
          <Link
            href="https://wa.me/2348023700625?text=Hi%20Teni%2C%20I%20want%20to%20order%20fuel"
            className="bg-primary rounded-full text-white md:py-2.5 py-1.5 md:px-5 px-3 md:text-lg text-base font-bold font-nunito btn-shadow outline-none"
            target="_blank"
          >
            Order on WhatsApp
          </Link>
          <Link
            href="/"
            className="rounded-full text-[#234D10] md:py-2.5 py-1.5 md:px-5 px-3 md:text-lg text-base font-bold font-nunito outline-none"
          >
            Become a vendor
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center p-2 rounded-full border border-[#D1D5DB] bg-white cursor-pointer outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close mobile menu" : "Open mobile menu"}
        >
          {menuOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </nav>

      {menuOpen && (
        <div className="lg:hidden absolute z-30 left-4 right-4 mt-4 bg-white rounded-2xl border border-[#E5E7EB] shadow-lg p-5">
          <div className="flex flex-col gap-4">
            <a
              href="#service"
              className="text-lg font-normal text-black"
              onClick={() => setMenuOpen(false)}
            >
              Our Service
            </a>
            <a
              href="#works"
              className="text-lg font-normal text-black"
              onClick={() => setMenuOpen(false)}
            >
              How it Works
            </a>
            <a
              href="#coverage"
              className="text-lg font-normal text-black"
              onClick={() => setMenuOpen(false)}
            >
              Coverage
            </a>
            <a
              href="#faq"
              className="text-lg font-normal text-black"
              onClick={() => setMenuOpen(false)}
            >
              FAQs
            </a>
            <div className="flex flex-col gap-3 pt-4 border-t border-[#E5E7EB]">
              <Link
                href="https://wa.me/2348023700625?text=Hi%20Teni%2C%20I%20want%20to%20order%20fuel"
                className="bg-primary rounded-full text-white py-3 text-center text-base font-bold font-nunito"
                onClick={() => setMenuOpen(false)}
              >
                Order on WhatsApp
              </Link>
              <Link
                href="/"
                className="rounded-full text-[#234D10] border border-[#D1D5DB] py-3 text-center text-base font-bold font-nunito"
                onClick={() => setMenuOpen(false)}
              >
                Become a vendor
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
