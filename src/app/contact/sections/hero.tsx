function HeroSection() {
  return (
    <section
      className="relative min-h-screen h-screen w-full bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: "url('/images/contact.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute size-full bg-linear-to-t from-black/50 to-black/90 z-10"></div>

      {/* Content */}
      <div className="relative z-10 pt-10 grid gap-4 text-white max-w-4xl w-full text-center wrap-break-word">
        <h1 className="text-6xl font-bold text-primary">Contact Us</h1>
        <h2 className="text-2xl">
          Want to know more about our fulfillment services? Request a quote?
          <br />
          Need to reach someone on our team? We're here to help!
        </h2>
      </div>
    </section>
  );
}

export default HeroSection;
