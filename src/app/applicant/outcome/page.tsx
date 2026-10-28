"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronRight, Search } from "lucide-react";
import MatchBar from "@/components/MatchBar";
import { MOCK_JOBS } from "@/lib/mock-data";

export default function OutcomePage() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const jobs = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return MOCK_JOBS;
    return MOCK_JOBS.filter(
      (job) =>
        job.position.toLowerCase().includes(q) ||
        job.company.toLowerCase().includes(q) ||
        job.location.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Recommended Jobs
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Top 20 matches based on your game results and CMF profile. Click a
            job to view full details.
          </p>
        </div>
        <div className="inline-flex items-center self-start rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-500">
          Generated · Nov 15, 2024
        </div>
      </div>

      <div className="relative mt-6">
        <Search className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter by title or company..."
          className="w-full rounded-xl border border-slate-200 bg-white py-3 pr-4 pl-10 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-slate-100 bg-slate-50/80 text-xs font-semibold tracking-wide text-slate-500 uppercase">
              <tr>
                <th className="px-4 py-3.5 sm:px-5">#</th>
                <th className="px-4 py-3.5 sm:px-5">Position</th>
                <th className="px-4 py-3.5 sm:px-5">Company</th>
                <th className="px-4 py-3.5 sm:px-5">Type</th>
                <th className="px-4 py-3.5 sm:px-5">Location</th>
                <th className="px-4 py-3.5 sm:px-5">Match</th>
                <th className="px-4 py-3.5 sm:px-5">
                  <span className="sr-only">Details</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr
                  key={job.id}
                  role="link"
                  tabIndex={0}
                  onClick={() => router.push(`/applicant/outcome/${job.id}`)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      router.push(`/applicant/outcome/${job.id}`);
                    }
                  }}
                  className="cursor-pointer border-b border-slate-100 last:border-0 transition hover:bg-blue-50/50 focus-visible:bg-blue-50/50 focus-visible:outline-none"
                >
                  <td className="px-4 py-4 font-medium text-slate-400 tabular-nums sm:px-5">
                    {String(job.rank).padStart(2, "0")}
                  </td>
                  <td className="px-4 py-4 font-semibold text-slate-900 sm:px-5">
                    {job.position}
                  </td>
                  <td className="px-4 py-4 text-slate-600 sm:px-5">
                    {job.company}
                  </td>
                  <td className="px-4 py-4 text-slate-600 sm:px-5">{job.type}</td>
                  <td className="px-4 py-4 text-slate-600 sm:px-5">
                    {job.location}
                  </td>
                  <td className="px-4 py-4 sm:px-5">
                    <MatchBar score={job.matchScore} />
                  </td>
                  <td className="px-4 py-4 text-slate-300 sm:px-5">
                    <ChevronRight className="h-4 w-4" />
                  </td>
                </tr>
              ))}
              {jobs.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="px-5 py-10 text-center text-sm text-slate-500"
                  >
                    No jobs match your filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
