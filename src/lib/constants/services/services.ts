import { Service } from "@/lib/interfaces&types/services";

export const subServices: Service[] = [
  // Wellness Programs
  {
    id: "personalized-wellness",
    categoryId: "wellness-programs",
    title: "Personalized Wellness Journey",
    description:
      "Custom multidimensional program integrating nutrition, fitness, and mindfulness.",
    introduction:
      "A comprehensive lifestyle transformation plan tailored to your body, habits, and goals. This program integrates personalized nutrition, fitness routines, and mindful living strategies to create lasting change. You will receive structured guidance and support to align your lifestyle with your highest health potential.",
    tiers: [
      { tier: "basic", description: "Initial assessment + Weekly plans" },
      { tier: "growth", description: "Includes coaching calls twice a week" },
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
      "A targeted approach to understanding and correcting hormonal imbalances using natural and science-backed methods. Through assessments, lifestyle modifications, and functional nutrition, this program supports hormonal harmony. You will gain tools to restore energy, mood, metabolism, and overall wellness.",
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
    introduction:
      "Sleep is the foundation of physical and mental vitality. Our Sleep Optimization Coaching helps you reset your circadian rhythm and enhance sleep quality through personalized strategies. This program integrates data-driven insights, behavior adjustments, and accountability to maximize nightly restoration.",
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
      "A cleanse focusing on gut health, inflammation reduction, and habit building.",
    introduction:
      "Support your body’s natural detoxification processes with a structured reset program. Focused on gut health, inflammation reduction, and sustainable lifestyle changes, this cleanse restores vitality from the inside out. Guided coaching ensures a safe, effective transition back to optimal wellness.",
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
    introduction:
      "Proper nutrition begins with a structured, sustainable plan tailored to your unique needs. Our Custom Meal Planning service provides practical and enjoyable meal strategies to support your health and fitness goals. Through personalized coaching, you will learn how to build a nourishing, maintainable routine.",
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
    introduction:
      "A strong digestive system is crucial for overall health and vitality. This program addresses gut imbalances through food-based strategies, lifestyle modifications, and targeted supplementation. You will experience improved digestion, energy, and mental clarity with expert support every step of the way.",
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
    introduction:
      "Supplements can fill crucial nutritional gaps when used appropriately and strategically. Our Supplement Guidance program creates a customized plan based on lab results, dietary habits, and personal goals. You will receive science-backed recommendations to support your optimal wellness journey.",
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
    introduction:
      "Stay consistent with your fitness goals no matter where life takes you. Our Online Fitness Coaching provides structured workout programs, personalized progress tracking, and virtual accountability. You will benefit from professional guidance and a flexible approach to reaching your strength and endurance targets.",
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
    introduction:
      "Mobility and recovery are essential for peak physical performance and injury prevention. This program combines targeted stretching, movement assessments, and personalized recovery protocols. You will build greater flexibility, resilience, and freedom of movement with consistent, expert guidance.",
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
    introduction:
      "Understanding and enhancing your metabolism can dramatically improve your energy, body composition, and health. Our Metabolic Health Optimization program leverages wearable technology, nutrition, and strategic movement to support your unique metabolic profile. You will receive data-driven insights and a personalized plan to optimize long-term results.",
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
    introduction:
      "Experience the motivation and energy that comes from training in a supportive community. Our Group Fitness Classes offer dynamic workouts that enhance strength, endurance, and mobility. You will build consistency, camaraderie, and fitness progress in a welcoming environment.",
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
    id: "stress-management",
    categoryId: "mental-health-support",
    title: "Stress Management Coaching",
    description:
      "Learn evidence-based techniques to manage stress and build emotional resilience.",
    introduction:
      "Chronic stress impacts every area of life, from physical health to emotional well-being. Our Stress Management Coaching teaches proven techniques to help you manage stress effectively and build resilience. You will develop actionable habits that promote a calmer, more empowered daily experience.",
    tiers: [
      { tier: "basic", description: "Stress self-assessment + core practices" },
      {
        tier: "growth",
        description: "Weekly coaching calls + mindfulness exercises",
      },
      {
        tier: "scale",
        description: "Custom resilience plan + emergency support sessions",
      },
    ],
  },
  {
    id: "mindfulness-training",
    categoryId: "mental-health-support",
    title: "Mindfulness & Meditation Training",
    description:
      "Develop a consistent mindfulness and meditation practice for mental clarity and emotional regulation.",
    introduction:
      "Mindfulness and meditation are transformative tools for mental clarity, emotional regulation, and overall health. This program offers structured practices that build your skills progressively and sustainably. You will cultivate inner calm, sharpen focus, and deepen emotional balance through guided support.",
    tiers: [
      { tier: "basic", description: "Self-paced meditation recordings" },
      {
        tier: "growth",
        description: "Weekly group mindfulness sessions",
      },
      {
        tier: "scale",
        description: "1-on-1 custom meditation coaching + daily accountability",
      },
    ],
  },
  {
    id: "emotional-wellness",
    categoryId: "mental-health-support",
    title: "Emotional Wellness Program",
    description:
      "Support emotional balance, resilience, and self-awareness with interconnected tools and coaching.",
    introduction:
      "Emotional wellness is essential for thriving in both personal and professional life. Our Emotional Wellness Program uses unified techniques including cognitive strategies, mindfulness, and somatic practices. You will develop resilience, increase emotional intelligence, and enhance your overall well-being with consistent, personalized support.",
    tiers: [
      {
        tier: "basic",
        description: "Emotional check-ins + guided journal prompts",
      },
      {
        tier: "growth",
        description: "Weekly coaching sessions + resilience toolkit",
      },
      {
        tier: "scale",
        description: "Full mental wellness plan + on-demand support sessions",
      },
    ],
  },
  {
    id: "guided-meditation",
    categoryId: "mental-health",
    title: "Guided Meditation & Mindfulness",
    description:
      "Reduce stress, improve focus, and find calm with structured sessions.",
    introduction:
      "Mindfulness and meditation practices are scientifically proven to reduce stress, enhance focus, and promote emotional regulation. Our Guided Meditation & Mindfulness sessions provide structured, accessible techniques designed for beginners and advanced practitioners alike. Through consistent practice, you will experience greater mental clarity, emotional balance, and inner calm.",
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
    introduction:
      "Neuroplasticity is the brain’s ability to adapt and form new connections, critical for learning, creativity, and resilience. Our Neuroplasticity Coaching program equips you with daily exercises and mental frameworks that enhance cognitive flexibility and speed. You will strengthen your brain’s ability to adapt, innovate, and optimize performance across all areas of life.",
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
    introduction:
      "Therapy provides a safe, supportive space to process challenges, build emotional skills, and foster personal growth. Our licensed professionals deliver personalized care plans tailored to your unique goals and emotional landscape. With consistent support, you will develop resilience, clarity, and tools for lasting mental health improvements.",
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
    introduction:
      "High-functioning anxiety often masks deep internal pressure and chronic overthinking, impacting overall quality of life. Our program offers strategies to dismantle perfectionism, regulate the nervous system, and cultivate sustainable success without burnout. Through personalized coaching, you will learn to thrive with greater peace, balance, and self-compassion.",
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
    introduction:
      "Living with ADHD requires systems and strategies that align with your natural cognitive strengths rather than suppress them. Our ADHD Lifestyle Alignment service provides structure, accountability, and personalized tools to improve focus, productivity, and emotional regulation. You will experience greater ease, confidence, and success by designing a life that supports your unique brain.",
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
    introduction:
      "Trauma impacts the body’s ability to regulate emotions, leading to chronic stress and disconnection. Our Trauma-Informed Self-Regulation program offers somatic tools, breathing practices, and personalized routines to restore nervous system balance. You will cultivate resilience, deepen your sense of safety, and build emotional stability over time.",
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
    introduction:
      "Emotional intelligence is the cornerstone of healthy relationships, effective leadership, and personal fulfillment. Our Emotional Intelligence Expansion program provides structured practices to develop empathy, self-awareness, and emotional regulation. With consistent application, you will communicate more clearly, navigate challenges more skillfully, and build deeper connections.",
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
    id: "workplace-wellness",
    categoryId: "corporate-wellness",
    title: "Workplace Wellness Program",
    description:
      "Empower your team with integrative health workshops, resources, and coaching tailored for the workplace.",
    introduction:
      "Investing in employee well-being drives productivity, retention, and workplace culture. Our Workplace Wellness Program delivers workshops, coaching, and resources to promote physical, mental, and emotional health at work. Teams experience enhanced morale, reduced burnout, and higher engagement through targeted initiatives.",
    tiers: [
      { tier: "basic", description: "Single workshop + resource packet" },
      {
        tier: "growth",
        description: "Monthly wellness events + virtual coaching",
      },
      {
        tier: "scale",
        description: "Custom program design + onsite and virtual support",
      },
    ],
  },
  {
    id: "corporate-retreats",
    categoryId: "corporate-wellness",
    title: "Corporate Wellness Retreats",
    description:
      "Transformative in-person experiences blending team-building, mindfulness, fitness, and professional growth.",
    introduction:
      "Corporate retreats offer a powerful opportunity for restoration, alignment, and personal growth. Our retreats combine mindfulness, physical wellness, team-building activities, and professional development workshops. Participants return refreshed, connected, and better equipped to contribute meaningfully to their organization.",
    tiers: [
      { tier: "basic", description: "Half-day wellness retreat experience" },
      {
        tier: "growth",
        description: "Full-day retreat + wellness resource kit",
      },
      {
        tier: "scale",
        description: "Multi-day customized retreat + coaching follow-up",
      },
    ],
  },
  {
    id: "leadership-resilience",
    categoryId: "corporate-wellness",
    title: "Leadership Resilience Training",
    description:
      "Equip leadership teams with strategies to lead effectively through stress, change, and uncertainty.",
    introduction:
      "Resilient leadership is critical for navigating today's dynamic workplace challenges. This training equips leaders with tools to manage stress, drive performance, and foster team resilience. Participants leave with actionable frameworks and renewed capacity to lead with clarity and strength.",
    tiers: [
      { tier: "basic", description: "Leadership resilience workshop" },
      {
        tier: "growth",
        description: "Ongoing group coaching + leadership toolkit",
      },
      {
        tier: "scale",
        description: "1-on-1 executive coaching + full team assessments",
      },
    ],
  },
  {
    id: "team-workshops",
    categoryId: "corporate-wellness",
    title: "Team Wellness Workshops",
    description:
      "Interactive workshops on stress management, nutrition, and productivity.",
    introduction:
      "Healthy teams drive innovation, collaboration, and retention. Our Team Wellness Workshops deliver engaging, interactive sessions focused on stress reduction, nutrition optimization, and productivity enhancement. Each workshop is designed to equip teams with actionable tools that translate directly into workplace success and personal well-being.",
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
    introduction:
      "Burnout threatens employee health, productivity, and organizational success. Our Employee Burnout Prevention program identifies risk factors and delivers proactive solutions through workshops, training, and tailored wellness strategies. By implementing sustainable practices, your teams will experience improved morale, retention, and performance.",
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
    introduction:
      "Executives and leaders face intense demands that require specialized wellness strategies to sustain performance. Our Executive Health Coaching program provides elite-level assessments, coaching, and goal-setting to optimize physical, mental, and emotional health. Leaders who invest in their own well-being drive more sustainable, impactful organizational outcomes.",
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
    introduction:
      "Excessive tech usage impacts physical health, cognitive performance, and emotional balance. Our Tech-Life Balance Training teaches practical digital wellness strategies to optimize device use, reduce fatigue, and enhance focus. Participants learn to create healthier digital environments that support both productivity and well-being.",
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
    introduction:
      "Frequent travel disrupts circadian rhythms, energy levels, and cognitive function. Our Jet Lag & Travel Recovery Protocol offers science-backed strategies to maintain performance while minimizing travel fatigue. With customized hydration plans, circadian syncing techniques, and physical recovery routines, you will stay resilient and high-functioning across time zones.",
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
