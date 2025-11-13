import Image from "next/image";
import logo from "@/assets/logo.webp";
import twitterLogo from "@/assets/Group.png";
import instagramLogo from "@/assets/skill-icons_instagram.png";
import linkedInLogo from "@/assets/devicon_linkedin.png";
import tiktokLogo from "@/assets/streamline-plump_tiktok-solid.png";
import Link from "next/link";

export const Footer = () => {
  return (
    <section className="w-full bg-[F9FAFB] pt-12 pb-24 flex justify-center items-center px-6 border-t border-t-black/10">
      <section className="w-full max-w-[1280px] flex flex-col justify-start items-start">
        <div className="w-full flex md:flex-row flex-col justify-around items-center gap-5">
          <div className="flex justify-start items-center gap-4">
            <Image
              alt="logo"
              src={logo}
              width={36}
              height={52}
              className="w-full md:max-w-[36px] max-w-[24px] object-contain"
            />
            <p className="md:text-4xl text-2xl font-bold text-primary">
              Refyul
            </p>
          </div>
          <div className="flex justify-center items-center md:gap-10 gap-4 flex-wrap ">
            <Link
              href={"https://x.com/refyulltd?t=ICHsSATQ2Xn3HQj3Tl4ZCA&s=08"}
              target="_blank"
              className="flex flex-col justify-start items-center gap-0"
            >
              <Image
                src={twitterLogo}
                alt="twitter"
                width={40}
                height={40}
                className="md:w-10 w-8 object-contain"
              />
              <p className="text-sm whitespace-nowrap font-medium text-black">
                @refyulltd
              </p>
            </Link>
            <Link
              href={"https://www.instagram.com/refyul.ltd"}
              target="_blank"
              className="flex flex-col justify-start items-center gap-0"
            >
              <Image
                src={instagramLogo}
                alt="twitter"
                width={40}
                height={40}
                className="md:w-10 w-8 object-contain"
              />
              <p className="text-sm whitespace-nowrap font-medium text-black">
                @refyul.ltd
              </p>
            </Link>
            <Link
              href={"https://www.linkedin.com/company/refyul/"}
              target="_blank"
              className="flex flex-col justify-start items-center gap-0"
            >
              <Image
                src={linkedInLogo}
                alt="twitter"
                width={40}
                height={40}
                className="md:w-10 w-8 object-contain"
              />
              <p className="text-sm whitespace-nowrap font-medium text-black">
                Refyul ltd
              </p>
            </Link>
            <Link
              href={"https://www.tiktok.com/@refyul.ltd?_r=1&_t=ZS-91KYuGBoG73"}
              target="_blank"
              className="flex flex-col justify-start items-center gap-0"
            >
              <Image
                src={tiktokLogo}
                alt="twitter"
                width={40}
                height={40}
                className="md:w-10 w-8 object-contain"
              />
              <p className="text-sm whitespace-nowrap font-medium text-black">
                @refyul.ltd
              </p>
            </Link>
          </div>
        </div>
        <div className="w-full border-t border-t-black/10 pt-8 text-center">
          <p className="text-sm font-normal text-[#717182]">
            &copy; 2025 Refyul. All rights reserved.{" "}
          </p>
        </div>
      </section>
    </section>
  );
};
