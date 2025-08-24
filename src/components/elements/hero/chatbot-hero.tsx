"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { RiAiGenerate } from "react-icons/ri";
import { SiPagespeedinsights } from "react-icons/si";
import { MdPrivacyTip } from "react-icons/md";
import { LuBrain } from "react-icons/lu";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";

// context
import { useContact } from "@/context/contact.context";

// icons
import { FaStar } from "react-icons/fa6";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// lib
import { cn } from "@/lib/utils";
import { ActionBtnType } from "@/types";

// shadcn components
import { buttonVariants } from "@/components/ui/button";

type Props = {
  hero: {
    data: {
      image0: string;
      title: string;
      image_t: string;
      title1: string;
      image_t1: string;
      title3: string;
      image_t3: string;
      details: string;
      action_btn: ActionBtnType;
      features: string[];
      image1: string;
      image2: string;
      review: {
        enable: true;
        title: string;
        rating: number;
        count: string;
        brand_logo: string;
      };
    };
  };
};

const ChatbotHero = ({ hero }: Props) => {
  const { image0, title, image_t, title1, image_t1, title3, image_t3, details, action_btn, features, image1 } =
    hero.data;

  const containerRef = useRef<HTMLDivElement>(null!);
  const { openContactModal } = useContact();
  const [isMuted, setIsMuted] = useState(true);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );
  return (
    <section className="w-full min-w-full max-w-none px-[1rem] sm:px-[1.5rem] md:px-[2rem] lg:px-[2.5rem] xl:px-[3rem] mt-[1rem] sm:mt-[1.5rem] md:mt-[2rem] lg:mt-[2.5rem] xl:mt-[3rem] mb-[4rem] sm:mb-[5rem] md:mb-[6rem] lg:mb-[7rem] xl:mb-[8rem]">
      <div
        className="w-full min-w-full max-w-none flex flex-col lg:flex-row gap-[1rem] sm:gap-[1.5rem] md:gap-[2rem] lg:gap-[2.5rem] xl:gap-[3rem]"
        ref={containerRef}
      >
        {/* Left Content Section */}
        <div className="w-full lg:w-2/5 bg-sec_bg-2 rounded-theme pt-[1rem] sm:pt-[1.5rem] md:pt-[2rem] lg:pt-[2.5rem] xl:pt-[3rem] pb-[1.5rem] sm:pb-[2rem] md:pb-[2.5rem] lg:pb-[3rem] xl:pb-[4rem] px-[1rem] sm:px-[1.5rem] md:px-[2rem] lg:px-[2.5rem] xl:px-[3rem]">
          {/* Logo Component */}
          <div className="flex flex-col items-start mb-[1rem] sm:mb-[1.5rem] md:mb-[2rem] lg:mb-[2.5rem]">
            {/* Main Logo */}
            <div className="flex items-baseline mb-[0.5rem] sm:mb-[1rem] flex-wrap">
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#F08060]">Cortex</span>
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1A283C] ml-1 sm:ml-2">360</span>
            </div>
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1A283C]">Healthcare</span>

            {/* Tagline */}
            <p className="text-base sm:text-lg md:text-xl text-[#1A283C] mt-2 sm:mt-3 font-normal">Discover. Design. Deploy.</p>

            {/* Separator Line */}
            <div className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-0.5 bg-[#F08060] mt-2 sm:mt-3 opacity-80"></div>

            {/* Platform Description */}
            <div className="flex items-baseline mt-2 sm:mt-3 text-left justify-start flex-wrap">
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#1A283C] flex-shrink-0">Enterprise AI</span>
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#F08060] ml-1 sm:ml-2 flex-shrink-0">Intelligence Platform</span>
            </div>
          </div>

          {/* Title with icon title_t imgs */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 mt-[1rem]">
            <RiAiGenerate size={32} className="min-w-[28px] sm:min-w-[32px] md:min-w-[36px] lg:min-w-[40px] min-h-[28px] sm:min-h-[32px] md:min-h-[36px] lg:min-h-[40px] text-orange-500 flex-shrink-0" />
            <h1 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] leading-tight">
              {title}
            </h1>
          </div>

          {/* Title with icon title_t1 imgs */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
            <SiPagespeedinsights size={32} className="min-w-[28px] sm:min-w-[32px] md:min-w-[36px] lg:min-w-[40px] min-h-[28px] sm:min-h-[32px] md:min-h-[36px] lg:min-h-[40px] text-orange-500 flex-shrink-0" />
            <h1 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] leading-tight">
              {title1}
            </h1>
          </div>

          {/* Title with icon title_t3 imgs */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
            <MdPrivacyTip size={32} className="min-w-[28px] sm:min-w-[32px] md:min-w-[36px] lg:min-w-[40px] min-h-[28px] sm:min-h-[32px] md:min-h-[36px] lg:min-h-[40px] text-orange-500 flex-shrink-0" />
            <h1 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] leading-tight">
              {title3}
            </h1>
          </div>

          {/* Details */}
          <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.4] max-w-full lg:max-w-[856px]">
            {details}
          </p>

          {/* Action Button */}
          {action_btn && action_btn.enable && (
            <div className="mt-[1rem] sm:mt-[1.5rem] md:mt-[2rem]">
              <button
                onClick={openContactModal}
                className={cn(
                  buttonVariants({ variant: "primary2", size: "sm" }),
                  "border border-border rounded-lg w-full text-sm sm:text-base md:text-lg py-2 sm:py-3 md:py-4"
                )}
              >
                <span
                  className="btn-span uppercase"
                  data-text={action_btn.label}
                >
                  {action_btn.label}
                </span>
              </button>
            </div>
          )}

          {/* Features List */}
          {features && features.length && (
            <div className="mt-[2rem] sm:mt-[2.5rem] md:mt-[3rem] lg:mt-[3.5rem] xl:mt-[4rem]">
              <ul className="space-y-2 sm:space-y-3">
                {features.map((item, i) => (
                  <li
                    key={`feature_item-${i}`}
                    className="text-[14px] sm:text-[16px] md:text-[18px] leading-[1.44] flex items-start gap-[8px] sm:gap-[10px]"
                  >
                    <span className="text-orange-500 mt-0.5 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Video Section */}
        <div className="w-full lg:w-3/5 flex-shrink-0">
          <div
            className="has_fade_anim w-full"
            data-delay="0.3"
            data-fade-offset="0"
          >
            <div className="relative rounded-theme overflow-hidden h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px] 2xl:h-[650px] min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[550px] xl:min-h-[600px] 2xl:min-h-[650px]">
              <video
                ref={(el) => {
                  if (el) {
                    el.muted = isMuted;
                  }
                }}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
                controlsList="nodownload nofullscreen noremoteplayback"
                style={{
                  clipPath: 'inset(0 0 0 0)',
                  WebkitClipPath: 'inset(0 0 0 0)'
                }}
              >
                <source src="/assets/imgs/pharma/CORTEX360_INTRO.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Conditional Volume Control Overlay */}
              <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-5 xl:bottom-6 right-2 sm:right-3 md:right-4 lg:right-5 xl:right-6">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 md:p-2.5 lg:p-3 xl:p-3.5 rounded-full transition-colors duration-200"
                  title={isMuted ? "Unmute Video" : "Mute Video"}
                >
                  {isMuted ? (
                    <HiVolumeOff className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" />
                  ) : (
                    <HiVolumeUp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Spacing */}
          <div
            className="relative -mt-[40px] sm:-mt-[50px] md:-mt-[60px] lg:-mt-[70px] xl:-mt-[80px] 2xl:-mt-[90px] rounded-theme hidden md:block has_fade_anim"
            data-delay="0.6"
            data-fade-offset="0"
          >
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotHero;
