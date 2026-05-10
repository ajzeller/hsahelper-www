import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center">
      <Image src="/icon.svg" alt="HSA Helper" width={64} height={64} className="mb-6" />
      <h1 className="text-4xl font-bold text-zinc-900 mb-4">HSA Helper</h1>
      <p className="text-lg text-zinc-500 max-w-md mb-8">
        Smart HSA expense tracking with AI-powered receipt scanning, reimbursement management, and retirement projections.
      </p>
      <Link
        href="https://app.hsahelper.com"
        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
      >
        Open App
      </Link>
    </main>
  );
}
