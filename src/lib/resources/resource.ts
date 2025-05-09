import { Resource } from "../interfaces&types/resources";

export const mentalHealthResources: Resource[] = [
  // Category: "childrens-young-adult-mental-health-books"
  {
    id: "the-color-monster",
    title: "The Color Monster by Anna Llenas",
    description: "Children’s book on emotional awareness.",
    href: "https://www.amazon.com",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [],
    category: "childrens-young-adult-mental-health-books",
  },
  {
    id: "biglifejournal",
    title: "Big Life Journal",
    description:
      "Offers growth mindset and resilience journals, printables, and activities for children and teens to build emotional strength and self-awareness.",
    href: "https://biglifejournal.com/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["mindup", "gozen", "dandelionBooks"],
    category: "childrens-young-adult-mental-health-books",
  },
  {
    id: "gozen",
    title: "GoZen!",
    description:
      "Science-based animated programs and printable workbooks that teach children how to manage anxiety, anger, and negative thinking.",
    href: "https://gozen.com/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["biglifejournal", "copingSkillsForKids", "mindup"],
    category: "childrens-young-adult-mental-health-books",
  },
  {
    id: "copingSkillsForKids",
    title: "Coping Skills for Kids",
    description:
      "Practical tools, books, and worksheets designed to help children manage anxiety, anger, and emotional regulation.",
    href: "https://copingskillsforkids.com/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["gozen", "biglifejournal", "therapistAid"],
    category: "childrens-young-adult-mental-health-books",
  },
  {
    id: "mindup",
    title: "MindUP",
    description:
      "A research-based curriculum that teaches children about the brain, mindfulness, and emotional self-regulation through books and classroom programs.",
    href: "https://mindup.org/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["biglifejournal", "gozen", "childmindInstitute"],
    category: "childrens-young-adult-mental-health-books",
  },
  {
    id: "childmindInstitute",
    title: "Child Mind Institute Book Lists",
    description:
      "Carefully curated lists of books for kids and teens dealing with anxiety, depression, ADHD, and trauma.",
    href: "https://childmind.org/topics/book-lists/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["mindup", "copingSkillsForKids", "readBrightly"],
    category: "childrens-young-adult-mental-health-books",
  },
  {
    id: "readBrightly",
    title: "Read Brightly: Mental Health for Kids & Teens",
    description:
      "Penguin Random House’s Brightly blog features book lists and mental health guides for young readers and parents.",
    href: "https://www.readbrightly.com/tag/mental-health/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["childmindInstitute", "dandelionBooks", "mindup"],
    category: "childrens-young-adult-mental-health-books",
  },
  {
    id: "dandelionBooks",
    title: "Dandelion Books by Magination Press",
    description:
      "A children’s book imprint from the American Psychological Association, focused on emotional health, trauma, grief, and identity.",
    href: "https://www.apa.org/pubs/magination",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [
      "childmindInstitute",
      "biglifejournal",
      "copingSkillsForKids",
    ],
    category: "childrens-young-adult-mental-health-books",
  },

  // Category: "clinical-academic-texts"
  {
    id: "nlm",
    title: "National Library of Medicine (NLM)",
    description:
      "Free access to hundreds of clinical and academic mental health books and ations.",
    href: "https://www.ncbi.nlm.nih.gov/books/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["open-library", "who", "project-gutenberg"],
    category: "clinical-academic-texts",
  },
  {
    id: "who",
    title: "World Health Organization (WHO) ations",
    description:
      "Downloadable global mental health reports, guides, and research.",
    href: "https://www.who.int/ations",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["nlm", "cci", "open-library"],
    category: "clinical-academic-texts",
  },
  {
    id: "proquest-ebook-central",
    title: "ProQuest eBook Central",
    description:
      "University or institutional access to eBooks on mental health.",
    href: "https://ebookcentral.proquest.com",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [],
    category: "clinical-academic-texts",
  },
  {
    id: "jstor-project-muse",
    title: "JSTOR & Project MUSE",
    description: "Access to academic texts on mental health research.",
    href: "https://www.jstor.org",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [],
    category: "clinical-academic-texts",
  },
  {
    id: "oxford-academic",
    title: "Oxford Academic / SpringerLink",
    description:
      "For psychology and psychiatry texts, typically requiring university login.",
    href: "https://academic.oup.com",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [],
    category: "clinical-academic-texts",
  },
  {
    id: "the-diagnostic-and-statistical-manual-of-mental-disorders-dsm-5",
    title: "The Diagnostic and Statistical Manual of Mental Disorders (DSM-5)",
    description:
      "The DSM-5 is the standard classification of mental disorders used by clinicians and researchers. It provides a comprehensive framework for diagnosing mental health conditions based on clinical research and established diagnostic criteria.",
    href: "https://www.psychiatry.org/psychiatrists/practice/dsm",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [
      "clinical-academic-texts",
      "mental-health-education-self-help",
    ],
    category: "clinical-academic-texts",
  },
  {
    id: "cognitive-behavioral-therapy-cbt-principles-and-practice",
    title: "Cognitive Behavioral Therapy: Principles and Practice",
    description:
      "This text delves into the principles, techniques, and applications of Cognitive Behavioral Therapy (CBT), a cornerstone approach in modern clinical psychology. Ideal for both students and professionals, this text explores its effectiveness in treating anxiety, depression, and other disorders.",
    href: "https://www.amazon.com/Cognitive-Behavioral-Therapy-Principles-Practice/dp/1462513010",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [
      "clinical-academic-texts",
      "mental-health-education-self-help",
    ],
    category: "clinical-academic-texts",
  },
  {
    id: "the-psychotherapy-approach-handbook",
    title: "The Psychotherapy Approach Handbook",
    description:
      "This comprehensive guide offers insight into a wide range of psychotherapy approaches, from psychodynamic to cognitive behavioral. A valuable resource for therapists and students, it offers a deep dive into therapeutic techniques and case study analyses.",
    href: "https://www.amazon.com/Psychotherapy-Approach-Handbook-Psychological-Science/dp/146252022X",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [
      "clinical-academic-texts",
      "mental-health-education-self-help",
    ],
    category: "clinical-academic-texts",
  },
  {
    id: "mental-health-care-in-children-and-adolescents",
    title: "Mental Health Care in Children and Adolescents",
    description:
      "This clinical textbook focuses on the mental health care of children and adolescents, providing essential information about diagnosis, treatment, and management of mental disorders in younger populations.",
    href: "https://www.amazon.com/Mental-Health-Care-Children-Adolescents/dp/1603273832",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [
      "clinical-academic-texts",
      "mental-health-education-self-help",
    ],
    category: "clinical-academic-texts",
  },
  {
    id: "the-handbook-of-trauma-psychotherapy",
    title: "The Handbook of Trauma Psychotherapy",
    description:
      "This text covers the theory and practice of trauma-focused psychotherapy, providing practical tools for clinicians to address trauma symptoms and offer effective interventions for recovery.",
    href: "https://www.amazon.com/Handbook-Trauma-Psychotherapy-Clinical-Practice/dp/0415710818",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [
      "clinical-academic-texts",
      "mental-health-education-self-help",
    ],
    category: "clinical-academic-texts",
  },
  {
    id: "the-handbook-of-psychology",
    title: "The Handbook of Psychology",
    description:
      "A comprehensive, multi-volume work that covers all areas of psychology. It's an essential resource for those studying the complexities of human behavior, mental health conditions, and therapeutic techniques.",
    href: "https://www.wiley.com/en-us/The+Handbook+of+Psychology-p-9781118453706",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [
      "clinical-academic-texts",
      "mental-health-education-self-help",
    ],
    category: "clinical-academic-texts",
  },

  // Category: "memoirs-lived-experience-narratives"
  {
    id: "an-unquiet-mind",
    title: "An Unquiet Mind by Kay Redfield Jamison",
    description: "Memoir on bipolar disorder.",
    href: "https://www.amazon.com",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [],
    category: "memoirs-lived-experience-narratives",
  },
  {
    id: "theMightyPersonalStories",
    title: "The Mighty – Personal Stories",
    description:
      "A community-driven platform sharing thousands of personal stories from people living with mental illness, chronic illness, disability, and more.",
    href: "https://themighty.com/topic/mental-health/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [
      "madinAmerica",
      "oc87RecoveryDiaries",
      "psychologyTodayVoices",
    ],
    category: "memoirs-lived-experience-narratives",
  },
  {
    id: "oc87RecoveryDiaries",
    title: "OC87 Recovery Diaries",
    description:
      "A storytelling platform for people living with mental illness to share personal journeys of recovery and resilience through essays and films.",
    href: "https://oc87recoverydiaries.org/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [
      "theMightyPersonalStories",
      "madinAmerica",
      "namiPersonalStories",
    ],
    category: "memoirs-lived-experience-narratives",
  },
  {
    id: "madinAmerica",
    title: "Mad in America – Personal Stories",
    description:
      "Offers thoughtful, first-person narratives that challenge the conventional understanding of mental health, written by people with lived experience.",
    href: "https://www.madinamerica.com/category/personal-stories/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [
      "oc87RecoveryDiaries",
      "theMightyPersonalStories",
      "mindCharityRealStories",
    ],
    category: "memoirs-lived-experience-narratives",
  },
  {
    id: "mindCharityRealStories",
    title: "Mind Charity – Real Stories",
    description:
      "The UK-based mental health charity shares powerful real-life experiences of people living with depression, anxiety, bipolar disorder, and more.",
    href: "https://www.mind.org.uk/information-support/your-stories/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [
      "namiPersonalStories",
      "madinAmerica",
      "psychologyTodayVoices",
    ],
    category: "memoirs-lived-experience-narratives",
  },
  {
    id: "namiPersonalStories",
    title: "NAMI – Personal Stories",
    description:
      "Firsthand accounts from people with mental illness and their families, providing insight, support, and hope.",
    href: "https://www.nami.org/personal-stories",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [
      "mindCharityRealStories",
      "oc87RecoveryDiaries",
      "theMightyPersonalStories",
    ],
    category: "memoirs-lived-experience-narratives",
  },
  {
    id: "when-breath-becomes-air",
    title: "When Breath Becomes Air",
    description:
      "A poignant memoir by Dr. Paul Kalanithi, a neurosurgeon who faced terminal cancer. This book explores life, death, and the human experience of facing mortality with dignity and purpose.",
    href: "https://www.amazon.com/When-Breath-Becomes-Air/dp/081298840X",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [
      "memoirs-lived-experience-narratives",
      "mental-health-education-self-help",
    ],
    category: "memoirs-lived-experience-narratives",
  },
  {
    id: "the-glass-castle",
    title: "The Glass Castle",
    description:
      "Jeannette Walls' memoir tells the story of growing up in poverty with an eccentric, dysfunctional family. Her narrative of survival, resilience, and ultimately success has been a source of inspiration to many.",
    href: "https://www.amazon.com/Glass-Castle-Memoir-Jeannette-Walls/dp/074324754X",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [
      "memoirs-lived-experience-narratives",
      "mental-health-education-self-help",
    ],
    category: "memoirs-lived-experience-narratives",
  },
  {
    id: "educated",
    title: "Educated",
    description:
      "Tara Westover's memoir about growing up in a strict and abusive household in rural Idaho and eventually breaking free to pursue education. This book highlights the power of education and the strength of the human spirit.",
    href: "https://www.amazon.com/Educated-Memoir-Tara-Westover/dp/0399590501",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [
      "memoirs-lived-experience-narratives",
      "mental-health-education-self-help",
    ],
    category: "memoirs-lived-experience-narratives",
  },
  {
    id: "the-sun-down-ends",
    title: "The Sun Down Ends",
    description:
      "A memoir by a survivor of domestic violence, offering a deeply personal and courageous account of the abuse and recovery process. This book serves as an important testament to strength and healing from trauma.",
    href: "https://www.amazon.com/Sun-Down-Ends-Memoir/dp/0997675635",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [
      "memoirs-lived-experience-narratives",
      "mental-health-education-self-help",
    ],
    category: "memoirs-lived-experience-narratives",
  },
  {
    id: "the-year-of-magical-thinking",
    title: "The Year of Magical Thinking",
    description:
      "Joan Didion’s deeply personal account of grief following the sudden death of her husband, and the illness of their only daughter. This memoir reveals the profound and often surreal experience of mourning.",
    href: "https://www.amazon.com/Year-Magical-Thinking-Joan-Didion/dp/1400078438",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [
      "memoirs-lived-experience-narratives",
      "mental-health-education-self-help",
    ],
    category: "memoirs-lived-experience-narratives",
  },
  {
    id: "the-light-of-the-world",
    title: "The Light of the World",
    description:
      "A memoir by Elizabeth Alexander about the sudden death of her husband and how she navigated grief, love, and loss. It’s an exploration of mourning and the unexpected moments of beauty that emerge in times of sorrow.",
    href: "https://www.amazon.com/Light-World-Memoir-Elizabeth-Alexander/dp/1451692643",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [
      "memoirs-lived-experience-narratives",
      "mental-health-education-self-help",
    ],
    category: "memoirs-lived-experience-narratives",
  },
  {
    id: "psychologyTodayVoices",
    title: "Psychology Today – Voices of Experience",
    description:
      "Psychology Today’s blog section where individuals reflect on personal experiences with trauma, therapy, diagnosis, and healing.",
    href: "https://www.psychologytoday.com/us/blog/voices-experience",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [
      "madinAmerica",
      "namiPersonalStories",
      "theMightyPersonalStories",
    ],
    category: "memoirs-lived-experience-narratives",
  },

  // Category: "mental-health-education-self-help"
  {
    id: "mental-health-first-aid",
    title: "Mental Health First Aid (USA)",
    description:
      "Training programs and free resources to support others in mental health crises.",
    href: "https://www.mentalhealthfirstaid.org/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["bookshare", "who"],
    category: "mental-health-education-self-help",
  },
  {
    id: "mentalHealthAmericaTools",
    title: "Mental Health America – Tools & Resources",
    description:
      "Offers free toolkits, screenings, and self-help resources to promote mental wellness and early intervention.",
    href: "https://www.mhanational.org/mental-health-information",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [
      "namiEducationCenter",
      "psychologyTools",
      "verywellMind",
    ],
    category: "mental-health-education-self-help",
  },
  {
    id: "psychologyTools",
    title: "Psychology Tools – Self-Help Library",
    description:
      "A professional-grade library of cognitive behavioral therapy worksheets, guides, and psychoeducational tools, created by licensed psychologists.",
    href: "https://www.psychologytools.com/self-help/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [
      "mindSelfHelp",
      "verywellMind",
      "mentalHealthAmericaTools",
    ],
    category: "mental-health-education-self-help",
  },
  {
    id: "verywellMind",
    title: "Verywell Mind",
    description:
      "A trusted site offering clear, research-backed information on mental health topics and self-improvement, written by licensed professionals.",
    href: "https://www.verywellmind.com/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [
      "psychologyTools",
      "mindSelfHelp",
      "mentalHealthAmericaTools",
    ],
    category: "mental-health-education-self-help",
  },
  {
    id: "mindful-awareness",
    title: "Mindful Awareness Practices (The Greater Good Science Center)",
    description:
      "Free guides and resources for practicing mindfulness and reducing anxiety.",
    href: "https://ggsc.berkeley.edu/well-being",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["scribd", "therapist-aid"],
    category: "mental-health-education-self-help",
  },

  // Category: "online-self-help-book-platforms"
  {
    id: "open-library",
    title: "Open Library",
    description:
      "Borrow full mental health ebooks for free with a library-style interface.",
    href: "https://openlibrary.org/subjects/mental_health",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["nlm", "project-gutenberg"],
    category: "online-self-help-book-platforms",
  },
  {
    id: "blinkist",
    title: "Blinkist",
    description:
      "Summarized versions of top mental health books in 15-minute reads or audio.",
    href: "https://www.blinkist.com/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["scribd", "audible"],
    category: "online-self-help-book-platforms",
  },
  {
    id: "project-gutenberg",
    title: "Project Gutenberg",
    description:
      "Free classic texts that may include early works on psychology or philosophy related to mental well-being.",
    href: "https://www.gutenberg.org/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["open-library"],
    category: "online-self-help-book-platforms",
  },
  {
    id: "scribd",
    title: "Scribd",
    description:
      "Unlimited access to books like 'The Happiness Trap', 'Lost Connections', and 'The Body Keeps the Score.'",
    href: "https://www.scribd.com/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["kindle-unlimited", "audible", "blinkist"],
    category: "online-self-help-book-platforms",
  },
  {
    id: "kindle-unlimited",
    title: "Kindle Unlimited",
    description:
      "Amazon’s ebook subscription service with mental health titles and memoirs.",
    href: "https://www.amazon.com/kindle-dbs/hz/subscribe/ku",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["kindle-unlimited", "librofm", "scribd", "audible"],
    category: "online-self-help-book-platforms",
  },
  {
    id: "audible",
    title: "Audible",
    description:
      "Audiobooks covering therapy, mindfulness, psychology, and personal development.",
    href: "https://www.audible.com/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["kindle-unlimited", "scribd", "librofm", "spotify"],
    category: "online-self-help-book-platforms",
  },
  {
    id: "librofm",
    title: "Libro.fm",
    description:
      "Audiobooks that support independent bookstores, including mental health content.",
    href: "https://libro.fm/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["kindle-unlimited", "scribd", "audible"],
    category: "online-self-help-book-platforms",
  },
  {
    id: "spotify",
    title: "Spotify (Audiobooks)",
    description:
      "Free mental health audiobooks and guided self-help programs available on Spotify.",
    href: "https://spotify.com/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["kindle-unlimited", "scribd", "audible"],
    category: "online-self-help-book-platforms",
  },
  {
    id: "open-library-archive",
    title: "Open Library (by Internet Archive)",
    description:
      "Borrow full digital books on mental health (requires free account).",
    href: "https://openlibrary.org/subjects/mental_health",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [],
    category: "online-self-help-book-platforms",
  },

  // Category: "specialized-resources"
  {
    id: "neurodivergence-support",
    title: "Neurodivergence Support",
    description:
      "Resources designed to support individuals with neurodivergent experiences, from ADHD to autism spectrum disorder. These resources aim to foster acceptance, understanding, and empowerment.",
    href: "https://www.additudemag.com/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [
      "mental-health-education-self-help",
      "specialized-resources",
      "therapist-aid",
    ],
    category: "specialized-resources",
  },
  {
    id: "trauma-informed-care",
    title: "Trauma-Informed Care",
    description:
      "This section includes resources for understanding and healing trauma, offering tools for individuals and professionals working with trauma survivors.",
    href: "https://www.traumainformedcareproject.org/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [
      "mental-health-education-self-help",
      "specialized-resources",
    ],
    category: "specialized-resources",
  },
  {
    id: "cultural-identity-and-mental-health",
    title: "Cultural Identity and Mental Health",
    description:
      "Resources focused on understanding how cultural identity impacts mental health, offering culturally responsive strategies and care.",
    href: "https://www.psychologytoday.com/us/basics/culture-and-mental-health",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [
      "mental-health-education-self-help",
      "specialized-resources",
      "therapist-aid",
    ],
    category: "specialized-resources",
  },
  {
    id: "neurodivergent-self-advocacy",
    title: "Neurodivergent Self-Advocacy",
    description:
      "Tools and strategies for neurodivergent individuals to advocate for themselves in various spaces, including the workplace, education, and healthcare.",
    href: "https://www.autisticadvocacy.org/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["neurodivergence-support", "specialized-resources"],
    category: "specialized-resources",
  },
  {
    id: "mental-health-identity-and-diagnosis",
    title: "Mental Health Identity and Diagnosis",
    description:
      "Resources for understanding the intersection of mental health diagnosis and identity, including guidance on navigating life with specific diagnoses.",
    href: "https://www.nami.org/Your-Journey",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [
      "mental-health-education-self-help",
      "specialized-resources",
      "therapist-aid",
    ],
    category: "specialized-resources",
  },
  {
    id: "support-for-mental-health-professionals",
    title: "Support for Mental Health Professionals",
    description:
      "Resources to help mental health professionals maintain their own mental well-being while supporting their clients, including self-care tools and professional development.",
    href: "https://www.psychologytoday.com/us/therapists/mental-health-professionals",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [
      "mental-health-education-self-help",
      "specialized-resources",
    ],
    category: "specialized-resources",
  },
  {
    id: "mindfulness-for-mental-health",
    title: "Mindfulness for Mental Health",
    description:
      "Mindfulness and meditation resources tailored for individuals experiencing mental health challenges, providing grounding practices to enhance emotional regulation.",
    href: "https://www.meditationoasis.com/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [
      "mental-health-education-self-help",
      "specialized-resources",
    ],
    category: "specialized-resources",
  },

  // Category: "workbooks-guided-journals"
  {
    id: "cci",
    title: "Centre for Clinical Interventions (CCI)",
    description:
      "Free CBT-based workbooks for anxiety, depression, self-esteem, and more.",
    href: "https://www.cci.health.wa.gov.au/Resources/Looking-After-Yourself",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["who", "therapist-aid", "the-wellness-journal"],
    category: "workbooks-guided-journals",
  },
  {
    id: "therapist-aid",
    title: "Therapist Aid",
    description:
      "Free printable workbooks, guides, and mental health activities.",
    href: "https://www.therapistaid.com/therapy-worksheets",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["cci", "the-wellness-journal"],
    category: "workbooks-guided-journals",
  },
  {
    id: "managing-stress",
    title: "Managing Stress Workbook (Therapist Aid)",
    description:
      "Free workbook for managing stress with exercises and coping strategies.",
    href: "https://www.therapistaid.com/therapy-worksheets/stress-management",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["cci", "the-wellness-journal", "therapist-aid"],
    category: "workbooks-guided-journals",
  },
  {
    id: "anxiety-phobia-workbook",
    title: "The Anxiety & Phobia Workbook by Edmund J. Bourne",
    description: "Workbook focused on anxiety and phobias.",
    href: "https://www.amazon.com",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["the-self-discovery-journal", "therapist-aid"],
    category: "workbooks-guided-journals",
  },
  {
    id: "dbt-skills-training-workbook",
    title: "DBT Skills Training Workbook by Marsha Linehan",
    description: "DBT-based workbook.",
    href: "https://www.amazon.com",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["the-self-discovery-journal", "therapist-aid"],
    category: "workbooks-guided-journals",
  },
  {
    id: "the-self-love-workbook",
    title: "The Self-Love Workbook by Shainna Ali",
    description: "Workbook for building self-love.",
    href: "https://www.amazon.com",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["the-gratitude-journal", "the-wellness-journal"],
    category: "workbooks-guided-journals",
  },
  {
    id: "the-five-second-journal",
    title: "The 5 Second Journal",
    description:
      "A guided journal created by Mel Robbins, designed to help you build the habits and mindset that support your best life. With prompts and exercises, this journal focuses on empowering you to make positive changes every day.",
    href: "https://www.amazon.com/5-Second-Journal-Mel-Robbins/dp/1683643192",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["the-self-discovery-journal", "the-gratitude-journal"],
    category: "workbooks-guided-journals",
  },
  {
    id: "the-self-love-experiment",
    title: "The Self-Love Experiment",
    description:
      "This workbook, by Shannon Kaiser, offers prompts and exercises that guide you through the process of loving and accepting yourself more fully. It’s a step-by-step approach to becoming your own biggest supporter.",
    href: "https://www.amazon.com/Self-Love-Experiment-Prompts-Self-Worth-You/dp/1946885327",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [
      "the-gratitude-journal",
      "the-self-discovery-journal",
      "the-wellness-journal",
    ],
    category: "workbooks-guided-journals",
  },
  {
    id: "the-self-discovery-journal",
    title: "The Self-Discovery Journal",
    description:
      "A guided journal filled with prompts designed to help you uncover who you really are, what you value, and what your deepest desires are. This resource invites reflection and deeper self-awareness.",
    href: "https://www.amazon.com/Self-Discovery-Journal-Prompts-Personal-Development/dp/1793358229",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["the-gratitude-journal", "the-creative-journal"],
    category: "workbooks-guided-journals",
  },
  {
    id: "the-wellness-journal",
    title: "The Wellness Journal",
    description:
      "This journal combines fitness, nutrition, and mindfulness prompts, helping you track your physical, emotional, and mental well-being. It offers practical exercises for creating a balanced, healthy life.",
    href: "https://www.amazon.com/Wellness-Journal-Prompts-Wellness-Yourself/dp/1793362373",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [
      "the-creative-journal",
      "the-gratitude-journal",
      "the-self-discovery-journal",
    ],
    category: "workbooks-guided-journals",
  },
  {
    id: "the-gratitude-journal",
    title: "The Gratitude Journal",
    description:
      "A journal focused on cultivating gratitude, this workbook offers prompts designed to help you recognize and appreciate the small and large blessings in your life. Practicing gratitude has been shown to improve mental well-being and happiness.",
    href: "https://www.amazon.com/Gratitude-Journal-Daily-Reflect-Journals/dp/1731143285",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["the-creative-journal", "the-wellness-journal"],
    category: "workbooks-guided-journals",
  },
  {
    id: "the-creative-journal",
    title: "The Creative Journal",
    description:
      "A journal designed for anyone seeking to ignite creativity and self-expression. It offers a variety of prompts, exercises, and space for creative exploration. Perfect for those looking to enhance their creative practice while also reflecting on their personal growth.",
    href: "https://www.amazon.com/Creative-Journal-Express-Yourself-Through/dp/1611804746",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["the-gratitude-journal", "the-self-discovery-journal"],
    category: "workbooks-guided-journals",
  },

  // Category: "mental-health-apps"
  {
    id: "headspaceApp",
    title: "Headspace",
    description:
      "A popular meditation and mindfulness app designed to help reduce stress, improve focus, and enhance overall well-being.",
    href: "https://www.headspace.com/",
    image:
      "https://play-lh.googleusercontent.com/sSjK8ZpCafvsAeQdC5KbpjuHXZQFzXH_gRodS4kBZ6peK9AxhM5ikTIsWqoIAgkrlXI=w1052-h592-rw",
    similarResources: ["calmApp", "moodpathApp", "sanvelloApp"],
    category: "mental-health-apps",
  },
  {
    id: "how-we-feel",
    title: "How We Feel",
    description:
      "An app designed to help you identify and understand your emotions, providing tools for emotional awareness and regulation.",
    href: "https://howwefeel.org/",
    image:
      "https://play-lh.googleusercontent.com/qywBcV6jMg-ea1YdypchpgiSm1_c-fa1LSmjSJ0hp2izKjwjxpQitmxi8KsehntoNwA=w1052-h592-rw",
    similarResources: ["headspaceApp", "calmApp", "sanvelloApp"],
    category: "mental-health-apps",
  },
  {
    id: "voidpet-garden-mental-health",
    title: "Voidpet Garden",
    description:
      "A unique app that combines mental health support with a virtual pet garden, allowing users to care for their pets while engaging in mindfulness and self-care activities.",
    href: "https://voidpetgarden.com/",
    image:
      "https://play-lh.googleusercontent.com/sPOBmxKILGEZxQz0KmtXc-AnI2vLAHVmG9rvmN7AdwlKqENsQwO99MFinBUaN6rBLA=w1052-h592-rw",
    similarResources: ["headspaceApp", "calmApp", "sanvelloApp"],
    category: "mental-health-apps",
  },
  {
    id: "dailybean-simplest-journal",
    title: "DailyBean",
    description:
      "A simple journaling app that allows you to track your mood and daily experiences, helping you reflect on your mental health over time.",
    href: "https://dailybeanapp.com/",
    image:
      "https://play-lh.googleusercontent.com/gRlJ5E1XcKKqRlNIBFWB9TtySjvRfp51GWJsciiPJVv0Tqm0sV11EK2Jf5RDOwyxhg=w1052-h592-rw",
    similarResources: ["headspaceApp", "calmApp", "sanvelloApp"],
    category: "mental-health-apps",
  },
  {
    id: "finch-self-care-pet",
    title: "Finch",
    description:
      "An app that combines self-care with a virtual pet, allowing users to care for their pet while engaging in mental health activities and journaling.",
    href: "https://finchpet.com/",
    image:
      "https://play-lh.googleusercontent.com/QnxsLCpoGBsw29_Mx5hLP64jNeovXO_oeBpNjJBYjUxL3eT81JOoRyxH2ptcHn9A_w=w1052-h592-rw",
    similarResources: ["headspaceApp", "calmApp", "sanvelloApp"],
    category: "mental-health-apps",
  },
  {
    id: "betterme-mental-health",
    title: "BetterMe",
    description:
      "An app that offers personalized mental health support, including guided meditations, mood tracking, and self-care activities.",
    href: "https://betterme.world/",
    image:
      "https://play-lh.googleusercontent.com/lDaR3OoWZCDC2RZ_swrXBjptDWrCV8rRpTg-Il-J1wv5nppc3noJvUTH2ExN52Bumrg=w1052-h592-rw",
    similarResources: ["headspaceApp", "calmApp", "sanvelloApp"],
    category: "mental-health-apps",
  },
  {
    id: "atom-meditation-for-beginners",
    title: "Atom",
    description:
      "A meditation app designed for beginners, offering guided meditations and mindfulness exercises to help users develop a consistent practice.",
    href: "https://atomapp.com/",
    image:
      "https://play-lh.googleusercontent.com/ehrzIEejyRacVEAmgNGMti4u3ptEXTXf5Vmoj-TJ9k4RkSpTZHMfi5fPcCgEfM4jwjtq=w1052-h592-rw",
    similarResources: ["headspaceApp", "calmApp", "sanvelloApp"],
    category: "mental-health-apps",
  },
  {
    id: "healthy-minds-program",
    title: "Healthy Minds Program",
    description:
      "An app that combines mindfulness, meditation, and emotional well-being practices, designed to help users cultivate a healthy mind.",
    href: "https://healthymindsapp.com/",
    image:
      "https://play-lh.googleusercontent.com/uLWP2HbIvh5BRmyE9aahMrC0zrXnBuaqAXghU3nQ8_xIQRHtwPhufPSduSltW9uTTbI=w1052-h592-rw",
    similarResources: ["headspaceApp", "calmApp", "sanvelloApp"],
    category: "mental-health-apps",
  },

  // Category: "Podcasts"
  {
    id: "the-unfiltered-therapists",
    title: "The Unfiltered Therapists",
    description:
      "Therapist Unfiltered is a candid conversation about mental health, relationships, and personal growth. Each episode features a therapist discussing issues relevant to today’s society and offering advice for navigating life’s challenges.",
    href: "https://www.therapistunfiltered.com/",
    image: "/images/podcasts/unfiltered-therapists.png",
    similarResources: ["podcasts", "mental-health-education-self-help"],
    category: "podcasts",
  },
  {
    id: "unlocking-us",
    title: "Unlocking Us with Brené Brown",
    description:
      "Brené Brown explores what it means to be human, offering insights on vulnerability, courage, connection, and the messy parts of life.",
    href: "https://brenebrown.com/podcast-show/unlocking-us/",
    image: "/images/podcasts/unlocking-us.png",
    similarResources: [
      "we-can-do-hard-things",
      "ten-percent-happier",
      "therapy-chat",
    ],
    category: "podcasts",
  },
  {
    id: "we-can-do-hard-things",
    title: "We Can Do Hard Things",
    description:
      "Glennon Doyle, along with her sister and wife, discusses life's hardest truths with vulnerability and humor—touching on topics from anxiety to boundaries and burnout.",
    href: "https://momastery.com/blog/we-can-do-hard-things-podcast/",
    image: "/images/podcasts/we-can-do-hard-things.png",
    similarResources: [
      "unlocking-us",
      "ten-percent-happier",
      "unf*ck-your-brain",
    ],
    category: "podcasts",
  },
  {
    id: "ten-percent-happier",
    title: "10% Happier with Dan Harris",
    description:
      "Hosted by Dan Harris, this podcast brings practical mental health tools rooted in mindfulness, meditation, and psychology from leading experts.",
    href: "https://www.tenpercent.com/podcast",
    image: "https://c.media-amazon.com/images/I/41RsOoojQXL._SY466_.jpg",
    similarResources: ["headspaceApp", "therapy-chat", "unlocking-us"],
    category: "podcasts",
  },
  {
    id: "mental-illness-happy-hour",
    title: "Mental Illness Happy Hour",
    description:
      "A weekly podcast hosted by comedian Paul Gilmartin, featuring candid conversations about mental illness, trauma, and the challenges of life.",
    href: "https://mentalpod.com/",
    image: "/images/podcasts/mental-illness.png",
    similarResources: [
      "therapy-chat",
      "unf*ck-your-brain",
      "the-unfiltered-therapists",
    ],
    category: "podcasts",
  },
  {
    id: "the-happiness-lab",
    title: "The Happiness Lab with Dr. Laurie Santos",
    description:
      "Dr. Laurie Santos, a Yale professor, shares the science of happiness and practical tips for improving well-being based on her popular course.",
    href: "https://www.happinesslab.fm/",
    image: "/images/podcasts/ten-percent-happier.png",
    similarResources: [
      "therapy-chat",
      "unf*ck-your-brain",
      "the-unfiltered-therapists",
    ],
    category: "podcasts",
  },
  {
    id: "the-school-of-greatness",
    title: "The School of Greatness with Lewis Howes",
    description:
      "Lewis Howes interviews inspiring individuals from various fields, discussing their journeys, challenges, and the lessons learned along the way.",
    href: "https://lewishowes.com/sogpodcast/",
    image: "/images/podcasts/school-of-greatness.png",
    similarResources: [
      "therapy-chat",
      "unf*ck-your-brain",
      "the-unfiltered-therapists",
    ],
    category: "podcasts",
  },
  {
    id: "the-mindset-mentor",
    title: "The Mindset Mentor with Rob Dial",
    description:
      "Rob Dial shares insights and strategies for personal development, mindset shifts, and achieving success in various aspects of life.",
    href: "https://robdial.com/podcast/",
    image: "/images/podcasts/mindset-mentor.png",
    similarResources: [
      "therapy-chat",
      "unf*ck-your-brain",
      "the-unfiltered-therapists",
    ],
    category: "podcasts",
  },

  // Category: "recommended-books-and-articles"
  {
    id: "atomic-habits",
    title: "Atomic Habits by James Clear",
    description:
      "One of the most actionable guides on how to build good habits, break bad ones, and master the tiny behaviors that lead to big change.",
    href: "https://jamesclear.com/atomic-habits",
    image: "https://c.media-amazon.com/images/I/81ANaVZk5LL._SY466_.jpg",
    similarResources: ["deep-work", "the-power-of-habit", "grit"],
    category: "recommended-books-and-articles",
  },
  {
    id: "principles",
    title: "Principles by Ray Dalio",
    description:
      "A mix of autobiography and management manual, Dalio’s framework for decision-making and personal effectiveness is backed by decades of experience.",
    href: "https://www.principles.com/",
    image:
      "https://c.media-amazon.com/images/I/61LKD6scbfL._AC_UY327_FMwebp_QL65_.jpg",
    similarResources: [
      "deep-work",
      "the-7-habits-of-highly-effective-people",
      "thinking-fast-and-slow",
    ],
    category: "recommended-books-and-articles",
  },
  {
    id: "deep-work",
    title: "Deep Work by Cal Newport",
    description:
      "A manifesto for focused success in a distracted world. Newport provides tools for maximizing cognitive performance and minimizing distraction.",
    href: "https://www.amazon.com/Deep-Work-Focused-Success-Distracted/dp/1455586692/ref=sr_1_1?crid=3S7IDGDR0UHN6&dib=eyJ2IjoiMSJ9.GXchbC3wgCUhodWl-i9aj3rmuZ-QgPAl6aKspLUp_xpYblkdq41U1h4NGl39RXN9Odu83V_64p32wO4mzGoV3za5GlU79P0Y9KqXomt-ozwNlU2EOz4Ja0QKNNW2_NuxJU1nhYYUjQawZXxwRyY8Cj5jBqAT39SFKw13WzIN7_jS2AvwgKpWmIKLPWVMFBA6ZVZVMG9c60J6xU3ichyWtu-ArrCl1FwBcT-_t3j6lyk.rIrlUkSfvdmv7Nl1YQafz6KVoEYNZubjXOce0cQ5a34&dib_tag=se&keywords=Deep+Work+by+Cal+Newport&qid=1746397195&s=books&sprefix=deep+work+by+cal+newport%2Cstripbooks%2C148&sr=1-1",
    image:
      "https://c.media-amazon.com/images/I/91nujEwIpYL._AC_UY327_FMwebp_QL65_.jpg",
    similarResources: ["atomic-habits", "digital-minimalism", "principles"],
    category: "recommended-books-and-articles",
  },
  {
    id: "the-subtle-art-of-not-giving-a-f*ck",
    title: "The Subtle Art of Not Giving a F*ck by Mark Manson",
    description:
      "A counterintuitive approach to living a good life, Manson argues that we should focus on what truly matters and let go of the trivial.",
    href: "https://markmanson.net/books/subtle-art",
    image:
      "https://c.media-amazon.com/images/I/71QKQ9mwV7L._AC_UY327_FMwebp_QL65_.jpg",
    similarResources: [
      "the-7-habits-of-highly-effective-people",
      "the-power-of-habit",
      "the-4-hour-workweek",
    ],
    category: "recommended-books-and-articles",
  },
  {
    id: "unf*ck-yourself",
    title: "Unf*ck Yourself by Gary John Bishop",
    description:
      "A no-nonsense guide to self-improvement, Bishop’s book challenges readers to take responsibility for their lives and offers practical advice for overcoming self-doubt.",
    href: "https://garyjohnbishop.com/",
    image:
      "https://c.media-amazon.com/images/I/81HuYGapupL._AC_UY327_FMwebp_QL65_.jpg",
    similarResources: [
      "the-subtle-art-of-not-giving-a-f*ck",
      "the-7-habits-of-highly-effective-people",
      "the-power-of-habit",
    ],
    category: "recommended-books-and-articles",
  },
  {
    id: "f*ck-feelings",
    title: "F*ck Feelings by Michael Bennett and Sarah Bennett",
    description:
      "A humorous and practical guide to mental health, this book offers a no-nonsense approach to dealing with life’s challenges and emotional struggles.",
    href: "https://www.amazon.com/Feelings-Practical-Managing-Impossible-Problems/dp/1476789991/ref=sr_1_1?crid=21JBBUC6CNTN&dib=eyJ2IjoiMSJ9.Luc9STzbzg9EgVyTVf90WKSxep52OQpmoC5Sg0Ye8UXWbCBTwqd5msXE1MbidIl6k9p-WgipiRGR6onv_b9qCQ.hkgbDFvDQBLIg2TrqQlge4JbcxtSQUDgdyySKHWUf-w&dib_tag=se&keywords=F*ck+Feelings+by+Michael+Bennett&qid=1746397150&s=books&sprefix=thinking%2C+fast+and+slow%2Cstripbooks%2C160&sr=1-1",
    image:
      "https://c.media-amazon.com/images/I/61hV0LP9ECL._AC_UY327_FMwebp_QL65_.jpg",
    similarResources: [
      "the-7-habits-of-highly-effective-people",
      "the-power-of-habit",
      "the-4-hour-workweek",
    ],
    category: "recommended-books-and-articles",
  },
  {
    id: "thinking-fast-and-slow",
    title: "Thinking, Fast and Slow by Daniel Kahneman",
    description:
      "A groundbreaking exploration of how we think, make decisions, and the biases that affect our judgment. Kahneman provides insights into the two systems of thought that drive our choices.",
    href: "https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555/ref=sr_1_1?crid=1BAAG4WE85MJY&dib=eyJ2IjoiMSJ9.ceqZU8DyU2py75144OBkfwy7oHpHu4i50hoJDUixuQGA5lbtNMFW5TpP3FPt5OI6MpDFn3rd8zgEFg-ThGWgKV0VIEngafyY14vuQE-jsaMoJbVm-e8sIKAsxTmz6uWK2Q0v6bCDOl6JHtBPu0GH5t2bOaUWF4Lgzkbc-KYsfS-wDv5_rgkq7DNx19YFqqZMvTsrbDND8vESYXFhGrGuTUmOd0QjtrllnZxCYfq8CU8.tlgJsVsWq5eP6BMQ72jya9ubC_fAK2HO4Jk1OAo2Rkg&dib_tag=se&keywords=Thinking%2C+Fast+and+Slow&qid=1746397137&s=books&sprefix=thinking%2C+fast+and+slow%2Cstripbooks%2C158&sr=1-1",
    image:
      "https://c.media-amazon.com/images/I/61fdrEuPJwL._AC_UY327_FMwebp_QL65_.jpg",
    similarResources: [
      "the-7-habits-of-highly-effective-people",
      "the-power-of-habit",
      "the-subtle-art-of-not-giving-a-f*ck",
    ],
    category: "recommended-books-and-articles",
  },
  {
    id: "the-7-habits-of-highly-effective-people",
    title: "The 7 Habits of Highly Effective People by Stephen R. Covey",
    description:
      "A classic in personal development, Covey’s book outlines a principle-centered approach to solving personal and professional problems.",
    href: "https://www.amazon.com/Habits-Highly-Effective-People-Powerful/dp/1982137274/ref=sr_1_1?crid=316BJHIU7VGP&dib=eyJ2IjoiMSJ9.IGH7OW2oMuVIJwBgX-Kg79XFov-JqXQuYVOgrwZp1qxcORg1MkIIzpDa5CImMcrft2jqLSMf00i-aKIhW1PILJeHYWttUKF11ZMr1iJy3JdHBW8-uz90hV2hRhz1DdoJKvgJaW_Yvruu3vLdHOLtcJwc9TWdSHi_fByeBbxwnBQ1WIkJROvikYW06ZtZtdinnejrTKlMlvQGUokO2SOABV1ltfC34X8vUj2m42831yo.-WztHsHJWRVE9aNcqc-G8TN_olEJwMzznMMECIfclMs&dib_tag=se&keywords=The+7+Habits+of+Highly+Effective&qid=1746397119&s=books&sprefix=the+7+habits+of+highly+effective%2Cstripbooks%2C165&sr=1-1",
    image:
      "https://c.media-amazon.com/images/I/71y1NKGcGKL._AC_UY327_FMwebp_QL65_.jpg",
    similarResources: [
      "the-4-hour-workweek",
      "the-subtle-art-of-not-giving-a-f*ck",
      "the-power-of-habit",
    ],
    category: "recommended-books-and-articles",
  },
  {
    id: "how-highlighly-effective-people-speak",
    title: "How Highly Effective People Speak by Peter Andrei",
    description:
      "A guide to effective communication, this book draws on the principles of Covey’s work and offers practical tips for improving interpersonal skills.",
    href: "https://www.amazon.com/How-Highly-Effective-People-Speak/dp/B089CSW3Y6/ref=sr_1_1?crid=14IR1P6JVEN3Q&dib=eyJ2IjoiMSJ9.12z_qrZhX-v21M0dw6BK5H0TMBotYsHd5PRHPdEKLyjd33Vus1v6jSxQ_zSE1Yu2iKUDOY6fkRrWeX2rVJGDGjaotzLWUrm23WEuK45lLBEHdrYlFoJyWOM9IoFB6yjzXq6Ol4w5CScQGf1nyCZ76c6Ks7Q7N-28CguhfsxWpEvKiB6pcVpaOuTkTVIaR42k05j0GrEAqvzicR0c-O6F7OuelwUNuNMO4PuG2f0v0qU.PgT8OqMePsNlgmhrzFo31KZcFCamoDbFTp7_JvAN0fc&dib_tag=se&keywords=How+Highly+Effective+People+Speak&qid=1746397104&s=books&sprefix=how+highly+effective+people+speak%2Cstripbooks%2C167&sr=1-1",
    image:
      "https://c.media-amazon.com/images/I/6133q2mrx7L._AC_UL480_FMwebp_QL65_.jpg",
    similarResources: [
      "the-7-habits-of-highly-effective-people",
      "the-subtle-art-of-not-giving-a-f*ck",
      "the-power-of-habit",
    ],
    category: "recommended-books-and-articles",
  },
  {
    id: "the-war-of-art",
    title: "The War of Art by Steven Pressfield",
    description:
      "A powerful exploration of the challenges of creativity and the resistance we face in pursuing our passions. Pressfield offers insights on overcoming self-doubt and procrastination.",
    href: "https://stevenpressfield.com/books/the-war-of-art/",
    image:
      "https://c.media-amazon.com/images/I/51lmpnWEuEL._AC_UY327_FMwebp_QL65_.jpg",
    similarResources: [
      "the-7-habits-of-highly-effective-people",
      "the-subtle-art-of-not-giving-a-f*ck",
      "the-power-of-habit",
    ],
    category: "recommended-books-and-articles",
  },
  {
    id: "turning-pro",
    title: "Turning Pro by Steven Pressfield",
    description:
      "A follow-up to The War of Art, this book focuses on the transition from amateur to professional in creative pursuits, offering insights on commitment and discipline.",
    href: "https://stevenpressfield.com/books/turning-pro/",
    image:
      "https://c.media-amazon.com/images/I/41m7L8FrIzL._UX300undefined_.jpg",
    similarResources: [
      "the-7-habits-of-highly-effective-people",
      "the-subtle-art-of-not-giving-a-f*ck",
      "the-power-of-habit",
    ],
    category: "recommended-books-and-articles",
  },
  {
    id: "do-the-work",
    title: "Do the Work by Steven Pressfield",
    description:
      "A practical guide to overcoming resistance and getting started on creative projects. Pressfield provides actionable steps for moving past self-doubt and procrastination.",
    href: "https://stevenpressfield.com/books/do-the-work/",
    image:
      "https://c.media-amazon.com/images/I/41S6LVVM5pL._UX300undefined_.jpg",
    similarResources: [
      "the-7-habits-of-highly-effective-people",
      "the-subtle-art-of-not-giving-a-f*ck",
      "the-power-of-habit",
    ],
    category: "recommended-books-and-articles",
  },
  {
    id: "the-artists-journey",
    title: "The Artist's Journey by Steven Pressfield",
    description:
      "An exploration of the creative process and the journey of the artist. Pressfield shares insights on finding purpose and meaning in creative work.",
    href: "https://stevenpressfield.com/books/the-artists-journey/",
    image:
      "https://c.media-amazon.com/images/I/41F5a4VEC8L._UX300undefined_.jpg",
    similarResources: [
      "the-7-habits-of-highly-effective-people",
      "the-subtle-art-of-not-giving-a-f*ck",
      "the-power-of-habit",
    ],
    category: "recommended-books-and-articles",
  },
  {
    id: "the-power-of-habit",
    title: "The Power of Habit by Charles Duhigg",
    description:
      "An exploration of the science behind habit formation and how understanding habits can lead to personal and professional transformation.",
    href: "https://www.amazon.com/Power-Habit-What-Life-Business/dp/081298160X/ref=sr_1_1?crid=1JOMAWD6VDMP8&dib=eyJ2IjoiMSJ9.0hHZS6RnjQpYhx8VcpQxY8h6w-P8Orl8iQfddTe-yvpVa7vio_yr6N4GD6Tmu3VCIKC8vfZVE7XeRqrT6mHSF5dOVQrHJbZX9qHmGN__Nam-QORJKxYW5ZeXB3F8X2-fpb9SWpBxVC6a2CyPVX0W9g-PQ6KzGanI-S5pnlqTQ1-w5z2YBc3iP2bYnc7LDKWLz-jsGPkUvlJqYnLbufHUMr4Xl1ROuAa3uFYwJ36bqlA.wjw-mwtaGpBnRJYiA_JBfgkA3RnZcyZabNAM8wpL3SA&dib_tag=se&keywords=The+Power+of+Habit&qid=1746397063&s=books&sprefix=the+power+of+habit%2Cstripbooks%2C154&sr=1-1",
    image:
      "https://c.media-amazon.com/images/I/71wm29Etl4L._AC_UY327_FMwebp_QL65_.jpg",
    similarResources: [
      "the-7-habits-of-highly-effective-people",
      "the-subtle-art-of-not-giving-a-f*ck",
      "the-4-hour-workweek",
    ],
    category: "recommended-books-and-articles",
  },
  {
    id: "being-the-red-flag",
    title: "Being the Red Flag by Dr. Nicole LePera",
    description:
      "Dr. Nicole LePera’s book focuses on self-healing and personal growth. She emphasizes the importance of self-awareness and taking responsibility for our own mental health.",
    href: "https://www.amazon.com/being-red-flag-UNAPOLOGETIC-CURIOSITY/dp/B0D493TKYD/ref=sr_1_1?crid=3IN53ELPC48CB&dib=eyJ2IjoiMSJ9.WeXFHW1l2s5fDtvNnyQRnlDk35bHPzO-3_A-dpLE2VtzIQ6FaGU9wms7n_ctFZ2ghwPlm4USU4z87lExkIdPZQ.pva212bBZVD5zd2-2in8C2jRh7TJjQO5i78eViiRGX4&dib_tag=se&keywords=Being+the+Red+Flag&qid=1746397053&s=books&sprefix=being+the+red+flag%2Cstripbooks%2C153&sr=1-1",
    image:
      "https://c.media-amazon.com/images/I/51qzM2XNPoL._AC_UY327_FMwebp_QL65_.jpg",
    similarResources: [
      "the-7-habits-of-highly-effective-people",
      "the-subtle-art-of-not-giving-a-f*ck",
      "the-power-of-habit",
    ],
    category: "recommended-books-and-articles",
  },
  {
    id: "how-to-win-friends-and-influence-people",
    title: "How to Win Friends and Influence People by Dale Carnegie",
    description:
      "A timeless classic on interpersonal skills, Carnegie’s book offers practical advice on how to connect with others and build meaningful relationships.",
    href: "https://www.amazon.com/How-Win-Friends-Influence-People/dp/0671027034/ref=sr_1_1?crid=3NENJJMBLD4KZ&dib=eyJ2IjoiMSJ9.EaX04KFI1Nc_7_-oH8VP-zr7aLss_KhDFxeJvIWMr40sT8-bF_m1ADvrjcWfNIZPN1D3G7Paqxf2Tw7ILFZh_istCxkg4GOIYeEVfnC1U0fWvFVjnrCuDN3b8x7reAHuBdhlzB5oFHWfSRcUUbzZ9aGDHV7PxNljXF1iUqJ3ezUajo5pnVoVMEWz5_CxvvHUL0tNyEXWvxGG6sQL5KyTK_xri0lSbDAuMS7Rw7IDtoM.v0dg7jbGn-LvFt_mbk4_XX0bXERmQ1t1Tg1C7orN0GU&dib_tag=se&keywords=How+to+Win+Friends+and+Influence+People&qid=1746397041&s=books&sprefix=the+4-hour+workweek%2Cstripbooks%2C144&sr=1-1",
    image:
      "https://c.media-amazon.com/images/I/71vK0WVQ4rL._AC_UY327_FMwebp_QL65_.jpg",
    similarResources: [
      "the-7-habits-of-highly-effective-people",
      "the-subtle-art-of-not-giving-a-f*ck",
      "the-power-of-habit",
    ],
    category: "recommended-books-and-articles",
  },
  {
    id: "the-4-hour-workweek",
    title: "The 4-Hour Workweek by Tim Ferriss",
    description:
      "A guide to lifestyle design, Ferriss challenges traditional work norms and offers strategies for achieving more in less time.",
    href: "https://www.amazon.com/4-Hour-Workweek-Escape-Live-Anywhere/dp/0307465357/ref=sr_1_1?crid=18443SP534EUM&dib=eyJ2IjoiMSJ9.cz8gK4FE_eKEXi-z7TBrexN608xgskwVXVpR1fYgZt3si5dNDIAd_0QguOWYyvSXB8xV68cVLt-orrPsO8jnO3V2PXdygx5UemIJA6OspkaCsK7NCeWdPUDhzJjtqJjQcjG15YvEYyATSqahlURFCGHFW1cZJxfnVBWOzfVefco2lrJxxnv6uUPjoScnqEOoTTddBUXeL5INWY5Fg2fyb6OvJ2XBZ_yHzwf0Fj0QYWQ.cJ390SlPQzZeL2EB9Wq3Be-m7hMFE4AvaAuFZigvq6A&dib_tag=se&keywords=The+4-Hour+Workweek&qid=1746397029&s=books&sprefix=the+4-hour+workweek%2Cstripbooks%2C150&sr=1-1",
    image:
      "https://c.media-amazon.com/images/I/71vO9Tbf4-L._AC_UY327_FMwebp_QL65_.jpg",
    similarResources: [
      "the-7-habits-of-highly-effective-people",
      "the-subtle-art-of-not-giving-a-f*ck",
      "the-power-of-habit",
    ],
    category: "recommended-books-and-articles",
  },
  {
    id: "grit",
    title: "Grit by Angela Duckworth",
    description:
      "Duckworth explores the power of passion and perseverance in achieving success, emphasizing that talent is not the only predictor of achievement.",
    href: "https://www.amazon.com/Grit-Passion-Perseverance-Angela-Duckworth/dp/1501111116/ref=sr_1_2?crid=P45K31KWD8K3&dib=eyJ2IjoiMSJ9.m527lz6HO1m68YuIwy7sG4qBfYPFmQSADlf-LkHHv2Lmetx3L65jEu9ZasnFhzf6OJKUD8JGTSDvKx8Gl4c3a1YRmjGLapqutfKtA7nWyzTd9rYBJ8gZwJ3anEwRQSKJ38IAJ02tswnVbWDmQNEiSh8oAJruQQnqlQhErkZYa6dZQYvaJpY6CSUBe9LRp9P3_dZBJcHTPrtTDy_IDnZF1Tejxglv4jpgCky1SpN54Y0ls3ESs-hRYmSgvwpvdmIpBa8W3MMM1BIwks-iiSVrZoujOhKaLtifXXLEypDzSPU.l0yPjIM046J1aDH7BI5kqK9dVigWralu2G7f0OOxF3o&dib_tag=se&keywords=Grit&qid=1746397018&s=books&sprefix=grit%2Cstripbooks%2C158&sr=1-2",
    image:
      "https://c.media-amazon.com/images/I/71uZIWQx+tL._AC_UY327_FMwebp_QL65_.jpg",
    similarResources: [
      "the-7-habits-of-highly-effective-people",
      "the-subtle-art-of-not-giving-a-f*ck",
      "the-power-of-habit",
    ],
    category: "recommended-books-and-articles",
  },
  {
    id: "the-creative-habit",
    title: "The Creative Habit by Twyla Tharp",
    description:
      "A guide to unlocking your creative potential, Tharp shares exercises and insights from her own creative journey as a renowned choreographer.",
    href: "https://www.amazon.com/Creative-Habit-Learn-Use-Life/dp/0743235274/ref=sr_1_1?crid=3TWDITZ9B3EQR&dib=eyJ2IjoiMSJ9.YtYR_WFp0CTHiVgoqYp7jF_fiFhl_pkIaQIpGS0YKqA-VoHpPWXvRGMF40ax08oUtU3Ekgpwwr7rfCWWZMuHUgSEia2hYYuddOueWGy-gibds0arrGvkEgS5Sex2YO6Mz1aLVQqIKCXIoryRrsSpjQ.fpfa-3vIxxJr6k7iiyHs0VDDJ8aeEDsvHkSLyL1LFQc&dib_tag=se&keywords=The+Creative+Habit+by+Twyla&qid=1746397008&s=books&sprefix=the+creative+act+a+way+of+being+by+rick+rubin%2Cstripbooks%2C153&sr=1-1",
    image:
      "https://c.media-amazon.com/images/I/619EWpDPrIL._AC_UY327_FMwebp_QL65_.jpg",
    similarResources: [
      "the-7-habits-of-highly-effective-people",
      "the-subtle-art-of-not-giving-a-f*ck",
      "the-power-of-habit",
    ],
    category: "recommended-books-and-articles",
  },
  {
    id: "the-creative-act-a-way-of-being",
    title: "The Creative Act: A Way of Being by Rick Rubin",
    description:
      "A deep dive into the creative process, Rubin shares his philosophy on creativity and how to cultivate a mindset that fosters artistic expression.",
    href: "https://www.amazon.com/Creative-Act-Way-Being/dp/0593652886/ref=sr_1_1?crid=SD5KVIFOYMTU&dib=eyJ2IjoiMSJ9.oDkaqLCaAugZG1GhFl5DvIn1k3-p2msQaRFrsyo9XdTQoy2FS8WNaSlnWndaxV3gAX78hd3AuFyHpaAJ88Cy7mEmjywzBqMV-DkFQZ8YvmLs5_coogf5Fhsi0MGo_7KUAIZ9bsLxqau7R59stQ9AudkoB33PPc_sZfARHDLc0BMD8Rbv5Aq-kyFh-inGjrv8h87pfC9RGOOt0_5mtkoNNrXeOmd96bgTCXechntCRTQ.x3DeeydzRzeExOodP2ELcBGqroo_7a0RSrU33o92vdA&dib_tag=se&keywords=The+Creative+Act%3A+A+Way+of+Being+by+Rick+Rubin&qid=1746396997&s=books&sprefix=the+artist%27s+way+by+julia+cameron%2Cstripbooks%2C176&sr=1-1",
    image:
      "https://c.media-amazon.com/images/I/918EkrTDaRL._AC_UY327_FMwebp_QL65_.jpg",
    similarResources: [
      "the-7-habits-of-highly-effective-people",
      "the-subtle-art-of-not-giving-a-f*ck",
      "the-power-of-habit",
    ],
    category: "recommended-books-and-articles",
  },
  {
    id: "the-artist-way",
    title: "The Artist's Way by Julia Cameron",
    description:
      "A 12-week program designed to help you recover your creativity and overcome creative blocks. Cameron provides exercises and insights to nurture your artistic self.",
    href: "https://www.amazon.com/Artists-Way-25th-Anniversary/dp/0143129252/ref=sr_1_1?crid=1KEIFVW3CX22D&dib=eyJ2IjoiMSJ9.j2bNWhJKONpFlTX6-ONeNXMvz_M8SdRQ-gEzLZk27SCzw12uLInHhi-Hc6DEJuUHwZL94WucEAPvU-p4geomLXrSFz3jtJ1LcWB_4fjKcEtLvjqb8_pxlFRiqjfV4xb0lP_ZL1yG2LcmmGBWf-28Ow93w6VZBUYzmhvjRqOpUYWgulTFCCVnbNTox2TM4YuGZBrNOOliezir2o-OJMzHTWCcK32c4iC8fLFbFBxfbXA.12DQ_hmjKNGpwvBBpfHsM20VORkEFmaHJaOET2Q4h64&dib_tag=se&keywords=The+Artist%27s+Way+by+Julia+Cameron&qid=1746396986&s=books&sprefix=the+artist%27s+way+by+julia+cameron%2Cstripbooks%2C468&sr=1-1",
    image:
      "https://c.media-amazon.com/images/I/41ZXeva+yZL._UX300undefined_.jpg",
    similarResources: [
      "the-7-habits-of-highly-effective-people",
      "the-subtle-art-of-not-giving-a-f*ck",
      "the-power-of-habit",
    ],
    category: "recommended-books-and-articles",
  },
  {
    id: "the-creative-curve",
    title: "The Creative Curve by Allen Gannett",
    description:
      "Gannett explores the science of creativity and how anyone can cultivate their creative potential through practice and understanding.",
    href: "https://www.amazon.com/Creative-Curve-Develop-Right-Idea/dp/1524761710/ref=sr_1_1?crid=3M290D0GS24QD&dib=eyJ2IjoiMSJ9.3Z74K4ZoCgb0adB1Rd3jCQ.KxmlqtS3RwiTe_5o_eocnpc7eFKDyPNO4X9qL-xTRt8&dib_tag=se&keywords=The+Creative+Curve+by+Allen+Gannett+View&qid=1746396920&s=books&sprefix=the+creative+curve+by+allen+gannett+view%2Cstripbooks%2C127&sr=1-1",
    image:
      "https://c.media-amazon.com/images/I/81BRx8510+L._AC_UY327_FMwebp_QL65_.jpg",
    similarResources: [
      "the-7-habits-of-highly-effective-people",
      "the-subtle-art-of-not-giving-a-f*ck",
      "the-power-of-habit",
    ],
    category: "recommended-books-and-articles",
  },

  // Category: "mindfulness-meditation"
  {
    id: "mindfulness-practices-for-daily-life",
    title: "Mindfulness Practices for Daily Life",
    description:
      "Learn simple and practical mindfulness techniques that can be incorporated into everyday life. These resources help you stay present, reduce stress, and improve overall well-being.",
    href: "https://www.meditationoasis.com/",
    image:
      "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVkaXRhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    similarResources: ["mindfulness-meditation", "specialized-resources"],
    category: "mindfulness-meditation",
  },
  {
    id: "mindfulness-for-beginners",
    title: "Mindfulness for Beginners",
    description:
      "A great starting point for anyone new to mindfulness. This resource provides beginner-friendly exercises, tools, and tips to help you cultivate mindfulness in your daily life.",
    href: "https://www.mindful.org/how-to-practice-mindfulness/",
    image:
      "https://plus.unsplash.com/premium_photo-1666946131242-b2c5cc73892a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVkaXRhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    similarResources: [
      "mindfulness-meditation",
      "mental-health-education-self-help",
    ],
    category: "mindfulness-meditation",
  },
  {
    id: "meditation-for-anxiety",
    title: "Meditation for Anxiety",
    description:
      "Explore meditation techniques specifically designed to help manage anxiety. These resources provide guided meditations and practices to help you find calm and clarity.",
    href: "https://www.youtube.com/playlist?list=PLCQACBUblTbXfTb8c_SlZ5kynRAPxwHFD",
    image:
      "https://images.unsplash.com/photo-1611800065908-233b597db552?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lZGl0YXRpb258ZW58MHx8MHx8fDA%3D",
    similarResources: [
      "mindfulness-meditation",
      "mental-health-education-self-help",
    ],
    category: "mindfulness-meditation",
  },
  {
    id: "mindful-eating",
    title: "Mindful Eating",
    description:
      "Mindful eating helps you become more aware of your relationship with food. Explore resources and practices that encourage eating with intention, mindfulness, and gratitude.",
    href: "https://nutritionsource.hsph.harvard.edu/mindful-eating/",
    image:
      "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWluZGZ1bCUyMEVhdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    similarResources: [
      "mindfulness-meditation",
      "mental-health-education-self-help",
    ],
    category: "mindfulness-meditation",
  },
  {
    id: "breathing-exercises-for-relaxation",
    title: "Breathing Exercises for Relaxation",
    description:
      "Simple breathing techniques to help you relax, reduce stress, and reset your mind. These practices are quick and effective, allowing you to find calm and focus in any situation.",
    href: "https://www.lung.org/lung-health-diseases/wellness/breathing-exercises",
    image:
      "https://images.unsplash.com/photo-1508583732154-e9ff899f8534?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG1lZGl0YXRpb258ZW58MHx8MHx8fDA%3D",
    similarResources: [
      "mindfulness-meditation",
      "mental-health-education-self-help",
    ],
    category: "mindfulness-meditation",
  },
  {
    id: "meditation-for-sleep",
    title: "Meditation for Sleep",
    description:
      "Use meditation to help relax your mind and body before bed. These resources offer meditation practices to help you fall asleep more easily and wake up feeling refreshed.",
    href: "https://www.youtube.com/watch?v=g0jfhRcXtLQ",
    image:
      "https://plus.unsplash.com/premium_photo-1661766053468-49d07ec86cc4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TWVkaXRhdGlvbiUyMGZvciUyMFNsZWVwfGVufDB8fDB8fHww",
    similarResources: [
      "mindfulness-meditation",
      "mental-health-education-self-help",
    ],
    category: "mindfulness-meditation",
  },

  // Category: "crisis-support-hotlines"
  {
    id: "national-suicide-prevention-lifeline",
    title: "National Suicide Prevention Lifeline",
    description:
      "The National Suicide Prevention Lifeline offers free, confidential support for people in distress. Available 24/7, they provide a safe space to talk and help navigate through a crisis.",
    href: "https://suicidepreventionlifeline.org/",
    image:
      "https://988lifeline.org/wp-content/uploads/2024/06/storytelling2-682x357.jpg",
    similarResources: ["crisis-support-hotlines", "mental-health-apps"],
    category: "crisis-support-hotlines",
  },
  {
    id: "text-helpline",
    title: "Text Helpline",
    description:
      "Text HELLO to 741741 to connect with a trained crisis counselor who can help with anxiety, depression, or any other mental health challenges you may be experiencing.",
    href: "https://www.crisistextline.org/",
    image:
      "https://www.crisistextline.org/wp-content/themes/heliotrope/patterns/images/people-illustration.svg",
    similarResources: [
      "crisis-support-hotlines",
      "mental-health-education-self-help",
    ],
    category: "crisis-support-hotlines",
  },
  {
    id: "domestic-violence-hotline",
    title: "National Domestic Violence Hotline",
    description:
      "The National Domestic Violence Hotline provides confidential support for those affected by domestic violence. They offer resources and assistance to help you take the next steps towards safety and healing.",
    href: "https://www.thehotline.org/",
    image:
      "https://www.thehotline.org/wp-content/themes/hotline-main/assets/images/logo-ndvh.svg",
    similarResources: ["crisis-support-hotlines", "specialized-resources"],
    category: "crisis-support-hotlines",
  },
  {
    id: "sexual-assault-hotline",
    title: "National Sexual Assault Hotline",
    description:
      "The National Sexual Assault Hotline provides confidential support for anyone affected by sexual assault. Trained staff are available to listen and provide guidance and resources.",
    href: "https://www.rainn.org/",
    image: "https://rainn.org/sites/all/themes/rainn/RAINN_Logo_NoTagline.jpg",
    similarResources: [
      "crisis-support-hotlines",
      "mental-health-education-self-help",
    ],
    category: "crisis-support-hotlines",
  },
  {
    id: "transgender-crisis-hotline",
    title: "Transgender Crisis Hotline",
    description:
      "The Transgender Crisis Hotline provides confidential support for transgender people who are experiencing a crisis. They offer understanding and guidance during difficult times.",
    href: "https://www.translifeline.org/",
    image:
      "https://images.unsplash.com/photo-1597586281133-b43c49844e4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8VHJhbnNnZW5kZXJ8ZW58MHx8MHx8fDA%3D",
    similarResources: ["crisis-support-hotlines", "specialized-resources"],
    category: "crisis-support-hotlines",
  },
  {
    id: "veterans-crisis-hotline",
    title: "Veterans Crisis Hotline",
    description:
      "The Veterans Crisis Hotline is dedicated to supporting veterans and their families. They provide confidential support 24/7, offering assistance during times of emotional or mental distress.",
    href: "https://www.veteranscrisisline.net/",
    image:
      "https://plus.unsplash.com/premium_photo-1682564166278-bc4bd2c9e32f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VmV0ZXJhbnN8ZW58MHx8MHx8fDA%3D",
    similarResources: [
      "crisis-support-hotlines",
      "mental-health-education-self-help",
    ],
    category: "crisis-support-hotlines",
  },

  // Category: "online-therapy-networks"
  {
    id: "7cups",
    title: "7 Cups",
    description:
      "7 Cups offers free, anonymous, and confidential online text chat with trained listeners, as well as affordable therapy services with licensed professionals. It’s a supportive community that provides emotional support 24/7.",
    href: "https://www.7cups.com/",
    image:
      "https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b25saW5lJTIwdGhlcmFweXxlbnwwfHwwfHx8MA%3D%3D",
    similarResources: ["online-therapy-networks", "crisis-support-hotlines"],
    category: "online-therapy-networks",
  },
  {
    id: "mdlive-therapy",
    title: "MDLive Therapy",
    description:
      "MDLive provides online therapy and psychiatry services via video or phone. With a variety of therapists available, MDLive helps users find the right fit for their needs in a secure, convenient setting.",
    href: "https://www.mdlive.com/",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b25saW5lJTIwdGhlcmFweXxlbnwwfHwwfHx8MA%3D%3D",
    similarResources: [
      "online-therapy-networks",
      "mental-health-education-self-help",
    ],
    category: "online-therapy-networks",
  },
  {
    id: "calmerry",
    title: "Calmerry",
    description:
      "Calmerry offers flexible online therapy with licensed therapists, accessible through chat, video, or phone calls. They tailor the experience to your schedule and offer affordable pricing plans.",
    href: "https://calmerry.com/",
    image:
      "https://images.unsplash.com/photo-1588873281272-14886ba1f737?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b25saW5lJTIwdGhlcmFweXxlbnwwfHwwfHx8MA%3D%3D",
    similarResources: [
      "online-therapy-networks",
      "mental-health-education-self-help",
    ],
    category: "online-therapy-networks",
  },
  {
    id: "rethink-therapy",
    title: "Rethink Therapy",
    description:
      "Rethink Therapy offers online therapy services with licensed professionals for individuals, couples, and families. The platform emphasizes building a strong therapeutic relationship in a virtual setting.",
    href: "https://www.rethinktherapy.com/",
    image:
      "https://plus.unsplash.com/premium_photo-1663047726632-4e56b16b75a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b25saW5lJTIwdGhlcmFweXxlbnwwfHwwfHx8MA%3D%3D",
    similarResources: [
      "online-therapy-networks",
      "mental-health-education-self-help",
    ],
    category: "online-therapy-networks",
  },
  {
    id: "amwell",
    title: "Amwell",
    description:
      "Amwell connects individuals with licensed therapists and psychiatrists for video or phone consultations. It’s a reliable platform for behavioral health support, offering flexible appointments and quick access to care.",
    href: "https://www.amwell.com/",
    image:
      "https://plus.unsplash.com/premium_photo-1733342492614-21ae0fe15efc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b25saW5lJTIwdGhlcmFweXxlbnwwfHwwfHx8MA%3D%3D",
    similarResources: [
      "online-therapy-networks",
      "mental-health-education-self-help",
    ],
    category: "online-therapy-networks",
  },
  {
    id: "therapistmatch",
    title: "Therapist Match",
    description:
      "Therapist Match connects individuals with licensed mental health professionals who offer virtual sessions via video, chat, or phone calls. The platform helps match users with therapists based on their specific needs.",
    href: "https://www.therapistmatch.com/",
    image:
      "https://plus.unsplash.com/premium_photo-1661281212609-f4681817d657?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG9ubGluZSUyMHRoZXJhcHl8ZW58MHx8MHx8fDA%3D",
    similarResources: [
      "online-therapy-networks",
      "mental-health-education-self-help",
    ],
    category: "online-therapy-networks",
  },
  {
    id: "online-therapy-com",
    title: "Online Therapy",
    description:
      "Online Therapy offers a comprehensive online mental health service where users can communicate with licensed therapists through text, video, or chat. It focuses on Cognitive Behavioral Therapy (CBT) to help users manage anxiety, depression, and other mental health challenges.",
    href: "https://www.online-therapy.com/",
    image:
      "https://plus.unsplash.com/premium_photo-1661514083597-0d069eaa740b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG9ubGluZSUyMHRoZXJhcHl8ZW58MHx8MHx8fDA%3D",
    similarResources: [
      "online-therapy-networks",
      "mental-health-education-self-help",
    ],
    category: "online-therapy-networks",
  },
  {
    id: "regain-therapy",
    title: "Regain Therapy",
    description:
      "Regain Therapy offers online couples therapy with licensed therapists who specialize in relationship and marital issues. Sessions are available via text, video, or phone consultations, providing flexible support for couples.",
    href: "https://www.regain.us/",
    image:
      "https://plus.unsplash.com/premium_photo-1723575734631-af8ea9186d02?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG9ubGluZSUyMHRoZXJhcHl8ZW58MHx8MHx8fDA%3D",
    similarResources: [
      "online-therapy-networks",
      "mental-health-education-self-help",
    ],
    category: "online-therapy-networks",
  },

  // Category: "research-articles"
  {
    id: "stress-brain-impact",
    title: "The Effects of Chronic Stress on the Brain",
    description:
      "This article explores how chronic stress can reshape the brain's structure—especially in the hippocampus, prefrontal cortex, and amygdala—leading to cognitive decline and emotional imbalance.",
    href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5579396/",
    image:
      "https://plus.unsplash.com/premium_photo-1731326957305-3db057114a5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hyb25pYyUyMFN0cmVzc3xlbnwwfHwwfHx8MA%3D%3D",
    similarResources: ["mental-health-education-self-help"],
    category: "research-articles",
  },
  {
    id: "gut-brain-axis",
    title: "Gut-Brain Connection: How Microbiome Affects Mental Health",
    description:
      "Dive into emerging research on the gut-brain axis and how your microbiome may influence mood, anxiety, and even depression—shaping the future of mental health treatment.",
    href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6469458/",
    image:
      "https://plus.unsplash.com/premium_photo-1674641195838-59ad13f8cc55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWljcm9iaW9tZXxlbnwwfHwwfHx8MA%3D%3D",
    similarResources: ["mental-health-education-self-help"],
    category: "research-articles",
  },
  {
    id: "social-media-mental-health",
    title: "The Psychological Impact of Social Media on Adolescents",
    description:
      "A look at the complex effects of social media on young people, including links to anxiety, depression, and self-esteem, with guidance on digital wellness strategies.",
    href: "https://www.apa.org/news/press/releases/stress/2023/social-media-use-teens",
    image:
      "https://images.unsplash.com/photo-1579869847557-1f67382cc158?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U29jaWFsJTIwTWVkaWF8ZW58MHx8MHx8fDA%3D",
    similarResources: [
      "mental-health-education-self-help",
      "crisis-support-hotlines",
    ],
    category: "research-articles",
  },
  {
    id: "ptsd-therapy-comparison",
    title: "Comparing Treatments for PTSD: EMDR, CPT, and PE",
    description:
      "This peer-reviewed article breaks down the most effective treatments for PTSD, comparing techniques like EMDR, Prolonged Exposure, and Cognitive Processing Therapy.",
    href: "https://www.ptsd.va.gov/professional/treat/txessentials/overview_therapy.asp",
    image:
      "https://plus.unsplash.com/premium_photo-1661301178605-21949cf82eb9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UFRTRHxlbnwwfHwwfHx8MA%3D%3D",
    similarResources: ["online-therapy-networks"],
    category: "research-articles",
  },
  {
    id: "inflammation-depression",
    title: "The Role of Inflammation in Depression",
    description:
      "Explore the growing body of research linking systemic inflammation to depressive symptoms, offering new insights into biomarkers and targeted interventions.",
    href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6116040/",
    image:
      "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RGVwcmVzc2lvbnxlbnwwfHwwfHx8MA%3D%3D",
    similarResources: ["mental-health-education-self-help"],
    category: "research-articles",
  },
  {
    id: "sleep-emotional-health",
    title: "Sleep and Emotional Regulation: What the Science Says",
    description:
      "This article reviews how sleep quality and duration directly affect emotional control, stress responses, and overall psychological resilience.",
    href: "https://www.sleepfoundation.org/mental-health",
    image:
      "https://images.unsplash.com/photo-1531353826977-0941b4779a1c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2xlZXB8ZW58MHx8MHx8fDA%3D",
    similarResources: ["mental-health-education-self-help"],
    category: "research-articles",
  },
  {
    id: "psychedelics-research",
    title: "Therapeutic Use of Psychedelics in Mental Health",
    description:
      "Explore groundbreaking studies on how substances like psilocybin and MDMA are being used to treat depression, PTSD, and addiction under professional supervision.",
    href: "https://www.nature.com/articles/s41591-022-01807-3",
    image:
      "https://images.unsplash.com/photo-1600928691816-73fd9addad04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UHN5Y2hlZGVsaWNzfGVufDB8fDB8fHww",
    similarResources: [
      "mental-health-education-self-help",
      "online-therapy-networks",
    ],
    category: "research-articles",
  },
  {
    id: "mental-health-apps-efficacy",
    title: "Are Mental Health Apps Really Effective?",
    description:
      "A critical review of evidence supporting mental health apps and how features like CBT modules and mindfulness tools influence user outcomes.",
    href: "https://www.sciencedirect.com/science/article/pii/S2589790X21000023",
    image:
      "https://images.unsplash.com/photo-1635373390272-9855a0aea13d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWVudGFsJTIwSGVhbHRoJTIwQXBwc3xlbnwwfHwwfHx8MA%3D%3D",
    similarResources: ["mental-health-education-self-help"],
    category: "research-articles",
  },
];

