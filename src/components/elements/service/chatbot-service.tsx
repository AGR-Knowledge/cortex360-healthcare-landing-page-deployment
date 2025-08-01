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
    <section className="pt-[53px] md:pt-[73px] xl:pt-[93px] 2xl:pt-[123px] sec_space_bottom2">
      <div
        className="container 2xl:max-w-[1630px] font-bold"
        ref={containerRef}
      >
        {/* Main Title with improved styling */}
        <h1 className="text-left text-[#00253C] text-[34px] md:text-[55px] lg:text-[52px] font-bold mb-3 font-inter ml-20">
          Your data lives everywhere.
          <br />
          Insights are trapped, decisions delayed.
        </h1>

        {/* Subtitle */}
        <h2 className="text-center text-[32px] md:text-[45px] lg:text-[55px] font-bold text-[#091E42]  mt-2 font-inter">
          {title2}
        </h2>

        {/* Paragraph below titles */}
        <p className="text-left text-[18px] font-medium text-gray-600 mt-6 font-inter ml-20 whitespace-nowrap overflow-hidden text-ellipsis">
          {details}
        </p>

        {/* Service Cards */}
        {services && services.length > 0 && (
          <div className="mt-[43px] 2xl:mt-[63px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
            {services.map((item, i) => (
              <div
                key={item.slug}
                className="has_fade_anim"
                data-delay={delayTime(i + 1)}
              >
                <ServiceCard3 service={item} />
              </div>
            ))}
          </div>
        )}

        {/* Bottom Block with Subtitle and Image */}
        <div className="mt-[60px] bg-[#150732] rounded-[22px] p-6 flex flex-col-reverse lg:flex-row items-center gap-[40px]">
          {/* Left side: Title and details */}
          <div className="lg:w-1/2">
            <h1 className="text-[55px] text-white !text-white  mb-[10px] mt-3 font-bold">
              {service.data.subtitle}
            </h1>
            <h2 className="text-[55px] text-[#FF845E] !text-[#FF845E] mb-[20px] font-bold">
              {service.data.subtitle0}
            </h2>
            <h3 className="text-[30px] text-[#FF845E] !text-[#FF845E] mb-[16px] mt-0 font-bold">
              {service.data.subtitle1}
            </h3>
            <p className="text-[18px] text-white leading-[28px] mt-10">
              {service.data.details1}
            </p>
          </div>

          {/* Right side: Image */}
          <div className="lg:w-1/2 flex justify-end pr-8">
            <img
              src={service.data.background_image}
              alt="illustration"
              className="max-w-[350px] rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotService;
