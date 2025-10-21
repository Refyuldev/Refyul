import Image from "next/image";
import heroImage from "@/assets/hero image.webp";
import { WaitListForm } from "@/components/form";
import Link from "next/link";

export default function Home() {
  return (
    <section className="w-full flex flex-col justify-start items-start gap-0">
      <section className="w-full bg-[#F0FDF4] flex lg:flex-row flex-col justify-center items-center py-[50px] md:px-8 px-4 gap-6">
        <div className="w-full md:max-w-[492px] max-w-[350px] overflow-hidden">
          <Image
            src={heroImage}
            alt="hero image"
            width={492}
            height={571}
            className="w-full object-contain"
          />
        </div>
        <div className="w-full max-w-[496px] flex flex-col justify-start items-start gap-9">
          <div className="flex flex-col justify-start items-start gap-2 w-full">
            <h1 className="font-medium md:text-5xl text-3xl text-black font-montserrat leading-tight">
              Skip the Fuel Queue Forever
            </h1>
            <p className="md:text-2xl text-lg font-normal text-black">
              Be the first to get fuel & cooking gas delivered directly to your
              door in Lagos. No more waiting, no more stress.
            </p>
          </div>
          <div className="w-full flex justify-start items-center md:gap-6 gap-2 flex-wrap">
            <Link
              href={"#waitlist-form"}
              className="md:text-base text-sm font-medium text-white bg-primary rounded-lg md:p-4 p-2 cursor-pointer border border-primary"
            >
              Join the waitlist
            </Link>
            <button className="md:text-base text-sm font-medium text-primary bg-background rounded-lg md:p-4 p-2 cursor-pointer border border-primary">
              Learn how it works ↓
            </button>
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-2">
            <div className="flex justify-start items-center gap-4">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8841 14.14V12.8067C10.8841 12.0994 10.6031 11.4212 10.103 10.9211C9.60291 10.421 8.92463 10.14 8.21739 10.14H4.21739C3.51014 10.14 2.83187 10.421 2.33177 10.9211C1.83167 11.4212 1.55072 12.0994 1.55072 12.8067V14.14"
                  stroke="#0A0A0A"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.8841 2.22534C11.4559 2.37359 11.9624 2.70752 12.3239 3.17472C12.6854 3.64192 12.8816 4.21593 12.8816 4.80668C12.8816 5.39742 12.6854 5.97143 12.3239 6.43863C11.9624 6.90583 11.4559 7.23976 10.8841 7.38801"
                  stroke="#0A0A0A"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.8841 14.14V12.8067C14.8837 12.2158 14.687 11.6419 14.325 11.1749C13.963 10.7079 13.4562 10.3744 12.8841 10.2267"
                  stroke="#0A0A0A"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.21739 7.47335C7.69015 7.47335 8.88405 6.27944 8.88405 4.80668C8.88405 3.33392 7.69015 2.14001 6.21739 2.14001C4.74463 2.14001 3.55072 3.33392 3.55072 4.80668C3.55072 6.27944 4.74463 7.47335 6.21739 7.47335Z"
                  stroke="#0A0A0A"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="text-sm font-normal text-grey-04">
                847 Lagosians already joined
              </p>
            </div>
            <div className="w-full h-2 rounded-full bg-[#c4c4c4]">
              <div className="w-[75%] h-2 rounded-full bg-primary" />
            </div>
            <p className="text-[#717182] text-xs">
              First 1,000 users get 50% off their first delivery!
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-28 px-4 flex justify-center items-center">
        <section className="w-full max-w-[1216px] flex flex-col justify-start items-center gap-11">
          <div className="w-full flex flex-col justify-start items-center gap-2">
            <h2 className="md:text-3xl text-2xl font-medium text-grey-04 text-center">
              Why Choose Refyul?
            </h2>
            <p className="md:text-base text-sm font-normal text-[#717182]">
              We&apos;re solving Lagos&apos;s fuel queue problem with technology
              and sustainability
            </p>
          </div>
          <div className="w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-8 gap-4">
            <div className="w-full bg-background rounded-[14px] border border-black/10 p-6 flex flex-col justify-start items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex justify-center items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6V12L16 14"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-base font-medium text-grey-04">
                Save 4+ Hours Weekly
              </p>
              <p className="text-sm font-normal text-[#717182]">
                No more waiting in fuel lines. Get back to what matters most in
                your life.
              </p>
            </div>
            <div className="w-full bg-background rounded-[14px] border border-black/10 p-6 flex flex-col justify-start items-start gap-4">
              <div className="w-12 h-12 bg-secondary rounded-lg flex justify-center items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2V22"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-base font-medium text-grey-04">Fair Prices</p>
              <p className="text-sm font-normal text-[#717182]">
                Avoid black market price gouging. Transparent pricing from
                certified stations.
              </p>
            </div>
            <div className="w-full bg-background rounded-[14px] border border-black/10 p-6 flex flex-col justify-start items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex justify-center items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 13C20 18 16.5 20.5 12.34 21.95C12.1222 22.0238 11.8855 22.0202 11.67 21.94C7.5 20.5 4 18 4 13V5.99996C4 5.73474 4.10536 5.48039 4.29289 5.29285C4.48043 5.10532 4.73478 4.99996 5 4.99996C7 4.99996 9.5 3.79996 11.24 2.27996C11.4519 2.09896 11.7214 1.99951 12 1.99951C12.2786 1.99951 12.5481 2.09896 12.76 2.27996C14.51 3.80996 17 4.99996 19 4.99996C19.2652 4.99996 19.5196 5.10532 19.7071 5.29285C19.8946 5.48039 20 5.73474 20 5.99996V13Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 12L11 14L15 10"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-base font-medium text-grey-04">
                Safe & Certified
              </p>
              <p className="text-sm font-normal text-[#717182]">
                NMDPRA-approved fuel from licensed stations. Your safety is our
                priority.
              </p>
            </div>
            <div className="w-full bg-background rounded-[14px] border border-black/10 p-6 flex flex-col justify-start items-start gap-4">
              <div className="w-12 h-12 bg-secondary rounded-lg flex justify-center items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 20C9.24405 20.0053 7.55025 19.3505 6.25451 18.1654C4.95878 16.9803 4.15576 15.3515 4.00473 13.6021C3.8537 11.8527 4.36568 10.1104 5.43914 8.72074C6.5126 7.33112 8.06912 6.3957 9.79999 6.1C15.5 5 17 4.48 19 2C20 4 21 6.18 21 10C21 15.5 16.22 20 11 20Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 21C2 18 3.85 15.64 7.08 15C9.5 14.52 12 13 13 12"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-base font-medium text-grey-04">
                Zero Emissions
              </p>
              <p className="text-sm font-normal text-[#717182]">
                Delivered by electric bikes. Good for you, great for the
                environment.
              </p>
            </div>
            <div className="w-full bg-background rounded-[14px] border border-black/10 p-6 flex flex-col justify-start items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex justify-center items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 2H7C5.89543 2 5 2.89543 5 4V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V4C19 2.89543 18.1046 2 17 2Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 18H12.01"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-base font-medium text-grey-04">Simple App</p>
              <p className="text-sm font-normal text-[#717182]">
                Order in 3 taps, track in real-time. It&apos;s that easy.
              </p>
            </div>
            <div className="w-full bg-background rounded-[14px] border border-black/10 p-6 flex flex-col justify-start items-start gap-4">
              <div className="w-12 h-12 bg-secondary rounded-lg flex justify-center items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.99999 14C3.81076 14.0007 3.62522 13.9476 3.46495 13.847C3.30467 13.7464 3.17623 13.6024 3.09454 13.4317C3.01286 13.261 2.98129 13.0706 3.00349 12.8827C3.0257 12.6948 3.10077 12.517 3.21999 12.37L13.12 2.17004C13.1943 2.08432 13.2955 2.0264 13.407 2.00577C13.5185 1.98515 13.6337 2.00305 13.7337 2.05654C13.8337 2.11004 13.9126 2.19594 13.9573 2.30015C14.0021 2.40436 14.0101 2.52069 13.98 2.63004L12.06 8.65004C12.0034 8.80156 11.9844 8.96456 12.0046 9.12505C12.0248 9.28553 12.0837 9.43872 12.1761 9.57147C12.2685 9.70421 12.3918 9.81256 12.5353 9.8872C12.6788 9.96185 12.8382 10.0006 13 10H20C20.1892 9.9994 20.3748 10.0525 20.535 10.1531C20.6953 10.2537 20.8238 10.3977 20.9054 10.5684C20.9871 10.7391 21.0187 10.9295 20.9965 11.1174C20.9743 11.3053 20.8992 11.4831 20.78 11.63L10.88 21.83C10.8057 21.9158 10.7045 21.9737 10.593 21.9943C10.4815 22.0149 10.3663 21.997 10.2663 21.9435C10.1663 21.89 10.0874 21.8041 10.0427 21.6999C9.99791 21.5957 9.98991 21.4794 10.02 21.37L11.94 15.35C11.9966 15.1985 12.0156 15.0355 11.9954 14.875C11.9752 14.7145 11.9163 14.5614 11.8239 14.4286C11.7315 14.2959 11.6082 14.1875 11.4647 14.1129C11.3212 14.0382 11.1617 13.9995 11 14H3.99999Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-base font-medium text-grey-04">
                Fast Delivery
              </p>
              <p className="text-sm font-normal text-[#717182]">
                Average delivery time under 45 minutes. Fuel when you need it.
              </p>
            </div>
          </div>
        </section>
      </section>
      <section className="w-full py-20 px-4 flex justify-center items-center bg-[#F0FDF4]">
        <section className="w-full max-w-[1216px] flex flex-col justify-start items-center gap-16">
          <div className="w-full flex flex-col justify-start items-center gap-2">
            <h2 className="md:text-3xl text-2xl font-medium text-grey-04 text-center">
              How Refyul Works
            </h2>
            <p className="md:text-base text-sm font-normal text-[#717182]">
              We&apos;re solving Lagos&apos;s fuel queue problem with technology
              and sustainability
            </p>
          </div>
          <div className="w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-8 gap-4">
            <div className="w-full bg-background rounded-[14px] shadow-md p-6 flex flex-col justify-start items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-full text-background flex justify-center items-center">
                1
              </div>
              <div className="w-full flex justify-between items-center gap-2 flex-wrap">
                <p className="text-base font-medium text-grey-04">
                  Download App
                </p>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 20V4"
                    stroke="#016641"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M28 20V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V20"
                    stroke="#016641"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.33334 13.3334L16 20L22.6667 13.3334"
                    stroke="#016641"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-sm font-normal text-[#717182]">
                Get notified when we launch in your area. Create your account in
                seconds.
              </p>
            </div>
            <div className="w-full bg-background rounded-[14px] shadow-md p-6 flex flex-col justify-start items-start gap-4">
              <div className="w-12 h-12 bg-secondary rounded-full text-background flex justify-center items-center">
                2
              </div>
              <div className="w-full flex justify-between items-center gap-2 flex-wrap">
                <p className="text-base font-medium text-grey-04">
                  Fair Prices
                </p>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.6666 13.3333C26.6666 19.9906 19.2813 26.924 16.8013 29.0653C16.5703 29.239 16.289 29.333 16 29.333C15.7109 29.333 15.4297 29.239 15.1986 29.0653C12.7186 26.924 5.33331 19.9906 5.33331 13.3333C5.33331 10.5043 6.45712 7.79121 8.45751 5.79082C10.4579 3.79043 13.171 2.66663 16 2.66663C18.829 2.66663 21.5421 3.79043 23.5425 5.79082C25.5428 7.79121 26.6666 10.5043 26.6666 13.3333Z"
                    stroke="#EEC830"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 17.3334C18.2091 17.3334 20 15.5425 20 13.3334C20 11.1242 18.2091 9.33337 16 9.33337C13.7909 9.33337 12 11.1242 12 13.3334C12 15.5425 13.7909 17.3334 16 17.3334Z"
                    stroke="#EEC830"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <p className="text-sm font-normal text-[#717182]">
                Choose your fuel type and quantity. Add your delivery location.
              </p>
            </div>
            <div className="w-full bg-background rounded-[14px] shadow-md p-6 flex flex-col justify-start items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-full text-background flex justify-center items-center">
                3
              </div>
              <div className="w-full flex justify-between items-center gap-2 flex-wrap">
                <p className="text-base font-medium text-grey-04">
                  Safe & Certified
                </p>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.6666 24V8.00004C18.6666 7.2928 18.3857 6.61452 17.8856 6.11442C17.3855 5.61433 16.7072 5.33337 16 5.33337H5.33329C4.62605 5.33337 3.94777 5.61433 3.44767 6.11442C2.94758 6.61452 2.66663 7.2928 2.66663 8.00004V22.6667C2.66663 23.0203 2.8071 23.3595 3.05715 23.6095C3.3072 23.8596 3.64634 24 3.99996 24H6.66663"
                    stroke="#016641"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 24H12"
                    stroke="#016641"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M25.3333 24H28C28.3536 24 28.6927 23.8595 28.9428 23.6094C29.1928 23.3594 29.3333 23.0202 29.3333 22.6666V17.8C29.3328 17.4974 29.2293 17.204 29.04 16.968L24.4 11.168C24.2753 11.0118 24.1171 10.8857 23.937 10.7989C23.757 10.7121 23.5598 10.6669 23.36 10.6666H18.6666"
                    stroke="#016641"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.6667 26.6667C24.1394 26.6667 25.3333 25.4728 25.3333 24C25.3333 22.5273 24.1394 21.3334 22.6667 21.3334C21.1939 21.3334 20 22.5273 20 24C20 25.4728 21.1939 26.6667 22.6667 26.6667Z"
                    stroke="#016641"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.33329 26.6667C10.8061 26.6667 12 25.4728 12 24C12 22.5273 10.8061 21.3334 9.33329 21.3334C7.86053 21.3334 6.66663 22.5273 6.66663 24C6.66663 25.4728 7.86053 26.6667 9.33329 26.6667Z"
                    stroke="#016641"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <p className="text-sm font-normal text-[#717182]">
                Track your delivery in real-time. Safe, contactless delivery to
                your door.
              </p>
            </div>
          </div>
        </section>
      </section>
      <section className="w-full py-20 px-4 flex justify-center items-center">
        <section className="w-full max-w-[1216px] flex flex-col justify-start items-center gap-16">
          <div className="w-full flex flex-col justify-start items-center gap-2">
            <h2 className="md:text-3xl text-2xl font-medium text-grey-04 text-center">
              Early Access Benefits
            </h2>
            <p className="md:text-base text-sm font-normal text-[#717182]">
              Join our waitlist and get exclusive perks
            </p>
          </div>
          <div className="w-full grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-6 gap-4">
            <div className="w-full bg-background rounded-[14px] p-6 flex flex-col justify-start items-start gap-4 border border-black/10 bg-gradient-to-r from-[#f0fdf4] to-white">
              <svg
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8667 3.05994C15.9251 2.94189 16.0154 2.84252 16.1273 2.77304C16.2392 2.70356 16.3683 2.66675 16.5 2.66675C16.6317 2.66675 16.7608 2.70356 16.8727 2.77304C16.9846 2.84252 17.0749 2.94189 17.1333 3.05994L20.2133 9.29861C20.4162 9.70923 20.7157 10.0645 21.0862 10.3339C21.4566 10.6033 21.8868 10.7788 22.34 10.8453L29.228 11.8533C29.3585 11.8722 29.4811 11.9272 29.582 12.0122C29.6828 12.0972 29.7579 12.2087 29.7987 12.3341C29.8395 12.4595 29.8444 12.5938 29.8128 12.7219C29.7812 12.8499 29.7144 12.9665 29.62 13.0586L24.6387 17.9093C24.3101 18.2294 24.0644 18.6246 23.9224 19.0608C23.7805 19.497 23.7467 19.9611 23.824 20.4133L25 27.2666C25.023 27.3971 25.0089 27.5314 24.9593 27.6542C24.9097 27.777 24.8266 27.8834 24.7194 27.9613C24.6122 28.0391 24.4853 28.0853 24.3531 28.0945C24.221 28.1037 24.0889 28.0755 23.972 28.0133L17.8147 24.7759C17.409 24.5629 16.9576 24.4516 16.4993 24.4516C16.0411 24.4516 15.5897 24.5629 15.184 24.7759L9.02799 28.0133C8.9111 28.0752 8.77919 28.103 8.64726 28.0936C8.51533 28.0842 8.38868 28.038 8.28172 27.9602C8.17476 27.8824 8.09177 27.7762 8.0422 27.6536C7.99263 27.5309 7.97847 27.3969 8.00133 27.2666L9.17599 20.4146C9.25359 19.9622 9.21997 19.4978 9.07804 19.0613C8.93612 18.6249 8.69014 18.2295 8.36133 17.9093L3.37999 13.0599C3.28479 12.968 3.21732 12.8511 3.18528 12.7227C3.15324 12.5943 3.15791 12.4594 3.19877 12.3335C3.23962 12.2076 3.31502 12.0957 3.41636 12.0106C3.51771 11.9254 3.64093 11.8705 3.77199 11.8519L10.6587 10.8453C11.1123 10.7793 11.5432 10.604 11.9141 10.3346C12.285 10.0652 12.5849 9.70963 12.788 9.29861L15.8667 3.05994Z"
                  stroke="#016641"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="text-base font-medium text-grey-04">
                Priority Access
              </p>

              <p className="text-sm font-normal text-[#717182]">
                Be among the first to use Refyul when we launch
              </p>
            </div>
            <div className="w-full bg-background rounded-[14px] p-6 flex flex-col justify-start items-start gap-4 border border-black/10 bg-gradient-to-r from-[#f3f3f5] to-white">
              <svg
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.1667 10.6667H5.83333C5.09695 10.6667 4.5 11.2637 4.5 12.0001V14.6667C4.5 15.4031 5.09695 16.0001 5.83333 16.0001H27.1667C27.903 16.0001 28.5 15.4031 28.5 14.6667V12.0001C28.5 11.2637 27.903 10.6667 27.1667 10.6667Z"
                  stroke="#EEC830"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5 10.6667V28.0001"
                  stroke="#EEC830"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.8333 16V25.3333C25.8333 26.0406 25.5524 26.7189 25.0523 27.219C24.5522 27.719 23.8739 28 23.1667 28H9.83332C9.12608 28 8.4478 27.719 7.9477 27.219C7.44761 26.7189 7.16666 26.0406 7.16666 25.3333V16"
                  stroke="#EEC830"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.5 10.6668C9.61593 10.6668 8.76809 10.3156 8.14297 9.69045C7.51785 9.06533 7.16666 8.21748 7.16666 7.33343C7.16666 6.44937 7.51785 5.60153 8.14297 4.97641C8.76809 4.35128 9.61593 4.00009 10.5 4.00009C11.7862 3.97768 13.0467 4.60177 14.117 5.79098C15.1873 6.98018 16.0177 8.6793 16.5 10.6668C16.9823 8.6793 17.8127 6.98018 18.883 5.79098C19.9533 4.60177 21.2137 3.97768 22.5 4.00009C23.384 4.00009 24.2319 4.35128 24.857 4.97641C25.4821 5.60153 25.8333 6.44937 25.8333 7.33343C25.8333 8.21748 25.4821 9.06533 24.857 9.69045C24.2319 10.3156 23.384 10.6668 22.5 10.6668"
                  stroke="#EEC830"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="text-base font-medium text-grey-04">
                Launch Discount
              </p>

              <p className="text-sm font-normal text-[#717182]">
                50% off your first delivery - exclusive for waitlist members
              </p>
            </div>
            <div className="w-full bg-background rounded-[14px] p-6 flex flex-col justify-start items-start gap-4 border border-black/10 bg-gradient-to-r from-[#f0fdf4] to-white">
              <svg
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.1907 28C14.4247 28.4054 14.7614 28.742 15.1667 28.976C15.5721 29.21 16.0319 29.3332 16.5 29.3332C16.9681 29.3332 17.4279 29.21 17.8333 28.976C18.2387 28.742 18.5753 28.4054 18.8093 28"
                  stroke="#016641"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.84934 20.4347C4.67516 20.6257 4.56021 20.8631 4.51848 21.1181C4.47674 21.3731 4.51003 21.6348 4.61428 21.8713C4.71853 22.1077 4.88925 22.3088 5.10568 22.45C5.3221 22.5913 5.57491 22.6666 5.83334 22.6667H27.1667C27.4251 22.6668 27.6779 22.5918 27.8945 22.4509C28.1111 22.3099 28.282 22.1091 28.3865 21.8728C28.491 21.6365 28.5247 21.3749 28.4833 21.1198C28.4419 20.8647 28.3272 20.6272 28.1533 20.4361C26.38 18.6081 24.5 16.6654 24.5 10.6667C24.5 8.54502 23.6571 6.51018 22.1569 5.00989C20.6566 3.5096 18.6217 2.66675 16.5 2.66675C14.3783 2.66675 12.3434 3.5096 10.8431 5.00989C9.34286 6.51018 8.5 8.54502 8.5 10.6667C8.5 16.6654 6.61867 18.6081 4.84934 20.4347Z"
                  stroke="#016641"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="text-base font-medium text-grey-04">
                Exclusive Updates
              </p>

              <p className="text-sm font-normal text-[#717182]">
                Behind-the-scenes progress and insider news
              </p>
            </div>
            <div className="w-full bg-background rounded-[14px] p-6 flex flex-col justify-start items-start gap-4 border border-black/10 bg-gradient-to-r from-[#f3f3f5] to-white">
              <svg
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.8334 9.33325H29.8334V17.3333"
                  stroke="#EEC830"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M29.8333 9.33325L18.5 20.6666L11.8333 13.9999L3.16663 22.6666"
                  stroke="#EEC830"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-base font-medium text-grey-04">
                Influence Features
              </p>
              <p className="text-sm font-normal text-[#717182]">
                Help shape the product with your feedback
              </p>
            </div>
          </div>
        </section>
      </section>
      <section
        className="w-full flex justify-center items-center py-20 px-4 bg-[#F0FDF4]"
        id="waitlist-form"
      >
        <section className="w-full max-w-[768px] flex flex-col justify-start items-center gap-12">
          <div className="w-full flex flex-col justify-start items-center gap-2">
            <h2 className="md:text-3xl text-2xl font-medium text-grey-04 text-center">
              Join the Waitlist
            </h2>
            <p className="md:text-base text-sm font-normal text-[#717182] text-center">
              Sign up now and be part of the fuel delivery revolution in Lagos
            </p>
          </div>
          <WaitListForm />
          <div className="w-full flex flex-col justify-start items-center gap-4 max-w-[768px]">
            <p className="text-center text-sm text-[#717182]">
              Refer friends and move up the waitlist!
            </p>
            <div className="flex justify-center items-center gap-4 flex-wrap">
              <p className="py-2 px-4 text-xs text-grey-04 rounded-lg border border-black/10">
                Refer 3 friends = Move up 10 spots
              </p>
              <p className="py-2 px-4 text-xs text-grey-04 rounded-lg border border-black/10">
                Refer 5 friends = Extra 10% off
              </p>
            </div>
          </div>
        </section>
      </section>
      <section className="w-full py-20 px-4 flex justify-center items-center">
        <section className="w-full max-w-[1216px] flex flex-col justify-start items-center gap-16">
          <div className="w-full flex flex-col justify-start items-center gap-2">
            <h2 className="md:text-3xl text-2xl font-medium text-grey-04 text-center">
              Join the Movement
            </h2>
            <p className="md:text-base text-sm font-normal text-[#717182]">
              Lagosians are tired of fuel queues. Are you?
            </p>
          </div>
          <div className="w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-6 gap-4">
            <div className="w-full bg-background rounded-[14px] p-6 flex flex-col justify-start items-start gap-4 border border-black/10 bg-gradient-to-r from-[#f0fdf4] to-white">
              <div className="flex justify-start items-center gap-1">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    key={index}
                  >
                    <path
                      d="M10.1042 1.91249C10.1407 1.83871 10.1971 1.7766 10.267 1.73318C10.337 1.68976 10.4177 1.66675 10.5 1.66675C10.5823 1.66675 10.663 1.68976 10.733 1.73318C10.8029 1.7766 10.8593 1.83871 10.8958 1.91249L12.8208 5.81166C12.9476 6.0683 13.1348 6.29033 13.3663 6.4587C13.5979 6.62707 13.8668 6.73675 14.15 6.77833L18.455 7.40833C18.5366 7.42015 18.6132 7.45455 18.6762 7.50766C18.7393 7.56076 18.7862 7.63045 18.8117 7.70883C18.8372 7.78721 18.8402 7.87116 18.8205 7.95119C18.8007 8.03121 18.759 8.10412 18.7 8.16166L15.5867 11.1933C15.3813 11.3934 15.2277 11.6404 15.139 11.913C15.0503 12.1856 15.0292 12.4757 15.0775 12.7583L15.8125 17.0417C15.8269 17.1232 15.8181 17.2071 15.7871 17.2839C15.7561 17.3607 15.7041 17.4272 15.6371 17.4758C15.5701 17.5245 15.4908 17.5533 15.4082 17.5591C15.3256 17.5648 15.2431 17.5472 15.17 17.5083L11.3217 15.485C11.0681 15.3518 10.786 15.2823 10.4996 15.2823C10.2132 15.2823 9.93106 15.3518 9.67749 15.485L5.82999 17.5083C5.75694 17.547 5.67449 17.5644 5.59204 17.5585C5.50958 17.5527 5.43043 17.5238 5.36357 17.4752C5.29672 17.4266 5.24485 17.3601 5.21387 17.2835C5.18289 17.2069 5.17404 17.1231 5.18833 17.0417L5.92249 12.7592C5.97099 12.4764 5.94998 12.1862 5.86128 11.9134C5.77257 11.6406 5.61883 11.3935 5.41333 11.1933L2.29999 8.16249C2.24049 8.10502 2.19832 8.03199 2.1783 7.95172C2.15827 7.87145 2.16119 7.78717 2.18673 7.70849C2.21226 7.6298 2.25938 7.55986 2.32272 7.50665C2.38607 7.45343 2.46308 7.41907 2.54499 7.40749L6.84916 6.77833C7.13271 6.73708 7.40199 6.62754 7.63381 6.45915C7.86564 6.29076 8.05308 6.06855 8.17999 5.81166L10.1042 1.91249Z"
                      fill="#EEC830"
                      stroke="#EEC830"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ))}
              </div>
              <p className="text-sm font-normal text-[#717182]">
                &ldquo;Finally! Someone is solving the fuel queue problem. I
                spend hours every week just trying to get fuel. Can&apos;t wait
                for this to launch!&rdquo;
              </p>
              <div className="flex justify-start items-center gap-3">
                <div className="size-10 flex justify-center items-center p-2 rounded-full bg-primary text-white">
                  <p>AO</p>
                </div>
                <div className="flex flex-col justify-start items-start">
                  <p className="text-base font-regular text-grey-04">
                    Adebayo O.
                  </p>
                  <p className="text-sm text-[#717182]">Victoria Island</p>
                </div>
              </div>
            </div>
            <div className="w-full bg-background rounded-[14px] p-6 flex flex-col justify-start items-start gap-4 border border-black/10 bg-gradient-to-r from-[#f0fdf4] to-white">
              <div className="flex justify-start items-center gap-1">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    key={index}
                  >
                    <path
                      d="M10.1042 1.91249C10.1407 1.83871 10.1971 1.7766 10.267 1.73318C10.337 1.68976 10.4177 1.66675 10.5 1.66675C10.5823 1.66675 10.663 1.68976 10.733 1.73318C10.8029 1.7766 10.8593 1.83871 10.8958 1.91249L12.8208 5.81166C12.9476 6.0683 13.1348 6.29033 13.3663 6.4587C13.5979 6.62707 13.8668 6.73675 14.15 6.77833L18.455 7.40833C18.5366 7.42015 18.6132 7.45455 18.6762 7.50766C18.7393 7.56076 18.7862 7.63045 18.8117 7.70883C18.8372 7.78721 18.8402 7.87116 18.8205 7.95119C18.8007 8.03121 18.759 8.10412 18.7 8.16166L15.5867 11.1933C15.3813 11.3934 15.2277 11.6404 15.139 11.913C15.0503 12.1856 15.0292 12.4757 15.0775 12.7583L15.8125 17.0417C15.8269 17.1232 15.8181 17.2071 15.7871 17.2839C15.7561 17.3607 15.7041 17.4272 15.6371 17.4758C15.5701 17.5245 15.4908 17.5533 15.4082 17.5591C15.3256 17.5648 15.2431 17.5472 15.17 17.5083L11.3217 15.485C11.0681 15.3518 10.786 15.2823 10.4996 15.2823C10.2132 15.2823 9.93106 15.3518 9.67749 15.485L5.82999 17.5083C5.75694 17.547 5.67449 17.5644 5.59204 17.5585C5.50958 17.5527 5.43043 17.5238 5.36357 17.4752C5.29672 17.4266 5.24485 17.3601 5.21387 17.2835C5.18289 17.2069 5.17404 17.1231 5.18833 17.0417L5.92249 12.7592C5.97099 12.4764 5.94998 12.1862 5.86128 11.9134C5.77257 11.6406 5.61883 11.3935 5.41333 11.1933L2.29999 8.16249C2.24049 8.10502 2.19832 8.03199 2.1783 7.95172C2.15827 7.87145 2.16119 7.78717 2.18673 7.70849C2.21226 7.6298 2.25938 7.55986 2.32272 7.50665C2.38607 7.45343 2.46308 7.41907 2.54499 7.40749L6.84916 6.77833C7.13271 6.73708 7.40199 6.62754 7.63381 6.45915C7.86564 6.29076 8.05308 6.06855 8.17999 5.81166L10.1042 1.91249Z"
                      fill="#EEC830"
                      stroke="#EEC830"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ))}
              </div>
              <p className="text-sm font-normal text-[#717182]">
                &ldquo;As a working mom, I don&apos;t have time to queue for
                fuel or cooking gas. This service will be a game-changer for my
                family.&rdquo;
              </p>
              <div className="flex justify-start items-center gap-3">
                <div className="size-10 flex justify-center items-center p-2 rounded-full bg-secondary text-white">
                  <p>CM</p>
                </div>
                <div className="flex flex-col justify-start items-start">
                  <p className="text-base font-regular text-grey-04">
                    Chioma M.
                  </p>
                  <p className="text-sm text-[#717182]">Lekki</p>
                </div>
              </div>
            </div>
            <div className="w-full bg-background rounded-[14px] p-6 flex flex-col justify-start items-start gap-4 border border-black/10 bg-gradient-to-r from-[#f0fdf4] to-white">
              <div className="flex justify-start items-center gap-1">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    key={index}
                  >
                    <path
                      d="M10.1042 1.91249C10.1407 1.83871 10.1971 1.7766 10.267 1.73318C10.337 1.68976 10.4177 1.66675 10.5 1.66675C10.5823 1.66675 10.663 1.68976 10.733 1.73318C10.8029 1.7766 10.8593 1.83871 10.8958 1.91249L12.8208 5.81166C12.9476 6.0683 13.1348 6.29033 13.3663 6.4587C13.5979 6.62707 13.8668 6.73675 14.15 6.77833L18.455 7.40833C18.5366 7.42015 18.6132 7.45455 18.6762 7.50766C18.7393 7.56076 18.7862 7.63045 18.8117 7.70883C18.8372 7.78721 18.8402 7.87116 18.8205 7.95119C18.8007 8.03121 18.759 8.10412 18.7 8.16166L15.5867 11.1933C15.3813 11.3934 15.2277 11.6404 15.139 11.913C15.0503 12.1856 15.0292 12.4757 15.0775 12.7583L15.8125 17.0417C15.8269 17.1232 15.8181 17.2071 15.7871 17.2839C15.7561 17.3607 15.7041 17.4272 15.6371 17.4758C15.5701 17.5245 15.4908 17.5533 15.4082 17.5591C15.3256 17.5648 15.2431 17.5472 15.17 17.5083L11.3217 15.485C11.0681 15.3518 10.786 15.2823 10.4996 15.2823C10.2132 15.2823 9.93106 15.3518 9.67749 15.485L5.82999 17.5083C5.75694 17.547 5.67449 17.5644 5.59204 17.5585C5.50958 17.5527 5.43043 17.5238 5.36357 17.4752C5.29672 17.4266 5.24485 17.3601 5.21387 17.2835C5.18289 17.2069 5.17404 17.1231 5.18833 17.0417L5.92249 12.7592C5.97099 12.4764 5.94998 12.1862 5.86128 11.9134C5.77257 11.6406 5.61883 11.3935 5.41333 11.1933L2.29999 8.16249C2.24049 8.10502 2.19832 8.03199 2.1783 7.95172C2.15827 7.87145 2.16119 7.78717 2.18673 7.70849C2.21226 7.6298 2.25938 7.55986 2.32272 7.50665C2.38607 7.45343 2.46308 7.41907 2.54499 7.40749L6.84916 6.77833C7.13271 6.73708 7.40199 6.62754 7.63381 6.45915C7.86564 6.29076 8.05308 6.06855 8.17999 5.81166L10.1042 1.91249Z"
                      fill="#EEC830"
                      stroke="#EEC830"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ))}
              </div>
              <p className="text-sm font-normal text-[#717182]">
                &ldquo;I love that they&apos;re using electric bikes. Good for
                the environment and solves a real problem. Signed up
                immediately!&rdquo;
              </p>
              <div className="flex justify-start items-center gap-3">
                <div className="size-10 flex justify-center items-center p-2 rounded-full bg-primary text-white">
                  <p>TK</p>
                </div>
                <div className="flex flex-col justify-start items-start">
                  <p className="text-base font-regular text-grey-04">
                    Tunde K.
                  </p>
                  <p className="text-sm text-[#717182]">Ikeja</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center gap-2 py-3.5 px-6 rounded-full bg-gradient-to-r from-[#DCFCE7] to-[#FFEDD4]">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.8334 17.5V15.8333C13.8334 14.9493 13.4822 14.1014 12.857 13.4763C12.2319 12.8512 11.3841 12.5 10.5 12.5H5.50002C4.61597 12.5 3.76812 12.8512 3.143 13.4763C2.51788 14.1014 2.16669 14.9493 2.16669 15.8333V17.5"
                stroke="#016641"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.8333 2.60645C14.5481 2.79175 15.1811 3.20917 15.633 3.79316C16.085 4.37716 16.3301 5.09469 16.3301 5.83311C16.3301 6.57154 16.085 7.28906 15.633 7.87306C15.1811 8.45706 14.5481 8.87447 13.8333 9.05978"
                stroke="#016641"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.8333 17.5001V15.8334C18.8328 15.0948 18.5869 14.3774 18.1345 13.7937C17.682 13.2099 17.0484 12.793 16.3333 12.6084"
                stroke="#016641"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.00002 9.16667C9.84097 9.16667 11.3334 7.67428 11.3334 5.83333C11.3334 3.99238 9.84097 2.5 8.00002 2.5C6.15907 2.5 4.66669 3.99238 4.66669 5.83333C4.66669 7.67428 6.15907 9.16667 8.00002 9.16667Z"
                stroke="#016641"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-sm text-grey-04">
              847+ Lagosians are already on the waitlist
            </p>
          </div>
        </section>
      </section>
    </section>
  );
}