export const resource: Resource[] = [
  {
    id: "wellness-library",
    title: "Health Articles",
    href: "/wellness-library/health-articles",
    description:
      "Dive into our comprehensive library of health articles covering everything from balanced nutrition and gut health to stress management and sleep optimization. Each piece is researched and referenced, offering practical tips, meal plans, and expert interviews to help you implement lasting lifestyle changes.",
    subtitle:
      "Your go-to resource for evidence-based wellness knowledge and lifestyle insights.",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
  },
  {
    id: "wellness-library/digital-resources",
    title: "Events & Workshops for Mental Health",
    href: "/wellness-library/events-and-workshops",
    description:
      "Participate in expert-led live webinars, interactive group workshops, and immersive virtual retreats designed to boost resilience and emotional well-being. Topics include mindfulness techniques, nervous system regulation, trauma-informed care, and community support exercises—complete with downloadable workbooks and follow-up materials.",
    subtitle:
      "Interactive workshops and expert-led sessions to support your mental well-being.",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
  },
  {
    id: "wellness-library/digital-resources/self-assessments",
    title: "Self Assessments",
    href: "/wellness-library/digital-resources/self-assessments",
    description:
      "Evaluate your current health status with our suite of digital self-assessments: stress resilience quizzes, sleep quality trackers, hormonal balance checklists, and cognitive performance tests. Receive instant, personalized feedback and recommendations to guide your next steps.",
    subtitle:
      "Gain clarity through self-guided wellness evaluations and personalized insights.",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
  },
];

