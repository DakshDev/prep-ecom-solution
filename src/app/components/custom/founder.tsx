import Image from "next/image";

export default function Founder() {
  return (
    <div className="grid md:grid-cols-2 gap-4 max-md:gap-8 max-w-7xl mx-auto w-full p-4">
      <div className="flex justify-center items-center">
        <Image
          src={"/images/founder.jpeg"}
          height={500}
          width={500}
          alt="Founder Profile"
          className="md:size-80 size-60 rounded-full object-center object-cover border-8 shadow-2xl border-primary "
        ></Image>
      </div>
      <div className="text-lg grid gap-2 content-center">
        <h2 className="font-bold text-primary text-xl">Ahsan Shahzad Shah</h2>
        <p>
          He is the founder of Prep Ecom Solution, a leading provider of
          professional e-commerce prep, packaging, and logistics services. With
          expertise in prep, e-commerce fulfillment, and end-to-end logistics
          management, he helps online sellers streamline operations, reduce
          errors, and scale their businesses with confidence. Ahsan's commitment
          to high-quality prep services and efficient workflows has positioned
          Prep Ecom Solution as a trusted partner for e-commerce brands
          worldwide.
        </p>
      </div>
    </div>
  );
}
