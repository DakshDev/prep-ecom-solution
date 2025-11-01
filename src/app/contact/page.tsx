import FormSection from "./sections/form";
import HeroSection from "./sections/hero";

export default function Home() {
  return (
    <div className="grid gap-12">
      <HeroSection />
      <FormSection />
    </div>
  );
}