export const featuredResource: Resource[] = [
  {
    id: "wellness-library/digital-resources/mental-health-toolkit",
    title: "Mental Health Toolkit",
    href: "/wellness-library/digital-resources/mental-health-toolkit",
    description:
      "Access a curated toolkit of guided meditations, grounding exercises, journaling prompts, and cognitive reframing worksheets—developed by licensed therapists and neuropsychologists. Use these tools daily to reduce anxiety, improve focus, and strengthen emotional regulation.",
    subtitle:
      "Practical tools to support your mental clarity, emotional balance, and stress resilience.",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
  },
  // {
  //   id: "wellness-library/digital-resources/wellness-dictionary",
  //   title: "Wellness Dictionary",
  //   href: "/wellness-library/digital-resources/wellness-dictionary",
  //   description:
  //     "Navigate the complex world of multidimensional health with our Wellness Dictionary: over 500 definitions of terms, acronyms, and methodologies—from adaptogens and biofeedback to circadian rhythm and functional foods. Each entry includes clear explanations, usage examples, and links to deeper learning.",
  //   subtitle:
  //     "Demystifying the language of wellness with clear, concise definitions you can trust.",
  //   image:
  //     "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
  // },
  {
    id: "wellness-library/digital-resources",
    title: "Digital Resources for Mental Health",
    href: "/wellness-library/digital-resources",
    description:
      "Access a comprehensive set of tools designed to support your mental health journey. Our Mental Health Toolkit includes guided meditations, grounding exercises, cognitive reframing worksheets, and more—developed by licensed therapists to help you manage stress, improve focus, and build emotional resilience.",
    subtitle:
      "Practical tools for emotional well-being and mental clarity, designed to help you thrive.",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
  },
];
