import {
  deliveryData,
  heroData,
  orderData,
  realityData,
  refyulWins,
  simplicityData,
  testimonialsData,
  faqData,
} from "@/data/homeData";
import Image from "next/image";
import Link from "next/link";
import heroImage from "@/assets/Fuel-PNG-File 1.webp";
import logo from "@/assets/logo.webp";
import phones from "@/assets/phone.webp";
import map from "@/assets/map.webp";
import { FaqComponent } from "@/components/faqComponent";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <section className="w-full flex flex-col justify-start items-start gap-0 relative font-inter">
      {/* Hero Section */}
      <section className="w-full hero-bg relative flex flex-col justify-center items-center">
        <Navbar />
        <section className="w-full relative max-w-[1442px] pt-32 pb-16 mx-auto flex lg:flex-row flex-col justify-start items-center gap-5">
          <section className="flex flex-col justify-start items-start gap-10 max-w-[822px] px-8">
            <div className="w-full flex flex-col justify-start items-start gap-2">
              <span className="bg-[#F4F3FF] py-1 px-3.5 text-[#5925DC] text-sm rounded-full font-medium uppercase leading-tight">
                NOW LIVE ACROSS LAGOS
              </span>
              <h1 className="md:text-[64px] sm:text-5xl text-4xl leading-tight font-extrabold text-secondary font-syne relative z-10">
                Fuel Delivered <span className="gradient-text">Anywhere</span>{" "}
                <br /> in Lagos — Fast & Safe.
              </h1>
              <p className="md:text-[22px] text-base leading-tight text-[#7D7D7D] w-full max-w-[735px]">
                No more queues. No more scarcity stress. Refyul brings petrol,
                diesel, and cooking gas straight to your doorstep, office, or
                generator — in minutes, not hours.
              </p>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-10">
              <div className="w-full text-center flex sm:flex-row flex-col justify-start items-center gap-6">
                <Link
                  href="https://wa.me/2348023700625?text=Hi%20Teni%2C%20I%20want%20to%20order%20fuel"
                  target="_blank"
                  className="bg-primary rounded-full text-white md:py-2.5 py-1.5 md:px-5 px-3 md:text-lg text-base font-bold font-nunito btn-shadow sm:w-auto w-full"
                >
                  Order on WhatsApp
                </Link>
                <Link
                  href="/"
                  className="rounded-full text-[#234D10] md:py-2.5 py-1.5 md:px-5 px-3 md:text-lg text-base font-bold font-nunito sm:w-auto w-full"
                >
                  Become a vendor
                </Link>
              </div>
              <div className="flex flex-wrap justify-start items-center md:gap-6 gap-3">
                {heroData.map((item, index) => (
                  <span
                    key={index}
                    className="bg-[#ECFDF3] py-1 md:px-6 px-3 text-[#027A48] text-sm rounded-full font-medium leading-tight"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>
          <section className="flex justify-center items-center lg:shrink-0 lg:ml-0 ml-auto">
            <Image
              src={heroImage}
              alt="Hero Image"
              width={513}
              height={467}
              className="w-full max-w-[513px] object-contain rotate-[12.5] lg:shrink-0 relative z-10"
            />
          </section>
          <div className="pointer-events-none md:size-[340px] size-[250px] bg-[#234D10]/80 absolute -top-32 -left-12 rounded-full blur-[140px]" />
          <div className="pointer-events-none md:size-[340px] size-[250px] bg-[#F9B750]/80 absolute top-[20%] left-[15%] rounded-full blur-[180px]" />
          <div className="pointer-events-none md:size-[340px] size-[250px] bg-[#F9B750]/80 absolute top-[20%] -right-32 rounded-full blur-[180px]" />
          <div className="pointer-events-none md:size-[340px] size-[250px] bg-[#234D10]/80 absolute -bottom-32 right-[15%] rounded-full blur-[180px]" />
        </section>
      </section>
      {/* Reality Section */}
      <section className="w-full flex justify-center items-center">
        <section className="w-full max-w-[1442px] pt-14 pb-28 sm:px-8 px-4 mx-auto flex lg:flex-row flex-col justify-between items-center gap-2">
          <section className="flex flex-col justify-start items-start gap-6 lg:max-w-[735px] max-w-full">
            <div className="w-full flex flex-col justify-start items-start gap-2">
              <span className="bg-[#F4F3FF] py-1 px-3.5 text-[#5925DC] text-sm rounded-full font-medium uppercase leading-tight">
                THE LAGOS FUEL REALITY
              </span>
              <h2 className="md:text-[48px] text-3xl leading-tight font-extrabold text-secondary font-syne">
                Scarcity, Queues & Generator{" "}
                <span className="gradient-text">Nightmares</span>
              </h2>
            </div>
            <p className="md:text-[22px] text-base leading-tight text-[#7D7D7D] w-full max-w-[735px]">
              Every Lagos resident knows the pain. You wake up early, join a
              2-hour queue, and your generator still runs dry by evening. Your
              business suffers. Your family sleeps in the heat.
            </p>
            <div className="flex flex-col justify-start items-start gap-2.5">
              {realityData.map((item, index) => (
                <p
                  key={index}
                  className="py-2 px-4 text-[#7D7D7D] text-sm rounded-full font-normal leading-none"
                >
                  {item}
                </p>
              ))}
            </div>
          </section>
          <section className="w-full flex justify-center items-center">
            <div className="w-full lg:max-w-[409px] max-w-full bg-[#F8F7F7] rounded-2xl p-6 border border-[#234D1033]/20 flex flex-col justify-start items-start gap-8">
              <p className="text-base font-semibold text-black font-syne">
                Wait Time Comparison : Lagos Fuel Queue
              </p>
              <div className="w-full flex flex-col justify-start items-start gap-4">
                <div className="w-full grid grid-cols-3 justify-start items-center gap-1">
                  <p className="text-sm font-normal text-black whitespace-nowrap">
                    NNPC Ikorodu
                  </p>
                  <span className="bg-[#FEF3F2] rounded-2xl w-full py-1 px-2.5 text-sm font-medium text-[#B42318] col-span-2">
                    2h 45min queue ⏳
                  </span>
                </div>
                <div className="w-full grid grid-cols-3 justify-start items-center gap-1">
                  <p className="text-sm font-normal text-black whitespace-nowrap">
                    Total VI
                  </p>
                  <span className="bg-[#FEF3F2] rounded-2xl w-full py-1 px-2.5 text-sm font-medium text-[#B42318] col-span-2">
                    1h 50min queue ⏳
                  </span>
                </div>
                <div className="w-full grid grid-cols-3 justify-start items-center gap-1">
                  <p className="text-sm font-normal text-black whitespace-nowrap">
                    Conoil Ikeja
                  </p>
                  <span className="bg-[#FEF3F2] rounded-2xl w-full py-1 px-2.5 text-sm font-medium text-[#B42318] col-span-2">
                    2h 20min wait ⏳
                  </span>
                </div>
                <div className="w-full text-center">
                  <p className="text-sm font-normal text-black whitespace-nowrap">
                    Vs Refyul
                  </p>
                </div>
                <div className="w-full grid grid-cols-3 justify-start items-center gap-1">
                  <div className="text-sm font-normal text-black whitespace-nowrap flex justify-start items-center gap-0.5">
                    <Image src={logo} alt="Refyul" width={15} height={21} />
                    <p>Refyul</p>
                  </div>
                  <span className="bg-[#ECFDF3] rounded-2xl w-full py-1 px-2.5 text-sm font-medium text-[#027A48] col-span-2">
                    ✓ 18 min avg. delivery
                  </span>
                </div>
              </div>
              <div className="w-full flex justify-between items-center flex-wrap gap-2">
                <p className="text-xs font-normal text-black">
                  Lagos data, Q1 2025
                </p>
                <p className="text-sm font-medium text-black">
                  Save 2+ hours every order
                </p>
              </div>
            </div>
          </section>
        </section>
      </section>
      {/* simplicity section */}
      <section className="w-full flex justify-center items-center py-20 px-4 sm:px-8 bg-linear-180 from-[#F0FDF4] to-white">
        <section className="w-full max-w-[1442px] flex flex-col justify-start items-center gap-16">
          <div className="w-full max-w-[735px] flex flex-col justify-start items-center text-center gap-5">
            <span className="bg-[#F4F3FF] py-1 px-3.5 text-[#5925DC] text-sm rounded-full font-medium uppercase leading-tight">
              SIMPLE AS 1-2-3
            </span>
            <h2 className="md:text-[48px] text-3xl leading-tight font-extrabold text-secondary font-syne">
              Order Fuel in{" "}
              <span className="gradient-text"> Under 60 Seconds</span>
            </h2>
            <p className="md:text-[22px] text-base leading-tight text-[#7D7D7D] w-full max-w-[735px]">
              No filling station needed. No queue. Just open the app, place your
              order, and we handle the rest.
            </p>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
            {simplicityData.map((item, index) => (
              <div
                key={index}
                className="w-full flex flex-col justify-start items-center text-center gap-4 card-shadow bg-white rounded-2xl p-6"
              >
                <span className="text-5xl">{item.icon}</span>
                <span className="bg-[#016641] rounded-full py-2.5 px-3 text-white font-extrabold font-syne">
                  {index + 1}
                </span>
                <h3 className="text-xl font-bold text-[#0A0A0A]">
                  {item.title}
                </h3>
                <p className="text-base text-[#717182]">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
      {/* order section */}
      <section
        id="works"
        className="w-full bg-white flex justify-center items-center sm:px-8 px-4 py-24"
      >
        <section className="w-full max-w-[1442px] flex lg:flex-row flex-col justify-between items-center gap-4">
          <section className="w-full lg:max-w-[735px] max-w-full flex flex-col justify-start items-start gap-4">
            <div className="w-full flex flex-col justify-start items-start gap-2">
              <span className="bg-[#F4F3FF] py-1 px-3.5 text-[#5925DC] text-sm rounded-full font-medium uppercase leading-tight">
                HOW TO ORDER
              </span>
              <h2 className="md:text-[48px] text-3xl leading-tight font-extrabold text-secondary font-syne">
                Order fuel via <span className="gradient-text">WhatsApp</span> —
                it's that easy.
              </h2>
              <p className="md:text-[22px] text-base leading-tight text-[#7D7D7D] w-full max-w-[735px]">
                No app to download. Just tap the button, chat with our order
                agent on WhatsApp, and your fuel is on its way. Our agents are
                available daily from 8am - 8pm.
              </p>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-4">
              {orderData.map((item, index) => (
                <div
                  key={index}
                  className="w-full flex justify-start items-start gap-4 bg-white rounded-2xl p-6"
                >
                  <span className="sm:text-2xl text-lg">{item.icon}</span>

                  <div className="flex flex-col justify-start items-start gap-2">
                    <h3 className="sm:text-2xl text-lg font-bold text-[#0A0A0A] font-syne leading-none">
                      {item.title}
                    </h3>
                    <p className="sm:text-base text-sm text-[#858585]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-start items-start gap-4 text-center">
              <Link
                href="/"
                className="bg-primary rounded-full text-white md:py-2.5 py-1.5 md:px-5 px-3 md:text-lg text-base font-bold font-nunito btn-shadow sm:w-auto w-full"
              >
                Chat Us on WhatsApp →
              </Link>
              <p className="text-base text-[#7D7D7D]">
                Available Mon - Sun · 8am - 8pm · Typically replies in under 2
                minutes
              </p>
            </div>
          </section>
          <section className="w-full max-w-[600px] flex justify-center items-center">
            <Image
              src={phones}
              alt="Phones"
              className="w-full max-w-[360px] h-full object-contain"
              width={360}
              height={571}
            />
          </section>
        </section>
      </section>
      {/* delievery section */}
      <section
        id="service"
        className="w-full flex justify-center items-center py-20 px-4 sm:px-8 bg-linear-180 from-[#F0FDF4] to-white"
      >
        <section className="w-full max-w-[1442px] flex flex-col justify-start items-center gap-16">
          <div className="w-full max-w-[735px] flex flex-col justify-start items-center text-center gap-5">
            <span className="bg-[#F4F3FF] py-1 px-3.5 text-[#5925DC] text-sm rounded-full font-medium uppercase leading-tight">
              WHAT WE DELIVER
            </span>
            <h2 className="md:text-[48px] text-3xl leading-tight font-extrabold text-secondary font-syne">
              Every Fuel Type.{" "}
              <span className="gradient-text">Every Need.</span>
            </h2>
            <p className="md:text-[22px] text-base leading-tight text-[#7D7D7D] w-full max-w-[735px]">
              From individual households to large-scale businesses — we've got
              the right solution for you.
            </p>
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
            {deliveryData.map((item, index) => (
              <div
                key={index}
                className="w-full flex flex-col justify-start items-start gap-4 card-shadow bg-white rounded-2xl p-6"
              >
                {item.icon instanceof Object ? (
                  <Image
                    src={item.icon}
                    alt={item.title}
                    className="sm:w-12 w-8 sm:h-12 h-8 object-contain"
                  />
                ) : (
                  <span className="sm:text-5xl text-3xl">{item.icon}</span>
                )}
                <h3 className="sm:text-xl text-lg font-bold text-[#0A0A0A]">
                  {item.title}
                </h3>
                <p className="sm:text-base text-sm text-[#717182]">
                  {item.description}
                </p>

                {item.subtext && (
                  <p
                    className={`sm:text-base text-sm font-semibold ${item.color}`}
                  >
                    {item.subtext}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </section>
      {/* why we win section */}
      <section className="w-full flex justify-center items-center py-20 px-4 sm:px-8 bg-linear-180 from-[#F0FDF4] to-white">
        <section className="w-full max-w-[1442px] flex flex-col justify-start items-center gap-16">
          <div className="w-full max-w-[735px] flex flex-col justify-start items-center text-center gap-5">
            <span className="bg-[#F4F3FF] py-1 px-3.5 text-[#5925DC] text-sm rounded-full font-medium uppercase leading-tight">
              WHY REFYUL WINS
            </span>
            <h2 className="md:text-[48px] text-3xl leading-tight font-extrabold text-secondary font-syne">
              Built for Lagos.{" "}
              <span className="gradient-text">Trusted For Lagos.</span>
            </h2>
            <p className="md:text-[22px] text-base leading-tight text-[#7D7D7D] w-full max-w-[735px]">
              We understand the chaos of fuel scarcity. Every feature is
              designed around real Lagos challenges.
            </p>
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
            {refyulWins.map((item, index) => (
              <div
                key={index}
                className="w-full flex flex-col justify-start items-start gap-4 card-shadow bg-white rounded-2xl p-6"
              >
                <span className="sm:text-5xl text-3xl">{item.icon}</span>

                <h3 className="sm:text-xl text-lg font-bold text-[#0A0A0A]">
                  {item.title}
                </h3>
                <p className="sm:text-base text-sm text-[#717182]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </section>
      {/* coverage */}
      <section
        id="coverage"
        className="w-full flex justify-center items-center py-20 px-4 sm:px-8 bg-linear-180 from-[#F0FDF4] to-white"
      >
        <section className="w-full max-w-[1442px] flex lg:flex-row flex-col justify-between items-center gap-4">
          <section className="w-full lg:max-w-[735px] max-w-full flex flex-col justify-start items-start gap-4">
            <div className="w-full flex flex-col justify-start items-start gap-2">
              <span className="bg-[#F4F3FF] py-1 px-3.5 text-[#5925DC] text-sm rounded-full font-medium uppercase leading-tight">
                COVERAGE
              </span>
              <h2 className="md:text-[48px] text-3xl leading-tight font-extrabold text-secondary font-syne">
                Across Lagos and{" "}
                <span className="gradient-text">expanding fast</span>
              </h2>
              <p className="md:text-[22px] text-base leading-tight text-[#7D7D7D] w-full max-w-[735px]">
                We currently cover 12+ active zones in Lagos — from the Mainland
                to the Island. Our fleet is positioned for rapid response across
                traffic hotspots.
              </p>
            </div>
            <div className="w-full bg-[#E4ECE7] rounded-2xl text-primary flex justify-start items-center gap-6 p-6">
              <p className="sm:text-2xl text-lg">🗺️</p>
              <p className="sm:text-2xl text-lg font-bold font-syne">
                Expanding soon:{" "}
                <span className="text-base font-inter font-normal">
                  Abuja, Port Harcourt & Ibadan
                </span>
              </p>
            </div>
            <div className="flex flex-col justify-start items-start gap-4 text-center">
              <Link
                href="https://wa.me/2348023700625?text=Hi%20Teni%2C%20I%20want%20to%20order%20fuel"
                target="_blank"
                className="bg-primary rounded-full text-white md:py-2.5 py-1.5 md:px-5 px-3 md:text-lg text-base font-bold font-nunito btn-shadow sm:w-auto w-full"
              >
                Order on WhatsApp →
              </Link>
            </div>
            <div className="flex justify-start items-center gap-8 mt-12">
              <div className="flex justify-start items-center gap-2">
                <svg
                  width="19"
                  height="22"
                  viewBox="0 0 19 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.30891 9.4631C6.30891 10.2997 6.64126 11.1021 7.23283 11.6936C7.8244 12.2852 8.62674 12.6175 9.46335 12.6175C10.3 12.6175 11.1023 12.2852 11.6939 11.6936C12.2855 11.1021 12.6178 10.2997 12.6178 9.4631C12.6178 8.62649 12.2855 7.82414 11.6939 7.23257C11.1023 6.641 10.3 6.30866 9.46335 6.30866C8.62674 6.30866 7.8244 6.641 7.23283 7.23257C6.64126 7.82414 6.30891 8.62649 6.30891 9.4631Z"
                    stroke="#006542"
                    strokeWidth="2.10296"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.4116 15.4113L10.9502 19.8727C10.5558 20.2666 10.0213 20.4879 9.46388 20.4879C8.90651 20.4879 8.37194 20.2666 7.97762 19.8727L3.51514 15.4113C2.33876 14.2348 1.53765 12.736 1.21312 11.1043C0.888579 9.47254 1.05519 7.78122 1.69187 6.24418C2.32856 4.70714 3.40672 3.39342 4.79003 2.46913C6.17335 1.54485 7.79967 1.05151 9.46336 1.05151C11.127 1.05151 12.7534 1.54485 14.1367 2.46913C15.52 3.39342 16.5982 4.70714 17.2348 6.24418C17.8715 7.78122 18.0381 9.47254 17.7136 11.1043C17.3891 12.736 16.588 14.2348 15.4116 15.4113Z"
                    stroke="#006542"
                    strokeWidth="2.10296"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-primary text-base">Active</p>
              </div>
              <div className="flex justify-start items-center gap-2">
                <svg
                  width="19"
                  height="22"
                  viewBox="0 0 19 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.30891 9.4631C6.30891 10.2997 6.64126 11.1021 7.23283 11.6936C7.8244 12.2852 8.62674 12.6175 9.46335 12.6175C10.3 12.6175 11.1023 12.2852 11.6939 11.6936C12.2855 11.1021 12.6178 10.2997 12.6178 9.4631C12.6178 8.62649 12.2855 7.82414 11.6939 7.23257C11.1023 6.641 10.3 6.30866 9.46335 6.30866C8.62674 6.30866 7.8244 6.641 7.23283 7.23257C6.64126 7.82414 6.30891 8.62649 6.30891 9.4631Z"
                    stroke="#7D7D7D"
                    strokeWidth="2.10296"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.4116 15.4113L10.9502 19.8727C10.5558 20.2666 10.0213 20.4879 9.46388 20.4879C8.90651 20.4879 8.37194 20.2666 7.97762 19.8727L3.51514 15.4113C2.33876 14.2348 1.53765 12.736 1.21312 11.1043C0.888579 9.47254 1.05519 7.78122 1.69187 6.24418C2.32856 4.70714 3.40672 3.39342 4.79003 2.46913C6.17335 1.54485 7.79967 1.05151 9.46336 1.05151C11.127 1.05151 12.7534 1.54485 14.1367 2.46913C15.52 3.39342 16.5982 4.70714 17.2348 6.24418C17.8715 7.78122 18.0381 9.47254 17.7136 11.1043C17.3891 12.736 16.588 14.2348 15.4116 15.4113Z"
                    stroke="#7D7D7D"
                    strokeWidth="2.10296"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <p className="text-[#7D7D7D] text-base">Coming Soon</p>
              </div>
            </div>
          </section>
          <section className="w-full max-w-[600px] flex justify-center items-center">
            <Image
              src={map}
              alt="Lagos map"
              className="w-full max-w-[598px] h-full object-contain"
              width={598}
              height={548}
            />
          </section>
        </section>
      </section>
      {/* testimonial */}
      <section className="w-full flex justify-center items-center py-20 px-4 sm:px-8 bg-linear-180 from-[#F0FDF4] to-white">
        <section className="w-full max-w-[1442px] flex flex-col justify-start items-center gap-16">
          <div className="w-full max-w-[735px] flex flex-col justify-start items-center text-center gap-5">
            <span className="bg-[#F4F3FF] py-1 px-3.5 text-[#5925DC] text-sm rounded-full font-medium uppercase leading-tight">
              REAL LAGOS VOICES
            </span>
            <h2 className="md:text-[48px] text-3xl leading-tight font-extrabold text-secondary font-syne">
              What Our <span className="gradient-text">Customers Say</span>
            </h2>
            <p className="md:text-[22px] text-base leading-tight text-[#7D7D7D] w-full max-w-[735px]">
              From Lekki households to Ikeja businesses — hear from real Refyul
              users.
            </p>
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
            {testimonialsData.map((item, index) => (
              <div
                key={index}
                className="w-full flex flex-col justify-start items-start gap-4 border border-black/10 bg-white rounded-2xl p-6"
              >
                <div className="flex justify-start items-center gap-1">
                  {new Array(item.stars).fill(0).map((_, i) => (
                    <svg
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      key={i}
                    >
                      <path
                        d="M8.77225 1.079C8.80877 1.00521 8.86519 0.943107 8.93513 0.899684C9.00507 0.856262 9.08576 0.833252 9.16809 0.833252C9.25041 0.833252 9.3311 0.856262 9.40104 0.899684C9.47098 0.943107 9.5274 1.00521 9.56392 1.079L11.4889 4.97816C11.6157 5.2348 11.8029 5.45684 12.0344 5.62521C12.2659 5.79358 12.5349 5.90326 12.8181 5.94483L17.1231 6.57483C17.2047 6.58665 17.2813 6.62106 17.3443 6.67416C17.4074 6.72727 17.4543 6.79695 17.4798 6.87534C17.5053 6.95372 17.5083 7.03767 17.4886 7.11769C17.4688 7.19772 17.4271 7.27062 17.3681 7.32816L14.2548 10.3598C14.0494 10.5599 13.8958 10.8069 13.8071 11.0795C13.7184 11.3521 13.6973 11.6422 13.7456 11.9248L14.4806 16.2082C14.495 16.2897 14.4862 16.3736 14.4552 16.4504C14.4242 16.5272 14.3722 16.5937 14.3052 16.6423C14.2382 16.691 14.1589 16.7198 14.0763 16.7256C13.9937 16.7313 13.9112 16.7137 13.8381 16.6748L9.98975 14.6515C9.73618 14.5184 9.45407 14.4488 9.16767 14.4488C8.88127 14.4488 8.59915 14.5184 8.34558 14.6515L4.49809 16.6748C4.42503 16.7135 4.34258 16.7309 4.26013 16.725C4.17767 16.7192 4.09852 16.6903 4.03166 16.6417C3.96481 16.5931 3.91295 16.5267 3.88197 16.45C3.85098 16.3734 3.84213 16.2896 3.85642 16.2082L4.59058 11.9257C4.63908 11.6429 4.61807 11.3527 4.52937 11.0799C4.44066 10.8071 4.28693 10.56 4.08142 10.3598L0.968085 7.329C0.90858 7.27152 0.866413 7.19849 0.846387 7.11823C0.826361 7.03796 0.829282 6.95368 0.854817 6.87499C0.880352 6.7963 0.927474 6.72636 0.990816 6.67315C1.05416 6.61993 1.13117 6.58558 1.21308 6.574L5.51725 5.94483C5.8008 5.90358 6.07008 5.79404 6.30191 5.62565C6.53373 5.45726 6.72117 5.23506 6.84808 4.97816L8.77225 1.079Z"
                        fill="#EEC830"
                        stroke="#EEC830"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ))}
                </div>

                <h3 className="sm:text-base text-sm text-[#717182]">
                  {item.feedback}
                </h3>
                <div className="flex justify-start items-center gap-3">
                  <div className="rounded-full bg-primary p-2 text-white font-syne sm:text-2xl text-base font-bold">
                    {item.name.split(" ")[0].charAt(0)}
                    {item.name.split(" ")[1].charAt(0)}
                  </div>
                  <div className="flex flex-col justify-start items-start gap-1">
                    <p className="sm:text-base text-sm text-[#0A0A0A] font-syne font-bold leading-none">
                      {item.name}
                    </p>
                    <p className="sm:text-sm text-xs text-[#717182] leading-none">
                      {item.profession}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
      {/* FAQ section */}
      <section
        id="faq"
        className="w-full flex justify-center items-center py-20 px-4 sm:px-8 bg-linear-180 from-[#F0FDF4] to-white"
      >
        <section className="w-full max-w-[1442px] flex flex-col justify-start items-center gap-16">
          <div className="w-full max-w-[735px] flex flex-col justify-start items-center text-center gap-5">
            <span className="bg-[#F4F3FF] py-1 px-3.5 text-[#5925DC] text-sm rounded-full font-medium uppercase leading-tight">
              GOT QUESTIONS ?
            </span>
            <h2 className="md:text-[48px] text-3xl leading-tight font-extrabold text-secondary font-syne">
              Answers to Your{" "}
              <span className="gradient-text">Fuel Concerns</span>
            </h2>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqData.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                  },
                })),
              }),
            }}
          />
          <FaqComponent />
        </section>
      </section>
      {/* cta */}
      <section className="w-full flex justify-center items-center py-20 px-4 sm:px-8 bg-linear-180 from-[#F0FDF4] to-white">
        <section className="w-full max-w-[1442px] flex flex-col justify-start items-center gap-16">
          <div className="w-full max-w-[735px] flex flex-col justify-start items-center text-center gap-5">
            <span className="bg-[#F4F3FF] py-1 px-3.5 text-[#5925DC] text-sm rounded-full font-medium uppercase leading-tight">
              START ORDERING TODAY
            </span>
            <h2 className="md:text-[48px] text-3xl leading-tight font-extrabold text-secondary font-syne">
              Never Queue for Fuel <span className="gradient-text">Again.</span>
            </h2>
            <p className="md:text-[22px] text-base leading-tight text-[#7D7D7D] w-full max-w-[735px]">
              Join thousands of Lagos households, businesses, and estates who've
              said goodbye to fuel scarcity stress. Your first delivery is just
              minutes away.
            </p>
          </div>
          <div className="w-full flex justify-center items-center text-center">
            <Link
              href="https://wa.me/2348023700625?text=Hi%20Teni%2C%20I%20want%20to%20order%20fuel"
              className="bg-primary rounded-full text-white md:py-2.5 py-1.5 md:px-5 px-3 md:text-lg text-base font-bold font-nunito btn-shadow sm:w-auto w-full"
              target="_blank"
            >
              Order on Whatsapp
            </Link>
          </div>
        </section>
      </section>
    </section>
  );
}
