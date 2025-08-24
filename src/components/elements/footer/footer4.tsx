import Link from "next/link";
import siteConfig from "@/config/siteConfig.json";

// components
import { socialShare1 } from "@/components/tools/social";

type Props = {
  footerNav: {
    title: string;
    children?: {
      name: string;
      path: string;
    }[];
  }[];
};

const Footer4 = ({ footerNav }: Props) => {
  const { social, footer_info } = siteConfig;
  const { copyright } = footer_info;
  return (
    <footer className="bg-[#05111A]">
      <div className="w-full px-[1rem] sm:px-[1.5rem] md:px-[2rem] lg:px-[2.5rem] xl:px-[3rem] border-t border-border">
        <div className="flex flex-col lg:flex-row flex-wrap justify-between gap-[2rem] sm:gap-[2.5rem] md:gap-[3rem] lg:gap-[4rem] xl:gap-[5rem] pt-[2rem] sm:pt-[2.5rem] md:pt-[3rem] lg:pt-[4rem] xl:pt-[5rem] pb-[2rem] sm:pb-[2.5rem] md:pb-[3rem] lg:pb-[4rem] xl:pb-[5rem] overflow-hidden">
          {footerNav &&
            footerNav.length &&
            footerNav.slice(0, 3).map((nav, i) => (
              <div key={`footer_nav-${i}`} className="w-full lg:max-w-[130px] text-center lg:text-left">
                <p className="text-[14px] sm:text-[15px] md:text-[16px] !text-white !font-bold uppercase !leading-none">
                  {nav.title}
                </p>
                {nav.children && nav.children.length && (
                  <ul className="mt-[1.5rem] sm:mt-[2rem] md:mt-[2.5rem] lg:mt-[3rem]">
                    {nav.children.map((child, j) => (
                      <li
                        key={`child_nav-${i}${j}`}
                        className="text-[12px] sm:text-[13px] md:text-[14px] text-white-2 leading-[1.5] sm:leading-[1.8] md:leading-[2.1] lg:leading-[30px] font-bold uppercase mb-2 sm:mb-3 lg:mb-0"
                      >
                        <Link href={child.path} className="hover:text-white transition-colors duration-200">
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          <div className="w-full lg:min-w-[378px] 2xl:min-w-[434px] relative ps-0 lg:ps-[2rem] sm:lg:ps-[2.5rem] md:lg:ps-[3rem] xl:lg:ps-[4rem] before:hidden before:lg:block before:absolute before:content-[''] before:w-[1px] before:h-[calc(100%+300px)] before:-top-[150px] before:start-0 before:bg-border text-center lg:text-left">
            <p className="max-w-[330px] mx-auto lg:mx-0 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] text-white-2 leading-relaxed">
              Sassly is a real early-stage software looking for an analytics
              platform that scales with you, check out our stage program.
            </p>
            {social && social.length && (
              <ul className="flex justify-center lg:justify-start gap-[0.5rem] sm:gap-[0.75rem] md:gap-[1rem] mt-[2rem] sm:mt-[2.5rem] md:mt-[3rem] lg:mt-[3.5rem] xl:mt-[4rem]">
                {social.map((item, i) => (
                  <li
                    key={`social_share-${i}`}
                    className="group leading-none flex justify-center items-center w-[32px] sm:w-[34px] md:w-[36px] h-[32px] sm:h-[34px] md:h-[36px] border border-border rounded-[8px] sm:rounded-[9px] md:rounded-[10px] hover:bg-white hover:border-transparent transition-all duration-200"
                  >
                    {socialShare1(
                      item,
                      "text-white-2 group-hover:text-[#051119]"
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {copyright && copyright.enable && (
          <div className="flex justify-center py-[1rem] sm:py-[1.25rem] md:py-[1.5rem] lg:py-[2rem] xl:py-[2.5rem] border-t border-border">
            <p className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] font-bold text-white-2 text-center">
              {copyright.label}{" "}
              <Link href={copyright.link} className="text-white hover:underline transition-all duration-200">
                {copyright.company}
              </Link>
            </p>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer4;
