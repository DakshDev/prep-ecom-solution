function ServiceSection() {
  return (
    <section className="max-w-7xl w-full mx-auto px-4 grid gap-12">
      <div className="grid gap-4">
        <div className="grid lg:grid-cols-2 md:gap-4 gap-2 p-2 rounded-sm">
          <div className="md:text-xl sm:text-lg grid content-center items-center">
            <h1 className="lg:text-4xl md:text-2xl text-xl text-primary mb-4 font-bold">
              Prep Ecom Solution
            </h1>
            A specialized third-party logistics 3PL company dedicated to
            providing end-to-end e-commerce fulfilment services for online
            sellers. We help businesses of all sizes streamline their operations
            by taking care of inventory storage, product preparation, packing,
            and shipping with precision and reliability.
          </div>
          <div>
            <img
              src="/images/home.webp"
              alt="service image"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:gap-4 gap-2 p-2 rounded-sm">
          <div className="md:text-xl sm:text-lg grid content-center items-center">
            <h1 className="lg:text-4xl md:text-2xl text-xl text-primary mb-4 font-bold">
              Fulfilment
            </h1>
            We understand that timely and accurate order fulfilment is critical
            to building customer trust and growing an online business. That's
            why we offer comprehensive logistics solutions tailored to the needs
            of e-commerce sellers, from startups to large-scale brands. Our team
            ensures that every product is handled with care, labeled correctly,
            and shipped on time to meet platform and customer requirements.
          </div>
          <div>
            <img
              src="/images/home.webp"
              alt="service image"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
