"use client";
import React, { useState } from "react";
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
  const [chatOpen, setChatOpen] = useState(false);

  // Adjust this value to be just above your scroll up button
  const chatBottom = 90; // px

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

      {/* Floating Chat Button */}
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          style={{
            position: "fixed",
            bottom: chatBottom,
            right: 30,
            zIndex: 1100,
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: "#003366",
            color: "#fff",
            border: "none",
            boxShadow: "0 0 10px #888",
            cursor: "pointer",
            fontSize: 28,
          }}
          aria-label="Open Chat"
        >
          💬
        </button>
      )}

      {/* Chatbot Popup */}
      {chatOpen && (
        <div
          style={{
            position: "fixed",
            bottom: chatBottom,
            right: 30,
            zIndex: 1200,
            width: 400,
            height: 500,
            boxShadow: "0 0 15px rgba(7,32,50,0.5)",
            borderRadius: 12,
            background: "#fff",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              padding: "8px",
              background: "#003366",
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
            }}
          >
            <button
              onClick={() => setChatOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                color: "#fff",
                fontSize: 22,
                cursor: "pointer",
              }}
              aria-label="Close Chat"
            >
              ✕
            </button>
          </div>
          <iframe
            src="/Sample17.html"
            style={{
                width: '100%',
                height: '100%',
                border: 'none',
                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 12,
            }}
            title="AI Chatbot"
          />
        </div>
      )}
    </main>
  );
}