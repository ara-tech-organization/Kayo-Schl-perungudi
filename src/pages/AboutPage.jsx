import PageLayout from "../components/layout/PageLayout";
import ScrollProgress from "../components/common/ScrollProgress";
import AboutHero from "../components/About/AboutHero";
import OurStory from "../components/About/OurStory";
import Founders from "../components/About/Founders";
import AboutTeam from "../components/About/AboutTeam";
import EnquiryCTA from "../components/Home/EnquiryCTA";
import useSeo from "../hooks/useSeo";

const ABOUT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Preschool",
  name: "Kayo International Preschool and DayCare",
  founder: {
    "@type": "Person",
    name: "Veena Sundaramurthy",
    jobTitle: "Founder & Early Childhood Educator",
  },
  foundingDate: "2013",
  description:
    "Trusted preschool in Chennai with 10+ years experience, qualified teachers, and 4.9★ Google rating.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Perungudi",
    addressRegion: "Chennai",
    addressCountry: "IN",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "63",
  },
  areaServed: ["Perungudi, Chennai", "Saravanampatti, Coimbatore"],
};

export default function AboutPage() {
  useSeo({
    title: "About Us | Kayo International Preschool",
    description:
      "Discover Kayo International Preschool — founded by Veena Sundaramurthy in 2013. 10+ years of nurturing 1000+ children in Chennai with qualified teachers & a 4.9★ rating. Book a visit today.",
    schema: ABOUT_SCHEMA,
  });

  return (
    <PageLayout>
      <ScrollProgress />
      <AboutHero />
      <OurStory />
      <Founders />
      <AboutTeam />
      <EnquiryCTA />
    </PageLayout>
  );
}
