function Page() {
  return (
    <div className="grid gap-12">
      <section
        className="relative min-h-screen h-screen w-full bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: "url('/images/service.webp')" }}
      >
        {/* Overlay */}
        <div className="absolute size-full bg-linear-to-t from-black/40 to-black/90 z-10"></div>

        {/* Content */}
        <div className="relative z-10 pt-10 grid gap-4 text-white max-w-4xl w-full text-center wrap-break-word">
          <h1 className="text-6xl font-bold">
            Fast, Accurate, & Scalable 3PL Fulfillment 7 Days a Week For{" "}
            <span className="text-primary">XYZ</span>
            &nbsp;Brand
          </h1>
          <h2 className="text-2xl">
            QuickBox is your premier 3PL fulfillment and logistics management
            partner, delivering top-tier omnichannel operations to your
            customers. Reach 95% of the U.S. with cost-effective dynamic
            shipping solutions.
          </h2>
          <form>
            <button className="px-4 py-3 rounded-lg bg-primary">
              Request A Quote
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Page;
