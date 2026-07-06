import Navbar from "@/components/navbar";
import { heroData, whyJoinData, worksData } from "@/data/ambassadorData";
import Image from "next/image";
import Link from "next/link";
import drum from "@/assets/drum.webp";
import tank from "@/assets/tank.webp";
import phoneHero from "@/assets/phonehero.webp";

export default function AmbassadorPage() {
  return (
    <section className="w-full flex flex-col justify-start items-start gap-0 bg-[#f3fbf5] relative font-inter">
      {/* Hero Section */}
      <section className="w-full hero-bg relative flex flex-col justify-center items-center">
        <Navbar />
        <section className="w-full relative max-w-[1442px] pt-32 pb-16 mx-auto flex lg:flex-row flex-col justify-between items-center gap-8">
          <section className="flex flex-col justify-start items-start gap-10 max-w-[710px] px-8">
            <div className="w-full flex flex-col justify-start items-start gap-2">
              <span className="bg-[#E8F7ED] py-1 px-3.5 text-[#009B5A] text-sm rounded-full font-medium uppercase leading-tight">
                JOIN FREE / NOW EARNING
              </span>
              <h1 className="md:text-[64px] sm:text-5xl text-4xl leading-tight font-extrabold text-secondary font-syne relative z-10">
                Become a Refyul Ambassador
              </h1>
              <p className="md:text-[42px] sm:text-3xl text-2xl text-[#D9B900] font-medium font-syne leading-tight">
                Get paid to end fuel scarcity for people around you
              </p>
              <p className="text-base leading-tight text-[#607274] w-full max-w-[735px]">
                Refer your friends, neighbors, estate, and community to Refyul.
                Every time someone you bring orders fuel or gas with us, you
                earn. No stock to hold, no deliveries to make.
              </p>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-10">
              <div className="w-full text-center flex sm:flex-row flex-col justify-start items-center gap-6">
                <Link
                  href="/"
                  className="bg-[#F9CE2F] rounded-full text-white md:py-2.5 py-1.5 md:px-5 px-3 md:text-lg text-base font-bold font-nunito btn-shadow sm:w-auto w-full"
                >
                  Become an Ambassador
                </Link>
                <Link
                  href="/"
                  className="rounded-full text-[#234D10] md:py-2.5 py-1.5 md:px-5 px-3 md:text-lg text-base font-bold font-nunito sm:w-auto w-full bg-white"
                >
                  How it works
                </Link>
              </div>
              <div className="flex flex-wrap justify-start items-center md:gap-6 gap-3">
                {heroData.map((item, index) => (
                  <div
                    className="w-full max-w-[296px] h-full bg-white flex justify-center items-center gap-2 px-[18px] py-[22px] border border-[#D8E7DF] rounded-lg"
                    key={item.text}
                  >
                    <p className="text-[#009B5A] leading-none md:text-4xl text-2xl font-bold">
                      {item.price}
                    </p>
                    <p className="md:text-base text-sm font-inter leading-tight text-[#607274]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="flex justify-center items-center lg:shrink-0 lg:ml-0 ml-auto">
            <Image
              src={phoneHero}
              alt="Hero Image"
              width={355}
              height={513}
              className="w-full max-w-[355px] object-contain lg:shrink-0 relative z-10"
            />
          </section>
        </section>
      </section>
      {/* Why Join Section */}
      <section className="w-full flex justify-center items-center py-20 px-4 sm:px-8 bg-white">
        <section className="w-full max-w-[1442px] flex flex-col justify-start items-center gap-16">
          <div className="w-full max-w-[1086px] flex flex-col justify-start items-center text-center gap-5">
            <span className="bg-[#E8F7ED] py-1 px-3.5 text-[#009B5A] text-sm rounded-full font-medium uppercase leading-tight">
              WHY JOIN
            </span>
            <h2 className="md:text-[48px] text-3xl leading-tight font-extrabold text-secondary font-syne">
              Earn from something you already do: Recommending Refyul
            </h2>
            <p className="text-base leading-tight text-[#7D7D7D] w-full max-w-[803px]">
              Lagosians already tell each other where to get fuel without the
              queue. As a Refyul Ambassador, that word-of-mouth finally pays you
              back.
            </p>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6">
            {whyJoinData.map((item, index) => (
              <div
                key={index}
                className="w-full flex flex-col justify-start items-start text-start gap-3.5 card-shadow bg-white rounded-xl p-6"
              >
                <span className="bg-[#E8F7ED] rounded-lg size-12 text-xl flex justify-center items-center text-[#009B5A] font-extrabold">
                  {item.icon}
                </span>
                <h3 className="text-xl font-bold text-[#0A0A0A]">
                  {item.title}
                </h3>
                <p className="text-base text-[#717182]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
      {/* works */}
      <section className="w-full flex justify-center items-center py-20 px-4 sm:px-8">
        <section className="w-full max-w-[1442px] flex flex-col justify-start items-center gap-16">
          <div className="w-full max-w-[778px] flex flex-col justify-start items-center text-center gap-5">
            <span className="bg-[#E8F7ED] py-1 px-3.5 text-[#009B5A] text-sm rounded-full font-medium uppercase leading-tight">
              HOW IT WORKS
            </span>
            <h2 className="md:text-[48px] text-3xl leading-tight font-extrabold text-secondary font-syne">
              Start earning in 3 simple steps
            </h2>
            <p className="md:text-[22px] text-base leading-tight text-[#7D7D7D] w-full max-w-[735px]">
              No filling station needed. No queue. Just open the app, place your
              order, and we handle the rest.
            </p>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
            {worksData.map((item, index) => (
              <div
                key={index}
                className={`w-full flex flex-col justify-center items-center text-center gap-3.5 rounded-xl p-6 border border-[#D8E7DF]`}
                style={{
                  backgroundColor: index % 2 === 0 ? "#E8F7ED" : "#FFF8D7",
                }}
              >
                <span className="text-[#009B5A] md:text-4xl text-2xl font-syne font-bold leading-none">
                  {item.icon}
                </span>
                <h3 className="text-xl font-bold text-[#0A0A0A]">
                  {item.title}
                </h3>
                <p className="text-base text-[#717182]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
      {/* Earnings rules */}
      <section className="w-full flex justify-center items-center bg-white">
        <section className="w-full max-w-[1442px] pt-14 pb-28 sm:px-8 px-4 mx-auto flex lg:flex-row flex-col justify-between items-center gap-1">
          <section className="flex flex-col justify-start items-start gap-6 lg:max-w-[780px] max-w-full">
            <div className="w-full flex flex-col justify-start items-start gap-2">
              <span className="bg-[#E8F7ED] py-1 px-3.5 text-[#009B5A] text-sm rounded-full font-medium uppercase leading-tight">
                THE EARNING RULES
              </span>
              <h2 className="md:text-[48px] text-3xl leading-tight font-extrabold text-secondary font-syne">
                What counts as a qualifying order
              </h2>
            </div>
            <p className="text-base leading-tight text-[#7D7D7D] w-full max-w-[735px]">
              You earn the N300 reward only when a customer you referred
              completes a qualifying first order.
            </p>
            <div className="w-full overflow-x-auto">
              <table className="w-full border-collapse table-fixed">
                <thead>
                  <tr className="bg-[#E8F7ED] border border-[#D8E7DF] text-left">
                    <th className="sm:py-4 py-3 sm:px-6 px-4 sm:text-xl text-base font-semibold text-[#12393B] border border-[#D8E7DF]">
                      Fuel type
                    </th>
                    <th className="sm:py-4 py-3 sm:px-6 px-4 sm:text-xl text-base font-semibold text-[#12393B] border border-[#D8E7DF]">
                      Minimum volume
                    </th>
                    <th className="sm:py-4 py-3 sm:px-6 px-4 sm:text-xl text-base font-semibold text-[#12393B] border border-[#D8E7DF]">
                      You earn
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="w-full text-left">
                    <td className="sm:py-4 py-3 sm:px-6 px-4 text-base font-normal text-[#12393B] border border-[#D8E7DF]">
                      Petrol (PMS) ⛽
                    </td>
                    <td className="sm:py-4 py-3 sm:px-6 px-4 text-sm font-normal text-[#12393B] border border-[#D8E7DF]">
                      Above 5 litres
                    </td>
                    <td className="sm:py-4 py-3 sm:px-6 px-4 text-base font-bold text-[#009B5A] border border-[#D8E7DF]">
                      ₦300
                    </td>
                  </tr>
                  <tr className="w-full text-left">
                    <td className="sm:py-4 py-3 sm:px-6 px-4 text-base font-normal text-[#12393B] border border-[#D8E7DF]">
                      <div className="flex flex-wrap justify-start items-center gap-1">
                        <p>Diesel (AGO) </p>
                        <Image
                          src={drum}
                          alt="diesel drum"
                          width={36}
                          height={36}
                          className="w-9 h-9 object-contain"
                        />
                      </div>
                    </td>
                    <td className="py-4 px-6 text-sm font-normal text-[#12393B] border border-[#D8E7DF]">
                      Above 5 litres
                    </td>
                    <td className="py-4 px-6 text-base font-bold text-[#009B5A] border border-[#D8E7DF]">
                      ₦300
                    </td>
                  </tr>
                  <tr className="w-full text-left">
                    <td className="py-4 px-6 text-base font-normal text-[#12393B] border border-[#D8E7DF]">
                      <div className="flex flex-wrap justify-start items-center gap-1">
                        <p>Cooking gas (LPG)</p>
                        <Image
                          src={tank}
                          alt="gas tank"
                          width={36}
                          height={36}
                          className="w-9 h-9 object-contain"
                        />
                      </div>
                    </td>
                    <td className="py-4 px-6 text-sm font-normal text-[#12393B] border border-[#D8E7DF]">
                      Above 5 litres
                    </td>
                    <td className="py-4 px-6 text-base font-bold text-[#009B5A] border border-[#D8E7DF]">
                      ₦300
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="w-full bg-[#FFF8D7] border border-[#D8E7DF] rounded-md flex flex-col justify-start items-start gap-4 py-3.5 px-5">
              <p className="md:text-xl text-lg text-[#12393B] font-bold">
                Simple rules
              </p>
              <p className="text-base font-normal text-[#12393B] leading-tight">
                One-time reward per referred customer. Paid and completed orders
                only. Orders below the minimum volume, cancelled orders, or
                unpaid orders do not earn a reward.
              </p>
            </div>
          </section>
          <section className="w-full flex justify-center items-center">
            <div className="w-full lg:max-w-[350px] max-w-full bg-white rounded-2xl p-6 border border-[#D8E7DF] flex flex-col justify-start items-start gap-4">
              <span className="bg-[#E8F7ED] py-1 px-3.5 text-[#009B5A] text-sm rounded-full font-medium uppercase leading-tight">
                ELIGIBILITY
              </span>
              <p className="text-[#12393B] font-bold sm:text-xl text-lg">
                Who can become an ambassador
              </p>
              <p className="text-[#607274] sm:text-base text-sm">
                The program is open to anyone who can introduce Refyul to real
                customers in our delivery areas.
              </p>
              <ul className="text-[#607274] sm:text-base text-sm list-disc list-inside ml-1">
                <li>Students, creators, or community influencers.</li>
                <li>
                  Estate managers, caretakers, and neighbourhood connectors.
                </li>
                <li>Drivers, artisans, traders, and regular fuel buyers.</li>
                <li>Anyone 18+ with a valid Nigerian bank account.</li>
              </ul>
            </div>
          </section>
        </section>
      </section>
      {/* CTA */}
      <section className="w-full flex justify-center items-center py-20 px-4 sm:px-8 bg-white">
        <section className="w-full flex flex-col justify-center items-center gap-3 text-center">
          <h2 className="md:text-[48px] text-3xl leading-tight font-extrabold text-secondary font-syne">
            Turn your network into income.
          </h2>
          <p className="text-base leading-tight text-[#7D7D7D] w-full max-w-[735px] text-center">
            Join the ambassadors already earning by helping Lagos beat fuel
            scarcity.
          </p>
          <Link
            href="/"
            className="bg-[#F9CE2F] mt-4 rounded-full text-white md:py-2.5 py-1.5 md:px-5 px-3 md:text-lg text-base font-bold font-nunito btn-shadow sm:w-auto w-full"
          >
            Become an Ambassador
          </Link>
        </section>
      </section>
    </section>
  );
}
