import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";

// Components
import SeoData from "@/components/tools/seo-data";
import CustomerServiceBlog from "@/components/elements/blog/customer-service-blog";
import Brand1 from "@/components/elements/brand/brand1";
import CustomerServiceCounter from "@/components/elements/counter/customer-service-counter";
import CustomerServiceFAQ from "@/components/elements/faq/customer-service-faq";
import CustomerServiceFeature from "@/components/elements/feature/customer-service-feature";
import CustomerServiceFeature2 from "@/components/elements/feature/customer-service-feature2";
import CustomerServiceHero from "@/components/elements/hero/customer-service-hero";
import CustomerServiceIntegration from "@/components/elements/integration/customer-service-integration";
import CustomerServicePricing from "@/components/elements/pricing/customer-service-pricing";
import CustomerServiceRatting from "@/components/elements/rating/customer-service-rating";
import CustomerServiceService from "@/components/elements/service/customer-service-service";
import CustomerServiceTestimonial from "@/components/elements/testimonial/customer-service-testimonial";

export default function Page() {
  const hero = getMainPage("/heros/customer-service-hero.mdx");
  const brand = getMainPage("/brands/brand1.mdx");
  const feature = getMainPage("/features/customer-service-feature.mdx");
  const service = getMainPage("/services/customer-service/_index.mdx");
  const services = getAllPages("/services/customer-service");
  const counter = getMainPage("/counters/customer-service-counter.mdx");
  const feature2 = getMainPage("/features/customer-service-feature2.mdx");
  const testimonial = getMainPage(
    "/testimonials/customer-service-testimonial.mdx"
  );
  const rating = getMainPage("/ratings/customer-service-rating.mdx");
  const faq = getMainPage("/faqs/customer-service-faq.mdx");
  const pricing = getMainPage("/pricings/customer-service-pricing.mdx");
  const integration = getMainPage(
    "/integrations/customer-service-integration.mdx"
  );
  const blog = getMainPage("/blogs/main/_index.mdx");
  const blogs = getAllPages("/blogs/main");
  return (
    <main>
      <SeoData />
      <CustomerServiceHero hero={hero} />
      <Brand1
        brand={brand}
        className="pt-[70px] md:pt-[100px] 2xl:pt-[120px] !pb-0"
      />
      <CustomerServiceFeature feature={feature} />
      <CustomerServiceService service={service} services={services} />
      <CustomerServiceCounter counter={counter} />
      <CustomerServiceFeature2 feature={feature2} />
      <CustomerServiceTestimonial testimonial={testimonial} />
      <CustomerServiceRatting rating={rating} />
      <CustomerServiceFAQ faq={faq} />
      <CustomerServicePricing pricing={pricing} />
      <CustomerServiceIntegration integration={integration} />
      <CustomerServiceBlog blog={blog} blogs={blogs.slice(0, 3)} />
    </main>
  );
}
