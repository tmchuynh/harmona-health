import { Activity } from "@/lib/interfaces&types/resources";

export const thoughtRecordGuide: Activity[] = [
  {
    title: "Identifying Automatic Thoughts",
    introduction:
      "This practice helps you tune into spontaneous thoughts that arise during emotional moments. Recognizing automatic thoughts is the first step in gaining control over them. These thoughts often go unnoticed but strongly affect our mood. By slowing down and labeling these thoughts, you increase awareness and reduce emotional reactivity. This sets the foundation for more rational and mindful thinking.",
    description:
      "A mindfulness-based reflection for noticing and writing down reactive thoughts.",
    steps: [
      {
        step: {
          title: "Pause and breathe",
          description:
            "Take a moment to notice your current emotional state. What are you feeling?",
        },
        note: "This could be anxiety, anger, sadness, etc.",
      },
      {
        step: {
          title: "Identify the thought",
          description:
            "What thought is running through your mind right now? Write it down.",
        },
        note: "Example: 'I can't handle this.'",
      },
      {
        step: {
          title: "Label the thought",
          description:
            "Is this an automatic thought? Label it as such to increase awareness.",
        },
      },
      {
        step: {
          title: "Reflect on the impact",
          description:
            "How does this thought make you feel? Write down the emotions that arise.",
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
      "Automatic thoughts lose their grip when brought to conscious awareness.",
    afterThoughts: "You can revisit this process during journaling or therapy.",
    useCases: ["Anxiety", "Mood Swings", "Conflict Resolution"],
    approximateTime: "10–15 minutes",
    frequency: "1–2 times per day",
  },
  {
    title: "Examining Evidence for Thoughts",
    introduction:
      "This mindfulness practice helps you examine how much evidence supports or refutes a troubling thought. Often we accept negative thoughts as facts without scrutiny. Slowing down helps us pause and review the situation objectively. You’ll learn to question how reliable your thoughts are. Doing so builds cognitive flexibility and inner calm.",
    steps: [
      {
        step: {
          title: "Identify a troubling thought",
          description:
            "Choose a thought that’s been bothering you. Write it down.",
        },
        note: "Example: 'I always fail at everything.'",
      },
      {
        step: {
          title: "List evidence for the thought",
          description:
            "What evidence supports this thought? Write it down, even if it feels uncomfortable.",
        },
      },
      {
        step: {
          title: "List evidence against the thought",
          description: "What evidence contradicts this thought? Write it down.",
        },
      },
      {
        step: {
          title: "Reflect on the balance of evidence",
          description:
            "Which side has more weight? How does this change your perspective?",
        },
      },
    ],
    conclusion: "Thoughts are hypotheses, not truths.",
    useCases: ["Cognitive Distortion", "Low Self-Esteem", "Worry"],
    approximateTime: "15–20 minutes",
    frequency: "3 times per week",
  },
  {
    title: "Emotion-to-Thought Linking",
    introduction:
      "This practice connects physical sensations and emotions to the thoughts that trigger them. Many emotional responses happen before we understand why. Through mindfulness, you slow down and trace the connection from emotion to thought. This process improves emotional regulation and awareness. It helps you respond instead of react.",
    steps: [
      {
        step: {
          title: "Identify a strong emotion",
          description:
            "Think of a recent moment when you felt a strong emotion. What was it?",
        },
        note: "Example: 'I felt angry when my friend canceled plans.'",
      },
      {
        step: {
          title: "Notice physical sensations",
          description:
            "What physical sensations accompany this emotion? Write them down.",
        },
      },
      {
        step: {
          title: "Identify the thought",
          description: "What thought triggered this emotion? Write it down.",
        },
      },
      {
        step: {
          title: "Reflect on the connection",
          description:
            "How do these sensations and thoughts relate to each other?",
        },
      },
    ],
    conclusion: "Understanding emotions gives you power over your responses.",
    useCases: ["Emotional Awareness", "Anger Management", "Anxiety"],
    approximateTime: "10 minutes",
    frequency: "Daily or as needed",
  },
  {
    title: "Reframing Thought Patterns",
    introduction:
      "This activity helps you consciously reframe negative or rigid thinking using mindfulness. By identifying the unhelpful pattern, you create an opportunity to reframe with self-compassion and logic. This practice rewires your thinking pathways. It reduces mental rigidity and builds resilience. Regular use enhances flexible, adaptive cognition.",
    steps: [
      {
        step: {
          title: "Identify a negative thought",
          description:
            "Choose a thought that feels rigid or negative. Write it down.",
        },
        note: "Example: 'I always mess things up.'",
      },
      {
        step: {
          title: "Reframe the thought",
          description:
            "What’s a more balanced or positive way to view this thought?",
        },
      },
      {
        step: {
          title: "Reflect on the new perspective",
          description:
            "How does this new thought make you feel? Write it down.",
        },
      },
      {
        step: {
          title: "Practice regularly",
          description:
            "Make this reframing a habit. The more you practice, the easier it becomes.",
        },
      },
    ],
    conclusion: "You are not your thoughts—you're their editor.",
    useCases: ["Negative Self-Talk", "Rumination", "Perfectionism"],
    approximateTime: "15 minutes",
    frequency: "2–3 times per week",
  },
  {
    title: "Gratitude Anchoring",
    introduction:
      "This grounding exercise connects you to gratitude as a counterbalance to cognitive distortions. When distorted thoughts dominate, gratitude provides a clearer perspective. Mindfully naming what you appreciate shifts your brain's focus. This creates space for optimism, even during distress. It's a mental reset for calmer thinking.",
    steps: [
      {
        step: {
          title: "Pause and breathe",
          description:
            "Take a moment to center yourself. Inhale deeply and exhale slowly.",
        },
      },
      {
        step: {
          title: "Identify three things you’re grateful for",
          description:
            "Write down three specific things you appreciate in your life.",
        },
        note: "Example: 'I’m grateful for my supportive friend.'",
      },
      {
        step: {
          title: "Reflect on why you’re grateful",
          description: "For each item, write down why it matters to you.",
        },
      },
      {
        step: {
          title: "Visualize the gratitude",
          description:
            "Close your eyes and visualize each item. Feel the gratitude in your body.",
        },
      },
    ],
    conclusion: "Gratitude creates mental spaciousness and clarity.",
    useCases: ["Stress", "Depression", "Cognitive Distortion Recovery"],
    approximateTime: "10 minutes",
    frequency: "Daily",
  },
  {
    title: "Thought Record Journal",
    introduction:
      "This structured journal helps you track and analyze your thoughts over time. By writing down your thoughts, emotions, and situations, you create a comprehensive record. This allows for deeper reflection and understanding of patterns in your thinking. The journal serves as a tool for self-discovery and cognitive restructuring.",
    steps: [
      {
        step: {
          title: "Choose a format",
          description:
            "Decide whether to use a physical journal or a digital app for tracking.",
        },
      },
      {
        step: {
          title: "Record the situation",
          description:
            "Write down the situation that triggered your thoughts and emotions.",
        },
      },
      {
        step: {
          title: "Identify the thought",
          description:
            "What thought came to mind during this situation? Write it down.",
        },
      },
      {
        step: {
          title: "Rate the emotion",
          description:
            "On a scale of 1-10, rate the intensity of the emotion you felt.",
        },
      },
      {
        step: {
          title: "Challenge the thought",
          description:
            "What evidence supports or contradicts this thought? Write it down.",
        },
      },
      {
        step: {
          title: "Reframe the thought",
          description:
            "Create a more balanced or positive statement to replace the negative thought.",
        },
      },
      {
        step: {
          title: "Reflect on the outcome",
          description:
            "How did reframing the thought change your emotional response?",
        },
      },
    ],
    conclusion:
      "Regularly reviewing your thought records helps identify patterns and triggers.",
    afterThoughts:
      "Consider sharing your records with a therapist for deeper insights.",
    useCases: [
      "Cognitive Restructuring",
      "Therapy Homework",
      "Self-Reflection",
    ],
    approximateTime: "20–30 minutes",
    frequency: "Weekly or as needed",
  },
];
