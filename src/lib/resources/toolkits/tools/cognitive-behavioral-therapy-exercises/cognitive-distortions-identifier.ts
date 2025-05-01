import { Activity } from "@/lib/interfaces&types/resources";

export const cognitiveDistortionsIdentifier: Activity[] = [
  {
    title: "Labeling Negative Thinking",
    introduction:
      "A practice to help recognize specific patterns of distorted thinking.",
    description:
      "Use a checklist to identify if your thoughts fall under known distortions like personalization or filtering.",
    steps: [
      {
        step: {
          title: "Identify the thought",
          description:
            "Write down the negative thought you are experiencing. Be specific.",
        },
        note: "Example: 'I always mess up at work.'",
      },
      {
        step: {
          title: "Check against the list of distortions",
          description:
            "Use a checklist of common cognitive distortions to see if your thought matches any of them.",
        },
        details: [
          "Examples of distortions include all-or-nothing thinking, overgeneralization, and catastrophizing.",
        ],
      },
      {
        step: {
          title: "Label the distortion",
          description:
            "Once you identify the distortion, label it. This helps in recognizing patterns.",
        },
      },
      {
        step: {
          title: "Challenge the thought",
          description:
            "Ask yourself if this thought is true or if there’s evidence against it.",
        },
      },
    ],
    conclusion:
      "The goal is to build awareness and label distortions quickly in real time.",
    afterThoughts:
      "The more you practice, the faster your identification becomes.",
    useCases: ["Negative Self-Talk", "Stress", "CBT Skill Building"],
    approximateTime: "10–15 minutes",
    frequency: "As needed",
  },

  {
    title: "Thought Log with Distortion Detection",
    introduction:
      "This activity helps you log triggering thoughts and identify underlying distortions using structured templates.",
    description:
      "By recording your thoughts in context and analyzing them for distortions, you develop insight into recurring mental habits and reduce their emotional grip.",
    steps: [
      {
        step: {
          title: "Record the situation",
          description:
            "Note the date, time, and event that triggered the emotional response.",
        },
      },
      {
        step: {
          title: "Write down your automatic thought",
          description:
            "Capture the first thought that popped into your mind. Be honest and specific.",
        },
      },
      {
        step: {
          title: "Identify the emotion and intensity",
          description:
            "Name the emotion (e.g., anxious, sad, angry) and rate its intensity on a scale of 1 to 10.",
        },
      },
      {
        step: {
          title: "Spot the cognitive distortion",
          description:
            "Use a list or worksheet of cognitive distortions and find the one that matches your thought pattern.",
        },
      },
      {
        step: {
          title: "Reframe the thought",
          description:
            "Write a more balanced or rational version of the thought based on the evidence you have.",
        },
      },
    ],
    conclusion:
      "Keeping a thought log strengthens your ability to identify, name, and shift distorted thinking in everyday situations.",
    afterThoughts:
      "Consider reviewing your logs weekly to look for patterns and progress.",
    useCases: [
      "Emotional Triggers",
      "Cognitive Monitoring",
      "Reframing Practice",
    ],
    approximateTime: "20–25 minutes",
    frequency: "2–3 times per week or during stressful events",
  },

  {
    title: "Distortion Flashcards Practice",
    introduction:
      "This quick practice uses flashcards or a digital list to train recognition of cognitive distortions on the spot.",
    description:
      "By regularly testing yourself with examples of distorted thinking, you reinforce your ability to label and defuse harmful thought patterns automatically.",
    steps: [
      {
        step: {
          title: "Create or download a set of distortion flashcards",
          description:
            "Each card should show a distorted thought on one side and the distortion type on the other.",
        },
        details: [
          "Example: Front: 'If I don’t do this perfectly, I’m a failure.' Back: 'All-or-nothing thinking'",
        ],
      },
      {
        step: {
          title: "Shuffle and review flashcards",
          description:
            "Read the distorted thought, guess the distortion type, then flip to check the answer.",
        },
      },
      {
        step: {
          title: "Reflect on personal relevance",
          description:
            "If a flashcard reminds you of your own thinking, take a moment to write a quick journal note.",
        },
      },
    ],
    conclusion:
      "This exercise strengthens pattern recognition through repetition, making distortion labeling a reflexive habit.",
    afterThoughts:
      "Add new examples over time based on your personal thoughts and situations.",
    useCases: [
      "CBT Skill Reinforcement",
      "Daily Mental Maintenance",
      "Self-Therapy",
    ],
    approximateTime: "5–10 minutes",
    frequency: "Daily or every other day",
  },
];
