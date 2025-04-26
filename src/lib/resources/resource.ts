import { Resource } from "../interfaces&types/resources";

export const mentalHealthResources: Resource[] = [
  // Category: "childrens-young-adult-mental-health-books"
  {
    id: "the-color-monster",
    title: "The Color Monster by Anna Llenas",
    description: "Children’s book on emotional awareness.",
    href: "https://www.amazon.com",
    image: "",
    similarResources: [],
    category: "childrens-young-adult-mental-health-books",
  },
  {
    id: "biglifejournal",
    title: "Big Life Journal",
    description:
      "Offers growth mindset and resilience journals, printables, and activities for children and teens to build emotional strength and self-awareness.",
    href: "https://biglifejournal.com/",
    image: "https://biglifejournal.com/cdn/shop/files/logo_250x.png",
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
      "https://gozen.com/wp-content/uploads/2015/07/cropped-gozen-1-270x270.png",
    similarResources: ["biglifejournal", "copingSkillsForKids", "mindup"],
    category: "childrens-young-adult-mental-health-books",
  },
  {
    id: "copingSkillsForKids",
    title: "Coping Skills for Kids",
    description:
      "Practical tools, books, and worksheets designed to help children manage anxiety, anger, and emotional regulation.",
    href: "https://copingskillsforkids.com/",
    image: "https://copingskillsforkids.com/images/coping-skills-logo.png",
    similarResources: ["gozen", "biglifejournal", "therapistAid"],
    category: "childrens-young-adult-mental-health-books",
  },
  {
    id: "mindup",
    title: "MindUP",
    description:
      "A research-based curriculum that teaches children about the brain, mindfulness, and emotional self-regulation through books and classroom programs.",
    href: "https://mindup.org/",
    image: "https://mindup.org/wp-content/uploads/2019/08/mindup-logo.png",
    similarResources: ["biglifejournal", "gozen", "childmindInstitute"],
    category: "childrens-young-adult-mental-health-books",
  },
  {
    id: "childmindInstitute",
    title: "Child Mind Institute Book Lists",
    description:
      "Carefully curated lists of books for kids and teens dealing with anxiety, depression, ADHD, and trauma.",
    href: "https://childmind.org/topics/book-lists/",
    image: "https://childmind.org/wp-content/uploads/2016/11/CMI_logo.svg",
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
      "https://www.readbrightly.com/wp-content/themes/brightly/img/logo-brightly.svg",
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
      "https://www.apa.org/pubs/magination/images/magination-press-logo.svg",
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
    image: "/images/resource-placeholder.png",
    similarResources: ["open-library", "who", "project-gutenberg"],
    category: "clinical-academic-texts",
  },
  {
    id: "who",
    title: "World Health Organization (WHO) Publications",
    description:
      "Downloadable global mental health reports, guides, and research.",
    href: "https://www.who.int/publications",
    image: "/images/resource-placeholder.png",
    similarResources: ["nlm", "cci", "open-library"],
    category: "clinical-academic-texts",
  },
  {
    id: "proquest-ebook-central",
    title: "ProQuest eBook Central",
    description:
      "University or institutional access to eBooks on mental health.",
    href: "https://ebookcentral.proquest.com",
    image: "",
    similarResources: [],
    category: "clinical-academic-texts",
  },
  {
    id: "jstor-project-muse",
    title: "JSTOR & Project MUSE",
    description: "Access to academic texts on mental health research.",
    href: "https://www.jstor.org",
    image: "",
    similarResources: [],
    category: "clinical-academic-texts",
  },
  {
    id: "oxford-academic",
    title: "Oxford Academic / SpringerLink",
    description:
      "For psychology and psychiatry texts, typically requiring university login.",
    href: "https://academic.oup.com",
    image: "",
    similarResources: [],
    category: "clinical-academic-texts",
  },
  {
    id: "the-diagnostic-and-statistical-manual-of-mental-disorders-dsm-5",
    title: "The Diagnostic and Statistical Manual of Mental Disorders (DSM-5)",
    description:
      "The DSM-5 is the standard classification of mental disorders used by clinicians and researchers. It provides a comprehensive framework for diagnosing mental health conditions based on clinical research and established diagnostic criteria.",
    href: "https://www.psychiatry.org/psychiatrists/practice/dsm",
    image: "https://www.psychiatry.org/getattachment/DSM-5/DSM-5-Logo-2019.jpg",
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
      "https://images-na.ssl-images-amazon.com/images/I/41EXMbnjtsL._SX404_BO1,204,203,200_.jpg",
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
      "https://images-na.ssl-images-amazon.com/images/I/51H4aTp7DrL._SX347_BO1,204,203,200_.jpg",
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
      "https://images-na.ssl-images-amazon.com/images/I/51ie3fg9wML._SX331_BO1,204,203,200_.jpg",
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
      "https://images-na.ssl-images-amazon.com/images/I/41sBcnseJXL._SX333_BO1,204,203,200_.jpg",
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
      "https://images.wiley.com/WileyCDA/Images/BookCover-9781118453706.jpg",
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
    image: "",
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
      "https://cdn.themighty.com/wp-content/uploads/2017/08/mighty-logo-1.png",
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
      "https://oc87recoverydiaries.org/wp-content/uploads/2021/02/oc87-header-logo.png",
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
      "https://www.madinamerica.com/wp-content/themes/miatheme/images/logo.png",
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
    image: "https://www.mind.org.uk/media-a4kde4sh/mind-logo-blue.png",
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
      "https://www.nami.org/NAMI/media/NAMI-Media/Brand%20Refresh%20Assets/NAMI-Logo-Color.jpg",
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
      "https://images-na.ssl-images-amazon.com/images/I/41MIq5BmnkL._SX327_BO1,204,203,200_.jpg",
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
      "https://images-na.ssl-images-amazon.com/images/I/51Vw45OXmHL._SX324_BO1,204,203,200_.jpg",
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
      "https://images-na.ssl-images-amazon.com/images/I/41S94TzY1pL._SX330_BO1,204,203,200_.jpg",
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
      "https://images-na.ssl-images-amazon.com/images/I/51XBnbvR2cL._SX331_BO1,204,203,200_.jpg",
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
      "https://images-na.ssl-images-amazon.com/images/I/41SE4gBoauL._SX332_BO1,204,203,200_.jpg",
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
      "https://images-na.ssl-images-amazon.com/images/I/41NK0lFbcZL._SX323_BO1,204,203,200_.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Psychology_Today_logo.svg/2560px-Psychology_Today_logo.svg.png",
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
    image: "/images/resource-placeholder.png",
    similarResources: ["bookshare", "who"],
    category: "mental-health-education-self-help",
  },
  {
    id: "mentalHealthAmericaTools",
    title: "Mental Health America – Tools & Resources",
    description:
      "Offers free toolkits, screenings, and self-help resources to promote mental wellness and early intervention.",
    href: "https://www.mhanational.org/mental-health-information",
    image: "https://www.mhanational.org/themes/custom/mha/logo.svg",
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
    image: "https://www.psychologytools.com/assets/img/logo-black.svg",
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
      "https://www.verywellmind.com/thmb/DfZj_xlvNGnslomFDLbAQz5D4EA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/verywellmind_logo_tagline_dark-827fb7b6b93945b195ef3823b5d2b396.png",
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
    image: "/images/resource-placeholder.png",
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
    image: "/images/resource-placeholder.png",
    similarResources: ["nlm", "project-gutenberg"],
    category: "online-self-help-book-platforms",
  },
  {
    id: "blinkist",
    title: "Blinkist",
    description:
      "Summarized versions of top mental health books in 15-minute reads or audio.",
    href: "https://www.blinkist.com/",
    image: "/images/resource-placeholder.png",
    similarResources: ["scribd", "audible"],
    category: "online-self-help-book-platforms",
  },
  {
    id: "project-gutenberg",
    title: "Project Gutenberg",
    description:
      "Free classic texts that may include early works on psychology or philosophy related to mental well-being.",
    href: "https://www.gutenberg.org/",
    image: "/images/resource-placeholder.png",
    similarResources: ["open-library"],
    category: "online-self-help-book-platforms",
  },
  {
    id: "scribd",
    title: "Scribd",
    description:
      "Unlimited access to books like 'The Happiness Trap', 'Lost Connections', and 'The Body Keeps the Score.'",
    href: "https://www.scribd.com/",
    image: "/images/resource-placeholder.png",
    similarResources: ["kindle-unlimited", "audible", "blinkist"],
    category: "online-self-help-book-platforms",
  },
  {
    id: "kindle-unlimited",
    title: "Kindle Unlimited",
    description:
      "Amazon’s ebook subscription service with mental health titles and memoirs.",
    href: "https://www.amazon.com/kindle-dbs/hz/subscribe/ku",
    image: "/images/resource-placeholder.png",
    similarResources: ["kindle-unlimited", "librofm", "scribd", "audible"],
    category: "online-self-help-book-platforms",
  },
  {
    id: "audible",
    title: "Audible",
    description:
      "Audiobooks covering therapy, mindfulness, psychology, and personal development.",
    href: "https://www.audible.com/",
    image: "/images/resource-placeholder.png",
    similarResources: ["kindle-unlimited", "scribd", "librofm", "spotify"],
    category: "online-self-help-book-platforms",
  },
  {
    id: "librofm",
    title: "Libro.fm",
    description:
      "Audiobooks that support independent bookstores, including mental health content.",
    href: "https://libro.fm/",
    image: "/images/resource-placeholder.png",
    similarResources: ["kindle-unlimited", "scribd", "audible"],
    category: "online-self-help-book-platforms",
  },
  {
    id: "spotify",
    title: "Spotify (Audiobooks)",
    description:
      "Free mental health audiobooks and guided self-help programs available on Spotify.",
    href: "https://spotify.com/",
    image: "/images/resource-placeholder.png",
    similarResources: ["kindle-unlimited", "scribd", "audible"],
    category: "online-self-help-book-platforms",
  },
  {
    id: "open-library-archive",
    title: "Open Library (by Internet Archive)",
    description:
      "Borrow full digital books on mental health (requires free account).",
    href: "https://openlibrary.org/subjects/mental_health",
    image: "",
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
      "https://www.additudemag.com/wp-content/uploads/2021/10/additude_logo_1.png",
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
      "https://www.traumainformedcareproject.org/wp-content/uploads/2020/10/ticp-logo.png",
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
      "https://www.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_image/2019-03/culturaldiversity.jpg?itok=9ahXrH0w",
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
      "https://www.autisticadvocacy.org/wp-content/uploads/2019/09/logo.png",
    similarResources: ["neurodivergence-support", "specialized-resources"],
    category: "specialized-resources",
  },
  {
    id: "mental-health-identity-and-diagnosis",
    title: "Mental Health Identity and Diagnosis",
    description:
      "Resources for understanding the intersection of mental health diagnosis and identity, including guidance on navigating life with specific diagnoses.",
    href: "https://www.nami.org/Your-Journey",
    image: "https://www.nami.org/Portals/0/Images/nami-logo-header.png",
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
      "https://www.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_image/2019-03/mentalhealthprofessionals.jpg?itok=saERxmfj",
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
      "https://www.meditationoasis.com/wp-content/uploads/2021/09/meditation-oasis-logo.png",
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
    image: "/images/resource-placeholder.png",
    similarResources: ["who", "therapist-aid", "the-wellness-journal"],
    category: "workbooks-guided-journals",
  },
  {
    id: "therapist-aid",
    title: "Therapist Aid",
    description:
      "Free printable workbooks, guides, and mental health activities.",
    href: "https://www.therapistaid.com/therapy-worksheets",
    image: "/images/resource-placeholder.png",
    similarResources: ["cci", "the-wellness-journal"],
    category: "workbooks-guided-journals",
  },
  {
    id: "managing-stress",
    title: "Managing Stress Workbook (Therapist Aid)",
    description:
      "Free workbook for managing stress with exercises and coping strategies.",
    href: "https://www.therapistaid.com/therapy-worksheets/stress-management",
    image: "/images/resource-placeholder.png",
    similarResources: ["cci", "the-wellness-journal", "therapist-aid"],
    category: "workbooks-guided-journals",
  },
  {
    id: "anxiety-phobia-workbook",
    title: "The Anxiety & Phobia Workbook by Edmund J. Bourne",
    description: "Workbook focused on anxiety and phobias.",
    href: "https://www.amazon.com",
    image: "",
    similarResources: ["the-self-discovery-journal", "therapist-aid"],
    category: "workbooks-guided-journals",
  },
  {
    id: "dbt-skills-training-workbook",
    title: "DBT Skills Training Workbook by Marsha Linehan",
    description: "DBT-based workbook.",
    href: "https://www.amazon.com",
    image: "",
    similarResources: ["the-self-discovery-journal", "therapist-aid"],
    category: "workbooks-guided-journals",
  },
  {
    id: "the-self-love-workbook",
    title: "The Self-Love Workbook by Shainna Ali",
    description: "Workbook for building self-love.",
    href: "https://www.amazon.com",
    image: "",
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
      "https://images-na.ssl-images-amazon.com/images/I/41Lq4j8q4yL._SX329_BO1,204,203,200_.jpg",
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
      "https://images-na.ssl-images-amazon.com/images/I/41HlxVrfgTL._SX326_BO1,204,203,200_.jpg",
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
      "https://images-na.ssl-images-amazon.com/images/I/41Bh71cR3tL._SX331_BO1,204,203,200_.jpg",
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
      "https://images-na.ssl-images-amazon.com/images/I/41j2+XT9gxL._SX326_BO1,204,203,200_.jpg",
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
      "https://images-na.ssl-images-amazon.com/images/I/51hbGoqFu0L._SX352_BO1,204,203,200_.jpg",
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
      "https://images-na.ssl-images-amazon.com/images/I/41E4XJ70ECL._SX320_BO1,204,203,200_.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Headspace_Logo.png/768px-Headspace_Logo.png",
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Calm_logo.svg/512px-Calm_logo.svg.png",
    similarResources: ["headspaceApp", "breetheApp", "sanvelloApp"],
    category: "mental-health-apps",
  },
  {
    id: "moodpathApp",
    title: "MindDoc (formerly Moodpath)",
    description:
      "A mood tracking and mental health assessment app co-developed by psychologists to help you better understand emotional patterns.",
    href: "https://minddoc.com/",
    image: "https://minddoc.de/img/logo.svg",
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
      "https://www.sanvello.com/wp-content/uploads/2020/01/sanvello_logo.png",
    similarResources: ["moodpathApp", "calmApp", "youperApp"],
    category: "mental-health-apps",
  },
  {
    id: "youperApp",
    title: "Youper",
    description:
      "An AI-powered emotional health assistant that uses evidence-based therapeutic techniques to support your mental well-being.",
    href: "https://www.youper.ai/",
    image: "https://cdn.youper.ai/assets/images/youper-logo.svg",
    similarResources: ["sanvelloApp", "moodpathApp", "headspaceApp"],
    category: "mental-health-apps",
  },
  {
    id: "mindfulness-app",
    title: "Mindfulness App",
    description:
      "A meditation app that offers guided sessions, reminders, and a community for mindfulness practice.",
    href: "https://www.meditationapp.com/",
    image: "https://www.meditationapp.com/logo.png",
    similarResources: ["headspaceApp", "calmApp", "sanvelloApp"],
    category: "mental-health-apps",
  },
  {
    id: "simpleHabitApp",
    title: "Simple Habit",
    description:
      "A meditation app designed to help you build a daily mindfulness practice with short, guided sessions.",
    href: "https://www.simplehabit.com/",
    image: "https://www.simplehabit.com/logo.png",
    similarResources: ["headspaceApp", "calmApp", "sanvelloApp"],
    category: "mental-health-apps",
  },
  {
    id: "smiling-mind",
    title: "Smiling Mind",
    description:
      "A mindfulness app designed for children and adolescents, offering programs to improve mental well-being.",
    href: "https://www.smilingmind.com.au/",
    image: "https://www.smilingmind.com.au/logo.png",
    similarResources: ["headspaceApp", "calmApp", "sanvelloApp"],
    category: "mental-health-apps",
  },
  {
    id: "waking-up",
    title: "Waking Up",
    description:
      "A meditation app that combines mindfulness with philosophy and psychology to enhance self-awareness.",
    href: "https://www.wakingup.com/",
    image: "https://www.wakingup.com/logo.png",
    similarResources: ["headspaceApp", "calmApp", "sanvelloApp"],
    category: "mental-health-apps",
  },
  {
    id: "breathe",
    title: "Breathe",
    description:
      "A meditation app that offers guided sessions, breathing exercises, and mindfulness practices.",
    href: "https://www.breathe.com/",
    image: "https://www.breathe.com/logo.png",
    similarResources: ["headspaceApp", "calmApp", "sanvelloApp"],
    category: "mental-health-apps",
  },

  // Category: "mental-health-apps"
  {
    id: "the-mental-illness-happy-hour",
    title: "The Mental Illness Happy Hour",
    description:
      "Hosted by comedian Paul Gilmartin, this podcast offers honest, raw, and often humorous conversations about mental health and the invisible battles many people face.",
    href: "https://mentalpod.com/",
    image: "https://mentalpod.com/wp-content/uploads/2019/10/mihh-logo.jpg",
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
      "https://www.therapychatpodcast.com/wp-content/uploads/2020/07/cropped-podcast_logo-300x300.jpg",
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
      "https://www.happinesslab.fm/wp-content/uploads/2020/01/happinesslab_logo.jpg",
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
      "https://static.wixstatic.com/media/23c1a5_b1b7725ff8b64fdc9d31d9600ca73dbd~mv2.jpg/v1/fill/w_390,h_236,al_c,q_80/23c1a5_b1b7725ff8b64fdc9d31d9600ca73dbd~mv2.jpg",
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
      "https://www.rachaelkable.com/wp-content/uploads/2020/02/the-mindful-kind-podcast.jpg",
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
      "https://media.blubrry.com/mentalhealthfoundations/content.blubrry.com/mentalhealthfoundations/mental_health_foundations_logo.jpg",
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
      "https://www.unfuckyourbrain.com/wp-content/uploads/2019/04/UFYB_logo_400px.png",
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
      "https://theanxietycoach.com/wp-content/uploads/2020/07/AC-Logo-Transparent-1.png",
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
      "https://brenebrown.com/wp-content/uploads/2020/02/Unlocking-Us-Artwork.jpg",
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
      "https://momastery.com/wp-content/uploads/2021/05/WCDHT-Podcast-Cover.jpg",
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
      "https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/77/3a/46/773a4656-4b68-6b13-5b77-f83a64544d14/mza_6570372690273293273.jpg/1200x630bb.jpg",
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
      "https://unfuckyourbrain.com/wp-content/uploads/2022/01/UNFYB-New-Podcast-Art.png",
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
    image: "https://images.penguinrandomhouse.com/cover/9780143127741",
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
    image: "https://images-na.ssl-images-amazon.com/images/I/81N4BqL9NwS.jpg",
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
    image: "https://images.penguinrandomhouse.com/cover/9781328502667",
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
    image: "https://images-na.ssl-images-amazon.com/images/I/81np8p68h0L.jpg",
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
      "https://static01.nyt.com/images/2022/12/12/us/12virus-briefing-teens/12virus-briefing-teens-superJumbo.jpg",
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
    image: "",
    similarResources: ["the-body-keeps-the-score", "it-didnt-start-with-you"],
    category: "recommended-books-and-articles",
  },
  {
    id: "the-drama-of-the-gifted-child",
    title: "The Drama of the Gifted Child by Alice Miller",
    description:
      "A classic that explores how childhood trauma—especially emotional neglect—can shape adult psychology and self-perception.",
    href: "https://www.harpercollins.com/products/the-drama-of-the-gifted-child-revised-edition-alice-miller",
    image: "https://images.harpercollins.com/covers/9780465016907/x450.jpg",
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
    image: "https://images-na.ssl-images-amazon.com/images/I/81oNdj5LDDL.jpg",
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
    image: "https://images-na.ssl-images-amazon.com/images/I/81FbFZi7y-L.jpg",
    similarResources: ["dare-to-lead", "drive", "deep-work"],
    category: "recommended-books-and-articles",
  },
  {
    id: "atomic-habits",
    title: "Atomic Habits by James Clear",
    description:
      "One of the most actionable guides on how to build good habits, break bad ones, and master the tiny behaviors that lead to big change.",
    href: "https://jamesclear.com/atomic-habits",
    image: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
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
      "https://images-na.ssl-images-amazon.com/images/I/51nPcm1N3NL._SX329_BO1,204,203,200_.jpg",
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
    image: "https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg",
    similarResources: ["atomic-habits", "digital-minimalism", "principles"],
    category: "recommended-books-and-articles",
  },
  {
    id: "the-7-habits-of-highly-effective-people",
    title: "The 7 Habits of Highly Effective People by Stephen R. Covey",
    description:
      "A perennial self-help classic that introduces a principle-centered approach for solving personal and professional problems.",
    href: "https://www.franklincovey.com/the-7-habits.html",
    image: "https://images-na.ssl-images-amazon.com/images/I/81cpDaCJJCL.jpg",
    similarResources: ["atomic-habits", "principles", "grit"],
    category: "recommended-books-and-articles",
  },
  {
    id: "the-power-of-habit",
    title: "The Power of Habit by Charles Duhigg",
    description:
      "Duhigg explores the science of habits, explaining how they're formed—and how they can be changed.",
    href: "https://charlesduhigg.com/the-power-of-habit/",
    image: "https://images-na.ssl-images-amazon.com/images/I/81u8r6cQVTL.jpg",
    similarResources: ["atomic-habits", "deep-work", "grit"],
    category: "recommended-books-and-articles",
  },
  {
    id: "thinking-fast-and-slow",
    title: "Thinking, Fast and Slow by Daniel Kahneman",
    description:
      "A groundbreaking exploration of how our minds make decisions, combining psychology and behavioral economics.",
    href: "https://us.macmillan.com/books/9780374533557/thinkingfastandslow",
    image: "https://images-na.ssl-images-amazon.com/images/I/71UypkUjStL.jpg",
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
    image: "https://images-na.ssl-images-amazon.com/images/I/81AKd2xIFDL.jpg",
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
      "https://www.meditationoasis.com/wp-content/uploads/2021/09/meditation-oasis-logo.png",
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
      "https://www.mindful.org/wp-content/uploads/2020/04/mindful_logo.png",
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
      "https://www.calmsage.com/wp-content/uploads/2022/05/CalmSage-logo.png",
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
    image: "https://www.mindfuleating.org/images/logo.png",
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
      "https://www.psychologytoday.com/sites/default/files/styles/article_inline_half/public/field_blog_image/2019-12/breathing_exercises.jpg?itok=De7TrkA4",
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
    image: "https://www.headspace.com/favicon.ico",
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
      "https://suicidepreventionlifeline.org/wp-content/themes/spm_theme/dist/images/spm-logo.svg",
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
      "https://www.crisistextline.org/wp-content/uploads/2021/08/CTL-Logo.png",
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
      "https://www.thehotline.org/wp-content/uploads/2019/04/NDVH-logo.png",
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
      "https://www.thehotline.org/wp-content/uploads/2021/06/NDVH-textline-logo.png",
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
      "https://www.rainn.org/sites/default/files/styles/logo/public/RAINN_Logo_Stacked.png?itok=Rpm_3yqs",
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
      "https://www.translifeline.org/wp-content/uploads/2020/10/TransLifeline-logo-white-background.png",
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
      "https://www.veteranscrisisline.net/wp-content/uploads/2020/12/VCL_Logo_Full_White_on_Gray.png",
    similarResources: [
      "crisis-support-hotlines",
      "mental-health-education-self-help",
    ],
    category: "crisis-support-hotlines",
  },

  // Category: "online-therapy-therapy-networks"
  {
    id: "7cups",
    title: "7 Cups",
    description:
      "7 Cups offers free, anonymous, and confidential online text chat with trained listeners, as well as affordable therapy services with licensed professionals. It’s a supportive community that provides emotional support 24/7.",
    href: "https://www.7cups.com/",
    image: "https://www.7cups.com/assets/images/logo.svg",
    similarResources: [
      "online-therapy-therapy-networks",
      "crisis-support-hotlines",
    ],
    category: "online-therapy-therapy-networks",
  },
  {
    id: "mdlive-therapy",
    title: "MDLive Therapy",
    description:
      "MDLive provides online therapy and psychiatry services via video or phone. With a variety of therapists available, MDLive helps users find the right fit for their needs in a secure, convenient setting.",
    href: "https://www.mdlive.com/",
    image:
      "https://www.mdlive.com/wp-content/themes/mdl/wp-content/uploads/2021/04/MDLive-logo.svg",
    similarResources: [
      "online-therapy-therapy-networks",
      "mental-health-education-self-help",
    ],
    category: "online-therapy-therapy-networks",
  },
  {
    id: "calmerry",
    title: "Calmerry",
    description:
      "Calmerry offers flexible online therapy with licensed therapists, accessible through chat, video, or phone calls. They tailor the experience to your schedule and offer affordable pricing plans.",
    href: "https://calmerry.com/",
    image:
      "https://calmerry.com/wp-content/uploads/2020/08/calmerry_logo_2x.png",
    similarResources: [
      "online-therapy-therapy-networks",
      "mental-health-education-self-help",
    ],
    category: "online-therapy-therapy-networks",
  },
  {
    id: "rethink-therapy",
    title: "Rethink Therapy",
    description:
      "Rethink Therapy offers online therapy services with licensed professionals for individuals, couples, and families. The platform emphasizes building a strong therapeutic relationship in a virtual setting.",
    href: "https://www.rethinktherapy.com/",
    image:
      "https://www.rethinktherapy.com/wp-content/uploads/2021/02/rethink-therapy-logo.png",
    similarResources: [
      "online-therapy-therapy-networks",
      "mental-health-education-self-help",
    ],
    category: "online-therapy-therapy-networks",
  },
  {
    id: "amwell",
    title: "Amwell",
    description:
      "Amwell connects individuals with licensed therapists and psychiatrists for video or phone consultations. It’s a reliable platform for behavioral health support, offering flexible appointments and quick access to care.",
    href: "https://www.amwell.com/",
    image: "https://www.amwell.com/images/logo.png",
    similarResources: [
      "online-therapy-therapy-networks",
      "mental-health-education-self-help",
    ],
    category: "online-therapy-therapy-networks",
  },
  {
    id: "therapistmatch",
    title: "Therapist Match",
    description:
      "Therapist Match connects individuals with licensed mental health professionals who offer virtual sessions via video, chat, or phone calls. The platform helps match users with therapists based on their specific needs.",
    href: "https://www.therapistmatch.com/",
    image: "https://www.therapistmatch.com/assets/images/logo.png",
    similarResources: [
      "online-therapy-therapy-networks",
      "mental-health-education-self-help",
    ],
    category: "online-therapy-therapy-networks",
  },
  {
    id: "online-therapy-com",
    title: "Online Therapy",
    description:
      "Online Therapy offers a comprehensive online mental health service where users can communicate with licensed therapists through text, video, or chat. It focuses on Cognitive Behavioral Therapy (CBT) to help users manage anxiety, depression, and other mental health challenges.",
    href: "https://www.online-therapy.com/",
    image: "https://www.online-therapy.com/images/logo.png",
    similarResources: [
      "online-therapy-therapy-networks",
      "mental-health-education-self-help",
    ],
    category: "online-therapy-therapy-networks",
  },
  {
    id: "regain-therapy",
    title: "Regain Therapy",
    description:
      "Regain Therapy offers online couples therapy with licensed therapists who specialize in relationship and marital issues. Sessions are available via text, video, or phone consultations, providing flexible support for couples.",
    href: "https://www.regain.us/",
    image: "https://www.regain.us/assets/images/logo.png",
    similarResources: [
      "online-therapy-therapy-networks",
      "mental-health-education-self-help",
    ],
    category: "online-therapy-therapy-networks",
  },
];


export const resource: Resource[] = [
  {
    title: "Health Articles",
    href: "/wellness-library/health-articles",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    subtitle: "Mar 10, 2020",
  },
  {
    title: "Events & Workshops for Mental Health",
    href: "/wellness-library/events-and-workshops",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    subtitle: "Mar 10, 2020",
  },
  {
    title: "Self Assessments",
    href: "/wellness-library/digital-products/self-assessments",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    subtitle: "Mar 10, 2020",
  },
];

export const featuredResource: Resource[] = [
  {
    title: "Mental Health Toolkit",
    href: "/wellness-library/digital-products/meantal-health-toolkit",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    subtitle: "Mar 10, 2020",
  },
  {
    title: "Wellness Dictionary",
    href: "/wellness-library/digital-products/wellness-dictionary",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    subtitle: "Mar 10, 2020",
  },
];