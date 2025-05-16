import { JournalPrompts } from "@/lib/interfaces&types/resources";
import { BsMailboxFlag } from "react-icons/bs";
import { FaBrain, FaHeart, FaPenAlt, FaSun } from "react-icons/fa";
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
    gallery: {
      data: [
        "https://images.unsplash.com/photo-1566475492421-769f60fd58ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlc3R8ZW58MHx8MHx8fDA%3D",
        "https://plus.unsplash.com/premium_photo-1682587554080-c0d64fb18f9e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJlc3R8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZhbWlseXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1561525140-c2a4cc68e4bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFtaWx5fGVufDB8fDB8fHww",
        "https://plus.unsplash.com/premium_photo-1661504800337-17923a04bb77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHVwcHl8ZW58MHx8MHx8fDA%3D",
        "https://plus.unsplash.com/premium_photo-1680686840755-1d4672ab7fa7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y291cGxlc3xlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1440186347098-386b7459ad6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhpa2luZ3xlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1475235035145-412844f9513a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHJlc3R8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1501901609772-df0848060b33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y291cGxlc3xlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1516511613036-3daf488d955d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvdXBsZXN8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1602255680702-c47261041a97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZhbWlseXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1522850067562-a4c60453058d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGhpa2luZ3xlbnwwfHwwfHx8MA%3D%3D",
      ],
    },
  },
  {
    prompt: "Write about a time you felt completely inspired.",
    ideas: [
      "What was the situation, and how did you feel during this time?",
      "What contributed to this sense of inspiration—environment, people, or mindset?",
      "How did this experience impact your overall well-being?",
      "What did you learn about yourself during this moment of inspiration?",
      "How can you recreate this sense of inspiration in your daily life?",
    ],
    Icon: FaPenAlt,
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
    gallery: {
      data: [
        "https://img.freepik.com/free-photo/elderly-woman-drinking-coffee-cafe-while-working-her-laptop-writing-her-notebook_23-2149230374.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/close-up-hand-writing-notebook_23-2148877761.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/writers-scene-concept_23-2151931181.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/premium-photo/coffee-shop-cafe-drinking-friendship-togetherness-concept_53876-54879.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/premium-photo/cropped-hand-woman-writing-with-pen-paper-home_1048944-25455010.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/unrecognisable-man-writing-notebook_23-2148422490.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
      ],
    },
  },
  {
    prompt: "What does it mean to be emotionally authentic?",
    ideas: [
      "Describe a time you felt emotionally authentic.",
      "What fears or beliefs come up when you think about authenticity?",
      "How do you define emotional authenticity in your own words?",
      "What are the benefits of being emotionally authentic?",
      "What challenges or obstacles have you faced in being authentic?",
      "How can you cultivate more authenticity in your daily life?",
      "What role does self-acceptance play in emotional authenticity?",
      "How can you support others in being more emotionally authentic?",
    ],
    Icon: IoChatbubble,
  },
  {
    prompt:
      "How can I create a daily routine that supports my mental health and reduces stress?",
    ideas: [
      "Consider the elements of your daily routine that contribute to or alleviate stress.",
      "What changes can you make to your routine to prioritize self-care, relaxation, and mindfulness?",
      "How can you establish a consistent routine that promotes balance and well-being?",
    ],
    Icon: IoChatbubble,
  },
  {
    prompt: "What are my top three priorities for the next week?",
    ideas: [
      "Identify the most important tasks or goals you want to focus on in the coming month.",
      "How will these priorities align with your long-term vision and values?",
      "What steps can you take to ensure you stay focused on these priorities?",
      "How will you measure your progress and success in achieving these priorities?",
    ],
    Icon: IoChatbubble,
  },
  {
    prompt: "What is one thing I am grateful for today?",
    ideas: [
      "Reflect on a specific person, experience, or aspect of your life that brings you joy.",
      "How does this gratitude impact your overall well-being?",
      "What can you do to express or share this gratitude with others?",
      "How can you cultivate a habit of gratitude in your daily life?",
    ],
    Icon: IoChatbubble,
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
    gallery: {
      data: [
        "https://img.freepik.com/free-photo/friends-embracing-beach-looking-sky_23-2149450770.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/top-view-couple-lying-bed_23-2148227369.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/couple-lovers-having-romantic-dinner-home_171337-663.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/beautiful-smiling-girl-feeds-her-handsome-boyfriend-eating-tasty-cake-drinking-coffee_8353-6248.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/premium-photo/young-women-are-having-fun-with-raised-arms-together-front-mountain-sunset-happiness-success-friendship-community-concepts_53476-5952.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/premium-photo/couple-holding-hands-field-yellow-flowers_1013470-6675.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/premium-photo/date-coffee-couple-with-smile-relax-bonding-with-hug-break-communication-relationship-morning-breakfast-woman-cafe-love-man-with-care-tea-happy-with-embrace_590464-445348.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/premium-photo/happy-sensual-young-couple-lying-bed-together_118454-9213.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/premium-photo/loving-couple-walking-around-river_636537-86880.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/premium-photo/lovebirds-wrapped-blanket_153608-11030.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/couple-love-drinking-coffee-coffee-shop_158595-1571.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/premium-photo/group-people-stand-hill-with-sun-them_693193-4370.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
      ],
    },
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
    gallery: {
      data: [
        "https://img.freepik.com/free-photo/cute-family-spring-park_1157-21787.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/premium-photo/happy-lesbian-couple-hugging-countryside_251859-1398.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/father-with-son-forest_1303-24008.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/cute-stylish-family-spring-park_1157-24328.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/father-son-playing-park_23-2148684652.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/elegant-mother-with-daughter-summer-forest_1157-35571.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
      ],
    },
  },
  {
    prompt: "What is one thing I want to focus on today?",
    ideas: [
      "What’s the one task or goal I can give my full attention to today?",
      "How will focusing on this task improve my overall well-being or progress?",
      "How can I eliminate distractions to give my full energy to this task?",
      "What steps can I take to ensure I stay focused and present throughout the day?",
      "How will I celebrate or acknowledge my progress at the end of the day?",
    ],
    Icon: IoChatbubble,
    gallery: {
      data: [
        "https://img.freepik.com/premium-photo/woman-reading-book-holding-cup-coffee_109710-1497.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/premium-photo/woman-working-her-desk-with-laptop-cup-coffee_1274269-188408.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/happy-daughter-having-fun-with-her-parents-while-relocating-new-apartment_637285-12378.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/woman-helping-man-gym_23-2149627086.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/family-forest_1303-4701.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/young-family-with-their-little-son-home_1303-20993.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/premium-photo/full-shot-family-silhouette-nature-sunset_23-2150290747.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/college-girls-studying-together_23-2149038414.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/young-family-with-cute-little-daughter-resting-forest-sunset_1303-24075.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/still-life-office-cleaning-process_23-2149343044.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://images.unsplash.com/photo-1486591038957-19e7c73bdc41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJlc3R8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1566475492421-769f60fd58ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlc3R8ZW58MHx8MHx8fDA%3D",
      ],
    },
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
    gallery: {
      data: [
        "https://img.freepik.com/premium-photo/full-length-man-enjoying-bungee-jumping-forest_1048944-14313112.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/amazing-view-human-flying-hang-glider-isolated-blue-sky-background_181624-17659.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/premium-photo/woman-snorkeling-with-great-white-shark-ocean-depths_713655-120294.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/premium-photo/animal-lovers-hug-sumatran-tiger_982999-1728.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/horizontal-shot-beach-with-person-gliding-down-paramotor-parachute_181624-16575.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/selective-focus-shot-longhorns-walking-street_181624-11393.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
      ],
    },
  },
  {
    prompt: "What is one thing I can do today to step outside my comfort zone?",
    ideas: [
      "Identify a small challenge or risk you can take today.",
      "How will this action help you grow or learn something new?",
      "What fears or doubts might arise, and how can you address them?",
      "Reflect on past experiences where stepping outside your comfort zone led to positive outcomes.",
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
    gallery: {
      data: [
        "https://img.freepik.com/free-photo/portrait-confused-young-african-female-with-dark-skin-curly-short-hair_273609-13965.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/medium-shot-scientists-lab_23-2148969963.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/musician-plays-bass-guitar-black-background-with-beam-light-emotional-play-music-concept_169016-4906.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/here-are-your-test-results-you-got_637285-8656.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/man-walks-along-road-forest-fog-view-from-back-generative-al_169016-28618.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/young-family-with-their-sons-home-having-fun_1303-20999.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
      ],
    },
  },
  {
    prompt: "What is one thing I can do today to nurture my mental health?",
    ideas: [
      "Identify a self-care activity that brings you joy and relaxation.",
      "How can you incorporate mindfulness or meditation into your day?",
      "What boundaries can you set to protect your mental well-being?",
      "Reflect on past experiences where prioritizing mental health led to positive outcomes.",
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
    gallery: {
      data: [
        "https://img.freepik.com/free-photo/patience-calmness-meditation-concept-peaceful-relieved-bearded-young-man-practices-yoga-exercise-keeps-hands-zen-gesture-closes-eyes-poses-pink-wall-controls-his-emotions_273609-42511.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/pretty-joyful-dark-skinned-woman-keeps-hand-face-laughs-funny-joke-closes-eyes-from-joy-expresses-positive-emotions-wears-yellow-fashionable-jacket-poses-indoor-green-wall_273609-38300.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/premium-photo/bearded-guy-grey-sweater-grimacing_1258-6714.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/premium-photo/young-caucasian-woman-isolated-purple-wall-blink-through-fingers-embarrassed-covering-face_1187-143881.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/premium-photo/portrait-blond-girl-casual-grey-sweater-losing-control-emotions-screaming-shaking_1258-20333.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/no-thanks-woman-feeling-dislike-rejecting-smth-disgusting-step-back-shake-hands-decline-offer-standing-beige-background_1258-301525.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/premium-photo/young-handsome-man-crosses-fingers-makes-wish_255847-1651.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/premium-photo/beautiful-asian-girl-years-stretches-her-arms-with-pleased-lazy-face-wakes-up-after-sleep-good-nap-s_1258-167258.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/oh-thank-you-very-much-attractive-unshaven-young-male-keeps-hands-heart-expresses-gratitude-stands-against-white-wall-friendly-bearded-caucasian-guy-being-thankful-best-friend_273609-15041.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/premium-photo/laughing-young-woman-gray-sweater-scarf-with-closed-eyes-putting-hands-head-isolated-grey-wall-background-healthy-fashion-lifestyle-people-emotions-cold-season-concept-mock-up-copy-space_365776-12293.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/people-rage-irritation-concept-emotional-outraged-crazy-woman-gestures-angrily-raises-hands-shouts-madly-husband-expresses-negative-emotions-wears-yellow-clothes-isolated-purple-wall_273609-26208.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/negative-feelings-concept-irritated-woman-plugs-ears-clenches-teeth-complains-noise-ignores-unpleasant-conversation-wears-casual-hoodie_273609-39285.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
      ],
    },
  },
  {
    prompt: "What will I do today to nurture my physical health?",
    ideas: [
      "How can I take care of my body today—through exercise, eating nourishing food, or resting?",
      "What physical activities will support my energy levels and overall well-being?",
      "How can I listen to my body’s needs today and respond with care?",
    ],
    Icon: IoChatbubble,
    gallery: {
      data: [
        "https://img.freepik.com/free-photo/group-people-exercising-together-outdoors_23-2151061449.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/fried-chicken-breast-with-vegetables_140725-4649.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/rustic-deck-with-patio-furniture-vegetation_23-2150698386.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/woman-sleeping_231208-12161.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/rustic-patio-furniture-house-deck-with-vegetation_23-2150698318.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/happy-pretty-woman-lying-armchair-weekend_231208-13903.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/people-active-exercises-concept-beautiful-european-young-woman-with-darkhair-dressed-sportswear_176532-9747.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/peaceful-porch-nap_23-2151936765.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/premium-photo/healthy-young-woman-dressing-nightie-stretches-hing-lying-bed-bedroom_183314-11416.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/fried-chicken-with-vegetables-herbs-aluminum-skillet_140725-3253.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://images.unsplash.com/photo-1471560090527-d1af5e4e6eb6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc3R8ZW58MHx8MHx8fDA%3D",
      ],
    },
  },
  {
    prompt: "What’s one thing I can do today to enhance my creativity?",
    ideas: [
      "How can I engage my creative side, whether through writing, drawing, or problem-solving?",
      "What small steps can I take to open my mind and encourage innovative thinking today?",
      "How can I use my creativity to bring joy and energy into my day?",
    ],
    Icon: IoChatbubble,
    gallery: {
      data: [
        "https://img.freepik.com/free-photo/composition-individuality-concept-with-paper_23-2148476747.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/glowing-electric-lamp-illuminates-nature-bright-ideas-generated-by-ai_188544-32982.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/premium-photo/creative-light-bulb-explodes-with-colorful-paint-splashes_1244150-547.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/premium-photo/abstract-business-growth-symbolized-by-whimsical-3d-tree_223509-5595.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
      ],
    },
  },
  {
    prompt: "What is one thing I can do today to practice gratitude?",
    ideas: [
      "List three things I’m grateful for and why they matter to me.",
      "How can I express my gratitude to someone in my life today?",
      "What small moments of joy can I appreciate throughout the day?",
    ],
    Icon: IoChatbubble,
  },
  {
    prompt: "What is one thing I can do today to connect with others?",
    ideas: [
      "How can I reach out to a friend or family member to strengthen our bond?",
      "What small acts of kindness can I perform for someone today?",
      "How can I engage in meaningful conversations with those around me?",
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
    gallery: {
      data: [
        "https://img.freepik.com/free-photo/risk-protection-eliminating-risk-top-view_185193-110325.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/premium-photo/business-competition-strategy-business-success-concept-hand-two-businessman-moving-ch_17047-318.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/athlete-ready-run-with-are-you-ready-message_23-2149074274.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/man-jumping-impossible-possible-cliff-sunset-background-business-concept-idea_1323-265.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/premium-photo/businessman-climbs-mountain-get-flag-achievement-business-goal-difficult-career-concept_207634-4039.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/premium-photo/table-is-figure-black-chess-king-around-which-lie-pawns-business-success-concept_164664-82.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
      ],
    },
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
    gallery: {
      data: [
        "https://img.freepik.com/free-photo/person-keeping-themselves-hydrated_23-2149224018.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/premium-photo/serene-woman-enjoying-floral-fragrance_661495-61072.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/premium-photo/massaging-face-with-jade-stone-roller_274679-47929.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/woman-taking-care-her-nails_23-2149270555.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/daydreaming-woman-blurred-house-plant_23-2148537388.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/woman-enjoying-her-relaxation-ritual_23-2150936368.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
      ],
    },
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
    prompt: "What is one thing I can do today to support my mental health?",
    ideas: [
      "How can I take a break from technology or social media to recharge?",
      "What activities help me relax and clear my mind?",
      "How can I practice mindfulness or meditation today?",
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
    gallery: {
      data: [
        "https://img.freepik.com/free-photo/man-climbing-stairs-heaven_1154-38.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/premium-photo/woman-hand-holding-red-paper-rocket-with-blue-sky-background-sunset_53476-603.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3VjY2Vzc3xlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN1Y2Nlc3N8ZW58MHx8MHx8fDA%3D",
        "https://img.freepik.com/premium-photo/high-five-top-view-business-colleagues-giving-each-other-high-five-symbol-unity-smiling-while-working-board-room_425904-5197.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://images.unsplash.com/photo-1586611637670-bd7d9cae86b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1Y2Nlc3N8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1565034946487-077786996e27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHN1Y2Nlc3N8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1609770231080-e321deccc34c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHN1Y2Nlc3N8ZW58MHx8MHx8fDA%3D",
        "https://img.freepik.com/premium-photo/close-up-top-view-young-business-people-putting-their-hands-together-stack-hands-teamwork_306119-1191.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/premium-photo/close-up-businessman-businesswoman-s-hand-giving-high-five_23-2148190732.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://images.unsplash.com/photo-1586695263077-6a2f79de6b09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHN1Y2Nlc3N8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHN1Y2Nlc3N8ZW58MHx8MHx8fDA%3D",
      ],
    },
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
    prompt: "What is my biggest dream?",
    ideas: [
      "Describe your dream in detail, including how it makes you feel.",
      "What steps can you take today to move closer to this dream?",
      "How would achieving this dream change your life?",
      "What fears or doubts do you need to address to pursue this dream?",
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
    gallery: {
      data: [
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1700828284504-02bd8d5fb2d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1699566448055-671c8dbcc7ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1553342385-111fd6bc6ab3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://img.freepik.com/free-photo/wooden-bridge-koh-nangyuan-island-surat-thani-thailand_335224-1082.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
      ],
    },
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
    prompt: "What is my biggest fear?",
    ideas: [
      "Write about the fear and how it affects your life.",
      "What steps can you take to confront or overcome this fear?",
      "How does this fear hold you back from living fully?",
      "What would your life look like without this fear?",
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
    gallery: {
      data: [
        "https://images.unsplash.com/photo-1552650272-b8a34e21bc4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9ybmluZ3xlbnwwfHwwfHx8MA%3D%3D",
        "https://img.freepik.com/free-photo/young-friends-running-park_23-2147995996.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vcm5pbmd8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8eW9nYXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1550345332-09e3ac987658?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGd5bXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGd5bXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJlYWtmYXN0fGVufDB8fDB8fHww",
        "https://plus.unsplash.com/premium_photo-1674675646818-01d7a7bae64c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVkaXRhdGV8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1542691457-cbe4df041eb2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnJlYWtmYXN0fGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1475855664010-a869729f42c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fG1vcm5pbmd8ZW58MHx8MHx8fDA%3D",
        "https://plus.unsplash.com/premium_photo-1661265933107-85a5dbd815af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3ltfGVufDB8fDB8fHww",
      ],
    },
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
    prompt: "What is my favorite way to express myself?",
    ideas: [
      "Write about the activities or hobbies that allow you to express your true self.",
      "How do these forms of expression make you feel?",
      "What new ways of expressing yourself would you like to explore?",
      "How does self-expression contribute to your overall happiness?",
    ],
    Icon: IoChatbubble,
  },
  {
    prompt: "What is my favorite way to unwind after a long day?",
    ideas: [
      "Describe the activities or rituals that help you relax.",
      "How do these practices help you recharge and reset?",
      "What can you do to make this unwinding process even more enjoyable?",
      "How does unwinding contribute to your overall well-being?",
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
    gallery: {
      data: [
        "https://img.freepik.com/free-photo/brunette-man-looking-his-cat-embracing-wife-indoor-portrait-happy-family-posing-with-pet_197531-12215.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://plus.unsplash.com/premium_photo-1684444605542-93725082d214?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d3JpdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZyaWVuZHN8ZW58MHx8MHx8fDA%3D",
        "https://plus.unsplash.com/premium_photo-1674675647905-db8438e251dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1lZGl0YXRlfGVufDB8fDB8fHww",
        "https://img.freepik.com/free-photo/young-family-with-their-little-son-home_1303-20993.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHVwcHl8ZW58MHx8MHx8fDA%3D",
        "https://img.freepik.com/free-photo/side-view-couple-being-affectionate-indoors_23-2150561479.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/woman-helping-man-gym_23-2149627086.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
        "https://plus.unsplash.com/premium_photo-1661715817028-818d78a4e8e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJpZW5kc3xlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1582298538104-fe2e74c27f59?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZyaWVuZHN8ZW58MHx8MHx8fDA%3D",
        "https://img.freepik.com/free-photo/woman-decorating-her-home-with-orchids_23-2150960684.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
      ],
    },
  },
];

export const journalingPromptsdailyJournalingPrompts = [];
