import { getMainPage } from "@/lib/helper/contentConverter";

// Components
import SeoData from "@/components/tools/seo-data";
import VideoEditorAbout from "@/components/elements/about/video-editor-about";
import VideoEditorBanner from "@/components/elements/banner/video-editor-banner";
import Brand1 from "@/components/elements/brand/brand1";
import CTA5 from "@/components/elements/cta/cta5";
import VideoEditorFeature from "@/components/elements/feature/video-editor-feature";
import VideoEditorFeature2 from "@/components/elements/feature/video-editor-feature2";
import VideoEditorHero from "@/components/elements/hero/video-editor-hero";
import VideoEditorPricing from "@/components/elements/pricing/video-editor-pricing";
import VideoEditorProcess from "@/components/elements/process/video-editor-process";
import VideoEditorProject from "@/components/elements/project/video-editor-project";
import VideoEditorTestimonial from "@/components/elements/testimonial/video-editor-testimonial";

export default function Page() {
  const hero = getMainPage("/heros/video-editor-hero.mdx");
  const brand = getMainPage("/brands/brand1.mdx");
  const about = getMainPage("/abouts/video-editor-about.mdx");
  const process = getMainPage("/processes/video-editor-process.mdx");
  const project = getMainPage("/projects/video-editor-project.mdx");
  const feature = getMainPage("/features/video-editor-feature.mdx");
  const feature2 = getMainPage("/features/video-editor-feature2.mdx");
  const banner = getMainPage("/banners/video-editor-banner.mdx");
  const pricing = getMainPage("/pricings/video-editor-pricing.mdx");
  const testimonial = getMainPage("/testimonials/video-editor-testimonial.mdx");
  const cta = getMainPage("/ctas/cta5.mdx");

  return (
    <main>
      <SeoData />
      <VideoEditorHero hero={hero} />
      <Brand1
        brand={brand}
        className="!pb-0 max-w-[778px] mx-auto text-center pt-[130px] lg:pt-[90px] xl:pt-[130px] 2xl:pt-[60px]"
        titleClassName="max-w-[218px] mx-auto mb-[45px] text-primary font-instrument"
      />
      <VideoEditorAbout about={about} />
      <VideoEditorProcess process={process} />
      <VideoEditorProject project={project} />
      <VideoEditorFeature feature={feature} />
      <VideoEditorFeature2 feature2={feature2} />
      <VideoEditorBanner banner={banner} />
      <VideoEditorPricing pricing={pricing} />
      <VideoEditorTestimonial testimonial={testimonial} />
      <CTA5 cta={cta} />
    </main>
  );
}
