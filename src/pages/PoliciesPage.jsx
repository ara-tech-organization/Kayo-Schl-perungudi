import PageLayout from "../components/layout/PageLayout";
import PoliciesHero from "../components/Policies/PoliciesHero";
import PoliciesJourney from "../components/Policies/PoliciesJourney";
import PoliciesCarousel from "../components/Policies/PoliciesCarousel";
import PoliciesProhibited from "../components/Policies/PoliciesProhibited";
import PoliciesCTA from "../components/Policies/PoliciesCTA";
import { POLICIES_GROUP_ONE, POLICIES_GROUP_TWO } from "../components/Policies/policiesData";
import useSeo from "../hooks/useSeo";

const POLICIES_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Policies | Kayo International Preschool",
  description:
    "Discover KAYO INTERNATIONAL's comprehensive preschool safety policies in Chennai. Learn about our health standards, child protection, settling-in support & more.",
  publisher: {
    "@type": "Preschool",
    name: "Kayo International Preschool and DayCare",
    sameAs: "https://www.kayointernational.in/",
  },
};

export default function PoliciesPage() {
  useSeo({
    title: "Policies | Kayo International Preschool",
    description:
      "Discover KAYO INTERNATIONAL's comprehensive preschool safety policies in Chennai. Learn about our health standards, child protection, settling-in support & more.",
    schema: POLICIES_SCHEMA,
  });

  return (
    <PageLayout>
      <PoliciesHero />
      <PoliciesJourney
        id="policies"
        items={POLICIES_GROUP_ONE}
        eyebrow="How We Care for Your Child"
        title="Everyday Policies, Built on Trust"
        description="From the very first day to every routine in between, here is how we keep your child safe, comfortable, and cared for."
        summaryTitle="A calm, safety-first start to every school day."
        summaryPoints={[
          "Gentle settling-in support for new children",
          "Secure collection rules and clear parent communication",
          "Daily hygiene, rest, and positive behaviour guidance",
        ]}
      />
      <PoliciesProhibited />
      <PoliciesCarousel
        items={POLICIES_GROUP_TWO}
        eyebrow="How We Support Daily Wellbeing"
        title="Inclusion, Health & Family Partnership"
        description="These everyday policies help us support each child with consistency, kindness, and close communication with families."
        summaryTitle="Practical routines that help children feel supported."
        summaryPoints={[
          "Inclusive care for every child and family",
          "Healthy food habits and patient independence-building",
          "Prompt updates around sickness, absence, and minor injuries",
        ]}
      />
      <PoliciesCTA />
    </PageLayout>
  );
}
