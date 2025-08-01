import navigation from "@/config/navigation.json";

// Components
import Header4 from "@/components/elements/header/header4";
// import Footer2 from "@/components/elements/footer/footer2";
import ScrollSmootherComponent from "@/components/tools/scroll-smoother";
import ToolsComponent from "@/components/tools";
import ScrollTop from "@/components/tools/scroll-top";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-white colasta-bold">
      <ScrollSmootherComponent />
      <ToolsComponent />
      <ScrollTop />
      <Header4 headerNav={navigation.header} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="absolute w-full h-[1100px] top-0 start-0 -z-[1] bg-gradient-180 from-[#FBF7F4] to-[#fbf7f400]" />
          <div className="pt-[100px]">{children}</div>
        </div>
      </div>
      {/* <Footer2 footerNav={navigation.footer2} /> */}
    </div>
  );
};

export default Layout;
