import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";

// Components
import SeoData from "@/components/tools/seo-data";
import ChatbotCounter from "@/components/elements/counter/chatbot-counter";
import ChatbotFAQ from "@/components/elements/faq/chatbot-faq";
import ChatbotFeature from "@/components/elements/feature/chatbot-feature";
import ChatbotHero from "@/components/elements/hero/chatbot-hero";
import ChatbotIntegration from "@/components/elements/integration/chatbot-integration";
import ChatbotPricing from "@/components/elements/pricing/chatbot-pricing";
import ChatbotService from "@/components/elements/service/chatbot-service";
import ChatbotTestimonial from "@/components/elements/testimonial/chatbot-testimonial";

export default function Page() {
  const hero = getMainPage("/heros/chatbot-hero.mdx");
  const service = getMainPage("/services/chatbot/_index.mdx");
  const services = getAllPages("/services/chatbot");
  const feature = getMainPage("/features/chatbot-feature.mdx");
  const counter = getMainPage("/counters/chatbot-counter.mdx");
  const testimonial = getMainPage("/testimonials/chatbot-testimonial.mdx");
  const pricing = getMainPage("/pricings/chatbot-pricing.mdx");
  const integration = getMainPage("/integrations/chatbot-integration.mdx");
  const faq = getMainPage("/faqs/chatbot-faq.mdx");

  return (
    <main>
      <SeoData />
      <ChatbotHero hero={hero} />
      <ChatbotService service={service} services={services} />
      <ChatbotFeature feature={feature} />
      <ChatbotCounter counter={counter} />
      <ChatbotTestimonial testimonial={testimonial} />
      <ChatbotPricing pricing={pricing} />
      <ChatbotIntegration integration={integration} />
      <ChatbotFAQ faq={faq} />
    </main>
  );
}
