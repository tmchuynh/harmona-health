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
      "Free access to hundreds of clinical and academic mental health books and publications.",
    href: "https://www.ncbi.nlm.nih.gov/books/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["open-library", "who", "project-gutenberg"],
    category: "clinical-academic-texts",
  },
  {
    id: "who",
    title: "World Health Organization (WHO) Publications",
    description:
      "Downloadable global mental health reports, guides, and research.",
    href: "https://www.who.int/publications",
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
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["calmApp", "moodpathApp", "sanvelloApp"],
    category: "mental-health-apps",
  },
  {
    id: "calmApp",
    title: "Calm",
    description:
      "An award-winning app for meditation, sleep, and relaxation with soothing music, sleep stories, and guided sessions.",
    href: "https://www.calm.com/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["headspaceApp", "breetheApp", "sanvelloApp"],
    category: "mental-health-apps",
  },
  {
    id: "moodpathApp",
    title: "MindDoc (formerly Moodpath)",
    description:
      "A mood tracking and mental health assessment app co-developed by psychologists to help you better understand emotional patterns.",
    href: "https://minddoc.com/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["sanvelloApp", "youperApp", "headspaceApp"],
    category: "mental-health-apps",
  },
  {
    id: "sanvelloApp",
    title: "Sanvello",
    description:
      "Combines CBT-based tools, mood tracking, guided journeys, and peer support to manage stress, anxiety, and depression.",
    href: "https://www.sanvello.com/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["moodpathApp", "calmApp", "youperApp"],
    category: "mental-health-apps",
  },
  {
    id: "youperApp",
    title: "Youper",
    description:
      "An AI-powered emotional health assistant that uses evidence-based therapeutic techniques to support your mental well-being.",
    href: "https://www.youper.ai/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["sanvelloApp", "moodpathApp", "headspaceApp"],
    category: "mental-health-apps",
  },
  {
    id: "mindfulness-app",
    title: "Mindfulness App",
    description:
      "A meditation app that offers guided sessions, reminders, and a community for mindfulness practice.",
    href: "https://www.meditationapp.com/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["headspaceApp", "calmApp", "sanvelloApp"],
    category: "mental-health-apps",
  },
  {
    id: "simpleHabitApp",
    title: "Simple Habit",
    description:
      "A meditation app designed to help you build a daily mindfulness practice with short, guided sessions.",
    href: "https://www.simplehabit.com/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["headspaceApp", "calmApp", "sanvelloApp"],
    category: "mental-health-apps",
  },
  {
    id: "smiling-mind",
    title: "Smiling Mind",
    description:
      "A mindfulness app designed for children and adolescents, offering programs to improve mental well-being.",
    href: "https://www.smilingmind.com.au/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["headspaceApp", "calmApp", "sanvelloApp"],
    category: "mental-health-apps",
  },
  {
    id: "waking-up",
    title: "Waking Up",
    description:
      "A meditation app that combines mindfulness with philosophy and psychology to enhance self-awareness.",
    href: "https://www.wakingup.com/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["headspaceApp", "calmApp", "sanvelloApp"],
    category: "mental-health-apps",
  },
  {
    id: "breathe",
    title: "Breathe",
    description:
      "A meditation app that offers guided sessions, breathing exercises, and mindfulness practices.",
    href: "https://www.breathe.com/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["headspaceApp", "calmApp", "sanvelloApp"],
    category: "mental-health-apps",
  },

  // Category: "Podcasts"
  {
    id: "the-mental-illness-happy-hour",
    title: "The Mental Illness Happy Hour",
    description:
      "Hosted by comedian Paul Gilmartin, this podcast offers honest, raw, and often humorous conversations about mental health and the invisible battles many people face.",
    href: "https://mentalpod.com/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["therapy-chat", "unlocking-us", "ten-percent-happier"],
    category: "podcasts",
  },
  {
    id: "therapy-chat",
    title: "Therapy Chat",
    description:
      "Hosted by trauma therapist Laura Reagan, this podcast dives into topics like mindfulness, self-compassion, attachment, and emotional healing.",
    href: "https://www.therapychatpodcast.com/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [
      "the-mental-illness-happy-hour",
      "trauma-recovery-university",
      "unf*ck-your-brain",
    ],
    category: "podcasts",
  },
  {
    id: "the-happiness-lab-with-dr-laura-schlitz",
    title: "The Happiness Lab with Dr. Laura Schlitz",
    description:
      "Dr. Laura Schlitz dives deep into the science of happiness and provides practical tips on how to live a more fulfilling life. Explore evidence-based strategies for improving mental health and well-being.",
    href: "https://www.happinesslab.fm/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["podcasts", "mental-health-education-self-help"],
    category: "podcasts",
  },
  {
    id: "therapist-unfiltered",
    title: "Therapist Unfiltered",
    description:
      "Therapist Unfiltered is a candid conversation about mental health, relationships, and personal growth. Each episode features a therapist discussing issues relevant to today’s society and offering advice for navigating life’s challenges.",
    href: "https://www.therapistunfiltered.com/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["podcasts", "mental-health-education-self-help"],
    category: "podcasts",
  },
  {
    id: "the-mindful-kind",
    title: "The Mindful Kind",
    description:
      "Hosted by Rachael Kable, The Mindful Kind explores mindfulness, meditation, and self-compassion. It’s a great resource for anyone looking to develop a mindful approach to their mental health and well-being.",
    href: "https://www.rachaelkable.com/the-mindful-kind-podcast",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["podcasts", "mindfulness-meditation"],
    category: "podcasts",
  },
  {
    id: "mental-health-foundations",
    title: "Mental Health Foundations",
    description:
      "Mental Health Foundations offers listeners expert advice on how to build a solid foundation for emotional and mental well-being. Topics include stress management, self-care, and practical tools to maintain mental health.",
    href: "https://www.mentalhealthfoundations.com/podcast",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["podcasts", "mental-health-education-self-help"],
    category: "podcasts",
  },
  {
    id: "unF*ck Your Brain",
    title: "UnF*ck Your Brain",
    description:
      "UnF*ck Your Brain with Kara Loewentheil combines feminism, mental health, and self-empowerment in a unique and impactful way. It’s a podcast about how to rewire your brain for confidence, peace, and self-love.",
    href: "https://www.unfuckyourbrain.com/podcast/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["podcasts", "mental-health-education-self-help"],
    category: "podcasts",
  },
  {
    id: "the-anxiety-coach",
    title: "The Anxiety Coach",
    description:
      "The Anxiety Coach podcast offers support for anyone who struggles with anxiety. It includes tips, strategies, and advice on how to cope with anxiety in daily life and strategies for managing it long term.",
    href: "https://www.theanxietycoach.com/podcast",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["podcasts", "mental-health-education-self-help"],
    category: "podcasts",
  },
  {
    id: "unlocking-us",
    title: "Unlocking Us with Brené Brown",
    description:
      "Brené Brown explores what it means to be human, offering insights on vulnerability, courage, connection, and the messy parts of life.",
    href: "https://brenebrown.com/podcast-show/unlocking-us/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
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
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [
      "unlocking-us",
      "ten-percent-happier",
      "unf*ck-your-brain",
    ],
    category: "podcasts",
  },
  {
    id: "ten-percent-happier",
    title: "Ten Percent Happier",
    description:
      "Hosted by Dan Harris, this podcast brings practical mental health tools rooted in mindfulness, meditation, and psychology from leading experts.",
    href: "https://www.tenpercent.com/podcast",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["headspaceApp", "therapy-chat", "unlocking-us"],
    category: "podcasts",
  },
  {
    id: "unfck-your-brain",
    title: "UnF*ck Your Brain",
    description:
      "Hosted by feminist mindset coach Kara Loewentheil, this podcast explores thought work, anxiety, perfectionism, and reclaiming agency over your mental life.",
    href: "https://unfuckyourbrain.com/podcast/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [
      "we-can-do-hard-things",
      "therapy-chat",
      "the-mental-illness-happy-hour",
    ],
    category: "podcasts",
  },

  // Category: "recommended-books-and-articles"
  {
    id: "the-body-keeps-the-score",
    title: "The Body Keeps the Score by Bessel van der Kolk",
    description:
      "A foundational text in trauma psychology, this book explains how trauma reshapes both the body and brain—and how innovative therapies offer paths to healing.",
    href: "https://www.penguinrandomhouse.com/books/227408/the-body-keeps-the-score-by-bessel-van-der-kolk-md/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [
      "what-happened-to-you",
      "trauma-and-recovery",
      "brainstorm",
    ],
    category: "recommended-books-and-articles",
  },
  {
    id: "what-happened-to-you",
    title: "What Happened to You? by Oprah Winfrey & Dr. Bruce Perry",
    description:
      "This powerful book reframes mental health conversations from 'What’s wrong with you?' to 'What happened to you?', combining personal stories with neuroscience.",
    href: "https://www.oprahdaily.com/life/a36055303/what-happened-to-you-oprah-book-summary/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [
      "the-body-keeps-the-score",
      "the-deepest-well",
      "it-didnt-start-with-you",
    ],
    category: "recommended-books-and-articles",
  },
  {
    id: "the-deepest-well",
    title: "The Deepest Well by Dr. Nadine Burke Harris",
    description:
      "This groundbreaking book explores the impact of childhood adversity on long-term health and introduces the science of ACEs (Adverse Childhood Experiences).",
    href: "https://www.nadineburkeharris.com/deepest-well/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [
      "what-happened-to-you",
      "the-body-keeps-the-score",
      "childrens-young-adult-mental-health-books",
    ],
    category: "recommended-books-and-articles",
  },
  {
    id: "it-didnt-start-with-you",
    title: "It Didn't Start With You by Mark Wolynn",
    description:
      "An accessible introduction to inherited family trauma and how unresolved emotional issues may be passed down through generations.",
    href: "https://markwolynn.com/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [
      "the-body-keeps-the-score",
      "the-deepest-well",
      "the-drama-of-the-gifted-child",
    ],
    category: "recommended-books-and-articles",
  },
  {
    id: "article-nyt-mental-health-crisis-teens",
    title: "The Inner Pandemic: Mental Health Crisis Among American Teens",
    description:
      "A powerful New York Times feature article examining the rising rates of anxiety, depression, and suicidal ideation among teens—and the systems failing to meet their needs.",
    href: "https://www.nytimes.com/2022/12/12/us/teen-mental-health-crisis.html",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [
      "what-happened-to-you",
      "childrens-young-adult-mental-health-books",
      "the-deepest-well",
    ],
    category: "recommended-books-and-articles",
  },
  {
    id: "feeling-good",
    title: "Feeling Good by David D. Burns",
    description: "CBT for depression.",
    href: "https://www.amazon.com",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["the-body-keeps-the-score", "it-didnt-start-with-you"],
    category: "recommended-books-and-articles",
  },
  {
    id: "the-drama-of-the-gifted-child",
    title: "The Drama of the Gifted Child by Alice Miller",
    description:
      "A classic that explores how childhood trauma—especially emotional neglect—can shape adult psychology and self-perception.",
    href: "https://www.harpercollins.com/products/the-drama-of-the-gifted-child-revised-edition-alice-miller",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [
      "it-didnt-start-with-you",
      "memoirs-lived-experience-narratives",
      "the-body-keeps-the-score",
    ],
    category: "recommended-books-and-articles",
  },
  {
    id: "dare-to-lead",
    title: "Dare to Lead by Brené Brown",
    description:
      "A powerful guide on how vulnerability, courage, and empathy are essential traits of strong, effective leadership.",
    href: "https://brenebrown.com/book/dare-to-lead/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [
      "grit",
      "atomic-habits",
      "the-7-habits-of-highly-effective-people",
    ],
    category: "recommended-books-and-articles",
  },
  {
    id: "grit",
    title: "Grit by Angela Duckworth",
    description:
      "This book explores how passion and perseverance—not talent alone—are the keys to long-term success.",
    href: "https://angeladuckworth.com/grit-book/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["dare-to-lead", "drive", "deep-work"],
    category: "recommended-books-and-articles",
  },
  {
    id: "atomic-habits",
    title: "Atomic Habits by James Clear",
    description:
      "One of the most actionable guides on how to build good habits, break bad ones, and master the tiny behaviors that lead to big change.",
    href: "https://jamesclear.com/atomic-habits",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
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
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
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
    href: "https://www.calnewport.com/books/deep-work/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["atomic-habits", "digital-minimalism", "principles"],
    category: "recommended-books-and-articles",
  },
  {
    id: "the-7-habits-of-highly-effective-people",
    title: "The 7 Habits of Highly Effective People by Stephen R. Covey",
    description:
      "A perennial self-help classic that introduces a principle-centered approach for solving personal and professional problems.",
    href: "https://www.franklincovey.com/the-7-habits.html",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["atomic-habits", "principles", "grit"],
    category: "recommended-books-and-articles",
  },
  {
    id: "the-power-of-habit",
    title: "The Power of Habit by Charles Duhigg",
    description:
      "Duhigg explores the science of habits, explaining how they're formed—and how they can be changed.",
    href: "https://charlesduhigg.com/the-power-of-habit/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["atomic-habits", "deep-work", "grit"],
    category: "recommended-books-and-articles",
  },
  {
    id: "thinking-fast-and-slow",
    title: "Thinking, Fast and Slow by Daniel Kahneman",
    description:
      "A groundbreaking exploration of how our minds make decisions, combining psychology and behavioral economics.",
    href: "https://us.macmillan.com/books/9780374533557/thinkingfastandslow",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: [
      "principles",
      "the-7-habits-of-highly-effective-people",
      "grit",
    ],
    category: "recommended-books-and-articles",
  },
  {
    id: "digital-minimalism",
    title: "Digital Minimalism by Cal Newport",
    description:
      "A practical guide to reclaiming focus and intentionality in a hyperconnected world.",
    href: "https://www.calnewport.com/books/digital-minimalism/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["deep-work", "atomic-habits", "the-power-of-habit"],
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
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
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
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
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
      "Specially designed meditation techniques to help manage and reduce anxiety. These resources provide tools to calm the mind and restore emotional balance during moments of stress or overwhelm.",
    href: "https://www.calmsage.com/anxiety/meditation-for-anxiety/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
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
    href: "https://www.mindfuleating.org/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
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
    href: "https://www.psychologytoday.com/us/basics/breathing-exercises",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
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
    href: "https://www.headspace.com/sleep/meditation-for-sleep",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
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
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
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
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
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
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["crisis-support-hotlines", "specialized-resources"],
    category: "crisis-support-hotlines",
  },
  {
    id: "textline-for-domestic-violence",
    title: "Textline for Domestic Violence",
    description:
      "A text-based support service for those experiencing domestic violence. Text ‘START’ to 88788 for confidential help.",
    href: "https://www.thehotline.org/get-help/text-our-crisis-line/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
    similarResources: ["crisis-support-hotlines", "specialized-resources"],
    category: "crisis-support-hotlines",
  },
  {
    id: "sexual-assault-hotline",
    title: "National Sexual Assault Hotline",
    description:
      "The National Sexual Assault Hotline provides confidential support for anyone affected by sexual assault. Trained staff are available to listen and provide guidance and resources.",
    href: "https://www.rainn.org/",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
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
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
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
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
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
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
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
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
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
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
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
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
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
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
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
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
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
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
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
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
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
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
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
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
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
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
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
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
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
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
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
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
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
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
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
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
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
  {
    id: "wellness-library/digital-resources/wellness-dictionary",
    title: "Wellness Dictionary",
    href: "/wellness-library/digital-resources/wellness-dictionary",
    description:
      "Navigate the complex world of holistic health with our Wellness Dictionary: over 500 definitions of terms, acronyms, and methodologies—from adaptogens and biofeedback to circadian rhythm and functional foods. Each entry includes clear explanations, usage examples, and links to deeper learning.",
    subtitle:
      "Demystifying the language of wellness with clear, concise definitions you can trust.",
    image:
      "https://www.research.colostate.edu/healthyagingcenter/wp-content/uploads/sites/32/2024/04/mood-7529903_1280-1024x682.png",
  },
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
