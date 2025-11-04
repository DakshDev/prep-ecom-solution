"use client";

import Link from "next/link";
import HeaderScrollHandler from "./header_scroll_handler";
import { useEffect, useState } from "react";
import { primary_menu } from "@/config/config";

function Header() {
  const [scrolled, setScroll] = useState(0);
  const [isMenuHide, setIsMenuHide] = useState(true);
  return (
    <div
      className={`md:p-4 px-2 py-4 w-full fixed top-0 left-0 z-50 transition-all translate-0.5 max-md:bg-white max-md:text-black ${
        scrolled > 100
          ? "bg-white text-black shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]"
          : "text-white"
      }`}
    >
      <HeaderScrollHandler dispatch={setScroll} />

      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Prep Ecom Solutions</h1>
          {/* Mobile menu trigger */}
          {isMenuHide ? (
            <button className="md:hidden" onClick={() => setIsMenuHide(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-6 box-content p-1 rounded-sm bg-primary text-white"
              >
                <path d="M4 5h16" />
                <path d="M4 12h16" />
                <path d="M4 19h16" />
              </svg>
            </button>
          ) : (
            <button className="md:hidden" onClick={() => setIsMenuHide(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-6 box-content p-1 rounded-sm bg-red-500 text-white"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          )}
          {/* Desktop */}
          <DesktopNav />
          <MobileNav isMenuHide={isMenuHide} />
        </header>
      </div>
    </div>
  );
}

function DesktopNav() {
  return (
    <nav className="flex gap-4 max-md:hidden">
      {primary_menu.map((each) => (
        <Link
          key={each.link}
          href={each.link}
          className="p-2 capitalize font-semibold hover:text-primary transition-all translate-0.5"
        >
          {each.name}
        </Link>
      ))}
    </nav>
  );
}

function MobileNav({ isMenuHide }: { isMenuHide: boolean }) {
  return (
    <nav
      className={`grid gap-4 md:hidden absolute top-full w-full p-2 transition-all translate-0.5 text-black ${
        isMenuHide ? "left-[200%]" : "left-0"
      }`}
    >
      <div className="w-full bg-white/80 backdrop-blur-xl box shadow-[0_0px_6px_-1px_rgba(0,0,0,0.3)] rounded-md p-2 grid">
        {primary_menu.map((each) => (
          <Link
            key={each.link}
            href={each.link}
            className="p-2 capitalize font-semibold hover:text-primary transition-all translate-0.5"
          >
            {each.name}
          </Link>
        ))}
        <div className="flex gap-2 mt-4 flex-wrap">
          <button className="primaryBtn">Request a Quote</button>
          <button className="secondaryBtn">Contact Us</button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
