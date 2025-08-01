import navigation from "@/config/navigation.json";

// Components
import Header4 from "@/components/elements/header/header4";
import Footer2 from "@/components/elements/footer/footer2";
import ScrollSmootherComponent from "@/components/tools/scroll-smoother";
import ToolsComponent from "@/components/tools";
import ScrollTop from "@/components/tools/scroll-top";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
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
          
        </div>
      </div>
    </div>
  );
};

export default Layout;
