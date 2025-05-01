import { JournalPrompts } from "@/lib/interfaces&types/resources";
import { BsMailboxFlag } from "react-icons/bs";
import { FaBrain, FaHeart, FaSun } from "react-icons/fa";
import { IoChatbubble } from "react-icons/io5";


export const dailyJournalingPrompts: JournalPrompts[] = [
  {
    prompt: "What does my ideal day look like?",
    ideas: [
      "Write about your perfect morning, afternoon, and evening.",
      "Describe the people and places that would be present.",
      "How do you feel emotionally and physically during this day?",
      "What activities would make you feel energized and fulfilled?",
    ],
    Icon: FaSun,
  },
  {
    prompt:
      "Write whatever comes to mind, even if it feels unrelated or disjointed. Allow your subconscious to guide the process.",
    ideas: [
      "Once the time is up, read through what you’ve written. Notice any patterns or surprising insights that emerge.",
      "Free-flow writing, also known as stream of consciousness, is a writing technique where you write continuously without editing or censoring your thoughts.",
      "Use the content from your free-flow writing as a springboard for further creative exploration—whether in writing, art, or another medium.",
    ],
    Icon: FaBrain,
  },
  {
    prompt: "Write about a time you felt truly connected to someone.",
    ideas: [
      "What was the situation, and how did this connection manifest?",
      "What emotions did you experience during this moment of connection?",
      "How did this connection impact your relationship with that person?",
      "What lessons did you learn about connection and intimacy?",
      "How can you cultivate more moments of connection in your life?",
    ],
    Icon: FaHeart,
  },
  {
    prompt: "If I could talk to my younger self, what would I say?",
    ideas: [
      "Write a letter to your younger self with advice and encouragement.",
      "What lessons would you want them to learn sooner?",
      "How do you think they would react to who you’ve become?",
      "What are the moments you’d reassure them about?",
    ],
    Icon: BsMailboxFlag,
  },
  {
    prompt: "What is one thing I want to focus on today?",
    ideas: [
      "What’s the one task or goal I can give my full attention to today?",
      "How will focusing on this task improve my overall well-being or progress?",
      "How can I eliminate distractions to give my full energy to this task?",
    ],
    Icon: IoChatbubble,
  },
  {
    prompt: "What would I do if fear didn’t exist?",
    ideas: [
      "List out the goals and dreams you would pursue without hesitation.",
      "Describe how you would live, knowing fear doesn’t hold you back.",
      "How would your relationships, career, or hobbies change?",
      "What new possibilities would open up for you?",
    ],
    Icon: IoChatbubble,
  },
  {
    prompt: "How do I want to be remembered?",
    ideas: [
      "Describe the legacy you’d like to leave behind.",
      "What values or actions do you hope others will associate with you?",
      "How do you want to impact the people around you?",
      "Write about the kind of person you aspire to become.",
    ],
    Icon: IoChatbubble,
  },
  {
    prompt: "How am I feeling today, emotionally and physically?",
    ideas: [
      "What emotions are present within me as I start the day?",
      "How does my body feel today? Am I feeling energized or do I need to take it easy?",
      "Are there any areas of tension or discomfort in my body that I need to address?",
    ],
    Icon: IoChatbubble,
  },
  {
    prompt: "What will I do today to nurture my physical health?",
    ideas: [
      "How can I take care of my body today—through exercise, eating nourishing food, or resting?",
      "What physical activities will support my energy levels and overall well-being?",
      "How can I listen to my body’s needs today and respond with care?",
    ],
    Icon: IoChatbubble,
  },
  {
    prompt: "What’s one thing I can do today to enhance my creativity?",
    ideas: [
      "How can I engage my creative side, whether through writing, drawing, or problem-solving?",
      "What small steps can I take to open my mind and encourage innovative thinking today?",
      "How can I use my creativity to bring joy and energy into my day?",
    ],
    Icon: IoChatbubble,
  },
  {
    prompt: "What is one thing I can do today to challenge myself?",
    ideas: [
      "What is one area of my comfort zone I can step outside of today?",
      "How can I push myself toward growth, even if it’s in a small way?",
      "What challenge will help me build confidence and resilience?",
    ],
    Icon: IoChatbubble,
  },
  {
    prompt: "What does self-care look like for me?",
    ideas: [
      "Write about your current self-care routine and how it makes you feel.",
      "How could you improve or expand your self-care practices?",
      "What activities restore your energy and bring you joy?",
      "Describe how you nurture both your mind and body.",
    ],
    Icon: IoChatbubble,
  },
  {
    prompt: "What’s one positive thing that has already happened today?",
    ideas: [
      "Reflect on something small but positive that happened this morning.",
      "How can this positive moment set the tone for the rest of my day?",
      "What else can I do today to ensure more moments of positivity?",
    ],
    Icon: IoChatbubble,
  },
  {
    prompt: "How can I practice self-compassion today?",
    ideas: [
      "What is something kind I can do for myself today, whether it’s taking a break or practicing mindfulness?",
      "How can I show myself grace if things don’t go as planned?",
      "What does self-compassion look like for me in my daily life?",
    ],
    Icon: IoChatbubble,
  },
  {
    prompt: "What is my personal definition of success?",
    ideas: [
      "List the things that would make you feel truly successful.",
      "How does your definition of success differ from others?",
      "What does success look like in terms of personal growth?",
      "Write about how you’ll know when you’ve achieved success.",
    ],
    Icon: IoChatbubble,
  },
  {
    prompt: "What are the things I’m grateful for today?",
    ideas: [
      "Write about the small moments or objects that bring you gratitude.",
      "Reflect on your relationships and the support you have.",
      "How does your gratitude practice improve your mindset?",
      "What challenges are you grateful for and why?",
    ],
    Icon: IoChatbubble,
  },
  {
    prompt: "What are my current emotional triggers?",
    ideas: [
      "Identify the situations or people that tend to trigger strong emotions.",
      "How do you respond to these triggers, and how would you like to respond?",
      "What do these triggers teach you about your inner world?",
      "Describe a time you successfully managed an emotional trigger.",
    ],
    Icon: IoChatbubble,
  },
  {
    prompt: "If I could live anywhere in the world, where would it be?",
    ideas: [
      "Write about the place and why it calls to you.",
      "What would your daily life look like in this new location?",
      "How would this environment affect your creativity, energy, and peace?",
      "What would you need to let go of to make this dream a reality?",
    ],
    Icon: IoChatbubble,
  },
  {
    prompt: "What is my favorite memory from childhood?",
    ideas: [
      "Describe the memory in vivid detail — sights, sounds, and feelings.",
      "Why does this memory stand out to you?",
      "How has this memory shaped who you are today?",
      "What lessons or joy can you bring from this memory into your life now?",
    ],
    Icon: IoChatbubble,
  },
  {
    prompt: "How do I show myself love and kindness?",
    ideas: [
      "Write about the ways you currently practice self-love.",
      "What are the things you do to soothe or uplift yourself?",
      "How do you respond to your inner critic, and how can you improve?",
      "What new practices of self-love could you explore?",
    ],
    Icon: IoChatbubble,
  },
  {
    prompt: "What do I want my future self to know?",
    ideas: [
      "Write a letter to your future self with your hopes and dreams.",
      "What advice would you give to the person you’re becoming?",
      "Describe the life you envision for yourself 5, 10, or 20 years from now.",
      "What are the things you want to celebrate about your future self?",
    ],
    Icon: IoChatbubble,
  },
  {
    prompt: "What does my perfect morning routine look like?",
    ideas: [
      "Write about how you would ideally start your day from the moment you wake up.",
      "What habits would you include to set a positive tone for the rest of the day?",
      "How would this routine help with your productivity or mood?",
      "What small changes could you make to move closer to this ideal morning?",
    ],
    Icon: IoChatbubble,
  },
  {
    prompt: "What is one fear I’d like to overcome, and how can I start?",
    ideas: [
      "Describe the fear and how it affects your life.",
      "What steps could you take, no matter how small, to face this fear?",
      "Write about a time when you overcame a smaller fear and how it felt.",
      "How would your life improve if this fear no longer held you back?",
    ],
    Icon: IoChatbubble,
  },
  {
    prompt: "What brings me peace when everything feels chaotic?",
    ideas: [
      "Write about the activities, people, or thoughts that calm you during times of stress.",
      "How do you create moments of stillness in a busy world?",
      "What can you rely on to help you regain focus and inner calm?",
      "How can you integrate more peace into your daily life?",
    ],
    Icon: IoChatbubble,
  },
];
