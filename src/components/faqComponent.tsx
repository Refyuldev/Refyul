"use client";

import { useState } from "react";
import { faqData } from "@/data/homeData";

export const FaqComponent = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="w-full flex flex-col justify-start items-start gap-4">
      {faqData.map((item, index) => {
        const isOpen = index === activeIndex;

        return (
          <button
            key={index}
            onClick={() => handleToggle(index)}
            className="w-full cursor-pointer outline-none flex flex-col justify-start items-start gap-2 border border-[#7D7D7D] rounded-2xl p-6"
          >
            <div className="flex flex-col justify-start items-start gap-2 w-full">
              <div className="w-full flex justify-between items-start gap-2 text-left">
                <p className="md:text-2xl text-lg font-bold text-black leading-none font-syne">
                  {item.question}
                </p>
                <span className="flex items-center justify-center">
                  {isOpen ? (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 6L6 18M6 6L18 18"
                        stroke="black"
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
                        d="M9 12H15M12 9V15M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>
              </div>
            </div>
            {isOpen && (
              <p className="w-full md:text-base text-sm text-left text-[#858585] leading-tight">
                {item.answer}
              </p>
            )}
          </button>
        );
      })}
    </section>
  );
};
