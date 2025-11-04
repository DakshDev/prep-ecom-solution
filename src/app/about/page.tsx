import AboutSection from "../components/shadcn/about";
import Herosection from "./herosection";

function Page() {
  return (
    <div className="grid gap-12">
      <Herosection />
      <AboutSection />
    </div>
  );
}

export default Page;
