"use client";

import { useRef } from "react";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// lib
import { delayTime } from "@/lib/helper/delayTime";

// components
import ServiceCard3 from "./card/service-card3";
import TitleSection2 from "@/components/shared/title-section/title-section2";

type Props = {
  service: {
    data: {
      title: string;
      title2: string;
      details: string;
      subtitle: string;
      subtitle0: string;
      subtitle1: string;
      details1: string;
      background_image: string;
    };
  };
  services: {
    data: {
      title: string;
      short_description: string;
      image: string;
    };
    slug: string;
  }[];
};

const ChatbotService = ({ service, services }: Props) => {
  const { title, title2, details } = service.data;

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(() => {
    hasFadeAnim();
  }, { scope: containerRef });

  // Split the title into two parts at the first period
  const [titleLine1, titleLine2] = title.includes(".")
    ? title.split(".", 2)
    : [title, ""];

  return (
    <section className="w-full px-[1rem] sm:px-[1.5rem] md:px-[2rem] lg:px-[2.5rem] xl:px-[3rem] mt-[2rem] sm:mt-[2.5rem] md:mt-[3rem] lg:mt-[3.5rem] xl:mt-[4rem]">
      <div
        className="font-bold"
        ref={containerRef}
      >
        {/* Main Title with improved responsive styling */}
        <h1 className="text-left text-[#00253C] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-bold mb-2 sm:mb-3 font-inter ml-2 sm:ml-4 md:ml-6 lg:ml-8 xl:ml-10">
          Your data lives everywhere.
          <br />
          Insights are trapped, decisions delayed.
        </h1>

        {/* Subtitle */}
        <h2 className="text-center text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] xl:text-[34px] 2xl:text-[38px] font-bold text-[#091E42] mt-2 sm:mt-3 font-inter">
          {title2}
        </h2>

        {/* Paragraph below titles */}
        <p className="text-left text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-medium text-gray-600 mt-3 sm:mt-4 md:mt-6 font-inter ml-2 sm:ml-4 md:ml-6 lg:ml-8 xl:ml-10 max-w-full lg:max-w-none overflow-hidden text-ellipsis">
          {details}
        </p>

        {/* Service Cards */}
        {services && services.length > 0 && (
          <div className="mt-[1.5rem] sm:mt-[2rem] md:mt-[2.5rem] lg:mt-[3rem] xl:mt-[3.5rem] 2xl:mt-[4rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] sm:gap-[1.5rem] md:gap-[2rem]">
            {(() => {
              // Reorder services: first goes to third, third goes to first
              const reorderedServices = [...services];
              if (reorderedServices.length >= 3) {
                const first = reorderedServices[0];
                const third = reorderedServices[2];
                reorderedServices[0] = third;  // Third becomes first
                reorderedServices[2] = first;  // First becomes third
              }

              return reorderedServices.map((item, i) => (
                <div
                  key={item.slug}
                  className="has_fade_anim"
                  data-delay={delayTime(i + 1)}
                >
                  <ServiceCard3 service={item} />
                </div>
              ));
            })()}
          </div>
        )}

        {/* Bottom Block with Subtitle and Image */}
        <div className="mt-[2rem] sm:mt-[2.5rem] md:mt-[3rem] lg:mt-[3.5rem] xl:mt-[4rem] bg-[#150732] rounded-[8px] sm:rounded-[12px] md:rounded-[16px] lg:rounded-[20px] xl:rounded-[22px] p-4 sm:p-5 md:p-6 flex flex-col-reverse lg:flex-row items-center gap-[1.5rem] sm:gap-[2rem] md:gap-[2.5rem] lg:gap-[3rem] xl:gap-[4rem]">
          {/* Left side: Title and details - 60% width */}
          <div className="w-full lg:w-3/5 text-left">
            <h1 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px] text-white !text-white mb-[0.5rem] sm:mb-[0.75rem] md:mb-[1rem] mt-2 sm:mt-3 font-bold leading-tight">
              {service.data.subtitle}
            </h1>
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px] text-[#FF845E] !text-[#FF845E] mb-[0.75rem] sm:mb-[1rem] md:mb-[1.5rem] font-bold leading-tight">
              {service.data.subtitle0}
            </h2>
            <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] text-[#FF845E] !text-[#FF845E] mb-[0.75rem] sm:mb-[1rem] md:mb-[1.25rem] mt-0 font-bold leading-tight">
              {service.data.subtitle1}
            </h3>
            <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-white leading-[1.4] sm:leading-[1.5] md:leading-[1.6] mt-4 sm:mt-6 md:mt-8">
              {service.data.details1}
            </p>
          </div>

          {/* Right side: Image - 40% width */}
          <div className="w-full lg:w-2/5 flex justify-center">
            <img
              src="/assets/imgs/pharma/cortex-brain-chart.png"
              alt="Cortex 360 Brain Chart"
              className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] rounded-lg sm:rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotService;
