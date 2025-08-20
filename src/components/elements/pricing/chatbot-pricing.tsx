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
        "w-full mt-[3rem] px-[3rem]",
        className
      )}
    >
      <div ref={containerRef} className="bg-sec_bg-2 rounded-theme px-[25px] md:px-[30px] xl:px-[70px] 2xl:px-[130px] py-[20px] md:py-[30px] xl:py-[40px] 2xl:py-[50px]">
        {/* Main Title and Taglines */}
        <div className="text-center mb-16 has_fade_anim">
          <h1 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold text-[#00253C] mb-6 leading-tight">
            Why settle for Generic off-the-shelf AI When Healthcare & Pharma need{" "}
            <span className="text-orange-500">Precision</span>?
          </h1>
          <p className="text-[20px] md:text-[24px] text-gray-600 max-w-[800px] mx-auto leading-relaxed">
            Custom AI Trained on Your Data, Delivered with Enterprise-Grade Security.
          </p>
        </div>

        {/* Main Content - Architecture Diagram + Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">

          {/* Left Section - Architecture Diagram */}
          <div className="has_fade_anim" data-delay="0.2">
            <div className="bg-white rounded-xl p-8 border border-gray-200 min-h-[600px] flex items-center justify-center">
              <img
                src="/assets/imgs/pharma/architecture_digram.png"
                alt="Cortex360 AI Architecture Diagram"
                className="w-full h-auto object-contain max-h-[500px]"
              />
            </div>
          </div>

          {/* Right Section - Two Column Comparison Chart */}
          <div className="has_fade_anim" data-delay="0.4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Left Column - Cortex 360 (Orange Theme) */}
              <div className="bg-orange-500 rounded-xl p-6 text-white">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white">Cortex 360 - AI Built for Pharma</h3>
                </div>

                {/* Top Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm leading-relaxed text-white">Custom KPIs & workflows tailored for healthcare & pharma operations</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm leading-relaxed text-white">Deep pharma intelligence built on your actual drug, store, trial data etc.</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm leading-relaxed text-white">Automated ALS creation, edit checks and CRF forms for clinical efficiency</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm leading-relaxed text-white">Integration ready AI engine for Oracle SQL database, SAP, Medidata and more</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm leading-relaxed text-white">Foresight, not just hindsight - predict trends, risks and opportunities</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Off The Shelf Tools (Gray Theme) */}
              <div className="bg-gray-500 rounded-xl p-6 text-white">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white !text-white">Off The Shelf Tools</h3>
                </div>

                {/* Top Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                </div>

                {/* Drawbacks List */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-red-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm leading-relaxed text-white">One-size-fits-all views ignore healthcare & pharma's complexity</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-red-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm leading-relaxed text-white">Generic & lack of healthcare & pharma specific built-in logic for SKU's, trials or regulatory needs</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-red-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm leading-relaxed text-white">Limited support and manual validation that increases chances of errors</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-red-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm leading-relaxed text-white">Static dashboards with lack of insights and no predictive intelligence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Tagline and CTA */}
        <div className="mt-16 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Your Data. Your AI. Your Competitive Edge - Purpose-Built for Healthcare & Pharma.
          </p>
          <button
            onClick={openContactModal}
            className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
          >
            Schedule your demo now!
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChatbotPricing;
