import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <main className="relative min-h-screen w-full bg-cover bg-center">
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-linear-to-br from-black/70 to-black/60"></div>
      <div className="absolute inset-0">
        <Image
          src={
            "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="Hero Background"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto space-y-6 px-6 py-24 text-white lg:px-44 lg:py-44 lg:pt-64">
        <h1 className="text-5xl font-medium md:text-8xl">
          We Collaborate<span className="text-orange-400">.</span>
        </h1>

        <p className="max-w-6xl text-sm leading-relaxed lg:text-xl">
          The Artificial Intelligence-Medical Center of Excellence (AIMed CoE)
          is a leading center of excellence initiated by Universitas Sriwijaya,
          Indonesia. It houses Intelligent System research group (ISysRG), which
          is dedicated to advancing the field of artificial intelligence in
          medicine through interdisciplinary collaboration and innovation. AIMed
          CoE aims to develop AI-based technological solutions for the early
          screening (detection) of non-communicable diseases that are accurate,
          efficient, ethical, and usable by non-specialist healthcare workers in
          primary care settings, through a mobile platform integrated with
          telemedicine.
        </p>

        <div className="flex gap-4 pt-4">
          <Button className="rounded-md bg-orange-500 px-6 py-3 font-medium hover:bg-orange-600 lg:px-12 lg:py-6">
            <Link href={"/about/research-team"}>About Us</Link>
          </Button>

          <Button className="rounded-md bg-white px-6 py-3 font-medium text-black hover:bg-gray-200 lg:px-12 lg:py-6">
            <Link href={"/products/teleotiva"}>View Product</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
