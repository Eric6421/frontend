import type {
  CmfProfile,
  EmploymentType,
  JobCompanyInfo,
  JobMatch,
  JobPostingInfo,
} from "./types";

type JobSeed = {
  id: string;
  rank: number;
  position: string;
  company: string;
  type: EmploymentType;
  location: string;
  matchScore: number;
  businessNature?: string;
  productsServices?: string;
  staffCountHK?: string;
  briefIntroduction?: string;
  vacancies?: number;
  jobDescription?: string;
  languageSpeaking?: string;
  languageWriting?: string;
  otherRequirement?: string;
  applicationMethod?: string;
  salary?: string;
  website?: string;
  ownershipLocation?: string;
  jobTitleNature?: string;
};

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "")
    .slice(0, 24);
}

function buildJob(seed: JobSeed): JobMatch {
  const companyInfo: JobCompanyInfo = {
    organization: seed.company,
    jobTitleNature:
      seed.jobTitleNature ?? `${seed.position} / ${seed.type} employment`,
    website: seed.website ?? `https://www.${slugify(seed.company)}.example.com`,
    businessNature:
      seed.businessNature ??
      "Private limited company providing professional services and operations support.",
    productsServices:
      seed.productsServices ??
      "Core products and services related to the posted role and day-to-day operations.",
    ownershipLocation: seed.ownershipLocation ?? "Hong Kong / Regional",
    staffCountHK: seed.staffCountHK ?? "50–100",
    briefIntroduction:
      seed.briefIntroduction ??
      `${seed.company} works with partners across the region to deliver quality outcomes. The organisation values inclusive hiring and supports SEN youth through structured onboarding and mentoring.`,
  };

  const jobInfo: JobPostingInfo = {
    positionOffered: seed.position,
    vacancies: seed.vacancies ?? 1,
    employmentType: seed.type,
    jobDescription:
      seed.jobDescription ??
      `As a ${seed.position}, you will support daily operations, collaborate with team members, and complete assigned tasks to a high standard. Responsibilities include following workplace procedures, reporting progress, and contributing to continuous improvement.`,
    workLocation: seed.location,
    languageSpeaking: seed.languageSpeaking ?? "English, Cantonese",
    languageWriting: seed.languageWriting ?? "English",
    otherRequirement:
      seed.otherRequirement ??
      "Reliable, willing to learn, able to follow instructions, and comfortable working in a structured environment.",
    applicationMethod:
      seed.applicationMethod ??
      "Apply via UpCareer / email CV to careers@" +
        slugify(seed.company) +
        ".example.com",
    salary: seed.salary ?? "HK$14,000 – HK$18,000 / month (negotiable)",
  };

  return {
    id: seed.id,
    rank: seed.rank,
    position: seed.position,
    company: seed.company,
    type: seed.type,
    location: seed.location,
    matchScore: seed.matchScore,
    companyInfo,
    jobInfo,
  };
}

