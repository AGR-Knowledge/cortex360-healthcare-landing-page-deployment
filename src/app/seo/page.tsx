import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";

// Components
import SeoData from "@/components/tools/seo-data";
import Brand1 from "@/components/elements/brand/brand1";
import SEOCounter from "@/components/elements/counter/seo-counter";
import CTA6 from "@/components/elements/cta/cta6";
import SEOFAQ from "@/components/elements/faq/seo-faq";
import SEOFeature from "@/components/elements/feature/seo-feature";
import SEOHero from "@/components/elements/hero/seo-hero";
import SEOIntegration from "@/components/elements/integration/seo-integration";
import SEOPricing from "@/components/elements/pricing/seo-pricing";
import SEOProcess from "@/components/elements/process/seo-process";
import SEOService from "@/components/elements/service/seo-service";
import SEOTestimonial from "@/components/elements/testimonial/seo-testimonial";

export default function Page() {
  const hero = getMainPage("/heros/seo-hero.mdx");
  const brand = getMainPage("/brands/brand1.mdx");
  const feature = getMainPage("/features/seo-feature.mdx");
  const counter = getMainPage("/counters/seo-counter.mdx");
  const testimonial = getMainPage("/testimonials/seo-testimonial.mdx");
  const service = getMainPage("/services/seo/_index.mdx");
  const services = getAllPages("/services/seo");
  const integration = getMainPage("/integrations/seo-integration.mdx");
  const process = getMainPage("/processes/seo-process.mdx");
  const pricing = getMainPage("/pricings/seo-pricing.mdx");
  const faq = getMainPage("/faqs/seo-faq.mdx");
  const cta = getMainPage("/ctas/cta6.mdx");

  return (
    <main>
      <SeoData />
      <SEOHero hero={hero} />
      <Brand1
        brand={brand}
        className="!pb-0 pt-[70px] md:pt-[100px] 2xl:pt-[120px]"
      />
      <SEOFeature feature={feature} />
      <SEOCounter counter={counter} />
      <SEOTestimonial testimonial={testimonial} />
      <SEOService service={service} services={services} />
      <SEOIntegration integration={integration} />
      <SEOProcess process={process} />
      <SEOPricing pricing={pricing} />
      <SEOFAQ faq={faq} />
      <CTA6 cta={cta} />
    </main>
  );
}
