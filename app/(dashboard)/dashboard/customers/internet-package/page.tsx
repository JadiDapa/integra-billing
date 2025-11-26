"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { RefreshCcw, Search } from "lucide-react";

import PageHeader from "@/components/dashboard/PageHeader";
import StatisticCard from "@/components/dashboard/StatisticCard";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { getAllInternetPackages } from "@/lib/networks/internet-package";
import CreateInternetPackageDialog from "@/components/dashboard/internet-package/CreateInternetPackageDialog";
import InternetPackageCard from "@/components/dashboard/internet-package/InternetPackageCard";
import { InternetPackageType } from "@/lib/types/internet-package";

export default function InternetPackagePage() {
  const {
    data: internet,
    refetch,
    isFetching,
    isLoading,
  } = useQuery({
    queryFn: getAllInternetPackages,
    queryKey: ["internet"],
  });

  const [search, setSearch] = useState("");

  const filteredInternetPackages = internet?.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  const regionStats = [
    {
      title: "Total Paket Internet",
      value: (internet?.length ?? 0).toString(),
      description: "Paket Internet yang terdaftar",
    },
    {
      title: "Paket Internet Aktif",
      value: (
        internet?.filter((r: InternetPackageType) => r.status === "ACTIVE")
          .length ?? 0
      ).toString(),

      description: "Paket Internet yang aktif",
    },
    {
      title: "Paket Internet Non Aktif",
      value: (
        internet?.filter((r: InternetPackageType) => r.status === "INACTIVE")
          .length ?? 0
      ).toString(),

      description: "Paket Internet yang tidak aktif",
    },
  ];

  return (
    <main className="bg-background rounded-2xl w-full p-6 min-h-screen border space-y-8">
      {/* PAGE HEADER */}
      <div className="flex justify-between items-center">
        <PageHeader
          title="Paket Internet"
          subtitle="Berikut daftar paket internet yang tersedia"
        />

        <div className="flex gap-3">
          <CreateInternetPackageDialog />

          <Button
            variant="outline"
            className="rounded-full py-4 px-4"
            onClick={() => refetch()}
            disabled={isFetching}
          >
            <RefreshCcw className={isFetching ? "animate-spin" : ""} />
            Refresh
          </Button>
        </div>
      </div>

      {/* STATISTICS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {regionStats.map((stat) => (
          <StatisticCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* SEARCH BAR */}
      <div>
        <div className="w-full bg-card border p-2 rounded-2xl flex justify-between items-center px-6">
          <div className="flex items-center gap-3 w-[400px] border bg-card px-4 py-1 rounded-full">
            <Search />
            <Input
              placeholder="Cari Paket Internet"
              className="border-none bg-transparent shadow-none p-0 focus-visible:ring-0 text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* REGION LIST */}
      {isLoading ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-60 w-full" />
          ))}
        </div>
      ) : filteredInternetPackages?.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {filteredInternetPackages?.map((region: InternetPackageType) => (
            <InternetPackageCard key={region.id} {...region} />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground mt-6">
          Tidak ada paket internet ditemukan
        </p>
      )}
    </main>
  );
}
