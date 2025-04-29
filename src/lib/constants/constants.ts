import { IconType } from "react-icons";
import {
  FaAppleAlt,
  FaBalanceScale,
  FaBrain,
  FaChartLine,
  FaClipboardList,
  FaDumbbell,
  FaHandsHelping,
  FaHeartbeat,
  FaLeaf,
  FaLightbulb,
  FaRedoAlt,
  FaRegSmile,
  FaRoad,
  FaRunning,
  FaSpa,
  FaUserMd,
  FaUsers,
  FaUserShield,
} from "react-icons/fa";
import {
  GiMonsteraLeaf,
  GiVineLeaf,
  GiChestnutLeaf,
  GiYinYang,
  GiFlowerEmblem,
  GiFlowerTwirl,
  GiCottonFlower,
  GiTwirlyFlower,
  GiFlowerStar,
  GiSunCloud,
  GiLindenLeaf,
} from "react-icons/gi";
import { ImDiamonds, ImHeart, ImLeaf, ImStarFull, ImSun } from "react-icons/im";
import { IoIosFlower } from "react-icons/io";
import {
  PiAcornFill,
  PiAnchorSimpleBold,
  PiCloverFill,
  PiFlowerDuotone,
  PiFlowerLotus,
  PiFlowerLotusDuotone,
  PiFlowerLotusFill,
  PiHeartDuotone,
} from "react-icons/pi";
import {
  RiBardFill,
  RiBardLine,
  RiBlueskyFill,
  RiCentosFill,
  RiFlowerFill,
  RiLeafFill,
} from "react-icons/ri";

export const icons: IconType[] = [
  PiFlowerLotusFill,
  GiLindenLeaf,
  RiBlueskyFill,
  PiFlowerLotusDuotone,
  RiFlowerFill,
  PiCloverFill,
  GiFlowerEmblem,
  GiCottonFlower,
  ImDiamonds,
  FaLeaf,
  GiMonsteraLeaf,
  GiTwirlyFlower,
  GiYinYang,
  RiBardFill,
  RiCentosFill,
  RiLeafFill,
  PiAnchorSimpleBold,
  ImLeaf,
  ImSun,
  GiChestnutLeaf,
  PiHeartDuotone,
  PiAcornFill,
  GiFlowerTwirl,
  GiVineLeaf,
  PiFlowerDuotone,
  ImStarFull,
  PiFlowerLotus,
  GiFlowerStar,
  IoIosFlower,
  RiBardLine,
  ImHeart,
  GiSunCloud,
].filter((icon) => typeof icon === "function");

// ==================== MAIN PAGE ==================== //
export const empowerHealthFeatures = [
  {
    name: "Empower Your Health Journey",
    description:
      "Take full ownership of your well-being with expert-led programs that are personalized to your goals and lifestyle.",
    href: "#",
    icon: FaHeartbeat,
  },
  {
    name: "Personalized Guidance & Support",
    description:
      "Benefit from individualized coaching and resources that equip you with the confidence to make empowered health decisions.",
    href: "#",
    icon: FaUserShield,
  },
  {
    name: "Achieve Sustainable Growth",
    description:
      "Reach your wellness goals with structured plans that promote long-term success, resilience, and vitality.",
    href: "#",
    icon: FaChartLine,
  },
  {
    name: "Expert-Led Wellness Programs",
    description:
      "Access a team of seasoned wellness professionals committed to helping you achieve a life of balance and energy.",
    href: "#",
    icon: FaHandsHelping,
  },
  {
    name: "Knowledge-Driven Health Solutions",
    description:
      "Gain the education and insights needed to make smart, lasting choices about your physical and emotional health.",
    href: "#",
    icon: FaLightbulb,
  },
  {
    name: "Natural and Holistic Approaches",
    description:
      "Experience the benefits of all-encompassing wellness protocols that align with your body’s natural rhythm and needs.",
    href: "#",
    icon: FaLeaf,
  },
  {
    name: "Balance for a Powerful Life",
    description:
      "Integrate mind, body, and lifestyle strategies to cultivate true health harmony and lasting strength.",
    href: "#",
    icon: FaBalanceScale,
  },
  {
    name: "Your Personalized Path Forward",
    description:
      "Begin a guided journey towards improved energy, greater fulfillment, and a healthier future with Harmona Health.",
    href: "#",
    icon: FaRoad,
  },
];

export const supportFeatures = [
  {
    name: "Holistic Fitness Training",
    description:
      "Enhance your strength, flexibility, and endurance through programs designed to support your full well-being.",
    icon: FaDumbbell,
  },
  {
    name: "Personalized Nutrition Coaching",
    description:
      "Fuel your transformation with meal plans and nutritional strategies customized to your body and lifestyle.",
    icon: FaAppleAlt,
  },
  {
    name: "Emotional Wellness Support",
    description:
      "Strengthen your emotional resilience and cultivate mental clarity with guided therapeutic practices.",
    icon: FaHeartbeat,
  },
  {
    name: "Mind-Body Integration",
    description:
      "Create harmony between physical movement and mental mindfulness to achieve sustainable wellness.",
    icon: FaSpa,
  },
  {
    name: "Sustainable Lifestyle Changes",
    description:
      "Develop life-long healthy habits and routines that promote vibrant, lasting change.",
    icon: FaRedoAlt,
  },
  {
    name: "Expert-Led Guidance",
    description:
      "Access top-tier wellness professionals to guide your fitness, nutrition, and emotional health journey.",
    icon: FaUserMd,
  },
  {
    name: "Customized Wellness Protocols",
    description:
      "Follow proven, personalized protocols that blend fitness, nutrition, and emotional support into one plan.",
    icon: FaClipboardList,
  },
  {
    name: "Thrive with Community Support",
    description:
      "Connect with a like-minded community focused on growth, healing, and long-term well-being.",
    icon: FaUsers,
  },
  {
    name: "Mental Clarity Training",
    description:
      "Sharpen your focus and reduce stress with mindfulness exercises and brain-training techniques.",
    icon: FaBrain,
  },
  {
    name: "Natural Healing Approaches",
    description:
      "Incorporate holistic therapies and natural strategies to accelerate your wellness journey.",
    icon: FaLeaf,
  },
  {
    name: "Joyful Living Practices",
    description:
      "Rediscover joy, gratitude, and daily fulfillment as essential elements of your overall health.",
    icon: FaRegSmile,
  },
  {
    name: "Dynamic Movement Therapy",
    description:
      "Engage in energizing movement practices that enhance mobility, balance, and vitality.",
    icon: FaRunning,
  },
];

export const wellnessJourneyStats = [
  {
    id: 1,
    name: "Personalized Wellness Programs Completed",
    value: "4,200+",
  },
  {
    id: 3,
    name: "Certified Wellness Experts",
    value: "25+",
  },
  {
    id: 5,
    name: "Mindfulness and Mental Clarity Sessions",
    value: "15,000+",
  },
  {
    id: 6,
    name: "Average Client Success Rate",
    value: "92%",
  },
  {
    id: 7,
    name: "Customized Wellness Plans Delivered",
    value: "1,800+",
  },
  {
    id: 8,
    name: "Years of Combined Expertise",
    value: "75+",
  },
  {
    id: 9,
    name: "Clients Reporting Improved Vitality",
    value: "98%",
  },
  {
    id: 10,
    name: "Supportive Wellness Community Members",
    value: "3,500+",
  },
];