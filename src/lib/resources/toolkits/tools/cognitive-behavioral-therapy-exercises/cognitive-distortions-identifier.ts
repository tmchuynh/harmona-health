import { MindfulnessPractices } from "@/lib/interfaces&types/resources";

export const cognitiveDistortionsIdentifier: MindfulnessPractices[] = [
  {
    title: "Labeling Negative Thinking",
    introduction:
      "A practice to help recognize specific patterns of distorted thinking.",
    description:
      "Use a checklist to identify if your thoughts fall under known distortions like personalization or filtering.",
    steps: [
      { step: "Write down a negative thought." },
      { step: "Consult a distortion checklist." },
      { step: "Match the thought to one or more distortions." },
      { step: "Reflect on its impact on your mood." },
      { step: "Write an alternative, more rational thought." },
    ],
    conclusion:
      "The goal is to build awareness and label distortions quickly in real time.",
    afterThoughts:
      "The more you practice, the faster your identification becomes.",
    useCases: ["Negative Self-Talk", "Stress", "CBT Skill Building"],
    approximateTime: "10–15 minutes",
    frequency: "As needed",
  },
];
