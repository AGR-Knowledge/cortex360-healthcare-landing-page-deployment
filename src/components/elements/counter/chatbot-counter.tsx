"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// lib
import { delayTime2 } from "@/lib/helper/delayTime";

// components
import TitleSection2 from "@/components/shared/title-section/title-section2";

type AppType = {
  enable: boolean;
  title: string;
  details: string;
  image: string;
  app_shape: string;
  buttons: {
    image: string;
    link: string;
  }[];
};

type Props = {
  counter: {
    data: {
      title: string;
      details: string;
      apps: AppType;
      counters: {
        number: number;
        unit: string;
        text: string;
      }[];
      shape1_img: string;
    };
  };
};

const ChatbotCounter = ({ counter }: Props) => {
  const { title, details, apps, counters, shape1_img } = counter.data;

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  useEffect(() => {
    const details = {
      "sales-tracking": "Track and visualize real-time secondary sales data at a granular level with intelligent pattern recognition and automated reporting capabilities.",
      "dashboard": "Create insightful dashboards instantly by typing simple natural language queries. Transform complex data into beautiful, actionable visualizations.",
      "tender": "Automate tender analysis and supplier matching with AI-trained rules and institutional memory for faster, more accurate procurement decisions.",
      "forecasting": "Predict product demand and optimize inventory distribution using advanced AI models with real-time market intelligence and seasonal adjustments.",
      "conversational": "Ask Cortex360 questions in plain English and get precise insights instantly. Natural language processing meets healthcare data intelligence.",
      "clinical": "Reduce clinical trial setup time by 70% through automated site readiness assessment and intelligent form standardization protocols."
    };

    const tooltip = document.getElementById("tooltip");
    const nodes = document.querySelectorAll(".node[data-id]");
    const lines = document.querySelectorAll(".connecting-line");

    nodes.forEach((node, index) => {
      node.addEventListener("mouseenter", () => {
        const id = node.getAttribute("data-id");
        if (id && details[id] && tooltip) {
          tooltip.innerHTML = details[id];
          tooltip.classList.add("show");
          tooltip.style.top = `${node.offsetTop + node.offsetHeight + 15}px`;
          tooltip.style.left = `${Math.min(node.offsetLeft, 800)}px`;

          if (lines[index]) {
            lines[index].classList.add("active");
          }
        }
      });

      node.addEventListener("mouseleave", () => {
        if (tooltip) {
          tooltip.classList.remove("show");
        }
        lines.forEach((line) => line.classList.remove("active"));
      });

      node.addEventListener("click", () => {
        nodes.forEach((n) => n.classList.remove("active"));
        node.classList.add("active");

        const id = node.getAttribute("data-id");
        if (id && details[id]) {
          tooltip.innerHTML = details[id];
          tooltip.classList.add("show");
          tooltip.style.top = `${node.offsetTop + node.offsetHeight + 15}px`;
          tooltip.style.left = `${Math.min(node.offsetLeft, 800)}px`;
        }
      });
    });

    document.addEventListener("click", (e) => {
      if (!(e.target as HTMLElement).closest(".node")) {
        nodes.forEach((n) => n.classList.remove("active"));
        tooltip.classList.remove("show");
        lines.forEach((line) => line.classList.remove("active"));
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        nodes.forEach((n) => n.classList.remove("active"));
        tooltip.classList.remove("show");
      }
    });
  }, []);

  return (
    <section className="pt-[53px] md:pt-[73px] xl:pt-[93px] 2xl:pt-[123px]">
      <div className="w-full text-[16px] has_fade_anim" ref={containerRef}>
        <div className="mt-[32px] 2xl:mt-[62px] grid gap-[20px] grid-cols-1 2xl:grid-cols-1">
          <div className="bg-sec_bg-2 rounded-theme flex flex-col justify-start px-[30px] 2xl:px-[80px] py-[56px] w-full max-w-none mx-auto min-h-[600px] 2xl:min-h-[700px]">
            <TitleSection2
              title={title}
              details={details}
              html
              titleClassName="w-full flex justify-center whitespace-nowrap text-center 2xl:text-[55px] text-[55px] leading-[1.16] has_fade_anim "
              detailsClassName="text-[18px] text-center mt-[10px] 2xl:mt-[20px] max-w-[800px] mx-auto has_fade_anim w-full px-4"
            />
            {apps && apps.enable && (
              <>
                <div className="use-case-map mt-[40px] relative">
                  {/* SVG Lines */}
                  <svg
                    viewBox="0 0 1100 700"
                    className="absolute top-0 left-0 w-full h-full z-0"
                  >
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#6366f1" stopOpacity="1" />
                        <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
                        <stop offset="100%" stopColor="#ec4899" stopOpacity="1" />
                      </linearGradient>
                    </defs>
                    {[
                      "M550,340 Q350,200 200,120",
                      "M550,340 Q750,200 900,120",
                      "M550,340 Q350,340 200,320",
                      "M550,340 Q750,340 900,320",
                      "M550,340 Q350,480 200,580",
                      "M550,340 Q750,480 900,580",
                    ].map((d, idx) => (
                      <path key={idx} className="connecting-line" d={d} />
                    ))}
                  </svg>

                  {/* Tooltip */}
                  <div id="tooltip" className="tooltip" />

                  {/* Nodes */}
                  {[
                    {
                      id: "product-development",
                      top: 700,
                      left: 400,
                      title: "🛠️ Product Development",
                      desc: "Feature Prioritization",
                    },
                    {
                      id: "sales-tracking",
                      top: 100,
                      left: 140,
                      title: "🔍 Intelligent",
                      desc: "Secondary Sales Tracking",
                    },
                    {
                      id: "dashboard",
                      top: 100,
                      left: 820,
                      title: "📊 Natural Language",
                      desc: "Dashboard Generation",
                    },
                    {
                      id: "tender",
                      top: 300,
                      left: 140,
                      title: "🤖 AI-Assisted",
                      desc: "Tender Analyzer",
                    },
                    {
                      id: "forecasting",
                      top: 300,
                      left: 820,
                      title: "📈 Advanced Demand &",
                      desc: "Inventory Forecasting",
                    },
                    {
                      id: "conversational",
                      top: 560,
                      left: 140,
                      title: "💬 Conversational",
                      desc: "Data Intelligence",
                    },
                    {
                      id: "clinical",
                      top: 560,
                      left: 820,
                      title: "🧪 Clinical",
                      desc: "Trial Setup",
                    }
                  ].map(({ id, top, left, title, desc }) => (
                    <div
                      key={id}
                      className="node"
                      data-id={id}
                      style={{ top: `${top}px`, left: `${left}px` }}
                    >
                      <div>{title}</div>
                      <div>{desc}</div>
                    </div>
                  ))}

                  {/* Center Node */}
                  <div className="node center">Cortex360</div>
                </div>
                <div className="mb-[10px] md:mb-[60px]">
                  {/* <h3 className="text-[30px] leading-[1.16] has_fade_anim">
                    {apps.title}
                  </h3>
                  <p className="mt-[20px] has_fade_anim">{apps.details}</p> */}
                  <div className="mt-[3px] has_fade_anim">
                    {/* <div className="hidden lg:block ms-[128px]">
                      {apps.app_shape && (
                        <Image
                          width={47}
                          height={76}
                          src={apps.app_shape}
                          className="rtl_y"
                          alt="shape image"
                        />
                      )}
                    </div> */}
                    {apps.buttons && apps.buttons.length && (
                      <div className="mt-[32px]">
                        {apps.buttons.map((item, i) => (
                          <div
                            key={`apps_button-${i}`}
                            className="mt-[20px] first:mt-0"
                          >
                            <Link href={item.link}>
                              {/* {item.image && (
                                <Image
                                  width={180}
                                  height={60}
                                  src={item.image}
                                  alt="app image"
                                />
                              )} */}
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                {/* <div className="has_fade_anim">
                  {apps.image && (
                    <Image
                      width={286}
                      height={486}
                      src={apps.image}
                      alt="app image"
                    />
                  )}
                </div> */}
              </>
            )}
          </div>
          <div className="flex flex-wrap gap-[20px] rounded-theme w-full md:w-[700px] lg:w-[785px] mx-auto relative justify-center lg:justify-between z-[1]">
            {/* {counters && counters.length && (
              <>
                {counters.slice(0, 3).map((item, i) => (
                  <div
                    key={`counter_item-${i}`}
                    className="rounded-theme relative bg-sec_bg-2 pt-[37px] 2xl:pt-[57px] pb-[33px] 2xl:pb-[53px] px-[35px] 2xl:px-[55px] outline-[20px] outline outline-white first:bg-[#EBE5FD] w-[300px] lg:w-[400px] first:w-[300px] lg:first:w-[365px] lg:[&:nth-child(3)]:!rounded-tr-[0px] lg:[&:nth-child(2)]:!rounded-bl-[0px] rtl:lg:[&:nth-child(3)]:!rounded-tr-[20px] rtl:lg:[&:nth-child(2)]:!rounded-bl-[20px] rtl:lg:[&:nth-child(3)]:!rounded-tl-[0px] rtl:lg:[&:nth-child(2)]:!rounded-br-[0px] [&:nth-child(3)]:before:hidden lg:[&:nth-child(3)]:before:block [&:nth-child(3)]:before:absolute [&:nth-child(3)]:before:content-[url(/assets/imgs/counter/chatbot/joint-shape.png)] [&:nth-child(3)]:before:-end-[19px] [&:nth-child(3)]:before:-top-[20px] [&:nth-child(3)]:before:z-[2] rtl:[&:nth-child(3)]:before:transform rtl:[&:nth-child(3)]:before:rotate-y-[180deg] has_fade_anim"
                    data-delay={delayTime2(i + 1)}
                  >
                    <h3 className="text-[40px] 2xl:text-[60px]">
                      <span>{item.number}</span>
                      {item.unit}
                    </h3>
                    <p className="mt-[15px] max-w-[250px]">{item.text}</p>
                  </div>
                ))}
                <div
                  className="rounded-theme w-[300px] lg:w-[365px] bg-[#D7EFDF] outline-[20px] outline outline-white pt-[37px] 2xl:pt-[57px] flex justify-center items-end has_fade_anim"
                  data-delay="0.45"
                >
                  {shape1_img && (
                    <Image
                      width={375}
                      height={264}
                      src={shape1_img}
                      className="object-cover w-full"
                      alt="Shape Image"
                    />
                  )}
                </div>
              </>
            )} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotCounter;
