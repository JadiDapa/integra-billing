import { NasType } from "./nas";
import { RegionType } from "./region";

export type CreateMikrotikType = {
  deviceName: string;
  nasId: string;
  connectionType: ConnectionType;
  ipAddress?: string;
  portAPI: number;
  username: string;
  password: string;
  description?: string;
  regionId: string;
  status: ActiveType;
};

export interface MikrotikType extends CreateMikrotikType {
  id: string;
  nas: NasType;
  region: RegionType;
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
