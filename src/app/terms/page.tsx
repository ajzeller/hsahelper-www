import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/icon";
import { APP_URL } from "@/lib/sites";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — HSA Helper",
  description: "Terms of Service for HSA Helper.",
};

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-sm text-zinc-500 mb-10">Last updated May 10, 2026</p>

          <div className="space-y-8 text-sm text-zinc-700 leading-relaxed">
            <Section title="1. Acceptance of Terms">
              By creating an account or using HSA Helper ("Service"), you agree to be bound by these
              Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Service.
              These Terms constitute a legally binding agreement between you and HSA Helper.
            </Section>

            <Section title="2. Description of Service">
              HSA Helper is a personal finance tool that helps you track Health Savings Account (HSA)
              expenses, store and organize receipts, record reimbursements, and project long-term HSA
              growth. The Service is provided for informational and organizational purposes only.{" "}
              <strong className="font-semibold text-zinc-900">
                HSA Helper does not provide financial, tax, or legal advice.
              </strong>{" "}
              You are solely responsible for the accuracy of data you enter and for consulting a
              qualified professional regarding your tax obligations.
            </Section>

            <Section title="3. Eligibility">
              You must be at least 18 years old and a resident of the United States to use the Service.
              By using HSA Helper, you represent and warrant that you meet these requirements. Accounts
              found to be in violation may be suspended or terminated.
            </Section>

            <Section title="4. Account Responsibilities">
              You are responsible for maintaining the confidentiality of your account credentials and
              for all activity that occurs under your account. You agree to provide accurate information
              when creating your account and to keep it up to date. Notify us immediately at{" "}
              <a href="mailto:support@hsahelper.com" className="text-blue-600 hover:underline">
                support@hsahelper.com
              </a>{" "}
              if you suspect unauthorized access to your account.
            </Section>

            <Section title="5. Acceptable Use">
              You agree to use the Service only for lawful purposes and in accordance with these Terms.
              You agree not to:
              <ul className="mt-2 space-y-1 list-disc list-inside text-zinc-600">
                <li>Upload false, fraudulent, or fabricated receipts or expense data</li>
                <li>Use the Service to claim improper HSA reimbursements or engage in tax fraud</li>
                <li>Attempt to gain unauthorized access to other users&apos; accounts or data</li>
                <li>Reverse-engineer, decompile, or attempt to extract the source code of the Service</li>
                <li>Use automated tools to scrape, crawl, or stress-test the Service</li>
                <li>Transmit malware, viruses, or any other malicious code</li>
              </ul>
            </Section>

            <Section title="6. Accuracy of Data">
              You are solely responsible for the accuracy and completeness of the expense data, receipt
              images, and other information you enter into the Service. HSA Helper does not verify the
              accuracy of your data and is not liable for errors, omissions, or misclassifications in
              your records. AI-assisted receipt extraction is provided as a convenience and may produce
              errors — you should review all extracted data before saving.
            </Section>

            <Section title="7. Intellectual Property">
              The Service, including its design, code, and content, is owned by HSA Helper and protected
              by applicable intellectual property laws. You retain ownership of the data and receipts you
              upload. You grant HSA Helper a limited license to store and process your content solely to
              provide the Service to you. You may not copy, modify, or distribute any part of the Service
              without prior written consent.
            </Section>

            <Section title="8. Termination">
              You may stop using the Service at any time and request account deletion by contacting{" "}
              <a href="mailto:support@hsahelper.com" className="text-blue-600 hover:underline">
                support@hsahelper.com
              </a>. We reserve the right to suspend or terminate your account if you violate these Terms
              or engage in conduct that we reasonably determine to be harmful to other users or the
              Service.
            </Section>

            <Section title="9. Disclaimer of Warranties">
              The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind,
              express or implied, including but not limited to warranties of merchantability, fitness for
              a particular purpose, or non-infringement. We do not warrant that the Service will be
              uninterrupted, error-free, or that data will never be lost. You use the Service at your
              own risk.
            </Section>

            <Section title="10. Limitation of Liability">
              To the fullest extent permitted by applicable law, HSA Helper and its operators shall not
              be liable for any indirect, incidental, special, consequential, or punitive damages —
              including loss of data, financial loss, or tax penalties — arising from your use of or
              inability to use the Service, even if we have been advised of the possibility of such
              damages.
            </Section>

            <Section title="11. Governing Law">
              These Terms are governed by the laws of the United States and the state in which HSA Helper
              operates, without regard to conflict of law principles. Any disputes arising from these
              Terms or your use of the Service shall be resolved in the courts of that jurisdiction.
            </Section>

            <Section title="12. Changes to Terms">
              We may update these Terms from time to time. We will notify registered users of material
              changes by email. The date at the top of this page reflects the last revision. Continued
              use of the Service after changes constitutes your acceptance of the revised Terms.
            </Section>

            <Section title="13. Contact">
              Questions about these Terms? Contact us at{" "}
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
      <div>{children}</div>
    </div>
  );
}
