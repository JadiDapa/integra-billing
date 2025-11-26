import { RegionStatus } from "@/generated/prisma";
import { RegionType } from "./region";

export type CreateInternetPackageType = {
  name: string;
  speedType: InternetPackageSpeedType;
  downloadSpeed: string;
  uploadSpeed: string;
  activeperiod: ActivePeriodeType;
  period?: string | null;
  providerPrice: string;
  resellerPrice: string;
  regionId: string;
  status: RegionStatus;
};

export interface InternetPackageType extends CreateInternetPackageType {
  id: string;
  region: RegionType; // assuming Region type exists
  createdAt: Date;
  updatedAt: Date;
}

export enum InternetPackageSpeedType {
  FIX = "FIX",
  BURST = "BURST",
  STATIC = "STATIC",
}

export enum ActivePeriodeType {
  FIX = "FIX",
  ACTIVE_TIME = "ACTIVE_TIME",
}
