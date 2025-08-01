import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";

// Components
import SeoData from "@/components/tools/seo-data";
import CRMHomeAbout from "@/components/elements/about/crm-home-about";
import Brand1 from "@/components/elements/brand/brand1";
import CRMCounter from "@/components/elements/counter/crm-counter";
import CRMFeature from "@/components/elements/feature/crm-feature";
import CRMHero from "@/components/elements/hero/crm-hero";
import Newsletter3 from "@/components/elements/newsletter/newsletter3";
import CRMPricing from "@/components/elements/pricing/crm-pricing";
import CRMService from "@/components/elements/service/crm-service";
import CRMTestimonial from "@/components/elements/testimonial/crm-testimonial";

export default function Page() {
  const hero = getMainPage("/heros/crm-hero.mdx");
  const brand = getMainPage("/brands/brand1.mdx");
  const counter = getMainPage("/counters/crm-counter.mdx");
  const service = getMainPage("/services/crm/_index.mdx");
  const services = getAllPages("/services/crm");
  const about = getMainPage("/abouts/crm-about.mdx");
  const feature = getMainPage("/features/crm-feature.mdx");
  const testimonial = getMainPage("/testimonials/crm-testimonial.mdx");
  const pricing = getMainPage("/pricings/crm-pricing.mdx");

  return (
    <main>
      <SeoData />
      <CRMHero hero={hero} />
      <Brand1
        brand={brand}
        className="!pb-0 pt-[35px] md:pt-[55px] lg:pt-[92px]"
      />
      <CRMCounter counter={counter} />
      <CRMService service={service} services={services} />
      <CRMHomeAbout about={about} />
      <CRMFeature feature={feature} />
      <Newsletter3 />
      <CRMTestimonial testimonial={testimonial} />
      <CRMPricing pricing={pricing} />
    </main>
  );
}
