import { getMainPage } from "@/lib/helper/contentConverter";

// Components
import SeoData from "@/components/tools/seo-data";
import Counter2 from "@/components/elements/counter/counter2";
import CTA7 from "@/components/elements/cta/cta7";
import StartupFAQ from "@/components/elements/faq/startup-faq";
import StartupFeature from "@/components/elements/feature/startup-feature";
import StartupFeature2 from "@/components/elements/feature/startup-feature2";
import StartupFeature3 from "@/components/elements/feature/startup-feature3";
import StartupFeature4 from "@/components/elements/feature/startup-feature4";
import StartupHero from "@/components/elements/hero/startup-hero";
import StartupPricing from "@/components/elements/pricing/startup-pricing";
import StartupProcess from "@/components/elements/process/startup-process";

export default function Page() {
  const hero = getMainPage("/heros/startup-hero.mdx");
  const process = getMainPage("/processes/startup-process.mdx");
  const feature = getMainPage("/features/startup-feature.mdx");
  const feature2 = getMainPage("/features/startup-feature2.mdx");
  const feature3 = getMainPage("/features/startup-feature3.mdx");
  const feature4 = getMainPage("/features/startup-feature4.mdx");
  const pricing = getMainPage("/pricings/startup-pricing.mdx");
  const faq = getMainPage("/faqs/faq1.mdx");
  const counter = getMainPage("/counters/startup-counter.mdx");
  const cta = getMainPage("/ctas/cta7.mdx");

  return (
    <main>
      <SeoData />
      <StartupHero hero={hero} />
      <StartupProcess process={process} />
      <StartupFeature feature={feature} />
      <StartupFeature2 feature={feature2} />
      <StartupFeature3 feature={feature3} />
      <StartupFeature4 feature={feature4} />
      <StartupPricing pricing={pricing} />
      <StartupFAQ faq={faq} />
      <div className="container sec_space_bottom4">
        <Counter2 counter={counter?.data?.items} />
      </div>
      <CTA7 cta={cta} />
    </main>
  );
}
