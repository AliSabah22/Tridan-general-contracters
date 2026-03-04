import type { Metadata } from "next";
import LocationPageContent from "@/components/LocationPageContent";

export const metadata: Metadata = {
  title: "Home Renovations Milton",
  description:
    "Tridan General Construction provides professional home renovations in Milton including kitchen, bathroom, and basement renovations. Request a free estimate today.",
  keywords: ["home renovations Milton", "kitchen renovation Milton", "bathroom renovation Milton", "basement finishing Milton"],
};

export default function MiltonRenovationsPage() {
  return <LocationPageContent slug="milton" />;
}
