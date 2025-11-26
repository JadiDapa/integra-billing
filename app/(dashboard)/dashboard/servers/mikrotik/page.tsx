"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { RefreshCcw, Search } from "lucide-react";

import PageHeader from "@/components/dashboard/PageHeader";
import StatisticCard from "@/components/dashboard/StatisticCard";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";

import { getAllMikrotiks } from "@/lib/networks/mikrotik";
import { MikrotikType } from "@/lib/types/mikrotik";
import MikrotikCard from "@/components/dashboard/servers/mikrotik/MikrotikCard";
import CreateMikrotikDialog from "@/components/dashboard/servers/mikrotik/CreateMikrotikDialog";

export default function MikrotikPage() {
  const {
    data: mikrotik,
    refetch,
    isFetching,
    isLoading,
  } = useQuery({
    queryFn: getAllMikrotiks,
    queryKey: ["mikrotiks"],
  });

  const [search, setSearch] = useState("");

  const filteredMikrotik = mikrotik?.filter((r) =>
    r.deviceName.toLowerCase().includes(search.toLowerCase())
  );

  const mikrotikStats = [
    {
      title: "Total Mikrotik Server",
      value: (mikrotik?.length ?? 0).toString(),
      description: "Mikrotik Server yang terdaftar",
    },
    {
      title: "Mikrotik Server Aktif",
      value: (
        mikrotik?.filter((r: MikrotikType) => r.status === "ACTIVE").length ?? 0
      ).toString(),

      description: "Mikrotik Server yang aktif",
    },
    {
      title: "Mikrotik Server Non Aktif",
      value: (
        mikrotik?.filter((r: MikrotikType) => r.status === "INACTIVE").length ??
        0
      ).toString(),

      description: "Mikrotik Server yang tidak aktif",
    },
  ];

  return (
    <main className="bg-background rounded-2xl w-full p-6 min-h-screen border space-y-8">
      {/* PAGE HEADER */}
      <div className="flex justify-between items-center">
        <PageHeader
          title="Mikrotik Server"
          subtitle="Berikut daftar wilayah yang terdaftar"
        />

        <div className="flex gap-3">
          <CreateMikrotikDialog />

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
        {mikrotikStats.map((stat) => (
          <StatisticCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* SEARCH BAR */}
      <div>
        <div className="w-full bg-card border p-2 rounded-2xl flex justify-between items-center px-6">
          <div className="flex items-center gap-3 w-[400px] border bg-card px-4 py-1 rounded-full">
            <Search />
            <Input
              placeholder="Cari Mikrotik Server"
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
      ) : filteredMikrotik?.length ? (
        // ✅ Content
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {filteredMikrotik?.map((mikrotik: MikrotikType) => (
            <MikrotikCard key={mikrotik.id} {...mikrotik} />
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