const JOB_SEEDS: JobSeed[] = [
  {
    id: "job-01",
    rank: 1,
    position: "Software Engineer",
    company: "TechNova Solutions",
    type: "Full-time",
    location: "Kuala Lumpur",
    matchScore: 92.1,
    businessNature: "Information technology and software product development",
    productsServices: "Web platforms, internal tools, and API integrations",
    staffCountHK: "80–120",
    ownershipLocation: "Malaysia (regional HQ) / Hong Kong liaison office",
    vacancies: 2,
    jobDescription:
      "Develop and maintain web applications, collaborate with product and design teams, write clean TypeScript/React code, and participate in code reviews. Mentorship is provided for junior engineers.",
    languageSpeaking: "English (required), Cantonese (preferred)",
    languageWriting: "English",
    otherRequirement:
      "Basic programming knowledge; portfolio or GitHub preferred; open to SEN applicants with coaching support.",
    salary: "HK$18,000 – HK$25,000 / month",
    applicationMethod: "Submit CV via UpCareer or careers@technova.example.com",
  },
  {
    id: "job-02",
    rank: 2,
    position: "Data Analyst",
    company: "DataBridge Corp",
    type: "Full-time",
    location: "Petaling Jaya",
    matchScore: 88.4,
    businessNature: "Data analytics and business intelligence consulting",
    productsServices: "Dashboards, reporting pipelines, and data quality audits",
    staffCountHK: "40–60",
    vacancies: 1,
    jobDescription:
      "Clean and analyse datasets, build reports and dashboards, and present findings to stakeholders. You will work closely with operations teams to improve decision-making.",
    salary: "HK$16,000 – HK$22,000 / month",
  },
  {
    id: "job-03",
    rank: 3,
    position: "Aquaponics Technician",
    company: "GreenWave Farms",
    type: "Full-time",
    location: "Shah Alam",
    matchScore: 86.7,
    businessNature: "Urban agriculture and aquaponics production",
    productsServices: "Fresh produce, aquaponics systems, farm tours",
    staffCountHK: "20–40",
    ownershipLocation: "Hong Kong / Malaysia joint venture",
    vacancies: 3,
    jobDescription:
      "Monitor water quality, feed fish, maintain plant beds, record daily logs, and support harvest operations in an aquaponics farm environment.",
    languageSpeaking: "Cantonese, English, Bahasa Malaysia",
    languageWriting: "English or Chinese",
    otherRequirement:
      "Comfortable with outdoor / greenhouse work; attention to detail; physical stamina for light manual tasks.",
    salary: "HK$13,000 – HK$16,500 / month",
  },
  {
    id: "job-04",
    rank: 4,
    position: "UX Research Assistant",
    company: "HumanFirst Studio",
    type: "Contract",
    location: "Kuala Lumpur",
    matchScore: 84.2,
    businessNature: "Digital product design and user research",
    productsServices: "UX research studies, usability testing, design sprints",
    staffCountHK: "15–30",
    vacancies: 1,
    salary: "HK$15,000 – HK$19,000 / month (6-month contract)",
  },
  {
    id: "job-05",
    rank: 5,
    position: "Operations Associate",
    company: "FarmLink Logistics",
    type: "Full-time",
    location: "Subang Jaya",
    matchScore: 83.0,
    businessNature: "Cold-chain logistics for agricultural products",
    productsServices: "Warehousing, last-mile delivery, inventory coordination",
    staffCountHK: "100–150",
    vacancies: 2,
    salary: "HK$14,000 – HK$17,000 / month",
  },
  {
    id: "job-06",
    rank: 6,
    position: "Junior QA Tester",
    company: "ByteGuard Soft",
    type: "Full-time",
    location: "Cyberjaya",
    matchScore: 81.5,
    businessNature: "Software quality assurance services",
    productsServices: "Manual testing, regression suites, bug reporting",
    staffCountHK: "60–90",
    vacancies: 2,
    salary: "HK$14,500 – HK$18,000 / month",
  },
  {
    id: "job-07",
    rank: 7,
    position: "Greenhouse Assistant",
    company: "UrbanHarvest Co.",
    type: "Part-time",
    location: "Serdang",
    matchScore: 80.3,
    businessNature: "Urban farming and greenhouse cultivation",
    productsServices: "Leafy greens, herbs, community farm workshops",
    staffCountHK: "10–25",
    vacancies: 4,
    salary: "HK$70 – HK$90 / hour",
  },
  {
    id: "job-08",
    rank: 8,
    position: "Customer Support Specialist",
    company: "CarePath Services",
    type: "Full-time",
    location: "Kuala Lumpur",
    matchScore: 79.1,
    businessNature: "Customer care and service operations",
    productsServices: "Phone / chat support, case handling, client onboarding",
    staffCountHK: "120–180",
    vacancies: 3,
    salary: "HK$13,500 – HK$16,000 / month",
  },
  {
    id: "job-09",
    rank: 9,
    position: "Inventory Clerk",
    company: "AgriSupply Hub",
    type: "Full-time",
    location: "Kajang",
    matchScore: 77.8,
    businessNature: "Agricultural supplies wholesale and distribution",
    productsServices: "Seeds, tools, fertilisers, stock control systems",
    staffCountHK: "35–55",
    vacancies: 1,
    salary: "HK$12,500 – HK$15,000 / month",
  },
  {
    id: "job-10",
    rank: 10,
    position: "Marketing Coordinator",
    company: "BrightLeaf Media",
    type: "Internship",
    location: "Petaling Jaya",
    matchScore: 76.4,
    businessNature: "Digital marketing and content production",
    productsServices: "Social media campaigns, newsletters, event promotion",
    staffCountHK: "20–35",
    vacancies: 2,
    salary: "HK$8,000 – HK$10,000 / month (internship allowance)",
  },
  {
    id: "job-11",
    rank: 11,
    position: "Field Research Aide",
    company: "EcoMetrics Lab",
    type: "Contract",
    location: "Putrajaya",
    matchScore: 75.2,
    businessNature: "Environmental research and field data collection",
    productsServices: "Surveys, sampling, environmental impact reports",
    staffCountHK: "25–40",
    vacancies: 2,
    salary: "HK$14,000 – HK$17,500 / month (contract)",
  },
  {
    id: "job-12",
    rank: 12,
    position: "IT Helpdesk Trainee",
    company: "NexServe Systems",
    type: "Full-time",
    location: "Kuala Lumpur",
    matchScore: 74.0,
    businessNature: "IT support and managed services",
    productsServices: "Helpdesk tickets, device setup, basic troubleshooting",
    staffCountHK: "70–100",
    vacancies: 3,
    salary: "HK$12,000 – HK$15,000 / month",
  },
  {
    id: "job-13",
    rank: 13,
    position: "Hydroponics Operator",
    company: "SkyGarden Farms",
    type: "Full-time",
    location: "Rawang",
    matchScore: 72.6,
    businessNature: "Commercial hydroponics farming",
    productsServices: "Hydroponic vegetables, nursery seedlings",
    staffCountHK: "15–30",
    vacancies: 2,
    salary: "HK$13,000 – HK$16,000 / month",
  },
  {
    id: "job-14",
    rank: 14,
    position: "Administrative Assistant",
    company: "LoveXpress Hub",
    type: "Part-time",
    location: "Kuala Lumpur",
    matchScore: 71.3,
    businessNature: "Social enterprise supporting SEN employment matching",
    productsServices: "Career matching programmes, workshops, employer liaison",
    staffCountHK: "30–50",
    ownershipLocation: "Hong Kong",
    vacancies: 1,
    salary: "HK$75 – HK$95 / hour",
    applicationMethod: "Apply via UpCareer (preferred for SEN applicants)",
  },
  {
    id: "job-15",
    rank: 15,
    position: "Retail Associate",
    company: "GreenMart Fresh",
    type: "Part-time",
    location: "Ampang",
    matchScore: 70.1,
    businessNature: "Fresh produce retail",
    productsServices: "Grocery retail, customer service, shelf stocking",
    staffCountHK: "40–70",
    vacancies: 5,
    salary: "HK$65 – HK$80 / hour",
  },
  {
    id: "job-16",
    rank: 16,
    position: "Logistics Tracker",
    company: "RapidRoute Sdn Bhd",
    type: "Full-time",
    location: "Port Klang",
    matchScore: 68.9,
    businessNature: "Freight and logistics tracking",
    productsServices: "Shipment tracking, dispatch coordination, status updates",
    staffCountHK: "90–130",
    vacancies: 2,
    salary: "HK$13,500 – HK$16,500 / month",
  },
  {
    id: "job-17",
    rank: 17,
    position: "Community Outreach Aide",
    company: "SEN Pathways NGO",
    type: "Contract",
    location: "Cheras",
    matchScore: 67.5,
    businessNature: "Non-profit community support for SEN youth",
    productsServices: "Outreach events, family liaison, workshop support",
    staffCountHK: "10–20",
    ownershipLocation: "Hong Kong / Malaysia",
    vacancies: 2,
    salary: "HK$12,000 – HK$14,500 / month (contract)",
  },
  {
    id: "job-18",
    rank: 18,
    position: "Lab Assistant",
    company: "BioHarvest Research",
    type: "Internship",
    location: "Serdang",
    matchScore: 66.2,
    businessNature: "Agricultural biotechnology research",
    productsServices: "Lab sample prep, equipment cleaning, data logging",
    staffCountHK: "25–45",
    vacancies: 2,
    salary: "HK$8,500 – HK$10,500 / month (internship allowance)",
  },
  {
    id: "job-19",
    rank: 19,
    position: "Content Writer (Junior)",
    company: "CareerSpark Agency",
    type: "Contract",
    location: "Remote",
    matchScore: 64.8,
    businessNature: "Career content and communications agency",
    productsServices: "Blog posts, job guides, social captions",
    staffCountHK: "12–25",
    vacancies: 1,
    languageSpeaking: "English",
    languageWriting: "English (required), Chinese (preferred)",
    salary: "HK$12,000 – HK$15,000 / month (contract / remote)",
  },
  {
    id: "job-20",
    rank: 20,
    position: "Workshop Facilitator Aide",
    company: "UpSkill Academy",
    type: "Part-time",
    location: "Petaling Jaya",
    matchScore: 63.4,
    businessNature: "Skills training and workshop facilitation",
    productsServices: "Job-readiness workshops, classroom assistance",
    staffCountHK: "15–30",
    vacancies: 3,
    salary: "HK$80 – HK$100 / hour",
  },
];

