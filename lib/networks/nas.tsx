import { CreateNasType, NasType } from "../types/nas";
import { axiosInstance } from "./axiosInstance";

export async function getAllNAS() {
  const { data } = await axiosInstance.get<NasType[]>("/nas");
  return data;
}

export async function getNASById(id: string) {
  const { data } = await axiosInstance.get<NasType>("/nas/" + id);
  return data;
}

export async function createNAS(values: CreateNasType) {
  const { data } = await axiosInstance.post("/nas", values);
  return data;
}

export async function updateNAS(id: string, values: CreateNasType) {
  const { data } = await axiosInstance.put("/nas/" + id, values);
  return data;
}

export async function deleteNAS(id: string) {
  const { data } = await axiosInstance.delete("/nas/" + id);
  return data;
}
