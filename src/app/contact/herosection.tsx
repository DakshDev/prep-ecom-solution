import { Mail, MapPin, Phone, X } from "lucide-react";

function Herosection() {
  return (
    <section
      className="relative min-h-screen h-auto w-full bg-cover bg-center grid gap-20 content-center justify-center items-center"
      style={{ backgroundImage: "url('/images/contact.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute size-full bg-linear-to-t from-black/50 to-black/90 z-10"></div>

      {/* Content */}
      <div className="relative z-10 px-4 grid gap-4 text-white max-w-4xl w-full text-center wrap-break-word mx-auto pt-40">
        <h1 className="lg:text-6xl md:text-4xl text-3xl font-bold text-primary uppercase">
          Contact us
        </h1>
        <h2 className="lg:text-2xl md:text-xl max-md:w-[90%] mx-auto">
          QuickBox is your premier 3PL fulfillment and logistics management
          partner, delivering top-tier omnichannel operations to your customers.
          Reach 95% of the U.S. with cost-effective dynamic shipping solutions.
        </h2>
      </div>
      <div className="left-0 bottom-0 w-full bg-accent/20 backdrop-blur-2xl z-10 shadow-2xl  rounded-sm">
        <div className="max-w-7xl w-full bg mx-auto flex gap-4 justify-center flex-wrap p-8 text-accent font-bold">
          <div className="border border-accent p-4 rounded-sm grid gap-1 justify-center items-center min-w-80">
            <div className="flex justify-center">
              <Mail className="text-primary size-8" />
            </div>
            <div className="text-center">support@prepecomsolution.com</div>
          </div>
          <div className="border border-accent p-4 rounded-sm grid gap-1 justify-center items-center min-w-80">
            <div className="flex justify-center">
              <Phone className="text-primary size-8" />
            </div>
            <div className="text-center">+1 346 481-9540</div>
          </div>
          <div className="border border-accent p-4 rounded-sm grid gap-1 justify-center items-center min-w-80">
            <div className="flex justify-center">
              <MapPin className="text-primary size-8" />
            </div>
            <div className="text-center w-[70%] mx-auto">
              5601 Avenue I 5601 Avenue I, Rosenberg, TX 77471, USA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
