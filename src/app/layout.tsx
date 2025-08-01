import { AppContextProvider } from "@/context/app.context";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import navigation from "@/config/navigation.json";

// Components
import Header4 from "@/components/elements/header/header4";
import Footer2 from "@/components/elements/footer/footer2";
import ScrollSmootherComponent from "@/components/tools/scroll-smoother";
import ToolsComponent from "@/components/tools";
import ScrollTop from "@/components/tools/scroll-top";

// styles
import "@/style/globals.css";
import "@/style/main.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
                <div className="pt-[100px] max-w-[1920px] px-[15px] lg:px-[30px] mx-auto">
                  {children}
                </div>
                <Footer2 footerNav={navigation.footer2} />
              </div>
            </div>
            
            <SpeedInsights />
            <Analytics />
          </div>
        </AppContextProvider>
      </body>
    </html>
  );
}
