import { ChevronRight } from "lucide-react";

export default function Publications() {
  const items = [
    { count: 44, label: "International Journals" },
    { count: 10, label: "International Conferences (Proceedings)" },
    { count: 16, label: "Intellectual Property Rights (IPR)" },
    { count: 2, label: "Books" },
  ];

  return (
    <section className="w-full bg-gray-50 px-6 py-20 text-black md:px-16 lg:px-40">
      <h2 className="mb-4 text-4xl font-bold text-[#FF7A00]">Publications</h2>
      <p className="mb-10 max-w-2xl text-gray-600">
        Explore our latest research contributions and publications on
        intelligent systems.
      </p>

      <div className="space-y-12">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex flex-col justify-between gap-2 border-b pb-6 lg:flex-row lg:items-center"
          >
            <div>
              <div className="text-4xl text-[#FF7A00] lg:text-5xl">
                {item.count}
              </div>
              <div className="mt-2 text-lg text-gray-800 lg:text-xl">
                {item.label}
              </div>
            </div>

            <button className="flex items-center gap-1 text-gray-700 transition hover:text-[#FF7A00]">
              Explore <ChevronRight size={18} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
