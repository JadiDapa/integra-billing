import { MikrotikType } from "./mikrotik";
import { RegionType } from "./region";

export type CreateNasType = {
  name: string;
  description?: string;
  connectionType: ConnectionType;
  publicIP?: string;
  regionId: string;
  status: ActiveType;
};

export interface NasType extends CreateNasType {
  id: string;
  region: RegionType;
  mikrotiks: MikrotikType[];
  createdAt: Date;
  updatedAt: Date;
}

export enum ConnectionType {
  VPN = "VPN",
  IP_PUBLIK = "IP_PUBLIK",
}

export enum ActiveType {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}
