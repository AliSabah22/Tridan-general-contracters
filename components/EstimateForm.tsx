"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface EstimateFormProps {
  redirectTo?: string;
  ctaText?: string;
  showServiceSelect?: boolean;
}

export default function EstimateForm({
  redirectTo = "/thank-you",
  ctaText = "Request Free Estimate",
  showServiceSelect = true,
}: EstimateFormProps) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const body = Object.fromEntries(formData.entries());

    try {
      // In production, POST to your API or form service
      await new Promise((r) => setTimeout(r, 600));
      console.log("Form submitted:", body);
      setStatus("done");
      router.push(redirectTo);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-700">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded-lg border border-neutral-300 px-4 py-2 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-700">
            Phone *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-1 w-full rounded-lg border border-neutral-300 px-4 py-2 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-lg border border-neutral-300 px-4 py-2 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
        />
      </div>
      {showServiceSelect && (
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-neutral-700">
            Service
          </label>
          <select
            id="service"
            name="service"
            className="mt-1 w-full rounded-lg border border-neutral-300 px-4 py-2 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
          >
            <option value="">Select a service</option>
            <option value="kitchen">Kitchen Renovation</option>
            <option value="bathroom">Bathroom Renovation</option>
            <option value="basement">Basement Finishing</option>
            <option value="flooring">Flooring</option>
            <option value="painting">Painting</option>
            <option value="full-home">Full Home Renovation</option>
          </select>
        </div>
      )}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700">
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1 w-full rounded-lg border border-neutral-300 px-4 py-2 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
          placeholder="Describe your project, timeline, and any questions..."
        />
      </div>
      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please try again or call us.</p>
      )}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition hover:bg-primary-700 disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? "Sending..." : ctaText}
      </button>
    </form>
  );
}
