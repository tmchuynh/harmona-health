import { Activity } from "@/lib/interfaces&types/resources";

export const rememberingYourDailyCheckIn: Activity[] = [
  {
    title: "Morning Self-Scan",
    introduction:
      "A morning self-scan is a grounding practice to set the tone for your day with clarity and intention. It involves checking in with your mental, emotional, and physical state before external distractions begin. This short practice helps you align your actions with your needs. It can serve as a personal anchor to return to throughout the day.",
    useCases: [
      "To build emotional awareness at the start of the day",
      "Before making your to-do list or starting work",
      "As a grounding ritual to reduce reactive behavior",
    ],
    approximateTime: "5–7 minutes",
    steps: [
      {
        step: {
          title: "Getting Ready",
          description:
            "Find a quiet space and sit comfortably. Close your eyes or lower your gaze.",
        },
        note: "It is important for you to be comfortable in this space with no interruptions.",
      },
      {
        step: {
          title: "Body Scan",
          description:
            "Start at your toes and slowly move up to the top of your head. Notice any tension or discomfort.",
        },
        details: [
          "Breathe into any areas of tightness, allowing them to relax.",
          "Notice how your body feels overall.",
          "Are you energized, tired, or somewhere in between?",
        ],
        note: "Be gentle with yourself. This is not about fixing anything, just noticing.",
      },
      {
        step: {
          title: "Emotional Check-In",
          description:
            "Identify any emotions you’re feeling. Name them without judgment.",
        },
        details: [
          "Are you excited, anxious, calm, or something else?",
          "Acknowledge these feelings as valid.",
        ],
        note: "This is a moment to honor your emotional state.",
      },
      {
        step: {
          title: "Mental Clarity",
          description:
            "Reflect on your mental state. Are you focused, scattered, or overwhelmed?",
        },
        details: [
          "What thoughts are occupying your mind?",
          "Are there any distractions you need to address?",
        ],
        note: "This helps you understand your mental readiness for the day.",
      },
      {
        step: {
          title: "Set Intentions",
          description:
            "Based on your self-scan, set one or two intentions for the day.",
        },
        details: [
          "What do you want to focus on?",
          "How do you want to feel by the end of the day?",
        ],
        note: "Intentions guide your actions and mindset throughout the day.",
      },
    ],
    frequency: "Once daily, in the morning",
    conclusion:
      "A morning check-in sets an intentional, self-aware tone. It helps you respond more mindfully to the challenges and needs of the day.",
  },
  {
    title: "Emotional Temperature Check",
    introduction:
      "Checking your emotional temperature gives you insight into your baseline mood. Emotions, like physical states, fluctuate throughout the day. Becoming familiar with these shifts helps you navigate your experiences more skillfully. This daily check-in prevents emotions from silently dictating your actions.",
    useCases: [
      "To notice subtle emotional shifts throughout the day",
      "To prepare emotionally for challenging situations",
      "When feeling emotionally 'off' but unsure why",
    ],
    approximateTime: "3–5 minutes",
    steps: [
      {
        step: {
          title: "Pause and Breathe",
          description:
            "Take a few deep breaths to center yourself. Close your eyes if comfortable.",
        },
        note: "This helps you tune into your internal state.",
      },
      {
        step: {
          title: "Identify Emotions",
          description: "Ask yourself, 'What emotions am I feeling right now?'",
        },
        details: [
          "Name them without judgment.",
          "Are they positive, negative, or neutral?",
        ],
        note: "This is about awareness, not fixing anything.",
      },
      {
        step: {
          title: "Rate Your Temperature",
          description:
            "On a scale of 1 to 10, rate the intensity of your emotions.",
        },
        details: [
          "1 being very low and 10 being very high.",
          "Notice how this rating feels in your body.",
        ],
        note: "This helps you gauge the intensity of your emotional state.",
      },
      {
        step: {
          title: "Reflect on Triggers",
          description:
            "Consider what might have influenced your emotional temperature today.",
        },
        details: [
          "Was it a conversation, an event, or something else?",
          "How can you respond to these triggers mindfully?",
        ],
        note: "This reflection helps you understand your emotional landscape.",
      },
    ],
    frequency: "Twice daily (morning and evening)",
    conclusion:
      "Checking your emotional temperature daily allows you to better understand and manage your internal world with kindness.",
  },
  {
    title: "Energy Level Check",
    introduction:
      "Energy levels are critical indicators of mental and physical health. Checking your energy daily helps you prioritize tasks, manage stress, and plan for recovery. It also teaches you to respect natural fluctuations instead of forcing productivity. Self-honoring around energy prevents burnout.",
    useCases: [
      "To adjust workload and expectations realistically",
      "When feeling drained but unsure why",
      "To align activities with energy levels",
    ],
    approximateTime: "2–3 minutes",
    steps: [
      {
        step: {
          title: "Identify Energy Level",
          description: "Ask yourself, 'What is my current energy level?'",
        },
        details: [
          "Rate it on a scale of 1 to 10 (1 being very low, 10 being very high).",
          "Notice how this rating feels in your body.",
        ],
        note: "This helps you gauge the intensity of your energy state.",
      },
      {
        step: {
          title: "Reflect on Triggers",
          description:
            "Consider what might have influenced your energy level today.",
        },
        details: [
          "Was it a conversation, an event, or something else?",
          "How can you respond to these triggers mindfully?",
        ],
        note: "This reflection helps you understand your energy landscape.",
      },
      {
        step: {
          title: "Plan for the Day",
          description:
            "Based on your energy level, plan your tasks accordingly.",
        },
        details: [
          "Prioritize high-energy tasks when you feel energized. Schedule low-energy tasks for when you're feeling drained.",
          "Consider taking breaks or engaging in restorative activities if your energy is low. This can include stretching, deep breathing, or a short walk.",
        ],
        note: "This helps you align activities with your energy levels.",
      },
    ],
    frequency: "Daily (preferably morning)",
    conclusion:
      "Daily energy checks empower you to honor your body's needs and build resilience through sustainable energy management.",
  },
  {
    title: "Mood Word Check",
    introduction:
      "Summarizing your day in one word forces clarity about your overall emotional experience. It simplifies complex feelings into something tangible and recognizable. Naming your emotional climate helps build emotional intelligence over time. Plus, it's a quick and memorable check-in ritual.",
    useCases: [
      "To enhance emotional literacy",
      "To track emotional trends over time",
      "For easy emotional journaling",
    ],
    approximateTime: "1–2 minutes",
    steps: [
      {
        step: {
          title: "Choose a Word",
          description:
            "At the end of the day, choose one word that sums up your mood.",
        },
        note: "This can be a positive, negative, or neutral word.",
      },
      {
        step: {
          title: "Reflect on the Word",
          description:
            "Consider why you chose that word. What events or feelings influenced it?",
        },
        details: [
          "What does it mean to you? How does it make you feel? Why is it important to you?",
          "This can be a person, an experience, or something simple. Examples: a warm cup of coffee, a supportive friend, or a sunny day.",
        ],
        note: "This helps you understand your emotional landscape.",
      },
      {
        step: {
          title: "Record It",
          description:
            "Write down your mood word in a journal or app for tracking.",
        },
        note: "This creates a simple record of your emotional trends.",
      },
      {
        step: {
          title: "Celebrate Your Word",
          description:
            "Acknowledge your mood word with a smile or a moment of gratitude.",
        },
        note: "This reinforces the importance of emotional awareness.",
      },
      {
        step: {
          title: "Repeat Daily",
          description:
            "Make this a daily ritual to build emotional awareness over time.",
        },
        note: "This helps you track your emotional trends and growth.",
      },
      {
        step: {
          title: "Reflect Weekly",
          description:
            "At the end of the week, review your mood words to identify patterns.",
        },
        details: [
          "What words appeared most often? What emotions were less frequent?",
          "How did your mood change over the week? What events or situations influenced these changes?",
        ],
        note: "This helps you understand your emotional landscape over time.",
      },
      {
        step: {
          title: "Adjust as Needed",
          description:
            "If you notice negative patterns, consider what changes you can make.",
        },
        note: "This helps you take proactive steps toward emotional well-being.",
      },
    ],
    frequency: "Daily (evening)",
    conclusion:
      "Mood word check-ins sharpen emotional awareness and offer a simple, powerful snapshot of your inner world.",
  },
  {
    title: "Gratitude Snapshot",
    introduction:
      "Practicing gratitude shifts focus from what’s lacking to what’s present. A daily gratitude snapshot cultivates positive emotion and broadens perspective. It’s a simple but powerful way to reframe your day’s experiences. Over time, gratitude strengthens emotional resilience and joy.",
    useCases: [
      "To cultivate a positive mindset daily",
      "To shift focus away from stress or negativity",
      "To strengthen emotional resilience",
    ],
    approximateTime: "2–5 minutes",
    steps: [
      {
        step: {
          title: "Pause and Breathe",
          description:
            "Take a few deep breaths to center yourself. Close your eyes if comfortable.",
        },
        note: "This helps you tune into your internal state.",
      },
      {
        step: {
          title: "Identify Three Things",
          description:
            "List three things you’re grateful for today, big or small.",
        },
        note: "These can be people, experiences, or simple pleasures.",
      },
      {
        step: {
          title: "Reflect on Each Item",
          description:
            "For each item, take a moment to reflect on why you’re grateful for it.",
        },
        details: [
          "What does it mean to you? How does it make you feel? Why is it important to you?",
          "This can be a person, an experience, or something simple. Examples: a warm cup of coffee, a supportive friend, or a sunny day.",
        ],
        note: "This deepens your appreciation and connection to these items.",
      },
      {
        step: {
          title: "Record It",
          description:
            "Write down your gratitude snapshot in a journal or app.",
        },
        note: "This creates a simple record of your gratitude practice.",
      },
      {
        step: {
          title: "Repeat Daily",
          description: "Make this a daily ritual to build gratitude over time.",
        },
        note: "This helps you track your emotional trends and growth.",
      },
    ],
    frequency: "Daily",
    conclusion:
      "Gratitude snapshots anchor you in positivity, training your mind to seek out and appreciate life’s gifts.",
  },
  {
    title: "Evening Reflection",
    introduction:
      "An evening check-in is a mindful reflection practice to process your day and unwind with awareness. It allows you to assess how you felt, what went well, and what could be improved. This habit strengthens emotional intelligence and supports restful sleep. It encourages you to recognize progress instead of focusing only on what’s unfinished.",
    useCases: [
      "To reflect on emotional patterns throughout the day",
      "Before sleep to clear mental clutter",
      "As part of a journaling or gratitude routine",
    ],
    approximateTime: "5–10 minutes",
    steps: [
      {
        step: {
          title: "Find a Quiet Space",
          description: "Choose a comfortable, quiet space to sit or lie down.",
        },
        note: "This helps you tune into your internal state.",
      },
      {
        step: {
          title: "Reflect on Your Day",
          description:
            "Think about your day. What went well? What challenges did you face?",
        },
        note: "This helps you understand your emotional landscape.",
      },
      {
        step: {
          title: "Identify Emotions",
          description:
            "Name any emotions you felt today. Were they positive, negative, or neutral?",
        },
        details: [
          "Acknowledge these feelings as valid. This is about awareness, not fixing anything.",
          "Are there any patterns you notice? What triggered these emotions? How did you respond?",
          "What would you do differently? do the same? What did you learn?",
          "What are you proud of? What are you grateful for?",
          "What are you holding onto? What are you letting go of?",
          "What are you ready to release? forgive?",
          "What are you ready to embrace? accept? acknowledge? respect?",
          "What are you ready to celebrate? What are you ready to honor?",
          "What are you ready to cherish? appreciate? treasure? value? love?",
        ],
        note: "This is about awareness, not fixing anything.",
      },
      {
        step: {
          title: "Celebrate Small Wins",
          description:
            "Acknowledge any small victories or moments of joy from the day.",
        },
        note: "This reinforces the importance of emotional awareness.",
      },
      {
        step: {
          title: "Set Intentions for Tomorrow",
          description:
            "Based on your reflection, set one or two intentions for tomorrow.",
        },
        note: "This helps you align your actions with your goals.",
      },
    ],
    frequency: "Once daily, in the evening",
    conclusion:
      "Evening reflection provides closure and clarity. It fosters self-compassion and continuous learning by reviewing your day with intention.",
  },
  {
    title: "Values Alignment Check",
    introduction:
      "Checking your actions against your values builds integrity and self-respect. It ensures that your daily choices reflect what truly matters to you. This strengthens your sense of purpose and reduces internal conflict. Over time, it makes everyday life feel more meaningful and authentic.",
    useCases: [
      "To reduce internal conflict and decision fatigue",
      "To strengthen commitment to core values",
      "To align daily actions with long-term goals",
    ],
    approximateTime: "5 minutes",
    steps: [
      {
        step: {
          title: "Identify Your Core Values",
          description:
            "List your top three to five core values (e.g., honesty, compassion, growth).",
        },
        details: [
          "These are the principles that guide your life.",
          "Examples: family, health, creativity, or community.",
          "These can be personal, professional, or relational.",
        ],
        note: "These are the principles that guide your life.",
      },
      {
        step: {
          title: "Reflect on Your Day",
          description:
            "Think about your day. Did your actions align with your values?",
        },
        note: "This helps you understand your emotional landscape.",
      },
      {
        step: {
          title: "Identify Discrepancies",
          description: "Were there moments when you acted against your values?",
        },
        note: "This is about awareness, not fixing anything.",
      },
      {
        step: {
          title: "Set Intentions for Tomorrow",
          description:
            "Based on your reflection, set one or two intentions for tomorrow.",
        },
        details: [
          "How can you align your actions with your values more closely?",
          "What small changes can you make?",
          "These can be personal, professional, or relational.",
        ],
        note: "This helps you align your actions with your goals.",
      },
      {
        step: {
          title: "Celebrate Alignment",
          description:
            "Acknowledge any moments when you acted in alignment with your values.",
        },
        note: "This reinforces the importance of emotional awareness.",
      },
      {
        step: {
          title: "Repeat Daily",
          description:
            "Make this a daily ritual to build values alignment over time.",
        },
        note: "This helps you track your emotional trends and growth.",
      },
    ],
    frequency: "Daily or weekly",
    conclusion:
      "A daily values check nurtures authenticity, guiding you toward a life of meaning, resilience, and self-respect.",
  },
  {
    title: "Micro-Wins Reflection",
    introduction:
      "Micro-wins are tiny victories that often go unnoticed but build momentum over time. Celebrating small wins daily nurtures motivation, resilience, and self-confidence. Reflecting on micro-wins shifts your narrative from lack to progress. This habit rewires your brain to notice growth instead of setbacks.",
    useCases: [
      "When feeling stuck or defeated",
      "To build motivation and celebrate progress",
      "For reinforcing daily habits and routines",
    ],
    approximateTime: "5 minutes",
    steps: [
      {
        step: {
          title: "Identify Micro-Wins",
          description:
            "List three small wins from your day, no matter how minor.",
        },
        details: [
          "These can be personal, professional, or relational.",
          "Examples: completing a task, having a good conversation, or taking a break.",
        ],
        note: "These can be personal, professional, or relational.",
      },
      {
        step: {
          title: "Reflect on Each Win",
          description:
            "For each win, take a moment to reflect on why it matters to you.",
        },
        note: "This deepens your appreciation and connection to these wins.",
      },
      {
        step: {
          title: "Record It",
          description:
            "Write down your micro-wins in a journal or app for tracking.",
        },
        note: "This creates a simple record of your progress.",
      },
      {
        step: {
          title: "Celebrate Your Wins",
          description:
            "Acknowledge your micro-wins with a smile or a moment of gratitude.",
        },
        details: [
          "This can be a small treat, a moment of self-praise, or simply a smile.",
          "This reinforces the importance of emotional awareness.",
        ],
        note: "This reinforces the importance of emotional awareness.",
      },
    ],
    frequency: "Daily (evening recommended)",
    conclusion:
      "Micro-wins reflections reinforce the truth that growth is happening every day, even in the smallest actions.",
  },
];
