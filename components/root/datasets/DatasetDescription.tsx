interface DatasetDescriptionProps {
  description?: string;
  type?: string;
  origin?: string;
  records?: string;
  license?: string;
}

export default function DatasetDescription({
  description,
  type,
  origin,
  records,
  license,
}: DatasetDescriptionProps) {
  return (
    <section className="bg-white px-44">
      <div className="grid grid-cols-2 gap-x-14 gap-y-8 border-y py-10">
        <div className="">
          <p className="text-xl text-orange-500">Description</p>
          <p className="text-base text-gray-600">
            {description ? description : "-"}
          </p>
        </div>
        <div className="">
          <p className="text-xl text-orange-500">Type</p>
          <p className="text-base text-gray-600">{type ? type : "-"}</p>
        </div>
        <div className="">
          <p className="text-xl text-orange-500">Origin</p>
          <p className="text-base text-gray-600">{origin ? origin : "-"}</p>
        </div>
        <div className="">
          <p className="text-xl text-orange-500">Number of records</p>
          <p className="text-base text-gray-600">{records ? records : "-"}</p>
        </div>
        <div className="">
          <p className="text-xl text-orange-500">License</p>
          <p className="text-base text-gray-600">{license ? license : "-"}</p>
        </div>
      </div>
    </section>
  );
}
