import { getMainPage } from "@/lib/helper/contentConverter";

// Components
import SeoData from "@/components/tools/seo-data";
import MeetingHomeAbout from "@/components/elements/about/meeting-home-about";
import Brand2 from "@/components/elements/brand/brand2";
import MeetingFeature1 from "@/components/elements/feature/meeting-feature1";
import MeetingFeature2 from "@/components/elements/feature/meeting-feature2";
import MeetingFeature3 from "@/components/elements/feature/meeting-feature3";
import MeetingHero from "@/components/elements/hero/meeting-hero";
import MeetingIntegration from "@/components/elements/integration/meeting-integration";
import MeetingPricing from "@/components/elements/pricing/meeting-pricing";
import MeetingTestimonial from "@/components/elements/testimonial/meeting-testimonial";

export default function Page() {
  const hero = getMainPage("/heros/meeting-hero.mdx");
  const feature1 = getMainPage("/features/meeting-feature1.mdx");
  const feature2 = getMainPage("/features/meeting-feature2.mdx");
  const feature3 = getMainPage("/features/meeting-feature3.mdx");
  const about = getMainPage("/abouts/meeting-about.mdx");
  const testimonial = getMainPage("/testimonials/meeting-testimonial.mdx");
  const integration = getMainPage("/integrations/meeting-integration.mdx");
  const pricing = getMainPage("/pricings/meeting-pricing.mdx");
  const brand = getMainPage("/brands/brand2.mdx");
  return (
    <main>
      <SeoData />
      <MeetingHero hero={hero} />
      <MeetingFeature1 feature={feature1} />
      <MeetingHomeAbout about={about} />
      <MeetingFeature2 feature={feature2} />
      <MeetingTestimonial testimonial={testimonial} />
      <MeetingFeature3 feature={feature3} />
      <MeetingIntegration integration={integration} />
      <MeetingPricing pricing={pricing} className="sec_space_bottom2" />
      <Brand2 brand={brand} />
    </main>
  );
}
