import Founder from "./components/custom/founder";
import ServiceSection from "./components/custom/service";
import MovingCards from "./components/shadcn/moving_cards";
// import TestimonialsSection from "./components/shadcn/testimonials";
import Herosection from "./home/herosection";
import StatsSection from "./home/statssection";
import WhyChooseSection from "./home/whychoosesection";

export default function Home() {
  return (
    <div className="grid gap-24">
      <Herosection />
      <ServiceSection />
      <hr className="my-4 border-t-2 border-gray-300" />
      <StatsSection />
      <hr className="my-4 border-t-2 border-gray-300" />
      <WhyChooseSection />
      <hr className="my-4 border-t-2 border-gray-300" />
      <Founder />
      {/* <TestimonialsSection /> */}
      <hr className="my-4 border-t-2 border-gray-300" />
      <MovingCards />
    </div>
  );
}
