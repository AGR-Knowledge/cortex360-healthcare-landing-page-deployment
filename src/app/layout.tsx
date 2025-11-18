import { AppContextProvider } from "@/context/app.context";
import { ContactProvider } from "@/context/contact.context";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import navigation from "@/config/navigation.json";

// Components
import Header4 from "@/components/elements/header/header4";
import Footer2 from "@/components/elements/footer/footer2";
import ScrollSmootherComponent from "@/components/tools/scroll-smoother";
import ToolsComponent from "@/components/tools";
import ScrollTop from "@/components/tools/scroll-top";
import ContactModal from "@/components/elements/contact/contact-modal";

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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-793J7E3WQR');
            `,
          }}
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "u7wjtr7jnz");
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning={true} dir="ltr">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-793J7E3WQR"
          strategy="afterInteractive"
        />
        <AppContextProvider>
          <ContactProvider>
            <div className="tropiline-regular root-layout" theme-setting="style-4">
              <ScrollSmootherComponent />
              <ToolsComponent />
              <ScrollTop />
              <Header4 headerNav={navigation.header} />
              <ContactModal />
              <div id="smooth-wrapper">
                <div id="smooth-content">
                  <div className="pt-[100px] w-full max-w-none lg:max-w-[1920px] lg:mx-auto">
                    {children}
                  </div>
                  <Footer2 footerNav={navigation.footer2} />
                </div>
              </div>

              <SpeedInsights />
              <Analytics />
            </div>
          </ContactProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
