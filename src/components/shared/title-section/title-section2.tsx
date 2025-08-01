import React from "react";

// lib
import { cn } from "@/lib/utils";

// components
import Title1 from "../title/title1";

type Props = {
  title: string;
  sub_title?: string;
  details: string;
  heading?: boolean;
  html?: boolean;
  className?: string;
  titleClassName?: string;
  detailsClassName?: string;
  subTitleClassName?: string;
};

const TitleSection2 = ({
  title,
  sub_title,
  details,
  heading = false,
  html = false,
  className,
  titleClassName,
  detailsClassName,
  subTitleClassName,
}: Props) => {
  return (
    <div className={cn("text-center", className)}>
      {sub_title && (
        <div>
          <span
            className={cn(
              "text-[12px] font-bold uppercase text-primary bg-[#EAFAF2] px-[16px] py-[8px] inline-block rounded-[10px] mb-[17px] has_fade_anim",
              subTitleClassName
            )}
          >
            {sub_title}
          </span>
        </div>
      )}
      <Title1
        text={title}
        heading1={heading}
        html={html}
        className={cn("max-w-[565px] mx-auto has_fade_anim", titleClassName)}
      />
      <p
        className={cn(
          "mt-[23px] lg:mt-[33px] max-w-[550px] mx-auto has_fade_anim",
          detailsClassName
        )}
      >
        {details}
      </p>
    </div>
  );
};

export default TitleSection2;
