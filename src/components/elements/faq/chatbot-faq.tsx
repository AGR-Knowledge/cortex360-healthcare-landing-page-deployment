"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// lib
import { cn } from "@/lib/utils";

// types
import { ActionBtnType } from "@/types";

// shadcn components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";

// components
import Title1 from "@/components/shared/title/title1";

type Props = {
  faq: {
    data: {
      title: string;
      image: string;
      items: {
        question: string;
        answer: string;
      }[];
      action_btn: ActionBtnType;
    };
  };
};

const ChatbotFAQ = ({ faq }: Props) => {
  const { title, image, items, action_btn } = faq.data;

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="w-full px-[1rem] sm:px-[1.5rem] md:px-[2rem] lg:px-[2.5rem] xl:px-[3rem] mt-[2rem] sm:mt-[2.5rem] md:mt-[3rem] lg:mt-[3.5rem] xl:mt-[4rem]">
      <div className="grid gap-[1rem] sm:gap-[1.5rem] md:gap-[2rem] grid-cols-1 lg:grid-cols-[1fr_395px] xl:grid-cols-[1fr_495px] 2xl:grid-cols-[1fr_695px]">
        <div className="bg-sec_bg-2 rounded-theme pt-[2rem] sm:pt-[2.5rem] md:pt-[3rem] lg:pt-[4rem] xl:pt-[5rem] 2xl:pt-[6rem] px-[1rem] sm:px-[1.5rem] md:px-[2rem] lg:px-[2.5rem] xl:px-[3rem] sec_space_bottom2">
          <Title1 text={title} className="max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[510px] has_fade_anim" />
          <div className="mt-[2rem] sm:mt-[2.5rem] md:mt-[3rem] lg:mt-[3.5rem] xl:mt-[4rem] 2xl:mt-[5rem] has_fade_anim">
            {items && items.length && (
              <Accordion
                type="single"
                collapsible
                className="w-full has_fade_anim"
                defaultValue="item-2"
              >
                {items.map((item, i) => (
                  <AccordionItem
                    key={`accordion_item-${i}`}
                    value={`item-${i + 1}`}
                    className="border-b-0 mb-[0.5rem] sm:mb-[0.75rem] md:mb-[1rem] rounded-theme overflow-hidden"
                  >
                    <AccordionTrigger className="bg-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-xl leading-tight text-primary shadow-none text-start font-normal pt-[1rem] sm:pt-[1.25rem] md:pt-[1.5rem] lg:pt-[1.75rem] xl:pt-[2rem] pb-[1rem] sm:pb-[1.25rem] md:pb-[1.5rem] lg:pb-[1.75rem] xl:pb-[2rem] px-[1rem] sm:px-[1.5rem] md:px-[2rem] lg:px-[2.5rem] xl:px-[3rem] hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="bg-white text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-lg leading-[1.44] text-secondary pt-0 pb-[1rem] sm:pb-[1.25rem] md:pb-[1.5rem] lg:pb-[1.75rem] xl:pb-[2rem] px-[1rem] sm:px-[1.5rem] md:px-[2rem] lg:px-[2.5rem] xl:px-[3rem]">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            )}
          </div>
        </div>
        <div className="relative rounded-theme rounded-tr-[15px] sm:rounded-tr-[20px] md:rounded-tr-[25px] lg:rounded-tr-[30px] overflow-hidden">
          {action_btn && action_btn.enable && (
            <div className="absolute end-0 top-0">
              <Image
                width={33}
                height={30}
                className="absolute top-0 end-[calc(100%+9px)] rtl_y w-[20px] sm:w-[25px] md:w-[30px] lg:w-[33px] h-[18px] sm:h-[22px] md:h-[26px] lg:h-[30px]"
                src="/assets/imgs/shape/shape-s-18.png"
                alt="shape image"
              />
              <Image
                width={30}
                height={19}
                className="absolute top-[calc(100%+9px)] -end-[1px] rtl_y w-[18px] sm:w-[22px] md:w-[26px] lg:w-[30px] h-[12px] sm:h-[14px] md:h-[16px] lg:h-[19px]"
                src="/assets/imgs/shape/shape-s-19.png"
                alt="shape image"
              />
              <Link
                href={action_btn.link}
                className={cn(
                  buttonVariants({ variant: "primary3" }),
                  "outline-[10px] sm:outline-[15px] md:outline-[20px] outline outline-white text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 lg:py-4"
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
          {image && (
            <Image
              width={695}
              height={923}
              src={image}
              className="object-cover h-full w-full"
              alt="gallery image"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ChatbotFAQ;
