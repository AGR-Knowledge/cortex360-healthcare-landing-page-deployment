"use client";
import React from "react";
import SeoData from "@/components/tools/seo-data";
import ChatbotCounter from "@/components/elements/counter/chatbot-counter";
import ChatbotFAQ from "@/components/elements/faq/chatbot-faq";
import ChatbotFeature from "@/components/elements/feature/chatbot-feature";
import ChatbotHero from "@/components/elements/hero/chatbot-hero";
import ChatbotIntegration from "@/components/elements/integration/chatbot-integration";
import ChatbotPricing from "@/components/elements/pricing/chatbot-pricing";
import ChatbotService from "@/components/elements/service/chatbot-service";
import ChatbotTestimonial from "@/components/elements/testimonial/chatbot-testimonial";

export default function HomeClient({
  hero,
  service,
  services,
  feature,
  counter,
  testimonial,
  pricing,
  integration,
  faq,
}: any) {

  return (
    <main>
      <SeoData />
      <ChatbotHero hero={hero} />
      <ChatbotService service={service} services={services} />
      <ChatbotFeature feature={feature} />
      <ChatbotCounter counter={counter} />
      {/* <ChatbotTestimonial testimonial={testimonial} /> */}
      <ChatbotPricing pricing={pricing} />
      {/* <ChatbotIntegration integration={integration} /> */}
      <ChatbotFAQ faq={faq} />
    </main>
  );
}