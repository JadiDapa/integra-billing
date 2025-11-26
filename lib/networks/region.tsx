import { CreateRegionType, RegionType } from "../types/region";
import { axiosInstance } from "./axiosInstance";

export async function getAllRegions() {
  const { data } = await axiosInstance.get<RegionType[]>("/regions");
  return data;
}

export async function getRegionById(id: string) {
  const { data } = await axiosInstance.get<RegionType>("/regions/" + id);
  return data;
}

export async function createRegion(values: CreateRegionType) {
  const { data } = await axiosInstance.post("/regions", values);
  return data;
}

export async function updateRegion(id: string, values: CreateRegionType) {
  const { data } = await axiosInstance.put("/regions/" + id, values);
  return data;
}

export async function deleteRegion(id: string) {
  const { data } = await axiosInstance.delete("/regions/" + id);
  return data;
}
