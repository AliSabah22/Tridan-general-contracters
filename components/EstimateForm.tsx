"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

interface EstimateFormProps {
  redirectTo?: string;
  ctaText?: string;
  mode?: "short" | "full";
}

const PROJECT_TYPES = [
  { value: "", label: "Select project type" },
  { value: "kitchen", label: "Kitchen Renovation" },
  { value: "bathroom", label: "Bathroom Renovation" },
  { value: "basement", label: "Basement Finishing" },
  { value: "flooring", label: "Flooring" },
  { value: "painting", label: "Painting" },
  { value: "full-home", label: "Full Home Renovation" },
];

const CITIES = [
  { value: "", label: "Select city" },
  { value: "mississauga", label: "Mississauga" },
  { value: "toronto", label: "Toronto" },
  { value: "milton", label: "Milton" },
  { value: "other", label: "Other" },
];

const TIMELINES = [
  { value: "", label: "When do you want to start?" },
  { value: "asap", label: "As soon as possible" },
  { value: "1-3", label: "Within 1–3 months" },
  { value: "3-6", label: "Within 3–6 months" },
  { value: "6plus", label: "6+ months / just exploring" },
];

const BUDGETS = [
  { value: "", label: "Budget range (optional)" },
  { value: "under-25", label: "Under $25k" },
  { value: "25-50", label: "$25k – $50k" },
  { value: "50-100", label: "$50k – $100k" },
  { value: "100plus", label: "$100k+" },
];

const inputClass =
  "mt-1 w-full rounded-lg border border-neutral-300 px-4 py-2.5 focus:border-primary-500 focus:ring-1 focus:ring-primary-500";

export default function EstimateForm({
  redirectTo = "/thank-you",
  ctaText = "Request Free Estimate",
  mode = "full",
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
      await new Promise((r) => setTimeout(r, 600));
      setStatus("done");
      router.push(redirectTo);
    } catch {
      setStatus("error");
    }
  }

  const isShort = mode === "short";

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
            className={inputClass}
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
            className={inputClass}
          />
        </div>
      </div>

      {!isShort && (
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
          />
        </div>
      )}

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-neutral-700">
          Project type *
        </label>
        <select id="service" name="service" required className={inputClass}>
          {PROJECT_TYPES.map((o) => (
            <option key={o.value || "blank"} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      {!isShort && (
        <>
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-neutral-700">
              City *
            </label>
            <select id="city" name="city" required className={inputClass}>
              {CITIES.map((o) => (
                <option key={o.value || "blank"} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="timeline" className="block text-sm font-medium text-neutral-700">
              Timeline *
            </label>
            <select id="timeline" name="timeline" required className={inputClass}>
              {TIMELINES.map((o) => (
                <option key={o.value || "blank"} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-neutral-700">
              Budget range (optional)
            </label>
            <select id="budget" name="budget" className={inputClass}>
              {BUDGETS.map((o) => (
                <option key={o.value || "blank"} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </>
      )}

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={isShort ? 3 : 4}
          required
          className={`${inputClass} resize-y`}
          placeholder="Describe your project and any questions..."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please try again or call us.</p>
      )}

      <motion.button
        type="submit"
        disabled={status === "submitting"}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition hover:bg-primary-700 disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? "Sending..." : ctaText}
      </motion.button>
    </form>
  );
}
