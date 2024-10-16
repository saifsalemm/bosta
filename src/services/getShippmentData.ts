import { endpoints } from "./endpoints";

export const getShipmmentData = async (shipmentId: string) => {
  const res = await fetch(endpoints.getShipmentData + shipmentId);
  if (!res.ok) throw new Error("Something went wrong");
  const data = await res.json();
  return data;
};
