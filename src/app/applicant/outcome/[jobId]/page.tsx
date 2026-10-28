import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Building2, Briefcase } from "lucide-react";
import MatchBar from "@/components/MatchBar";
import { MOCK_JOBS } from "@/lib/mock-data";

type DetailField = {
  label: string;
  value: string;
  multiline?: boolean;
};

function DetailSection({
  title,
  icon,
  fields,
}: {
  title: string;
  icon: ReactNode;
  fields: DetailField[];
}) {
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50/80 px-5 py-3.5">
        {icon}
        <h2 className="text-sm font-bold tracking-wide text-slate-700 uppercase">
          {title}
        </h2>
      </div>
      <dl className="divide-y divide-slate-100">
        {fields.map((field) => (
          <div
            key={field.label}
            className="grid gap-1 px-5 py-4 sm:grid-cols-[240px_1fr] sm:items-start"
          >
            <dt className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
              {field.label}
            </dt>
            <dd
              className={`text-sm text-slate-800 ${
                field.multiline ? "leading-relaxed whitespace-pre-wrap" : ""
              }`}
            >
              {field.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ jobId: string }>;
}) {
  const { jobId } = await params;
  const job = MOCK_JOBS.find((item) => item.id === jobId);

  if (!job) {
    notFound();
  }

  const { companyInfo, jobInfo } = job;

  const companyFields: DetailField[] = [
    { label: "Company / Organization", value: companyInfo.organization },
    { label: "Job Title / Job Nature", value: companyInfo.jobTitleNature },
    { label: "Website", value: companyInfo.website },
    { label: "Business Nature", value: companyInfo.businessNature },
    { label: "Product / Services", value: companyInfo.productsServices },
    {
      label: "Location of Company Ownership",
      value: companyInfo.ownershipLocation,
    },
    {
      label: "No. of staff (approx.) in Hong Kong",
      value: companyInfo.staffCountHK,
    },
    {
      label: "Brief Introduction of the Company / Organization",
      value: companyInfo.briefIntroduction,
      multiline: true,
    },
  ];

  const jobFields: DetailField[] = [
    { label: "Position Offered", value: jobInfo.positionOffered },
    { label: "No. of vacancies", value: String(jobInfo.vacancies) },
    { label: "Employment Type", value: jobInfo.employmentType },
    {
      label: "Job Description",
      value: jobInfo.jobDescription,
      multiline: true,
    },
    { label: "Work Location", value: jobInfo.workLocation },
    {
      label: "Language Requirement (Speaking)",
      value: jobInfo.languageSpeaking,
    },
    {
      label: "Language Requirement (Writing)",
      value: jobInfo.languageWriting,
    },
    {
      label: "Other Requirement",
      value: jobInfo.otherRequirement,
      multiline: true,
    },
    {
      label: "Application Method",
      value: jobInfo.applicationMethod,
      multiline: true,
    },
    { label: "Salary", value: jobInfo.salary },
  ];

  return (
    <div>
      <Link
        href="/applicant/outcome"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition hover:text-blue-600"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Recommended Jobs
      </Link>

      <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold tracking-wide text-blue-600 uppercase">
            Rank #{String(job.rank).padStart(2, "0")}
          </p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {job.position}
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            {job.company} · {job.type} · {job.location}
          </p>
        </div>
        <div className="min-w-[180px] rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
          <p className="text-xs font-semibold tracking-wide text-slate-400 uppercase">
            Match Score
          </p>
          <div className="mt-2">
            <MatchBar score={job.matchScore} />
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-6">
        <DetailSection
          title="Company Information"
          icon={<Building2 className="h-4 w-4 text-blue-600" />}
          fields={companyFields}
        />
        <DetailSection
          title="Job Information"
          icon={<Briefcase className="h-4 w-4 text-blue-600" />}
          fields={jobFields}
        />
      </div>
    </div>
  );
}
