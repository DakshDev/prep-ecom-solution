import ServiceSection from "../components/custom/service";
import Herosection from "./herosection";
import ServiceBox from "./services";

function Page() {
  return (
    <div className="grid gap-12">
      <Herosection />

      <ServiceBox />
      <hr className="my-4 border-t-2 border-gray-300" />
      <ServiceSection />
    </div>
  );
}

export default Page;
