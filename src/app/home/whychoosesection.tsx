const whyChooseUsArrayOfObject = [
  {
    heading: "Efficient Supply Chain Management",
    subHeading: "Smooth, Coordinated, and Timely Operations",
    paragraph:
      "Logistics services streamline the movement of goods from suppliers to customers, ensuring timely delivery and minimizing delays. With an optimized supply chain, businesses experience improved workflow efficiency and consistent, reliable operations.",
  },
  {
    heading: "Cost Reduction",
    subHeading: "Optimize Operations and Maximize Savings",
    paragraph:
      "By improving transportation routes, warehouse processes, and inventory control, logistics services help businesses significantly reduce operational costs. Efficient resource management ensures businesses save more while maintaining high performance.",
  },
  {
    heading: "Improved Customer Satisfaction",
    subHeading: "Fast, Transparent, and Reliable Delivery",
    paragraph:
      "Quick and dependable delivery boosts customer satisfaction, enhances brand trust, and increases the likelihood of repeat purchases. Transparent logistics operations ensure customers stay informed at every step, improving their overall experience.",
  },
  {
    heading: "Scalability & Flexibility",
    subHeading: "Logistics That Grow With Your Business",
    paragraph:
      "Logistics services provide the flexibility to scale operations as your business expands. Whether entering new markets, handling seasonal surges, or managing high-volume events, scalable logistics ensure stability at every growth stage.",
  },
  {
    heading: "Expert Handling & Risk Management",
    subHeading: "Professional Care and Secure Operations",
    paragraph:
      "Expert logistics providers ensure safe handling, proper storage, and secure transportation of goods. By minimizing risks such as damage, loss, or delays, they ensure smooth and reliable operations throughout the supply chain.",
  },
];

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

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {whyChooseUsArrayOfObject.map((each) => (
          <WhyChooseCard
            key={each.heading}
            subHeading={`${each.subHeading}`}
            heading={`${each.heading}`}
            paragraph={`${each.paragraph}`}
          />
        ))}
      </div>
    </section>
  );
}

function WhyChooseCard({
  heading,
  subHeading,
  paragraph,
}: {
  heading: string;
  subHeading: string;
  paragraph: string;
}) {
  return (
    <div className="w-full border mx-auto p-4 rounded-sm grid gap-1 border-primary shadow-xl">
      <h3 className="text-lg font-bold">{heading}</h3>
      <h4 className="font-semibold">{subHeading}</h4>
      <p>{paragraph}</p>
    </div>
  );
}

export default WhyChooseSection;
