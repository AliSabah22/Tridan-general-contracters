import type { Metadata } from "next";
import LocationPageContent from "@/components/LocationPageContent";

export const metadata: Metadata = {
  title: "Home Renovations Toronto",
  description:
    "Tridan General Construction provides professional home renovations in Toronto including kitchen, bathroom, and basement renovations. Request a free estimate today.",
  keywords: ["home renovations Toronto", "kitchen renovation Toronto", "bathroom renovation Toronto", "basement finishing Toronto"],
};

export default function TorontoRenovationsPage() {
  return <LocationPageContent slug="toronto" />;
}
