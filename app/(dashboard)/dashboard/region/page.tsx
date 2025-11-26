"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { RefreshCcw, Search } from "lucide-react";

import PageHeader from "@/components/dashboard/PageHeader";
import CreateRegionDialog from "@/components/dashboard/region/CreateRegionDialog";
import RegionCard from "@/components/dashboard/region/RegionCard";
import StatisticCard from "@/components/dashboard/StatisticCard";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";

import { getAllRegions } from "@/lib/networks/region";
import { RegionType } from "@/lib/types/region";

export default function RegionPage() {
  const {
    data: regions,
    refetch,
    isFetching,
    isLoading,
  } = useQuery({
    queryFn: getAllRegions,
    queryKey: ["regions"],
  });

  const [search, setSearch] = useState("");

  const filteredRegions = regions?.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  const regionStats = [
    {
      title: "Total Wilayah",
      value: (regions?.length ?? 0).toString(),
      description: "Wilayah yang terdaftar",
    },
    {
      title: "Wilayah Aktif",
      value: (
        regions?.filter((r: RegionType) => r.status === "active").length ?? 0
      ).toString(),

      description: "Wilayah yang aktif",
    },
    {
      title: "Wilayah Non Aktif",
      value: (
        regions?.filter((r: RegionType) => r.status === "inactive").length ?? 0
      ).toString(),

      description: "Wilayah yang tidak aktif",
    },
  ];

  return (
    <main className="bg-background rounded-2xl w-full p-6 min-h-screen border space-y-8">
      {/* PAGE HEADER */}
      <div className="flex justify-between items-center">
        <PageHeader
          title="Wilayah"
          subtitle="Berikut daftar wilayah yang terdaftar"
        />

        <div className="flex gap-3">
          <CreateRegionDialog />

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
              placeholder="Cari Wilayah"
              className="border-none bg-transparent shadow-none p-0 focus-visible:ring-0 text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* REGION LIST */}
      {isLoading ? (
        // ⏳ Skeleton loading
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-60 w-full" />
          ))}
        </div>
      ) : filteredRegions?.length ? (
        // ✅ Content
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {filteredRegions?.map((region: RegionType) => (
            <RegionCard key={region.id} {...region} />
          ))}
        </div>
      ) : (
        // ❌ Empty state
        <p className="text-muted-foreground mt-6">
          Tidak ada wilayah ditemukan
        </p>
      )}
    </main>
  );
}
