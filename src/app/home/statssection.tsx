function StatsSection() {
  return (
    <section className="max-w-7xl w-full mx-auto px-4 grid gap-12">
      <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-primary">
        Accuracy, Speed, and
        <br />
        Operational Excellence
      </h1>
      <div className="grid sm:grid-cols-2 gap-2 items-center">
        <div className="shrink-0 grid grid-cols-2 gap-8 sm:max-w-2xl w-full">
          <div className="col-span-2 flex items-center gap-4">
            <span className="h-full inline-block w-2 bg-primary rounded-sm"></span>
            <div>
              <h2 className="lg:text-8xl md:text-6xl sm:text-4xl text-3xl font-bold text-primary">
                99.8%
              </h2>
              <p className="lg:text-4xl md:text-3xl sm:text-2xl text-xl">
                Inventory Accuracy in SLA
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="h-full inline-block w-2 bg-primary rounded-sm"></span>
            <div>
              <h2 className="lg:text-4xl md:text-3xl text-2xl  font-bold text-primary">
                99.5%
              </h2>
              <p className="lg:text-xl md:text-lg">Inventory Accuracy in SLA</p>
            </div>
          </div>
          {/* 2 */}
          <div className="flex items-center gap-4">
            <span className="h-full inline-block w-2 bg-primary rounded-sm"></span>
            <div>
              <h2 className="lg:text-4xl md:text-3xl text-2xl  font-bold text-primary">
                99.5%
              </h2>
              <p className="lg:text-xl md:text-lg">Inventory Accuracy in SLA</p>
            </div>
          </div>
          {/* 3 */}
          <div className="flex items-center gap-4">
            <span className="h-full inline-block w-2 bg-primary rounded-sm"></span>
            <div>
              <h2 className="lg:text-4xl md:text-3xl text-2xl  font-bold text-primary">
                99.5%
              </h2>
              <p className="lg:text-xl md:text-lg">Inventory Accuracy in SLA</p>
            </div>
          </div>
          {/* 4 */}
          <div className="flex items-center gap-4">
            <span className="h-full inline-block w-2 bg-primary rounded-sm"></span>
            <div>
              <h2 className="lg:text-4xl md:text-3xl text-2xl  font-bold text-primary">
                99.5%
              </h2>
              <p className="lg:text-xl md:text-lg">Inventory Accuracy in SLA</p>
            </div>
          </div>
        </div>
        <div className="w-full flex max-sm:hidden">
          <img src="svgs/map.svg" alt="map svg" className="size-full" />
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
