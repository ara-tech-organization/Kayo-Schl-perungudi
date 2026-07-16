import PageLayout from "../components/layout/PageLayout";
import ContactHero from "../components/Contact/ContactHero";
import ContactFormSection from "../components/Contact/ContactFormSection";
import ContactMap from "../components/Contact/ContactMap";
import useSeo from "../hooks/useSeo";

const CONTACT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Preschool",
  name: "KAYO International Preschool - Perungudi",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No.3, 1st Cross Street, Rajiv Nagar, Perungudi",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600096",
    addressCountry: "IN",
  },
  telephone: "+91-98840-04650",
  email: "chnperungudi@kayointernational.in",
  openingHours: "Mo-Sa 09:00-18:00",
  url: "https://kayointernational.in/contact-us",
  geo: {
    "@type": "GeoCoordinates",
    latitude: "12.9654",
    longitude: "80.2451",
  },
};

export default function ContactPage() {
  useSeo({
    title: "Contact Us | Kayo International Preschool",
    description:
      "Contact KAYO International preschool in Perungudi, Chennai. Call +91 98840 04650. Visit our campus at No.3, 1st Cross Street, Rajiv Nagar, Perungudi, Chennai - 600096. Enrolment open for 2025-26.",
    schema: CONTACT_SCHEMA,
  });

  return (
    <PageLayout>
      <ContactHero />
      <ContactFormSection />
      <ContactMap />
    </PageLayout>
  );
}
