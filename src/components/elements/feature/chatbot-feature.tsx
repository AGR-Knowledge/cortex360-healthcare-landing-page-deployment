"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// lib
import { markdownify } from "@/lib/helper/convert";
import { cn } from "@/lib/utils";

// types
import { ActionBtnType } from "@/types";

// shadcn components
import { buttonVariants } from "@/components/ui/button";

// components
import Title1 from "@/components/shared/title/title1";

type Props = {
  feature: {
    data: {
      // title: string;
      // title2: string;
      image: string;
      title3: string;
      details: string;
      image1: string;
      image2: string;
      items: string[];
      subtitle: string;
      subtitle1: string;
      subtitle2: string;
      feature_items: {
        icon: string;
        text: string;
      }[];
      subtitle3: string;
      action_btn: ActionBtnType;
    };
  };
};

const ChatbotFeature = ({ feature }: Props) => {
  const {image,title3, details, image1, image2, items,subtitle,subtitle1,subtitle2, feature_items,subtitle3, action_btn } =
    feature.data;

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section
      className="w-full"
      ref={containerRef}
    >
      <div className="bg-sec_bg-2 w-full rounded-theme px-[30px] md:px-[50px] xl:px-[70px] 2xl:px-[130px] pt-[20px] md:pt-[30px] xl:pt-[40px]  flex flex-col items-center justify-center text-right 2xl:pt-[5px] pb-[60px] md:pb-[10px] xl:pb-[50px] 2xl:pb-[1 0px] min-h-[500px] md:min-h-[600px] xl:min-h-[700px] sec_space_bottom2">
        {/* <Title1 text={title} className="has_fade_anim text-[40px]" /> */}
        {/* <Title1 text={title2} className="has_fade_anim text-[20px]" /> */}
          {/* Top Title Image (full width) */}
        <div className="w-full flex justify-center mb-10">
          <Image
            width={950}
            height={150}
            src="/assets/imgs/feature/chatbot/img-s-19.png"
            className="w-full max-w-[950px] h-auto object-contain"
            alt="title image"
          />
        </div>
        <div>
          {/* Title3 directly below top image */}
          <Title1 text={title3} className="text-[18px] font-bold !font-bold mb-6 text-center md:text-left" />
        </div>
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 w-full text-left mt-10">
          {/* Left: Image */}
          <div className="w-full md:w-1/2">
            <Image
              width={400}
              height={293}
              src="/assets/imgs/feature/chatbot/img-s-20.png"
              className="w-full h-auto object-contain"
              alt="chart image"
            />
          </div>

          {/* Right: Text content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            {/* <Title1 text={title3} className="text-[18px] font-bold !font-bold mb-6 " /> */}
            <p className="text-[16px] md:text-[18px] leading-relaxed text-gray-700 mb-6 ">{details}</p>

            {items && items.length > 0 && (
              <div className="space-y-4">
                {items.map((item, i) => (
                  <p
                    key={i}
                    className="[&>span]:font-bold [&>span]:text-primary "
                    dangerouslySetInnerHTML={markdownify(item)}
                  />
                ))}
              </div>
            )}
            {/* Title with icon  title_t imgs */}
            <div className="flex items-center gap-4 mb-8 mt-20 pl-20">
              <Image
                src="/assets/imgs/feature/chatbot/img-s-21.png"
                width={60}
                height={60}
                alt="title icon"
                className="min-w-[60px] min-h-[60px] object-contain"
              />
              <h1 className="text-[26px] md:text-[40px] lg:text-[28px] xl:text-[32px] 2xl:text-[24px] text-[#FF845E] !text-[#FF845E]">
                {subtitle}
              </h1>
            </div>
            {/* Title with icon title_t1 imgs */}
            <div className="flex items-center gap-4 mb-8 pl-20">
              <Image
                src="/assets/imgs/feature/chatbot/img-s-22.png"
                width={60}
                height={60}
                alt="title1 icon"
                className="min-w-[60px] min-h-[60px] object-contain"
              />
              <h1 className="text-[26px] md:text-[30px] lg:text-[28px] xl:text-[32px] 2xl:text-[24px] text-[#FF845E] !text-[#FF845E]">
                {subtitle1}
              </h1>
            </div>
            {/* Title with icon title_t3 imgs */}
            <div className="flex items-center gap-4 mb-8 pl-20 " >
              <Image
                src="/assets/imgs/feature/chatbot/img-s-23.png"
                width={60}
                height={60}
                alt="title3 icon"
                className="min-w-[60px] min-h-[60px] object-contain"
              />
              <h1 className="text-[26px] md:text-[30px] lg:text-[28px] xl:text-[32px] 2xl:text-[24px] text-[#FF845E] !text-[#FF845E]">
                {subtitle2}
              </h1>
            </div> 
          </div>
 
        </div>
        {action_btn && action_btn.enable && (
          <div className="mt-[48px] has_fade_anim">
            <h2 className="text-[20px] md:text-[32px] font-semibold text-black text-center">
              Ask. See. Act with <span className="text-[#FF845E] font-bold">AI</span>
            </h2>
            <Link
              href={action_btn.link}
              className={cn(buttonVariants({ variant: "primary3" }),
              "border border-border rounded-lg px-8 py-4 text-lg md:text-xl font-semibold w-auto"
            )}
            >
              <span className="btn-span uppercase" data-text={action_btn.label}>
                {action_btn.label}
              </span>
            </Link>
          </div>
        )}
      </div>
      {/* <div className="bg-[#FBDBDB] rounded-theme px-[30px] md:px-[50px] xl:px-[70px] 2xl:px-[130px] pt-[68px] lg:pt-[80px] pb-[20px]">
        <div className="relative pt-[50px]">
          <div className="absolute top-0 end-[55px]">
            {image2 && (
              <Image
                width={250}
                height={333}
                src={image2}
                data-speed="0.9"
                alt="dialog image"
              />
            )}
          </div>
          <div>
            {image1 && (
              <Image width={660} height={485} src={image1} alt="dialog image" />
            )}
          </div>
        </div>
        {feature_items && feature_items.length && (
          <div className="mt-[40px] 2xl:mt-[80px] flex flex-wrap items-start gap-[10px]">
            {feature_items.map((item, i) => (
              <div
                key={`feature_item-${i}`}
                className="bg-white rounded-[10px] px-[9px] py-[5px] flex gap-[10px]"
              >
                <Image
                  width={14}
                  height={15}
                  src={item.icon}
                  className="h-[15px]"
                  alt="imoji icon"
                />
                <p className="text-[14px]">{item.text}</p>
              </div>
            ))}
          </div>
        )}
      </div> */}
    </section>
  );
};

export default ChatbotFeature;
