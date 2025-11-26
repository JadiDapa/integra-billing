import { CreateMikrotikType, MikrotikType } from "../types/mikrotik";
import { axiosInstance } from "./axiosInstance";

export async function getAllMikrotiks() {
  const { data } = await axiosInstance.get<MikrotikType[]>("/mikrotiks");
  return data;
}

export async function getMikrotikById(id: string) {
  const { data } = await axiosInstance.get<MikrotikType>("/mikrotiks/" + id);
  return data;
}

export async function createMikrotik(values: CreateMikrotikType) {
  const { data } = await axiosInstance.post("/mikrotiks", values);
  return data;
}

export async function updateMikrotik(id: string, values: CreateMikrotikType) {
  const { data } = await axiosInstance.put("/mikrotiks/" + id, values);
  return data;
}

export async function deleteMikrotik(id: string) {
  const { data } = await axiosInstance.delete("/mikrotiks/" + id);
  return data;
}
