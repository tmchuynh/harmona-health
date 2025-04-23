import { SubService } from "@/lib/interfaces&types/services";

export const subServices: SubService[] = [
  // Wellness Programs
  {
    id: "personalized-wellness",
    categoryId: "wellness-programs",
    title: "Personalized Wellness Journey",
    description:
      "Custom 8-week holistic program integrating nutrition, fitness, and mindfulness.",
    introduction:
      "A comprehensive lifestyle transformation plan tailored to your body, habits, and goals.",
    tiers: [
      { tier: "basic", description: "Initial assessment + Weekly plans" },
      { tier: "growth", description: "Includes bi-weekly coaching calls" },
      {
        tier: "scale",
        description:
          "Full support with personalized therapist and fitness trainer",
      },
    ],
  },
  {
    id: "hormonal-balance",
    categoryId: "wellness-programs",
    title: "Hormonal Balance Protocol",
    description:
      "Balance key hormones through natural interventions, lab insights, and lifestyle shifts.",
    introduction:
      "A targeted approach to understanding and correcting hormonal imbalances using natural and science-backed methods.",
    tiers: [
      {
        tier: "basic",
        description: "Hormone symptom questionnaire + general recommendations",
      },
      {
        tier: "growth",
        description: "Hormone-specific lifestyle plan + functional food guide",
      },
      {
        tier: "scale",
        description:
          "Lab test analysis + supplement protocol + integrative coaching",
      },
    ],
  },
  {
    id: "sleep-coaching",
    categoryId: "wellness-programs",
    title: "Sleep Optimization Coaching",
    description:
      "Improve your sleep hygiene, reset your circadian rhythm, and optimize your nightly routine.",
    tiers: [
      {
        tier: "basic",
        description: "Sleep assessment + core habit recommendations",
      },
      {
        tier: "growth",
        description: "Includes sleep tracking + bi-weekly coaching",
      },
      {
        tier: "scale",
        description:
          "Personalized sleep plan + device integration + weekly sessions",
      },
    ],
  },
  {
    id: "detox-reset",
    categoryId: "wellness-programs",
    title: "Detox & Reset Program",
    description:
      "A 14-day cleanse focusing on gut health, inflammation reduction, and habit building.",
    tiers: [
      { tier: "basic", description: "Cleanse guide + meal recommendations" },
      { tier: "growth", description: "Includes 1-on-1 detox coaching" },
      {
        tier: "scale",
        description: "Meal delivery + daily check-ins + coaching",
      },
    ],
  },

  // Nutrition Coaching
  {
    id: "meal-planning",
    categoryId: "nutrition-coaching",
    title: "Custom Meal Planning",
    description:
      "Structured meal plans based on your lifestyle, health goals, and preferences.",
    tiers: [
      { tier: "basic", description: "One-time 7-day meal plan" },
      { tier: "growth", description: "Monthly meal planning + check-ins" },
      {
        tier: "scale",
        description: "Live support + custom recipes + shopping lists",
      },
    ],
  },
  {
    id: "digestive-health",
    categoryId: "nutrition-coaching",
    title: "Digestive Health Program",
    description:
      "Heal your gut and restore digestive balance through food, habits, and targeted supplements.",
    tiers: [
      {
        tier: "basic",
        description: "Digestive guide + food sensitivity overview",
      },
      { tier: "growth", description: "Weekly food journal reviews + coaching" },
      {
        tier: "scale",
        description:
          "Lab testing + GI protocol + personalized supplement support",
      },
    ],
  },
  {
    id: "supplement-guidance",
    categoryId: "nutrition-coaching",
    title: "Supplement Guidance",
    description: "Recommendations based on lab work, goals, and diet gaps.",
    tiers: [
      { tier: "basic", description: "Initial consultation + plan" },
      { tier: "growth", description: "Includes follow-up + retesting" },
      {
        tier: "scale",
        description: "Full supplement regimen + discount access to top brands",
      },
    ],
  },

  // Fitness Training
  {
    id: "online-fitness-coaching",
    categoryId: "fitness-training",
    title: "Online Fitness Coaching",
    description:
      "Train from anywhere with tailored workout plans and virtual check-ins.",
    tiers: [
      { tier: "basic", description: "Workout templates + monthly check-in" },
      {
        tier: "growth",
        description: "Weekly video sessions + progression tracking",
      },
      {
        tier: "scale",
        description: "Daily accountability, custom workouts, nutrition sync",
      },
    ],
  },
  {
    id: "mobility-recovery",
    categoryId: "fitness-training",
    title: "Mobility & Recovery Program",
    description:
      "Reduce soreness, improve range of motion, and enhance body mechanics.",
    tiers: [
      {
        tier: "basic",
        description: "Self-guided stretching + foam rolling protocols",
      },
      {
        tier: "growth",
        description: "Video assessments + monthly mobility classes",
      },
      {
        tier: "scale",
        description: "Custom recovery plan + 1-on-1 mobility coaching",
      },
    ],
  },
  {
    id: "metabolic-optimization",
    categoryId: "fitness-training",
    title: "Metabolic Health Optimization",
    description:
      "Optimize your metabolism using data, diet, and movement strategies tailored to your physiology.",
    tiers: [
      {
        tier: "basic",
        description: "Macro guidance + baseline metabolic habits",
      },
      {
        tier: "growth",
        description: "Wearable device sync + custom tracking dashboard",
      },
      {
        tier: "scale",
        description:
          "Continuous glucose monitoring + advanced bloodwork review + coaching",
      },
    ],
  },
  {
    id: "group-classes",
    categoryId: "fitness-training",
    title: "Group Fitness Classes",
    description:
      "Fun, engaging group workouts that build strength and community.",
    tiers: [
      { tier: "basic", description: "Access to weekly classes" },
      {
        tier: "growth",
        description: "Priority registration + class recordings",
      },
      {
        tier: "scale",
        description: "Unlimited access + 1-on-1 coach guidance",
      },
    ],
  },

  // Mental Health Support
  {
    id: "guided-meditation",
    categoryId: "mental-health",
    title: "Guided Meditation & Mindfulness",
    description:
      "Reduce stress, improve focus, and find calm with structured sessions.",
    tiers: [
      { tier: "basic", description: "Pre-recorded meditations + app access" },
      {
        tier: "growth",
        description: "Live weekly sessions + mindfulness journal",
      },
      {
        tier: "scale",
        description: "Daily meditation challenges + 1-on-1 support",
      },
    ],
  },
  {
    id: "neuroplasticity",
    categoryId: "mental-health",
    title: "Neuroplasticity Coaching",
    description:
      "Rewire thought patterns, boost cognitive flexibility, and enhance learning speed.",
    tiers: [
      {
        tier: "basic",
        description: "Daily brain training exercises + neuro tips",
      },
      {
        tier: "growth",
        description: "Weekly assessments + mental performance tracking",
      },
      {
        tier: "scale",
        description: "1-on-1 neurocoaching + cognitive tech stack integration",
      },
    ],
  },
  {
    id: "therapy-sessions",
    categoryId: "mental-health",
    title: "Therapy Sessions",
    description:
      "Professional therapy tailored to your emotional and mental health needs.",
    tiers: [
      { tier: "basic", description: "One 50-min session per month" },
      { tier: "growth", description: "Bi-weekly sessions + progress tracking" },
      { tier: "scale", description: "Weekly therapy + crisis support line" },
    ],
  },
  {
    id: "high-functioning-anxiety",
    categoryId: "mental-health",
    title: "High-Functioning Anxiety Support",
    description:
      "Address perfectionism, overthinking, and self-pressure with targeted mental strategies.",
    tiers: [
      { tier: "basic", description: "Anxiety workbook + mindfulness routine" },
      {
        tier: "growth",
        description: "Weekly journaling prompts + group support sessions",
      },
      {
        tier: "scale",
        description: "1-on-1 coaching + nervous system regulation practices",
      },
    ],
  },
  {
    id: "adhd-lifestyle",
    categoryId: "mental-health",
    title: "ADHD Lifestyle Alignment",
    description:
      "Create systems that work with your brain, not against it, using functional routines and support.",
    tiers: [
      {
        tier: "basic",
        description: "Neurodivergent-friendly productivity templates",
      },
      {
        tier: "growth",
        description: "Bi-weekly focus coaching + routine calibration",
      },
      {
        tier: "scale",
        description:
          "Personalized task system + accountability coaching + lifestyle mapping",
      },
    ],
  },
  {
    id: "trauma-informed-regulation",
    categoryId: "mental-health",
    title: "Trauma-Informed Self-Regulation",
    description:
      "Build emotional resilience and restore safety in the nervous system through grounding practices.",
    tiers: [
      {
        tier: "basic",
        description: "Nervous system reset toolkit + breathing exercises",
      },
      {
        tier: "growth",
        description: "Weekly guided sessions + trauma-informed journaling",
      },
      {
        tier: "scale",
        description: "1-on-1 somatic coaching + custom regulation routine",
      },
    ],
  },
  {
    id: "emotional-intelligence",
    categoryId: "mental-health",
    title: "Emotional Intelligence Expansion",
    description:
      "Strengthen empathy, communication, and emotional mastery through conscious awareness training.",
    tiers: [
      { tier: "basic", description: "EQ assessments + daily mood tracking" },
      {
        tier: "growth",
        description: "Bi-weekly EQ coaching + relationship skills development",
      },
      {
        tier: "scale",
        description:
          "Deep-dive emotional rewiring + immersive coaching container",
      },
    ],
  },
  // Corporate Wellness
  {
    id: "team-workshops",
    categoryId: "corporate-wellness",
    title: "Team Wellness Workshops",
    description:
      "Interactive workshops on stress management, nutrition, and productivity.",
    tiers: [
      { tier: "basic", description: "1 virtual session" },
      { tier: "growth", description: "Monthly series + wellness toolkit" },
      {
        tier: "scale",
        description: "Custom curriculum + 1-on-1 coaching for team members",
      },
    ],
  },
  {
    id: "burnout-prevention",
    categoryId: "corporate-wellness",
    title: "Employee Burnout Prevention",
    description:
      "Reduce employee stress and increase retention with structured wellness strategies.",
    tiers: [
      {
        tier: "basic",
        description: "Company-wide burnout assessment + resources",
      },
      { tier: "growth", description: "Monthly workshops + manager training" },
      {
        tier: "scale",
        description: "Custom wellness plans for teams + HR reporting dashboard",
      },
    ],
  },
  {
    id: "executive-coaching",
    categoryId: "corporate-wellness",
    title: "Executive Health Coaching",
    description: "Elite-level wellness support for leadership teams.",
    tiers: [
      { tier: "basic", description: "Quarterly health assessments" },
      { tier: "growth", description: "Monthly coaching + goal planning" },
      {
        tier: "scale",
        description: "Full executive wellness program + concierge support",
      },
    ],
  },
  {
    id: "tech-balance",
    categoryId: "corporate-wellness",
    title: "Tech-Life Balance Training",
    description:
      "Improve mental clarity, posture, and productivity by reprogramming your digital environment.",
    tiers: [
      {
        tier: "basic",
        description: "Digital detox templates + notification control guide",
      },
      {
        tier: "growth",
        description: "Device usage audit + ergonomic workstation checklist",
      },
      {
        tier: "scale",
        description: "Custom digital wellness coaching + weekly tracking",
      },
    ],
  },
  {
    id: "travel-recovery",
    categoryId: "corporate-wellness",
    title: "Jet Lag & Travel Recovery Protocol",
    description:
      "Enhance performance while traveling with circadian syncing, hydration strategies, and targeted recovery.",
    tiers: [
      {
        tier: "basic",
        description: "Pre-flight and post-flight guides + hydration protocol",
      },
      {
        tier: "growth",
        description:
          "Personalized travel recovery supplements + stretch sequences",
      },
      {
        tier: "scale",
        description:
          "Global timezone syncing strategy + bio-adaptive plan with coaching",
      },
    ],
  },
];
