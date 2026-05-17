import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/icon";
import { APP_URL } from "@/lib/sites";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col text-zinc-900">
      {/* Subtle decorative background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] bg-zinc-100 rounded-full blur-3xl" />
      </div>

      {/* Nav */}
      <header className="relative z-10 border-b border-zinc-200/70 bg-white/70 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 py-3 max-w-6xl mx-auto w-full">
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image src="/icon.svg" alt="HSA Helper" width={32} height={32} />
            <span className="text-base font-semibold text-blue-600">
              HSA Helper
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href={APP_URL}
              className="px-3 py-1.5 text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors"
            >
              Sign in
            </Link>
            <Link
              href={`${APP_URL}/signup`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-md transition-colors shadow-sm"
            >
              Get started
              <Icon icon="arrow_forward" size={16} />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="relative z-10 flex-1 flex items-center px-6 py-16">
        <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left: text */}
          <div className="flex-1 min-w-0 flex flex-col items-start">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-zinc-900 leading-tight tracking-tight mb-5">
              HSA Receipt tracking{" "}
              <span className="text-blue-600">powered by AI</span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 mb-9 leading-relaxed">
              HSA Helper makes it effortless to log expenses, upload receipts, and
              track reimbursements — so you never miss a tax-free dollar.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-3 mb-12">
              <Link
                href={`${APP_URL}/signup`}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors shadow-sm text-base"
              >
                Try free for 30 days
                <Icon icon="arrow_forward" size={18} />
              </Link>
              <Link
                href={APP_URL}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white hover:bg-zinc-50 border border-zinc-200 text-zinc-800 font-semibold rounded-md transition-colors text-base"
              >
                Sign in
              </Link>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-3 w-full">
              <FeatureCard
                icon="auto_awesome"
                tone="info"
                label="AI Receipt Scanning"
                desc="Auto-extract totals & dates"
              />
              <FeatureCard
                icon="payments"
                tone="success"
                label="Reimbursement Tracking"
                desc="Never lose a receipt"
              />
              <FeatureCard
                icon="lock"
                tone="neutral"
                label="Secure Vault"
                desc="Encrypted receipt storage"
              />
            </div>
          </div>

          {/* Right: app screenshot */}
          <div className="flex-1 min-w-0 w-full lg:max-w-[65%]">
            <div className="rounded-xl border border-zinc-200 shadow-2xl shadow-zinc-200/60 overflow-hidden aspect-[4/3]"
              style={{
                background: "repeating-linear-gradient(-45deg, #e4e4e7 0px, #e4e4e7 1px, #f4f4f5 1px, #f4f4f5 12px)"
              }}
            />
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-200/70">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between text-xs text-zinc-500">
          <span>© {new Date().getFullYear()} HSA Helper</span>
          <div className="flex items-center gap-4">
            <Link href="/pricing" className="hover:text-zinc-800 transition-colors">Pricing</Link>
            <Link href="/blog" className="hover:text-zinc-800 transition-colors">Blog</Link>
            <Link href="/terms" className="hover:text-zinc-800 transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-zinc-800 transition-colors">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

const toneStyles: Record<"neutral" | "info" | "success", string> = {
  neutral: "bg-zinc-100 text-zinc-700",
  info: "bg-blue-50 text-blue-700",
  success: "bg-emerald-50 text-emerald-700",
};

function FeatureCard({
  icon,
  tone,
  label,
  desc,
}: {
  icon: string;
  tone: keyof typeof toneStyles;
  label: string;
  desc: string;
}) {
  return (
    <div className="text-left p-4 bg-white border border-zinc-200 rounded-xl hover:border-zinc-300 hover:shadow-sm transition-all">
      <div
        className={`w-9 h-9 rounded-md flex items-center justify-center mb-3 ${toneStyles[tone]}`}
      >
        <Icon icon={icon} size={20} />
      </div>
      <p className="text-sm font-semibold text-zinc-900">{label}</p>
      <p className="text-xs text-zinc-500 mt-0.5">{desc}</p>
    </div>
  );
}
