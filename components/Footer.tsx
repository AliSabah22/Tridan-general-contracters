import Link from "next/link";
import { NAV_LINKS, LOCATION_PAGES, SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-100">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-bold text-neutral-900">{SITE.name}</p>
            <p className="mt-2 text-sm text-neutral-600">{SITE.serviceAreaStr}</p>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="mt-2 block text-sm font-medium text-primary-600 hover:underline"
            >
              {SITE.phone}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="block text-sm text-neutral-600 hover:underline"
            >
              {SITE.email}
            </a>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900">
              Pages
            </h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-neutral-600 hover:text-primary-600">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900">
              Service areas
            </h3>
            <ul className="mt-4 space-y-2">
              {LOCATION_PAGES.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-neutral-600 hover:text-primary-600">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900">
              Get in touch
            </h3>
            <p className="mt-4 text-sm text-neutral-600">
              Request a free estimate for your renovation project.
            </p>
            <Link
              href="/contact"
              className="mt-3 inline-block rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-700"
            >
              Contact us
            </Link>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200 pt-8">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <Link href="/privacy" className="text-sm text-neutral-500 hover:underline">
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
