function Page() {
  return (
    <div className="grid gap-12">
      <section
        className="relative min-h-screen h-screen w-full bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: "url('/images/about.webp')" }}
      >
        {/* Overlay */}
        <div className="absolute size-full bg-linear-to-t from-black/50 to-black/90 z-10"></div>

        {/* Content */}
        <div className="relative z-10 pt-10 grid gap-4 text-white max-w-4xl w-full text-center wrap-break-word">
          <h1 className="text-6xl font-bold">About</h1>
        </div>
      </section>
    </div>
  );
}

export default Page;
