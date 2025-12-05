"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function ProductsSection() {
  return (
    <section className="w-full bg-white px-6 py-20 lg:px-40">
      {/* Title */}
      <div className="mb-10 text-center">
        <h3 className="text-2xl font-bold text-[#f36f21]">Our Products</h3>
        <h2 className="mt-2 text-4xl font-semibold lg:text-5xl">
          AI Solutions for Diagnostic Confidence
        </h2>
      </div>

      {/* TABS */}
      <div className="flex justify-center lg:mb-12">
        <Tabs defaultValue="tele" className="">
          <TabsList className="mx-auto rounded-lg bg-gray-200 p-1">
            <TabsTrigger
              value="tele"
              className="rounded-lg px-6 py-4 data-[state=active]:bg-[#f36f21] data-[state=active]:text-white"
            >
              TeleOTIVA
            </TabsTrigger>

            <TabsTrigger
              value="cardia"
              className="rounded-lg px-6 py-4 data-[state=active]:bg-[#f36f21] data-[state=active]:text-white"
            >
              CardiaCore
            </TabsTrigger>
          </TabsList>

          {/* TELEOTIVA CONTENT */}
          <TabsContent value="tele" className="mt-10">
            <ProductContent
              image={
                "https://isysrg.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frpp4jatp%2Fproduction%2Fd797ae20ab0558e115ede88ab337d8faac2fe86c-7024x4135.jpg%3Ffit%3Dmax%26auto%3Dformat&w=3840&q=75"
              }
              description="Mobile phone-based technology that utilizes an AI model to detect precancerous cervical lesions using cervicography data."
              features={[
                "Medical Recording",
                "Cervical Pre-Cancer Segmentation",
                "Validation Treatment",
                "Medical Rule Prediction Result",
                "Chatting with Consultant Doctor",
              ]}
            />
          </TabsContent>

          {/* CARDIACORE CONTENT */}
          <TabsContent value="cardia" className="mt-10">
            <ProductContent
              image={
                "https://isysrg.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frpp4jatp%2Fproduction%2F607727da9985a63ba247b5e41f57ef051440643f-4575x1477.jpg%3Ffit%3Dmax%26auto%3Dformat&w=3840&q=75"
              }
              description="AI-powered cardiac analysis system that assists clinicians in detecting abnormalities through ECG and echocardiography."
              features={[
                "ECG Pattern Recognition",
                "Arrhythmia Prediction",
                "Echocardiography Analysis",
                "Cardiac Risk Scoring",
                "Doctor Consultant Integration",
              ]}
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function ProductContent({
  image,
  description,
  features,
}: {
  image: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
      {/* IMAGE */}
      <div className="flex justify-center gap-6">
        <div className="relative h-40 w-full lg:h-[460px] lg:w-[700px]">
          <Image
            src={image}
            alt="Product screen"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* TEXT */}
      <div>
        <p className="mb-6 text-sm leading-relaxed text-gray-700 lg:text-lg">
          {description}
        </p>

        <div className="mb-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-2 lg:items-start">
              <CheckCircle className="mt-1 size-4 text-[#f36f21] lg:size-5" />
              <span className="text-sm text-gray-800 lg:text-base">{f}</span>
            </div>
          ))}
        </div>

        <Button className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-gray-700 hover:bg-gray-100 lg:mt-4 lg:px-12 lg:py-6">
          More details
        </Button>
      </div>
    </div>
  );
}
