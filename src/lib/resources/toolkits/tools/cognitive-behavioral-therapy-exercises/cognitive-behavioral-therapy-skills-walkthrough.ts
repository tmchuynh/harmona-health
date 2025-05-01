import { Activity } from "@/lib/interfaces&types/resources";

export const cognitiveBehavioralTherapySkillsWalkthrough: Activity[] = [
  {
    title: "Daily CBT Reflection",
    introduction:
      "This exercise helps you monitor and evaluate how well you’re applying CBT techniques. Building awareness of your progress reinforces positive change. By tracking which tools you use and how effective they are, you’ll spot patterns of growth and areas needing support. Reflection deepens learning and supports behavioral consistency. Treat this as both a progress log and self-check-in.",
    description:
      "Strengthen your CBT practice by reviewing your daily cognitive and behavioral patterns.",
    steps: [
      {
        step: {
          title: "Identify Distortions",
          description:
            "Reflect on your day and identify any cognitive distortions you experienced.",
        },
        note: "Common distortions include all-or-nothing thinking, overgeneralization, and catastrophizing.",
      },
      {
        step: {
          title: "Record Your Thoughts",
          description:
            "Write down the specific thoughts or beliefs that triggered your emotions.",
        },
      },
      {
        step: {
          title: "Challenge the Thoughts",
          description:
            "Ask yourself if these thoughts are based on facts or assumptions.",
        },
      },
      {
        step: {
          title: "Reframe the Situation",
          description:
            "Create a more balanced or positive thought to replace the negative one.",
        },
      },
      {
        step: {
          title: "Reflect on Your Emotions",
          description:
            "Note how your feelings changed after reframing your thoughts.",
        },
      },
    ],
    conclusion:
      "You are strengthening your inner coach through consistent awareness.",
    afterThoughts:
      "Your progress is not measured by perfection but by intentional effort.",
    useCases: ["Ongoing CBT therapy", "Personal development", "Mood tracking"],
    approximateTime: "10–15 minutes",
    frequency: "Daily",
  },
  {
    title: "Weekly CBT Reflection",
    introduction:
      "This walkthrough encourages you to reflect on CBT skills you've used during the week. Tracking application of cognitive restructuring, thought records, or exposure work builds awareness of progress. It reveals which tools resonate most with your needs. Over time, this habit reinforces your ability to regulate emotions and thoughts more effectively. It also encourages ongoing use of learned strategies.",
    description:
      "Track how often and how effectively you've applied CBT tools to real-life situations.",
    steps: [
      {
        step: {
          title: "Identify Tools Used",
          description:
            "List the CBT tools or techniques you applied during the week.",
        },
      },
      {
        step: {
          title: "Evaluate Effectiveness",
          description:
            "Rate how effective each tool was in managing your thoughts and emotions.",
        },
      },
      {
        step: {
          title: "Reflect on Challenges",
          description:
            "Identify any challenges you faced while applying these tools.",
        },
      },
      {
        step: {
          title: "Plan for Next Week",
          description:
            "Set goals for how you want to apply CBT techniques in the coming week.",
        },
      },
    ],
    conclusion:
      "Tracking helps you measure growth and identify areas for improvement.",
    afterThoughts:
      "Reflection builds a strong feedback loop between learning and doing.",
    useCases: ["Skill retention", "Self-awareness", "Therapy follow-up"],
    approximateTime: "15–20 minutes",
    frequency: "Weekly",
  },
  {
    title: "Thought Stopping Exercise",
    introduction:
      "Thought stopping is a technique designed to interrupt negative or intrusive thoughts. This skill helps you gain control over your thoughts by learning to recognize when they're spiraling. By replacing harmful thoughts with positive alternatives, you foster mental clarity and emotional stability. With practice, thought stopping reduces rumination and promotes healthier thinking patterns.",
    description:
      "Interrupt intrusive thoughts and replace them with positive alternatives.",
    steps: [
      {
        step: {
          title: "Identify the Thought",
          description:
            "Recognize the negative thought or pattern you want to stop.",
        },
      },
      {
        step: {
          title: "Say 'Stop!'",
          description:
            "Verbally or mentally say 'Stop!' to interrupt the thought.",
        },
      },
      {
        step: {
          title: "Replace with a Positive Thought",
          description:
            "Substitute the negative thought with a positive affirmation or statement.",
        },
      },
      {
        step: {
          title: "Visualize a Stop Sign",
          description:
            "Imagine a stop sign to reinforce the interruption of the thought.",
        },
      },
      {
        step: {
          title: "Practice Regularly",
          description:
            "Repeat this process whenever you notice negative thoughts arising.",
        },
      },
    ],
    conclusion:
      "Thought stopping empowers you to break the cycle of negative thinking.",
    afterThoughts: "Practice this regularly to build mental resilience.",
    useCases: ["Intrusive thoughts", "Rumination", "Anxiety"],
    approximateTime: "5–10 minutes",
    frequency: "Daily",
  },
  {
    title: "Cognitive Reframing Tracker",
    introduction:
      "Use this tool to reframe distorted or unhelpful thoughts in a structured way.",
    description:
      "You will learn how to systematically challenge negative beliefs by applying evidence-based logic.",
    steps: [
      {
        step: {
          title: "Identify the Distorted Thought",
          description:
            "Write down the negative thought or belief you want to reframe.",
        },
      },
      {
        step: {
          title: "Gather Evidence",
          description:
            "List evidence that supports and contradicts this thought.",
        },
      },
      {
        step: {
          title: "Reframe the Thought",
          description:
            "Create a more balanced or positive version of the thought.",
        },
      },
      {
        step: {
          title: "Reflect on the Reframed Thought",
          description:
            "Note how this new perspective makes you feel compared to the original thought.",
        },
      },
    ],
    conclusion:
      "Regular reframing increases mental flexibility and reduces emotional reactivity.",
    afterThoughts: "Use this as a training tool to track growth over weeks.",
    useCases: ["CBT Training", "General Anxiety", "Self-Esteem"],
    approximateTime: "20 minutes",
    frequency: "2–3 times per week",
  },
];
