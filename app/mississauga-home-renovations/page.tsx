import type { Metadata } from "next";
import { getLocationContent } from "@/lib/locationContent";
import LocationPageContent from "@/components/LocationPageContent";

export const metadata: Metadata = {
  title: "Home Renovations Mississauga",
  description:
    "Tridan General Construction provides professional home renovations in Mississauga including kitchen, bathroom, and basement renovations. Request a free estimate today.",
  keywords: ["home renovations Mississauga", "kitchen renovation Mississauga", "bathroom renovation Mississauga", "basement finishing Mississauga"],
};

export default function MississaugaRenovationsPage() {
  return <LocationPageContent slug="mississauga" />;
}
