import { default_info, primary_menu } from "@/config/config";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-primary md:px-4 px-2 py-12 pb-4 text-white grid gap-14 mt-22">
      <footer className="max-w-7xl mx-auto sm:flex grid gap-8 font-semibold w-full">
        <div className="sm:max-w-xs w-full grid gap-2 items-start content-start">
          <h1 className="text-2xl font-bold capitalize">{default_info.name}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, sed!
          </p>
          <div className="flex gap-2 w-full">
            <Instagram className="size-5 hover:scale-95 cursor-pointer transition-all translate-0.5 text-primary bg-white box-content p-1.5 rounded-sm" />
            <Facebook className="size-5 hover:scale-95 cursor-pointer transition-all translate-0.5 text-primary bg-white box-content p-1.5 rounded-sm" />
            <Linkedin className="size-5 hover:scale-95 cursor-pointer transition-all translate-0.5 text-primary bg-white box-content p-1.5 rounded-sm" />
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 w-full">
          <nav className="grid gap-1">
            <h2 className="text-2xl font-bold mb-2">Company</h2>
            {primary_menu.map((each) => (
              <Link
                key={each.link}
                href={`${each.link}`}
                className="capitalize"
              >
                {each.name}
              </Link>
            ))}
          </nav>
          <nav className="grid gap-1">
            <h2 className="text-2xl font-bold mb-2">Solutions</h2>
            {primary_menu.map((each) => (
              <Link
                key={each.link}
                href={`${each.link}`}
                className="capitalize"
              >
                {each.name}
              </Link>
            ))}
          </nav>
          <nav className="grid gap-1">
            <h2 className="text-2xl font-bold mb-2">Policies</h2>
            {primary_menu.map((each) => (
              <Link
                key={each.link}
                href={`${each.link}`}
                className="capitalize"
              >
                {each.name}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
      <section className="max-w-4xl w-full mx-auto border-t border-white text-center pt-4">
        <p className="text-sm  font-semibold">
          © {new Date().getFullYear().toString()}{" "}
          <span className="capitalize">{default_info.name}</span> Fulfillment |
          All Rights Reserved | Terms of Service
        </p>
      </section>
    </div>
  );
}

export default Footer;