export const MOCK_JOBS: JobMatch[] = JOB_SEEDS.map(buildJob);

export function getJobById(id: string): JobMatch | undefined {
  return MOCK_JOBS.find((job) => job.id === id);
}

export const MOCK_CMF: CmfProfile = {
  overall: 7.4,
  topCategory: "Cognitive Tasks",
  topAttitude: "Willing to Learn",
  generatedAt: "Nov 15, 2024",
  categories: [
    {
      id: "work-environment",
      roman: "I",
      name: "Work Environment",
      description:
        "Suitability for the physical and environmental demands of the role",
      subCapabilities: [
        { name: "Enjoys outdoor work", score: 7.2 },
        { name: "Likes routine tasks", score: 8.1 },
        { name: "Adapts to changes", score: 6.4 },
        { name: "Tidiness", score: 7.8 },
      ],
    },
    {
      id: "teamwork-independence",
      roman: "II",
      name: "Teamwork & Independence",
      description: "Ability to collaborate and work autonomously",
      subCapabilities: [
        { name: "Teamwork", score: 8.0 },
        { name: "Solo work", score: 7.1 },
        { name: "Decision making", score: 6.5 },
        { name: "Communication skills", score: 7.6 },
      ],
    },
    {
      id: "physical-capabilities",
      roman: "III",
      name: "Physical Capabilities",
      description: "Physical fitness and comfort with manual tasks",
      subCapabilities: [
        { name: "Strong physical skills", score: 6.8 },
        { name: "Enjoys hands-on work", score: 8.4 },
        { name: "Environment endurance", score: 7.0 },
        { name: "Body coordination", score: 7.3 },
      ],
    },
    {
      id: "work-competence",
      roman: "IV",
      name: "Work Competence",
      description: "Affinity and motivation for the specific work domain",
      subCapabilities: [
        { name: "Loves Plants & Fish", score: 8.7 },
        { name: "Understand life cycle", score: 7.9 },
        { name: "Persistence", score: 8.2 },
        { name: "Passionate", score: 8.5 },
      ],
    },
    {
      id: "cognitive-tasks",
      roman: "V",
      name: "Cognitive Tasks",
      description: "Intellectual capability for job-related challenges",
      subCapabilities: [
        { name: "Problem solving", score: 8.8 },
        { name: "Learning ability", score: 9.1 },
        { name: "Observant", score: 8.3 },
        { name: "Critical thinking", score: 7.9 },
      ],
    },
    {
      id: "detail-oriented",
      roman: "VI",
      name: "Detail-Oriented Tasks",
      description: "Precision and consistency in task execution",
      subCapabilities: [
        { name: "Attention to detail", score: 8.6 },
        { name: "Patience", score: 7.7 },
        { name: "Accuracy", score: 8.0 },
        { name: "Discipline", score: 7.4 },
      ],
    },
  ],
  attitudes: [
    { name: "Calm", score: 7.5 },
    { name: "Empathy", score: 8.1 },
    { name: "Diligence", score: 8.4 },
    { name: "Willing to Learn", score: 9.2 },
    { name: "Punctuality", score: 8.0 },
    { name: "Responsibility", score: 8.6 },
    { name: "Flexibility", score: 7.2 },
    { name: "Proactiveness", score: 7.8 },
  ],
};

export const MOCK_DEMOGRAPHIC = {
  fullName: "Amirah Binti Hassan",
  username: "amirah.hassan",
  age: 22,
  education: "Bachelor's Degree",
  experienceYears: 1,
  location: "Kuala Lumpur",
  disabilityProfile: "Not disclosed",
  preferredWorkMode: "On-site / Hybrid",
};
