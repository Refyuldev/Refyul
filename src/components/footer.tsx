import Image from "next/image";
import logo from "@/assets/logo.webp";
import { companyData, contactData, servicesData } from "@/data/homeData";

export const Footer = () => {
  return (
    <section className="w-full flex justify-center items-center py-24 px-4 sm:px-8 bg-linear-180 from-[#F0FDF4] to-white">
      <section className="w-full max-w-[1442px] flex lg:flex-row flex-col justify-between items-start gap-5">
        <div className="flex flex-col justify-start items-start gap-7">
          <div className="flex justify-start items-center gap-3">
            <Image
              src={logo}
              alt="logo"
              width={37}
              height={52}
              className="w-full max-w-[37px] object-contain"
            />
            <p className="text-4xl font-bold font-montserrat text-primary">
              Refyul
            </p>
          </div>
          <p className="md:text-xl text-base font-normal text-[#7D7D7D] font-inter w-full max-w-[373px]">
            Fuel delivered to your doorstep, office, or generator across Lagos.
            Fast, safe, and stress-free — always.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
          <div className="w-full flex flex-col justify-start items-start gap-6">
            <p className="md:text-xl text-base font-semibold text-black">
              SERVICES
            </p>
            <div className="flex flex-col justify-start items-start gap-4 w-full">
              {servicesData.map((item, index) => (
                <p key={index} className="md:text-base text-sm text-[#7D7D7D]">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-6">
            <p className="md:text-xl text-base font-semibold text-black">
              COMPANY
            </p>
            <div className="flex flex-col justify-start items-start gap-4 w-full">
              {companyData.map((item, index) => (
                <p key={index} className="md:text-base text-sm text-[#7D7D7D]">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-6">
            <p className="md:text-xl text-base font-semibold text-black">
              CONTACT US
            </p>
            <div className="flex flex-col justify-start items-start gap-4 w-full">
              {contactData.map((item, index) => (
                <p key={index} className="md:text-base text-sm text-[#7D7D7D]">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
