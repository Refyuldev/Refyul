type herodataType = {
  price: string;
  text: string;
};
type gridSectionsType = {
  icon: string;
  title: string;
  desc: string;
  color?: string;
};

export const heroData: herodataType[] = [
  {
    price: "₦300",
    text: "per first qualifying order",
  },
  {
    price: "₦5,000",
    text: "minimum wallet cashout",
  },
];

export const whyJoinData: gridSectionsType[] = [
  {
    icon: "N",
    title: "Earn ₦300",
    desc: "Get paid for every new customer who places their first qualifying order with your code or link.",
  },
  {
    icon: "0",
    title: "Zero hassle",
    desc: "No inventory, logistics, or upfront cost.",
  },
  {
    icon: "↗",
    title: "Track everything",
    desc: "Watch referrals and earnings in real time.",
  },
  {
    icon: "✓",
    title: "Get Paid",
    desc: "Cash out to your Nigerian bank account whenever you reach ₦5,000.",
  },
];
export const worksData: gridSectionsType[] = [
  {
    icon: "01",
    title: "Sign up",
    desc: "Fill the short form below. Once approved,you get your own personal referral code and link.",
    color: "#E8F7ED",
  },
  {
    icon: "02",
    title: "Share",
    desc: "Send your code or link to friends, family, neighbours, estate groups, campus groups, or your followers.",
    color: "#FFF8D7",
  },
  {
    icon: "03",
    title: "Earn",
    desc: "When your referral places their first qualifying order, N300 lands in your ambassador wallet.",
    color: "#E8F7ED",
  },
];
