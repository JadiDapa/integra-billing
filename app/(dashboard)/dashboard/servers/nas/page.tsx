"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { RefreshCcw, Search } from "lucide-react";

import PageHeader from "@/components/dashboard/PageHeader";
import StatisticCard from "@/components/dashboard/StatisticCard";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";

import { getAllNAS } from "@/lib/networks/nas";
import { NasType } from "@/lib/types/nas";
import NASCard from "@/components/dashboard/servers/nas/NASCard";
import CreateNASDialog from "@/components/dashboard/servers/nas/CreateNASDialog";

export default function NASPage() {
  const {
    data: nas,
    refetch,
    isFetching,
    isLoading,
  } = useQuery({
    queryFn: getAllNAS,
    queryKey: ["nas"],
  });

  const [search, setSearch] = useState("");

  const filteredNAS = nas?.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  const nasStats = [
    {
      title: "Total NAS Server",
      value: (nas?.length ?? 0).toString(),
      description: "NAS Server yang terdaftar",
    },
    {
      title: "NAS Server Aktif",
      value: (
        nas?.filter((r: NasType) => r.status === "ACTIVE").length ?? 0
      ).toString(),

      description: "NAS Server yang aktif",
    },
    {
      title: "NAS Server Non Aktif",
      value: (
        nas?.filter((r: NasType) => r.status === "INACTIVE").length ?? 0
      ).toString(),

      description: "NAS Server yang tidak aktif",
    },
  ];

  return (
    <main className="bg-background rounded-2xl w-full p-6 min-h-screen border space-y-8">
      {/* PAGE HEADER */}
      <div className="flex justify-between items-center">
        <PageHeader
          title="NAS Server"
          subtitle="Berikut daftar wilayah yang terdaftar"
        />

        <div className="flex gap-3">
          <CreateNASDialog />

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
        {nasStats.map((stat) => (
          <StatisticCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* SEARCH BAR */}
      <div>
        <div className="w-full bg-card border p-2 rounded-2xl flex justify-between items-center px-6">
          <div className="flex items-center gap-3 w-[400px] border bg-card px-4 py-1 rounded-full">
            <Search />
            <Input
              placeholder="Cari NAS Server"
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
      ) : filteredNAS?.length ? (
        // ✅ Content
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {filteredNAS?.map((nas: NasType) => (
            <NASCard key={nas.id} {...nas} />
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
