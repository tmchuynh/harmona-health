import { Activity } from "@/lib/interfaces&types/resources";

export const situationalThoughtChallenge: Activity[] = [
  {
    title: "Challenging Catastrophic Thinking",
    introduction:
      "This practice helps reduce the intensity of worst-case scenario thinking during stressful events.",
    description:
      "You’ll walk through questions that calm your emotional brain and engage logical reasoning.",
    steps: [
      {
        step: {
          title: "Identify the situation",
          description:
            "Think of a recent event that triggered catastrophic thinking.",
        },
      },
      {
        step: {
          title: "Write down your worst-case scenario",
          description: "Describe the worst possible outcome you can imagine.",
        },
      },
      {
        step: {
          title: "Ask yourself: What is the likelihood of this happening?",
          description:
            "Rate the probability of this scenario occurring on a scale from 1 to 10.",
        },
      },
      {
        step: {
          title: "What would I tell a friend in this situation?",
          description:
            "Consider how you would advise someone else facing the same fear.",
        },
      },
      {
        step: {
          title: "What is a more balanced thought?",
          description:
            "Reframe your worst-case scenario into a more realistic perspective.",
        },
      },
    ],
    conclusion: "This trains your brain to stay grounded in uncertainty.",
    afterThoughts: "Practice this regularly to reinforce resilience.",
    useCases: ["Anxiety", "Stress Response", "Performance Pressure"],
    approximateTime: "15–20 minutes",
    frequency: "As needed, especially during distress",
  },
  {
    title: "From Assumptions to Clarity",
    introduction:
      "A thought clarification activity for examining assumptions and jumping to conclusions in ambiguous situations.",
    description:
      "This exercise helps you step back from reactive thinking and examine whether your assumptions are truly based on facts.",
    steps: [
      {
        step: {
          title: "Write down the situation",
          description:
            "Identify the event or interaction that made you feel uneasy or anxious.",
        },
      },
      {
        step: {
          title: "Describe your immediate assumption",
          description:
            "Note the conclusion you drew without having full evidence. Be honest and specific.",
        },
      },
      {
        step: {
          title: "List what you know vs. what you’re guessing",
          description:
            "Separate facts from assumptions. Create two columns and fill in each with relevant information.",
        },
        details: [
          "This visual contrast helps you see where your thoughts are filling in gaps.",
        ],
      },
      {
        step: {
          title: "Ask: What else might be true?",
          description:
            "Explore at least 2–3 alternate explanations or interpretations of the situation.",
        },
      },
      {
        step: {
          title: "Form a grounded response",
          description:
            "Write a more objective thought or action based on evidence rather than assumption.",
        },
      },
    ],
    conclusion:
      "The goal is to build awareness around interpretive bias and adopt a more balanced approach to uncertainty.",
    afterThoughts:
      "Over time, this will help reduce reactive responses and foster emotional clarity.",
    useCases: ["Ambiguity", "Relationship Conflicts", "Workplace Stress"],
    approximateTime: "20–30 minutes",
    frequency: "Whenever you catch yourself jumping to conclusions",
  },
  {
    title: "What’s in My Control?",
    introduction:
      "This exercise helps differentiate between what you can control and what you can’t in stressful situations.",
    description:
      "By identifying what’s within your influence, you can shift energy away from worry and toward action or acceptance.",
    steps: [
      {
        step: {
          title: "Describe the challenge",
          description:
            "Write a summary of the situation you’re feeling overwhelmed by.",
        },
      },
      {
        step: {
          title: "List what is within your control",
          description:
            "Identify the actions, thoughts, and responses you can directly influence.",
        },
      },
      {
        step: {
          title: "List what is outside your control",
          description:
            "Acknowledge external factors, other people’s actions, or unpredictable outcomes you can't manage.",
        },
      },
      {
        step: {
          title: "Commit to one small action",
          description:
            "Based on what you *can* control, write down a small, empowering step you will take.",
        },
      },
    ],
    conclusion:
      "Focusing on what’s in your control brings clarity and reduces helplessness.",
    afterThoughts:
      "Repeat this whenever you feel stuck in overwhelm or powerlessness.",
    useCases: ["Uncertainty", "Anxiety", "Decision-Making"],
    approximateTime: "15–20 minutes",
    frequency: "As needed or during moments of stress",
  },
  {
    title: "Reality Testing the Fear",
    introduction:
      "This activity helps break down a fear into testable, evidence-based components.",
    description:
      "You’ll investigate the reality of your fear by comparing past experiences, facts, and likely outcomes.",
    steps: [
      {
        step: {
          title: "Write out the fear in detail",
          description: "Describe what you’re afraid will happen.",
        },
      },
      {
        step: {
          title: "List the evidence supporting the fear",
          description: "What facts support this fear being true?",
        },
      },
      {
        step: {
          title: "List the evidence against the fear",
          description: "What facts suggest the fear may not come true?",
        },
      },
      {
        step: {
          title: "Identify a more balanced belief",
          description:
            "Based on both lists, write a more realistic belief to replace the fearful one.",
        },
      },
    ],
    conclusion:
      "Testing your fear against facts helps you separate emotion from probability.",
    afterThoughts:
      "Use this as a structured way to challenge fearful predictions.",
    useCases: ["Irrational Fear", "Social Anxiety", "Perfectionism"],
    approximateTime: "20 minutes",
    frequency: "As needed",
  },
  {
    title: "What’s the Worst That Can Happen?",
    introduction:
      "By intentionally exaggerating the worst-case scenario, this practice helps reduce fear through humor and logic.",
    description:
      "You’ll explore the imagined extreme and logically examine its actual impact, helping to desensitize anxiety.",
    steps: [
      {
        step: {
          title: "Describe the feared situation",
          description:
            "Write down what you're worried might go wrong in an upcoming situation.",
        },
      },
      {
        step: {
          title: "Exaggerate it humorously",
          description:
            "Blow the fear out of proportion in a silly or extreme way to gain emotional distance.",
        },
      },
      {
        step: {
          title: "Return to a rational view",
          description:
            "Compare the exaggerated version to a more realistic outcome.",
        },
      },
      {
        step: {
          title: "Plan a response",
          description:
            "Note a practical way you could respond if the feared event did happen.",
        },
      },
    ],
    conclusion:
      "This helps deflate fear by shifting perspective and activating the rational mind.",
    afterThoughts:
      "Silly exaggeration can neutralize the emotional grip of the original thought.",
    useCases: ["Social Anxiety", "Perfectionism", "Performance Fears"],
    approximateTime: "20–25 minutes",
    frequency: "Before stressful events",
  },
  {
    title: "Naming the Emotion Behind the Thought",
    introduction:
      "This activity separates the emotional experience from the thought pattern to better address the root feeling.",
    description:
      "Often our thoughts are masks for fear, sadness, or shame. Naming the emotion helps reduce its grip.",
    steps: [
      {
        step: {
          title: "Write the automatic thought",
          description: "Note what went through your mind during the distress.",
        },
      },
      {
        step: {
          title: "Ask: What am I really feeling?",
          description: "Try to name the underlying emotion in 1–2 words.",
        },
      },
      {
        step: {
          title: "Explore the emotion’s source",
          description:
            "Consider what triggered the emotion and whether it’s related to the current moment or something deeper.",
        },
      },
      {
        step: {
          title: "Respond to the emotion with care",
          description:
            "Write one kind, understanding response to the emotion (not the thought).",
        },
      },
    ],
    conclusion:
      "Identifying emotion reduces the power of distorted thoughts and guides healing.",
    afterThoughts:
      "Emotions lose intensity when named and met with understanding.",
    useCases: ["Emotional Regulation", "Mood Swings", "High Stress"],
    approximateTime: "15–20 minutes",
    frequency: "Whenever you notice intense thoughts or feelings",
  },
  {
    title: "Reframing the 'Should'",
    introduction:
      "This thought challenge addresses rigid expectations by transforming 'should' statements into flexible preferences.",
    description:
      "'Should' language often creates guilt and pressure. This activity helps you reframe those statements with self-compassion.",
    steps: [
      {
        step: {
          title: "Write your 'should' thought",
          description:
            "Note the rule or belief you’re holding yourself to. (e.g., 'I should be more productive.')",
        },
      },
      {
        step: {
          title: "Examine where it comes from",
          description:
            "Ask whether this is a personal value, external expectation, or outdated belief.",
        },
      },
      {
        step: {
          title: "Reframe it as a preference",
          description:
            "Replace 'should' with 'I’d prefer' or 'It would be helpful if…'.",
        },
      },
      {
        step: {
          title: "Reflect on how it feels",
          description:
            "Note how your body and mind respond to the reframed thought.",
        },
      },
    ],
    conclusion:
      "Reframing reduces internal pressure and invites gentler self-talk.",
    afterThoughts:
      "Repeat this with other ‘shoulds’ you catch throughout the week.",
    useCases: ["Self-Criticism", "Perfectionism", "Overwhelm"],
    approximateTime: "15 minutes",
    frequency: "Weekly or when harsh thoughts appear",
  },
  {
    title: "The Thought Record Mini",
    introduction:
      "A shortened version of the CBT thought record, useful for quick reflection on distorted thoughts.",
    description:
      "Capture the situation, emotion, automatic thought, and new response quickly to diffuse distress.",
    steps: [
      {
        step: {
          title: "Situation",
          description: "Briefly describe the event or trigger. (1–2 sentences)",
        },
      },
      {
        step: {
          title: "Emotion",
          description:
            "Write the feeling you experienced and rate intensity from 0 to 10.",
        },
      },
      {
        step: {
          title: "Automatic Thought",
          description:
            "What thought popped up immediately? Capture it exactly.",
        },
      },
      {
        step: {
          title: "Alternative Thought",
          description:
            "What is a more balanced or helpful response to the thought?",
        },
      },
    ],
    conclusion: "A fast, structured approach to emotional clarity.",
    afterThoughts:
      "Use this tool daily or as a journaling companion for emotional regulation.",
    useCases: ["Daily Stress", "Mood Tracking", "CBT Maintenance"],
    approximateTime: "10–15 minutes",
    frequency: "Daily or after distressing events",
  },
  {
    title: "Role Reversal Reflection",
    introduction:
      "Use perspective-taking to defuse harsh inner thoughts by imagining another person’s response.",
    description:
      "By switching roles, you access empathy and reduce harsh self-judgment.",
    steps: [
      {
        step: {
          title: "State your self-critical thought",
          description: "Write the judgmental statement you told yourself.",
        },
      },
      {
        step: {
          title: "Imagine a loved one in your shoes",
          description:
            "Pretend someone you love is having the same issue. What would you say to them?",
        },
      },
      {
        step: {
          title: "Write that advice to yourself",
          description:
            "Turn the advice you’d give them into a message of self-compassion.",
        },
      },
    ],
    conclusion:
      "Role reversal helps generate kindness and shrink the inner critic.",
    afterThoughts:
      "Repeat this often to build a habit of compassionate thinking.",
    useCases: ["Low Self-Esteem", "Shame", "Perfectionism"],
    approximateTime: "15 minutes",
    frequency: "As needed",
  },
  {
    title: "Naming and Neutralizing the Inner Critic",
    introduction:
      "Personifying the inner critic helps distance from it and reduce its emotional influence.",
    description:
      "This playful yet effective method gives your inner critic a name, helping you talk back to it rationally.",
    steps: [
      {
        step: {
          title: "Describe the critic’s voice",
          description:
            "What tone, phrases, or feelings does your inner critic use?",
        },
      },
      {
        step: {
          title: "Give it a name or image",
          description:
            "Assign a cartoonish or exaggerated identity to the voice.",
        },
      },
      {
        step: {
          title: "Talk back to it",
          description:
            "Write a confident or humorous response that neutralizes the critic’s message.",
        },
      },
    ],
    conclusion:
      "Externalizing the critic separates it from your core self and reduces its authority.",
    afterThoughts:
      "The more you challenge this voice, the less power it holds.",
    useCases: ["Self-Criticism", "Anxiety", "Overwhelm"],
    approximateTime: "15–20 minutes",
    frequency: "Weekly or when the inner critic appears",
  },
  {
    title: "Zooming Out",
    introduction:
      "Gain perspective on an overwhelming thought by viewing it through a wider lens.",
    description:
      "This activity helps reduce emotional intensity by exploring how this situation will look over time.",
    steps: [
      {
        step: {
          title: "Describe the current thought",
          description: "Write the thought or situation that feels consuming.",
        },
      },
      {
        step: {
          title: "Project one month forward",
          description:
            "Will this still feel as important? What will matter more then?",
        },
      },
      {
        step: {
          title: "Project one year forward",
          description:
            "Looking back, how significant will this situation seem?",
        },
      },
      {
        step: {
          title: "Reframe with time perspective",
          description:
            "Write one sentence about how your future self might interpret this moment.",
        },
      },
    ],
    conclusion: "Time perspective deflates urgency and encourages resilience.",
    afterThoughts: "Keep future-focus tools handy for anxious moments.",
    useCases: ["Stress", "Overwhelm", "Perfectionism"],
    approximateTime: "15 minutes",
    frequency: "Anytime you feel consumed by a situation",
  },
];
