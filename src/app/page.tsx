import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";
import HomeClient from "./HomeClient";

export default function Home() {
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
    <HomeClient
      hero={hero}
      service={service}
      services={services}
      feature={feature}
      counter={counter}
      testimonial={testimonial}
      pricing={pricing}
      integration={integration}
      faq={faq}
    />
  );
}
