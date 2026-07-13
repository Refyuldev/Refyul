import drum from "@/assets/drum.webp";
import tank from "@/assets/tank.webp";
import { StaticImageData } from "next/image";
export const heroData: string[] = [
  "10-min response",
  "8am - 8pm Daily",
  "Verified Vendors and Riders",
];

export const realityData: string[] = [
  "⛽ Spending 3+ hours queuing at filling stations during scarcity",
  "💸 Paying black-market prices just to keep your generator running",
  "🌡️ Losing food, suffering heat, missing deadlines when power fails",
  "🚗 Burning fuel in traffic driving to find fuel — the ultimate irony",
  "🍳 Running out of cooking gas on a Sunday with no open vendors",
];

type simplicityDataType = {
  icon: string;
  title: string;
  description: string;
};
export const simplicityData: simplicityDataType[] = [
  {
    icon: "⛽",
    title: "Select Your Fuel",
    description:
      "Choose petrol (PMS), diesel (AGO), or cooking gas (LPG). Set your quantity and see live pricing — no hidden charges.",
  },

  {
    icon: "📍",
    title: "Drop Your Location",
    description:
      "Pin your home, office, estate gate, or generator location anywhere across Lagos. We know the streets.",
  },
  {
    icon: "⛽",
    title: "Track It Live",
    description:
      "Watch your delivery rider in real-time on the map. You'll get SMS updates and can call your driver directly.",
  },
];

export const orderData: simplicityDataType[] = [
  {
    icon: "💬",
    title: "Tap & Chat to Order",
    description:
      "Message our WhatsApp agent, tell us your fuel type, quantity, and location — we handle the rest.",
  },
  {
    icon: "💳",
    title: "Pay via Transfer or POS",
    description:
      "Pay by bank transfer, USSD, or POS on delivery. No cash handling required.",
  },
  {
    icon: "🔔",
    title: "Get Updates on WhatsApp",
    description:
      "Your agent keeps you posted — from dispatch confirmation to when the rider is at your gate.",
  },
];

type deliveryDataType = {
  icon: string | StaticImageData;
  title: string;
  description: string;
  subtext?: string;
  color: string;
  price?: string;
};
export const deliveryData: deliveryDataType[] = [
  {
    icon: "🚀",
    title: "Petrol (PMS)",
    description:
      "For cars, motorcycles, and small generators. Fresh, quality PMS sourced from licensed depots. Available daily.",
    price: "-",
    color: "text-[#006542]",
  },
  {
    icon: drum,
    title: "Diesel (AGO)",
    description:
      "For large generators, trucks, heavy equipment, and industrial machines. Bulk and small-scale available.",
    price: "-",
    color: "text-[#006542]",
  },
  {
    icon: tank,
    title: "Cooking Gas (LPG)",
    description:
      "Cylinder refills and exchanges for homes, restaurants, bakeries, and caterers. All cylinder sizes supported.",
    price: "-",
    color: "text-[#006542]",
  },
  {
    icon: "🆘",
    title: "Emergency Delivery",
    description:
      "Generator died? NEPA took light? Stranded on the road? Our emergency response is live 24/7 — even on public holidays.",
    subtext: "Priority dispatch",
    color: "text-[#B3141D]",
  },
  {
    icon: "🏭",
    title: "Bulk Business Orders",
    description:
      "Hotels, factories, estates, hospitals, and fleet operators. Get dedicated account management and volume discounts.",
    subtext: "Custom Pricing",
    color: "text-[#8114B3]",
  },
  {
    icon: "📅",
    title: "Scheduled Delivery",
    description:
      "Set it and forget it. Weekly, bi-weekly, or monthly auto-delivery so you never run dry. Works great for estates and offices.",
    subtext: "Coming Soon!",
    color: "text-[#FF9B00]",
  },
];

