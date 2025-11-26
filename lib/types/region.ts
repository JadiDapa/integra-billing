export interface CreateRegionType {
  name: string;
  code: string;
  status: "active" | "inactive";
  customers: number;
  revenue: number;
  workers: number;
  province: string;
  city: string;
  district: string;
  village: string;
  phone: string;
}

export interface RegionType extends CreateRegionType {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum Role {
  STUDENT = "STUDENT",
  LECTURER = "LECTURER",
  ADMIN = "ADMIN",
}
