import ServiceSection from "../components/custom/service";
import Herosection from "./herosection";

function Page() {
  return (
    <div className="grid gap-12">
      <Herosection />
      <ServiceSection />
    </div>
  );
}

export default Page;
