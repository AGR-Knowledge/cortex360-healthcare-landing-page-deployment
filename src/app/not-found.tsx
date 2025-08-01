"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import navigation from "@/config/navigation.json";

// shadcn components
import { Button } from "@/components/ui/button";

// Components
import Footer2 from "@/components/elements/footer/footer2";
import Header4 from "@/components/elements/header/header4";

import { AppContextProvider } from "@/context/app.context";

// styles
import "@/style/globals.css";
import "@/style/main.scss";

import ScrollSmootherComponent from "@/components/tools/scroll-smoother";
import ToolsComponent from "@/components/tools";
import ScrollTop from "@/components/tools/scroll-top";

export default function NotFound() {
  const router = useRouter();

  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
      </head>
      <body suppressHydrationWarning={true} dir="ltr">
        <AppContextProvider>
          <div className="tropiline-regular root-layout" theme-setting="style-4">
            <ScrollSmootherComponent />
            <ToolsComponent />
            <ScrollTop />
            <Header4 headerNav={navigation.header} />
            <div id="smooth-wrapper">
              <div id="smooth-content">
                <div className="absolute w-full h-[1100px] top-0 start-0 -z-[1] bg-gradient-180 from-[#FBF7F4] to-[#fbf7f400]" />
                <div className="pt-[150px] md:pt-[230px] sec_space_bottom1">
                  <div className="container">
                    <div className="relative">
                      <div className="absolute bottom-[52px] end-[calc(100%+130px)] w-max">
                        <Image
                          width={60}
                          height={60}
                          src="/assets/imgs/shape/shape-s-59.png"
                          className="rtl_y"
                          alt="shape image"
                        />
                      </div>
                      <div className="absolute top-[272px] start-[calc(100%-60px)] 2xl:start-[calc(100%-150px)] w-max z-[1]">
                        <Image
                          width={96}
                          height={96}
                          src="/assets/imgs/shape/shape-s-28.png"
                          className="rtl_y"
                          alt="shape image"
                        />
                      </div>
                      <div className="max-w-[1070px] mx-auto relative p-[80px] border border-border-2 rounded-[40px] ">
                        <h1 className="absolute inline-block text-[18px] top-0 start-[70px] px-[9px] bg-[#FCF9F7] -translate-y-[50%]">
                          Error page
                        </h1>
                        <div>
                          <Image
                            width={550}
                            height={305}
                            style={{ height: "auto" }}
                            src="/assets/imgs/error/error-404.png"
                            className="mx-auto"
                            alt="error image"
                          />
                        </div>
                      </div>
                      <div className="text-center mt-[61px]">
                        <h2 className="text-[36px] text-primary font-colasta font-bold leading-none">
                          We&apos;ve lost this page
                        </h2>
                        <p className="mt-[28px] text-[21px] leading-[1.4]">
                          Sorry, the page you are looking for doesn&apos;t exist or has
                          been moved.
                        </p>
                        <Button
                          variant="primary"
                          className="mt-[35px]"
                          onClick={() => router.back()}
                        >
                          Back to home
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <Footer2 footerNav={navigation.footer2} largeContainer />
              </div>
            </div>
          </div>
        </AppContextProvider>
      </body>
    </html>
  );
}
