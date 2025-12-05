"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef } from "react";

export default function PartnersSectionl() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <section className="flex w-full flex-col items-center bg-white px-4 py-16 lg:px-40">
      <h2 className="mb-10 text-3xl font-bold text-[#F87217]">Our Partners</h2>

      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="w-full"
      >
        <CarouselContent>
          {partners.map((p, i) => (
            <CarouselItem
              key={i}
              className="flex basis-1/2 justify-center lg:basis-1/5"
            >
              <div className="relative flex h-40 w-60 flex-col items-center justify-center rounded-xl border bg-[#fafafa] p-6 shadow-sm">
                <div className="relative mb-3 h-16 w-32">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-center text-sm text-gray-700">{p.name}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}

const partners = [
  {
    name: "PT Intens",
    img: "https://isysrg.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frpp4jatp%2Fproduction%2Ff283a7ee46ef1822c9bb4f18be4a5cba23a84e8c-429x159.png%3Ffit%3Dmax%26auto%3Dformat&w=640&q=75",
  },
  {
    name: "RSUP Muhammad Hoesin",
    img: "https://isysrg.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frpp4jatp%2Fproduction%2Fa41d66ad12a594b60d81c8df44f801f88c631c08-481x454.png%3Ffit%3Dmax%26auto%3Dformat&w=640&q=75",
  },
  {
    name: "RS Bakti Timah Pangkal Pinang",
    img: "https://isysrg.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frpp4jatp%2Fproduction%2F0c141a5fb9892e5cc862d526785ebe6cd46b572a-900x400.png%3Ffit%3Dmax%26auto%3Dformat&w=640&q=75",
  },
  {
    name: "Humic Engineering, Telkom University",
    img: "https://isysrg.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frpp4jatp%2Fproduction%2Fd6640a5ec1d952cf24762b4bc1d84e971835104c-114x116.png%3Ffit%3Dmax%26auto%3Dformat&w=640&q=75",
  },
  {
    name: "Dinas Kesehatan",
    img: "https://isysrg.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frpp4jatp%2Fproduction%2Ff6a9824df0d726d81143848383f9cc4670f67555-500x500.png%3Ffit%3Dmax%26auto%3Dformat&w=640&q=75",
  },
];
