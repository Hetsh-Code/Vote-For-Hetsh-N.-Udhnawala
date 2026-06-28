import { ManifestoItem, Achievement, FAQItem, Pledge } from "../types";

export const manifestoData: ManifestoItem[] = [
  {
    id: "honesty",
    title: "Honesty & Transparency",
    category: "Governance",
    iconName: "ShieldCheck",
    description: "Creating a reliable channel of communication between the student body and school management.",
    details: [
      "Open Student Forum: Monthly town halls where students can raise concerns directly.",
      "Anonymous Feedback Box: A digital glass-box system for honest suggestions and complaints.",
      "Monthly Newsletter: Clear updates on what the student council has achieved and budgeted."
    ],
    color: "from-cyan-400 to-blue-500"
  },
  {
    id: "empathy",
    title: "Empathy & Peer Support",
    category: "Well-being",
    iconName: "HeartHandshake",
    description: "Fostering an inclusive, supportive, and stress-free environment for all students.",
    details: [
      "Peer Tutoring Program: Connecting seniors with juniors needing academic assistance.",
      "Mental Well-being Seminars: Guided sessions for stress management and exam preparation.",
      "Anti-bullying Alliance: Student-led taskforce to ensure every voice feels safe and valued."
    ],
    color: "from-pink-400 to-rose-500"
  },
  {
    id: "tenacity",
    title: "Tenacity in Sports & Arts",
    category: "Co-curricular",
    iconName: "Trophy",
    description: "Re-igniting the competitive spirit and creative passions across all houses.",
    details: [
      "Inter-house Revamp: Introduction of esports, speed chess, and debating tournaments.",
      "Fine Arts & Music Showcase: Bi-annual festivals to highlight creative students.",
      "Better Equipment & Scheduling: Ensuring sports fields and arts rooms are fully equipped."
    ],
    color: "from-amber-400 to-orange-500"
  },
  {
    id: "synergy",
    title: "Synergy & Collaboration",
    category: "Events",
    iconName: "Users2",
    description: "Uniting grades and departments for grander festivals and collective impact.",
    details: [
      "Annual Inter-School Fest: Revitalizing our flagship event with student-led planning.",
      "Cross-Grade Mentorship: Grade 12 students mentoring Grade 9 on career paths and subjects.",
      "Collaborative Clubs: Joint activities between Science, Humanities, and Commerce clubs."
    ],
    color: "from-emerald-400 to-teal-500"
  },
  {
    id: "honor",
    title: "Honor & Sustainability",
    category: "Eco-Campus",
    iconName: "Leaf",
    description: "Promoting green initiatives, school honor, and community outreach.",
    details: [
      "Green Campus Initiative: Introducing waste segregation, composting, and solar pathlights.",
      "Social Service Drives: Food and book collection drives for underprivileged schools.",
      "Honor Code System: Instilling academic integrity and school pride in sports/events."
    ],
    color: "from-violet-400 to-indigo-500"
  }
];

export const achievementsData: Achievement[] = [
  {
    id: "ach-1",
    year: "2025 - 2026",
    title: "Elected Deputy Head Boy / Prefect",
    description: "Served as a key liaison, managing assemblies and coordinating peer mentoring workshops for over 500 juniors."
  },
  {
    id: "ach-2",
    year: "2025",
    title: "National Debate Championship Finalist",
    description: "Represented our school, arguing complex sociotechnical themes and earning the 'Most Eloquent Speaker' award."
  },
  {
    id: "ach-3",
    year: "2024",
    title: "Captain, Inter-house Football Team",
    description: "Led the House of Phoenix to victory, organizing training drills and maintaining rigorous sportsmanship values."
  },
  {
    id: "ach-4",
    year: "2023 - Present",
    title: "Founder, Green Minds Club",
    description: "Initiated a campus-wide recycling program that diverted 400+ kg of plastic and paper from local landfills."
  }
];

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "Why should I vote for Hetsh N. Udhnawala?",
    answer: "Hetsh is not just an achiever; he is a listener. With prior experience as Prefect, he understands the school's operational framework. He is dedicated to translating student feedback into concrete actions via the H.E.T.S.H. Formula—offering academic peer tutoring, house revitalizations, and transparent student council operations."
  },
  {
    id: "faq-2",
    question: "What makes his 'H.E.T.S.H. Formula' realistic and different?",
    answer: "Instead of calling for massive, unapproved budget overhauls, Hetsh's formula targets structural improvements. For instance, Peer Tutoring relies on volunteer hours (which count towards social service credits), and house activities utilize existing equipment but introduce highly requested modern domains like esports, debate, and speed chess."
  },
  {
    id: "faq-3",
    question: "How will Hetsh represent our issues to the school management?",
    answer: "Through the 'Digital Glass Feedback' and Open Forums, Hetsh will compile and present student feedback monthly in structured proposals to the Principal and Coordinators, maintaining full accountability and informing students of progress."
  },
  {
    id: "faq-4",
    question: "Can I join his campaign team or support active volunteering?",
    answer: "Absolutely! Submit a Pledge of support below. We will reach out to anyone interested in house representation, speech feedback, poster designing, or campus coordination. Let's build synergy together!"
  }
];

export const initialPledges: Pledge[] = [
  {
    id: "p-1",
    name: "Aarav Mehta",
    grade: "Grade 12-A (Science)",
    message: "Hetsh's peer-to-peer tutoring proposal is exactly what we need before finals. He always helps everyone in the library anyway!",
    timestamp: "2026-06-27T10:15:00Z"
  },
  {
    id: "p-2",
    name: "Sanya Sen",
    grade: "Grade 11-C (Commerce)",
    message: "Finally, someone talking about esports and chess in the inter-house tournaments! Hetsh has my vote 100%.",
    timestamp: "2026-06-27T14:30:00Z"
  },
  {
    id: "p-3",
    name: "Rohan Das",
    grade: "Grade 10-B",
    message: "Hetsh led our Green Campus campaign last year and actually made recycling bins happen. He is a leader who gets things done.",
    timestamp: "2026-06-28T02:45:00Z"
  }
];
