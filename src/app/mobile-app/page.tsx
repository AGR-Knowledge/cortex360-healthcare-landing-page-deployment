import { getMainPage } from "@/lib/helper/contentConverter";

// Components
import SeoData from "@/components/tools/seo-data";
import Award2 from "@/components/elements/award/award2";
import Brand1 from "@/components/elements/brand/brand1";
import MobileAppCounter from "@/components/elements/counter/mobile-app-counter";
import MobileAppFAQ from "@/components/elements/faq/mobile-app-faq";
import MobileAppFeature from "@/components/elements/feature/mobile-app-feature";
import MobileAppFeature2 from "@/components/elements/feature/mobile-app-feature2";
import MobileAppFeature3 from "@/components/elements/feature/mobile-app-feature3";
import MobileAppHero from "@/components/elements/hero/mobile-app-hero";
import MobileAppTestimonial from "@/components/elements/testimonial/mobile-app-testimonial";

export default function Page() {
  const hero = getMainPage("/heros/mobile-app-hero.mdx");
  const brand = getMainPage("/brands/brand1.mdx");
  const feature = getMainPage("/features/mobile-app-feature.mdx");
  const award = getMainPage("/awards/award2.mdx");
  const testimonial = getMainPage("/testimonials/mobile-app-testimonial.mdx");
  const feature2 = getMainPage("/features/mobile-app-feature2.mdx");
  const counter = getMainPage("/counters/mobile-app-counter.mdx");
  const feature3 = getMainPage("/features/mobile-app-feature3.mdx");
  const faq = getMainPage("/faqs/faq1.mdx");

  return (
    <main>
      <SeoData />
      <MobileAppHero hero={hero} />
      <Brand1
        brand={brand}
        className="sec_space_bottom2 pt-[60px] md:pt-[80px] xl:pt-[255px] 2xl:pt-[320px]"
      />
      <MobileAppFeature feature={feature} />
      <Award2 award={award} />
      <MobileAppTestimonial testimonial={testimonial} />
      <MobileAppFeature2 feature={feature2} />
      <MobileAppCounter counter={counter} />
      <MobileAppFeature3 feature={feature3} />
      <MobileAppFAQ faq={faq} />
    </main>
  );
}
