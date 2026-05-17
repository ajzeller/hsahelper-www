import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/icon";
import { APP_URL } from "@/lib/sites";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — HSA Helper",
  description: "Tips, guides, and insights to help you get the most out of your Health Savings Account.",
};

const posts = [
  {
    slug: "what-is-an-hsa",
    title: "What Is an HSA and How Does It Work?",
    date: "May 8, 2026",
    readTime: "5 min read",
    excerpt:
      "A Health Savings Account lets you set aside pre-tax dollars for qualified medical expenses. Here's everything you need to know to get started.",
    tag: "Basics",
  },
  {
    slug: "hsa-eligible-expenses",
    title: "The Complete List of HSA-Eligible Expenses",
    date: "April 30, 2026",
    readTime: "8 min read",
    excerpt:
      "From doctor visits to dental work, the IRS defines what counts as a qualified expense. We break down the full list so you never miss a deduction.",
    tag: "Expenses",
  },
  {
    slug: "hsa-vs-fsa",
    title: "HSA vs. FSA: Which One Is Right for You?",
    date: "April 22, 2026",
    readTime: "6 min read",
    excerpt:
      "Both accounts offer tax advantages for healthcare costs, but they work very differently. Here's how to choose the right one for your situation.",
    tag: "Basics",
  },
  {
    slug: "keep-receipts",
    title: "Why You Should Keep Every Single HSA Receipt",
    date: "April 14, 2026",
    readTime: "4 min read",
    excerpt:
      "The IRS can audit HSA withdrawals years after the fact. Keeping receipts isn't just good practice — it could save you from a hefty penalty.",
    tag: "Tips",
  },
  {
    slug: "invest-your-hsa",
    title: "How to Invest Your HSA for Long-Term Growth",
    date: "April 5, 2026",
    readTime: "7 min read",
    excerpt:
      "Most people use their HSA like a debit card. But leaving a balance invested can turn it into a powerful retirement savings vehicle.",
    tag: "Investing",
  },
  {
    slug: "hsa-contribution-limits-2026",
    title: "HSA Contribution Limits for 2026",
    date: "March 28, 2026",
    readTime: "3 min read",
    excerpt:
      "The IRS updated HSA contribution limits for 2026. Here's how much you can put in this year — and why you should try to max it out.",
    tag: "Tips",
  },
];

const tagColors: Record<string, string> = {
  Basics: "bg-blue-50 text-blue-700",
  Expenses: "bg-emerald-50 text-emerald-700",
  Tips: "bg-amber-50 text-amber-700",
  Investing: "bg-purple-50 text-purple-700",
};

export default function BlogPage() {
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
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-semibold text-zinc-900 tracking-tight mb-3">
              Blog
            </h1>
            <p className="text-base text-zinc-600">
              Tips, guides, and insights to help you get the most out of your HSA.
            </p>
          </div>

          <div className="divide-y divide-zinc-200">
            {posts.map((post) => (
              <article key={post.slug} className="py-8 first:pt-0 last:pb-0 group">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="flex items-center gap-2 mb-2.5">
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-medium ${tagColors[post.tag] ?? "bg-zinc-100 text-zinc-600"}`}
                    >
                      {post.tag}
                    </span>
                    <span className="text-xs text-zinc-400">{post.date}</span>
                    <span className="text-xs text-zinc-300">·</span>
                    <span className="text-xs text-zinc-400">{post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-semibold text-zinc-900 mb-1.5 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-zinc-600 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center gap-1 mt-3 text-xs font-medium text-blue-600">
                    Read more
                    <Icon icon="arrow_forward" size={14} />
                  </div>
                </Link>
              </article>
            ))}
          </div>
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
