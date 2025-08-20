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
    <section className="w-full mt-[3rem] px-[3rem]">
      <div
        className="flex flex-col lg:flex-row gap-[20px]"
        ref={containerRef}
      >
        <div className="bg-sec_bg-2 rounded-theme pt-[10px] md:pt-[20px] lg:pt-[30px] xl:pt-[40px] 2xl:pt-[50px] pb-[20px] md:pb-[30px] lg:pb-[40px] xl:pb-[50px] px-[25px] md:px-[30px] lg:px-[50px] xl:px-[50px] 2xl:px-[50px] lg:w-2/5">
          {/* Logo Component */}
          <div className="flex flex-col items-start mb-4">
            {/* Main Logo */}
            <div className="flex items-baseline mb-2">
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F08060]">Cortex</span>
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A283C] ml-2">360</span>
            </div>
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A283C]">Healthcare</span>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-[#1A283C] mt-3 font-normal">Discover. Design. Deploy.</p>

            {/* Separator Line */}
            <div className="w-32 h-0.5 bg-[#F08060] mt-3 opacity-80"></div>

            {/* Platform Description */}
            <div className="flex items-baseline mt-3 text-left justify-start">
              <span className="text-xl md:text-2xl font-bold text-[#1A283C] flex-shrink-0">Enterprise AI</span>
              <span className="text-xl md:text-2xl font-bold text-[#F08060] ml-2 flex-shrink-0">Intelligence Platform</span>
            </div>
          </div>
          {/* Title with icon  title_t imgs */}
          <div className="flex items-center gap-4 mb-4 mt-[1rem]">
            <RiAiGenerate size={40} className="min-w-[40px] min-h-[40px] text-orange-500" />
            <h1 className="text-[18px] md:text-[24px] lg:text-[20px] xl:text-[22px] 2xl:text-[18px]">
              {title}
            </h1>
          </div>
          {/* Title with icon title_t1 imgs */}
          <div className="flex items-center gap-4 mb-4">
            <SiPagespeedinsights size={40} className="min-w-[40px] min-h-[40px] text-orange-500" />
            <h1 className="text-[18px] md:text-[22px] lg:text-[20px] xl:text-[22px] 2xl:text-[18px]">
              {title1}
            </h1>
          </div>
          {/* Title with icon title_t3 imgs */}
          <div className="flex items-center gap-4 mb-4">
            <MdPrivacyTip size={40} className="min-w-[40px] min-h-[40px] text-orange-500" />
            <h1 className="text-[18px] md:text-[22px] lg:text-[20px] xl:text-[22px] 2xl:text-[18px]">
              {title3}
            </h1>
          </div>
          <p className="text-[18px] xl:text-[20px] leading-[1.4] max-w-[856px]">
            {details}
          </p>
          {action_btn && action_btn.enable && (
            <div className="mt-[0.5rem]">
              <button
                onClick={openContactModal}
                className={cn(
                  buttonVariants({ variant: "primary2", size: "sm" }),
                  "border border-border rounded-lg w-full"
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
          {features && features.length && (
            <div className="mt-[44px]">
              <ul>
                {features.map((item, i) => (
                  <li
                    key={`feature_item-${i}`}
                    className="text-[18px] leading-[1.44] flex items-center gap-[10px]"
                  >
                    {/* <Image
                      width={15}
                      height={16}
                      src="/assets/imgs/icon/check-3.png"
                      className="h-[16px] rtl_y"
                      alt="icon image"
                    /> */}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="lg:w-3/5">
          <div
            className="has_fade_anim"
            data-delay="0.3"
            data-fade-offset="0"
          >
            <div className="relative rounded-theme overflow-hidden h-[600px] min-h-[600px]">
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
              <div className="absolute bottom-4 right-4">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
                  title={isMuted ? "Unmute Video" : "Mute Video"}
                >
                  {isMuted ? (
                    <HiVolumeOff className="w-5 h-5" />
                  ) : (
                    <HiVolumeUp className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div
            className="relative -mt-[80px] rounded-theme hidden md:block has_fade_anim"
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
