import Link from "next/link";

interface ServiceCardsProps {
  services: Array<{ id: string; title: string; description: string; href?: string }>;
  columns?: 2 | 3;
  cityName?: string;
}

export default function ServiceCards({ services, columns = 3, cityName }: ServiceCardsProps) {
  const colClass = columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`grid gap-6 ${colClass}`}>
      {services.map((service) => {
        const content = (
          <>
            <h3 className="text-lg font-semibold text-neutral-900">{service.title}</h3>
            <p className="mt-2 text-neutral-600">
              {cityName
                ? `${service.description.replace(/\.$/, "")} ${cityName}.`
                : service.description}
            </p>
          </>
        );
        if (service.href) {
          return (
            <Link
              key={service.id}
              href={service.href}
              className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:border-primary-200 hover:shadow-md"
            >
              {content}
            </Link>
          );
        }
        return (
          <div
            key={service.id}
            className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm"
          >
            {content}
          </div>
        );
      })}
    </div>
  );
}
