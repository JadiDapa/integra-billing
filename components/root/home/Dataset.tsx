import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function DatasetsSection() {
  const datasets = [
    {
      title: "Signal ECG Dataset",
      desc: "The Research Resource for Complex Physiologic Signals",
      img: "https://isysrg.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frpp4jatp%2Fproduction%2Ff7e901512ee0188ddbc291efc017b3bfcc41bec2-1600x800.jpg%3Ffit%3Dmax%26auto%3Dformat&w=256&q=75",
    },
    {
      title: "Pre-Cancer Dataset",
      desc: "The Research Resource for Pre-Cancer Serviks",
      img: "https://isysrg.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frpp4jatp%2Fproduction%2F59cf4adb0d2ca224244b70d5757651110b25e61e-237x417.png%3Ffit%3Dmax%26auto%3Dformat&w=256&q=75",
    },
    {
      title: "Infant/Fetal Dataset",
      desc: "The Research Resource for Echocardiography",
      img: "https://isysrg.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frpp4jatp%2Fproduction%2Fda5605702b9cf193e92a7da3a213927a0bd6cf3d-800x600.jpg%3Ffit%3Dmax%26auto%3Dformat&w=256&q=75",
    },
  ];

  return (
    <section className="w-full bg-white text-black py-24 px-6 md:px-16 lg:px-40">
      <h2 className="text-[#FF7A00] text-4xl font-bold mb-4">Datasets</h2>
      <p className="text-gray-600 max-w-3xl mb-12">
        Explore a curated collection of medical imaging and signal datasets
        designed to support research in medical interpretation and analysis.
      </p>

      <div className="flex flex-wrap gap-6 mb-12">
        {datasets.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 border rounded-xl shadow-sm p-4 w-full md:w-[32%] hover:shadow-md transition bg-white"
          >
            <div className="min-w-[70px] h-[70px] rounded-md overflow-hidden bg-gray-100">
              <Image
                src={item.img}
                width={80}
                height={80}
                alt={item.title}
                className="object-cover w-full h-full"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="flex items-center gap-1 text-[#FF7A00] font-medium hover:opacity-80 transition">
        Explore more datasets <ChevronRight size={18} />
      </button>
    </section>
  );
}
