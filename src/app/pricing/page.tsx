import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/icon";
import { APP_URL } from "@/lib/sites";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — HSA Helper",
  description: "Simple, transparent pricing for HSA Helper. Start free, upgrade when you need more.",
};

const freeTier = [
  "Up to 25 receipts per month",
  "Manual expense entry",
  "Basic reimbursement tracking",
  "CSV export",
];

const proTier = [
  "Unlimited receipts",
  "AI receipt scanning",
  "Auto-extract totals & dates",
  "Encrypted receipt vault",
  "Priority support",
  "Everything in Free",
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col text-zinc-900">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] bg-zinc-100 rounded-full blur-3xl" />
      </div>

      <header className="relative z-10 border-b border-zinc-200/70 bg-white/70 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 py-3 max-w-6xl mx-auto w-full">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/icon.svg" alt="HSA Helper" width={32} height={32} />
            <span className="text-base font-semibold text-blue-600">HSA Helper</span>
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

      <main className="relative z-10 flex-1 px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-semibold text-zinc-900 tracking-tight mb-4">
              Simple pricing
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 max-w-xl mx-auto">
              Start free. Upgrade when you need AI-powered scanning and unlimited storage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {/* Free */}
            <div className="p-6 bg-white border border-zinc-200 rounded-2xl flex flex-col">
              <div className="mb-5">
                <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-1">Free</p>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-semibold text-zinc-900">$0</span>
                  <span className="text-zinc-500 text-sm mb-1">/ month</span>
                </div>
                <p className="text-sm text-zinc-500 mt-2">For getting started.</p>
              </div>
              <ul className="space-y-2.5 flex-1 mb-6">
                {freeTier.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-700">
                    <Icon icon="check" size={16} className="text-zinc-400 mt-px shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={`${APP_URL}/signup`}
                className="inline-flex items-center justify-center px-4 py-2.5 bg-white border border-zinc-200 hover:bg-zinc-50 text-zinc-900 font-semibold rounded-md transition-colors text-sm"
              >
                Get started free
              </Link>
            </div>

            {/* Pro */}
            <div className="p-6 bg-blue-600 border border-blue-600 rounded-2xl flex flex-col">
              <div className="mb-5">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm font-semibold text-blue-200 uppercase tracking-wide">Pro</p>
                  <span className="px-1.5 py-0.5 bg-blue-500 text-blue-100 text-xs font-medium rounded">
                    Most popular
                  </span>
                </div>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-semibold text-white">$5</span>
                  <span className="text-blue-200 text-sm mb-1">/ month</span>
                </div>
                <p className="text-sm text-blue-200 mt-2">For power users.</p>
              </div>
              <ul className="space-y-2.5 flex-1 mb-6">
                {proTier.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-blue-50">
                    <Icon icon="check" size={16} className="text-blue-300 mt-px shrink-0" />
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
            No credit card required to start. Cancel anytime.
          </p>
        </div>
      </main>

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
