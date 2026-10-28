import { MOCK_DEMOGRAPHIC } from "@/lib/mock-data";

const fields = [
  { label: "Full name", value: MOCK_DEMOGRAPHIC.fullName },
  { label: "Username", value: MOCK_DEMOGRAPHIC.username },
  { label: "Age", value: String(MOCK_DEMOGRAPHIC.age) },
  { label: "Education", value: MOCK_DEMOGRAPHIC.education },
  {
    label: "Experience",
    value: `${MOCK_DEMOGRAPHIC.experienceYears} year(s)`,
  },
  { label: "Location", value: MOCK_DEMOGRAPHIC.location },
  {
    label: "Disability profile",
    value: MOCK_DEMOGRAPHIC.disabilityProfile,
  },
  {
    label: "Preferred work mode",
    value: MOCK_DEMOGRAPHIC.preferredWorkMode,
  },
];

export default function DemographicPage() {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Demographic
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Personal information used by the recommendation system. Verify that
          these details are complete and accurate.
        </p>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <dl className="divide-y divide-slate-100">
          {fields.map((field) => (
            <div
              key={field.label}
              className="grid gap-1 px-5 py-4 sm:grid-cols-[220px_1fr] sm:items-center"
            >
              <dt className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                {field.label}
              </dt>
              <dd className="text-sm font-medium text-slate-900">{field.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
