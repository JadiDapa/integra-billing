import {
  CreateInternetPackageType,
  InternetPackageType,
} from "../types/internet-package";
import { axiosInstance } from "./axiosInstance";

export async function getAllInternetPackages() {
  const { data } = await axiosInstance.get<InternetPackageType[]>(
    "/internet-packages"
  );
  return data;
}

export async function getInternetPackageById(id: string) {
  const { data } = await axiosInstance.get<InternetPackageType>(
    "/internet-packages/" + id
  );
  return data;
}

export async function createInternetPackage(values: CreateInternetPackageType) {
  const { data } = await axiosInstance.post("/internet-packages", values);
  return data;
}

export async function updateInternetPackage(
  id: string,
  values: CreateInternetPackageType
) {
  const { data } = await axiosInstance.put("/internet-packages/" + id, values);
  return data;
}

export async function deleteInternetPackage(id: string) {
  const { data } = await axiosInstance.delete("/internet-packages/" + id);
  return data;
}
