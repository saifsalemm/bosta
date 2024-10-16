import { useRef } from "react";
import { getShipmmentData } from "../services/getShippmentData";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  setShipmentData,
  setShipmentError,
  setShipmentPending,
} from "../store/slices/shipmentSlice";

const useShipmentDetails = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { isPending, error } = useAppSelector((state) => state.shipment);
  const dispatch = useAppDispatch();

  const fetchShipmentData = async (shipmentId?: string) => {
    dispatch(setShipmentPending(true));
    try {
      const data = await getShipmmentData(
        shipmentId ?? inputRef.current!.value
      );
      dispatch(setShipmentData(data));
      dispatch(setShipmentPending(false));
    } catch (error) {
      const err = error as Error;
      dispatch(setShipmentError(err));
      dispatch(setShipmentPending(false));
    }
  };

  return {
    inputRef,
    isPending,
    error,
    fetchShipmentData,
  };
};

export default useShipmentDetails;
