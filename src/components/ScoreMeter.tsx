type ScoreMeterProps = {
  score: number;
  max?: number;
  tone?: "blue" | "emerald" | "violet";
};

const tones = {
  blue: "bg-blue-500",
  emerald: "bg-emerald-500",
  violet: "bg-violet-500",
};

export default function ScoreMeter({
  score,
  max = 10,
  tone = "blue",
}: ScoreMeterProps) {
  const pct = Math.max(0, Math.min(100, (score / max) * 100));

  return (
    <div className="flex items-center gap-3">
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
        <div
          className={`h-full rounded-full ${tones[tone]}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="w-10 text-right text-sm font-semibold tabular-nums text-slate-700">
        {score.toFixed(1)}
      </span>
    </div>
  );
}
