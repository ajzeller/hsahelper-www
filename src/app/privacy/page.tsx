import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/icon";
import { APP_URL } from "@/lib/sites";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — HSA Helper",
  description: "Privacy Policy for HSA Helper.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col text-zinc-900">
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
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-semibold text-zinc-900 tracking-tight mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-zinc-500 mb-10">Last updated May 10, 2026</p>

          <div className="space-y-8 text-sm text-zinc-700 leading-relaxed">
            <Section title="1. Information We Collect">
              We collect information you provide directly when creating an account and using the Service,
              including your name, email address, healthcare expense details (provider, date, amount,
              category), and receipt images you upload. We also automatically collect certain technical
              data — such as your IP address, browser type, and pages visited — to operate and improve
              the Service.
            </Section>

            <Section title="2. How We Use Your Information">
              We use your information to provide and maintain the Service, including displaying your
              expense history, calculating reimbursement totals, and generating tax summaries. We use
              your email address to send account-related communications such as magic link sign-in emails.
              We do not use your data for advertising and we do not sell your personal information to
              any third party.
            </Section>

            <Section title="3. Receipt and Financial Data">
              Receipt images you upload are stored securely using Supabase Storage and are encrypted at
              rest. Access to your files is restricted to your account through row-level security policies
              — no other user can access your data. When you use the AI receipt scanning feature, your
              receipt image is sent to Google Gemini solely to extract expense details on your behalf.
              This data is not used to train Google&apos;s models under our usage terms. You can delete
              your receipts and expense data at any time from within the app.
            </Section>

            <Section title="4. Third-Party Service Providers">
              We use the following third-party services to operate HSA Helper:
              <ul className="mt-2 space-y-1 list-disc list-inside text-zinc-600">
                <li><span className="font-medium text-zinc-700">Supabase</span> — database, authentication, and file storage</li>
                <li><span className="font-medium text-zinc-700">Vercel</span> — web hosting and deployment</li>
                <li><span className="font-medium text-zinc-700">Google Gemini</span> — AI-powered receipt data extraction</li>
              </ul>
              <span className="block mt-2">
                Each provider processes data only as necessary to deliver their service and is bound by
                their own privacy policies and data processing agreements.
              </span>
            </Section>

            <Section title="5. Data Retention">
              We retain your account and expense data for as long as your account is active. If you
              delete your account, we will permanently delete your data within 30 days, except where
              retention is required by law. You can request account deletion by contacting us at{" "}
              <a href="mailto:support@hsahelper.com" className="text-blue-600 hover:underline">
                support@hsahelper.com
              </a>.
            </Section>

            <Section title="6. Security">
              We implement industry-standard security measures including TLS encryption in transit and
              encryption at rest for stored data. Access to your data is enforced at the database level
              using row-level security — meaning your data is only accessible to your account, even within
              our infrastructure. That said, no method of transmission over the internet is completely
              secure, and we cannot guarantee absolute security.
            </Section>

            <Section title="7. Administrator Access">
              As the operator of HSA Helper, we have administrative access to the underlying database and
              storage infrastructure. This access exists for operational purposes such as debugging and
              maintenance. We do not access individual user data except when necessary to resolve a
              technical issue or when required by law. This is standard practice for cloud-hosted
              software services and is disclosed here for full transparency.
            </Section>

            <Section title="8. Cookies">
              We use cookies to maintain your authenticated session. These are strictly necessary for the
              Service to function and are not used for advertising or cross-site tracking. You can
              configure your browser to block cookies, but the Service will not work without them.
            </Section>

            <Section title="9. Children's Privacy">
              The Service is not directed to children under 13. We do not knowingly collect personal
              information from anyone under 13. If you believe we have inadvertently collected such
              information, please contact us and we will delete it promptly.
            </Section>

            <Section title="10. Changes to This Policy">
              We may update this Privacy Policy from time to time. We will notify registered users of
              material changes by email. The date at the top of this page reflects when the policy was
              last revised. Continued use of the Service after changes constitutes acceptance of the
              updated Policy.
            </Section>

            <Section title="11. Contact">
              If you have questions or concerns about this Privacy Policy or how we handle your data,
              please contact us at{" "}
              <a href="mailto:support@hsahelper.com" className="text-blue-600 hover:underline">
                support@hsahelper.com
              </a>.
            </Section>
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

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-base font-semibold text-zinc-900 mb-2">{title}</h2>
      <p>{children}</p>
    </div>
  );
}
