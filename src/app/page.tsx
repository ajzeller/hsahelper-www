import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/icon";
import { HSACalculator } from "@/components/hsa-calculator";
import { APP_URL } from "@/lib/sites";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#calculator", label: "Calculator" },
  { href: "#faq", label: "FAQ" },
];

const pricingFeatures = [
  "Unlimited receipts",
  "AI receipt scanning",
  "Auto-extract totals & dates",
  "Encrypted receipt vault",
  "Reimbursement tracking",
  "CSV export",
];

const faqs = [
  {
    q: "What is an HSA?",
    a: "A Health Savings Account (HSA) is a tax-advantaged account you can use to pay for qualified medical expenses. Contributions are tax-deductible, growth is tax-free, and withdrawals for eligible expenses are also tax-free — a triple tax advantage.",
  },
  {
    q: "What can I use HSA funds for?",
    a: "HSA funds can be used for thousands of qualified medical expenses including doctor visits, prescriptions, dental and vision care, mental health services, and more. After age 65, you can use funds for any expense (subject to ordinary income tax).",
  },
  {
    q: "Why should I keep my receipts?",
    a: "The IRS requires you to substantiate any HSA withdrawal with documentation. If you defer reimbursements to maximize tax-free growth, you'll need receipts from years ago to avoid penalties. HSA Helper keeps them safe for you.",
  },
  {
    q: "What does 'deferring reimbursements' mean?",
    a: "You can pay out-of-pocket for eligible expenses today, save the receipts, and reimburse yourself years later — with no time limit. Meanwhile, your HSA grows tax-free. This strategy can meaningfully increase your retirement savings.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. Your receipts are stored with AES-256 encryption at rest, and all data in transit is encrypted with TLS. We never sell your data.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Absolutely. You can cancel your subscription at any time from your account settings. Your data remains accessible through the end of your billing period.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col text-zinc-900">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 py-3 max-w-6xl mx-auto w-full">
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <Image src="/icon.svg" alt="HSA Helper" width={32} height={32} />
            <span className="text-base font-semibold text-blue-600">HSA Helper</span>
          </Link>
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors rounded-md hover:bg-zinc-100/70"
              >
                {link.label}
              </a>
            ))}
            <div className="w-px h-4 bg-zinc-200 mx-2" />
            <Link
              href={APP_URL}
              className="px-3 py-1.5 text-sm font-medium text-zinc-700 hover:text-zinc-900 border border-zinc-200 hover:border-zinc-300 rounded-md transition-colors"
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

      <main className="relative z-10 flex-1">
        {/* Hero */}
        <section className="flex items-center px-6 py-16">
          <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
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
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-3 w-full">
                <FeatureCard icon="auto_awesome" tone="info" label="AI Receipt Scanning" desc="Auto-extract totals & dates" />
                <FeatureCard icon="payments" tone="success" label="Reimbursement Tracking" desc="Never lose a receipt" />
                <FeatureCard icon="lock" tone="neutral" label="Secure Vault" desc="Encrypted receipt storage" />
              </div>
            </div>
            <div className="flex-1 min-w-0 w-full lg:max-w-[65%]">
              <div
                className="rounded-xl border border-zinc-200 shadow-2xl shadow-zinc-200/60 overflow-hidden aspect-[4/3]"
                style={{
                  background: "repeating-linear-gradient(-45deg, #e4e4e7 0px, #e4e4e7 1px, #f4f4f5 1px, #f4f4f5 12px)",
                }}
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="px-6 py-20 bg-zinc-50/60 border-t border-zinc-200/60">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-900 tracking-tight mb-3">
                Everything you need to maximize your HSA
              </h2>
              <p className="text-base text-zinc-500 max-w-xl mx-auto">
                Stop leaving money on the table. HSA Helper handles the paperwork so you can focus on staying healthy.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <BigFeatureCard
                icon="auto_awesome"
                title="AI Receipt Scanning"
                desc="Snap a photo and let AI extract the merchant, amount, and date automatically. No manual data entry required."
              />
              <BigFeatureCard
                icon="folder_open"
                title="Receipt Vault"
                desc="Every receipt is stored securely with AES-256 encryption. Retrieve anything instantly — even receipts from years ago."
              />
              <BigFeatureCard
                icon="payments"
                title="Reimbursement Tracking"
                desc="Know exactly which expenses are pending, partially reimbursed, or fully settled. Never lose track of what you're owed."
              />
              <BigFeatureCard
                icon="query_stats"
                title="HSA Growth Projection"
                desc="See how deferring reimbursements could grow your retirement savings. Interactive charts show your potential wealth at retirement."
              />
              <BigFeatureCard
                icon="download"
                title="CSV Export"
                desc="Export your expense history for tax season or your own records. Formatted and ready for your accountant."
              />
              <BigFeatureCard
                icon="notifications"
                title="Smart Reminders"
                desc="Get notified about contribution limits, eligible expense opportunities, and reimbursement milestones."
              />
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="px-6 py-20 border-t border-zinc-200/60">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-900 tracking-tight mb-3">
                How it works
              </h2>
              <p className="text-base text-zinc-500 max-w-xl mx-auto">
                Get started in minutes. No complicated setup — just connect and go.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  icon: "add_card",
                  title: "Add your HSA account",
                  desc: "Enter your HSA balance and link your account details. Takes less than two minutes.",
                },
                {
                  step: "2",
                  icon: "receipt_long",
                  title: "Log expenses & upload receipts",
                  desc: "Snap a photo of any medical receipt. AI extracts the details and files it automatically.",
                },
                {
                  step: "3",
                  icon: "savings",
                  title: "Watch your savings grow",
                  desc: "Track unreimbursed balances, defer strategically, and see the long-term impact on your retirement.",
                },
              ].map(({ step, icon, title, desc }) => (
                <div key={step} className="flex flex-col items-center text-center">
                  <div className="relative mb-5">
                    <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-md shadow-blue-200">
                      <Icon icon={icon} size={26} className="text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-white border border-zinc-200 rounded-full text-[10px] font-bold text-zinc-500 flex items-center justify-center shadow-sm">
                      {step}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-zinc-900 mb-2">{title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="px-6 py-20 bg-zinc-50/60 border-t border-zinc-200/60">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-900 tracking-tight mb-3">
                Simple pricing
              </h2>
              <p className="text-base text-zinc-500 max-w-xl mx-auto">
                One plan. Everything included. Try free for 30 days.
              </p>
            </div>
            <div className="max-w-sm mx-auto">
              <div className="p-8 bg-blue-600 rounded-2xl flex flex-col">
                <div className="mb-6">
                  <div className="flex items-end gap-1">
                    <span className="text-5xl font-semibold text-white">$39</span>
                    <span className="text-blue-200 text-sm mb-1.5">/ year</span>
                  </div>
                  <p className="text-blue-200 text-sm mt-0.5">or $4 / month</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pricingFeatures.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-blue-50">
                      <Icon icon="check" size={16} className="text-blue-300 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`${APP_URL}/signup`}
                  className="inline-flex items-center justify-center px-4 py-2.5 bg-white hover:bg-blue-50 text-blue-700 font-semibold rounded-md transition-colors text-sm"
                >
                  Start free trial
                </Link>
              </div>
            </div>
            <p className="text-center text-xs text-zinc-400 mt-8">
              No credit card required. Cancel anytime.
            </p>
          </div>
        </section>

        {/* Calculator */}
        <section id="calculator" className="px-6 py-20 border-t border-zinc-200/60">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-900 tracking-tight mb-3">
                HSA Growth Calculator
              </h2>
              <p className="text-base text-zinc-500 max-w-xl mx-auto">
                See how deferring reimbursements could grow your retirement wealth. Plug in your numbers and explore the scenarios.
              </p>
            </div>
            <HSACalculator />
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="px-6 py-20 bg-zinc-50/60 border-t border-zinc-200/60">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-900 tracking-tight mb-3">
                Frequently asked questions
              </h2>
              <p className="text-base text-zinc-500">
                Have a question not listed here?{" "}
                <a href="mailto:support@hsahelper.app" className="text-blue-600 hover:underline">
                  Reach out anytime.
                </a>
              </p>
            </div>
            <div className="divide-y divide-zinc-200">
              {faqs.map(({ q, a }) => (
                <div key={q} className="py-5">
                  <p className="text-sm font-semibold text-zinc-900 mb-1.5">{q}</p>
                  <p className="text-sm text-zinc-500 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-200/70 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-xs">
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/icon.svg" alt="HSA Helper" width={32} height={32} />
              <span className="text-base font-semibold text-blue-600">HSA Helper</span>
            </Link>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Effortless HSA receipt tracking, powered by AI. Never miss a tax-free dollar.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-3 gap-x-16 gap-y-8 text-sm">
            <div className="flex flex-col gap-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400">Product</p>
              <a href="#features" className="text-zinc-600 hover:text-zinc-900 transition-colors">Features</a>
              <a href="#how-it-works" className="text-zinc-600 hover:text-zinc-900 transition-colors">How it works</a>
              <a href="#pricing" className="text-zinc-600 hover:text-zinc-900 transition-colors">Pricing</a>
              <a href="#calculator" className="text-zinc-600 hover:text-zinc-900 transition-colors">Calculator</a>
              <a href="#faq" className="text-zinc-600 hover:text-zinc-900 transition-colors">FAQ</a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400">Legal</p>
              <Link href="/privacy" className="text-zinc-600 hover:text-zinc-900 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-zinc-600 hover:text-zinc-900 transition-colors">Terms of Service</Link>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400">Support</p>
              <a href="mailto:support@hsahelper.app" className="text-zinc-600 hover:text-zinc-900 transition-colors">Contact Us</a>
              <Link href="/blog" className="text-zinc-600 hover:text-zinc-900 transition-colors">Blog</Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-100">
          <div className="max-w-6xl mx-auto px-6 py-4 text-xs text-zinc-400">
            © {new Date().getFullYear()} HSA Helper. All rights reserved.
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
      <div className={`w-9 h-9 rounded-md flex items-center justify-center mb-3 ${toneStyles[tone]}`}>
        <Icon icon={icon} size={20} />
      </div>
      <p className="text-sm font-semibold text-zinc-900">{label}</p>
      <p className="text-xs text-zinc-500 mt-0.5">{desc}</p>
    </div>
  );
}

function BigFeatureCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="p-6 bg-white border border-zinc-200 rounded-xl hover:border-zinc-300 hover:shadow-sm transition-all">
      <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
        <Icon icon={icon} size={22} />
      </div>
      <h3 className="text-sm font-semibold text-zinc-900 mb-1.5">{title}</h3>
      <p className="text-sm text-zinc-500 leading-relaxed">{desc}</p>
    </div>
  );
}
