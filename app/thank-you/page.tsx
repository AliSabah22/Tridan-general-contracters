import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for contacting Tridan General Construction. We'll be in touch soon.",
  robots: "noindex, nofollow",
};

export default function ThankYouPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
      <h1 className="text-3xl font-bold text-neutral-900">Thank You</h1>
      <p className="mt-4 text-lg text-neutral-600">
        We&apos;ve received your request and will contact you shortly. If you need to reach us right away, call us at{" "}
        <a href={`tel:${SITE.phoneRaw}`} className="font-semibold text-primary-600 hover:underline">{SITE.phone}</a>.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link href="/" className="rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white hover:bg-primary-700">
          Back to Home
        </Link>
        <Link href="/contact" className="rounded-lg border-2 border-neutral-300 px-6 py-3 font-semibold text-neutral-700 hover:bg-neutral-50">
          Contact Again
        </Link>
      </div>
    </section>
  );
}
