interface ReviewCardsProps {
  reviews?: Array<{ quote: string; author: string; location?: string }>;
}

const DEFAULT_REVIEWS = [
  { quote: "Professional from start to finish. Our kitchen looks amazing and the timeline was respected.", author: "Sarah M.", location: "Mississauga" },
  { quote: "Transparent pricing and quality work. We hired Tridan for our basement and would do it again.", author: "James K.", location: "Toronto" },
  { quote: "Great communication and attention to detail. Our bathroom renovation exceeded expectations.", author: "Lisa T.", location: "Milton" },
];

export default function ReviewCards({ reviews = DEFAULT_REVIEWS }: ReviewCardsProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {reviews.map((r, i) => (
        <blockquote
          key={i}
          className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm"
        >
          <p className="text-neutral-700">&ldquo;{r.quote}&rdquo;</p>
          <footer className="mt-4 text-sm font-medium text-neutral-900">
            — {r.author}
            {r.location && <span className="text-neutral-500">, {r.location}</span>}
          </footer>
        </blockquote>
      ))}
    </div>
  );
}
