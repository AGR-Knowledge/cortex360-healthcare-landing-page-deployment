"use client";

import { useRef } from "react";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// lib
import { cn } from "@/lib/utils";

// context
import { useContact } from "@/context/contact.context";

type Props = {
  className?: string;
  pricing?: {
    data: any;
    content: string;
  };
};

const ChatbotPricing = ({ className }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const { openContactModal } = useContact();

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section
      className={cn(
        "w-full px-[1rem] sm:px-[1.5rem] md:px-[2rem] lg:px-[2.5rem] xl:px-[3rem] mt-[2rem] sm:mt-[2.5rem] md:mt-[3rem] lg:mt-[3.5rem] xl:mt-[4rem]",
        className
      )}
    >
      <div ref={containerRef} className="bg-sec_bg-2 rounded-theme px-[1rem] sm:px-[1.5rem] md:px-[2rem] lg:px-[2.5rem] xl:px-[3rem] py-[2rem] sm:py-[2.5rem] md:py-[3rem] lg:py-[3.5rem] xl:py-[4rem]">
        {/* Main Title and Taglines */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 has_fade_anim">
          <h1 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px] font-bold text-[#00253C] mb-4 sm:mb-5 md:mb-6 leading-tight px-2 sm:px-4">
            Why settle for Generic off-the-shelf AI When Healthcare & Pharma need{" "}
            <span className="text-orange-500">Precision</span>?
          </h1>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] text-gray-600 max-w-[600px] sm:max-w-[700px] md:max-w-[800px] mx-auto leading-relaxed px-2 sm:px-4">
            Custom AI Trained on Your Data, Delivered with Enterprise-Grade Security.
          </p>
        </div>

        {/* Main Content - Architecture Diagram + Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-start max-w-7xl mx-auto">

          {/* Left Section - Architecture Diagram */}
          <div className="has_fade_anim" data-delay="0.2">
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 border border-gray-200 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-center justify-center">
              <img
                src="/assets/imgs/pharma/architecture_digram.png"
                alt="Cortex360 AI Architecture Diagram"
                className="w-full h-auto object-contain max-h-[250px] sm:max-h-[300px] md:max-h-[400px] lg:max-h-[500px]"
              />
            </div>
          </div>

          {/* Right Section - Two Column Comparison Chart */}
          <div className="has_fade_anim" data-delay="0.4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">

              {/* Left Column - Cortex 360 (Orange Theme) */}
              <div className="bg-orange-500 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 text-white">
                <div className="mb-4 sm:mb-5 md:mb-6 text-center">
                  <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-xl font-bold text-white">Cortex 360 - AI Built for Pharma</h3>
                </div>

                {/* Top Icon */}
                <div className="flex justify-center mb-4 sm:mb-5 md:mb-6">
                  <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-4 sm:w-5 h-4 sm:h-5 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-[10px] sm:text-[11px] md:text-xs lg:text-sm leading-relaxed text-white">Custom KPIs & workflows tailored for healthcare & pharma operations</p>
                  </div>

                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-4 sm:w-5 h-4 sm:h-5 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-[10px] sm:text-[11px] md:text-xs lg:text-sm leading-relaxed text-white">Deep pharma intelligence built on your actual drug, store, trial data etc.</p>
                  </div>

                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-4 sm:w-5 h-4 sm:h-5 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-[10px] sm:text-[11px] md:text-xs lg:text-sm leading-relaxed text-white">Automated ALS creation, edit checks and CRF forms for clinical efficiency</p>
                  </div>

                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-4 sm:w-5 h-4 sm:h-5 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-[10px] sm:text-[11px] md:text-xs lg:text-sm leading-relaxed text-white">Integration ready AI engine for Oracle SQL database, SAP, Medidata and more</p>
                  </div>

                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-4 sm:w-5 h-4 sm:h-5 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-[10px] sm:text-[11px] md:text-xs lg:text-sm leading-relaxed text-white">Foresight, not just hindsight - predict trends, risks and opportunities</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Off The Shelf Tools (Gray Theme) */}
              <div className="bg-gray-500 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 text-white">
                <div className="mb-4 sm:mb-5 md:mb-6 text-center">
                  <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-xl font-bold text-white !text-white">Off The Shelf Tools</h3>
                </div>

                {/* Top Icon */}
                <div className="flex justify-center mb-4 sm:mb-5 md:mb-6">
                  <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                </div>

                {/* Drawbacks List */}
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-4 sm:w-5 h-4 sm:h-5 bg-red-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-[10px] sm:text-[11px] md:text-xs lg:text-sm leading-relaxed text-white">One-size-fits-all views ignore healthcare & pharma's complexity</p>
                  </div>

                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-4 sm:w-5 h-4 sm:h-5 bg-red-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-[10px] sm:text-[11px] md:text-xs lg:text-sm leading-relaxed text-white">Generic & lack of healthcare & pharma specific built-in logic for SKU's, trials or regulatory needs</p>
                  </div>

                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-4 sm:w-5 h-4 sm:h-5 bg-red-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-[10px] sm:text-[11px] md:text-xs lg:text-sm leading-relaxed text-white">Limited support and manual validation that increases chances of errors</p>
                  </div>

                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-4 sm:w-5 h-4 sm:h-5 bg-red-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-[10px] sm:text-[11px] md:text-xs lg:text-sm leading-relaxed text-white">Static dashboards with lack of insights and no predictive intelligence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Tagline and CTA */}
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16 flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-2 sm:px-4">
          <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-xl text-gray-700 mb-6 sm:mb-7 md:mb-8 leading-relaxed">
            Your Data. Your AI. Your Competitive Edge - Purpose-Built for Healthcare & Pharma.
          </p>
          <button
            onClick={openContactModal}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-7 md:px-8 lg:px-9 xl:px-10 py-3 sm:py-3.5 md:py-4 rounded-lg text-[14px] sm:text-[16px] md:text-[18px] lg:text-lg font-semibold transition-colors duration-200"
          >
            Schedule your demo now!
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChatbotPricing;
