import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";

export default function ActivitySection() {
  return (
    <section className="w-full bg-black px-6 py-20 text-white md:px-16 lg:px-40">
      <div className="mb-10 text-center">
        <h2 className="mb-2 text-xl font-bold text-[#FF7A00] sm:text-2xl lg:text-3xl">
          Latest Activity
        </h2>
        <h1 className="mb-6 text-2xl font-light sm:text-3xl md:text-5xl lg:text-4xl">
          Leading the Way in Intelligent Technology
        </h1>
        <p className="mx-auto max-w-3xl text-sm text-gray-300 lg:text-base">
          We are dedicated to advancing the field of intelligent systems through
          a variety of research and development activities. Our projects span
          multiple domains, from medical signal and image processing to data
          mining and pattern recognition, with a particular focus on
          applications that understand, reason, learn, and act intelligently.
        </p>
      </div>

      <div className="flex flex-col items-start gap-10 lg:flex-row">
        <div className="lg:col-span-2">
          <div className="relative h-60 w-full overflow-hidden rounded-xl lg:h-[450px]">
            <Image
              src="https://isysrg.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frpp4jatp%2Fproduction%2Fa4b62eaf80bce4fde20816c98fafe8bf059011e2-4160x3120.jpg%3Ffit%3Dmax%26auto%3Dformat&w=1920&q=75"
              alt="Main Activity"
              fill
              className="object-cover"
            />
          </div>
          <div className="mt-4">
            <div className="mb-1 flex items-center gap-2 text-sm text-[#FF7A00]">
              <CalendarDays size={16} /> <span>November 5, 2025</span>
            </div>
            <h3 className="text-base font-medium sm:text-lg md:text-xl">
              FASILKOM UNSRI Gelar Pengabdian Kepada Masyarakat Berdampak:
              Demonstrasi TeleOTIVA di Puskesmas Tebing Gerinting
            </h3>
          </div>
        </div>

        <div className="">
          {activities.map((item, i) => (
            <Card
              key={i}
              className="rounded-none border-x-0 border-t-0 border-b border-gray-500 bg-[#111]/60 p-0 text-white"
            >
              <CardContent className="flex gap-4 p-0 py-5 lg:p-4">
                <div className="relative size-28 overflow-hidden rounded-md">
                  <Image
                    src={item.image}
                    alt="Activity"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="mb-1 flex items-center gap-2 text-sm text-[#FF7A00]">
                    <CalendarDays size={16} />
                    <span>{item.date}</span>
                  </div>
                  <p className="leading-tight font-medium text-gray-100">
                    {item.title}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}

          <div className="mt-4 text-right">
            <a
              href="#"
              className="flex items-center justify-end gap-1 text-[#FF7A00] hover:underline"
            >
              View more activities →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const activities = [
  {
    date: "August 30, 2025",
    title:
      "UPTD Puskesmas Pasir Putih Sukses Uji TeleOTIVA untuk Deteksi Dini Penyakit Jantung",
    image:
      "https://isysrg.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frpp4jatp%2Fproduction%2F538b519ee35a1bd7bddf1be4ed5c24db3e163c03-1200x1600.jpg%3Ffit%3Dmax%26auto%3Dformat&w=256&q=75",
  },
  {
    date: "August 28, 2025",
    title: "AIMed CoE Dukung Eliminasi Kanker Serviks Indonesia",
    image:
      "https://isysrg.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frpp4jatp%2Fproduction%2Fe9ace77d6a7f84858d48fa7fadde6ce2ead2f145-4160x3120.jpg%3Ffit%3Dmax%26auto%3Dformat&w=256&q=75",
  },
  {
    date: "August 23, 2025",
    title: "Pengujian TeleOTIVA di Puskesmas Sungsang",
    image:
      "https://isysrg.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frpp4jatp%2Fproduction%2Ff784d91e0fce4db01d28b54e77dd9b3398fc0761-1280x960.jpg%3Ffit%3Dmax%26auto%3Dformat&w=256&q=75",
  },
];
