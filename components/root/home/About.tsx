import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="w-full bg-white px-6 py-20 lg:px-44">
      {/* TITLE */}
      <h2 className="mb-6 text-center text-3xl font-bold text-[#f36f21] lg:mb-12 lg:text-4xl">
        About Us
      </h2>

      {/* TOP SECTION */}
      <div className="mb-20 flex flex-col items-center gap-6 lg:flex-row lg:gap-20">
        {/* LEFT IMAGE */}
        <div className="">
          <div className="relative size-80 overflow-hidden rounded-lg lg:size-[350px]">
            <Image
              src="https://isysrg.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frpp4jatp%2Fproduction%2Facf175eacda29173c113713e0b4a511f2cfba7b7-1024x1024.jpg%3Fw%3D800%26h%3D800%26fit%3Dmax%26auto%3Dformat&w=1920&q=75"
              alt="Medical AI"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div>
          <p className="mb-6 text-sm leading-relaxed text-gray-700 lg:text-xl">
            The AIMed Center of Excellence primarily involves developing
            software, applications, and systems to support medical
            interpretation, with a focus on medical signal and image processing,
            medical pattern recognition, and medical record data mining
            techniques.
          </p>

          <p className="mb-6 text-sm leading-relaxed text-gray-600 lg:text-base">
            The AIMed Center of Excellence creates intelligent systems across
            various fields, including computer systems, biomedicine, natural
            language processing, and others.
          </p>

          {/* LINKS */}
          <div className="flex gap-10 font-medium text-[#f36f21]">
            <button className="flex items-center gap-2 hover:opacity-70">
              Research team <ArrowRight className="h-4 w-4" />
            </button>
            <button className="flex items-center gap-2 hover:opacity-70">
              Infrastructure <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* SDG SECTION */}
      <div className="flex flex-col items-start justify-between gap-10 lg:flex-row">
        {/* LEFT TEXT BLOCK */}
        <div className="max-w-md">
          <p className="mb-6 text-xl leading-relaxed font-medium text-gray-800">
            The AIMed Center of Excellence supports SDG 3 (Good Health and
            Well-being) by developing AI-driven solutions for better disease
            detection and healthcare delivery.
          </p>

          <p className="text-sm leading-relaxed text-gray-500">
            It also contributes to SDG 9 (Industry, Innovation and
            Infrastructure) by fostering technological innovation through
            research in intelligent systems, promoting sustainable healthcare
            infrastructure, and collaborating with industry to accelerate the
            adoption of cutting-edge technologies.
          </p>
        </div>

        {/* RIGHT SDG CARDS */}
        <div className="flex justify-center gap-4 lg:justify-start lg:gap-6">
          {/* SDG 3 */}
          <div className="relative size-40 overflow-hidden rounded-lg shadow-md lg:size-80">
            <Image
              src="https://isysrg.com/_next/image?url=%2Fassets%2Fimages%2FE_WEB_03.png&w=640&q=75"
              alt="SDG 3 Good Health & Well-being"
              fill
              className="object-cover"
            />
          </div>

          {/* SDG 9 */}
          <div className="relative size-40 overflow-hidden rounded-lg shadow-md lg:size-80">
            <Image
              src="https://isysrg.com/_next/image?url=%2Fassets%2Fimages%2FE_WEB_09.png&w=640&q=75"
              alt="SDG 9 Industry Innovation Infrastructure"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
