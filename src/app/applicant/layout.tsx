import AuthGuard from "@/components/AuthGuard";
import ApplicantNav from "@/components/ApplicantNav";

export default function ApplicantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard role="applicant">
      <div className="min-h-screen bg-[#F8FAFC]">
        <ApplicantNav />
        <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">{children}</main>
      </div>
    </AuthGuard>
  );
}
