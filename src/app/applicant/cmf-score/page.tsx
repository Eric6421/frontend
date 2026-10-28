import { Award, Brain, Sparkles } from "lucide-react";
import ScoreMeter from "@/components/ScoreMeter";
import { MOCK_CMF } from "@/lib/mock-data";

function categoryAverage(scores: number[]): number {
  return scores.reduce((sum, s) => sum + s, 0) / scores.length;
}

export default function CmfScorePage() {
  const { overall, topCategory, topAttitude, categories, attitudes, generatedAt } =
    MOCK_CMF;

  const topCategoryScore = (() => {
    const category = categories.find((c) => c.name === topCategory);
    if (!category) return 0;
    return categoryAverage(category.subCapabilities.map((s) => s.score));
  })();

  const topAttitudeScore =
    attitudes.find((a) => a.name === topAttitude)?.score ?? 0;

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            CMF Score
          </h1>
          <p className="mt-1 max-w-2xl text-sm text-slate-500">
            Your Career Matching Framework results from the farm game — 24
            competency indicators across 6 categories, plus 8 workplace
            attitudes.
          </p>
        </div>
        <div className="inline-flex items-center self-start rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-500">
          Generated · {generatedAt}
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
            <Sparkles className="h-4 w-4 text-blue-500" />
            Avg CMF Overall
          </div>
          <p className="mt-3 text-3xl font-bold text-blue-600 tabular-nums">
            {overall.toFixed(1)}
            <span className="ml-1 text-base font-medium text-slate-400">
              / 10
            </span>
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
            <Brain className="h-4 w-4 text-emerald-500" />
            Top Category
          </div>
          <div className="mt-3 flex items-end justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate text-xl font-bold text-slate-900">
                {topCategory}
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Highest competency group
              </p>
            </div>
            <p className="shrink-0 text-3xl font-bold text-emerald-600 tabular-nums">
              {topCategoryScore.toFixed(1)}
              <span className="ml-1 text-base font-medium text-slate-400">
                / 10
              </span>
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
            <Award className="h-4 w-4 text-violet-500" />
            Top Attitude
          </div>
          <div className="mt-3 flex items-end justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate text-xl font-bold text-slate-900">
                {topAttitude}
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Strongest workplace trait
              </p>
            </div>
            <p className="shrink-0 text-3xl font-bold text-violet-600 tabular-nums">
              {topAttitudeScore.toFixed(1)}
              <span className="ml-1 text-base font-medium text-slate-400">
                / 10
              </span>
            </p>
          </div>
        </div>
      </div>

      <section className="mt-8">
        <h2 className="text-lg font-bold text-slate-900">
          Competency Categories
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Six categories with four sub-capabilities each (score range 0–10).
        </p>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {categories.map((category) => {
            const avg = categoryAverage(
              category.subCapabilities.map((s) => s.score),
            );
            return (
              <article
                key={category.id}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-blue-600 uppercase">
                      Category {category.roman}
                    </p>
                    <h3 className="mt-1 text-base font-bold text-slate-900">
                      {category.name}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500">
                      {category.description}
                    </p>
                  </div>
                  <div className="rounded-xl bg-slate-50 px-3 py-2 text-center">
                    <p className="text-[10px] font-semibold tracking-wide text-slate-400 uppercase">
                      Avg
                    </p>
                    <p className="text-lg font-bold text-slate-800 tabular-nums">
                      {avg.toFixed(1)}
                    </p>
                  </div>
                </div>

                <ul className="mt-5 space-y-3.5">
                  {category.subCapabilities.map((sub) => (
                    <li key={sub.name}>
                      <div className="mb-1.5 flex items-center justify-between gap-2">
                        <span className="text-sm text-slate-600">{sub.name}</span>
                      </div>
                      <ScoreMeter
                        score={sub.score}
                        tone={sub.score >= 8.5 ? "emerald" : "blue"}
                      />
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-bold text-slate-900">
          Workplace Attitudes
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Eight attitude dimensions that cut across all recommended roles.
        </p>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {attitudes.map((attitude) => (
            <div
              key={attitude.name}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-semibold text-slate-800">
                  {attitude.name}
                </h3>
                <span className="text-sm font-bold text-violet-600 tabular-nums">
                  {attitude.score.toFixed(1)}
                </span>
              </div>
              <div className="mt-3">
                <ScoreMeter score={attitude.score} tone="violet" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <p className="mt-8 rounded-xl border border-dashed border-slate-200 bg-white/60 px-4 py-3 text-xs text-slate-500">
        Draft view — scores use mock game results. Live CMF values will be
        loaded from the FastAPI recommendation backend once the pipeline is
        connected.
      </p>
    </div>
  );
}
