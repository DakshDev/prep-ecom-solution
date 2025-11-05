import { div } from "motion/react-client";
import { Exo } from "next/font/google";

function WhyChooseSection() {
  return (
    <section className="max-w-7xl w-full mx-auto px-4 grid gap-12">
      <div>
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-primary mb-2">
          Why Choose Us
        </h1>
        <p className="lg:text-2xl sm:text-xl text-lg">
          We'll build your ideal shipping solution by combining expert teams.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
        <div className="size-40 border mx-auto border-black"></div>
        <div className="size-40 border mx-auto border-black"></div>
        <div className="size-40 border mx-auto border-black"></div>
        <div className="size-40 border mx-auto border-black"></div>
        <div className="size-40 border mx-auto border-black"></div>
        <div className="size-40 border mx-auto border-black"></div>
        <div className="size-40 border mx-auto border-black"></div>
        <div className="size-40 border mx-auto border-black"></div>
        <div className="size-40 border mx-auto border-black"></div>
        <div className="size-40 border mx-auto border-black"></div>
      </div>
    </section>
  );
}

export default WhyChooseSection;
