import { PiFlowerLotusFill } from "react-icons/pi";

import {
  GiMeal,
  GiMeditation,
  GiOfficeChair,
  GiWeightLiftingUp,
} from "react-icons/gi";
import { ServiceCategory } from "@/lib/interfaces&types/services";

export const serviceCategories: ServiceCategory[] = [
  {
    id: "wellness-programs",
    title: "Wellness Programs",
    icon: PiFlowerLotusFill,
    introduction: [
      "Our Wellness Programs are crafted to bring harmony to the mind, body, and spirit through a blend of holistic practices rooted in modern science and traditional healing methods. These programs incorporate evidence-based techniques such as mindful movement, personalized nutrition, functional medicine, breathwork, meditation, and lifestyle coaching to provide a comprehensive system of support.",
      "Each program emphasizes sustainable lifestyle changes, natural interventions, and mind-body practices that promote long-term health. Whether you're looking to manage chronic stress, boost your energy, recover from burnout, or build emotional resilience, our tailored programs are designed to meet you exactly where you are on your wellness journey.",
      "Embark on a personalized journey that nurtures your physical vitality, emotional balance, and mental clarity. With the guidance of dedicated experts, you'll experience a transformative shift toward balance, vitality, and self-empowerment. Our mission is to help you cultivate sustainable habits that foster long-term health, inner peace, and a truly fulfilling lifestyle.",
    ],
    description:
      "Holistic programs tailored to balance mind, body, and spirit.",
  },
  {
    id: "nutrition-coaching",
    title: "Nutrition Coaching",
    icon: GiMeal,
    introduction: [
      "Our Nutrition Coaching services take a personalized approach to transforming your diet and lifestyle, grounded in the principles of functional nutrition. We collaborate with you to evaluate your current eating habits, identify areas for improvement, and create a tailored plan that aligns with your unique goals and preferences. These programs emphasize whole, nutrient-rich foods, intuitive eating, blood sugar balance, gut health, and mindful consumption.",
      "Our expert coaches design practical and enjoyable strategies that fit seamlessly into your lifestyle. We understand that nutrition is not a one-size-fits-all solution, so whether you're managing a chronic condition, aiming to boost your energy, support hormonal health, or achieve athletic milestones, your plan is customized to meet your specific needs.",
      "To make healthy living simple and sustainable, we provide actionable tools such as meal prep guides, shopping lists, and supplement recommendations. Our mission goes beyond improving your diet — we aim to inspire a deeper connection with your body and foster a healthier relationship with food. Learn how to nourish yourself with confidence and intention, building habits that support long-term health and vitality.",
    ],
    description: "Personalized meal planning and dietary guidance.",
  },
  {
    id: "fitness-training",
    title: "Fitness Training",
    icon: GiWeightLiftingUp,
    introduction: [
      "Our Fitness Training services go beyond traditional workout plans, offering a comprehensive approach to physical empowerment, resilience, and overall well-being. We provide personalized one-on-one training, small group sessions, and specialized programs tailored to your unique fitness level and goals. Whether you're just starting your fitness journey or striving for elite performance, we help you build strength, improve endurance, and achieve your physical fitness aspirations in a supportive and motivating environment.",
      "Each training program is carefully designed to prioritize proper form, reduce the risk of injury, and deliver long-term improvements in strength and mobility. Our approach combines strength training, cardiovascular conditioning, flexibility exercises, core stabilization, and recovery techniques into a dynamic system that adapts to your evolving needs. We focus on functional strength, endurance, mobility, and injury prevention, empowering you to move with confidence and freedom.",
      "Every training plan is customized to align with your personal fitness journey, ensuring consistent progress, sustained motivation, and long-term success. With expert coaching and a positive, encouraging atmosphere, you'll not only see physical transformations but also experience enhanced mental clarity, improved self-confidence, and a renewed passion for movement. Our philosophy is simple: fitness should be accessible, sustainable, and deeply rewarding for everyone, regardless of their starting point or goals.",
    ],
    description: "One-on-one and group training for all fitness levels.",
  },
  {
    id: "mental-health",
    title: "Mental Health Support",
    icon: GiMeditation,
    introduction: [
      "Our Mental Health Support services are founded on the belief that emotional well-being is essential to every aspect of life. We provide a wide range of services, including mindfulness-based stress reduction (MBSR), cognitive behavioral therapy (CBT), guided meditation, trauma-informed care, and resilience coaching. Our compassionate approach acknowledges the uniqueness of each individual's journey, offering a safe and supportive space where you feel seen, heard, and valued.",
      "Whether you're navigating anxiety, depression, trauma recovery, burnout, or simply seeking greater self-awareness, we provide tools and strategies to help you build sustainable mental health. Our services are designed to empower you with mindfulness practices, coping mechanisms, and emotional resilience to face life's challenges with confidence.",
      "Our goal is to guide you toward healing and balance, recognizing that the path to well-being is not always linear. We walk alongside you as you cultivate emotional intelligence, inner peace, and a renewed connection to your inner strength. Ultimately, we aim to help you thrive mentally and emotionally, enabling you to live a life filled with joy, presence, and purpose.",
    ],
    description:
      "Guided practices and licensed therapy sessions for emotional wellness.",
  },
  {
    id: "corporate-wellness",
    title: "Corporate Wellness",
    icon: GiOfficeChair,
    introduction: [
      "Our Corporate Wellness solutions are thoughtfully designed to help organizations prioritize the well-being of their teams, recognizing that a healthy workplace fosters greater productivity, creativity, and resilience. We offer dynamic, results-oriented wellness programs that include stress management workshops, mental health resources, mindfulness training, leadership resilience coaching, fitness programs, ergonomic assessments, and customized wellness challenges. By cultivating a culture of well-being, we empower businesses to create healthier, more engaged workplaces where employees can thrive.",
      "Our programs are flexible and adaptable, catering to both in-person and remote teams to ensure accessibility for all work environments. By promoting a culture that values health and balance, companies can experience improved employee engagement, reduced absenteeism, higher job satisfaction, and stronger team morale. We provide workshops, wellness challenges, and coaching programs that inspire employees to take charge of their well-being and embrace healthier lifestyles.",
      "We work closely with leadership teams to align wellness initiatives with organizational goals, creating a lasting impact that benefits the entire company. Investing in your team's health is more than just a perk — it's a transformative strategy for long-term success and innovation. By fostering healthier workplaces, we help businesses boost morale, reduce burnout, and achieve sustainable growth.",
    ],
    description:
      "Health solutions for teams and organizations to foster productivity and well-being.",
  },
];
