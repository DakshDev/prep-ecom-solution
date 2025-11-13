function Herosection() {
  return (
    <section
      className="relative min-h-screen h-screen w-full bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: "url('/images/about.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute size-full bg-linear-to-t from-black/60 to-black/95 z-10"></div>

      {/* Content */}
      <div className="relative z-10 pt-10 px-4 grid gap-4 text-white max-w-4xl w-full text-center wrap-break-word">
        <h1 className="lg:text-6xl md:text-4xl text-3xl font-bold text-primary uppercase">
          About us
        </h1>
        <h2 className="lg:text-2xl md:text-xl max-md:w-[90%] mx-auto">
          Solutions designed to drive up to 20% in postage savings, for
          cost-effective delivery across the continental U.S. within two days
          with flexible, blended carrier ground transportation options. We offer
          UPS Next Day Air for time-sensitive deliveries, with fulfillment
          before the cutoff.
        </h2>
      </div>
    </section>
  );
}

export default Herosection;
