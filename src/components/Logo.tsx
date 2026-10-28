type LogoProps = {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
};

const sizeMap = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
};

export default function Logo({ size = "md", showText = true }: LogoProps) {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className={`${sizeMap[size]} flex items-center justify-center rounded-xl bg-[#2563EB] shadow-sm`}
        aria-hidden
      >
        <svg
          viewBox="0 0 24 24"
          className="h-[55%] w-[55%] text-white"
          fill="currentColor"
        >
          <path d="M12 2.5l1.6 4.4 4.6.2-3.6 2.9 1.2 4.5L12 12.8 8.2 14.5l1.2-4.5-3.6-2.9 4.6-.2L12 2.5z" />
          <circle cx="12" cy="12" r="2.2" />
        </svg>
      </div>
      {showText && (
        <span className="text-xl font-bold tracking-tight text-[#0F172A]">
          UpCareer
        </span>
      )}
    </div>
  );
}
