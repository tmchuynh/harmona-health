import { JournalPrompts } from "@/lib/interfaces&types/resources";
import { FaPenAlt } from "react-icons/fa";
import { FaPersonBurst } from "react-icons/fa6";
import {
  GiCandleLight,
  GiCornerFlag,
  GiDreamCatcher,
  GiGhost,
  GiKnightBanner,
} from "react-icons/gi";
import { IoIosBookmarks } from "react-icons/io";
import { SlEnvolopeLetter } from "react-icons/sl";
import { TbBuildingLighthouse } from "react-icons/tb";

export const creativityJournalingPrompts: JournalPrompts[] = [
  {
    prompt: "Write a letter to your future self.",
    ideas: [
      "What advice would you give to your future self in 5 or 10 years?",
      "What accomplishments do you hope to have achieved by then?",
      "What fears or challenges do you think you might face, and how can you encourage yourself to overcome them?",
      "What lessons do you hope your future self has learned?",
      "What kind of person do you want to be when you read this letter?",
    ],
    Icon: SlEnvolopeLetter,
  },
  {
    prompt: "Imagine your life as a novel—what would the title be?",
    ideas: [
      "What genre would your life story fit into? A drama, adventure, or fantasy?",
      "What major turning points or life chapters stand out in your ‘story’?",
      "What is the central theme or lesson you’re learning in your life?",
      "Who are the main characters in your life story, and what roles do they play?",
      "How would you want your life’s story to be remembered?",
    ],
    Icon: IoIosBookmarks,
  },
  {
    prompt: "Write about a dream you’ve had recently.",
    ideas: [
      "What emotions did the dream evoke in you? Were you afraid, happy, confused, or inspired?",
      "What symbols or unusual details stood out to you in the dream?",
      "What message or insight do you think the dream may hold?",
      "If this dream had a story, what would the plot be?",
      "How did the dream make you feel the next morning, and why?",
    ],
    Icon: GiDreamCatcher,
  },
  {
    prompt: "Create a character based on someone you’ve met.",
    ideas: [
      "What do they look like, and how do they act? What are their quirks?",
      "What’s their backstory? Where did they come from, and what are their dreams?",
      "What are their strengths and weaknesses? How do they approach life’s challenges?",
      "What’s their most defining trait—confidence, kindness, humor, or something else?",
      "How does this character interact with others? Are they a leader, follower, or something in-between?",
    ],
    Icon: FaPersonBurst,
  },
  {
    prompt: "Describe a place that holds significance for you.",
    ideas: [
      "What does the place look like? Describe the sights, sounds, smells, and textures.",
      "How does this place make you feel? Is it peaceful, energizing, or reflective?",
      "What memories or experiences have you associated with this place?",
      "How has this place shaped you, and why does it have a special place in your heart?",
      "If you could visit this place in the future, what would you hope to find or experience?",
    ],
    Icon: TbBuildingLighthouse,
  },
  {
    prompt: "Write a scene where you are the hero in an adventure.",
    ideas: [
      "What is the quest or mission you’re on? What are you trying to achieve?",
      "What is at stake? What motivates you to continue on your journey?",
      "What obstacles do you face, and how do you overcome them? Are there moments of self-doubt?",
      "Who are your allies or enemies in this adventure? How do they help or hinder your progress?",
      "What does your ultimate victory or failure look like? How does it change you?",
    ],
    Icon: GiKnightBanner,
  },
  {
    prompt:
      "Write a story beginning with the line, 'It was the strangest thing.'",
    ideas: [
      "What happened that was so strange? Did something unexpected or surreal occur?",
      "How do you react to the strange event—are you frightened, curious, or confused?",
      "How do others around you react? Is anyone else affected by what happened?",
      "What explanation, if any, do you come up with for this strange event?",
      "What happens next? Does this strange event lead to further bizarre occurrences?",
    ],
    Icon: GiGhost,
  },
  {
    prompt: "Invent a new holiday. What is it, and how do people celebrate it?",
    ideas: [
      "What is the meaning behind the holiday? Does it celebrate an important cultural or personal value?",
      "What traditions or rituals are associated with this holiday?",
      "What foods, decorations, or symbols represent the holiday?",
      "Who celebrates this holiday, and how is it different from other holidays?",
      "How do people prepare for and reflect on the holiday? Is it a time of rest, action, or giving?",
    ],
    Icon: GiCandleLight,
  },
  {
    prompt: "Write about a turning point in your life.",
    ideas: [
      "What moment in your life changed the course of your journey? Was it planned or unexpected?",
      "What emotions did you feel during this turning point—fear, excitement, uncertainty?",
      "How did this turning point shape your current path or perspective?",
      "What lessons did you learn from this experience, and how did they guide you afterward?",
      "If you could go back, would you make the same decision, or would you choose differently?",
    ],
    Icon: GiCornerFlag,
  },
  {
    prompt: "Write a scene where you meet your younger self.",
    ideas: [
      "What does your younger self look like, and how do they act?",
      "What advice do you give to your younger self? What do you wish you knew back then?",
      "What questions would your younger self have for you? How would you respond?",
      "What do you wish your younger self had known or understood at that time in their life?",
      "How does meeting your younger self change your view of who you are today?",
    ],
    Icon: FaPenAlt,
  },
  {
    prompt: "Describe an ordinary object, but make it extraordinary.",
    ideas: [
      "What is the object, and what makes it special in your story?",
      "What hidden qualities or magical properties could the object possess?",
      "How does this object impact the world or people around it?",
      "What kind of history or significance does the object hold?",
      "How do you, or others, interact with the object, and what surprises come from it?",
    ],
    Icon: FaPenAlt,
  },
  {
    prompt: "Write about a moment of pure joy or happiness in vivid detail.",
    ideas: [
      "Where were you, and who were you with? What made the moment so joyful?",
      "What sensations do you remember—sounds, sights, tastes, or smells?",
      "How did this moment make you feel, both physically and emotionally?",
      "What made this moment stand out in your life?",
      "What did you learn from this moment of joy, and how can you bring it into your daily life?",
    ],
    Icon: FaPenAlt,
  },
  {
    prompt: "Write about a place you’d like to visit and why.",
    ideas: [
      "What makes this place appealing to you? Is it the culture, the nature, or the people?",
      "How would you imagine the experience of traveling to this place? What adventures await?",
      "What impact do you think this trip would have on you personally, emotionally, or spiritually?",
      "What would be the first thing you do once you arrive?",
      "How does this place fit into your dreams or vision for your life?",
    ],
    Icon: FaPenAlt,
  },
  {
    prompt:
      "Write a conversation between two characters who have opposing viewpoints.",
    ideas: [
      "What’s the main issue they disagree on? Is it a philosophical, personal, or political topic?",
      "How do their backgrounds or experiences shape their perspectives?",
      "Do they find any common ground, or do their differences deepen the divide?",
      "How do their personalities come across in their communication—are they respectful, hostile, or open?",
      "What is the outcome of this conversation, and does it change either of their perspectives?",
    ],
    Icon: FaPenAlt,
  },
  {
    prompt: "Write about a personal habit or ritual that brings you comfort.",
    ideas: [
      "What is the habit or ritual? How does it make you feel when you engage in it?",
      "How did you develop this habit, and what does it provide for you—comfort, peace, focus?",
      "What emotions arise when you think about this habit or ritual?",
      "How does this habit reflect your values, needs, or desires?",
      "If you had to give up this ritual, how would your life feel different?",
    ],
    Icon: FaPenAlt,
  },
  {
    prompt: "Describe an object that holds deep sentimental value to you.",
    ideas: [
      "What is the object, and how did it come into your life?",
      "What memories or stories are tied to this object?",
      "How does this object remind you of important moments or people in your life?",
      "What does this object represent in your personal journey?",
      "What would happen if you lost or gave up this object? How would you feel?",
    ],
    Icon: FaPenAlt,
  },
  {
    prompt:
      "Write a scene where everything goes wrong, but the character learns a valuable lesson.",
    ideas: [
      "What exactly goes wrong in this situation? Is it a series of small mistakes or one big failure?",
      "How does the character react at first—panic, frustration, anger?",
      "What ultimately helps them learn from the experience?",
      "How does the character change or grow as a result of the failure?",
      "What lesson do they take away that will help them in the future?",
    ],
    Icon: FaPenAlt,
  },
  {
    prompt: "Write about a time you took a risk and what happened.",
    ideas: [
      "What was the risk you took, and what motivated you to take it?",
      "How did you feel before, during, and after taking the risk?",
      "What were the consequences of your decision—positive, negative, or both?",
      "What did you learn from this experience about yourself or life in general?",
      "Would you take the same risk again? Why or why not?",
    ],
    Icon: FaPenAlt,
  },
  {
    prompt: "Write about a time you felt completely out of your comfort zone.",
    ideas: [
      "What was the situation, and how did you feel going into it?",
      "What challenges did you face, and how did you cope with them?",
      "What did you learn about yourself during this experience?",
      "How did this experience change your perspective on comfort zones?",
      "Would you willingly put yourself in a similar situation again? Why or why not?",
    ],
    Icon: FaPenAlt,
  },
];

export const journalingPromptscreativityJournalingPrompts = [];