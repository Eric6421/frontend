export type UserRole = "applicant" | "employer";

export interface AuthUser {
  username: string;
  role: UserRole;
  displayName: string;
}

export type EmploymentType =
  | "Full-time"
  | "Part-time"
  | "Contract"
  | "Internship";

export interface JobCompanyInfo {
  organization: string;
  jobTitleNature: string;
  website: string;
  businessNature: string;
  productsServices: string;
  ownershipLocation: string;
  staffCountHK: string;
  briefIntroduction: string;
}

export interface JobPostingInfo {
  positionOffered: string;
  vacancies: number;
  employmentType: EmploymentType;
  jobDescription: string;
  workLocation: string;
  languageSpeaking: string;
  languageWriting: string;
  otherRequirement: string;
  applicationMethod: string;
  salary: string;
}

export interface JobMatch {
  id: string;
  rank: number;
  position: string;
  company: string;
  type: EmploymentType;
  location: string;
  matchScore: number;
  companyInfo: JobCompanyInfo;
  jobInfo: JobPostingInfo;
}

export interface CmfSubCapability {
  name: string;
  score: number;
}

export interface CmfCategory {
  id: string;
  roman: string;
  name: string;
  description: string;
  subCapabilities: CmfSubCapability[];
}

export interface CmfAttitude {
  name: string;
  score: number;
}

export interface CmfProfile {
  overall: number;
  topCategory: string;
  topAttitude: string;
  categories: CmfCategory[];
  attitudes: CmfAttitude[];
  generatedAt: string;
}
