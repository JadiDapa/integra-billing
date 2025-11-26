import Image from "next/image";

interface AuthHeaderProps {
  title: string;
  subtitle: string;
}

export default function AuthHeader({ title, subtitle }: AuthHeaderProps) {
  return (
    <div className="">
      <div className="flex items-center justifyap-3">
        <div className="text-primary text-4xl font-bold tracking-wide">
          <p>INTEGRA</p>
        </div>
      </div>

      <h1 className="text-primary mt-6 text-center text-3xl font-medium lg:text-5xl">
        {title}
      </h1>
      <p className="mx-auto mt-2 max-w-sm text-center text-sm">{subtitle}</p>
    </div>
  );
}
