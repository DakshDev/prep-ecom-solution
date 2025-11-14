const whyChooseUsArrayOfObject = [
  {
    heading: "Inventory Management",
    subHeading: "Secure, Organized, and Trackable Storage",
    paragraph:
      "We provide secure and well-organized storage solutions for your products, ensuring easy access and accurate stock tracking. With real-time inventory updates, you’ll always know your stock levels, helping prevent overstocking or running out of products. Our inventory management solutions are tailored for Amazon FBA, Walmart, TikTok Shop, Shopify, and other e-commerce platforms.",
  },
  {
    heading: "Product Preparation & FBA Prep",
    subHeading: "Accurate Preparation for Smooth Fulfilment",
    paragraph:
      "Our team handles all aspects of product preparation, including labeling, bundling, kitting, and quality inspections. We ensure that every product meets platform-specific standards, reducing the risk of penalties or delays. Whether you’re selling on Amazon, Walmart, or TikTok Shop, our meticulous prep services guarantee a hassle-free fulfilment process.",
  },
  {
    heading: "Order Fulfillment",
    subHeading: "Fast, Reliable, and Accurate Shipping",
    paragraph:
      "From picking and packing to shipping, we handle your orders with speed and precision. Our fulfilment process ensures that customers receive the right product, on time, every time. By leveraging our 3PL expertise, sellers can focus on growth while we manage all aspects of delivery for multiple e-commerce platforms.",
  },
  {
    heading: "Returns & Reverse Logistics",
    subHeading: "Hassle-Free Returns Management",
    paragraph:
      "Managing returns can be complex, but our team makes it simple. We handle customer returns efficiently, inspect returned products, and update inventory accordingly. Our reliable returns management ensures customer satisfaction while maintaining smooth operational workflows for sellers.",
  },
  {
    heading: "Multi-Platform E-Commerce Expertise",
    subHeading: "Fulfillment Solutions for Every Online Store",
    paragraph:
      "We specialize in fulfillment for major e-commerce platforms, including Amazon FBA, Walmart Marketplace, TikTok Shop, and Shopify. Our platform-specific expertise ensures compliance with all guidelines, seamless integration with your store, and a smooth end-to-end logistics process.",
  },
  {
    heading: "Scalable Logistics Solutions",
    subHeading: "Grow Your Business Without Limits",
    paragraph:
      "Whether you’re a small startup or a large e-commerce brand, our flexible 3PL solutions scale with your business. From seasonal spikes to rapid growth, Prep Ecom Solution ensures your logistics operations remain efficient, reliable, and cost-effective.",
  },
];

function ServiceBox() {
  return (
    <section className="max-w-7xl w-full mx-auto px-4 grid gap-12">
      <div>
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-primary mb-2">
          Brief Services
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

export default ServiceBox;