export const refyulWins: simplicityDataType[] = [
  {
    icon: "📍",
    title: "Real-Time GPS Tracking",
    description: `Watch your delivery rider move live on the map. Know exactly when fuel arrives — no guessing, no "I'm on the way" calls.`,
  },
  {
    icon: "🛡️",
    title: "Safe Handling Standards",
    description:
      "All riders are trained in fuel safety. We use certified tamper-proof containers and follow DPR-compliant procedures.",
  },
  {
    icon: "✅",
    title: "Verified Vendors Only",
    description:
      "Every fuel vendor on our platform is licensed, inspected, and regularly audited. No adulterated fuel. Ever.",
  },
  {
    icon: "💰",
    title: "Transparent Pricing",
    description:
      "See the exact price per litre before you order. No surprise fees. No black-market markups. What you see is what you pay.",
  },
  {
    icon: "⚡",
    title: "Fast Dispatch Network",
    description:
      "Our riders are strategically stationed across Lagos. When scarcity hits hardest, we're already prepared with pre-loaded stock.",
  },
  {
    icon: "🔔",
    title: "Scheduled & Repeat Orders",
    description:
      "Set a weekly refill schedule for your generator or gas cylinder. We'll deliver automatically — even if you forget to order.",
  },
];

type testimonialsDataType = {
  name: string;
  profession: string;
  feedback: string;
  stars: number;
};
export const testimonialsData: testimonialsDataType[] = [
  {
    name: "Ngozi Kalu",
    profession: "Homeowner, Ikoyi",
    feedback: `"NEPA just took light and my generator diesel finished. I ordered on Refyul and the rider was at my gate in 22 minutes. My freezer is still cold. God bless whoever built this app."`,
    stars: 5,
  },
  {
    name: "Taiwo Olawale",
    profession: "Restaurant Owner, Surulere",
    feedback: `"We run a restaurant in Surulere and gas is our biggest operational headache. Since Refyul, we've set up auto-refill every Friday morning. We've never run empty since. It's changed our kitchen operations completely."`,
    stars: 5,
  },
  {
    name: "Seun Adeyemi",
    profession: "Estate Manager, Magodo GRA",
    feedback: `"As an estate manager, I used to coordinate fuel buying for 40 houses every week. Refyul's bulk order feature means one click and everyone gets sorted. The pricing is transparent and the drivers are professional."`,
    stars: 5,
  },
];

type faqDataType = {
  question: string;
  answer: string;
};
export const faqData: faqDataType[] = [
  {
    question: "How fast is delivery in Lagos?",
    answer:
      "Our average delivery time is 18 minutes across all active Lagos zones. During scarcity periods, we pre-position fuel stock across the city so response times stay fast. You'll see a live ETA when you order.",
  },
  {
    question: "Is the fuel quality guaranteed?",
    answer:
      "Yes. Every vendor on our platform is DPR-licensed and undergoes regular fuel quality audits. We use tamper-proof containers and digital seals so you can trust that what's delivered matches what you ordered. We have zero tolerance for adulteration.",
  },
  {
    question: "What is the minimum order quantity?",
    answer:
      "Minimum is 10 litres for PMS and AGO, and 3kg for LPG cooking gas. There's no maximum — we handle everything from a household fill-up to bulk orders for entire estates or construction sites.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major debit/credit cards, bank transfer, USSD (for feature phones), and our Refyul Wallet which you can fund in advance. Cash is not accepted at delivery to ensure security for our riders.",
  },
  {
    question: "Is it safe to have fuel delivered to my home?",
    answer:
      "Absolutely. All our riders are trained in fuel safety handling, first aid, and emergency procedures. We use certified, non-sparking dispensing equipment. Our operations comply fully with Lagos State Fire Safety regulations and NMDPRA guidelines.",
  },
  {
    question: "What if i’m outside your delivery coverage?",
    answer:
      "Drop your address on our waitlist and you'll be notified the moment we expand to your area. We're adding new Lagos zones monthly and will launch in Abuja, Port Harcourt, and Ibadan later this year.",
  },
  {
    question: "Can I order for my business or fleet?",
    answer:
      "Yes! We have dedicated Business Accounts with bulk pricing, monthly invoicing, fleet management features, and a dedicated account manager. Contact us at business@refyul.org to set up your business account.",
  },
];

export const servicesData: string[] = [
  "Petrol Delivery (PMS)",
  "Diesel Supply (AGO)",
  "Cooking Gas (LPG)",
  "Emergency Delivery",
  "Bulk Business Orders",
  "Scheduled Delivery",
];
export const companyData: string[] = [
  "About Refyul",
  "Become a Vendor",
  "Careers - We're Hiring",
  "Blog",
  "Investor Relations",
];
export const contactData: string[] = [
  "+2348158440088",
  "info@refyul.org",
  "19 Seriki street Idi-Araba, Mushin, Lagos",
];
