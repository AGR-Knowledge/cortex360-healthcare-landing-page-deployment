"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

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
  const { image0,title,image_t, title1,image_t1,title3,image_t3, details, action_btn, features, image1} =
    hero.data;

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );
  return (
    <section className="pt-[10px]">
      <div
        className="grid grid-cols-1 lg:grid-cols-[1fr_490px] xl:grid-cols-[1fr_600px] 2xl:grid-cols-[1fr_820px] gap-[20px]"
        ref={containerRef}
      >
        <div className="bg-sec_bg-2 rounded-theme pt-[10px] md:pt-[20px] lg:pt-[30px] xl:pt-[40px] 2xl:pt-[50px] pb-[20px] md:pb-[30px] lg:pb-[40px] xl:pb-[50px] 2xl:pb-[60px] px-[25px] md:px-[30px] lg:px-[50px] xl:px-[70px] 2xl:px-[130px]">
          <Image
            width={800}
            height={600} // Adjust as needed for aspect ratio
            src="/assets/imgs/hero/chatbot/image1.png"
            className="rtl_y mb-10 pl-0 w-fill-available h-auto object-cover"
            alt="image0"
          />
          {/* Title with icon  title_t imgs */}
          <div className="flex items-center gap-4 mb-8 mt-20">
            <Image
              src="/assets/imgs/hero/chatbot/image_t.png"
              width={40}
              height={30}
              alt="title icon"
              className="min-w-[40px] min-h-[40px] object-contain"
            />
            <h1 className="text-[26px] md:text-[40px] lg:text-[28px] xl:text-[32px] 2xl:text-[24px]">
              {title}
            </h1>
          </div>
          {/* Title with icon title_t1 imgs */}
          <div className="flex items-center gap-4 mb-8">
            <Image
              src="/assets/imgs/hero/chatbot/image_t1.png"
              width={40}
              height={30}
              alt="title1 icon"
              className="min-w-[40px] min-h-[40px] object-contain"
            />           
            <h1 className="text-[26px] md:text-[30px] lg:text-[28px] xl:text-[32px] 2xl:text-[24px]">
              {title1}
            </h1>
          </div>  
          {/* Title with icon title_t3 imgs */}
          <div className="flex items-center gap-4 mb-8">
            <Image
              src="/assets/imgs/hero/chatbot/image_t3.png"
              width={40}
              height={30}
              alt="title3 icon"
              className="min-w-[40px] min-h-[40px] object-contain"
            />
            <h1 className="text-[26px] md:text-[30px] lg:text-[28px] xl:text-[32px] 2xl:text-[24px]">
              {title3}
            </h1>
          </div>  
          <p className="mt-[100px] text-[18px] xl:text-[20px] leading-[1.4] max-w-[856px]">
            {details}
          </p>
          {action_btn && action_btn.enable && (
            <div className="mt-[38px]">
              <Link
                href={action_btn.link}
                className={cn(
                  buttonVariants({ variant: "primary2", size:"sm" }),
                  "border border-border rounded-lg w-full"
                )}
              >
                <span
                  className="btn-span uppercase"
                  data-text={action_btn.label}
                >
                  {action_btn.label}
                </span>
              </Link>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          <div
            className="md:col-span-2 has_fade_anim"
            data-delay="0.3"
            data-fade-offset="0"
          >
            {image1 && (
              <Image
                width={520}
                height={330}
                src={image1}
                className="rounded-theme w-auto h-full object-cover"
                alt="ai image"
              />
            )}
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
