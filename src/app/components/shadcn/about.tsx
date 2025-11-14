import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function AboutSection() {
  const data = [
    {
      title: "Post One",
      content: (
        <div>
          <img
            src="/images/post1.webp"
            alt="cards template"
            width={500}
            height={500}
            className="w-full rounded-lg object-cover h-fit border shadow-2xl"
          />
        </div>
      ),
    },
    {
      title: "Post Two",
      content: (
        <div>
          <img
            src="/images/post2.webp"
            alt="cards template"
            width={500}
            height={500}
            className="w-full rounded-lg object-cover h-fit border shadow-2xl"
          />
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10 grid gap-6">
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-primary">
          Brief
        </h1>
        <div className="grid gap-1 text-lg">
          <p>
            At Prep Ecom Solution, we simplify logistics through reliable,
            cost-effective, and scalable warehousing and logistics solutions.
            From inventory management and transportation to event logistics and
            on-site coordination, we deliver end-to-end support that keeps your
            goods, equipment, and operations moving efficiently.
          </p>
          <p>
            As a leading logistics service provider, we proudly serve businesses
            (B2B) and individual clients (B2C) across multiple industries.
            Whether you need a long-term warehousing partner, distribution
            support, or a full-service logistics plan for your next big event,
            we have the expertise and infrastructure to make it happen — on time
            and on budget.
          </p>
          <p>
            Our team of logistics professionals brings together years of
            experience in supply chain management, modern tracking technology,
            and a customer-first approach. We prioritize speed, accuracy, and
            transparency, offering flexible storage options, real-time delivery
            tracking, and dedicated client support every step of the way.
          </p>
          <p>
            At Prep Ecom Solution, we go beyond transportation — we build
            lasting partnerships. Our mission is to make logistics simple,
            smart, and stress-free, so you can focus on what matters most:
            growing your business and delivering great experiences.
          </p>
          <p>
            Prep Ecom Solution: We Prep You Grow. Your all-in-one solution for
            warehousing, distribution, and logistics management.
          </p>
        </div>
      </div>
      <Timeline data={data} />
    </div>
  );
}
