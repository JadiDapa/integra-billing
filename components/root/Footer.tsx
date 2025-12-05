import Image from "next/image";
import { Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-linear-to-b from-white to-orange-100 border-t border-orange-200 pt-16 pb-8 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="https://isysrg.com/_next/image?url=%2Fassets%2Fimages%2Faimed-black.png&w=828&q=75"
              alt="AIMed"
              width={120}
              height={60}
            />
            <div className="relative flex gap-2 items-center">
              <Image
                src="https://isysrg.com/isysrg.svg"
                alt="AIMed Logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <div className="flex gap-1 items-end">
                <p className=" italic text-3xl font-semibold">ISys</p>
                <p className=" text-[10px]">Research Group</p>
              </div>
            </div>
          </div>
          <p className="text-sm leading-relaxed max-w-md">
            The AIMed Center of Excellence aims to develop AI-based
            technological solutions for the early screening (detection) of
            non-communicable diseases that are accurate, efficient, ethical, and
            usable by non-specialist healthcare workers in primary care
            settings, through a mobile platform integrated with telemedicine.
          </p>
        </div>

        {/* Address */}
        <div className="text-sm">
          <h3 className="text-orange-600 font-semibold mb-2">Address</h3>
          <p className="mb-4">
            Jl. Srijaya Negara, Bukit Besar, Kec. Ilir Barat I, Kota Palembang,
            Sumatera Selatan 30128. Universitas Sriwijaya
          </p>

          <h3 className="text-orange-600 font-semibold mb-2">Contact</h3>
          <p className="mb-4">(+62) 81224147003</p>

          <h3 className="text-orange-600 font-semibold mb-2">Opening Hour</h3>
          <p>9 AM—4 PM every day</p>
        </div>

        {/* Links */}
        <div className="text-sm">
          <h3 className="text-orange-600 font-semibold mb-3">Links</h3>
          <ul className="space-y-2">
            <li>Research Team</li>
            <li>Infrastructure</li>
            <li>Products</li>
            <li>International Journals</li>
            <li>International Conferences (Proceedings)</li>
            <li>Intellectual Property Rights (IPR)</li>
            <li>Books</li>
            <li>Activities</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 mt-12 flex flex-col md:flex-row items-center justify-between border-t border-orange-200 pt-6">
        <p className="text-xs text-gray-600">©2025 ISys Research Group</p>

        <div className="flex items-center gap-6 mt-4 md:mt-0">
          <Instagram className="w-5 h-5 text-orange-500 cursor-pointer" />
          <Linkedin className="w-5 h-5 text-orange-500 cursor-pointer" />
          <Youtube className="w-5 h-5 text-orange-500 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}
