import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Tridan General Construction website.",
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-neutral-900">Privacy Policy</h1>
      <p className="mt-4 text-neutral-600">Last updated: {new Date().toLocaleDateString("en-CA")}</p>
      <div className="prose prose-neutral mt-8 max-w-none">
        <h2 className="text-xl font-semibold text-neutral-900">Information We Collect</h2>
        <p className="mt-2 text-neutral-600">
          When you submit a contact or estimate request form, we collect the information you provide, such as your name, phone number, email address, and project details. We use this information to respond to your inquiry and provide estimates and services.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-neutral-900">How We Use Your Information</h2>
        <p className="mt-2 text-neutral-600">
          We use your contact information solely to communicate with you about your renovation project, send quotes, and deliver our services. We do not sell or share your personal information with third parties for marketing purposes.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-neutral-900">Contact</h2>
        <p className="mt-2 text-neutral-600">
          For questions about this privacy policy or your personal information, please contact us by email or phone using the details on our contact page.
        </p>
      </div>
    </section>
  );
}
