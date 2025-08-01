import { AppContextProvider } from "@/context/app.context";
import navigation from "@/config/navigation.json";

import { getMainPage } from "@/lib/helper/contentConverter";

// Components
import Header4 from "@/components/elements/header/header4";
import Footer2 from "@/components/elements/footer/footer2";
import ScrollSmootherComponent from "@/components/tools/scroll-smoother";
import ToolsComponent from "@/components/tools";
import ScrollTop from "@/components/tools/scroll-top";
import Notification1 from "@/components/elements/notification/notification1";

// styles
import "@/style/globals.css";
import "@/style/main.scss";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const notification = getMainPage("/notifications/notification1.mdx");

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
                <Footer2 footerNav={navigation.footer2} largeContainer />
              </div>
            </div>
          </div>
        </AppContextProvider>
      </body>
    </html>
  );
};

export default Layout;
