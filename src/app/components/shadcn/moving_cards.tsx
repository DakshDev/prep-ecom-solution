"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function MovingCards() {
  return (
    <div className="relative overflow-hidden max-w-7xl w-full mx-auto px-4 grid gap-12">
      <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-primary">
        Customer Reviews
      </h1>
      <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Prep Ecom Solution has completely transformed the way we handle our inventory and fulfilment. Their turnaround time is consistently fast, and they keep us updated at every step. It feels like having an in-house logistics team.",
    name: "Arif Khan",
    title: "Owner, TrendHub Store",
    star: 5,
  },
  {
    quote:
      "We switched to this 3PL provider after facing repeated delays with another service. The difference was immediate—clean reporting, accurate prep, and zero shipment issues. Their professionalism truly stands out.",
    name: "Sarah Malik",
    title: "Operations Manager",
    star: 4,
  },
  {
    quote:
      "Their returns management has saved us countless hours. Products are inspected properly, documented, and reintegrated into inventory without any hassle. Exceptional service for growing brands.",
    name: "Daniel Rodrigues",
    title: "Founder, NovaTech Essentials",
    star: 5,
  },
  {
    quote:
      "Seasonal spikes used to be stressful, but this team handles volume like pros. Even during our busiest months, orders were fulfilled on time and without errors. Highly reliable and easy to work with.",
    name: "Fatima Syed",
    title: "Co-Founder, UrbanStyle Co.",
    star: 4,
  },
  {
    quote:
      "Their understanding of Amazon FBA requirements is top-notch. Every shipment is prepared perfectly, and we’ve had zero compliance issues since partnering with them. Truly a valuable logistics partner.",
    name: "Michael Grant",
    title: "Amazon Private Label Seller",
    star: 5,
  },
];
