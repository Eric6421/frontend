type MatchBarProps = {
  score: number;
  className?: string;
};

function barColor(score: number): string {
  return score >= 83 ? "bg-emerald-500" : "bg-blue-500";
}

function textColor(score: number): string {
  return score >= 83 ? "text-emerald-600" : "text-blue-600";
}

export default function MatchBar({ score, className = "" }: MatchBarProps) {
  const width = Math.max(0, Math.min(100, score));

  return (
    <div className={`flex min-w-[140px] items-center gap-3 ${className}`}>
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
        <div
          className={`h-full rounded-full ${barColor(score)}`}
          style={{ width: `${width}%` }}
        />
      </div>
      <span className={`w-14 text-right text-sm font-semibold tabular-nums ${textColor(score)}`}>
        {score.toFixed(1)}%
      </span>
    </div>
  );
}
