interface ProjectGalleryProps {
  projects?: Array<{ title: string; category: string; image?: string }>;
}

const DEFAULT_PROJECTS = [
  { title: "Modern Kitchen Remodel", category: "Kitchen" },
  { title: "Spa-like Bathroom", category: "Bathroom" },
  { title: "Finished Basement", category: "Basement" },
  { title: "Open Concept Living", category: "Full Home" },
  { title: "Hardwood & Tile", category: "Flooring" },
  { title: "Fresh Interior Paint", category: "Painting" },
];

export default function ProjectGallery({ projects = DEFAULT_PROJECTS }: ProjectGalleryProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p, i) => (
        <div
          key={i}
          className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-200"
        >
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-primary-400">{p.category}</p>
              <p className="font-semibold text-white">{p.title}</p>
            </div>
          </div>
          {/* Placeholder when no image URL */}
          <div className="absolute inset-0 bg-neutral-300" aria-hidden />
        </div>
      ))}
    </div>
  );
}
