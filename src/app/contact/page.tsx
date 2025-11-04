import FormSection from "./sections/form";
import Herosection from "./herosection";

export default function Home() {
  return (
    <div className="grid gap-12">
      <Herosection />
      <FormSection />
    </div>
  );
}
