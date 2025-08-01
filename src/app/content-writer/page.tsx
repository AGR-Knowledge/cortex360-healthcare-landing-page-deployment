import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";

// Components
import SeoData from "@/components/tools/seo-data";
import ContentWriterAbout from "@/components/elements/about/content-writer-about";
import ContentWriterBlog from "@/components/elements/blog/content-writer-blog";
import ContentWriterCounter from "@/components/elements/counter/content-writer-counter";
import CTA4 from "@/components/elements/cta/cta4";
import ContentWriterFeature from "@/components/elements/feature/content-writer-feature";
import ContentWriterFeature2 from "@/components/elements/feature/content-writer-feature2";
import ContentWriterHero from "@/components/elements/hero/content-writer-hero";
import ContentWriterPricing from "@/components/elements/pricing/content-writer-pricing";
import ContentWriterTestimonial from "@/components/elements/testimonial/content-writer-testimonial";

export default function Page() {
  const hero = getMainPage("/heros/content-writer-hero.mdx");
  const feature = getMainPage("/features/content-writer/_index.mdx");
  const features = getAllPages("/features/content-writer/");
  const feature2 = getMainPage("/features/content-writer-feature2.mdx");
  const about = getMainPage("/abouts/content-writer-about.mdx");
  const pricing = getMainPage("/pricings/content-writer-pricing.mdx");
  const counter = getMainPage("/counters/content-writer-counter.mdx");
  const testimonial = getMainPage(
    "/testimonials/content-writer-testimonial.mdx"
  );
  const blog = getMainPage("/blogs/main/_index.mdx");
  const blogs = getAllPages("/blogs/main");
  const cta = getMainPage("/ctas/cta4.mdx");

  return (
    <main>
      <SeoData />
      <ContentWriterHero hero={hero} />
      <ContentWriterFeature feature={feature} features={features} />
      <ContentWriterFeature2 feature={feature2} />
      <ContentWriterAbout about={about} />
      <ContentWriterPricing pricing={pricing} />
      <ContentWriterCounter counter={counter} />
      <ContentWriterTestimonial testimonial={testimonial} />
      <ContentWriterBlog blog={blog} blogs={blogs.slice(0, 3)} />
      <CTA4 cta={cta} />
    </main>
  );
}
