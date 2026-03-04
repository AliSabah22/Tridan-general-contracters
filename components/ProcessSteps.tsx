import { PROCESS_STEPS } from "@/lib/constants";

export default function ProcessSteps() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {PROCESS_STEPS.map(({ step, title, description }) => (
        <div key={step} className="relative">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-lg font-bold text-white">
            {step}
          </div>
          <h3 className="mt-4 text-lg font-semibold text-neutral-900">{title}</h3>
          <p className="mt-2 text-neutral-600">{description}</p>
          {step < PROCESS_STEPS.length && (
            <span className="absolute -right-4 top-6 hidden text-neutral-300 lg:inline" aria-hidden>
              →
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
